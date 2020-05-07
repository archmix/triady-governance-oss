import {Identity} from 'common/identity.model'

export class EndpointHome {
    endpoints : Endpoint[]
}

export class Endpoint {
    module: Identity
    id: number
    name: string
    uri: string
    method: string
    description: string
    graphQLFile: string
    requestFile: string
    responseFile: string
    errorResponseFile: string
    statusCodes: number[]
    
    constructor(){
        this.module = new Identity()
        this.statusCodes = []
    }
}