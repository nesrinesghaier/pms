import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _http: HttpClient) { }

  url = 'https://samples.openweathermap.org/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22';
  header = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json, text/plain, */*'
  });
  dailyForecast() {

    return this._http.get(this.url, {headers: this.header}).pipe(map(result => result));

  }
  // chart = []; // This will hold our chart info

  // constructor(private _weather: WeatherService) {}
  //
  // ngOnInit() {
  //   this._weather.dailyForecast()
  //     .subscribe(res => {
  //       const temp_max = res['list'].map(res => res.main.temp_max);
  //       const temp_min = res['list'].map(res => res.main.temp_min);
  //       const alldates = res['list'].map(res => res.dt)
  //
  //       const weatherDates = []
  //       alldates.forEach((res) => {
  //         const jsdate = new Date(res * 1000)
  //         weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }));
  //       });
  //     });
  // }
}
