const moedaPais = 'BRL'
const idioma = 'pt-BR'

function formatarPreco(preco) {
  return Number(preco).toLocaleString(idioma, {
    style: 'currency',
    currency: moedaPais,
  })
}

export { formatarPreco }
