import {Component, Directive, OnInit} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {Department} from "./department";
import {CarComponent} from "./car.component"
import {Dept1DentingpaintingComponent} from "./dept1.dentingpainting.component";
import {ActivatedRoute} from "@angular/router";
import {Car} from "./car";

@Directive({})
@Component({
    selector: 'departments',
    template: `
        <h1 name="customerDetail"></h1>
        <table class="departmentList">
            <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
            </tr>
            </thead>
            <tbody>
            <tr *ngFor="let department of departments">
                <td>{{department?.departmentId}}</td>
                <td>{{department?.name}}</td>
            </tr>
            </tbody>
        </table>
        <services-outlet1></services-outlet1>
        <services-outlet2></services-outlet2>
        <services-outlet3></services-outlet3>
        <services-outlet4></services-outlet4>
    `
})
export class DepartmentComponent implements OnInit {
    title: string = "Department Detail";
    departments: Department[];


    constructor(private http: Http, activatedRoute: ActivatedRoute) {

    }

    ngOnInit(): void {
        console.log("Inside DepartmentComponent.ngOnInit()!!!!");
        var searchURL = "/rest/departments";
        var requestHeaders = new Headers({'Accept': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});

        this.http.get(searchURL, options).subscribe(res => this.departments = res.json());
    }


}


