import { TecnicoCreateComponent } from './views/components/tecnico/tecnico-create/tecnico-create.component';
import { HomeComponent } from './views/components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TecnicoReadComponent } from './views/components/tecnico/tecnico-read/tecnico-read.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tecnico', component: TecnicoReadComponent},
  {path: 'tecnico/create', component: TecnicoCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
