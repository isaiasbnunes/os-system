import { DialogService } from 'src/app/shared/dialog.service';
import { Router } from '@angular/router';
import { SnackBarMessageService } from './../../../../services/snack-bar-message.service';
import { OrdemService } from './../../../../services/ordem.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Ordem } from './../../../../models/ordem';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-os-read',
  templateUrl: './os-read.component.html',
  styleUrls: ['./os-read.component.css']
})
export class OsReadComponent implements OnInit {

  ordens: Ordem[] = [];

  displayedColumns: string[] = ['tecnico', 'cliente',
  'prioridade',  'status', 'dataAbertura', 'dataFechamento' , 'actions'];

  dataSource = new MatTableDataSource<Ordem>(this.ordens);

  @ViewChild(MatPaginator) paginator!: MatPaginator;



  constructor(
    private service: OrdemService,
    private snackBarMessageService: SnackBarMessageService,
    private router: Router,
    private serviceDialog: DialogService
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  navigateToCreate():void{
    this.router.navigate(['os/create'])
  }

  findAll():void{
    this.service.findAll().subscribe((resposta) => {
      this.ordens = resposta;
      this.dataSource = new MatTableDataSource<Ordem>(this.ordens);
      this.dataSource.paginator = this.paginator;
    })
  }

  private onSuccessDelete():void{
    this.findAll();
    this.snackBarMessageService.message('Ordem de serviço deletada com sucesso!');
  }

  private delete(id: any): void{
    this.service.delete(id).subscribe(
      r => this.onSuccessDelete()
    );
  }

  openDialog(id: any):void{
    this.serviceDialog.openDialog("Excluir ordem de serviço",
      "Tem certeza que deseja excluir a ordem de serviço selecionada?")
   .afterClosed().subscribe(r =>{
      if(r){
        this.delete(id);
      }
   });
  }

  setColorPrioridade(c: string): string{
    if(c == 'ALTA'){
      return 'prioridade-alta';
    }else if(c == 'BAIXA'){
      return 'prioridade-baixa';
    }
    else{
      return 'prioridade-media';
    }
  }

}
