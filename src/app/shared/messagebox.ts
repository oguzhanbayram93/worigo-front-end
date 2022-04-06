export class MessageBox {
    private title_small_:string;
    private title_:string
    private description_:string;
    private type_:messageType;

    constructor(title:string, title_small:string, description:string, type:messageType) {
        this.title_small_ = title_small;
        this.title_ = title;
        this.description_ = description;
        this.type_ = type;
    }

    public show():string {
        
        return `<div class="alert alert-${this.type_} dark alert-dismissable"><strong>${this.title_}</strong> ${this.title_small_} <br/><p>${this.description_}</p></div>`;
    }

    public alertBox() {
        alert(this.title_ + " "+ this.description_);
    }
 }

 export enum messageType {
  primary="primary",
  info="info",
  danger="danger",
  success="success",
  dark="dark",
  system="system",
  warning="warning",
  alert="alert"
}