import { Component, OnInit } from '@angular/core';
import { AssetsSettings } from 'common/interfaces/asset-settings.model'
import { EndpointService } from 'endpoint/endpoint.service'
import { Endpoint } from 'endpoint/endpoint.model';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SchemaFileService } from 'common/schema-file.service'

@Component({
    templateUrl: 'endpoint-details.page.html',
})
export class EndpointDetailsPage implements OnInit {
    settings = AssetsSettings

    endpoint: Endpoint

    graphQLSchema : string
    requestSchema : string
    responseSchema : string
    errorResponseSchema : string

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: EndpointService,
        private schemaFileService: SchemaFileService) {
        this.endpoint = new Endpoint()
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = params['id'];
            this.service.get(id).subscribe(endpoint => this.load(endpoint))
        })
    }

    load(endpoint: Endpoint) {
        this.endpoint = endpoint
        
        if(endpoint.graphQLFile){
            this.schemaFileService.get(endpoint.graphQLFile).subscribe(data =>{
                this.graphQLSchema = data
            })
        }

        if(endpoint.requestFile){
            this.schemaFileService.get(endpoint.requestFile).subscribe(data =>{
                this.requestSchema = data
            })
        }

        if(endpoint.responseFile){
            this.schemaFileService.get(endpoint.responseFile).subscribe(data =>{
                this.responseSchema = data
            })
        }

        if(endpoint.errorResponseFile){
            this.schemaFileService.get(endpoint.errorResponseFile).subscribe(data =>{
                this.errorResponseSchema = data
            })
        }
    }

}