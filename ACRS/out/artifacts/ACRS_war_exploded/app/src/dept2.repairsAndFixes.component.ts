

import {Component, Directive, OnInit} from "@angular/core";
import {Http} from "@angular/http";

@Directive({})
@Component({
    selector: 'services-outlet2',
    template: `<h1>HELLO FROM THE Second DEPARTMENT</h1>
    `
})
export class Dept2RepairsAndFixesComponent implements OnInit {
    constructor(private http: Http) {
    }

    ngOnInit(): void {
    }


}


