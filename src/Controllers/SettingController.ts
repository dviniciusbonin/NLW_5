import {Request , Response} from 'express'
import { SettingService } from '../Services/SettingService'

class SettingController {

    async create(request: Request, response: Response) {

        const {chat , username} = request.body
        
        const settingService = new SettingService()

        try {
            const settings = await settingService.create({chat, username})
        
            return response.json(settings)
        }catch(error) {
            return response.status(400).json({
                message: error.message
            })
        }
    } 

    async findByUsername(request: Request, response: Response) {
        const { username } = request.params

        const settingsService = new SettingService()

        const settings = await settingsService.findByUsername(username)

        return response.json(settings)
    }

    async update(request: Request, response: Response) {
        const { username } = request.params
        const { chat } = request.body

        const settingsService = new SettingService()

        const settings = await settingsService.update(username, chat)
        
        return response.json(settings)
    }

}

export { SettingController }