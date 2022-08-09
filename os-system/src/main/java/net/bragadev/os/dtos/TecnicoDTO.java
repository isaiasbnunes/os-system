package net.bragadev.os.dtos;

import java.io.Serializable;

import net.bragadev.os.model.Tecnico;

public class TecnicoDTO implements Serializable{

	private static final long serialVersionUID = 1L;

	private Long id;
	private String nome;
	private String cpf;
	private String telefone;
	
	public TecnicoDTO() {
		super();
	}

	public TecnicoDTO(Tecnico t) {
		this.id = t.getId();
		this.nome = t.getNome();
		this.cpf = t.getCpf();
		this.telefone = t.getTelefone();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}
	
	
	
}
