package com.example.blockbuster.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.blockbuster.model.FilmModel;
import com.example.blockbuster.repository.FilmRepository;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class FilmController {

	@Autowired
	FilmRepository filmRepo;
	
	//Method to Get all Films
	@GetMapping("film")
	public List<FilmModel> getAllFilms() {
		return filmRepo.findAll();
	}
	
	//Method to Search Films
	@GetMapping("film/{title}")
	public List<FilmModel> getFilmByTitle(@PathVariable(value = "title") String title, Pageable pageable){
		
		return filmRepo.findAll().stream().filter((film) -> {
			if (film.getTitle().contains(title.toUpperCase()))
				return true;
			else
				return false;
		}).collect(Collectors.toList());
	}
	
	
}
