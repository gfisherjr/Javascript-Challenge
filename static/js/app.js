// from data.js
var tableData = data;
console.log(tableData)

// YOUR CODE HERE!
var tbody = d3.select("tbody");

function defaultTable() {
    tableData.forEach(function(dataInfo) {
        console.log(dataInfo);
        var row = tbody.append("tr");
        Object.entries(dataInfo).forEach(function([key, value]) {
            console.log(key, value);

            var cell = row.append("td");
            cell.text(value);
        });
    });
};

defaultTable();

var button = d3.select("#filter-btn");
var form = d3.select("#form");

button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {
    d3.event.preventDefault();
    tbody.html("");

        DateTime();
        City();
        State();
        Country();
        Shape();
        //defaultTable();    
};

function DateTime() {   
    var inputElementDateTime = d3.select("#datetime");
    var inputValueDateTime = inputElementDateTime.property("value");

    console.log(inputValueDateTime);

    var filteredDataDateTime = tableData.filter(row => row.datetime === inputValueDateTime);

    console.log(filteredDataDateTime);

    filteredDataDateTime.forEach(function(filterByDate) {
        console.log(filterByDate);
        var row = tbody.append("tr");
        Object.entries(filterByDate).forEach(function([key, value]) {
            console.log(key, value);
    
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

function City() {
    var inputElementCity = d3.select("#city");
    var inputValueCity = inputElementCity.property("value");

    console.log(inputValueCity);

    var filteredDataCity = tableData.filter(row => row.city === inputValueCity);

    console.log(filteredDataCity);

    filteredDataCity.forEach(function(filterByCity) {
        console.log(filterByCity);
        var row = tbody.append("tr");
        Object.entries(filterByCity).forEach(function([key, value]) {
            console.log(key, value);
    
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

function State() {
    var inputElementState = d3.select("#state");
    var inputValueState = inputElementState.property("value");

    console.log(inputValueState);

    var filteredDataState = tableData.filter(row => row.state === inputValueState);

    console.log(filteredDataState);

    filteredDataState.forEach(function(filterByState) {
        console.log(filterByState);
        var row = tbody.append("tr");
        Object.entries(filterByState).forEach(function([key, value]) {
            console.log(key, value);
    
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

function Country() {
    var inputElementCountry = d3.select("#country");
    var inputValueCountry = inputElementCountry.property("value");

    console.log(inputValueCountry);

    var filteredDataCountry = tableData.filter(row => row.country === inputValueCountry);

    console.log(filteredDataCountry);

    filteredDataCountry.forEach(function(filterByCountry) {
        console.log(filterByCountry);
        var row = tbody.append("tr");
        Object.entries(filterByCountry).forEach(function([key, value]) {
            console.log(key, value);
    
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

function Shape() {
    var inputElementShape = d3.select("#shape");
    var inputValueShape = inputElementShape.property("value");

    console.log(inputValueShape);

    var filteredDataShape = tableData.filter(row => row.shape === inputValueShape);

    console.log(filteredDataShape);

    filteredDataShape.forEach(function(filterByShape) {
        console.log(filterByShape);
        var row = tbody.append("tr");
        Object.entries(filterByShape).forEach(function([key, value]) {
            console.log(key, value);
    
            var cell = row.append("td");
            cell.text(value);
        });
    });
};


// function runEnter() {
//     d3.event.preventDefault();
//     tbody.html("");

//     if (tbody.html == "") {
//         //DateTime();
//         City();
//         State();
//         Country();
//         Shape();
//     }
//     else {
//         // DateTime();
//         // City();
//         // State();
//         // Country();
//         // Shape();
//         defaultTable();
//     }    
// };
