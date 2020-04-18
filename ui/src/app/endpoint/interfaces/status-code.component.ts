import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
    templateUrl: 'status-code.page.html',
    selector: 'status-code'
})
export class StatusCodeComponent {
    codes : StatusCode[]

    constructor(){
        this.codes = []
    }

    @Input() set data(codes : number[]){
        for(var code of codes) {
            this.codes.push(new StatusCode(code))
        }
    }
}

export class StatusCode {
    value : number

    constructor(value : number){
        this.value = value
    }

    get cssClass() : string {
        if(this.value >= 200 && this.value < 300){
            return "badge-success"
        }
        return "badge-danger"
    }
}