import {Identity} from 'common/identity.model'

export class TableHome {
    tables : Table[]
}

export class Table {
    id: number
    name: string
    description: string
    schemaFile: string
    module: Identity

    constructor(){
        this.module = new Identity()
    }
}