import { Component, OnInit } from '@angular/core';
import { AssetsSettings } from 'common/interfaces/asset-settings.model'
import { TopicService } from 'topic/topic.service'
import { Topic } from 'topic/topic.model';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    templateUrl: 'topic-details.page.html',
})
export class TopicDetailsPage implements OnInit {
    settings = AssetsSettings

    topic: Topic
        
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: TopicService) {
        
        this.topic = new Topic()       
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let id = params['id'];
            this.service.get(id).subscribe(topic => this.load(topic))
        })
    }

    load(topic : Topic){
        this.topic = topic
    }
}