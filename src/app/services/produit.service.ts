import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient  } from "@angular/common/http";
import { Observable } from "rxjs";
import { Produit } from '../shared/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  baseUrl = environment.host
  constructor( private http:HttpClient) { }

 

ListProduit() :Observable<Produit[]>{ return this.http.get<Produit[]>(this.baseUrl); }

AddProduit(prod:Produit):Observable<Produit> { return this.http.post<Produit>(this.baseUrl,prod) }

UpdateProduit(id:number , prod:any):Observable<Produit>{ return this.http.put<Produit>(this.baseUrl+'/'+id, prod) }

DeleteProduit(id:number ):Observable<Produit>{ return this.http.delete<Produit>(this.baseUrl+'/'+id) }

GetProduit(id:number ):Observable<Produit>{ return this.http.get<Produit>(this.baseUrl+'/'+id) }
}
