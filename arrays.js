//storage array
var allPeople = [];
var allEvents = [];
var allScores = [];

let nextPersonId = 1;
let nextEventId = 1000;
let nextScoreId = 10000;


// Classes
class Person  {
    constructor(n, a, s) {
        this.id = nextPersonId++;
        this.name = n;
        this.age = a;
        this.style = s;
        this.events = [];
	}
    addEvent(p){
        this.events.push(p)
    }
}


class Event  {
    constructor(n, l, d) {
        this.id = nextEventId++;
        this.name = n;
        this.location = l;
        this.particpants = [];
	}

    addParticipant(p){
        this.particpants.push(p)
    }
}

class Score  {
    constructor(p, e, v, r, d) {
        this.id = nextScoreId++;
        this.person = p;
        this.event = e;
        this.value = v;
        this.ranking = r;
        this.distance = d;
	}
}

// people
allPeople.push(new Person("Felix Waterman", "U18", "Barebow"));
allPeople.push(new Person("Nolan Elmer", "U21", "Barebow"));
allPeople.push(new Person("Marcelyn Ross", "U21", "Compound"));
allPeople.push(new Person("Rahul Fay", "U15", "Compound"));
allPeople.push(new Person("Gavin Rhodes", "U21", "Olympic Recurve"));
allPeople.push(new Person("Jinghan Yi", "U18", "Olympic Recurve"));
allPeople.push(new Person("Evan Song", "U15", "Olympic Recurve"));

// events
allEvents.push(new Event("USA Archery JOAD Target Nationals", "Decatur, AL"));
allEvents.push(new Event("Chia Archery Championship", "Sacramento, CA"));
allEvents.push(new Event("California State Indoor", "Tulare, CA"));
allEvents.push(new Event("USA Archery Indoor Nationals Final", "Louisville, KY"));
allEvents.push(new Event("Grapestakes", "Sacramento, CA"));
allEvents.push(new Event("California State Outdoor", "Simi Valley, CA"));
allEvents.push(new Event("World Archery Championships and Pan Am Games U.S. Team Trials", "Phoenix, AZ"));
allEvents.push(new Event("Pacific Coast Championship", "Sacramento, CA"));
allEvents.push(new Event("SoCal Showdown", "San Diego, CA"));
allEvents.push(new Event("California State Indoor Championship", "Tulare, CA"));



//add person to event and events to people

for(let i = 0; i < allEvents.length; i++){
    for(let j = 0; j < allPeople.length; j++){
        allEvents[i].addParticipant(allPeople[j]);
        allPeople[j].addEvent(allEvents[i]);
    }
}

//create and add new events
// for(let i = 0; i < eventName.length; i++){
//     allEvents.push(new Event(eventName[i],eventLocation[i]));    
// }

// scores
// felix
allScores.push(new Score(allPeople[0], allEvents[5], "860", "2nd", "30"));
allScores.push(new Score(allPeople[0], allEvents[0], "1166", "1st", "30"));
allScores.push(new Score(allPeople[0], allEvents[1], "437", "4th", "18"));
allScores.push(new Score(allPeople[0], allEvents[6], "370", "4th", "50"));
allScores.push(new Score(allPeople[0], allEvents[0], "966", "3rd", "30"));
allScores.push(new Score(allPeople[0], allEvents[5], "390", "1st", "50"));
allScores.push(new Score(allPeople[0], allEvents[2], "625", "3rd", "18"));
allScores.push(new Score(allPeople[0], allEvents[7], "389", "1st", "30"));
allScores.push(new Score(allPeople[0], allEvents[7], "643", "2nd", "50"));
allScores.push(new Score(allPeople[0], allEvents[4], "846", "1st", "30"));
allScores.push(new Score(allPeople[0], allEvents[3], "679", "N/A", "18"));
allScores.push(new Score(allPeople[0], allEvents[4], "635", "1st", "50"));
allScores.push(new Score(allPeople[0], allEvents[8], "356", "5th", "50"));

// Marcelyn Ross
allScores.push(new Score(allPeople[1], allEvents[5], "860", "2nd", "30"));
allScores.push(new Score(allPeople[1], allEvents[0], "1166", "1st", "30"));
allScores.push(new Score(allPeople[1], allEvents[1], "437", "4th", "18"));
allScores.push(new Score(allPeople[1], allEvents[6], "370", "4th", "50"));
allScores.push(new Score(allPeople[1], allEvents[0], "966", "3rd", "30"));
allScores.push(new Score(allPeople[1], allEvents[5], "390", "1st", "50"));
allScores.push(new Score(allPeople[1], allEvents[2], "625", "3rd", "18"));
allScores.push(new Score(allPeople[1], allEvents[7], "389", "1st", "30"));
allScores.push(new Score(allPeople[1], allEvents[7], "643", "2nd", "50"));
allScores.push(new Score(allPeople[1], allEvents[4], "846", "1st", "30"));
allScores.push(new Score(allPeople[1], allEvents[3], "679", "N/A", "18"));
allScores.push(new Score(allPeople[1], allEvents[4], "635", "1st", "50"));
allScores.push(new Score(allPeople[1], allEvents[8], "356", "5th", "50"));

