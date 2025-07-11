import { CommonModule } from '@angular/common';
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'temperature-converter',
  templateUrl: './temperatureConverter.component.html',
  styleUrls: ['./temperatureConverter.component.scss'],
  standalone: true,
  imports: [CommonModule]
})

export class TemperatureConverter implements OnInit {
  public farenheitValue : number = 0;
  public celsiusValue: number = 0;

  ngOnInit() {
    // C = (F − 32) × 5/9
    // F = C*9/5 + 32
  }

  public celsiusValueConverter(event: Event) {
    let value = (event.target as HTMLInputElement).value; 
    this.farenheitValue = parseInt(value)*9/5 + 32;

  }

  public farenheitValueConverter(event: Event) {
    let value = (event.target as HTMLInputElement).value; 
    this.celsiusValue = (parseInt(value) - 32) * 5/9;

  }

}
