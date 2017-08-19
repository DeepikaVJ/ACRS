

import {Component, Directive, OnInit} from "@angular/core";
import {Http} from "@angular/http";

@Component({
    selector: 'services-outlet3',
    template: `<h1>HELLO FROM THE third DEPARTMENT</h1>
    `
})
export class Dept3CleaningAndCareComponent implements OnInit {
    constructor(private http: Http) {
    }

    ngOnInit(): void {
    }


}


