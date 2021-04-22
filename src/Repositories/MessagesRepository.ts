import { EntityRepository, Repository } from "typeorm";
import { Message } from "../Entities/Message";

@EntityRepository(Message)
class MessagesRepository extends Repository<Message>{

}

export { MessagesRepository }