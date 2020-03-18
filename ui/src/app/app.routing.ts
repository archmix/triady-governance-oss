import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

// Import Containers
import { DefaultLayoutComponent } from './containers'
import { DashboardModule } from 'dashboard/dashboard.module'
import { DashboardPage } from 'dashboard/dashboard.page'
import { ApiGridPage } from 'api/api-grid.page'
import { ApiDetailsPage } from 'api/api-details.page'
import { CacheDetailsPage } from 'cache/cache-details.page'
import { CacheGridPage } from 'cache/cache-grid.page'
import { ContextGridPage } from 'context/context-grid.page'
import { ContextDetailsPage } from 'context/context-details.page'
import { ModuleGridPage } from 'module/module-grid.page'
import { ModuleDetailsPage } from 'module/module-details.page'
import { SchemaGridPage } from 'schema/schema-grid.page'
import { SchemaDetailsPage } from 'schema/schema-details.page'
import { TableDetailsPage } from 'table/table-details.page'
import { TableGridPage } from 'table/table-grid.page'
import { TopicDetailsPage } from 'topic/topic-details.page'
import { TopicGridPage } from 'topic/topic-grid.page'
import { apiSettings, cacheSettings, contextSettings, dashboardSettings, moduleSettings, schemaSettings, tableSettings, topicSettings } from 'common/asset-settings.model'

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Archmix Governance Portal'
    },
    children: [
      {
        path: 'apis',
        component: ApiGridPage,
        data: {
          title: apiSettings.singular
        }
      },
      {
        path: 'apis/:id',
        component: ApiDetailsPage,
        data: {
          title: apiSettings.singular
        }
      },
      {
        path: 'caches',
        component: CacheGridPage,
        data: {
          title: cacheSettings.singular
        }
      },
      {
        path: 'caches/:id',
        component: CacheDetailsPage,
        data: {
          title: cacheSettings.singular
        }
      },
      {
        path: 'contexts',
        component: ContextGridPage,
        data: {
          title: contextSettings.plural
        },
        
      },
      {
        path: 'contexts/:id',
        component: ContextDetailsPage,
        data: {
          title: contextSettings.singular
        }
      },
      {
        path: 'dashboard',
        component: DashboardPage,
        data: {
          title: dashboardSettings.singular
        }
      },
      {
        path: 'modules',
        component: ModuleGridPage,
        data: {
          title: moduleSettings.plural
        },
        
      },
      {
        path: 'modules/:id',
        component: ModuleDetailsPage,
        data: {
          title: moduleSettings.plural
        },
        
      },
      {
        path: 'schemas',
        component: SchemaGridPage,
        data: {
          title: schemaSettings.plural
        },

      },
      {
        path: 'schemas/:id',
        component: SchemaDetailsPage,
        data: {
          title: schemaSettings.plural
        },

      },
      {
        path: 'tables',
        component: TableGridPage,
        data: {
          title: tableSettings.plural
        },

      },
      {
        path: 'tables/:id',
        component: TableDetailsPage,
        data: {
          title: tableSettings.plural
        },

      },
      {
        path: 'topics',
        component: TopicGridPage,
        data: {
          title: topicSettings.plural
        },

      },
      {
        path: 'topics/:id',
        component: TopicDetailsPage,
        data: {
          title: topicSettings.plural
        },

      },
    ]
  }
];

@NgModule({
  imports: [ 
    RouterModule.forRoot(routes),
    DashboardModule 
  ],
  exports: [ 
    RouterModule 
  ]
})
export class AppRoutingModule {}
