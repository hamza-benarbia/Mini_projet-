import { Component, OnInit } from '@angular/core';
import { Client } from '../model/client.model';
import  {  ClientService  }  from  '../services/client.service';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html'
})
export class ClientsComponent implements OnInit {

  clients : Client []; 

  constructor( private clientService : ClientService ) {

   this.clients = clientService.listeClient();

  }

  ngOnInit(): void {
  }

  supprimerClient(cli : Client)
{
// console.log(cli);
let conf = confirm("Etes-vous sûr ?");
 if (conf)
this.clientService.supprimerClient (cli);
}

}