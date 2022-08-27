import { Router } from '@angular/router';
import { SnackBarMessageService } from './../../../../services/snack-bar-message.service';
import { OrdemService } from './../../../../services/ordem.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from './../../../../models/cliente';
import { Tecnico } from 'src/app/models/tecnico';
import { TecnicoService } from './../../../../services/tecnico.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms'

@Component({
  selector: 'app-os-create',
  templateUrl: './os-create.component.html',
  styleUrls: ['./os-create.component.css']
})
export class OsCreateComponent implements OnInit {

  osForm !: FormGroup;

  tecnicos: Tecnico[]=[];
  clientes: Cliente[]=[];

  constructor(
     private tecnicoService: TecnicoService,
     private clienteService: ClienteService,
     private osService: OrdemService,
     private snackBarService: SnackBarMessageService,
     private router: Router,
     private formBuilder: FormBuilder
  ) { }

  create():void{
    this.osService.create(this.osForm.value)
    .subscribe({
      next:(r)=>{
        this.router.navigate(['os']);
        this.snackBarService.message('Ordem de serviço criada com sucesso!');
      },
      error:()=>{
        this.snackBarService.message('Ocorreu um erro!');
      }
    })
  }

  ngOnInit(): void {
    this.listTecnicos();
    this.listClientes();
    this.initForm();
  }


  initForm(){
    this.osForm = this.formBuilder.group({
      prioridade: ['',Validators.required],
      observacoes: ['',Validators.required],
      status: ['',Validators.required],
      tecnico:  ['',Validators.required],
      cliente: ['',Validators.required]
    })
  }

  listTecnicos(){
    this.tecnicoService.findAll().subscribe(r => {
      this.tecnicos = r;
    })
  }

  listClientes(){
    this.clienteService.findAll().subscribe(r => {
      this.clientes = r;
    })
  }

  cancel():void{
    this.router.navigate(['os']);
  }

}
