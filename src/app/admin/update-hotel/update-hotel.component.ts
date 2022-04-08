import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MessageBox, messageType } from 'src/app/shared/messagebox';
import { Hotels } from 'src/app/models/Hotels';
import { HotelsService } from 'src/app/services/hotels.service';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-update-hotel',
  templateUrl: './update-hotel.component.html',
  styleUrls: ['./update-hotel.component.scss']
})
export class UpdateHotelComponent implements OnInit {
  public _id!: string;
  public responsehotel:any;
  public isloading=false;
  public clicked=false;
  public base64textString:String="";
  public HotelList: Hotels = new Hotels();
  public img:string='';
  public messagePanel:string='';
  constructor(public translate: TranslateService,
    public hotelservice: HotelsService,
    public http: HttpClient,
    public sant: DomSanitizer,
    private route: ActivatedRoute) { }

  async ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this._id = params['id'];
      }

    );

    await this.hotelservice.getHotelbyHotelId(this._id).then(res => this.responsehotel = res as unknown as Hotels);
    
  }
  handleFileSelect(evt:any){
    var files = evt.target.files;
    var file = files[0];
  
  if (files && file) {
      var reader = new FileReader();

      reader.onload =this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
  }
}

_handleReaderLoaded(readerEvt:any) {
   var binaryString = readerEvt.target.result;
          this.base64textString= btoa(binaryString);
      

    this.img = binaryString;
 
  }
  async UpdateHotelForm(event:any) {
    this.clicked=true;
    this.isloading=true;
    if(this.inputcontroller() == true)
    {
      if(this._id != undefined && this._id != "") 
      {
        let result!:Hotels;
      
        if(this.img!=''){
          await this.hotelservice.UpdateHotel(this.HotelList,btoa(this.img)).then(res => result = res as Hotels);
        }else{
          await this.hotelservice.UpdateHotel(this.HotelList,this.HotelList.imageUrl).then(res => result = res as Hotels);
        }
      
       

        if(this.translate.currentLang=='English'){

          if(result)
          {
            this.clicked=false;
            this.isloading=false;
            const messageBox: MessageBox=new MessageBox('Form Result:','','Update operation has been completed!',messageType.success);
            this.messagePanel = messageBox.show();
            setTimeout(()=> { this.messagePanel=""; }, 3000);
           }
           else
           {
            this.clicked=false;
            this.isloading=false;
             const messageBox: MessageBox=new MessageBox('Form Result:','','An error occured during the operation!Please try again later...',messageType.danger);
             this.messagePanel = messageBox.show();
             setTimeout(()=> { this.messagePanel=""; }, 3000);
           }
         }else if(this.translate.currentLang=='Turkish'){
           if(result)
           {
            this.clicked=false;
            this.isloading=false;
            const messageBox: MessageBox=new MessageBox('Form Sonucu:','','Güncelleme işlemi başarıyla tamamlandı!',messageType.success);
             this.messagePanel = messageBox.show();
             setTimeout(()=> { this.messagePanel=""; }, 3000);
            }
            else
            {
              this.clicked=false;
              this.isloading=false;
              const messageBox: MessageBox=new MessageBox('Form Sonucu:','','Güncelleme işlemi sırasında bir hata meydana geldi!Lütfen tekrar deneyiniz...',messageType.danger);
              this.messagePanel = messageBox.show();
              setTimeout(()=> { this.messagePanel=""; }, 3000);
            }
         }
      }

    }
  }

  inputcontroller():boolean {
    if(this.HotelList.adress != undefined && this.HotelList.adress != '' && this.HotelList.email != undefined && this.HotelList.email != '' && this.HotelList.floorNumber != undefined && this.HotelList.hotelName != ''
    && this.HotelList.hotelName != undefined)
    {
      return true;
    }
    else
    {
      if(this.translate.currentLang=='English'){
        this.clicked=false;
        this.isloading=false;
        const messageBox: MessageBox=new MessageBox('Input Error:','','Please check the form lines!',messageType.danger);
        this.messagePanel = messageBox.show();
        setTimeout(()=> { this.messagePanel=""; }, 3000);
        
        return false;
      }else if(this.translate.currentLang=='Turkish'){
        this.clicked=false;
        this.isloading=false;
        const messageBox: MessageBox=new MessageBox('Form Hatası:','','Lütfen form satırlarını kontrol ediniz!',messageType.danger);
        this.messagePanel = messageBox.show();
        setTimeout(()=> { this.messagePanel=""; }, 3000);
        
        return false;
      }
      return false;
    }
  }
}
