import { NgModule } from '@angular/core';

import { CommonModule } from 'common/common.module'
import { ContextGridPage } from './interfaces/context-grid.page'
import { ContextDetailsPage } from './interfaces/context-details.page'
import { ContextListComponent } from './interfaces/context-list.component'
import { ContextService } from './infra/context.service'

import { EndpointModule } from 'endpoint/endpoint.module'
import { CacheModule } from 'cache/cache.module'
import { ModuleModule } from 'module/module.module'
import { SchemaModule } from 'schema/schema.module'
import { TableModule } from 'table/table.module'

@NgModule({
    imports: [
        CommonModule,
        EndpointModule,
        CacheModule,
        ModuleModule,
        SchemaModule,
        TableModule,
    ],
    declarations: [
        ContextGridPage,
        ContextDetailsPage,
        ContextListComponent
    ],
    exports: [
        ContextListComponent
    ],
    providers: [
        ContextService
    ]
})
export class ContextModule { }
