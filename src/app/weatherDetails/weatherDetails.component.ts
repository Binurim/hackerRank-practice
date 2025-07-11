import { CommonModule } from '@angular/common';
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'weather-details',
  templateUrl: './weatherDetails.component.html',
  styleUrls: ['./weatherDetails.component.scss'],
  standalone: true,
  imports: [CommonModule]
})

export class WeatherDetails implements OnInit {
  @Input() weatherData: data[] = [];
  public isCityExist: boolean = false;
  public inputCity: data | undefined;

  ngOnInit() {

  }

  public checkCity(event: Event) {
    let cityValue = (event.target as HTMLInputElement).value;
    for (let city of this.weatherData) {
      if (city["name"].toLowerCase() == cityValue.toLowerCase()) {
        this.isCityExist =  true;
        this.inputCity =  city;
        break;
      } else {
        this.isCityExist = false;
      }
    }
  }
}

interface data {
  name: string;
  temperature: string;
  wind: string;
  humidity: string;
}
