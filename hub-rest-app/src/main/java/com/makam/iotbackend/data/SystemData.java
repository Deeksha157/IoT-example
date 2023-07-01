package com.makam.iotbackend.data;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "SYSTEM_DATA")
public class SystemData {

    @Id
    @Column(name = "SYSTEM_ID")
    private int systemId;
    @Column(name = "OS_NAME")
    private String osName;
    @Column(name = "PROCESSOR_NAME")
    private String processorName;
    @Column(name = "PROCESSOR_SPEED")
    private int processorSpeed;

    public int getSystemId() {
        return systemId;
    }

    public void setSystemId(int systemId) {
        this.systemId = systemId;
    }

    public String getOsName() {
        return osName;
    }

    public void setOsName(String osName) {
        this.osName = osName;
    }

    public String getProcessorName() {
        return processorName;
    }

    public void setProcessorName(String processorName) {
        this.processorName = processorName;
    }

    public int getProcessorSpeed() {
        return processorSpeed;
    }

    public void setProcessorSpeed(int processorSpeed) {
        this.processorSpeed = processorSpeed;
    }

    @Override
    public String toString() {
        return "SystemData{" +
                "systemId=" + systemId +
                ", osName='" + osName + '\'' +
                ", processorName=" + processorName +
                ", processorSpeed=" + processorSpeed +
                '}';
    }
}
