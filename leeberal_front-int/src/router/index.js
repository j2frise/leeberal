import Home from "../components/views/Home.vue"
import Login from "../components/views/Login.vue"
import NotFound from '../components/views/404.vue'
import Confirmation from '../components/views/Confirmation.vue'
import Plug from '../components/views/Plug.vue'
import Expert from '../components/views/Expert.vue'
import Search from '../components/views/Search.vue'

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {description: "page d'accueil"}
      },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {description: 'page connexion'}   
    
      },
    {
        path: '/confirm',
        name: 'Confirmation',
        component: Confirmation,
        meta: {description: 'page de confirmation'}   
      
      },
    {
        path: '/plug',
        name: 'Plug',
        component: Plug,
        meta: {description: 'fiche de l\'expert'}   
      
      },
    {
        path: '/expert',
        name: 'Expert',
        component: Expert,
        meta: {description: 'page de l\'expert juridique'}   
      
      },
    {
        path: '/search',
        name: 'Search',
        component: Search,
        meta: {description: 'page de recherche'}   
      
      },
    {
        path: "*",
        name: "NotFound",
        component: NotFound,
        meta: {description: "page 404"}
      }

]
export default routes