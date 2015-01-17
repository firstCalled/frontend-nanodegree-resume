var bio = {
	"firstName": "Andrew",
	"lastName": "Heidebrecht",
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
	"bioPic": "images/Heidebrecht,Andrew16.jpg"
};

var work = {
	"jobs": [
		{
			"employer": "Wells Fargo Corporate Trust Services",
			"title": "Compliance Consultant",
			"jobDescription": "Manage onboarding of new equipment lease customers to ensure compliance with Anti-Money Laundering and Bank Secrecy Act regulations",
			"startDate": "Sept 2014",
			"endDate": "Present",
			"location": "Salt Lake City"
		},
		{
			"employer": "Wells Fargo Corporate Trust Services",
			"title": "Account Associate",
			"jobDescription": "Process all lease and debt payments related to aircraft and real estate debt transactions",
			"startDate": "Jan 2013",
			"endDate": "Aug 2014",
			"location": "Salt Lake City"
		},
		{
			"employer": "Wells Fargo Advisors",
			"title": "Registered Trading Representative",
			"jobDescription": "Handle equity, option and fixed-income trades for retail brokerage clients.",
			"startDate": "Sept 2011",
			"endDate": "Jan 2013",
			"location": "Salt Lake City"
		},
		{
			"employer": "ADP",
			"title": "Service Delivery Manager",
			"jobDescription": "Manage service of health benefits platform for corporate customers",
			"startDate": "July 2010",
			"endDate": "July 2011",
			"location": "Salt Lake City"
		},
		{
			"employer": "Wells Fargo Advisors",
			"title": "Sales Associate",
			"jobDescription": "Prospect new investment clients",
			"startDate": "Sept 2014",
			"endDate": "Present",
			"location": "Salt Lake City"
		},
		{
			"employer": "Goldman Sachs & Co.",
			"title": "Analyst",
			"jobDescription": "Process restricted stock sales for Prime Brokerage clients",
			"startDate": "May 2007",
			"endDate": "Feb 2009",
			"location": "Salt Lake City"
		}
	]
};

var projectwork = {
	"projects": [
		{
			"projectTitle": "CashProWeb Conversion",
			"projectStart": "August 2003",
			"projectDates": "12 months",
			"projectDescription": "Migrate business banking clients from a DOS-based banking platform to a web-based banking platform"
		},
		{
			"projectTitle": "Continental Payment Schedules",
			"projectStart": "June 2013",
			"projectDates": "6 months",
			"projectDescription": "Assemble lease payment and amortization schedules in MS Excel"
		},
		{
			"projectTitle": "Formula1 API",
			"projectStart": "November 2014",
			"projectDates": "2 months",
			"projectDescription": "Create a single page Angular app using a Formula1 racing API"
		}
	]
};

var education = {
	"schools": [
		{
			"name": "DevMountain",
			"city": "Salt Lake City, UT",
			"majors": ["HTML,CSS", "Javascript", "AngularJS", "Node.js", "Express", "Firebase"],
			"minor": null,
			"graduationYear": 2014,
			"online course": null,
			"url": "www.devmounta.in"
		},
		{
			"name": "University of Utah",
			"city": "Salt Lake City, UT",
			"majors": ["Finance", "Accounting"],
			"minor": null,
			"graduationYear": 2012,
			"online course": "Canvas",
			"url": "www.utah.edu"
		},
		{
			"name": "St. John's College",
			"city": "Santa Fe, NM",
			"majors": ["Mathematics", "Philosophy", "History"],
			"minor": null,
			"graduationYear": 2003,
			"online course": null,
			"url": "www.sjcsf.edu"
		}
	]
}



var fullName = bio.firstName + " " + bio.lastName;
var formattedName = HTMLheaderName.replace("%data%", fullName);
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
var formattedPic = HTMLbioPic.replace("%data%", bioPic);
$("#header").append(formattedPic);

// $("#main").append(internationalizeButton);
// The above line is commented out because I don't need the Internationalize button at this time.

function inName(fullName) {
    var finalName = fullName;
    var names = fullName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0][0].toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    
    return finalName;
}

if (bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
};
function displayWork() {
	for(job in work.jobs){
		$("#workExperience").append(HTMLworkStart); 
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[job].startDate + " - " + work.jobs[job].endDate);
		$(".work-entry:last").append(formattedworkDates);
		var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").prepend(formattedworkLocation);
		var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].jobDescription);
		$(".work-entry:last").append(formattedworkDescription);
	}
}
displayWork();

projects.display = function() {
	for(project in projectwork.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedProject = HTMLprojectTitle.replace("%data%", projectwork.projects[project].projectTitle);
		$(".project-entry:last").append(formattedProject);
		var formattedProjectStartDate = HTMLworkDates.replace("%data%", projectwork.projects[project].projectStart);
		$(".project-entry:last").append(formattedProjectStartDate);
		var formattedProjectDesc = HTMLprojectDescription.replace("%data%", projectwork.projects[project].projectDescription);
		$(".project-entry:last").append(formattedProjectDesc);
	}
};

projects.display();

$(document).click(function(loc) {
  	var x = loc.pageX;
  	var y = loc.pageY;
  
  logClicks(x,y);
});

$("#mapDiv").append(googleMap);













