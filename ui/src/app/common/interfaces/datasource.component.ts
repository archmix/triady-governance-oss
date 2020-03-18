import { LocalDataSource } from 'ng2-smart-table'
import { Input } from '@angular/core';
import { Identity } from 'common/identity.model'
import { AssetSettings } from 'common/asset-settings.model'

export class Datasource {
    datasource: LocalDataSource;

    @Input() label : string

    @Input() icon : string

    constructor(settings: AssetSettings){
        this.label = settings.plural;
        this.icon = settings.icon;
    }

    @Input() set data(data: Identity[]) {
        this.datasource = new LocalDataSource(data);
    }

    onSearch(query: string = ''){
        if(query.length == 0){
            this.datasource.reset(false)
            return
        }

        this.datasource.setFilter([
            {
              field: 'name',
              search: query
            },
            {
                field: 'description',
                search: query
            }
          ], false); 
    }
}