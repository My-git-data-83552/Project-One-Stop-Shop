package com.onestopshop.entities;

import javax.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name = "categories")
public class Category extends BaseEntity {


    @Column(name = "name", nullable = false, unique = true)
    private String name;
}
