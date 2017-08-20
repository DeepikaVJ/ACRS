import {Service} from "./service";

export class StorageService {

    private serviceHolder: Service = null;
    private selectedServicesArray: number[] = [];
    private id: number;

    constructor() {
        console.log("Inside StorageService.constructor()");
    }


    add(serviceId: number) {
        let flag: boolean = false;
        console.log("Inside StorageService.add()");
        for (let id of this.selectedServicesArray) {
            if (id === serviceId) {
                flag = true;
            }
        }
        if (flag === false) {
            this.selectedServicesArray.push(serviceId);
        }
    }

    get () {
        console.log("Inside StorageService.get()");
        console.log("returning array:");

        for (let id of this.selectedServicesArray) {
            console.log(" " + id)
        }
        return this.selectedServicesArray;
    }


    /* addService(selectedServiceObject: Service) {
         console.log("Inside StorageService.addService()");
         this.serviceHolder=selectedServiceObject;
         console.log("serviceId---------------->"+this.serviceHolder.serviceId);
         console.log(this.serviceHolder.serviceName);
         console.log(this.serviceHolder.price);
     }

     getService(){
         console.log("Inside StorageService.getService()");
         return this.serviceHolder;
     }*/
}