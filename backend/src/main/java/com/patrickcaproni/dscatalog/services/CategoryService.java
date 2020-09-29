package com.patrickcaproni.dscatalog.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.patrickcaproni.dscatalog.dto.CategoryDTO;
import com.patrickcaproni.dscatalog.entities.Category;
import com.patrickcaproni.dscatalog.repositories.CategoryRepository;

@Service
public class CategoryService {

	@Autowired
	public CategoryRepository repository;
	
	@Transactional(readOnly = true)
	public List<CategoryDTO> findAll(){
		List<Category> list = repository.findAll();
		
		return list.stream().map(x -> new CategoryDTO(x)).collect(Collectors.toList());
	}
	
}
