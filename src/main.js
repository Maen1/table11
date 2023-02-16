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


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCxrYU2qaf1UIyR8KGgHz9EUBk5eNSNC9Y",
  authDomain: "table11-d23c6.firebaseapp.com",
  projectId: "table11-d23c6",
  storageBucket: "table11-d23c6.appspot.com",
  messagingSenderId: "525585382788",
  appId: "1:525585382788:web:12c4eb025c4cbf32ddb1d1",
  measurementId: "G-0LWGCC7GQP"
};


const appfb = initializeApp(firebaseConfig);
const analytics = getAnalytics(appfb);

const app = createApp(App);

app.use(router);

app.mount("#app");
