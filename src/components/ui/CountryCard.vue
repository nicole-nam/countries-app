<template>
  <div v-if="$store.state.item" class="grid">
    <!-- when there is search input  -->
    <div v-for="(country, index) in $store.state.item" :key="index">
      <div class="card">
        <img :src="country.flags.svg" alt="Avatar" style="width: 100%" />
        <div class="container">
          <h4>
            <b> {{ country.name.common }}</b>
          </h4>
          <ul>
            <li>
              Population:
              {{
                country.population
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }}
            </li>
            <li>Region: {{ country.region }}</li>
            <li v-if="country.capital">Capital: {{ country.capital[0] }}</li>
            <li v-else>There is no capital.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- default view -->
  <div v-else class="grid">
    <div v-for="(country, index) in list" :key="index">
      <div class="card">
        <img :src="country.flag" alt="Avatar" style="width: 100%" />
        <div class="container">
          <h4>
            <b> {{ country.name }}</b>
          </h4>
          <ul>
            <li>Population: {{ country.population }}</li>
            <li>Region: {{ country.region }}</li>
            <li v-if="country.capital">Capital: {{ country.capital[0] }}</li>
            <li v-else>There is no capital.</li>
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
          population: res[i].population
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
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
  margin-top: 50px;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 100%;
  border-radius: 5px;
}

.container {
  padding: 2px 16px;
}

img {
  width: 900px;
  height: 150px;
  object-fit: cover;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

ul {
  list-style-type: none;
}
</style>
