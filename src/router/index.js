import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'

Vue.use(Router)




// 贷款大全
import loan from '@/components/loan/loan'
// 贷款详情
import details from '@/components/loan/details'

// 消息
import Chat from '@/components/News/Chat'

// 关于我们
import Mine from '@/components/Mine/Mine'
import AboutUs from '@/components/Mine/AboutUs'
import Privacy from '@/components/Mine/Privacy'
import proposal from '@/components/Mine/proposal'
import changeName from '@/components/Mine/changeName'
import account from '@/components/Mine/account'
import Settings from '@/components/Mine/Settings'
import modify from '@/components/Mine/modify'


// 登陆注册

import Login from '@/components/Login/Login'
import register from '@/components/Login/register'



export default new Router({
  routes: [{
      path: '/',
      name: Home,
      component: Home
    }, {
      path: '/loan',
      name: loan,
      component: loan
    },
    {
      path: '/details',
      name: details,
      component: details
    },
    {
      path: '/AboutUs',
      name: AboutUs,
      component: AboutUs
    },
    {
      path: '/Chat',
      name: Chat,
      component: Chat
    }, {
      path: '/Mine',
      name: Mine,
      component: Mine
    }, {
      path: '/Privacy',
      name: Privacy,
      component: Privacy
    }, {
      path: '/proposal',
      name: proposal,
      component: proposal
    }, {
      path: '/changeName',
      name: changeName,
      component: changeName
    },{
      path: '/account',
      name: account,
      component: account
    },
    {
      path: '/Settings',
      name: Settings,
      component: Settings
    }, {
      path: '/modify',
      name: Settings,
      component: modify
    }, {
      path: '/Login',
      name: Login,
      component: Login
    }, {
      path: '/register',
      name: register,
      component: register
    }
  ]
})
