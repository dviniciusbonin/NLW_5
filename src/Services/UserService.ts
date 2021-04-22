import { Repository } from 'typeorm';
import { getCustomRepository } from 'typeorm';
import { User } from '../Entities/User';
import { UsersRepository } from '../Repositories/UsersRepository';


class UserService {
    private userRepository: Repository<User>

    constructor() {
        this.userRepository = getCustomRepository(UsersRepository)
    }
    async create(email: string) {
        const userExists = await this.userRepository.findOne({
            email
        })

        if(userExists)
            return userExists
        
        const user = this.userRepository.create({
            email
        })

        await this.userRepository.save(user)

        return user
    }
}

export { UserService }