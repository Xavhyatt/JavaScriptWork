package com.example.blockbuster.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.blockbuster.model.FilmModel;

public interface FilmRepository extends JpaRepository<FilmModel,Long>{
	

}
