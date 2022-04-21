import { createRouter, createWebHistory } from "vue-router"
// import Home from "./pages/Home"
import ManagerUser from "../components/PageWebsite/PageWrapper/Content/ManagerUser.vue"
import ManagerPost from "../components/PageWebsite/PageWrapper/Content/ManagerPost.vue"
import ManagerProject from "../components/PageWebsite/PageWrapper/Content/ManagerProject.vue"
import ManagerCustomer from "../components/PageWebsite/PageWrapper/Content/ManagerCustomer.vue"
import ManagerService from "../components/PageWebsite/PageWrapper/Content/ManagerService.vue"
import ErrorLogin from "../ErrorLogin"
// import ErrorBug from "./components/ErrorBug"
// import Sidebar from "./components/SideBar/SideBar"
import Login from "../Login"
import TestTable from "../TestTable.vue"

import store from "../Store/index"


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
        component: Login,
    },
    {
        name: 'error',
        path: "/error",
        component: ErrorLogin,
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    let routerAuthCheck = store.getters.Userlogin.userIsAuthorized;
    console.log(store.getters.Userlogin.userIsAuthorized)

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