import { EntityRepository, Repository } from "typeorm";
import { User } from "../Entities/User";

@EntityRepository(User)
class UsersRepository extends Repository<User> {

}

export {UsersRepository}