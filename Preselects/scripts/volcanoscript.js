  
            $(document).ready(function ()  
            {
                    $.ajax
                        ({
                    method: "GET",
                    url: "https://aaronlilly.github.io/ServerlessBrix/Preselects/xls/json/volcano.json"
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

                                    
    $("#legoList").append("<div class='col - sm' style='float:left;'><figure><a href ='" + data.results[i].URL + "'> <img src='" + data.results[i].Images + "' style='margin-right:1px;'>" + '<figcaption> <span class="badge badge-primary" style="background:#5cb85c;margin-left: 20px;">' + data.results[i].SetNumber + " " + '</span><span class="badge badge-primary" style="background:#428bca;"> '+ data.results[i].Description + ' </figcaption></span></figure></div>');
                        }            
                              });
            });
           