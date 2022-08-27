package net.bragadev.os.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.bragadev.os.exceptions.DataException;
import net.bragadev.os.model.Tecnico;
import net.bragadev.os.repository.TecnicoRepository;

@Service
public class TecnicoService {

	@Autowired
	private TecnicoRepository repository;
	
	public Tecnico findById(Long id) {
		Optional<Tecnico> t = repository.findById(id);
		return t.orElseThrow(()-> new DataException("Tecnico não encontrado! Id: "+ id));
	}
	
	public List<Tecnico> findAll() {
		return repository.findAll();
	}
	
	public Tecnico create(Tecnico t) {
		if(findByCpf(t) != null) {
			throw new DataException("CPF já cadastrado!");
		}
		return repository.save(t);
	}
	
	public Tecnico findByCpf(Tecnico t) {
		Tecnico obj = repository.findByCpf(t.getCpf());
		if(obj != null) {
			return obj;
		}
		return null;
	}

	public Tecnico update(Long id, Tecnico t) {
		Tecnico tecnico = findById(id);
			if(findByCpf(t) != null && findByCpf(t).getId() != id) {
				throw new DataException("CPF já cadastrado!");
			}
			
			tecnico.setNome(t.getNome());
			tecnico.setCpf(t.getCpf());
			tecnico.setTelefone(t.getTelefone());
			
		return repository.save(tecnico);
	}
	
	public void delete(Long id) {
		Tecnico t = findById(id);
		if(t.getList().size() > 0) {
			throw new DataException("Tecnico possuí ordens de serviço, não pode ser deletado!");
		}
		repository.deleteById(id);
	}
	
}







