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
const person_1 = require("./person");
let PersonDetailComponent = class PersonDetailComponent {
    constructor() {
        this.title = "Person Details";
        this.person = null;
        this.imageSize = { w: 200, h: 200 };
        //this.person = new Person();
        this.person = new person_1.Person('Pintu', 12, '9800000000', 'images/adv1.jpg');
        console.log("PersonDetailComponent initialized!!!!!!");
    }
    showDetail() {
        console.info("PersonDetailComponent showDetail clicked!!!!!!");
    }
    run(speed) {
        console.info("Person " + this.person.name + " running " + speed + " miles per hour.");
    }
};
PersonDetailComponent = __decorate([
    core_1.Component({
        template: `<div>
		<h1>{{title}}</h1>
		<img [width]='imageSize.w' [height]='imageSize.h' [src]='person.avatar' />
		<h2>Name: {{person.name}}</h2>
		<h2>Age: {{person.age}}</h2>
		<h2>Phone: {{person.phone}}</h2>
		<input type='button' value='Show' (click)='showDetail();' />
		<input type='button' value='Run' (click)='run(person.age);' />
		</div>`,
        selector: 'my-app'
    }), 
    __metadata('design:paramtypes', [])
], PersonDetailComponent);
exports.PersonDetailComponent = PersonDetailComponent;
//# sourceMappingURL=persondetail.component.js.map