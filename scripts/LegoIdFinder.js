
    $(document).ready(function () {
$('#dynam-now').click(function () {
  
var newArray = obj.results.filter(function (el) {
  return el.ID ==  $('#dynamId').val() &&
         el.SetNumber &&
         el.URL &&
         el.Images &&
         el.Description &&
         el.DashedNumber &&
         el.Preselect ; 
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
      'results': [{
      "ID": 2924,
      "SetNumber": 7942,
      "URL": "https://www.lego.com/biassets/bi/4586972.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4586972.png",
      "Description": "Off Road Fire Rescue",
      "DashedNumber": "7942-1",
      "Preselect": "fire"
        }, {
              "ID": 4470,
      "SetNumber": 7942,
      "URL": "https://www.lego.com/biassets/bi/4656089.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4656089.png",
      "Description": "Police Boat",
      "DashedNumber": "7287-1 ",
      "Preselect": "police"
        }
           
    ]
};
