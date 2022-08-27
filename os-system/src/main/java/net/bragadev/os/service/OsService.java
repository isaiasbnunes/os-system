package net.bragadev.os.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.bragadev.os.exceptions.DataException;
import net.bragadev.os.model.Cliente;
import net.bragadev.os.model.OrdemServico;
import net.bragadev.os.repository.OrdemServicoRepository;

@Service
public class OsService {

	@Autowired
	private OrdemServicoRepository repository;
	
	public List<OrdemServico> findAll(){
		return repository.findAll();
	}
	
	public OrdemServico findOrdemServicoById(Long id) {
		 Optional<OrdemServico> s = repository.findById(id);
		return s.orElseThrow(() -> new DataException("Ordem de servico não encontrada! Id: "+id));
	}
	
	public OrdemServico create(OrdemServico s) {
		return repository.save(s);
	}
	
	public OrdemServico update(OrdemServico o) {
		return repository.save(o);
	}
	
	public void delete(Long id) {
		OrdemServico o = findOrdemServicoById(id);
		repository.delete(o);
	}
}
