import { Component, OnInit } from '@angular/core';
import { SharingService } from  '../../../services/livrePage.service';
import { Router }         from '@angular/router';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {


  livre = [
    {id: 1,title:'bootsrap', imgUrl:'assets/img/img2.jpg', date:'10/10/2020' , commonde: false},
    {id: 2,title:'angular', imgUrl:'assets/img/img1.jpg', date:'10/10/2020' , commonde: true},
    {id: 3,title:'android', imgUrl:'assets/img/img3.jpg', date:'10/10/2020' , commonde: false},]
  constructor(
    private router:Router,
    private sharingService:SharingService
  ) { }

  ngOnInit(): void {
    
  }

  clicked(event : any ){
    
     this.sharingService.setData(this.livre[event]);
  }

}
