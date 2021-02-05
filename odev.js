/** 

1. mycarDetails fonksiyonunu "GA12345 Toyota" ciktisini verecek sekilde duzenleyin.

**/

var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota",

    displayDetails: function(){
        console.log(this.registrationNumber + " " + this.brand);
    }
}

var myCarDetails =  function(car){car.displayDetails()};
myCarDetails(this.car);



/** 

2.name parametresi alan bir isValidName fonksiyonu yazin. Fonksiyon asagidaki kosullarin hepsi saglaniyorsa true, saglanmiyorsa false donmelidir:

name string olmali
name bos olmamali
bosluk icerebilir, ancak bosluk haridcindeki isimler en az 2 karakterden olusmali.

**/

function isString(value) {
	return typeof value === 'string' || value instanceof String;
}
function isEmpty(str) {
    return (!str || 0 === str.length);
}
function regEx(str){
 var res = str.split(" ");
for (x of res) {
  if(x.length<1){
     return false
  }

}
return true
};


function isValidName(name) {
  if(isString(name) && isEmpty(name) && regEx(name)){
    return true
  }
  else {
    return false
  }
}




/**


3. summary fonkisyonunu ciktisi "Brave New World was written by Aldous Huxley. It is a dystopian novel written in 1932." olacak sekilde cagirin.

**/

const book = {
  title: 'Brave New World',
  author: 'Aldous Huxley',
}

function summary(book, genre, year) {
  console.log(
    `${book.title} was written by ${book.author}. It is a ${genre} novel written in ${year}.`,
  )
}




