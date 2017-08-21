import {Component, OnInit} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {Router} from "@angular/router";

import {Car} from "./car";
import {Customer} from "./customer";
import {ServiceStatus} from "./serviceStatus";


@Component({
    selector: 'status',
    templateUrl: '../partials/status.component.html',
    styleUrls:['../css/cardetail.component.styles.css'],
})
export class StatusComponent implements  OnInit{

    title: string = "Department Allocation Status";
    serviceStatus:ServiceStatus;

    ngOnInit(): void {
        var searchURL = "";
        searchURL = "/rest/allstatus";
        var requestHeaders = new Headers({'Accept': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});
        this.http.get(searchURL, options).subscribe(res => this.serviceStatus = res.json());

    }

    constructor(private http: Http, private router: Router) {

    }


   }


