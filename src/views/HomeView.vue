<template>
<section class="banner">
  <div class="content">
    <h1>Compre no melhor petshop de SFS.</h1>
    <p>Entre em contato pelo whatsapp ou no site e compre a melhor comida pro seu pet.</p>
    <button>Ver opções</button>
  </div>
  <div class="img">
    <img src="" alt="Foto cachorro e gato." width="800px" height="500px">
  </div>
</section>
<section class="principais-produtos">
  <h1>Mais vendidos</h1>
</section>
</template>
<style scoped>
.banner {
  min-height: 70vh;
  display: flex;
  align-items: center;
  padding: 80px 10%;
  color: black;
  font-family: 'Poppins';
}

.content {
  max-width: 600px;
}

.content h1 {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  line-height: 1.1;
  margin-bottom: 20px;
}

.content p {
  font-size: 1.2rem;
  line-height: 1.6;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 32px;
}

.content button {
  border: none;
  background: #ff8c00;
  color: white;
  padding: 16px 32px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s ease-out;
}

.content button:hover {
  transform: translateX(4px);
}

</style>
