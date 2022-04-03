import {ElInput,
  ElTable,ElTableColumn,ElForm,ElFormItem,ElButton,ElContainer,ElHeader,ElAside,ElMenu,ElSubmenu,ElMenuItem,ElMain} from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'

export default (app) => {
  app.use(ElButton)
  app.use(ElContainer)
  app.use(ElHeader)
  app.use(ElAside)
  app.use(ElMenu)
  app.use(ElSubmenu)
  app.use(ElMenuItem)
  app.use(ElForm)
  app.use(ElMain)
  app.use(ElFormItem)
  app.use(ElTable)
  app.use(ElTableColumn)
  app.use(ElInput)

}
