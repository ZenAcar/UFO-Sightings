// Setup

var tableData = data;

var tbody = d3.select("tbody");

var filter_button_0 = d3.select("#filter-btn_0");
var filter_button_1 = d3.select("#filter-btn_1");
var filter_button_2 = d3.select("#filter-btn_2");
var filter_button_3 = d3.select("#filter-btn_3");
var filter_button_4 = d3.select("#filter-btn_4");

var filter_bar_0 = d3.select("#datetime");
var filter_bar_1 = d3.select("#city");
var filter_bar_2 = d3.select("#state");
var filter_bar_3 = d3.select("#country");
var filter_bar_4 = d3.select("#shape");


//Creates filter button on click for datetime

filter_button_0.on("click", function() {

    d3.event.preventDefault();

    tbody.html("");

    var input0 = filter_bar_0.property("value");
    var filtered_data_0 = tableData.filter(ufo => ufo.datetime === input0);

    reset_data(filtered_data_0);

});

function reset_data(filtered_data_0) {
    filtered_data_0.forEach(table);
};

function table(tableData) {

    var tr = tbody.append("tr");

    Object.entries(tableData).forEach(([key, value]) => {
        tr.append("td").text(value);
    })
};


//Creates filter button on click for city

filter_button_1.on("click", function() {

    d3.event.preventDefault();

    tbody.html("");

    var input1 = filter_bar_1.property("value");
    var filtered_data_1 = tableData.filter(ufo => ufo.city === input1);

    reset_data(filtered_data_1);

});

function reset_data(filtered_data_1) {
    filtered_data_1.forEach(table);
};

function table(tableData) {

    var tr = tbody.append("tr");

    Object.entries(tableData).forEach(([key, value]) => {
        tr.append("td").text(value);
    })
};


//Creates filter button on click for state

filter_button_2.on("click", function() {

    d3.event.preventDefault();

    tbody.html("");

    var input2 = filter_bar_2.property("value");
    var filtered_data_2 = tableData.filter(ufo => ufo.state === input2);

    reset_data(filtered_data_2);

});

function reset_data(filtered_data_2) {
    filtered_data_2.forEach(table);
};

function table(tableData) {

    var tr = tbody.append("tr");

    Object.entries(tableData).forEach(([key, value]) => {
        tr.append("td").text(value);
    })
};


//Creates filter button on click for country

filter_button_3.on("click", function() {

    d3.event.preventDefault();

    tbody.html("");

    var input3 = filter_bar_3.property("value");
    var filtered_data_3 = tableData.filter(ufo => ufo.country === input3);

    reset_data(filtered_data_3);

});

function reset_data(filtered_data_3) {
    filtered_data_3.forEach(table);
};

function table(tableData) {

    var tr = tbody.append("tr");

    Object.entries(tableData).forEach(([key, value]) => {
        tr.append("td").text(value);
    })
};


//Creates filter button on click for shape

filter_button_4.on("click", function() {

    d3.event.preventDefault();

    tbody.html("");

    var input4 = filter_bar_4.property("value");
    var filtered_data_4 = tableData.filter(ufo => ufo.shape === input4);

    reset_data(filtered_data_4);

});

function reset_data(filtered_data_4) {
    filtered_data_4.forEach(table);
};

function table(tableData) {

    var tr = tbody.append("tr");

    Object.entries(tableData).forEach(([key, value]) => {
        tr.append("td").text(value);
    })
};


tableData.forEach(table);