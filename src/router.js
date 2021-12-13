import { createRouter, createWebHistory } from "vue-router";

import CountryList from "./pages/countries/CountryList.vue";
import CountryDetail from "./pages/countries/CountryDetail.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "countries" },
    { path: "/countries", component: CountryList },

    {
      path: "/countries/:id",
      component: CountryDetail,
      props: true,
    },
  ],
});

export default router;
