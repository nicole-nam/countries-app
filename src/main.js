import { createApp } from "vue";
import { createStore } from "vuex";
import vSelect from "vue-select";
import router from "./router.js";
import App from "./App.vue";

const store = createStore({
  state() {
    return {
      dark: false,
    };
  },
});

import CountrySearch from "./components/ui/CountrySearch.vue";
import CountryDropdown from "./components/ui/CountryDropdown.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();

const app = createApp(App);

app.use(router);
app.use(store);

app.component("font-awesome-icon", FontAwesomeIcon);
app.component("v-select", vSelect);
app.component("country-search", CountrySearch);
app.component("country-dropdown", CountryDropdown);

app.mount("#app");
