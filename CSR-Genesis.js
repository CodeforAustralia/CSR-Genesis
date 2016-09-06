
$(document).ready(function() {
    console.log("hi CSR"); // console output

    $("#information").text("some data"); // static html output

    jQuery.get( "https://api.github.com", function( response ) { // hit endpoint
        console.log("data:" + response.description); // log response event
        for (var component in response) {
            $("#information").append("<p>"+component+"</p>").css("color", "blue");
        }
    } );

    console.log("done");
} );

// Abbreviations used in datasets
var supplier_type = {
  "T": "Contractor",
  "S": "Consultant"
}
