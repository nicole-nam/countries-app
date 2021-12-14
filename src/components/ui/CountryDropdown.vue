<template>
  <select v-model="selected">
    <option :value="null">Filter by Region</option>
    <option v-for="option in options" :value="option.value" :key="option">
      {{ option.text }}
    </option>
  </select>
</template>

<script>
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
};
</script>

<style scoped>
select {
  border: none;
  background-color: #f5f5f5;
  border-radius: 5px;
  width: 15%;
  color: rgb(122, 122, 122);
}
</style>
