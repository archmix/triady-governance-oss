import {Identity} from 'common/identity.model'

export class ContextHome {
    contexts : Context[]
}

export class Context {
    id: number
    name: string
    description: string
    numberOfApis : number
    numberOfCaches : number
    numberOfModules : number
    numberOfSchemas : number
    numberOfTables : number
    numberOfTopics : number

    modules : Identity[]
    schemas: Identity[]
    apis: Identity[]
    caches: Identity[]
    tables: Identity[]
    topics: Identity[]
}