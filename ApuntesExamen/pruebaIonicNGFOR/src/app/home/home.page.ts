import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  productos = [
    {"nombre":"Lapiz", "precios": ["1Euro","3Euros"]},
    {"nombre":"Goma", "precios": ["2Euro","5Euros"]}
  ];

  constructor() {}

}
