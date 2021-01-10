import { Component, OnInit } from '@angular/core';
import { Client } from '../model/client.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../services/client.service';


@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styles: [
  ]
})
export class UpdateClientComponent implements OnInit {
  currentClient = new Client();

  constructor( private activateRoute: ActivatedRoute,
               private router :Router,
               private clientService: ClientService ) { }

  ngOnInit(): void {

    // console.log(this.activateRoute.snapshot.params.code);
    this.currentClient = this.clientService.consulterClient(this.activateRoute.snapshot.params.code);
    console.log(this.currentClient);

  }

  updateClient() {

   //  console.log (this.currentClient);
   this.clientService.updateClient(this.currentClient);
   this.router.navigate(["clients"]);
  }



}
