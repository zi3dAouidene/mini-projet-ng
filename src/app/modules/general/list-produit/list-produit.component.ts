import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/produit.service';
@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {

  constructor(private prduitService : ProduitService) { }

  productList:any = []
  ngOnInit(): void {
   this.loadProduct()

  }

  loadProduct(){
    this.prduitService.ListProduit().subscribe(data => this.productList = data )
  }
  deleteProduct(id : number){
    console.log(id);
    
    this.prduitService.DeleteProduit(id).subscribe(data => this.loadProduct())
  }

}
