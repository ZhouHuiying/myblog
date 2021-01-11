import Vue from 'vue';
import router from 'vue-router';

Vue.use(router);

export default new router({
    routes: [
        {
            path: '/',
            component: () =>import('../src/components/test.vue')
        },
        {
            path: '/content',
            name: 'content',
            component: () =>import('../src/components/content.vue')
        },
    ]
})