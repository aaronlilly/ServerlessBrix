         
            $(document).ready(function ()  
            {
                    $.ajax
                        ({
                    method: "GET",
                    url: "https://aaronlilly.github.io/PokeApp/api/v2/pokemon/FakeLego2.json"
                         }).done(function(data) 



                               {
                        for (var i = 0; i < data.results.length; i++) 
                        {
                            var HRF = "<a href='";
                            var ND = "'>";
                            var AA = "</a>"
                            var YES = '<img src="https://www.lego.com/biassets/biimg/6237212.png">';
                            var IGG = '<img src="';
                            var LST = '">'
                                 var Datarr = [data.results];
                            $("#legoList").append(HRF + data.results[i].URL + ND + IGG + data.results[i].Images +LST + AA);
                        }            
                              });
            });
                 
                   //
// $(document).ready(function () {
//     $('#search-now').click(function () {
//         $.ajax
//             ({
//                 method: "GET",
//                 url: "https://aaronlilly.github.io/ServerlessBrix/SLBr-master/apis/FakeLego2.json"
//             }).done(function (data) {
//                 for (var i = 0; i < data.results.length; i++) {
//                     var HRF = "<a href='";
//                     var ND = "'>";
//                     var AA = "</a>"
//                     var YES = '<img src="https://www.lego.com/biassets/biimg/6237212.png">';
//                     var IGG = '<img src="';
//                     var LST = '">'
                    
//                     //data.results[i].URL


//                     //$("#legoList2").append(HRF + data.results[i].URL + ND + IGG + data.results[i].Images + LST + AA);
//                     $("#legoList2").append(data.results[i].URL);
//                 }
//             });
//     });
// });


<script type="text/javascript">
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
        },
           
    ]
};


// (Note that because `price` and such are given as strings in your object,
// the below relies on the fact that <= and >= with a string and number
// will coerce the string to a number before comparing.)
var newArray = obj.results.filter(function (el) {
  return el.ID ==  2924 &&
         el.SetNumber &&
         el.URL &&
         el.Images &&
         el.Description &&
         el.DashedNumber &&
         el.Preselect ; 
});
console.log(newArray);
</script>

///
