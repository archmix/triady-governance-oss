import { Component, Input, OnInit } from '@angular/core';

import { ViewCell } from 'ng2-smart-table';

@Component({
  template: `
    <a routerLink="{{renderHref}}">{{renderValue}}</a>
  `,
})
export class LinkRenderer implements ViewCell, OnInit {
  renderHref : string;
  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  ngOnInit() {
    this.renderHref = `/${this.rowData.path}`;
    this.renderValue = this.value.toString();
  }

}