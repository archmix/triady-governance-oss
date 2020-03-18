import { AfterViewInit, Component, ElementRef , Input } from '@angular/core';

import { SwaggerUI } from "swagger-ui"

@Component({
    selector: 'swagger-ui',
    template: '<div class="swagger-container"></div>',    
  })
export class SwaggerUIComponent implements AfterViewInit{
    @Input() url : string

    constructor(private el: ElementRef) {
    }

    ngAfterViewInit() {
        const ui = SwaggerUI({
            domNode: this.el.nativeElement.querySelector('.swagger-container'),
            layout: 'BaseLayout',
            presets: [
                SwaggerUI.presets.apis,
                SwaggerUI.SwaggerUIStandalonePreset
            ],
            url: this.url,
            docExpansion: 'none',
            operationsSorter: 'alpha',
            deepLinking: true
        });
    }
}