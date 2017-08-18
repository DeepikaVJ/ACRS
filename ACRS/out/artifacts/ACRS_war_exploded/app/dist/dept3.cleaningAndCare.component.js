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
let Dept3CleaningAndCareComponent = class Dept3CleaningAndCareComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
    }
};
Dept3CleaningAndCareComponent = __decorate([
    core_1.Directive({}),
    core_1.Component({
        selector: 'services-outlet3',
        template: `<h1 style="float: right">HELLO FROM THE third DEPARTMENT</h1>
    `
    }), 
    __metadata('design:paramtypes', [http_1.Http])
], Dept3CleaningAndCareComponent);
exports.Dept3CleaningAndCareComponent = Dept3CleaningAndCareComponent;
//# sourceMappingURL=dept3.cleaningAndCare.component.js.map