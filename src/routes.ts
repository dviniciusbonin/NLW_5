import { Router } from 'express'
import { MessageController } from './Controllers/MessageController'
import { SettingController } from './Controllers/SettingController'
import { UserController } from './Controllers/UserController'


const routes = Router()

const settingController = new SettingController()
const userController = new UserController()
const messageController = new MessageController()

routes.post("/settings", settingController.create)
routes.get("/settings/:username", settingController.findByUsername)
routes.put("/settings/:username", settingController.update)

routes.post("/users", userController.create)

routes.post("/messages", messageController.create)
routes.get("/messages/:id", messageController.showByUser)

export { routes }