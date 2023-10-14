var fname = createlable("lable","for","name","Enter your Firstname");
var fnameInput = createlable("Input","type","name","placeholder");


var lname = createlable("lable","for","name","Enter your Lastname");
var lnameInput = createlable("Input","type","name","placeholder");



var lable = createlable("lable","for","email","Enter your Email");
var emailInput = createlable("Input","type","name","placeholder");


var number = createlable("lable","for","number","Enter your MobileNumber");
var numberInput = createlable("Input","type","name","placeholder");
var b = linebreak("br");

document.body.append(fname,fnameInput,b,lname,lnameInput,b,lable,emailInput,b,number,numberInput);

function createlable(tagname,attrname,attrvalue,content){
    var lable = document.createElement(tagname);
    lable.innerHTML = content;
    lable.setAttribute = (attrname,attrvalue);
    return lable;
}
function linebreak(breaker){
    var b = document.createElement(breaker);
    return b;
}

