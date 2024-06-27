package com.example.demo.service;

import com.example.demo.dto.request.AdvertisementRequest;
import com.example.demo.dto.request.CategoryRequest;
import com.example.demo.entity.Advertisement;
import com.example.demo.repository.AdvertisementRepository;
import jakarta.persistence.EntityExistsException;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class AdvertisementService {
    private final AdvertisementRepository advertisementRepository;

    public Advertisement createAdvertisement(AdvertisementRequest advertisementRequest) {
        if (advertisementRepository.findByTitle(advertisementRequest.getTitle()).isPresent()) {
            throw new EntityExistsException("advertisement with such name already exists");
        }
        Advertisement advertisement = Advertisement.builder()
                .title(advertisementRequest.getTitle())
                .description(advertisementRequest.getDescription())
                .price(advertisementRequest.getPrice())
                .city(advertisementRequest.getCity())
                .build();
        advertisementRepository.save(advertisement);
        return advertisement;
    }

    public void deleteAdvertisement(UUID id) {
        if (advertisementRepository.existsById(id)) {
            advertisementRepository.deleteById(id);
            log.info("{}: Deleted advertisement from the database with ID: {}", this.getClass().getName(), id);
        } else {
            throw new EntityNotFoundException("advertisement was not found with ID: " + id);
        }
    }

    public Advertisement updateAdvertisement(UUID id, AdvertisementRequest request) {
        Advertisement advertisementToUpdate = advertisementRepository.findById(id).orElseThrow(
                () -> new EntityNotFoundException("advertisement not found with id: " + id)
        );
        if (advertisementToUpdate.getTitle().equals(request.getTitle())) {
            throw new EntityExistsException("advertisement with such name already exists");
        }

        advertisementToUpdate.setTitle(request.getTitle());
        advertisementToUpdate.setDescription(request.getDescription());
        advertisementToUpdate.setPrice(request.getPrice());
        advertisementToUpdate.setCity(request.getCity());
        advertisementRepository.save(advertisementToUpdate);
        return advertisementToUpdate;
    }

    public Page<Advertisement> getAllAdvertisemets(PageRequest pageRequest, String contains) {
        if (contains == null) {
            return advertisementRepository.findAll(pageRequest);
        } else {
            return advertisementRepository.findByTitleContainingIgnoreCase(pageRequest, contains);
        }

    }

    public Advertisement getAdvertisementById(UUID id){
        Advertisement advertisement =  advertisementRepository.findById(id)
                .orElseThrow(()-> new EntityNotFoundException("advertisement not found with id: " + id));
        log.debug("Fetched book {} from database", advertisement.getId());
        return advertisement;
    }


}