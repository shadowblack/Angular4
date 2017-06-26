import {Component} from '@angular/core';
import { MyDataService } from './my-data.service';
import {Http, Response} from "@angular/http";


@Component({
  selector : 'app-sliders',
  templateUrl : 'app-sliders.component.html',
  styleUrls : [
    './sliders.less'
  ]
})
export class SlidersComponent {

  ngOnInit() {

  }

  items: Array<object>;

  constructor(private http: Http, private newService: MyDataService) {
    this.getHotels();
  }

  getHotels(){
    return this.http.get('assets/data/hotels.json').subscribe(
      (res: Response) =>  {
        const hotels = res.json();
        this.items = hotels;
      }
    );
  }

}
