import Vue from 'vue'
import Router from 'vue-router'

// import index from '../pages/index.vue'
import index from '../pages/index.vue'
import aboutUs from '../pages/aboutUs/aboutus.vue'
import produce from '../pages/produce/produce.vue'
import case_ from '../pages/case/case.vue'
import connectUs from '../pages/connectUs/connectUs.vue'
import serve from '../pages/serve/serve.vue'
import indexDetails from '../pages/indexDetails/indexDetails.vue'
import login from '../pages/login/login.vue'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: "首页",
            component: index,
            redirect: '/indexDetails',
            children: [
                {
                    path: 'indexDetails',
                    name: "首页",
                    component: indexDetails,
                },
                {
                    path: 'aboutUs',
                    name: "关于我们",
                    component: aboutUs,
                },
                {
                    path: 'produce',
                    name: "产品",
                    component: produce,
                },
                {
                    path: 'case',
                    name: "案例",
                    component: case_,
                },
                {
                    path: 'serve',
                    name: "服务",
                    component: serve,
                },
                {
                    path: 'connectUs',
                    name: "联系我们",
                    component: connectUs,
                }
            ]
        },
		{
			path:'/login',
			name:'登录',
			component:login,
		}

    ]
})
