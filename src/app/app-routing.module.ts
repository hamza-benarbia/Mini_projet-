import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { AddClientComponent } from './add-client/add-client.component';
import { UpdateClientComponent } from './update-client/update-client.component';

const routes: Routes = [
  { path : "clients" , component : ClientsComponent }, 
  { path : "add-client" , component : AddClientComponent },
  {path: "updateClient/:code", component: UpdateClientComponent},
  { path: "", redirectTo: "clients", pathMatch: "full" }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
