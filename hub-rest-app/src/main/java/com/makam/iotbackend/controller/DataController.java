package com.makam.iotbackend.controller;

import com.makam.iotbackend.data.PerformanceData;
import com.makam.iotbackend.data.PerformanceDataRepository;
import com.makam.iotbackend.data.SystemData;
import com.makam.iotbackend.data.SystemDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "${react-uri}")
@RequestMapping("/api")
public class DataController {

    private final SystemDataRepository systemDataRepository;

    private final PerformanceDataRepository performanceDataRepository;

    @Autowired
    public DataController(SystemDataRepository systemDataRepository, PerformanceDataRepository performanceDataRepository) {
        this.systemDataRepository = systemDataRepository;
        this.performanceDataRepository = performanceDataRepository;
    }

    @GetMapping("/system-info")
    public List<SystemData> getSystemData(){
        return (List<SystemData>) systemDataRepository.findAll();
    }

    @GetMapping("/performance-info")
    public List<PerformanceData> getPerformanceData(){
        return (List<PerformanceData>) performanceDataRepository.findAll();
    }
}
