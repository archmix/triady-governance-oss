import { NgModule } from '@angular/core';

import { CommonModule } from 'common/common.module'
import { ModuleListComponent } from './interfaces/module-list.component'
import { ModuleGridPage } from './interfaces/module-grid.page'
import { ModuleDetailsPage } from './interfaces/module-details.page'
import { ModuleService } from './infra/module.service'

import { EndpointModule } from 'endpoint/endpoint.module'
import { CacheModule } from 'cache/cache.module'
import { TableModule } from 'table/table.module'

import { TopicListComponent } from 'topic/topic-list.component'
import { TopicDetailsPage } from 'topic/topic-details.page'
import { TopicGridPage } from 'topic/topic-grid.page'
import { TopicService } from 'topic/topic.service'

@NgModule({
    imports: [
        CommonModule,
        EndpointModule,
        CacheModule,
        TableModule,
    ],
    declarations: [
        ModuleListComponent,
        ModuleGridPage,
        ModuleDetailsPage,
        TopicListComponent,
        TopicDetailsPage,
        TopicGridPage,
    ],
    exports: [
        ModuleListComponent,
        ModuleGridPage,
        ModuleDetailsPage,
        EndpointModule,
        CacheModule,
        TableModule,

        TopicListComponent,
        TopicDetailsPage,
        TopicGridPage,
        CacheModule,
    ],
    providers: [
        ModuleService,
        TopicService
    ]
})
export class ModuleModule { }
