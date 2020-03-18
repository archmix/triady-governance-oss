import { Component, Input } from '@angular/core';
import { LinkRenderer } from 'common/link.renderer'
import { moduleSettings } from 'common/interfaces/asset-settings.model'
import { ModuleService } from 'module/module.service'
import { LocalDataSource } from 'ng2-smart-table';
import { Datasource } from 'common/datasource.component'

@Component({
    templateUrl: '../../common/interfaces/grid.page.html',
})
export class ModuleGridPage extends Datasource {
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

    constructor(service : ModuleService){
        super(moduleSettings)
        service.getHome().subscribe(home =>{
            this.datasource = new LocalDataSource(home.modules)
        })
    }
}