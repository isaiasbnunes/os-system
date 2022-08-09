package net.bragadev.os.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.bragadev.os.dtos.TecnicoDTO;
import net.bragadev.os.exceptions.DataException;
import net.bragadev.os.model.Cliente;
import net.bragadev.os.model.Tecnico;
import net.bragadev.os.repository.ClienteRepository;

@Service
public class ClienteService {

	@Autowired
	private ClienteRepository repository;
	
	public Cliente findByCpf(Cliente cliente) {
		Cliente c = repository.findByCpf(cliente.getCpf());
		
		if(c != null) {
			return c;
		}
		
		return null;
	}
	
	public Cliente findClienteById(Long id) {
		 Optional<Cliente> c = repository.findById(id);
		return c.orElseThrow(() -> new DataException("Cliente não encontrado! Id: "+id));
	}
	
	public List<Cliente> findAll(){
		return repository.findAll();
	}
	
	public Cliente create(Cliente c) {
		if(findByCpf(c) != null ) {
		    throw new DataException("Cpf já cadastrado!");
		}
		return repository.save(c);
	}
	
	public Cliente update(Long id, Cliente cliente) {
		Cliente c = findClienteById(id);
		if(findByCpf(cliente) != null && c.getId() != id) {
			throw new DataException("Cpf já cadastrado!");
		}
		cliente.setId(id);
		return repository.save(cliente);
	}
	
	public void delete(Long id) {
		Cliente c = findClienteById(id);
		repository.delete(c);
	}
}




