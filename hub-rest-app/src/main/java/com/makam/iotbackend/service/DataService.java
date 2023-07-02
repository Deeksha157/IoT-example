package com.makam.iotbackend.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.makam.iotbackend.data.PerformanceData;
import com.makam.iotbackend.data.PerformanceDataRepository;
import com.makam.iotbackend.data.SystemData;
import com.makam.iotbackend.data.SystemDataRepository;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Map;

@Service
public class DataService {

    private final PerformanceDataRepository performanceDataRepository;

    private final SystemDataRepository systemDataRepository;

    private final ObjectMapper objectMapper = new ObjectMapper();

    public DataService(PerformanceDataRepository performanceDataRepository, SystemDataRepository systemDataRepository) {
        this.performanceDataRepository = performanceDataRepository;
        this.systemDataRepository = systemDataRepository;
    }

    public void insertData(String message) throws JsonProcessingException {

        Map<String, Object> data = objectMapper.readValue(message, new TypeReference<Map<String, Object>>() {});

        SystemData systemData = new SystemData();
        systemData.setSystemId((Integer) data.get("systemId"));
        systemData.setOsName((String) data.get("os"));
        systemData.setProcessorName((String) data.get("processorName"));
        systemData.setProcessorSpeed((Integer) data.get("processorSpeed"));
        systemDataRepository.save(systemData);

        String strSystemData = objectMapper.writeValueAsString(systemData);

        PerformanceData performanceData = new PerformanceData();
        performanceData.setCpuUsage((Double) data.get("cpuUsage"));
        performanceData.setMemoryUsage((Double) data.get("memoryUsed"));
        Date timestamp = new Date((Long) data.get("datetime"));
        performanceData.setDatetime(timestamp);
        performanceData.setSystemData(systemData);
        performanceDataRepository.save(performanceData);
    }
}
