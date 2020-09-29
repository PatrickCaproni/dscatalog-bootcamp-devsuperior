package com.patrickcaproni.dscatalog.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.patrickcaproni.dscatalog.entities.Category;
import com.patrickcaproni.dscatalog.repositories.CategoryRepository;

@Service
public class CategoryService {

	@Autowired
	public CategoryRepository repository;
	
	public List<Category> findAll(){
		return repository.findAll();
	}
	
}
