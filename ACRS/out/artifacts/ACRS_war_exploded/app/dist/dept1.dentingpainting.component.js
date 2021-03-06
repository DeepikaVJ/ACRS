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
let Dept1DentingpaintingComponent = class Dept1DentingpaintingComponent {
    constructor(http) {
        this.http = http;
        this.department1Services = [];
        //selectedServices: string[];
        // commented when moving from hardcode to dynamic
        /* checkedStatus1: boolean;
         checkedStatus2: boolean;
         checkedStatus3: boolean;
         checkedStatus4: boolean;*/
        //@Input('parentData') incomingData: string;
        this.outgoingData = new core_1.EventEmitter();
        this.childSampleData = "Some child Data";
    }
    ngOnInit() {
        console.log("Inside Department1.ngOnInit()!!!!");
        var searchURL = "/rest/department/1/servicemenu";
        var requestHeaders = new http_1.Headers({ 'Accept': 'application/json' });
        var options = new http_1.RequestOptions({ headers: requestHeaders });
        this.http.get(searchURL, options).subscribe(res => this.department1Services = res.json());
    }
    addToList(e) {
        //this.storageService.add(e.target.id);
        var jaa = e.target.checked;
        console.log("e.target.checked: " + jaa + " operation succesfull");
        let selectedServiceId = e.target.id;
        console.log("selectedServiceId: " + selectedServiceId);
        let selectedServicePrice = e.target.value;
        console.log("selectedServicePrice : " + selectedServicePrice);
        /* let find:Service = this.department1Services.find(x => x.serviceId === selectedServiceId);
         let serviceId = find.serviceId;
         console.log(serviceId);
         let serviceName = find.serviceName;
         console.log(serviceName);
         let price = find.price;
         console.log(price)
         this.storageService.addService(find);
 */
        this.outgoingData.emit(e);
    }
};
__decorate([
    core_1.Output('childData'), 
    __metadata('design:type', Object)
], Dept1DentingpaintingComponent.prototype, "outgoingData", void 0);
Dept1DentingpaintingComponent = __decorate([
    core_1.Component({
        selector: 'services-outlet1',
        templateUrl: '../partials/dept1.component.html',
        styleUrls: ['../css/dept1.component.style.css'],
    }), 
    __metadata('design:paramtypes', [http_1.Http])
], Dept1DentingpaintingComponent);
exports.Dept1DentingpaintingComponent = Dept1DentingpaintingComponent;
//# sourceMappingURL=dept1.dentingpainting.component.js.map