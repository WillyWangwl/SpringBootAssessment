package org.generation.SpringBootAssessment.repository;

import org.generation.SpringBootAssessment.repository.entity.Item;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ItemRepository extends CrudRepository <Item, Integer> {

    @Query("SELECT r FROM Item r ORDER BY targetDate ASC")
    List<Item> findAll();
}
