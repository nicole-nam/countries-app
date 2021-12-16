<template>
  <div class="container">
    <country-search></country-search>
    <country-dropdown></country-dropdown>
  </div>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => console.log("response", response));
  },
};
</script>

<style scoped>
.container {
  padding: 50px 70px;
  display: flex;
  justify-content: space-between;
}
</style>
