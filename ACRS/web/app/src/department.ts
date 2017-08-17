export class Department {

    departmentId: number;
    name: String = "";
    numberOfTechnicians: number;

    constructor(departmentId: number, name: string, numberOfTechnicians: number) {
        this.departmentId = departmentId;
        this.name = name;
        this.numberOfTechnicians = numberOfTechnicians;
    }

}