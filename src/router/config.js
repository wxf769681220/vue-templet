const Index = () => import('components/index')
const Register = () => import('components/module/register')

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: Index
  },
  {
    path: '/register',
    component: Register
  }
]

export default routes
