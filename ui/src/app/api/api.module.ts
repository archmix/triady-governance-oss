import { NgModule } from '@angular/core';

import { CommonModule } from 'common/common.module'
import { ApiListComponent } from './interfaces/api-list.component'
import { ApiGridPage } from './interfaces/api-grid.page'
import { ApiDetailsPage } from './interfaces/api-details.page'
import { ApiService } from './infra/api.service'
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
    imports: [
        CommonModule,
        TabsModule,
    ],
    declarations: [
        ApiListComponent,
        ApiGridPage,
        ApiDetailsPage,
    ],
    exports: [
        ApiListComponent,
        ApiGridPage,
        ApiDetailsPage
    ],
    providers: [
        ApiService
    ]
})
export class ApiModule { }
