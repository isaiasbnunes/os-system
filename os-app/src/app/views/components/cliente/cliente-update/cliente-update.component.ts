import { SnackBarMessageService } from './../../../../services/snack-bar-message.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Cliente } from './../../../../models/cliente';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {

  id_cliente = "";

  cliente: Cliente = {
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
    private snackBarService: SnackBarMessageService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id_cliente = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  findById():void{
    this.service.findById(this.id_cliente).subscribe(r => {
      this.cliente = r;
    })
  }

  update():void{
    this.service.update(this.cliente).subscribe((c) =>{
      this.cancel();
      this.snackBarService.message('Cliente atualizado com sucesso!');
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
