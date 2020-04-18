import {Identity} from 'common/identity.model'

export class ContextHome {
    contexts : Context[]
}

export class Context {
    id: number
    name: string
    description: string
    numberOfEndpoints : number
    numberOfCaches : number
    numberOfModules : number
    numberOfSchemas : number
    numberOfTables : number
    numberOfTopics : number

    modules : Identity[]
    schemas: Identity[]
    endpoints: Identity[]
    caches: Identity[]
    tables: Identity[]
    topics: Identity[]
}