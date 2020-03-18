import { NgModule } from '@angular/core';

import { CommonModule } from 'common/common.module'
import { CacheDetailsPage } from './interfaces/cache-details.page'
import { CacheListComponent } from './interfaces/cache-list.component'
import { CacheGridPage } from './interfaces/cache-grid.page'
import { CacheService } from './infra/cache.service'

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        CacheListComponent,
        CacheDetailsPage,
        CacheGridPage,
    ],
    exports: [
        CacheDetailsPage,
        CacheListComponent,
        CacheGridPage
    ],
    providers: [
        CacheService
    ]
})
export class CacheModule { }
