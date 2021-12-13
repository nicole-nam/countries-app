<template>
  <div class="header">
    <h1 class="padding">Where in the world?</h1>
    <div class="padding" @click="toggle">
      <div class="mode" v-if="dark">
        <i class="far fa-sun"></i>
        <p>Light Mode</p>
      </div>
      <div class="mode" v-else>
        <i class="far fa-moon"></i>
        <p>Dark Mode</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dark: false,
    };
  },
  methods: {
    toggle() {
      this.dark = !this.dark;
    },
  },
};
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
  cursor: pointer;
}
</style>
