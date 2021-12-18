<template>
  <select v-model="selected">
    <option :value="null">&nbsp; &nbsp; Filter by Region</option>
    <option v-for="option in options" :value="option.value" :key="option">
      {{ option.text }}
    </option>
  </select>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      selected: null,
      options: [
        { text: "Africa", value: "africa" },
        { text: "America", value: "america" },
        { text: "Asia", value: "asia" },
        { text: "Europe", value: "europe" },
        { text: "Oceania", value: "oceania" },
      ],
    };
  },
  watch: {
    selected(val) {
      if (val) {
        axios
          .get(`https://restcountries.com/v3.1/region/${val}`)
          .then((response) => (this.$store.state.item = response.data));
      } else {
        this.$store.state.item = null;
      }
    },
  },
};
</script>

<style scoped>
select {
  border: none;
  background-color: #f5f5f5;
  border-radius: 5px;
  width: 15%;
  color: rgb(110, 110, 110);
}
</style>
