import { NgModule } from '@angular/core';

import { CommonModule } from 'common/common.module'
import { ModuleModule } from 'module/module.module'
import { SchemaListComponent } from './interfaces/schema-list.component'
import { SchemaDetailsPage } from './interfaces/schema-details.page'
import { SchemaGridPage } from './interfaces/schema-grid.page'
import { SchemaService } from './infra/schema.service'

@NgModule({
    imports: [
        CommonModule,
        ModuleModule,
    ],
    declarations: [
        SchemaListComponent,
        SchemaDetailsPage,
        SchemaGridPage,
    ],
    exports: [
        SchemaListComponent,
        SchemaDetailsPage,
        SchemaGridPage,
    ],
    providers: [
        SchemaService
    ]
})
export class SchemaModule { }
