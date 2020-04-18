import {Identity} from 'common/identity.model'

export class Dashboard {
    path : string
    numberOfEndpoints : number
    numberOfCaches : number
    numberOfContexts : number
    numberOfModules : number
    numberOfSchemas : number
    numberOfTables : number
    numberOfTopics : number
    endpoints : Identity[]
    caches : Identity[]
    contexts : Identity[]
    modules : Identity[]
    schemas : Identity[]
    tables : Identity[]
    topics : Identity[]
}