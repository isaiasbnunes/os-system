import { TecnicoUpdateComponent } from './views/components/tecnico/tecnico-update/tecnico-update.component';
import { TecnicoCreateComponent } from './views/components/tecnico/tecnico-create/tecnico-create.component';
import { HomeComponent } from './views/components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TecnicoReadComponent } from './views/components/tecnico/tecnico-read/tecnico-read.component';
import { ClienteReadComponent } from './views/components/cliente/cliente-read/cliente-read.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tecnico', component: TecnicoReadComponent},
  {path: 'tecnico/create', component: TecnicoCreateComponent},
  {path: 'tecnico/update/:id', component: TecnicoUpdateComponent},
  {path: 'cliente', component: ClienteReadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
