import { SnackBarMessageService } from './../../../../services/snack-bar-message.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Cliente } from './../../../../models/cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  cliente: Cliente ={
    id: '',
    nome: '',
    cpf: '',
    telefone: ''
  }

  nome = new FormControl('',[Validators.minLength(5)])
  cpf = new FormControl('',[Validators.minLength(11)])
  telefone = new FormControl('',[Validators.minLength(11)])

  constructor(
    private router: Router,
    private service: ClienteService,
    private snackBarService: SnackBarMessageService
  ) { }

  ngOnInit(): void {
  }

  create():void{
    this.service.create(this.cliente).subscribe((resposta)=>{
      this.router.navigate(['cliente']);
      this.snackBarService.message('Cliente criado com sucesso!');
    }, err => {
      if(err.error.match('já cadastrado')){
        this.snackBarService.message(err.error)
      }
    })
  }

  cancel():void{
    this.router.navigate(['cliente']);
  }

  errorValidName(){
    if(this.nome.invalid){
      return 'O nome de ter entre 5 e 70 caracteres';
    }
    return false;
  }

  errorValidCpf(){
    if(this.nome.invalid){
      return 'O cpf deve ter entre 11 e 14 caracteres';
    }
    return false;
  }

  errorValidTelefone(){
    if(this.nome.invalid){
      return 'O telefone deve ter entre 11 e 15 caracteres';
    }
    return false;
  }

}
