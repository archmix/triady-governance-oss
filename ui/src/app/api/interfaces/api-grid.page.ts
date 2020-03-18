import { Component, Input } from '@angular/core';
import { LinkRenderer } from 'common/link.renderer'
import { apiSettings } from 'common/interfaces/asset-settings.model'
import { ApiService } from 'api/api.service'
import { LocalDataSource } from 'ng2-smart-table';
import { Datasource } from 'common/datasource.component'

@Component({
    templateUrl: '../../common/interfaces/datasource-list.component.html',
})
export class ApiGridPage extends Datasource {
    gridSettings = {
        actions: false,
        hideSubHeader: true,
        attr: {
            class: "table table-responsive-sm table-hover table-outline",
        },
        columns: {
            name: {
                title: 'Name',
                type: 'custom',
                renderComponent: LinkRenderer
            },
            description: {
                title: 'Description',
                filter: false
            },
        }
    };

    constructor(service : ApiService){
        super(apiSettings)
        service.getHome().subscribe(home =>{
            this.datasource = new LocalDataSource(home.apis)
        })
    }
}