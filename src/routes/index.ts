import {createWebHashHistory, createRouter, type RouteRecordRaw} from 'vue-router'
import home from '@views/_home/index.vue'
import _layout from '@views/_layout/index.vue'

const routes: RouteRecordRaw[] = [{
        path: '/home',
        name: 'home',
        component: home
    },{
        path: '/',
        name: '首页',
        component: _layout
    },
    // 添加404处理路由
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
            component: () => import('@views/_error/index.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


export default router

