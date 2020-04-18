import {Identity} from 'common/identity.model'

export class ModuleHome{
    modules : Module[]
}

export class Module {
    id: number
    name: string
    description: string
    context: Identity
    numberOfEndpoints : number
    numberOfCaches : number
    numberOfTables : number
    numberOfTopics : number
    
    endpoints: Identity[]
    caches: Identity[]
    tables: Identity[]
    consumesTopics: Identity[]
    producesTopics: Identity[]

    constructor(){
        this.context = new Identity()
    }
}