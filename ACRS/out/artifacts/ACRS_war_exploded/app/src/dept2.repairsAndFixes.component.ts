import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {Service} from "./service";
import {forEach} from "@angular/router/src/utils/collection";
import {StorageService} from "./storage.service";


@Component({
    selector: 'services-outlet2',
    templateUrl: '../partials/dept2.component.html',
    styleUrls: ['../css/dept1.component.style.css'],
})
export class Dept2RepairsAndFixesComponent implements OnInit {

    department2Services: Service[] = [];
    selectedServices: string[];

    //@Input('parentData') incomingData: string;
    @Output('childData') outgoingData = new EventEmitter<string>();
    childSampleData: string = "Some child Data";
    constructor(private http: Http, private storageService: StorageService) {
    }
    ngOnInit(): void {
        console.log("Inside Department2.ngOnInit()!!!!");
        var searchURL = "/rest/department/2/servicemenu";
        var requestHeaders = new Headers({'Accept': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});

        this.http.get(searchURL, options).subscribe(res => this.department2Services = res.json());
    }

    addToList(e: any) {
        //this.storageService.add(e.target.id);
        var jaa = e.target.checked;
        console.log("e.target.checked: " + jaa + " operation succesfull");
        let selectedServiceId = e.target.id;
        console.log("selectedServiceId: " + selectedServiceId);
        let selectedServicePrice = e.target.value;
        console.log("selectedServicePrice : " + selectedServicePrice);
        this.outgoingData.emit(e);

    }

}


