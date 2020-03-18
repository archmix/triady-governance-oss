import { Component, OnInit } from '@angular/core';
import { AssetsSettings } from 'common/interfaces/asset-settings.model'
import { SchemaService } from 'schema/schema.service'
import { Schema } from 'schema/schema.model';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SchemaFileService } from 'common/schema-file.service';

@Component({
    templateUrl: 'schema-details.page.html',
})
export class SchemaDetailsPage implements OnInit {
    settings = AssetsSettings

    schema: Schema
    jsonSchema: any

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: SchemaService,
        private schemaFileService: SchemaFileService) {

        this.schema = new Schema()
        this.jsonSchema = ""
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = params['id'];
            this.service.get(id).subscribe(schema => this.load(schema))
        })
    }

    load(schema: Schema) {
        this.schema = schema
        this.schemaFileService.get(schema.file).subscribe(spec => {
            this.jsonSchema = spec
        })
        
    }
}