import { NgModule } from '@angular/core';

import { CommonModule } from 'common/common.module'
import { EndpointListComponent } from './interfaces/endpoint-list.component'
import { EndpointGridPage } from './interfaces/endpoint-grid.page'
import { EndpointDetailsPage } from './interfaces/endpoint-details.page'
import { StatusCodeComponent } from './interfaces/status-code.component'
import { EndpointService } from './infra/endpoint.service'
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
    imports: [
        CommonModule,
        TabsModule,
    ],
    declarations: [
        EndpointListComponent,
        EndpointGridPage,
        EndpointDetailsPage,
        StatusCodeComponent
    ],
    exports: [
        EndpointListComponent,
        EndpointGridPage,
        EndpointDetailsPage,
        StatusCodeComponent
    ],
    providers: [
        EndpointService
    ]
})
export class EndpointModule { }
