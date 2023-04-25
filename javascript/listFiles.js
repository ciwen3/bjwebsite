//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory 
const directoryPath = path.join(__dirname, '../projects/');
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        // console.log("./projects/" + file); 
        // <iframe src="./projects/" + file></iframe>;
        var iframe = document.createElement('iframe');

        // div tag in which iframe will be added should have id attribute with value myDIV
        document.getElementById("myDIV").appendChild(iframe);

        // provide height and width to it
        // iframe.setAttribute("style","height:100%;width:100%;");
        iframe.contentWindow.document.open();
        iframe.contentWindow.document.write('<iframe src="./projects/" + file></iframe>');
        iframe.contentWindow.document.close();
    });
});