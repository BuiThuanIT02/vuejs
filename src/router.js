import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/home.vue";
import TransactionsApp from "./pages/transaction.vue";
import TransactionDetail from "./pages/transaction-detail.vue";
import SanPhamApp from "./pages/sanpham.vue";
import NotFound from "./pages/404.vue";
const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/transaction",
    name: "transaction-router",
    component: TransactionsApp,
  },
  {
    path: "/ts",
    redirect: "/transaction", // điều hg
  },
  {
    path: "/transaction/:id",
    name: "transaction-detail-router",
    component: TransactionDetail,
  },
  {
    path: "/san-pham",
    component: SanPhamApp,
  },
  {
    path: "/:pathMatch(.*)*", // tất cả các link chưa setup
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
