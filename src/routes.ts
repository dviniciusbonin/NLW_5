import { Router } from 'express'
import { SettingController } from './Controllers/SettingController'


const routes = Router()
const settingController = new SettingController()
routes.post("/settings", settingController.create)

export { routes }