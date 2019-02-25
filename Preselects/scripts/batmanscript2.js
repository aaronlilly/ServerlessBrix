  
            $(document).ready(function ()  
            {
                    $.ajax
                        ({
                    method: "GET",
                    url: "https://aaronlilly.github.io/ServerlessBrix/Preselects/xls/json/batman.json"
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
                 
                    
