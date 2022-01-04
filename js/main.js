
//CONSTA
const EURO_TO_UZS =10354.03;
const USD_TO_UZS =9433.34;

var balanceUZS =Number(prompt("Alsher qancha pulingiz bor ? (so'm)",0 )) 

var flightPriceUSD=500;
var hotelPriceUSD =250;
var walkingPriceEURO =120;

//LOGICA

if(balanceUZS >=(flightPriceUSD+hotelPriceUSD)*USD_TO_UZS +walkingPriceEURO*EURO_TO_UZS){
    console.log("oq yul")
}
else{
    console.log("Hali ozgina sabr qil")
}
