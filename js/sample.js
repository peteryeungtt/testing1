"use strict";
// {index : { name : { color : time, ...}}}
let shiftObj = {
    "1" : {
        "Sunday": [

        ]
    },
    "2" : {
        "Monday": [

        ]
    },
    "3" : {
        "Tuesday": [

        ]
    },
    "4" : {
        "Wednesday": [

        ]
    },
    "5" : {
        "Thursday": [

        ]
    },
    "6" : {
        "Friday": [

        ]
    },
    "7" : {
        "Saturday": [
        ]
    },


};
let obj = {
    // Beginning Time
    startTime: "09:00",
    // Ending Time
    endTime: "21:00",
    // Time to divide(minute)
    divTime: "30",
    // Time Table
    shift: shiftObj,
    // Other options
    option: {
        // workTime include time not displaying
        workTime: true,
        bgcolor: ["#00FFFF"],
        // {index :  name, : index: name,,..}
        // selectBox index and shift index should be same
        // Give randome if shift index was not in selectBox index
        /*selectBox: {
            "35" : "Peter",
            "18" : "Cassandra",
            "25" : "David",
            "38" : "Albert",
            "39" : "Yamira",
            "40" : "Jordano"
        },*/
        // Set false if you want the rows to be static i.e. as defined in your shift object
        deleteRows: false,
        // Set true when using TimeTable inside of BootStrap class row
        useBootstrap: false,
    }
};
// Call Time Table
var instance = new TimeTable(obj);
console.time("time"); // eslint-disable-line
instance.init("#test");
console.timeEnd("time");// eslint-disable-line

// Only works if selectBox option exist
$(document).on("click", "#addRow",()=>{instance.addRow();});

// Change theme color sample
$(document).on("click","#colorChange", ()=>{
    let color = `${getColor()},${getColor()},${getColor()}`;
    document.documentElement.style.setProperty("--rgbTheme", color);
});
function getColor(){
    return Math.floor(Math.random() * Math.floor(255));
}
// Getting Data Sample
$(document).on("click","#getData", ()=>{
    let data = instance.data();
    console.log(data);
});
