package com.makam.iotbackend.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.support.KafkaHeaders;
import org.springframework.messaging.handler.annotation.Header;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class KafkaConsumer {

    @Autowired
    private DataService dataService;

    private static final Logger logger = LoggerFactory.getLogger(KafkaConsumer.class);

    @KafkaListener(topics = "${kafka-topic}")
    public void processMessage(String message,
                               @Header(KafkaHeaders.RECEIVED_PARTITION) List partitions,
                               @Header(KafkaHeaders.RECEIVED_TOPIC) List topics,
                               @Header(KafkaHeaders.OFFSET) List offsets) throws JsonProcessingException {
        logger.info("{}-{} {}: {}", topics.get(0), partitions.get(0), offsets.get(0), message);
        dataService.insertData(message);
    }
}
