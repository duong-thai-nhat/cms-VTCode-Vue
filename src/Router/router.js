import { createRouter, createWebHistory } from "vue-router"
// import Home from "./pages/Home"
import ManagerUser from "../components/PageWebsite/PageWrapper/Content/ManagerUser.vue"
import ManagerPost from "../components/PageWebsite/PageWrapper/Content/ManagerPost.vue"
import ManagerProject from "../components/PageWebsite/PageWrapper/Content/ManagerProject.vue"
import ManagerCustomer from "../components/PageWebsite/PageWrapper/Content/ManagerCustomer.vue"
import ManagerService from "../components/PageWebsite/PageWrapper/Content/ManagerService.vue"
// import ErrorBug from "./components/ErrorBug"
// import Sidebar from "./components/SideBar/SideBar"
import Login from "../Login"
import TestTable from "../TestTable.vue"


const routes = [
    {
        path: "/",
        component: TestTable
    },
    {
        path: "/user",
        component: ManagerUser
    },

    {
        path: "/post",
        component: ManagerPost
    },

    {
        path: "/project",
        component: ManagerProject
    },

    {
        path: "/customer",
        component: ManagerCustomer
    },

    {
        path: "/service",
        component: ManagerService
    },
    {
        path: "/login",
        component: Login
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;