import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";

// plyr
import VuePlyr from "vue-plyr";
import "vue-plyr/dist/vue-plyr.css";

// PrimeVue
import PrimeVue from "primevue/config";
import "primeicons/primeicons.css ";
import "primevue/resources/primevue.min.css ";
import "primevue/resources/themes/saga-blue/theme.css ";

//primevue components
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Password from "primevue/password";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);
app.use(VuePlyr);

app.component("InputText", InputText);
app.component("Button", Button);
app.component("PasswordInput", Password);
app.mount("#app");
