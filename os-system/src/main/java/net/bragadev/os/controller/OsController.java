package net.bragadev.os.controller;

import java.util.List;

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

import net.bragadev.os.model.OrdemServico;
import net.bragadev.os.service.OsService;

@CrossOrigin("*")
@RestController
@RequestMapping("/os")
public class OsController {

	@Autowired
	private OsService service;
	
	@GetMapping
	public ResponseEntity<List<OrdemServico>> findAll(){
		return ResponseEntity.ok(service.findAll());
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<OrdemServico> findById(@PathVariable Long id){
		return ResponseEntity.ok().body(service.findOrdemServicoById(id));
	}
	
	@PostMapping
	public ResponseEntity<OrdemServico> create(@RequestBody OrdemServico o ){
		System.out.println(">>>>>>> Os tec " + o.getTecnico());
		
		return ResponseEntity.status(HttpStatus.CREATED).body(service.create(o));
	}
	
	@PutMapping
	public ResponseEntity<OrdemServico> update(@RequestBody OrdemServico o){
		return ResponseEntity.status(HttpStatus.NO_CONTENT).body(service.update(o));
	}
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id){
		service.delete(id);
		return ResponseEntity.noContent().build();
	}
}













