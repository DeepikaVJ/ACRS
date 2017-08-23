import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {Service} from "./service";



@Component({
    selector: 'services-outlet3',
    templateUrl: '../partials/dept3.component.html',
    styleUrls: ['../css/dept1.component.style.css'],
})
export class Dept3CleaningAndCareComponent implements OnInit {

    department3Services: Service[] = [];
    selectedServices: string[];

    //@Input('parentData') incomingData: string;
    @Output('childData') outgoingData = new EventEmitter<string>();
    childSampleData: string = "Some child Data";
    constructor(private http: Http) {
    }
    ngOnInit(): void {
        console.log("Inside Department3.ngOnInit()!!!!");
        var searchURL = "/rest/department/3/servicemenu";
        var requestHeaders = new Headers({'Accept': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});

        this.http.get(searchURL, options).subscribe(res => this.department3Services = res.json());
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


