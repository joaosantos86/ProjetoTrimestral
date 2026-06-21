## Architecture - Domain Driven Design (DDD)

This project applies DDD architecture as a study practice.
Since it's a small e-commerce school project, some DDD concepts
are simplified to avoid over-engineering.

## Project Structure

```
src/
├── domains/                         # Business logic layer, framework-agnostic
│   ├── catalog/                     # Product domain
│   │   ├── data/                    # Raw static data
│   │   │   └── products.js          # Products raw data
│   │   ├── entities/                # Business rules and data contracts
│   │   │   └── Product.js           # Product entity with validations and behaviors
│   │   └── services/                # Domain operations
│   │       └── catalogService.js    # Processes and delivers products from raw data
│   ├── cart/                        # Cart domain
│   │   ├── entities/                # Business rules and data contracts
│   │   │   └── Cart.js              # Cart entity with add, remove and total logic
│   │   └── services/                # Domain operations
│   │       └── cartService.js       # Handles cart persistence on localStorage
│   └── address/                     # Address domain
│       ├── entities/                # Business rules and data contracts
│       │   └── Address.js           # Address entity with fields contract
│       └── services/                # Domain operations
│           └── cepService.js        # Fetches address data from ViaCEP API
├── application/                     # Orchestrates domains and infrastructure
│   └── stores/                      # Pinia stores, one per domain
│       ├── catalogStore.js          # Manages products state and search
│       ├── cartStore.js             # Manages cart state and localStorage sync
│       └── addressStore.js          # Manages address state and CEP fetching
├── presentation/                    # Everything Vue related
│   ├── views/                       # Page-level components tied to routes
│   │   ├── HomeView.vue             # Landing page
│   │   ├── CatalogView.vue          # Products listing page
│   │   ├── CartView.vue             # Cart page
│   │   ├── CheckoutView.vue         # Checkout page with address and order summary
│   │   └── ProductDetailView.vue    # Single product detail page
│   ├── components/                  # Reusable UI components organized by domain
│   │   ├── catalog/                 # Catalog related components
│   │   │   ├── ProductCard.vue      # Single product card UI
│   │   │   └── ProductList.vue      # Renders list of ProductCards
│   │   ├── cart/                    # Cart related components
│   │   │   ├── CartItem.vue         # Single cart item UI
│   │   │   └── CartSummary.vue      # Cart totals and summary UI
│   │   ├── checkout/                # Checkout related components
│   │   │   └── AddressForm.vue      # CEP input form with auto address fill
│   │   └── layout/                  # Global layout components
│   │       └── AppHeader.vue        # Top navigation header
│   └── composables/                 # Bridge between Vue components and stores
│       ├── useCatalog.js            # Exposes catalog state and actions to views
│       ├── useCart.js               # Exposes cart state and actions to views
│       └── useAddress.js            # Exposes address state and actions to views
├── router/                          # Vue Router configuration
│   └── index.js                     # Route definitions and navigation guards
└── shared/                          # Cross-domain utilities
    └── utils/                       # Helper functions with no specific domain
        └── currencyUtils.js         # Currency formatting helpers
```

## Architecture Layers

### Domains
Contains all business rules and logic. This layer is completely framework-agnostic,
meaning it never changes regardless of whether the project uses Vue, React or any other framework.

### Application
Orchestrates the domains for the application. This is where the Pinia stores live,
connecting the business rules from the domains to the presentation layer.

### Presentation
Everything Vue related: `views`, `components`, `composables` and so on.
This layer consumes the stores through composables and is responsible only for rendering the UI.

### Shared
Reusable functions and utilities that do not belong to any specific domain.
Example: price formatting with `currencyUtils.js`.

## Domains

### Catalog
Represents the product listing of the store. Responsible for storing raw product data,
defining what a product is and how it behaves, and delivering processed products to the application.

| File | Responsibility |
|---|---|
| `products.js` | Raw static product data |
| `Product.js` | Product entity with validations and behaviors such as formatted price |
| `catalogService.js` | Processes raw data through the Product entity and delivers it to the store |

### Cart
Represents the shopping cart. Responsible for all cart business rules such as
adding, removing and updating items, calculating totals and persisting cart state on localStorage.

| File | Responsibility |
|---|---|
| `Cart.js` | Cart entity with add, remove, update and total logic |
| `cartService.js` | Handles cart persistence on localStorage |

### Address
Represents the delivery address. Responsible for fetching and storing address data
based on a ZIP code (CEP) through the ViaCEP API.

| File | Responsibility |
|---|---|
| `Address.js` | Address entity defining the fields contract |
| `cepService.js` | Fetches address data from the ViaCEP external API |

## Data Flow

```
        View
         │
         ▼
    Composable
         │
         ▼
       Store
         │
         ▼
      Service
         │
         ▼
   Entity / Data
```

### Practical example per domain

**Catalog**
```
CatalogView.vue
       │
       ▼
 useCatalog.js
       │
       ▼
catalogStore.js
       │
       ▼
catalogService.js
       │
       ▼
Product.js + products.js
```

**Cart**
```
CartView.vue
       │
       ▼
  useCart.js
       │
       ▼
 cartStore.js
       │
       ▼
   Cart.js
       │
       ▼
 localStorage
```

**Address**
```
CheckoutView.vue
       │
       ▼
 useAddress.js
       │
       ▼
addressStore.js
       │
       ▼
 cepService.js
       │
       ▼
  ViaCEP API
```

## Technical Decisions

### No TypeScript
The project is simple and small enough that plain JavaScript is sufficient.
Adding TypeScript would increase complexity without meaningful benefit at this scale.

### No `infrastructure/http` layer
The project has only one external API call (ZIP code lookup).
Creating a full HTTP client layer would be over-engineering for a single endpoint.

### `cartService.js` inside the store
Since the project has no user backend, the cart only needs to persist on localStorage.
Moving this logic into the store keeps things simple without losing the separation of concerns.

### Correios API for ZIP code lookup
The official Brazilian postal service API was chosen for ZIP code lookups
as it is free, reliable and requires no authentication.

## Conventions

### File naming
- Components and Views use `PascalCase` - example: `ProductCard.vue`, `CartView.vue`
- Composables, services, stores and utilities use `camelCase` - example: `cartStore.js`, `cepService.js`

### Composables
All composables must start with `use` - example: `useCart.js`, `useCatalog.js`, `useAddress.js`

### Stores
One store per domain. Stores must never be accessed directly from views,
always through their corresponding composable.

### Views
Views must never import or call a store directly.
All state and actions must be consumed through composables.

### Components
Components are organized by domain inside `presentation/components/`.
A component must never contain business logic, only UI rendering and event emitting.

### Domains
Domain files must never import anything from `presentation/` or `application/`.
The domain layer must remain framework-agnostic and independent.

---

> This document will be updated as the project evolves.