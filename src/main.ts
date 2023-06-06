import { createApp } from 'vue'
import App from './App.vue'

//引入element-plus插件与样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 忽略当前文件ts类型的检测否则有红色提示(打包会失败)
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

// SVG插件配置
import 'virtual:svg-icons-register'

//引入自定义插件对象:注册整个项目全局组件
import gloalComponent from '@/components'

import '@/styles/index.scss'

// 引入路由
import router from './router'

const app = createApp(App)

app.use(ElementPlus, {
  locale: zhCn,
})

// 全局组件注册
//安装自定义插件
app.use(gloalComponent)
// 注册模板路由
app.use(router)
app.mount('#app')
