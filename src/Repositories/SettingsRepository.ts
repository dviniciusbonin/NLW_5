import { EntityRepository, Repository } from "typeorm";
import { Setting } from '../Entities/Setting'

@EntityRepository(Setting)
class SettingsRepository extends Repository<Setting> {}

export { SettingsRepository }