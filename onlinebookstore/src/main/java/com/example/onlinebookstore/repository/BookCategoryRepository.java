package com.example.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.onlinebookstore.entity.BookCategory;

//@CrossOrigin(origins = "http://localhost:4200")
@RepositoryRestResource(collectionResourceRel ="bookCategory", path="book-category")
public interface BookCategoryRepository extends JpaRepository<BookCategory, Long>{

}
