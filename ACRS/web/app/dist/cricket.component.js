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
const router_1 = require('@angular/router');
let CricketComponent = class CricketComponent {
    constructor(router) {
        this.router = router;
        this.title = "Cricket Details";
        this.summary = "Cricket is good for health";
    }
    homePage() {
        //100 loc
        var homeLink = ['/home'];
        this.router.navigate(homeLink);
    }
};
CricketComponent = __decorate([
    core_1.Component({
        selector: 'cricket',
        template: `<div>
        <h1>{{title}}</h1>
        <h2>{{summary}}</h2>
        <input type="button" value="Go Home" (click)="homePage();" />
    </div>`
    }), 
    __metadata('design:paramtypes', [router_1.Router])
], CricketComponent);
exports.CricketComponent = CricketComponent;
//# sourceMappingURL=cricket.component.js.map