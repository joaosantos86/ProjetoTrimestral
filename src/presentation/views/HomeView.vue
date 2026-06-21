<script setup>
import ProductList from "@/components/products/ProductLIst.vue";

</script>

<template>
  <section class="conteiner-destaque">
    <div class="conteudo-destaque">
      <span class="etiqueta-destaque">Produto Destaque</span>

      <h1 class="titulo-destaque">Fone Bluetooth IPX8</h1>

      <p class="descricao-destaque">
        Experimente a verdadeira liberdade sonora. Desenvolvido com tecnologia IPX8
        totalmente resistente à água, ele acompanha seu ritmo nos treinos mais intensos
        e debaixo de chuva, oferecendo até 8 horas contínuas de bateria de alta fidelidade.
      </p>

      <button class="botao-destaque">Ver detalhes do produto</button>
    </div>

    <div class="envelope-imagem">
      <img src="/headphone1.png" alt="Fone Bluetooth IPX8" class="imagem-destaque" />
    </div>
  </section>
  <section class="secao-mais-vendidos">
    <div class="cabecalho-secao">
      <h2 class="titulo-secao">Mais Vendidos</h2>
      <p class="subtitulo-secao">Os produtos favoritos dos nossos clientes</p>
    </div>

    <div class="grade-produtos">
      <ProductList />
    </div>
  </section>
</template>

<style scoped>
.conteiner-destaque {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 1vw;
  gap: 4vw;
  min-height: 70vh;
  background-color: #ffffff;
  font-family: sans-serif;
}

.conteudo-destaque {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.etiqueta-destaque {
  border: 1px solid #2563eb;
  color: #2563eb;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 2rem;
}

.titulo-destaque {
  font-size: 3rem;
  font-weight: 700;
  color: #2b2b2b;
  margin: 0 0 1.5rem 0;
  line-height: 1.2;
}

.descricao-destaque {
  font-size: 1.05rem;
  color: #666666;
  line-height: 1.6;
  margin: 0 0 2.5rem 0;
  max-width: 500px;
}

.botao-destaque {
  background-color: #2563eb;
  color: #ffffff;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.botao-destaque:hover {
  background-color: #2563eb;
}

.envelope-imagem {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.imagem-destaque {
  max-width: 100%;
  height: auto;
  max-height: 450px;
  object-fit: contain;
  filter: drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.15));
}

.secao-mais-vendidos {
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  font-family: sans-serif;
}

.cabecalho-secao {
  text-align: center;
  margin-bottom: 3rem;
}

.titulo-secao {
  font-size: 2.2rem;
  color: #2b2b2b;
  margin: 0 0 0.5rem 0;
  font-weight: 700;
  position: relative;
  display: inline-block;
}


</style>
