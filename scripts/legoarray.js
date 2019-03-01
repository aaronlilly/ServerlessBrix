
    $(document).ready(function () {
$('#dynam-now').click(function () {
  
var newArray = obj.results.filter(function (el) {
    return el.ID &&
        el.SetNumber == $('#dynamId').val() &&
        el.URL &&
        el.Images &&
        el.Description &&
        el.Notes &&
        el.DashedNumber;
         
    });
    for (var i = 0; i < newArray.length; i++) {
        $('#ArrayD').append("<a href ='" + newArray[i].URL + "'> <img src='" + newArray[i].Images + "''></a>" + '<span class="badge badge-primary" style="background:#428bca;margin-left: 20px;"> <figcaption>' + newArray[i].Description + ' </figcaption>')
    };
});
});
//<a href=" @lego.URL " target="_blank"><img src=" @lego.Images " /></a>
//<span class="badge badge-primary" style="background:#428bca;margin-left: 20px;">
//    <figcaption>  @lego.Description  </figcaption>

// for (var i = 0; i < newArray.length; i++) {
//$('#ArrayD').append("<a href ='" + newArray[0].URL + "'> <img src='" + newArray[0].Images + "''>" + newArray[0].SetNumber + " " + newArray[0].Description)
    //};

 var obj = {
     'results': [{
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
