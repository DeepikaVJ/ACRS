import {Component, OnInit} from "@angular/core";
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
    checked1:boolean=false;

    constructor(private http: Http) {
    }

    ngOnInit(): void {
        console.log("Inside Department1.ngOnInit()!!!!");
        var searchURL = "/rest/department/1/services";
        var requestHeaders = new Headers({'Accept': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});

        this.http.get(searchURL, options).subscribe(res => this.department1Services = res.json());

    }

    checkbox(service:Service){
        if (service.selected) {
            console.log("operation succesfull");
            // the checkbox is now checked
        } else {
            // the checkbox is now no longer checked
        }
        console.log(service.serviceName);
        console.log(service.selected);
    }

    addToList(e:any){
        var jaa= e.target.checked;
        console.log("jaa: "+jaa+" operation succesfull");
        console.log("e.target.value : "+ e.target.value);

    }


    /*populateList() {
        forEach(selectedServices, function (selected, service.serviceId)
        {

        }
    )
    }*/


}


