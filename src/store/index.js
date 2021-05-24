import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) 

const store = new Vuex.Store({
    //state中存放的就是全局共享的对象
    state: {
        blogItemList: [
            {
                title: '深拷贝&&浅拷贝',
                time: '2020-06-30',
                tag: 'javaScript'
            },
            {
                title: '原生折线图',
                time: '2020-06-15',
                tag: 'javaScript'
            },
            {
                title: '动态规划',
                time: '2020-06-01',
                tag: '算法'
            },
            {
                title: '图片懒加载',
                time: '2020-05-20',
                tag: 'javaScript'
            },
            {
                title: '解决ios13键盘事件导致页面按钮失效的bug',
                time: '2020-05-03',
                tag: 'javaScript'
            }
        ]
    },  
    getters: {
        articleNum(state) {
            return state.blogItemList.length;
        }
    },
    mutations: {
        
    },
})

export default store