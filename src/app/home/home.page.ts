import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  bntsList: any[] = [
    {title: 'Bed room', n_lampadas: 2, image: 'bedroom'},
    {title: 'Living room', n_lampadas: 2, image: 'livingroom'},
    {title: 'Kitchen', n_lampadas: 2, image: 'kitchen'},
    {title: 'Bathroom', n_lampadas: 2, image: 'bathroom'},
    {title: 'Outdoor', n_lampadas: 2, image: 'outdoor'},
    {title: 'Balcony', n_lampadas: 2, image: 'balcony'}
  ]

  constructor() {}

}
