import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LinkRenderer } from './interfaces/link.renderer'
import { CenterTextRenderer } from './interfaces/center-text.renderer'
import { SchemaFileService } from 'common/schema-file.service';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {HttpClientModule} from '@angular/common/http';
import { SwaggerUIComponent } from './interfaces/swagger-ui.component'

export function getHighlightLanguages() {
    return {
        typescript: () => import('highlight.js/lib/languages/typescript'),
        json: () => import('highlight.js/lib/languages/json'),
        xml: () => import('highlight.js/lib/languages/xml')
    };
}

export function getConfig(){
    return {
        tabReplace : '  '
    }
}

@NgModule({
    declarations: [
        LinkRenderer,
        CenterTextRenderer,
        SwaggerUIComponent,
    ],
    imports: [
        RouterModule,
        HighlightModule,
        HttpClientModule,
        AngularCommonModule,
    ],
    entryComponents: [
        LinkRenderer,
        CenterTextRenderer
    ],
    exports: [
        LinkRenderer,
        CenterTextRenderer,
        SwaggerUIComponent,
        HighlightModule,
        RouterModule,
        Ng2SmartTableModule,
        HttpClientModule,
        AngularCommonModule,
    ],
    providers: [
        SchemaFileService,
        {
            provide: HIGHLIGHT_OPTIONS,
            useValue: {
                languages: getHighlightLanguages(),
                config : getConfig(),
                lineNumbers: true
            }
        }
    ]
})
export class CommonModule { }
