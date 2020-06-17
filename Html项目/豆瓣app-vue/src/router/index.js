import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import Home from '../../pages/home/home'
import Audio from '../../pages/audio/audio'
import Broadcast from '../../pages/broadcast/broadcast'
import Group from '../../pages/group/group'
import Mine from '../../pages/mine/mine'

import Movie from '../components/Movie'
import Book from '../components/Book'
import Cctv from '../components/Cctv'
import City from '../components/City'
import Music from '../components/Music'

import Con from '../components/content'
import Booktz from '../components/book-turn'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',

      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/audio',

      component: Audio,
      children:[
        {path:'/',component:Movie},
        {path:'movie',component:Movie},
        {path:'book',component:Book},
        {path:'cctv',component:Cctv},
        {path:'city',component:City},
        {path:'music',component:Music}
      ],
    },
    {
      path: '/broadcast',
      name: 'Broadcast',
      component: Broadcast
    },
    {
      path: '/group',
      name: 'Group',
      component: Group
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/content',
      name: 'Con',
      component: Con
    },
    {
      path: '/book-turn',
      name: 'Booktz',
      component: Booktz
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    },
 
  ]
})
