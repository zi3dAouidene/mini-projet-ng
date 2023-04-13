import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './modules/general/about/about.component';
import { AjoutproduitComponent } from './modules/general/ajoutproduit/ajoutproduit.component';
import { ContactComponent } from './modules/general/contact/contact.component';
import { HomeComponent } from './modules/general/home/home.component';
import { ListProduitComponent } from './modules/general/list-produit/list-produit.component';
import { LivreComponent } from './modules/general/livre/livre.component';
import { RouterLivreComponent } from './modules/general/livre/router-livre/router-livre.component';
import { MeteoComponent } from './modules/general/meteo/meteo.component';
import { ProduitComponent } from './modules/general/produit/produit.component';

const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'produit' , component: ProduitComponent},
  {path: 'about' , component: AboutComponent},
  {path: 'contact' , component: ContactComponent},
  {path: 'livre' , component: LivreComponent  },
  {path: 'livre/:id' , component: RouterLivreComponent  },
  {path: 'list-produit' , component: ListProduitComponent},
  {path: 'ajoutproduit' , component: AjoutproduitComponent},
  {path: 'modifProduit/:id' , component: AjoutproduitComponent},
  {path: 'meteo' , component: MeteoComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
