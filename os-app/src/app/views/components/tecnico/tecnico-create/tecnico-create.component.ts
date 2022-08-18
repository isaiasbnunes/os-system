import { SnackBarMessageService } from './../../../../services/snack-bar-message.service';
import { Tecnico } from './../../../../models/tecnico';
import { TecnicoService } from './../../../../services/tecnico.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-tecnico-create',
  templateUrl: './tecnico-create.component.html',
  styleUrls: ['./tecnico-create.component.css']
})
export class TecnicoCreateComponent implements OnInit {

  tecnico: Tecnico = {
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
    private service: TecnicoService,
    private snackBarService: SnackBarMessageService
  ){ }

  ngOnInit(): void {
  }

  create():void{
    this.service.create(this.tecnico).subscribe((resposta)=>{
      this.router.navigate(['tecnico']);
      this.snackBarService.message('Tecnico criado com sucesso!');
    }, err => {
      if(err.error.match('já cadastrado')){
        this.snackBarService.message(err.error)
      }
    })

  }

  cancel():void{
    this.router.navigate(['tecnico']);
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
