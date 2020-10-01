import Home from "../components/views/Home.vue"
import Login from "../components/views/Login.vue"
import NotFound from '../components/views/404.vue'
import Confirmation from '../components/views/Confirmation.vue'
import Plug from '../components/views/Plug.vue'
import RegisterPro from '../components/views/RegisterPro.vue'
import Register from '../components/views/Register.vue'
import Result from '../components/views/Result.vue'

//member view
import User from '../components/views/member/User.vue'
import Profile from '../components/views/member/Profile.vue'
import Dashboard from '../components/views/member/Dashboard.vue'
import Edit from '../components/views/member/Edit.vue'
import Connection from '../components/views/member/Connection.vue'
import Appointment from '../components/views/member/Appointment.vue'
import Folder from '../components/views/member/Folder.vue'
import Agenda from '../components/views/member/Agenda.vue'

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
    
    },{
        path: '/register-pro',
        name: 'RegisterPro',
        component: RegisterPro,
        meta: {description: 'page inscription professionelle'}   
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {description: 'page inscription'}   
    },
    {
        path: '/confirm/:type',
        name: 'Confirmation',
        props: true,
        component: Confirmation,
        meta: {description: 'page de confirmation'}   
      
      },
    {
        path: '/result',
        name: 'Result',
        component: Result,
        meta: {description: 'page de resultat recherche'}   
      
      },
    {
        path: '/plug',
        name: 'Plug',
        component: Plug,
        meta: {description: 'fiche de l\'expert'}   
      
      },
    {
        path: '/expert_juridique',
        name: 'Expert',
        component: Plug,
        meta: {description: 'page de l\'expert juridique'}   
      
      }, 
      {
        path: '/user',
        component: User,
        children: [
          {
            path: 'dashboard',
            alias: '',
            component: Dashboard,
            name: 'Dashboard',
            meta: {description: 'Dashboard utilisateur'}
          }, {
            path: 'profile',
            component: Profile,
            name: 'Profile',
            meta: {description: 'Page pour modifier les informations de profil'}
          }, {
            path: 'edit/:type',
            component: Edit,
            name: 'Edit',
            props: true,
            meta: {description: 'Modifier le profil'}
          }, {
            path: 'connection',
            component: Connection,
            name: 'Connection',
            meta: {description: 'le réseau de l\'utilisateur'}
          }, {
            path: 'agenda',
            component: Agenda,
            name: 'Agenda',
            meta: {description: 'Gestion de l\'agenda'}
          }, {
            path: 'appointment',
            component: Appointment,
            name: 'Appointment',
            meta: {description: 'Gestion de rdv utilisateur'}
          }, {
            path: 'folder',
            component: Folder,
            name: 'FolderCustomer',
            meta: {description: 'Partage des documents'}
          }
        ]
      }, 
    {
        path: "*",
        name: "NotFound",
        component: NotFound,
        meta: {description: "page 404"}
      }

]
export default routes