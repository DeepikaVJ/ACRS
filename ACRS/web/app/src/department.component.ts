import {Component, OnInit} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {Department} from "./department";

@Component({
    selector: 'departments',
    template: `
        <table class="departmentList">
            <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
            </tr>
            </thead>
            <tbody>
            <tr *ngFor="let department of departments">
                <td>{{department.departmentId}}</td>
                <td>{{department.name}}</td>
            </tr>
            </tbody>
        </table>`
})
export class DepartmentComponent implements OnInit {
    title: string = "Department Detail";
    departments: Department[];


    constructor(private http: Http) {
    }

    ngOnInit(): void {
        console.log("Inside DepartmentComponent.ngOnInit()!!!!");
        var searchURL = "/rest/departments";
        var requestHeaders = new Headers({'Accept': 'application/json'});
        var options = new RequestOptions({headers: requestHeaders});

        this.http.get(searchURL, options).subscribe(res => this.departments = res.json());
    }


}


