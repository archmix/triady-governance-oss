import { Component, Input } from '@angular/core';
import { LinkRenderer } from 'common/link.renderer'
import { contextSettings } from 'common/interfaces/asset-settings.model'
import { ContextService } from 'context/context.service'
import { LocalDataSource } from 'ng2-smart-table';
import { CenterTextRenderer } from 'common/center-text.renderer'
import { Datasource } from 'common/datasource.component'

@Component({
    templateUrl: '../../common/interfaces/datasource-list.component.html',
})
export class ContextGridPage extends Datasource {
    
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
            numberOfEndpoints: {
                title: '# of Endpoints',
                class: 'text-center',
                filter: false,
                type: 'custom',
                renderComponent: CenterTextRenderer
            },
            numberOfCaches: {
                title: '# of Caches',
                class: 'text-center',
                filter: false,
                type: 'custom',
                renderComponent: CenterTextRenderer
            },
            numberOfModules: {
                title: '# of Modules',
                class: 'text-center',
                filter: false,
                type: 'custom',
                renderComponent: CenterTextRenderer
            },
            numberOfSchemas: {
                title: '# of Schemas',
                class: 'text-center',
                filter: false,
                type: 'custom',
                renderComponent: CenterTextRenderer
            },
            numberOfTables: {
                title: '# of Tables',
                class: 'text-center',
                filter: false,
                type: 'custom',
                renderComponent: CenterTextRenderer
            },
            numberOfTopics: {
                title: '# of Topics',
                class: 'text-center',
                filter: false,
                type: 'custom',
                renderComponent: CenterTextRenderer
            },
        }
    };

    constructor(service : ContextService){
        super(contextSettings)
        service.getHome().subscribe(home =>{
            this.datasource = new LocalDataSource(home.contexts)
        })
    }
}