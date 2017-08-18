import {Component, Directive, OnInit} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {Department} from "./department";
import { ActivatedRoute } from '@angular/router';

@Directive({})
@Component({
    selector: 'services-outlet1',
    template: `<h1 style="float: right">HELLO FROM THE FIRST DEPARTMENT</h1>
    `
})
export class Dept1DentingpaintingComponent implements OnInit {
    constructor(private http: Http) {
    }

    ngOnInit(): void {
    }


}


