import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/general/home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './modules/general/about/about.component';
import { ContactComponent } from './modules/general/contact/contact.component';
import { ProduitComponent } from './modules/general/produit/produit.component';
import { LivreComponent } from './modules/general/livre/livre.component';
import { ListProduitComponent } from './modules/general/list-produit/list-produit.component';
import { RouterLivreComponent } from './modules/general/livre/router-livre/router-livre.component';
import { SharingService } from './services/livrePage.service';
import { AjoutproduitComponent } from './modules/general/ajoutproduit/ajoutproduit.component';
import { MeteoComponent } from './modules/general/meteo/meteo.component';
import { HttpClientModule } from '@angular/common/http';
import {GMapModule} from 'primeng/gmap';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    ProduitComponent,
    LivreComponent,
    ListProduitComponent,
    RouterLivreComponent,
    AjoutproduitComponent,
    MeteoComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GMapModule
    
  ],
  providers: [SharingService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
