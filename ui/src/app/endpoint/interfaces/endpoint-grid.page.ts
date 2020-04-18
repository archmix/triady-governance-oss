import { Component, Input } from '@angular/core';
import { LinkRenderer } from 'common/link.renderer'
import { endpointSettings } from 'common/interfaces/asset-settings.model'
import { EndpointService } from 'endpoint/endpoint.service'
import { LocalDataSource } from 'ng2-smart-table';
import { Datasource } from 'common/datasource.component'

@Component({
    templateUrl: '../../common/interfaces/datasource-list.component.html',
})
export class EndpointGridPage extends Datasource {
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

    constructor(service : EndpointService){
        super(endpointSettings)
        service.getHome().subscribe(home =>{
            this.datasource = new LocalDataSource(home.endpoints)
        })
    }
}