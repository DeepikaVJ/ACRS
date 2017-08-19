
import {Component, Directive, OnInit} from "@angular/core";
import {Http} from "@angular/http";


@Component({
    selector: 'services-outlet4',
    template: `<h1>HELLO FROM THE fourth DEPARTMENT</h1>
    `
})
export class Dept4PeriodicServicesComponent implements OnInit {
    constructor(private http: Http) {
    }

    ngOnInit(): void {
    }


}


