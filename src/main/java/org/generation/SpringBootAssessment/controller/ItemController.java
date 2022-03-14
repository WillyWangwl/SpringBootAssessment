package org.generation.SpringBootAssessment.controller;

import org.generation.SpringBootAssessment.controller.dto.ItemDTO;
import org.generation.SpringBootAssessment.repository.entity.Item;
import org.generation.SpringBootAssessment.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@RestController
@RequestMapping("/item")
public class ItemController {

    private final ItemService itemService;

    public ItemController (@Autowired ItemService itemService) {
        this.itemService =itemService;
    }

    @CrossOrigin
    @GetMapping("/all")
    public Iterable<Item>getItems() {
        return itemService.all();
    }

    @CrossOrigin
    @PostMapping("/add")
    public void save(  @RequestParam(name="title", required = true) String title,
                       @RequestParam(name="description", required = true) String description,
                       @RequestParam(name="targetDate", required = true) String targetDate) throws IOException {

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        LocalDate newDate = LocalDate.parse(targetDate,formatter);

        ItemDTO itemDto = new ItemDTO(title, description, newDate);
        itemService.save(new Item(itemDto));
    }

}
