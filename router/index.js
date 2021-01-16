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
                },
                {
                    path: '/list1',
                    name: 'list1',
                    component: () =>import('../src/views/main/list1.vue'),
                },
                {
                    path: '/list2',
                    name: 'list2',
                    component: () =>import('../src/views/main/list2.vue'),
                },
                {
                    path: '/list3',
                    name: 'list3',
                    component: () =>import('../src/views/main/list3.vue'),
                },
            ]
        },
    ]
})