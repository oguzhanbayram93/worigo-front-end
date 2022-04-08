import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MessageBox, messageType } from 'src/app/shared/messagebox';
import { Hotels } from 'src/app/models/Hotels';
import { HotelsService } from 'src/app/services/hotels.service';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.scss']
})
export class AddHotelComponent implements OnInit {

  public messagePanel: string = '';
  public dynamicTitle: string = '';
  public base64textString: String = "";
  public responseDrivers: any;
  public selectedimage: any;

  public isloading=false;
  public clicked=false;
  imageUrl?: string;
  private img!: string;

  public HotelList: Hotels = new Hotels();

  constructor(public translate: TranslateService,
    public hotelservice: HotelsService,
    public http: HttpClient,
    public sant: DomSanitizer,
    private route: ActivatedRoute) { }
  public id!: string;
  async ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
        }
      );

  }



  handleFileSelect(evt: any) {
    var files = evt.target.files;
    var file = files[0];

    if (files && file) {
      var reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt: any) {
    var binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);


    this.img = binaryString;

  }


  async saveMyDriverForm(event: any) {
    this.clicked=true;
    this.isloading=true;
    let result:any;
    if (this.inputcontroller() == true) {
   
if(this.HotelList.imageUrl==undefined || this.HotelList.imageUrl==null){
 
  await this.hotelservice.AddNewHotelwithoutPhoto(this.HotelList).then(res => result = res as unknown as Hotels);
}else{

  await this.hotelservice.AddNewHotel(this.HotelList, btoa(this.img)).then(res => result = res as unknown as Hotels);
}
   
     
      if (this.translate.currentLang == 'English') {

        if (result) {
          this.clicked=false;
          this.isloading=false;
          const messageBox: MessageBox = new MessageBox('Form Result:', '', 'Create operation has been completed!', messageType.success);
          this.messagePanel = messageBox.show();
          setTimeout(() => { this.messagePanel = ""; }, 7000);
          window.location.reload();
       
        }
        else {
          this.clicked=false;
          this.isloading=false;
          const messageBox: MessageBox = new MessageBox('Form Result:', '', 'An error occured during the operation!Please try again later...', messageType.danger);
          this.messagePanel = messageBox.show();
          setTimeout(() => { this.messagePanel = ""; }, 7000);
          window.location.reload();
   
        }
      } else if (this.translate.currentLang == 'Turkish') {
        if (result) {
          this.clicked=false;
          this.isloading=false;
          const messageBox: MessageBox = new MessageBox('Form Sonucu:', '', 'Ekleme işlemi Basarıyla tamamlandı!', messageType.success);
          this.messagePanel = messageBox.show();
          setTimeout(() => { this.messagePanel = ""; }, 7000);
          window.location.reload();
        
        }
        else {
          this.clicked=false;
          this.isloading=false;
          const messageBox: MessageBox = new MessageBox('Form Sonucu:', '', 'Ekleme işlemi sırasında bir hata meydana geldi!Lütfen tekrar deneyiniz...', messageType.danger);
          this.messagePanel = messageBox.show();
          setTimeout(() => { this.messagePanel = ""; }, 7000);
          window.location.reload();
   
        }
      }
    }
  }

  inputcontroller(): boolean {
    if (this.HotelList.adress != undefined && this.HotelList.adress != '' && this.HotelList.email != undefined && this.HotelList.email != '' && this.HotelList.floorNumber != undefined && this.HotelList.hotelName != ''
      && this.HotelList.hotelName != undefined ) {
      return true;
    }
    else {
      if (this.translate.currentLang == 'English') {
        this.clicked=false;
        this.isloading=false;
        const messageBox: MessageBox = new MessageBox('Input Error:', '', 'Please check the form lines!', messageType.danger);
        this.messagePanel = messageBox.show();
        setTimeout(() => { this.messagePanel = ""; }, 3000);

        return false;
      } else if (this.translate.currentLang == 'Turkish') {
        this.clicked=false;
        this.isloading=false;
        const messageBox: MessageBox = new MessageBox('Form Hatası:', '', 'Lütfen form satırlarını kontrol ediniz!', messageType.danger);
        this.messagePanel = messageBox.show();
        setTimeout(() => { this.messagePanel = ""; }, 3000);

        return false;
      }
      return false;
    }
  }
}
