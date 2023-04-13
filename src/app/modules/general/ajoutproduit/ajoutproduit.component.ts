import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/produit.service';
import { Produit } from 'src/app/shared/produit';
import {Router , NavigationEnd  } from "@angular/router"
@Component({
  selector: 'app-ajoutproduit',
  templateUrl: './ajoutproduit.component.html',
  styleUrls: ['./ajoutproduit.component.css']
})
export class AjoutproduitComponent implements OnInit {
  currentRoute!: any
  productId!: number

  constructor(
    private addProduct : ProduitService,
    private router: Router
    ) { 
      this.router.events.subscribe(event => 
      {  this.productId =  Number(this.router.url.split('/').pop())
    
    }
      )

    }

     newPorduct : Produit  = new Produit()

  ngOnInit(): void {

    
    
    

  }
  typeOf(value : any) {
    return typeof value;
  }

  addProductFunc(){
    this.addProduct.ListProduit().subscribe(data=> this.newPorduct.id = Object.values(data).pop())
    
    
    this.addProduct.AddProduit(this.newPorduct).subscribe(data => this.router.navigate(['/list-produit']))


  }

  modifProductFunc(){
    
    
    
    this.addProduct.AddProduit(this.newPorduct).subscribe(data => this.router.navigate(['/list-produit']))

   
  }

}
