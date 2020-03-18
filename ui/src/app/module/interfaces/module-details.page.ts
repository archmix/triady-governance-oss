import { Component, OnInit } from '@angular/core';
import { AssetsSettings } from 'common/interfaces/asset-settings.model'
import { ModuleService } from 'module/module.service'
import { Module } from 'module/module.model';
import { Datasource } from 'common/datasource.component'

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    templateUrl: 'module-details.page.html',
})
export class ModuleDetailsPage implements OnInit {
    settings = AssetsSettings

    module: Module

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: ModuleService) {

        this.module = new Module()
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = params['id'];
            this.service.get(id).subscribe(module => this.load(module))
        })
    }

    load(module: Module) {
        this.module = module
    }
}