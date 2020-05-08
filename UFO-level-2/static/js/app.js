// Setup

var tableData = data;

var tbody = d3.select("tbody");

var filter_button = d3.select("#filter-btn");

var filter_bar_0 = d3.select("#datetime");
var filter_bar_1 = d3.select("#city");
var filter_bar_2 = d3.select("#state");
var filter_bar_3 = d3.select("#country");
var filter_bar_4 = d3.select("#shape");


// Creates filter button on click to filter by datetime, city and state at once.

filter_button.on("click", function() {

    d3.event.preventDefault();

    tbody.html("");

    var input0 = filter_bar_0.property("value");
    var input1 = filter_bar_1.property("value");
    var input2 = filter_bar_2.property("value");
    var input3 = filter_bar_3.property("value");
    var input4 = filter_bar_4.property("value");

    var filtered_data = tableData.filter(ufo =>
        ufo.datetime === input0 &&
        ufo.city === input1 &&
        ufo.state === input2 &&
        ufo.country === input3 &&
        ufo.shape === input4
    );

    reset_data(filtered_data);

});

function reset_data(filtered_data) {
    filtered_data.forEach(table);
};

function table(tableData) {

    var tr = tbody.append("tr");

    Object.entries(tableData).forEach(([key, value]) => {
        tr.append("td").text(value);
    })
};

tableData.forEach(table);