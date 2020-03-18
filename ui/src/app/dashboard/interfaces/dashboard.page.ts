import { Component, OnInit} from '@angular/core';
import { AssetsSettings } from 'common/asset-settings.model'
import { Identity } from 'common/identity.model'
import { DashboardService } from 'dashboard/dashboard.service'
import { Dashboard } from 'dashboard/dashboard.model'

@Component({
  templateUrl: 'dashboard.page.html'
})
export class DashboardPage implements OnInit {
  
  dashboard : Dashboard = new Dashboard()
  apis : Identity[] = []
  caches : Identity[] = []
  contexts : Identity[] = []
  modules : Identity[] = []
  schemas : Identity[] = []
  tables : Identity[] = []
  topics : Identity[] = []
  settings = AssetsSettings

  constructor(private service : DashboardService){ }

  ngOnInit() {
    this.service.getHome().subscribe(dashboard =>{
      this.dashboard = dashboard
      this.apis = dashboard.apis
      this.caches = dashboard.caches
      this.contexts = dashboard.contexts
      this.modules = dashboard.modules
      this.schemas = dashboard.schemas
      this.tables = dashboard.tables
      this.topics = dashboard.topics
    })
    
  }
}
