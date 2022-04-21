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
        component: TestTable,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: "/user",
        component: ManagerUser,
        meta: {
            requiresAuth: true,
        }
    },

    {
        path: "/post",
        component: ManagerPost,
        meta: {
            requiresAuth: true,
        }
    },

    {
        path: "/project",
        component: ManagerProject,
        meta: {
            requiresAuth: true,
        }
    },

    {
        path: "/customer",
        component: ManagerCustomer,
        meta: {
            requiresAuth: true,
        }
    },

    {
        path: "/service",
        component: ManagerService,
        meta: {
            requiresAuth: true,
        }
    },
    {
        name: 'login',
        path: "/login",
        component: Login
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export let routerAuthCheck = true;
// console.log(this.$store.getters.Userlogin.userIsAuthorized)
router.beforeEach((to, from, next) => {

    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (routerAuthCheck) {
            next();
        }
        else {
            router.replace('/login');
        }
    }
    else {
        next();
    }
})


export default router;