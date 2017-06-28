import { Component } from '@angular/core';
import { MyDataService } from './my-data.service';
import { Response } from "@angular/http";

@Component({
  selector : 'app-sliders',
  templateUrl : 'app-sliders.component.html',
  styleUrls : [
    './sliders.less'
  ]
})
export class SlidersComponent {

  items: Array<object>;

  constructor(private newService: MyDataService) {}

  ngOnInit() {
    this.newService.fechData().subscribe(
      (res: Response) =>  {
        this.items = res.json();
      }
    );
  }

}
