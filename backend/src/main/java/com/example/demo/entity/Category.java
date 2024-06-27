package com.example.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.UUID;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "categories")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String name;


    @JsonIgnore
    @OneToMany(mappedBy = "category",
            cascade = {CascadeType.MERGE, CascadeType.DETACH, CascadeType.PERSIST, CascadeType.REFRESH, CascadeType.REMOVE})
    private Set<Advertisement> advertisements = new HashSet<>();

    public void addAdvertisement(Advertisement advertisement){
        advertisements.add(advertisement);
    }

    public void removeAdvertisement(Advertisement advertisement){
        advertisements.remove(advertisement);
    }

}
