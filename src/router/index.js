import { createRouter, createWebHistory } from 'vue-router'
const Avatar = () => import('../../docs/zh-cn/components/avatar.mdx')
const Badge = () => import('../../docs/zh-cn/components/badge.mdx')
const Button = () => import('../../docs/zh-cn/components/button.mdx')
const Capacity = () => import('../../docs/zh-cn/components/capacity.mdx')
const Breadcrumbs = () => import('../../docs/zh-cn/components/breadcrumbs.mdx')
const Card = () => import('../../docs/zh-cn/components/card.mdx')
const Checkbox = () => import('../../docs/zh-cn/components/checkbox.mdx')
const Code = () => import('../../docs/zh-cn/components/code.mdx')
const Dot = () => import('../../docs/zh-cn/components/dot.mdx')
const Layout = () => import('../../docs/zh-cn/components/layout.mdx')
const Link = () => import('../../docs/zh-cn/components/link.mdx')
const Loading = () => import('../../docs/zh-cn/components/loading.mdx')
const Radio = () => import('../../docs/zh-cn/components/radio.mdx')
const Snippet = () => import('../../docs/zh-cn/components/snippet.mdx')
const Spacer = () => import('../../docs/zh-cn/components/spacer.mdx')
const Switch = () => import('../../docs/zh-cn/components/switch.mdx')
const Toast = () => import('../../docs/zh-cn/components/toast.mdx')
const Modal = () => import('../../docs/zh-cn/components/modal.mdx')
const Input = () => import('../../docs/zh-cn/components/input.mdx')
const Install = () => import('../../docs/zh-cn/quickStart/install.mdx')
const Introduce = () => import('../../docs/zh-cn/quickStart/introduce.mdx')
const Colors = () => import('../../docs/zh-cn/themes/colors.mdx')

const routes = [
  { path: '/', redirect: { name: 'Introduce' } },
  { path: '/avatar', name: 'Avatar', component: Avatar },
  { path: '/badge', name: 'Badge', component: Badge },
  { path: '/button', name: 'Button', component: Button },
  { path: '/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/capacity', name: 'Capacity', component: Capacity },
  { path: '/card', name: 'Card', component: Card },
  { path: '/checkbox', name: 'Checkbox', component: Checkbox },
  { path: '/code', name: 'Code', component: Code },
  { path: '/dot', name: 'Dot', component: Dot },
  { path: '/layout', name: 'Layout', component: Layout },
  { path: '/link', name: 'Link', component: Link },
  { path: '/loading', name: 'Loading', component: Loading },
  { path: '/radio', name: 'Radio', component: Radio },
  { path: '/snippet', name: 'Snippet', component: Snippet },
  { path: '/spacer', name: 'Spacer', component: Spacer },
  { path: '/switch', name: 'Switch', component: Switch },
  { path: '/toast', name: 'Toast', component: Toast },
  { path: '/input', name: 'Input', component: Input },
  { path: '/modal', name: 'Modal', component: Modal },
  { path: '/install', name: 'Install', component: Install },
  { path: '/introduce', name: 'Introduce', component: Introduce },
  { path: '/colors', name: 'Colors', component: Colors },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})
export default router
