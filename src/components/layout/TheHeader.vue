<template>
  <div class="header">
    <h1 class="padding">Where in the world?</h1>
    <div class="padding mode">
      <i class="far fa-moon"></i>
      <p>Dark Mode</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  width: 100%;
  height: 5rem;
  background-color: #fff;
  box-shadow: 0 0.3px 10px 0.1px rgb(209, 209, 209);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Nunito Sans", sans-serif;
}

.padding {
  padding: 50px;
}

.mode {
  display: flex;
  gap: 10px;
}
</style>
