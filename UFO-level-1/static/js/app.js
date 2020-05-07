// Setup

var tableData = data;

var tbody = d3.select("tbody");

var filter_button = d3.select("#filter-btn");

var filter_bar = d3.select("#datetime");

// Creates filter button on click to filter by datetime

filter_button.on("click", function() {

    d3.event.preventDefault();

    tbody.html("");

    var input = filter_bar.property("value");
    var filtered_data = tableData.filter(ufo => ufo.datetime === input);

    // Reset after filtering to only shows filter
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