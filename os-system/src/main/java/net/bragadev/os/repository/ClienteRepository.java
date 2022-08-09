package net.bragadev.os.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import net.bragadev.os.model.Cliente;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente, Long>{

	@Query("select c from Cliente c where c.cpf = :cpf")
	Cliente findByCpf(@Param("cpf") String cpf);
}
