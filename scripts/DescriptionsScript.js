          

            $(document).ready(function ()  
            {
                    $.ajax
                        ({
                    method: "GET",
                    url: "https://aaronlilly.github.io/ServerlessBrix/apis/Lego.json"
                         }).done(function(data)  

                               {  
                        for (var i = 0; i < data.results.length; i++) 
                        {
                                                    $("#legoList2").append( data.results[i].SetNumber + " " + data.results[i].Description + " ");
                        }            
                              });
            });

        ;           
    

