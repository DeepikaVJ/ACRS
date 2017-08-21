"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
const router_1 = require("@angular/router");
let StatusComponent = class StatusComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.title = "Department Allocation Status";
    }
    ngOnInit() {
        var searchURL = "";
        searchURL = "/rest/allstatus";
        var requestHeaders = new http_1.Headers({ 'Accept': 'application/json' });
        var options = new http_1.RequestOptions({ headers: requestHeaders });
        this.http.get(searchURL, options).subscribe(res => this.serviceStatus = res.json());
    }
};
StatusComponent = __decorate([
    core_1.Component({
        selector: 'status',
        templateUrl: '../partials/status.component.html',
        styleUrls: ['../css/cardetail.component.styles.css'],
    }), 
    __metadata('design:paramtypes', [http_1.Http, router_1.Router])
], StatusComponent);
exports.StatusComponent = StatusComponent;
//# sourceMappingURL=status.component.js.map