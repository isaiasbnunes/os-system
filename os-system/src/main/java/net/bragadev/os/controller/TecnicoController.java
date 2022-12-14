package net.bragadev.os.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.bragadev.os.model.Tecnico;
import net.bragadev.os.service.TecnicoService;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/tecnico")
public class TecnicoController {

	@Autowired
	public TecnicoService service;

	@GetMapping(value = "/{id}")
	public ResponseEntity<Object> findById(@PathVariable Long id) {
		return ResponseEntity.ok().body(service.findById(id));
	}

	@GetMapping
	public ResponseEntity<List<Tecnico>> findAll() {
		List<Tecnico> list = service.findAll();
		return ResponseEntity.ok(list);
	}
	
	@PostMapping
	public ResponseEntity<Tecnico> create(@RequestBody Tecnico t){
		return ResponseEntity.status(HttpStatus.CREATED).body(service.create(t));
	}
	
	@PutMapping(value = "/{id}")
	public ResponseEntity<Tecnico> update(@PathVariable Long id, @RequestBody Tecnico t){
		Tecnico tecnico = service.update(id, t);
		return ResponseEntity.status(HttpStatus.NO_CONTENT).body(tecnico);
	}
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id ){
		service.delete(id);
		return ResponseEntity.noContent().build();
	}
}








