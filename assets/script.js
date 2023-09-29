$(document).ready(function(){
    //testing if jquery works
    $("p").click(function(){
        $(this).hide();
    });


    //add Dayjs to grab dates for cards if needed

    //grab weather ICON
    var iconcode = a.weather[0].icon;
    var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    $('#wicon').attr('src', iconurl);


  });