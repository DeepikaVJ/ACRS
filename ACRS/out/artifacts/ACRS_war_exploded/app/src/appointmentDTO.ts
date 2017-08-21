export class AppointmentDTO {
    vin: number=0;
    totalPrice: number = 0;
    selectedServiceIds: number[] = [];
    selectedServiceNames: string[] = [];


    constructor(vin: number, totalPrice: number, selectedServiceIds: number[], selectedServiceNames: string[]) {
        this.vin = vin;
        this.totalPrice = totalPrice;
        this.selectedServiceIds = selectedServiceIds;
        this.selectedServiceNames = selectedServiceNames;
    }
}