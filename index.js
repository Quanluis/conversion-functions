const firstName = 'luis'

const lastName = ' garzon'

const fullname = firstName + lastName;


console.log(fullname);


const mikeAge = 25;

var mikeName = 'mike';

const steveAge = 26;

var steveName = 'steve';

if(mikeAge > steveAge) {
    console.log(mikeName + ' is older than ' + steveName)
} else if (steveAge > mikeAge) {
    console.log(steveName + ' is older than ' + mikeName)
} else if (mikeAge === steveAge){
    console.log('both ' + mikeName + ' and ' + steveName + ' are the same age.' )
}

function myFunction(){
    return 5 * 5
}
console.log(myFunction())

function tipCal(bill) {

    var percentage;
    
    if(bill < 50){
        percentage = .2;
    } else if(bill >= 50 && bill <= 200){
        percentage = .15;
    }else{
        percentage = .1;
    }
    return percentage * bill;
}

console.log(tipCal(10));

var bills = [124, 48, 268];

var tips = [ tipCal(bills[0]),
            tipCal(bills[1]),
            tipCal(bills[2]) ]

console.log(tips);



