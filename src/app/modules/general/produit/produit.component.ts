import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  nomclient?: any
  nomste= "ABC entreprise"
  produit = [
    {id: 1, desing:'chassures', prix:30 , qte: 3 , description: 'chassure homme'},
    {id: 2, desing:'chemise', prix:40 , qte: 3 , description: 'chemise homme'},
    {id: 3, desing:'robes', prix:50 , qte: 13 , description: 'chassure fille'}]
  constructor() { }

  ngOnInit(): void {
  }

}
