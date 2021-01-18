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
                    path: '/techArticle1',
                    name: 'techArticle1',
                    component: () =>import('../src/views/page/tech/techArticle1.vue'),
                },
                {
                    path: '/lifeArticle1',
                    name: 'lifeArticle1',
                    component: () =>import('../src/views/page/life/lifeArticle1.vue'),
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
                    path: '/more',
                    name: 'more',
                    component: () =>import('../src/views/main/more.vue'),
                },
            ]
        },
    ]
})