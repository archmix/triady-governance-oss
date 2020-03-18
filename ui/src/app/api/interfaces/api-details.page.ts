import { Component, OnInit } from '@angular/core';
import { AssetsSettings } from 'common/interfaces/asset-settings.model'
import { ApiService } from 'api/api.service'
import { Api } from 'api/api.model';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SchemaFileService } from 'common/schema-file.service'

@Component({
    templateUrl: 'api-details.page.html',
})
export class ApiDetailsPage implements OnInit {
    settings = AssetsSettings

    api: Api

    swaggerTabDisabled : boolean = false
    graphQLTabDisabled : boolean = false
    graphQLSchema : string

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: ApiService,
        private schemaFileService: SchemaFileService) {
        this.api = new Api()
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = params['id'];
            this.service.get(id).subscribe(api => this.load(api))
        })
    }

    load(api: Api) {
        this.api = api
        this.swaggerTabDisabled = true
        this.graphQLTabDisabled = true

        if(api.swaggerFile){
            this.swaggerTabDisabled = false
        }

        if(api.graphQLFile){
            this.graphQLTabDisabled = false
            this.schemaFileService.get(api.graphQLFile).subscribe(data =>{
                this.graphQLSchema = data
            })
        }
    }   
}