<template>
  <div class="search-container">
    <i class="fa fa-search search-icon"></i>
    <input type="text" placeholder="Search for a country..." name="search" />
  </div>
</template>

<style scoped>
.search-container {
  position: relative;
  display: flex;
  min-width: 100px;
}
input {
  border: none;
  border-radius: 5px;
  height: 25px;
  width: 100%;
  padding: 20px 23px 20px 30px;
  outline: 0;
  background-color: #f5f5f5;
}

.search-icon {
  position: absolute;
  top: 12px;
  left: 8px;
  width: 14px;
}
</style>
