var fs = require("fs");
var prompt = require("prompt");

var args = process.argv.slice(2);

var properties = [
    {name: 'link'},
    {name: 'address'},
    {name: 'area'},
    {name: 'apt-type'},
    {name: 'rent'},
    {name: 'square-feet'},
    {name: 'bedrooms'},
    {name: 'bathrooms'},
    {name: 'move-in-date'},
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

function save (obj) {


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
