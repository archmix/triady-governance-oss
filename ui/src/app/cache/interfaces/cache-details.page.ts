import { Component, OnInit } from '@angular/core';
import { AssetsSettings } from 'common/interfaces/asset-settings.model'
import { CacheService } from 'cache/cache.service'
import { Cache } from 'cache/cache.model';
import { Datasource } from 'common/datasource.component'

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SchemaFileService } from 'common/schema-file.service';

@Component({
    templateUrl: 'cache-details.page.html',
})
export class CacheDetailsPage implements OnInit {
    settings = AssetsSettings

    cache: Cache
    jsonSchema: any

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: CacheService,
        private schemaFileService: SchemaFileService) {

        this.cache = new Cache()
        this.jsonSchema = ""
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = params['id'];
            this.service.get(id).subscribe(cache => this.load(cache))
        })
    }

    load(cache: Cache) {
        this.cache = cache
        if(cache.schemaFile) {
            this.schemaFileService.get(cache.schemaFile).subscribe(spec => {
                this.jsonSchema = spec
            })
        }
    }
}