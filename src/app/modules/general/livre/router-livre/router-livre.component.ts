import { Component, OnInit } from '@angular/core';
import { SharingService } from  '../../../../services/livrePage.service';

@Component({
  selector: 'app-router-livre',
  templateUrl: './router-livre.component.html',
  styleUrls: ['./router-livre.component.css']
})
export class RouterLivreComponent implements OnInit {
  data: any = [] ;
  checked : any
  constructor(
    private sharingService:SharingService
  ) { }

  ngOnInit(): void {
    
    this.data = this.sharingService.getData();
    

  }

  comand(){
    this.data.commonde = !this.data.commonde
    console.log("data",this.data.commonde);
    
  }


}
