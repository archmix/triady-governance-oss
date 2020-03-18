import { Component, Input } from '@angular/core';
import { LinkRenderer } from 'common/link.renderer'
import { topicSettings } from 'common/interfaces/asset-settings.model'
import { TopicService } from 'topic/topic.service'
import { LocalDataSource } from 'ng2-smart-table';
import { Datasource } from 'common/datasource.component'

@Component({
    templateUrl: '../../common/interfaces/grid.page.html',
})
export class TopicGridPage extends Datasource {

    gridSettings = {
        actions: false,
        hideSubHeader: true,
        attr: {
            class: "table table-responsive-sm table-hover table-outline",
        },
        columns: {
            name: {
                title: 'Name',
                type: 'custom',
                renderComponent: LinkRenderer
            },
            description: {
                title: 'Description',
                filter: false
            },
        }
    };

    constructor(service: TopicService) {
        super(topicSettings)
        service.getHome().subscribe(home => {
            this.datasource = new LocalDataSource(home.topics)
        })
    }
}