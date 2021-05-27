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
            path: '/test',
            component: () =>import('../src/views/page/test/test.vue')
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
                    path: '/techArticle2',
                    name: 'techArticle2',
                    component: () =>import('../src/views/page/tech/techArticle2.vue'),
                },
                {
                    path: '/techArticle3',
                    name: 'techArticle3',
                    component: () =>import('../src/views/page/tech/techArticle3.vue'),
                },
                {
                    path: '/techArticle4',
                    name: 'techArticle4',
                    component: () =>import('../src/views/page/tech/techArticle4.vue'),
                },
                {
                    path: '/techArticle5',
                    name: 'techArticle5',
                    component: () =>import('../src/views/page/tech/techArticle5.vue'),
                },
                {
                    path: '/techArticle6',
                    name: 'techArticle6',
                    component: () =>import('../src/views/page/tech/techArticle6.vue'),
                },
                {
                    path: '/techArticle7',
                    name: 'techArticle7',
                    component: () =>import('../src/views/page/tech/techArticle7.vue'),
                },
                {
                    path: '/lifeArticle1',
                    name: 'lifeArticle1',
                    component: () =>import('../src/views/page/life/lifeArticle1.vue'),
                },
                {
                    path: '/lifeArticle2',
                    name: 'lifeArticle2',
                    component: () =>import('../src/views/page/life/lifeArticle2.vue'),
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