import { Router } from 'express'
import { SettingController } from './Controllers/SettingController'
import { UserController } from './Controllers/UserController'


const routes = Router()

const settingController = new SettingController()
const userController = new UserController()

routes.post("/settings", settingController.create)
routes.post("/users", userController.create)
export { routes }