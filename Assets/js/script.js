function getLocalStorage(event) {
    var value = localStorage.getItem(event);
    if (value) {
        $(`#text${event}`).text(value);
    }
}       

    $(document).ready(function() {
    // Running the clock  
    setInterval(function(){
    $("#currentDay").text(moment().format("dddd, MMM Do  YYYY HH:mm:ss"));
        }, 1000);
    // Displaying Day, month Do and the year.
    $("#currentDay").text(moment().format("dddd, MMM Do  YYYY HH:mm:ss"));
    for (var i = 9; i < 18; i++) {
      
    // creating a row 
    var row = $(`<div class="row">`);

    // creating three coulmns and fiilinf them up with time, text area and a save button.
    var col1 = $('<div class="col-sm-2"> <h4 class="hour">' + formatAmPm(i) + '</h4>');
    var col2 = $(`<div class="col-sm-8 past"><textarea id=text${i} class="description" placeholder="Enter an event..."></textarea>`);        
    var col3 = $(`<div class="col-sm-2"><button class="saveBtn" id=${i}><i class="far fa-save"></i></button>`)
        
    // Appending the coulums to the row.
    row.append(col1, col2 ,col3);
       
    // Adding the row to a container.
    $(".container").append(row);

    getLocalStorage(i);
}
    
// Refering the time to Am or Pm for all 24 hours.
function formatAmPm(hours) {
    var ampm ;

    if ( hours == 24 || hours < 12){
        ampm="am";
    }
     else

    if(hours >=12 ){
        ampm='pm';
    }
    hours = hours % 12;

    if(hours != 0 )
             hours; 
         else
            hours= 12;
        return hours + ampm;
    }




setInterval(function() {
// Update color every second.
    updateColors();
}, 1000);

// When 24 hoursis reached clear all events.
setInterval(function() {
    var currentTime = new Date().getHours();
    if (currentTime == 24) {
        localStorage.clear();
    }
}, 1000);



function updateColors(){
    var currentTime = new Date().getHours();
    //looping colors between present and future events.
    for (var i = 9; i < 18; i++) { 
    // console.log(currentTime, [i]);
     if ([i] == currentTime){
        $(`#text${i}`).addClass( "present");
    } else if (currentTime < [i]) {
        $(`#text${i}`).addClass( "future");
    }
    
}
}

    // Saving the eventKey and the eventValue to localStorage.
    var saveBtn = $('.saveBtn');
    saveBtn.on('click', function(){
    var eventKey = $(this).attr('id');
    var eventValue = $(this).parent().siblings().children('.description').val();
    localStorage.setItem(eventKey, eventValue);
});
});