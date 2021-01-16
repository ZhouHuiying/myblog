import Vue from 'vue';
import router from 'vue-router';

Vue.use(router);

export default new router({
    routes: [
        {
            path: '/',
            component: () =>import('../src/views/homePage.vue')
        },
        {
            path: '/index',
            name: 'index',
            component: () =>import('../src/views/main/index.vue'),
            children: [
                {
                    path: '/article1',
                    name: 'article1',
                    component: () =>import('../src/views/page/article1.vue'),
                }
            ]
        },
    ]
})