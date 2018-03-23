
class Hotel{

    constructor(hotelId, hotelName, hotelType){
        this.hotelId = hotelId;
        this.hotelName = hotelName;
        this.hotelType = hotelType;
    }
    
    displayHotel(){
        console.log('Hai welcome to '+ this.hotelName , this.hotelType + ' Hotel Have fun!');
    }
}

class HotelStar extends Hotel{
    constructor(hotelId, hotelName, hotelType, hotelStar){
        super(hotelId, hotelName, hotelType);
        this.hotelStar = hotelStar;
    }

    displayHotelStar(){
        console.log('Hai welcome to ' + this.hotelStar +' Star Hotel' + this.hotelName);
    }
}

// let obj = new Hotel(100, 'Ashok Bhavan', 'Non-Veg' )
// obj.displayHotel();

let starObj = new HotelStar(100, 'Ashok Bhavan', 'Non-Veg', 5)
starObj.displayHotelStar();