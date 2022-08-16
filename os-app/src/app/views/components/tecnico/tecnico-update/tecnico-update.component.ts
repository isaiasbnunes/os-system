import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { TecnicoService } from './../../../../services/tecnico.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Tecnico } from 'src/app/models/tecnico';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tecnico-update',
  templateUrl: './tecnico-update.component.html',
  styleUrls: ['./tecnico-update.component.css']
})
export class TecnicoUpdateComponent implements OnInit {

  id_tecnico = "";

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
    private route: ActivatedRoute
  ){ }

  ngOnInit(): void {
    this.id_tecnico = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  update():void{
    this.service.update(this.tecnico).subscribe((r) =>{
      this.router.navigate(['tecnico']);
      this.service.message('Técnico atualizado com sucesso!');
    })
  }

  findById():void{
    this.service.findById(this.id_tecnico).subscribe(r => {
      this.tecnico = r;
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
