import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import 'tw-elements';
import "./assets/main.css";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init({
	offset: 100, // offset (in px) from the original trigger point
  	delay: 200, // values from 0 to 3000, with step 50ms
  duration: 2000, 

});

const app = createApp(App);

app.use(router);

app.mount("#app");
