
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Hotels } from 'src/app/models/Hotels';
import { HotelsService } from 'src/app/services/hotels.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {
  public searchValue: string = '';
  public clicked = false;
  public hotels:any;
  public image_url: any;
  public show = false;
  public id: string = '';
    public photo: any;
  public deletedriver: string = '';
  public hotellist:Hotels=new Hotels();
  constructor(public translate: TranslateService,
    public _sanitizer: DomSanitizer,
    public hotelservice:HotelsService) { }
    async ngOnInit() {
      await this.hotelservice.getHotelsList().then(res => {this.hotels = res as unknown as Hotels[]});
      this.hotellist=this.hotels.data;
      this.photo = 'data:image/jpg;base64,';
      for (let i = 0; i <= this.hotels.data.length; i++) {
        this.image_url = this.hotels.data[i]?.imageUrl;
  
        // this.id = this.hotels.data[i].id;
        // this.hotels.data[i].id = btoa(this.id);
  
        this.hotels.data[i].imageUrl = this.photo + (this._sanitizer.bypassSecurityTrustResourceUrl(this.image_url) as any).changingThisBreaksApplicationSecurity;
  
      }
    }
    deletemydriver(id: string) {
      this.deletedriver = id;
      return id;
  
    }
}
