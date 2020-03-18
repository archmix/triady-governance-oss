import {Identity} from 'common/identity.model'

export class ApiHome {
    apis : Api[]
}

export class Api {
    id: number
    name: string
    description: string
    swaggerFile: string
    graphQLFile: string
    module: Identity

    constructor(){
        this.module = new Identity()
    }
}