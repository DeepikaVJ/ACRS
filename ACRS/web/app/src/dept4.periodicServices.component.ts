
import {Component, Directive, OnInit} from "@angular/core";
import {Http} from "@angular/http";

@Directive({})
@Component({
    selector: 'services-outlet4',
    template: `<h1 style="float: right">HELLO FROM THE fourth DEPARTMENT</h1>
    `
})
export class Dept4PeriodicServicesComponent implements OnInit {
    constructor(private http: Http) {
    }

    ngOnInit(): void {
    }


}


