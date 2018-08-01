var fs = require("fs");
var prompt = require("prompt");

var args = process.argv.slice(2);

var properties = [
    {name: 'link'},
    {name: 'address'},
    {name: 'area'},
    {name: 'aptType'},
    {name: 'rent'},
    {name: 'squareFeet'},
    {name: 'bedrooms'},
    {name: 'bathrooms'},
    {name: 'moveInDate'},
    {name: 'contact'},
    {name: 'parking'},
    {name: 'amenities'},
    {name: 'utilities'},
    {name: 'pets'},
    {name: 'notes'},

    //{name: 'contacted'},
    //{name: 'responded'},
    //{name: 'visit-date'},
    //{name: 'visit-notes'},    
    //{name: 'how-close'},
    //{name: 'time-to-sm'},   
]

if (args[0] === 'laptop' || args[0] === 'home') {console.log('Valid log')} 
else {
    console.log('Please specify log location');
    return 1;
}


//  order: add, typ, cont, cont? resp?
//  visit-date, visit-notes, area, how close?
//  time-to-campus, squareFeet, bedrooms, bathrooms
//  total rent, move in date, utilities, pets, parking
//  amenities, link, additional notes


function save (obj) {
    var address = obj.address;
    var type = obj.aptType;
    var contact = obj.contact;
    var contacted = 'N/A';
    var responded = 'N/A';

    var visitDate = 'N/A';
    var visitNotes = 'N/A';
    var area = obj.area;
    var howClose = 'N/A';

    var timeToSanMon = 'N/A';
    var squareFeet = obj.squareFeet;
    var bedrooms = obj.bedrooms;
    var bathrooms = obj.bathrooms;

    var rent = obj.rent;
    var moveInDate = obj.moveInDate;
    var utilities = obj.utilities;
    var pets = obj.pets;
    var parking = obj.parking;

    var amenities = obj.amenities;
    var link = obj.link;
    var additionalNotes = obj.notes;

    var apartment = `${address}, ${type}, ${contact}, ${responded}, ${visitDate}, ${visitNotes}, ${area}, ${howClose}, ${timeToSanMon}, ${squareFeet}, ${bedrooms}, ${bathrooms}, ${rent}, ${moveInDate}, ${utilities}, ${pets}, ${parking}, ${amenities}, ${link}, ${additionalNotes}\r\n`;

    switch (args[0]) {
        case 'home': 
            fs.appendFile('data.txt', apartment, function (err) {
                if (err) {
                    throw error;
                }
                console.log('data appended');
            });
            break;

        case 'laptop':
            fs.appendFile('laptop.txt', apartment, function (err) {
                if (err) {
                    throw error;
                }
                console.log('data appended');
            });
            break;
        default:
            console.log('Invalid log location');
            break;
    }

}



prompt.start();

prompt.get(properties, function (err, result) {
    if (err) { return onErr(err); }

    console.log(result);
    save(result);

    });

function onErr(err) {
    console.log(err);
    return 1;
}
