
import { Component, OnInit } from '@angular/core';
//import { TranslateService } from '@ngx-translate/core';
import { Hotels } from 'src/app/models/Hotels';
import { HotelsService } from 'src/app/services/hotels.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {
  public searchValue: string = '';
  public clicked = false;
  public hotels:any;
  public show = false;
  public deletedriver: string = '';
  constructor(//public translate: TranslateService,
    public hotelservice:HotelsService) { }
    async ngOnInit() {
      await this.hotelservice.getHotelsList().then(res => {this.hotels = res as unknown as Hotels[]});
    }
    deletemydriver(id: string) {
      this.deletedriver = id;
      return id;
  
    }
}
