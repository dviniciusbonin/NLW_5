import { EntityRepository, Repository } from "typeorm";
import { Connection } from "../Entities/Connection";

@EntityRepository(Connection)
class ConnectionsRepository extends Repository<Connection>{

}

export { ConnectionsRepository }