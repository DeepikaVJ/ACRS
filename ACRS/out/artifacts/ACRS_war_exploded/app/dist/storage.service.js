"use strict";
class StorageService {
    constructor() {
        this.serviceHolder = null;
        this.selectedServicesArray = [];
        console.log("Inside StorageService.constructor()");
    }
    add(serviceId) {
        let flag = false;
        console.log("Inside StorageService.add()");
        for (let id of this.selectedServicesArray) {
            if (id === serviceId) {
                flag = true;
            }
        }
        if (flag == false) {
            this.selectedServicesArray.push(serviceId);
        }
    }
    get() {
        console.log("Inside StorageService.get()");
        console.log("returning array:");
        for (let id of this.selectedServicesArray) {
            console.log(" " + id);
        }
        return this.selectedServicesArray;
    }
}
exports.StorageService = StorageService;
//# sourceMappingURL=storage.service.js.map