import {Identity} from 'common/identity.model'

export class TopicHome {
    topics : Topic[]
}

export class Topic {
    id: number
    name: string
    description: string
    specification: string
    schema : Identity
    consumedBy: Identity[]
    producedBy: Identity[]

    constructor(){
        this.schema = new Identity()
    }
}