function getPostalcode()
{
var PostCodes = ["ASCN 1ZZ","STHL 1ZZ","TDCU 1ZZ","BBND 1ZZ", "WC2A 1QT", "WC2A 1QU", "WC2A 1RP", "WC2A 1PQ", "WC1V 7PB", "EC4Y 9AR"];



postcode=PostCodes[Math.floor((Math.random() * 10))] ;

return postcode;

}

function getLat()
{
var Coordinates = ["100.293","423.567","112.567","345.778", "846.898", "124.678", "148.908", "123.678", "456.346", "123.125"];

coordinate=Coordinates[Math.floor((Math.random() * 10))] ;
return coordinate;

}

function getLag()
{
var Coordinates = ["100.293","423.567","112.567","345.778", "846.898", "124.678", "148.908", "123.678", "456.346", "123.125"];

coordinate=Coordinates[Math.floor((Math.random() * 10))] ;
return coordinate;
}


function getFirstName()
{
var FirstNames = ["Shiley","Safeer","Micheal","Warne", "Willsmith", "Shankar", "Nithya", "Atanu", "Shane", "Campell"];

firstname=FirstNames[Math.floor((Math.random() * 10)) ] ;
return firstname;

}
function getLastName()
{
var LastNames = ["Smith","Benny","Mark","Tommy", "Alexander", "Kamal", "Roshan", "Peter", "Kumar", "Babu"];

lastname=LastNames[Math.floor((Math.random() * 10))] ;
return lastname;

}

function getCity()
{
var Cities = ["ASCN 1ZZ","STHL 1ZZ","TDCU 1ZZ","BBND 1ZZ", "WC2A 1QT", "WC2A 1QU", "WC2A 1RP", "WC2A 1PQ", "WC1V 7PB", "EC4Y 9AR"];

city=Cities[Math.floor((Math.random() * 10)) ] ;
return city;

}
function getStreet()
{
var Streets = ["533 Montgomery Place, Biehle, Louisiana, 9197","49 Featherstone Street","44 Simon Street","A 29 Kingdome Vallace", "34 India Gateway"];

street=Streets[Math.floor((Math.random() * 5)) ] ;
return street;

}
function getGender()
{
var genders = ["Male","Female"];

gender=genders[Math.floor((Math.random() * 2)) ] ;


return gender;

}
