import { IHotels } from "../contracts/hotels";

export class Hotels implements IHotels{
    id!: number;
    hotelName!: string;
    imageUrl!: string;
    adress!: string;
    phoneNumber!: string;
    email!: string;
    floorNumber!: number;
    numberOfStar!: number;
    roomNumber!: number;
    numberOfEmployees!: number;

  
 
    
}