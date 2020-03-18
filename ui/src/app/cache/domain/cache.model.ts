import {Identity} from 'common/identity.model'

export class CacheHome{
    caches : Cache[]
}

export class Cache {
    id: number
    name: string
    description: string
    schemaFile: string
    schema: Identity
    module: Identity

    constructor(){
        this.module = new Identity()
        this.schema = new Identity()
    }
}