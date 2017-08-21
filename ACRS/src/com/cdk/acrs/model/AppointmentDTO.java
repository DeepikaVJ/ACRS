package com.cdk.acrs.model;

public class AppointmentDTO {
    private int vin;
    private double totalPrice;
    private int status;

    public AppointmentDTO(int vin, double totalPrice, int status) {
        this.vin = vin;
        this.totalPrice = totalPrice;
        this.status = status;
    }

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

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }
}
