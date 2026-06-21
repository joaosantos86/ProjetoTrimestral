import { useLocalStorage } from '@vueuse/core'

const cart = useLocalStorage('cart', [])

export function addItemToCart(item) {
  const existing = cart.value.find((produto) => produto.id === item.id)

  if (existing) {
    existing.quantity += 1
  } else {
    cart.value.push({ ...item, quantity: 1 })
  }
}

export function removeItemFromCart(idItem) {
  cart.value = cart.value.filter((item) => item.id !== idItem)
}

export function increaseItemQuantity(idItem) {
  const item = cart.value.find((produto) => produto.id === idItem)

  if (item) item.quantity += 1
}

export function decreaseItemQuantity(idItem) {
  const item = cart.value.find((produto) => produto.id === idItem)

  if (item && item.quantity > 1) {
    item.quantity -= 1
  }
}

export function updateQuantity(idItem) {
  const item = cart.value.find((produto) => produto.id === idItem)

  if (item) item.quantity += 1
}

export function getCartTotalPrice() {
  return cart.value.reduce((acc, item) => acc + item.price * item.quantity, 0)
}

export function getCartCount() {
  return cart.value.reduce((acc, item) => acc + item.quantity, 0)
}

export function clearCart() {
  cart.value = []
}

export { cart }
