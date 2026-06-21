import { cart, addItemToCart, removeItemFromCart, updateQuantity, getCartTotalPrice, getCartCount, clearCart } from "./cartUtils";

function showCart() {
    console.log("Itens no cart" + cart.value)
}
function divideLog() {
    console.log("-----------------------------------------------")
}

export function testCart() {
    // Informa o inicio e printa itens no carrinho, esperado []
    console.log("Iniciando teste das funcoes do cart")
    showCart()

    divideLog()

    // testa adicionar itens no carrinho e exibe
    console.log("Adicionando 2 itens")
    addItemToCart({
    id: 1,
    name: "Fone Bluetooth IPX8",
    description: "Resistente à água com 8h de bateria",
    price: 89.00,
    image: "",
    rating: 4.5,
    reviews: 121,
    category: "Sem Fio",
    brand: "JBL"
  })

  addItemToCart({
    id: 2,
    name: "Fone Over-Ear Premium",
    description: "Áudio de alta fidelidade com almofadas macias",
    price: 559.00,
    image: "",
    rating: 4.5,
    reviews: 98,
    category: "Over-Ear",
    brand: "Sony"
  })

  showCart()

  divideLog()

  // Testa remover item do carrinho e exibe
  console.log("removendo item de id 2 do carrinho")
  removeItemFromCart(2)
  showCart()

  divideLog()

  // Testa atualizar quantidade do item
  console.log("Adicionando 1 quantidade no item de id 1 do carrinho")
  updateQuantity(1)
  console.log("itens no carrinho: " + getCartCount())

  divideLog()
  
  // Testa obter o preco total do carrinho
  console.log("preco total: " + getCartTotalPrice())

  divideLog()

  // Limpa o carrinho e finaliza o teste
  console.log("Limpando o carrinho")
  clearCart()
  showCart()

  divideLog()

  console.log("Teste finalizado com sucesso")
}