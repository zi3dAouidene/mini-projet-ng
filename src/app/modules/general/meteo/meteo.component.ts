import { Component, OnInit } from '@angular/core';
import { Meteo } from '../../../services/meteo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css'],
})
export class MeteoComponent implements OnInit {
  data$: Observable<any> | undefined;
  city!: string;
  weather: any = [];



  meteofiveDays!: boolean;
  meteoCureent: any;
  meteoCurrentDate!: any;


  constructor(private meteo: Meteo) {}

  ngOnInit(): void {}

  getCurrentWeather() {
    this.meteoCureent = null;
    this.weather = [];
    this.meteo.currentWeather(this.city).subscribe((data) => {
      (this.meteoCureent = data),
        (this.meteoCurrentDate = new Date(this.meteoCureent.dt * 1000)
          .toISOString()
          .slice(0, 10));
    });
  }

  getFiveDaysWearther() {
    this.meteoCureent = null;
    this.weather = [];
    this.meteo
      .fiveDaysWeather(this.city)
      .subscribe((data) => this.rendering(data));
  }

  rendering(data: any) {
    data.list.forEach((element: any) => {
      this.weather.push(element);
    });
  }
}
