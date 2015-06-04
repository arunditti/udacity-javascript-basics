 //$("#main").append("Arunditti Sharma"); 

 var name = "Arunditti Sharma";
   var formattedName = HTMLheaderName.replace("%data%", name);
   var role = "Web Developer";
   var formattedRole = HTMLheaderRole.replace("%data%", role);

   $("#header").prepend(formattedRole);
   $("#header").prepend(formattedName); 
   
  var bio = {
    "name" : "Arunditti Sharma",
    "role" : "Web Developer",
    "contact" : {
      "mobile" : "7325899007",
      "email" : "arunditti@outlook.com",
      "location" : "NJ"
    },
    "skills" : [
      "HTML", "CSS", "JavaScript", "jquery"
  	],
  "bioPic" : "images/fry.jpg"
  }

var education = {
  "schools": [
    {"name": "Nova Southeastern University",
      "city": "Fort Lauderdale, FL, USA",
      "degree": "Masters",
      "major": ["InformationTechnology"],
      "year": "June 2007 - March 2009"
    },
    
    {"name": "IGNOU",
      "city": "Shimla, himachal Pradesh, India",
      "degree": "Certificate in Computing",
      "year": "January 2006 - June 2006"
    },

    {"name": "Jammu University",
     "city": "Jammu, India",
     "degree": "Bachelor of Education",
     "year": "August 2002 - December 2003"
 	},

 	{"name": "HNB Garhwal University",
 	 "city": "Srinagar, Uttranchal, India",
 	 "degree": "Masters",
 	 "major": "Physics",
 	 "year": "July 2000 - July 2002"
 	},

 	{"name": "Himachal Pradesh University",
     "city": "Shimla",
     "degree": "Bachelor of Science",
     "year": "July 1997 - June 2000"
 	}
  ]
}

var work = {
	"jobs": [
		{
			"employer": "world Cares Center",
			"city": "NYC",
			"title": "Webmaster",
			"year": "July 2009 - January 2010",
			"description": "Maintaining and adding new features to the website"
		},

		{
			"employer": "Alvin Sherman Library and research Center, NSU",
			"city": "Fort Lauderdale, FL",
			"title": "Graduate Student Assistant",
			"year": "March 2008 - march 2009",
			"description": "Library technical services- Searching a national database of bibliographic records for matching records to the books on the lists and downloading them to University database, and making appropriate changes to the records, cataloging new books and gift books"
		},

		{
			"employer": "DAV ACC Sr. Sec. Public School",
			"city": "Bilaspur, Himachal Pradesh, India",
			"title": "High School Teacher",
			"year": "April 2004 - March 2007",
			"description": "Taught Science and Mathematics to high school students, organized career counselling and professional development eventsfor students, trained students for Science projects and seminars"
		}
	]
}

var projects = {
	"projects": [
	{
		"title": "Sample Project",
		"Year": 2015,
		"description": "This is my work",
		"images": ["https://www.udacity.com/course/viewer#!/c-ud804/l-1930528550/e-1935058561/m-1952638584",
			"http://jsonlint.com/"
		]
	}
	]
}

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