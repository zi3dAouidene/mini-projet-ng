import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Meteo {
  apiUrlcurrent = environment.config.apiUrlcurrent;
  apiUrlfuture = environment.config.apiUrlfuture;
  apiKey = environment.config.apiKey;
  constructor(private http: HttpClient) {}

  currentWeather(ville: string): Observable<any> {
    return this.http.get<any>(
      this.apiUrlcurrent + ville + '&appid=' + this.apiKey
    );
  }
  fiveDaysWeather(ville: string): Observable<any> {
    return this.http.get<any>(
      this.apiUrlfuture + ville + '&appid=' + this.apiKey
    );
  }
}

    
