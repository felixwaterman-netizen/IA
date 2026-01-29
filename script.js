function run() {

    //keep the existing entity parameter
    //add term and limit parameters using user entered values
    //additional parameters are connected with "&"
    let url = "https://itunes.apple.com/search?entity=musicTrack

    //connects to iTunes api and passes off to process function on success
    $.ajax({
        url: url,
        dataType: "json",
        success: process
    });
    
}

function process(data) {
    console.log(data)

    let o = "";

    //builds a giant html string - you need to add the fields 
    //from iTunes into the table and then....
    for(let p=0;p<data.results.length;p++) {
        o += "<tr>";
        o += "<td>" + + "</td>";
        o += "<td>" + + "</td>";
        o += "<td>" + + "</td>";
        o += "<td></td>";
        o += "</tr>";
    }

    //adds the created table to the page
    let table = document.getElementById("output");
    table.innerHTML = o;
    table.style.display = "table";
}
