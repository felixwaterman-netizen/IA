// python -m http.server
// QUESTIONS:
// None...

document.addEventListener("DOMContentLoaded",populateNames);
document.getElementById('bSearch').addEventListener("click",showSearch);
document.getElementById('bList').addEventListener("click",showList);
document.getElementById('bAdd').addEventListener("click",addPerson);
document.getElementById('bRemove').addEventListener("click",removePerson);

function showSearch(){
    document.getElementById("search").style.display = "block"; 
    document.getElementById("people").style.display = "none"; 
    document.getElementById("add").style.display = "none"; 
    document.getElementById("remove").style.display = "none"; 
}

function addPerson() {
    document.getElementById("search").style.display = "none"; 
    document.getElementById("people").style.display = "none"; 
    document.getElementById("add").style.display = "block";
    document.getElementById("remove").style.display = "none";  

    document.getElementById("submitNew").onclick = function(event) {
        event.preventDefault(); 

        let name = document.getElementById("newName").value.trim();
        let age = document.getElementById("newAge").value;
        let style = document.getElementById("newStyle").value;

        allPeople.push(new Person(name, age, style));

        alert(`${name} added successfully!`);
        document.getElementById("newName").value = "";
        document.getElementById("newAge").value = "";
        document.getElementById("newStyle").selectedIndex = 0;
        populateNames();
        showList();
    };
}

function showList(){
    document.getElementById("search").style.display = "none"; 
    document.getElementById("people").style.display = "block"; 
    document.getElementById("add").style.display = "none"; 
    document.getElementById("remove").style.display = "none"; 
    let o = "<tr><td>Name</td><td>Age</td><td>Style</td></tr>"
    for (let i = 0; i < allPeople.length; i++){
            o += "<tr>";
            o += "<td>" + allPeople[i].name + "</td>"
            o += "<td>" + allPeople[i].age + "</td>"
            o += "<td>" + allPeople[i].style + "</td>"
            o += "</tr>";
    }
    document.getElementById("allPeople").innerHTML = o;
}

function removePerson() {
    document.getElementById("search").style.display = "none"; 
    document.getElementById("people").style.display = "none"; 
    document.getElementById("add").style.display = "none"; 
    document.getElementById("remove").style.display = "block"; 

    populateNamesRemove();
    document.getElementById("submitRemove").onclick = function(event) {
        event.preventDefault(); 

        let personId = parseInt(document.getElementById("namesRemove").value);
        let personIndex = allPeople.findIndex(p => p.id === personId);

        if (personIndex !== -1) {
            let removedPerson = allPeople.splice(personIndex, 1)[0];

            allScores = allScores.filter(s => s.person.id !== removedPerson.id);

            alert(`${removedPerson.name} has been removed successfully!`);
            populateNames();        
            populateNamesRemove();  
            showList();             
        } 
    }
}
function populateNamesRemove() {
    let o = "";
    for(let i = 0; i < allPeople.length; i++){
        o += "<option value='" + allPeople[i].id + "'>" + allPeople[i].name + "</option>"
    }    
    document.getElementById("namesRemove").innerHTML = o;
}

function populateNames(){
    let o = "";
    for(let i = 0; i < allPeople.length; i++){
        o += "<option value='" + allPeople[i].id + "'>" + allPeople[i].name + "</option>"
    }    
    document.getElementById("names").innerHTML = o;
}

function run() {
    let nameId = document.getElementById("names").value
    let o = "<tr><td>Name</td><td>Age</td><td>Style</td><td>Competition</td><td>Location</td><td>Distance</td><td>Score</td><td>Rank</td></tr>"
    let person = findPersonById(nameId);
    let noPeople = true;
    for (let i = 0; i < person.events.length; i++){
        if (document.getElementById("age").value == person.age && document.getElementById("style").value == person.style){
            o += "<tr>";
            o += "<td>" + person.name + "</td>"
            o += "<td>" + person.age + "</td>"
            o += "<td>" + person.style + "</td>"
            o += "<td>" + person.events[i].name + "</td>"
            o += "<td>" + person.events[i].location + "</td>"

            noPeople = false;

            let score = findScoreByPersonAndEvent(person, person.events[i]);

            if(score){
                o += "<td>" + score.distance + "</td>"
                o += "<td>" + score.value + "</td>"
                o += "<td>" + score.ranking + "</td>"
            }
        } 
    }

    o += "</tr>";

    if(noPeople){
        o += "<tr>";
        o += "<td>" + "That person doesn't exist!" + "</td>"
        o += "</tr>";
    }

    document.getElementById("output").innerHTML = o;
}

function findPersonById(id){
    for(let i = 0; i < allPeople.length; i++){
        if(allPeople[i].id == id){
            return allPeople[i];
        }
    }
}

function findScoreByPersonAndEvent(personID, eventID){
    for(let i = 0; i < allScores.length; i++){
        let score = allScores[i];
        if (score.person == personID && score.event == eventID) {
            return allScores[i];
        }
    }
}