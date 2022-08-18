import { DialogService } from './../../../../shared/dialog.service';
import { Router } from '@angular/router';
import { SnackBarMessageService } from './../../../../services/snack-bar-message.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from './../../../../models/cliente';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements OnInit {

  clientes: Cliente[]=[];

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'telefone', 'actions'];
  dataSource = new MatTableDataSource<Cliente>(this.clientes);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private service: ClienteService,
    private snackBarMessageService: SnackBarMessageService,
    private router: Router,
    private serviceDialog: DialogService
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  navigateToCreate():void{
    this.router.navigate(['cliente/create'])
  }

  findAll():void{
    this.service.findAll().subscribe((resposta) => {
      this.clientes = resposta;
      this.dataSource = new MatTableDataSource<Cliente>(this.clientes);
      this.dataSource.paginator = this.paginator;
    })
  }

  private onSuccessDelete():void{
    this.findAll();
    this.snackBarMessageService.message('Cliente deletado com sucesso!');
  }

  private delete(id: any): void{
    this.service.delete(id).subscribe(
      r => this.onSuccessDelete()
    );
  }

  openDialog(id: any):void{
    this.serviceDialog.openDialog("Excluir cliente",
      "Tem certeza que deseja excluir o cliente selecionado?")
   .afterClosed().subscribe(r =>{
      if(r){
        this.delete(id);
      }
   });
  }

}
