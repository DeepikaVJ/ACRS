export class Car{


    vin:number;
    make:string = "";
    model:string = "";
    year:string = "";
    trim:string = "";
    logo:string = "";

	constructor(make: string, model: string, year: string, trim: string, logo: string) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.trim = trim;
        this.logo = logo;
    }

}