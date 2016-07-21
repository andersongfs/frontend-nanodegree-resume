/*
This is empty on purpose! Your code to build the resume will go here.
 */
//--1
var awesomeThoughts = "I am Anderson and I am AWESOME!"
funThoughts = awesomeThoughts.replace("AWESOME", "FUN")
console.log(funThoughts);

var name = "Anderson Gustafson";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Software Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedName);
$("#header").append(formattedRole);