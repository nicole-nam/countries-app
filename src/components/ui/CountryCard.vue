<template>
  <h1>country card</h1>
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
