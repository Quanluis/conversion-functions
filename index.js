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





