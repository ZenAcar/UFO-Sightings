// Assign the data from `data.js` to a descriptive variable
var tableData = data;

console.log(tableData);

// Create a Reset button

const newButton = document.createElement("button");
const panelBody = document.getElementsByClassName("panel-body")[0];
newButton.id = "clear-btn";
newButton.className = "btn btn-default";
newButton.appendChild(document.createTextNode("Reset"));
panelBody.appendChild(newButton);

console.log(newButton);

// Setup

// Select the tbody
var tbody = d3.select("tbody");
// Select the buttons
var filter_button = d3.select("#filter-btn");
var clear_button = d3.select("#clear-btn");
// Select the input elements and get the raw HTML node
var filter_bar_0 = d3.select("#datetime");
var filter_bar_1 = d3.select("#city");
var filter_bar_2 = d3.select("#state");
var filter_bar_3 = d3.select("#country");
var filter_bar_4 = d3.select("#shape");


// Create a function to display the data list

table(tableData);

function table() {
    data.forEach((ufo) => {
        var tr = tbody.append("tr");
        for (key in ufo) {
            tr.append("td").text(ufo[key]);
        }
    });
};


// Create event handlers

filter_button.on("click", runEnter);
clear_button.on("click", reset);


// Complete the filter button function 

function runEnter() {

    // Get the value property of the input elements
    var input0 = filter_bar_0.property("value");
    var input1 = filter_bar_1.property("value");
    var input2 = filter_bar_2.property("value");
    var input3 = filter_bar_3.property("value");
    var input4 = filter_bar_4.property("value");

    var filteredData = tableData;

    // Define conditions for filteredData

    if (input0) {
        filteredData = filteredData.filter(data => data.datetime === input0);
    }

    if (input1) {
        filteredData = filteredData.filter(data => data.city === input1);
    }

    if (input2) {
        filteredData = filteredData.filter(data => data.state === input2);
    }

    if (input3) {
        filteredData = filteredData.filter(data => data.country === input3);
    }

    if (input4) {
        filteredData = filteredData.filter(data => data.shape === input4);
    }

    if (filteredData != tableData) {
        tbody.selectAll('tr').remove();
        tbody.selectAll('td').remove();

        filteredData.forEach((search) => {
            var new_tr = tbody.append("tr");
            for (key in search) {
                new_tr.append("td").text(search[key]);
            }
        })
    } else {
        // Revert to displaying all the ufo sightings in a table format
        table(tableData);
    }
};


// Complete the reset button function 

function reset() {

    //Clear the input elements
    // input0 = "";
    // input1 = "";
    // input2 = "";
    // input3 = "";
    // input4 = "";
    document.getElementById("datetime").value = "";
    document.getElementById("city").value = "";
    document.getElementById("state").value = "";
    document.getElementById("country").value = "";
    document.getElementById("shape").value = "";

    // Remove any children from the table
    tbody.html("");

    // Revert to displaying all the ufo sightings in the table format
    table(tableData);
}