import {Identity} from 'common/identity.model'

export class SchemaHome {
    schemas : Schema[]
}

export class Schema {
    id: number
    name: string
    description: string
    file: string
    context: Identity
    topics: Identity[]
    caches: Identity[]

    constructor(){
        this.context = new Identity()
        this.topics = []
        this.caches = []
    }
}