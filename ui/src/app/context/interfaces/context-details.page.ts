import { Component, OnInit } from '@angular/core';
import { AssetsSettings } from 'common/interfaces/asset-settings.model'
import { ContextService } from 'context/context.service'
import { Context } from 'context/context.model';
import { Datasource } from 'common/datasource.component'

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    templateUrl: 'context-details.page.html',
})
export class ContextDetailsPage implements OnInit {
    settings = AssetsSettings

    context: Context

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: ContextService) {

        this.context = new Context()
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = params['id'];
            this.service.get(id).subscribe(context => this.load(context))
        })
    }

    load(context: Context) {
        this.context = context
    }
}