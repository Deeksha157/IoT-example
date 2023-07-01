package com.makam.iotbackend.data;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name="PERFORMANCE_DATA")
public class PerformanceData {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID")
    private long id;

    @ManyToOne
    @JoinColumn(name = "SYSTEM_ID", referencedColumnName = "SYSTEM_ID")
    private SystemData systemData;

    @Column(name = "CPU_USAGE")
    private double cpuUsage;

    @Column(name = "MEMORY_USAGE")
    private double memoryUsage;

    @Column(name = "DATETIME")
    private Date datetime;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public SystemData getSystemData() {
        return systemData;
    }

    public void setSystemData(SystemData systemData) {
        this.systemData = systemData;
    }

    public double getCpuUsage() {
        return cpuUsage;
    }

    public void setCpuUsage(double cpuUsage) {
        this.cpuUsage = cpuUsage;
    }

    public double getMemoryUsage() {
        return memoryUsage;
    }

    public void setMemoryUsage(double memoryUsage) {
        this.memoryUsage = memoryUsage;
    }

    public Date getDatetime() {
        return datetime;
    }

    public void setDatetime(Date datetime) {
        this.datetime = datetime;
    }

    @Override
    public String toString() {
        return "PerformanceData{" +
                "id=" + id +
                ", systemData=" + systemData +
                ", cpuUsage=" + cpuUsage +
                ", memoryUsage=" + memoryUsage +
                ", datetime=" + datetime +
                '}';
    }
}
