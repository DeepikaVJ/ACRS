import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {Service} from "./service";



@Component({
    selector: 'services-outlet4',
    templateUrl: '../partials/dept4.component.html',
    styleUrls: ['../css/dept1.component.style.css'],
})
export class Dept4PeriodicServicesComponent implements OnInit {

    department4Services: Service[] = [];
    selectedServices: string[];

    //@Input('parentData') incomingData: string;
    @Output('childData') outgoingData = new EventEmitter<string>();
    childSampleData: string = "Some child Data";
    constructor(private http: Http) {
    }
    ngOnInit(): void {
        console.log("Inside Department4.ngOnInit()!!!!");
        var searchURL = "/rest/department/4/servicemenu";
        var requestHeaders = new Headers({'Accept': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});
console.log("hitiing the URL");
        this.http.get(searchURL, options).subscribe(res => this.department4Services = res.json());
        console.log("hitiing URL successful");
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


