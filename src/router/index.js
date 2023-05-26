import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import MakananView from "../views/MakananView.vue";
import DetailMakanan from "../views/DetailMakanan.vue";
import Keranjang from "../views/Keranjang.vue";
import PesananSukses from "../views/PesananSukses.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/makanan",
    name: "Makanan",
    component: MakananView,
  },
  {
    path: "/makanan/:id",
    name: "DetailMakanan",
    component: DetailMakanan,
  },
  {
    path: "/keranjang",
    name: "Keranjang",
    component: Keranjang,
  },
  {
    path: "/pesanan-sukses",
    name: "PesananSukses",
    component: PesananSukses,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
