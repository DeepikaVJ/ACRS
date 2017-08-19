import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {Service} from "./service";
import {forEach} from "@angular/router/src/utils/collection";


@Component({
    selector: 'services-outlet1',
    templateUrl: '../partials/dept1.component.html',
    styleUrls: ['../css/dept1.component.style.css'],
})
export class Dept1DentingpaintingComponent implements OnInit {
    department1Services: Service[];
    selectedServices: string[];
    checkedStatus1: boolean;
    checkedStatus2: boolean;
    checkedStatus3: boolean;
    checkedStatus4: boolean;
    //@Input('parentData') incomingData: string;
    @Output('childData') outgoingData = new EventEmitter<string>();

    childSampleData: string = "Some child Data";

    constructor(private http: Http) {

    }

    ngOnInit(): void {
        console.log("Inside Department1.ngOnInit()!!!!");
        var searchURL = "/rest/department/1/servicemenu";
        var requestHeaders = new Headers({'Accept': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});

        this.http.get(searchURL, options).subscribe(res => this.department1Services = res.json());
    }

    addToList(e: any) {
        var jaa = e.target.checked;
        console.log("e.target.checked: " + jaa + " operation succesfull");
        let selectedServiceId = e.target.id;
        console.log("selectedServiceId: " + selectedServiceId);
        let selectedServicePrice = e.target.value;
        console.log("selectedServicePrice : " + selectedServicePrice);
        /*   let selected
        ServiceObject = this.department1Services.find(x => x.serviceId === selectedServiceId);
           let serviceId = selectedServiceObject.serviceId;
           console.log(serviceId);
           let serviceName = selectedServiceObject.serviceName;
           console.log(serviceName);
           let price = selectedServiceObject.price;
           console.log(price)
           */
        this.outgoingData.emit(e);

    }


}


