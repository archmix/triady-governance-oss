import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LinkRenderer } from './interfaces/link.renderer'
import { CenterTextRenderer } from './interfaces/center-text.renderer'
import { SchemaFileService } from 'common/schema-file.service';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {HttpClientModule} from '@angular/common/http';

export function getHighlightLanguages() {
    return {
        json: () => import('highlight.js/lib/languages/json'),
        xml: () => import('highlight.js/lib/languages/xml'),
        yaml: () => import('highlight.js/lib/languages/yaml')
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
        HighlightModule,
        RouterModule,
        Ng2SmartTableModule,
        HttpClientModule,
        AngularCommonModule,
    ],
    providers: [
        SchemaFileService,
    ]
})
export class CommonModule { }