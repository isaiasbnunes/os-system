import { SnackBarMessageService } from './../../../../services/snack-bar-message.service';
import { DialogService } from './../../../../shared/dialog.service';
import { TecnicoService } from './../../../../services/tecnico.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Tecnico } from 'src/app/models/tecnico';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tecnico-read',
  templateUrl: './tecnico-read.component.html',
  styleUrls: ['./tecnico-read.component.css']
})
export class TecnicoReadComponent implements AfterViewInit {

  tecnicos: Tecnico[] = [];


  displayedColumns: string[] = ['id', 'nome', 'cpf', 'telefone', 'actions'];
  dataSource = new MatTableDataSource<Tecnico>(this.tecnicos);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private service: TecnicoService,
    private snackBarMessageService: SnackBarMessageService,
    private router: Router,
    private serviceDialog: DialogService
  ){}

  ngAfterViewInit() {
    this.findAll();
  }

  findAll():void{
      this.service.findAll().subscribe((resposta) => {
        this.tecnicos = resposta;
        this.dataSource = new MatTableDataSource<Tecnico>(this.tecnicos);
        this.dataSource.paginator = this.paginator;
      })
  }

  navigateToCreate():void{
    this.router.navigate(['tecnico/create'])
  }

  private onSuccessDelete():void{
    this.findAll();
    this.snackBarMessageService.message('Técnico deletado com sucesso!');
  }

  private delete(id: any): void{
    this.service.delete(id).subscribe(
      r => this.onSuccessDelete()
    );
  }

  openDialog(id: any):void{
   this.serviceDialog.openDialog("Excluir técnico",
      "Tem certeza que deseja excluir o técnico selecionado?")
   .afterClosed().subscribe(r =>{
      if(r){
        this.delete(id);
      }
   });
  }


}
