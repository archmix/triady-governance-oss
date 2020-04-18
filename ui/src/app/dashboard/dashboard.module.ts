import { NgModule } from '@angular/core';

import { DashboardPage } from './interfaces/dashboard.page';
import { DashboardService } from './infra/dashboard.service'

import { EndpointModule } from 'endpoint/endpoint.module'
import { CacheModule } from 'cache/cache.module'
import { ContextModule } from 'context/context.module'
import { ModuleModule } from 'module/module.module'
import { SchemaModule } from 'schema/schema.module'
import { TableModule } from 'table/table.module'

@NgModule({
  imports: [
    EndpointModule,
    CacheModule,
    ContextModule,
    ModuleModule,
    SchemaModule,
    TableModule,
  ],
  providers: [
    DashboardService
  ],
  declarations: [ 
    DashboardPage
  ]
})
export class DashboardModule { }
