import { Injectable } from '@angular/core';
import { Client } from '../model/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clients : Client [];
   
   // client : Client;
   
  constructor() { 
    this.clients = [
      {codeClient  : 1,	nomClient  :  "Mohamed Ali",  cinClient  :  12345678,  dateCreation  :  new  Date("01/14/2020")},
      {codeClient  :  2,	nomClient  :  "Hamza ben arbia",  cinClient  :  98765432,  dateCreation  :  new  Date("12/17/2020")},
      {codeClient  :  3,	nomClient  :"Samir Mohamed",  cinClient  :  87654321,  dateCreation  :  new  Date("02/20/2020")}
      
      ];

  }
  listeClient (): Client [] {
   return this.clients;

  }

ajouterClient (client : Client) {
  this.clients.push (client);


}

supprimerClient( cli: Client){
  //supprimer le client cli du tableau clients
  const index = this.clients.indexOf(cli, 0);
  if (index > -1) {
  this.clients.splice(index, 1);
  }
  //ou Bien
  /* this.clients.forEach((cur, index) => {
  if(cli.codeClient === cur.codeClient) {
  this.clients.splice(index, 1);
  }
  }); */
 }

 consulterClient(code:number): Client{
  return  this.clients.find(c => c.codeClient == code);
  // return this.client;
  } 


  updateClient(c:Client)
  {
  // console.log(c);
  this.supprimerClient(c);
  this.ajouterClient(c);
  this.trierClients();
  }


  trierClients(){
    this.clients = this.clients.sort((n1,n2) => {
    if (n1.codeClient > n2.codeClient) {
    return 1;
    }
    if (n1.codeClient < n2.codeClient) {
    return -1;
    }
    return 0;
    });
    }



}
