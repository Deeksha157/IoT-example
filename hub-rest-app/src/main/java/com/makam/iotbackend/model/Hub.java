package com.makam.iotbackend.model;

import java.util.Date;

public class Hub {
    private int systemId;
    private int processorSpeed;
    private String os;
    private String processorName;
    private float cpuUsage;
    private float memoryUsed;
    private Date datetime;

    public int getSystemId() {
        return systemId;
    }

    public void setSystemId(int systemId) {
        this.systemId = systemId;
    }

    public int getProcessorSpeed() {
        return processorSpeed;
    }

    public void setProcessorSpeed(int processorSpeed) {
        this.processorSpeed = processorSpeed;
    }

    public String getOs() {
        return os;
    }

    public void setOs(String os) {
        this.os = os;
    }

    public String getProcessorName() {
        return processorName;
    }

    public void setProcessorName(String processorName) {
        this.processorName = processorName;
    }

    public float getCpuUsage() {
        return cpuUsage;
    }

    public void setCpuUsage(float cpuUsage) {
        this.cpuUsage = cpuUsage;
    }

    public float getMemoryUsed() {
        return memoryUsed;
    }

    public void setMemoryUsed(float memoryUsed) {
        this.memoryUsed = memoryUsed;
    }

    public Date getDatetime() {
        return datetime;
    }

    public void setDatetime(Date datetime) {
        this.datetime = datetime;
    }

    @Override
    public String toString() {
        return "Hub{" +
                "id=" + systemId +
                ", processorSpeed=" + processorSpeed +
                ", os='" + os + '\'' +
                ", processorName='" + processorName + '\'' +
                ", cpuUsage=" + cpuUsage +
                ", memoryUsed=" + memoryUsed +
                ", datetime=" + datetime +
                '}';
    }
}
