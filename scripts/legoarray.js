
    $(document).ready(function () {
$('#dynam-now').click(function () {
  
var newArray = obj.results.filter(function (el) {
    return el.ID == $('#dynamId').val() &&
        el.SetNumber &&
        el.URL &&
        el.Images &&
        el.Description &&
        el.Notes &&
        el.DashedNumber;
         
});
  
    $('#ArrayD').append("<a href ='" + newArray[0].URL + "'> <img src='" + newArray[0].Images + "''>"  + newArray[0].ID + " " + newArray[0].Description)
console.log(newArray);
// $('#ArrayD').append($('#dynamId').val())
});
});

$(document).ready(function() {
  $('#dynam-now2').click(function() {
  	    $('div#data-rows').append($('#dynamId').val());
    
  });
 
});		


 var obj = {
     'results': [
         "ID": 1,
         "SetNumber": 75929,
         "URL": "https://www.lego.com/biassets/bi/6237211.pdf",
         "Images": "https://www.lego.com/biassets/biimg/6237211.png",
         "Description": "Carnotaurus Gyrosphere Escape",
         "Notes": "BI 3017 / 68+4 - 65/115g, 75929 1/2 V39",
         "DashedNumber": "75929-1"
    },
     {
         "ID": 2,
         "SetNumber": 75929,
         "URL": "https://www.lego.com/biassets/bi/6237212.pdf",
         "Images": "https://www.lego.com/biassets/biimg/6237212.png",
         "Description": "Carnotaurus Gyrosphere Escape",
         "Notes": "No longer listed at LEGO.com",
         "DashedNumber": "75929-1"
    }
           
    ]
};
