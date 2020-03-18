import { Component, Input } from '@angular/core';
import { LinkRenderer } from 'common/link.renderer'
import { schemaSettings } from 'common/interfaces/asset-settings.model'
import { Datasource } from 'common/datasource.component'

@Component({
    templateUrl: '../../common/interfaces/datasource-list.component.html',
    selector: 'schema-list'
})
export class SchemaListComponent extends Datasource {
    constructor() {
        super(schemaSettings)
    }

    gridSettings = {
        actions: false,
        hideHeader: true,
        hideSubHeader: true,
        attr: {
            class: "table table-responsive-sm table-hover table-outline",
        },
        columns: {
            name: {
                title: 'Name',
                type: 'custom',
                filter: false,
                renderComponent: LinkRenderer
            },
        }
    };
}