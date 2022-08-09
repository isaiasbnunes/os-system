package net.bragadev.os.repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import net.bragadev.os.model.Tecnico;

@Repository
public interface TecnicoRepository extends JpaRepository<Tecnico, Long>{

	@Query("select t from Tecnico t where t.cpf = :cpf")
	Tecnico findByCpf(@Param("cpf") String cpf);
	

}
