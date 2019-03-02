  
            $(document).ready(function ()  
            {
                    $.ajax
                        ({
                    method: "GET",
                    url: "https://aaronlilly.github.io/ServerlessBrix/Preselects/xls/json/space.json"
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

                            $("#legoList").append("<div class='col - sm' style='float:left;'><figure><a href ='" + newArray[i].URL + "'> <img src='" + newArray[i].Images + "' style='margin-right:1px;'>" + '<figcaption> <span class="badge badge-primary" style="background:#5cb85c;margin-left: 20px;">' + newArray[i].SetNumber + " " + '</span><span class="badge badge-primary" style="background:#428bca;"> '+newArray[i].Description + ' </figcaption></span></figure></div>')
   ;
                        }            
                              });
            });


    // $("#legoList").append(HRF + data.results[i].URL + ND + IGG + data.results[i].Images +LST + AA);
    //                     }            
    //                           });
    //         });