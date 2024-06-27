package com.example.demo.controller;

import com.example.demo.dto.request.AdvertisementRequest;
import com.example.demo.entity.Advertisement;
import com.example.demo.service.AdvertisementService;
import jakarta.annotation.Nonnull;
import jakarta.validation.constraints.Min;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/v1")
@RequiredArgsConstructor
public class AdvertisementController {
    private final AdvertisementService advertisementService;

    @GetMapping(path = "/advertisement/{id}")
    public ResponseEntity<Advertisement> getAdvertisement(@PathVariable @Nonnull UUID id) {
        final Advertisement advertisement = advertisementService.getAdvertisementById(id);
        return new ResponseEntity<>(advertisement, HttpStatus.OK);
    }

    @GetMapping(path = "/advertisements")
    public ResponseEntity<Page<Advertisement>> findAllAdvertisements(
            @RequestParam(defaultValue = "0") @Min(0) Integer page,
            @RequestParam(defaultValue = "2") @Min(0) Integer listSize,
            @RequestParam(defaultValue = "title") String sortBy,
            @RequestParam(defaultValue = "false") boolean sortDesc,
            @RequestParam(required = false) String contains) {
        Sort.Direction direction = sortDesc ? Sort.Direction.DESC : Sort.Direction.ASC;
        Sort sort = Sort.by(direction, sortBy);
        PageRequest pageRequest = PageRequest.of(page, listSize, sort);
        return ResponseEntity.ok().body(advertisementService.getAllAdvertisemets(pageRequest, contains));
    }

    @PostMapping(path = "/advertisement")
    public ResponseEntity<Advertisement> createAdvertisement(@RequestBody AdvertisementRequest request) {
        Advertisement advertisement = advertisementService.createAdvertisement(request);
        return new ResponseEntity<>(advertisement, HttpStatus.CREATED);
    }

    @PatchMapping(path = "/advertisement/{id}")
    public ResponseEntity<Advertisement> updateAdvertisement(@RequestBody AdvertisementRequest request,
                                                             @PathVariable @Nonnull UUID id) {
        Advertisement advertisement = advertisementService.updateAdvertisement(id, request);
        return new ResponseEntity<>(advertisement, HttpStatus.OK);
    }

    @DeleteMapping(path = "/advertisement/{id}")
    public ResponseEntity<?> deleteAdvertisement(@PathVariable @Nonnull UUID id) {
        advertisementService.deleteAdvertisement(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }




}
