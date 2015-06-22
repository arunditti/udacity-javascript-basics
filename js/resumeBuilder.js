 //$("#main").append("Arunditti Sharma"); 

 var name = "Arunditti Sharma";
   var formattedName = HTMLheaderName.replace("%data%", name);
   var role = "Web Developer";
   var formattedRole = HTMLheaderRole.replace("%data%", role);

   $("#header").prepend(formattedRole);
   $("#header").prepend(formattedName); 
  
 // MAking bio object  
  var bio = {
    "name" : "Arunditti Sharma",
    "role" : "Web Developer",
    "contact" : {
      "mobile" : "123456789",
      "email" : "abc@outlook.com",
      "location" : "NJ"
    },
    "skills" : [
      "HTML", "CSS", "JavaScript", "jquery", "SQL"
  	],
  "bioPic" : "images/fry.jpg"
  }

// MAking education object
var education = {
  "schools": [
    {"name": "University name",
      "location": "city name",
      "degree": "Masters",
      "major": ["InformationTechnology"],
      "year": "year - year"
    },
    
    {"name": "School name",
      "location": "city name",
      "degree": "Certificate in Computing",
      "year": "year - year"
    },

    {"name": "University name",
     "location": "india",
     "degree": "Bachelor of Education",
     "year": "year - year"
 	},

 	{"name": "University name",
 	 "location": "city name",
 	 "degree": "Masters",
 	 "major": "Physics",
 	 "year": "year - year"
 	},

 	{"name": "University name",
     "location": "city name",
     "degree": "Bachelor of Science",
     "year": "year - year"
 	}
  ]
}

//Making work object
var work = {
	"jobs": [
		{
			"employer": "Employer name 1",
			"location": "Jersey city, NJ",
			"title": "title 1",
			"dates": "year - year",
			"description": "description here"
		},

		{
			"employer": "Employer name 2",
			"location": "New york city, NY",
			"title": "title 2",
			"dates": "year - year",
			"description": "description here"
		},

		{
			"employer": "Employer name 3",
			"location": "New York City, NY",
			"title": "title 3",
			"dates": "year - year",
			"description": "description here"
		}
	]
}

// Making projects object
var projects = {
	"projects": [
	{
		"title": "Sample Project2",
		"dates": "year - year",
		"description": "This is my work",
		"images": ["images/androidmarker.png"]
	},

  {
    "title": "Sample Project 1",
    "dates": "year - year",
    "description": "This is my work",
    "images": ["images/androidmarker.png"]
  }
	]
}

bio.display = function() {
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
  $("#header").append(formattedBioPic);

  var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
  $("#topContacts").append(formattedMobile);

  var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
  $("#topContacts").append(formattedEmail);

  var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
  $("#topContacts").append(formattedLocation);

  $("#footerContacts").append(formattedMobile);
  $("#footerContacts").append(formattedEmail)
  $("#footerContacts").append(formattedLocation);


  if(bio.skills.length > 0) {

    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);

    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
    
  }
}

bio.display();

function displayWork() {
for(job in work.jobs)
{
  // create new div for work experience
  $("#workExperience").append(HTMLworkStart);
  // concat employer and title
  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;
  $(".work-entry:last").append(formattedEmployerTitle);

  var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
  $(".work-entry:last").append(formattedLocation);

  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  $(".work-entry:last").append(formattedDates);

  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  $(".work-entry:last").append(formattedDescription);
}
}
displayWork();

//Holding dusplay function inside object projects. its called encapsulation
projects.display = function() {
  for(project in projects.projects)
  {
    $("#projects").append(HTMLprojectStart);

   var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if(projects.projects[project].images.length > 0) {
      for(image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    } 
  }
}
projects.display();


$(document).click(function(loc) { 
    var x = loc.pageX; 
    var y = loc.pageY; 
    logClicks(x, y);
  });

 /** 
 function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] +" "+name[1];
}
inName();
$("#main").append(internationalizeButton); 
*/


// You want to see a map? Here is a map
$("#mapDiv").append(googleMap);