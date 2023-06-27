import { createRouter, createWebHistory } from "vue-router";
import EntryForm from "@/form/pages/EntryForm.vue";
import ResultsTable from "@/table/pages/ResultsTable.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: EntryForm,
    },
    {
      path: "/results",
      name: "results",
      component: ResultsTable,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: { name: "home" },
    },
  ],
});

export default router;
