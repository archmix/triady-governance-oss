import {Identity} from 'common/identity.model'

export class ModuleHome{
    modules : Module[]
}

export class Module {
    id: number
    name: string
    description: string
    context: Identity
    numberOfApis : number
    numberOfCaches : number
    numberOfTables : number
    numberOfTopics : number
    
    apis: Identity[]
    caches: Identity[]
    tables: Identity[]
    consumesTopics: Identity[]
    producesTopics: Identity[]

    constructor(){
        this.context = new Identity()
    }
}