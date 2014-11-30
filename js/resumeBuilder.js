$("#main").append("Andrew Heidebrecht");
var awesomeThoughts = "I am Andrew and I am AWESOME!";
var funThoughts = awesomeThoughts.replace("AWESOME!", "FUN");
$("#main").append(funThoughts);

var bio = {
	"name": "Andrew Heidebrecht",
	"role": "Web Developer",
	"contactInfo": {
		"mobile": "801/673-4665",
		"email": "aheidebr@gmail.com",
		"github": "firstCalled",
		"twitter": "@aheidebr",
		"_location": "Salt Lake City"
	},
	"welcomeMessage": "Thanks for visiting my web page!",
	"skills": [
		"awesomeness", "typing things", "making things pretty", "humming"
	],
	"bioPic": "images/profilePic.jpg"
};

var name = bio.name;
var formattedName = HTMLheaderName.replace("%data%", name);
var role = bio.role;
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var _location = bio.contactInfo._location;
var formattedLocation = HTMLlocation.replace("%data%", _location);
$("#topContacts").append(formattedLocation);

var mobile = bio.contactInfo.mobile;
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#topContacts").append(formattedMobile);

var email = bio.contactInfo.email;
var formattedEmail = HTMLemail.replace("%data%", email);
$("#topContacts").append(formattedEmail);

var github = bio.contactInfo.github;
var formattedGithub = HTMLgithub.replace("%data%", github);
$("#topContacts").append(formattedGithub);

var twitter = bio.contactInfo.twitter;
var formattedTwitter = HTMLtwitter.replace("%data%", twitter);
$("#topContacts").append(formattedTwitter);

var welcomeMessage = bio.welcomeMessage;
var formattedMessage = HTMLWelcomeMsg.replace("%data%", welcomeMessage);
$("#header").append(formattedMessage);

var bioPic = bio.bioPic;
var formattedPic = HTMLbioPic.replace("&data%", bioPic);
$("#header").append(formattedPic);

var skills = bio.skills;
var formattedSkills = HTMLskills.replace("%data%", skills);
$("#header").append(HTMLskillsStart);
$("#header").append(formattedSkills);






















