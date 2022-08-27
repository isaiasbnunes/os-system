import { OsCreateComponent } from './views/components/os/os-create/os-create.component';
import { ClienteUpdateComponent } from './views/components/cliente/cliente-update/cliente-update.component';
import { ClienteCreateComponent } from './views/components/cliente/cliente-create/cliente-create.component';
import { TecnicoUpdateComponent } from './views/components/tecnico/tecnico-update/tecnico-update.component';
import { TecnicoCreateComponent } from './views/components/tecnico/tecnico-create/tecnico-create.component';
import { HomeComponent } from './views/components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TecnicoReadComponent } from './views/components/tecnico/tecnico-read/tecnico-read.component';
import { ClienteReadComponent } from './views/components/cliente/cliente-read/cliente-read.component';
import { OsReadComponent } from './views/components/os/os-read/os-read.component';
import { OsUpdateComponent } from './views/components/os/os-update/os-update.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tecnico', component: TecnicoReadComponent},
  {path: 'tecnico/create', component: TecnicoCreateComponent},
  {path: 'tecnico/update/:id', component: TecnicoUpdateComponent},
  {path: 'cliente', component: ClienteReadComponent},
  {path: 'cliente/create', component: ClienteCreateComponent},
  {path: 'cliente/update/:id', component: ClienteUpdateComponent},
  {path: 'os', component: OsReadComponent},
  {path: 'os/create', component: OsCreateComponent},
  { path: 'os/update/:id', component: OsUpdateComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
