import { getCustomRepository, Repository } from 'typeorm';
import { Setting } from '../Entities/Setting';
import { SettingsRepository }from '../Repositories/SettingsRepository'

interface ISettingCreate{
    chat: boolean,
    username: string
}

class SettingService {
    private settingsRepository: Repository<Setting>

    constructor() {
        this.settingsRepository = getCustomRepository(SettingsRepository)
    }
    async create( { chat, username }:ISettingCreate) {
        const userAlreadyExists = await this.settingsRepository.findOne({
            username
        })

        if(userAlreadyExists) {
            throw new Error("User already exists!")
        }
        const settings = this.settingsRepository.create({
            chat,
            username
        })
    
        await this.settingsRepository.save(settings)

        return settings;
    }
    

}

export { SettingService }