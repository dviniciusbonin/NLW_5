import { Repository, getCustomRepository } from 'typeorm';
import { Connection } from '../Entities/Connection';
import { ConnectionsRepository } from '../Repositories/ConnectionsRepository';

interface IConnectionCreate {
    socket_id: string,
    user_id: string,
    admin_id?: string,
    id?: string
}

class ConnectionService {
    private connectionRepository: Repository<Connection>

    constructor() {
        this.connectionRepository = getCustomRepository(ConnectionsRepository)
    }

    async create({socket_id, user_id, admin_id, id}: IConnectionCreate) {
        const connection = this.connectionRepository.create({
            socket_id,
            user_id,
            admin_id,
            id
        })

        await this.connectionRepository.save(connection)

        return connection
    }

    async findByUserId(user_id: string) {
        const connection = await this.connectionRepository.findOne({
            user_id
        })
        return connection
    }
}

export { ConnectionService }