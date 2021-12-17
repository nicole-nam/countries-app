<template>
  <div class="grid">
    <div v-for="(country, index) in list" :key="index">
      <div class="card">
        <img :src="country.flags.svg" alt="Avatar" style="width: 100%" />
        <div class="container">
          <h4>
            <b> {{ country.name.common }}</b>
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      list: null,
    };
  },
  mounted() {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => (this.list = response.data));
  },
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 100%;
}

.container {
  padding: 2px 16px;
}
</style>
