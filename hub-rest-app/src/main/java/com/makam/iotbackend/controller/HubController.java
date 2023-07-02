package com.makam.iotbackend.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.makam.iotbackend.model.Hub;
import com.makam.iotbackend.service.KafkaProducer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HubController {

    private final KafkaProducer kafkaProducer;
    private static final Logger LOGGER = LoggerFactory.getLogger(HubController.class);

    @Autowired
    public HubController(KafkaProducer kafkaProducer) {
        this.kafkaProducer = kafkaProducer;
    }

    @PostMapping("/iot/data")
    public void iotPerformance(@RequestBody Hub hub) throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        String message = objectMapper.writeValueAsString(hub);
        kafkaProducer.sendMessage(message);
    }

}
