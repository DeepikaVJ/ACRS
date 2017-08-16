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
let SumComponent = class SumComponent {
    constructor() {
        this.num1 = 0;
        this.num2 = 0;
        this.sum = 0;
    }
    DoSum() {
        this.sum = this.num1 + this.num2;
    }
};
SumComponent = __decorate([
    core_1.Component({
        template: `<div>
				<input type='number' [(ngModel)]='num1'>
				<input type='number' [(ngModel)]='num2'>
				<input type='button' value='Add' (click)='DoSum();' />
				<h1> Sum is: {{sum}}</h1>
		</div>`,
        selector: 'my-app'
    }), 
    __metadata('design:paramtypes', [])
], SumComponent);
exports.SumComponent = SumComponent;
//# sourceMappingURL=sum.component.js.map