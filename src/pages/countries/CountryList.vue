<template>
  <div class="container">
    <div class="flex">
      <country-search></country-search>
      <!-- <country-dropdown></country-dropdown> -->
    </div>
    <country-card></country-card>
  </div>
</template>

<style scoped>
.container {
  padding: 50px 70px;
}
.flex {
  display: flex;
  justify-content: space-between;
}
</style>
