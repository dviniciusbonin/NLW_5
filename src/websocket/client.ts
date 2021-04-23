import { Socket } from 'socket.io';
import { io } from "../http"
import { ConnectionService} from '../Services/ConnectionService'
import { UserService } from '../Services/UserService'
import {MessageService } from '../Services/MessageService'

interface IParams {
    text: string
    email: string
}

io.on("connect", (socket: Socket) => {

    const connectionService = new ConnectionService()
    const userService = new UserService()
    const messageService = new MessageService()

    socket.on("client_first_access", async(params) => {
        const socket_id = socket.id
        
        const {text , email } = params as IParams;

        let user_id = null

        const userExist = await userService.findByEmail(email)

        if(!userExist) {
            const user = await userService.create(email)

            await connectionService.create({
                socket_id,
                user_id: user.id
            })

            user_id = user.id
        }else {
            user_id = userExist.id
            const connection = await connectionService.findByUserId(userExist.id)

            if(!connection) {
                await connectionService.create({
                    socket_id,
                    user_id: userExist.id
                })
            }else {
                connection.socket_id = socket_id
                await connectionService.create(connection)
            }
            
        }

        await messageService.create({
            text,
            user_id
        })
    })
})