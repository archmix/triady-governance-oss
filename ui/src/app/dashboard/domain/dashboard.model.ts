import {Identity} from 'common/identity.model'

export class Dashboard {
    path : string
    numberOfApis : number
    numberOfCaches : number
    numberOfContexts : number
    numberOfModules : number
    numberOfSchemas : number
    numberOfTables : number
    numberOfTopics : number
    apis : Identity[]
    caches : Identity[]
    contexts : Identity[]
    modules : Identity[]
    schemas : Identity[]
    tables : Identity[]
    topics : Identity[]
}