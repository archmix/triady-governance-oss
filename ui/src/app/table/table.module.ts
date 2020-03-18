import { NgModule } from '@angular/core';

import { CommonModule } from 'common/common.module'
import { TableListComponent } from './interfaces/table-list.component'
import { TableDetailsPage } from './interfaces/table-details.page'
import { TableGridPage } from './interfaces/table-grid.page'
import { TableService } from './infra/table.service'

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        TableListComponent,
        TableDetailsPage,
        TableGridPage,
    ],
    exports: [
        TableListComponent,
        TableDetailsPage,
        TableGridPage,
    ],
    providers: [
        TableService
    ]
})
export class TableModule { }
