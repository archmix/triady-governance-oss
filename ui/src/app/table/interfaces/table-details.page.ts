import { Component, OnInit } from '@angular/core';
import { AssetsSettings } from 'common/interfaces/asset-settings.model'
import { TableService } from 'table/table.service'
import { Table } from 'table/table.model';
import { Datasource } from 'common/datasource.component'

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SchemaFileService } from 'common/schema-file.service';
import { Schema } from 'app/schema/domain/schema.model';

@Component({
    templateUrl: 'table-details.page.html',
})
export class TableDetailsPage implements OnInit {
    settings = AssetsSettings

    table: Table
    jsonSchema: any

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: TableService,
        private schemaFileService: SchemaFileService) {

        this.table = new Table()
        this.jsonSchema = ""
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = params['id'];
            this.service.get(id).subscribe(table => this.load(table))
        })
    }

    load(table: Table) {
        this.table = table
        this.schemaFileService.get(table.schemaFile).subscribe(spec => {
            this.jsonSchema = spec
        })
    }
}