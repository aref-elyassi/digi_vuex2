import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import Rules from '@/views/Rules.vue'
import About from '@/views/About.vue'
import SignUp from '@/components/SignUp.vue'
import Questions from '@/views/Questions.vue'
import Products from '@/views/Products/Products.vue'
import ShowProduct from '@/views/Products/ShowProduct.vue'
import TemplatePRoduct from '@/views/Products/TemplateProduct.vue'
import Represent from '@/views/Represent/Represent.vue'
import ShowRepresent from '@/views/Represent/ShowRepresent.vue'
import TemplateRepresent from '@/views/Represent/TemplateRepresent.vue'
import Card from '@/views/Card.vue'
import Interested from '@/views/Interested.vue'

const routes = [
 {path:'/login',name:'Login',component:Login},
 {path:'/',name:'Home',component:Home},
 {path:'/rules',name:'Rules',component:Rules},
 {path:'/about',name:'About',component:About},
  {path:'/signup',name:'Signup',component:SignUp},
  {path:'/questions',name:'Questions',component:Questions},
  {path:'/card',name:'Card',component:Card},
{path:'/interested',name:'Interested',component:Interested},


  {path:'/products',name:'TemplateProducts',component:TemplatePRoduct,children:[
    {path:'',name:'Product',component:Products},
    {path:':id',name:'productId',component:ShowProduct}
  ]},

  {path:'/represent',name:'TemplateRepresent',component:TemplateRepresent,children:[
    {path:'',name:'Represent',component:Represent},
    {path:':id',name:'representId',component:ShowRepresent}
  ]},
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
