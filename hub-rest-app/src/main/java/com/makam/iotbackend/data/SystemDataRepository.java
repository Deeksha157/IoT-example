package com.makam.iotbackend.data;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SystemDataRepository extends CrudRepository<SystemData, Integer> {

}