// Nolan Elmer (U21, Barebow)
allScores.push(new Score(allPeople[2], allEvents[0], "880", "2nd", "30"));
allScores.push(new Score(allPeople[2], allEvents[1], "890", "3rd", "30"));
allScores.push(new Score(allPeople[2], allEvents[2], "860", "4th", "18"));
allScores.push(new Score(allPeople[2], allEvents[3], "940", "N/A", "50")); 
allScores.push(new Score(allPeople[2], allEvents[4], "830", "5th", "30"));
allScores.push(new Score(allPeople[2], allEvents[5], "780", "4th", "18"));
allScores.push(new Score(allPeople[2], allEvents[6], "920", "1st", "50"));
allScores.push(new Score(allPeople[2], allEvents[7], "870", "N/A", "30")); 
allScores.push(new Score(allPeople[2], allEvents[8], "810", "3rd", "50"));
allScores.push(new Score(allPeople[2], allEvents[9], "880", "2nd", "18"));

// Rahul Fay (U15, Compound)
allScores.push(new Score(allPeople[3], allEvents[0], "620", "N/A", "18")); 
allScores.push(new Score(allPeople[3], allEvents[1], "650", "4th", "30"));
allScores.push(new Score(allPeople[3], allEvents[2], "715", "2nd", "30"));
allScores.push(new Score(allPeople[3], allEvents[3], "700", "3rd", "50"));
allScores.push(new Score(allPeople[3], allEvents[4], "680", "3rd", "50"));
allScores.push(new Score(allPeople[3], allEvents[5], "640", "N/A", "18")); 
allScores.push(new Score(allPeople[3], allEvents[6], "710", "2nd", "50"));
allScores.push(new Score(allPeople[3], allEvents[7], "670", "3rd", "30"));
allScores.push(new Score(allPeople[3], allEvents[8], "690", "4th", "50"));
allScores.push(new Score(allPeople[3], allEvents[9], "660", "3rd", "18"));

// Gavin Rhodes (U21, Olympic Recurve)
allScores.push(new Score(allPeople[4], allEvents[0], "940", "1st", "30"));
allScores.push(new Score(allPeople[4], allEvents[1], "950", "N/A", "30")); 
allScores.push(new Score(allPeople[4], allEvents[2], "900", "2nd", "18"));
allScores.push(new Score(allPeople[4], allEvents[3], "910", "2nd", "50"));
allScores.push(new Score(allPeople[4], allEvents[4], "880", "3rd", "30"));
allScores.push(new Score(allPeople[4], allEvents[5], "860", "2nd", "18"));
allScores.push(new Score(allPeople[4], allEvents[6], "870", "2nd", "50"));
allScores.push(new Score(allPeople[4], allEvents[7], "N/A", "N/A", "30")); 
allScores.push(new Score(allPeople[4], allEvents[8], "640", "4th", "18"));
allScores.push(new Score(allPeople[4], allEvents[9], "910", "1st", "50"));

// Jinghan Yi (U18, Olympic Recurve)
allScores.push(new Score(allPeople[5], allEvents[0], "780", "3rd", "30"));
allScores.push(new Score(allPeople[5], allEvents[1], "800", "2nd", "30"));
allScores.push(new Score(allPeople[5], allEvents[2], "690", "N/A", "18")); 
allScores.push(new Score(allPeople[5], allEvents[3], "820", "3rd", "50"));
allScores.push(new Score(allPeople[5], allEvents[4], "810", "3rd", "30"));
allScores.push(new Score(allPeople[5], allEvents[5], "860", "2nd", "50"));
allScores.push(new Score(allPeople[5], allEvents[6], "N/A", "N/A", "50")); 
allScores.push(new Score(allPeople[5], allEvents[7], "800", "2nd", "30"));
allScores.push(new Score(allPeople[5], allEvents[8], "780", "3rd", "18"));
allScores.push(new Score(allPeople[5], allEvents[9], "810", "2nd", "50"));

// Evan Song (U15, Olympic Recurve)
allScores.push(new Score(allPeople[6], allEvents[0], "650", "4th", "30"));
allScores.push(new Score(allPeople[6], allEvents[1], "680", "3rd", "30"));
allScores.push(new Score(allPeople[6], allEvents[2], "N/A", "N/A", "18")); 
allScores.push(new Score(allPeople[6], allEvents[3], "710", "5th", "18"));
allScores.push(new Score(allPeople[6], allEvents[4], "770", "3rd", "50"));
allScores.push(new Score(allPeople[6], allEvents[5], "740", "4th", "50"));
allScores.push(new Score(allPeople[6], allEvents[6], "780", "3rd", "50"));
allScores.push(new Score(allPeople[6], allEvents[7], "N/A", "N/A", "30")); 
allScores.push(new Score(allPeople[6], allEvents[8], "800", "2nd", "50"));
allScores.push(new Score(allPeople[6], allEvents[9], "790", "3rd", "18"));