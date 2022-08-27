
import { Ordem } from 'src/app/models/ordem';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from './../../../../models/cliente';
import { Tecnico } from 'src/app/models/tecnico';
import { Component, OnInit } from '@angular/core';
import { TecnicoService } from 'src/app/services/tecnico.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { OrdemService } from 'src/app/services/ordem.service';
import { SnackBarMessageService } from 'src/app/services/snack-bar-message.service';


@Component({
  selector: 'app-os-update',
  templateUrl: './os-update.component.html',
  styleUrls: ['./os-update.component.css']
})
export class OsUpdateComponent implements OnInit {

  osForm !: FormGroup;
  id: any;
  ordem!: Ordem;

  selectedTecnico: any;
  selectedCliente: any;

  tecnicos: Tecnico[]=[];
  clientes: Cliente[]=[];

  constructor(
     private tecnicoService: TecnicoService,
     private clienteService: ClienteService,
     private osService: OrdemService,
     private snackBarService: SnackBarMessageService,
     private router: Router,
     private activatedRoute: ActivatedRoute,
     private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.initForm();
    this.findById();
    this.listTecnicos();
    this.listClientes();
  }


  initForm(){
    this.osForm = this.formBuilder.group({
      prioridade: ['',Validators.required],
      observacoes: ['',Validators.required],
      status: ['',Validators.required],
      tecnico:  ['',Validators.required],
      cliente: ['',Validators.required],
      id: ['']
    })
  }

  findById():void{
    this.osService.findById(this.id).subscribe(r =>{
      this.ordem = r;
      this.initFormEdit();
    })
  }

  initFormEdit(){
    this.osForm.controls['prioridade'].setValue(this.ordem.prioridade);
    this.osForm.controls['observacoes'].setValue(this.ordem.observacoes);
    this.osForm.controls['status'].setValue(this.ordem.status);
    this.osForm.controls['tecnico'].setValue(this.ordem.tecnico);
    this.osForm.controls['cliente'].setValue(this.ordem.cliente);
    this.osForm.controls['id'].setValidators(this.ordem.id);
    this.selectedTecnico = this.ordem.tecnico;
    this.selectedCliente = this.ordem.cliente;
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

  update():void{
      this.ordem = this.osForm.value;
      this.ordem.id = this.id;
      this.osService.update(this.ordem).subscribe(r =>{
      this.snackBarService.message('Ordem de serviço editada com sucesso!');
      this.router.navigate(['os']);
    })
  }

  cancel():void{
    this.router.navigate(['os']);
  }
}
