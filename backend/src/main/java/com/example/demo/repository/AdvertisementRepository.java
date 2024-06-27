package com.example.demo.repository;

import com.example.demo.entity.Advertisement;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface AdvertisementRepository extends JpaRepository<Advertisement, UUID> {
    Page<Advertisement> findByTitleContainingIgnoreCase(PageRequest pageRequest, String contains);

    Optional<Advertisement> findByTitle (String title);
}
