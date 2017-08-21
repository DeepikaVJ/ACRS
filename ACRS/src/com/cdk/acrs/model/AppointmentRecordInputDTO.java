package com.cdk.acrs.model;

public class AppointmentRecordInputDTO {
    int vin;
    double totalPrice;
    int[] selectedServiceIds;
    String[] selectedServiceNames;

    public AppointmentRecordInputDTO(int vin, double totalPrice, int[] selectedServiceIds, String[] selectedServiceNames) {
        this.vin = vin;
        this.totalPrice = totalPrice;
        this.selectedServiceIds = selectedServiceIds;
        this.selectedServiceNames = selectedServiceNames;
    }
    public AppointmentRecordInputDTO(){}

    public int getVin() {
        return vin;
    }

    public void setVin(int vin) {
        this.vin = vin;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public int[] getSelectedServiceIds() {
        return selectedServiceIds;
    }

    public void setSelectedServiceIds(int[] selectedServiceIds) {
        this.selectedServiceIds = selectedServiceIds;
    }

    public String[] getSelectedServiceNames() {
        return selectedServiceNames;
    }

    public void setSelectedServiceNames(String[] selectedServiceNames) {
        this.selectedServiceNames = selectedServiceNames;
    }
}
