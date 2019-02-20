         
            $(document).ready(function ()  
            {
                    $.ajax
                        ({
                    method: "GET",
                    url: "https://aaronlilly.github.io/ServerlessBrix/SLBr-master/apis/FakeLego2.json"
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

                            $("#legoList").append(HRF + data.results[i].URL + ND + IGG + data.results[i].Images +LST + AA);
                        }            
                              });
            });
                   //
$(document).ready(function () {
    $('#search-now').click(function () {
        $.ajax
            ({
                method: "GET",
                url: "https://aaronlilly.github.io/ServerlessBrix/SLBr-master/apis/FakeLego2.json"
            }).done(function (data) {
                for (var i = 0; i < data.results.length; i++) {
                    var HRF = "<a href='";
                    var ND = "'>";
                    var AA = "</a>"
                    var YES = '<img src="https://www.lego.com/biassets/biimg/6237212.png">';
                    var IGG = '<img src="';
                    var LST = '">'
                    
                    //data.results[i].URL


                    //$("#legoList2").append(HRF + data.results[i].URL + ND + IGG + data.results[i].Images + LST + AA);
                    $("#legoList2").append(data.results[i].URL);
                }
            });
    });
});


///
