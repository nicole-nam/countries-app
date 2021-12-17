<template>
  <div class="grid">
    <div v-for="(country, index) in list" :key="index">
      <div class="card">
        <img :src="country.flag" alt="Avatar" style="width: 100%" />
        <div class="container">
          <h4>
            <b> {{ country.name }}</b>
          </h4>
          <ul>
            <li>{{ country.population }}</li>
            <li>{{ country.region }}</li>
            <li v-if="country.capital">{{ country.capital[0] }}</li>
          </ul>
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
  methods: {
    sortArray(res) {
      let country = [];

      for (var i = 0; i < res.length; i++) {
        var item = {
          name: res[i].name.common,
          population: res[i].population,
          region: res[i].region,
          capital: res[i].capital,
          flag: res[i].flags.svg,
        };
        country.push(item);
      }
      country.sort((a, b) => (a.name > b.name ? 1 : -1));
      this.list = country;
      console.log("country", country);
    },
  },
  mounted() {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => this.sortArray(response.data));
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
