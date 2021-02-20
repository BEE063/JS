//1
function Age(age){
    let message = (age>0 && age <=2) ? console.log("Младенец") :
    (age>2 && age <=13) ?  console.log("Ребенок") :
    (age>13 && age <=19) ?  console.log("Подросток") :
    (age>19 && age <=65) ?  console.log("Взрослый") :  console.log("Пожилой");
}
Age(15);

//2
function Rounding(number, accuracy){
    if(accuracy>15){
        accuracy=15;
    }
   console.log(parseFloat(number).toFixed(accuracy));
}
Rounding(3.141590000000077777770, 7)

//3
function Divider(number){
    let message = (number%10==0) ? console.log("Число делится на 10") :
    (number%7==0) ? console.log("Число делится на 7") :
    (number%6==0) ? console.log("Число делится на 6") :
    (number%3==0) ? console.log("Число делится на 3") :
    (number%2==0) ? console.log("Число делится на 2") : console.log("Не делится");
}

Divider(15)

//4
function Holidays(number, type, dayOfWeek){
    if(type=="Students"){
        let price = (dayOfWeek =="Friday") ? 8.45*number :
        (dayOfWeek =="Saturday") ? 9.80*number :
        (dayOfWeek =="Sunday") ? 10.46*number : console.log("Choose another day");
        if(number>=30){
            price = price - (price/100)*15;
        }
        console.log("Total price: "+ price.toFixed(2));
    }
    if(type=="Сorporate"){
        if(number>=100){
            number = number-10;
        }
        let price = (dayOfWeek =="Friday") ? 10.90*number :
        (dayOfWeek =="Saturday") ? 15.60*number :
        (dayOfWeek =="Sunday") ? 16*number : console.log("Choose another day");
        console.log("Total price: "+ price.toFixed(2));
    }
    if(type=="Regular"){
        let price = (dayOfWeek =="Friday") ? 15*number :
        (dayOfWeek =="Saturday") ? 20*number :
        (dayOfWeek =="Sunday") ? 22.5*number : console.log("Choose another day");
        if(number>=10&&number<=20){
            price = price - (price/100)*5;
        }
        console.log("Total price: "+ price.toFixed(2));
    }
}
Holidays(15, "Regular","Saturday");

//5
function LeapYear(year){
    let check = (year%4==0&&year%100!=0) ? console.log("yes"):
    (year%400==0) ? console.log("yes") : console.log("no");
}
LeapYear(1000);