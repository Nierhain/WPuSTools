import Rcon from 'rcon-srcds'
import { env } from '~/env.mjs'

export const server = new Rcon({
    host: env.SERVER_IP,
    port: env.SERVER_PORT,  
})