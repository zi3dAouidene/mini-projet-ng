import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const cube = document.getElementById("cube");

const clickOnSide = (side : any) => {
  const activeSide = cube?.dataset['side'];
  cube?.classList.replace(`show-${activeSide}`, `show-${side}`);
  cube?.setAttribute("data-side", side);
};

document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", (e : any) => {
    const sideToTurn = e.target?.dataset.side;
    console.log(sideToTurn);
    
    clickOnSide(sideToTurn);
  })
});

  }

}
