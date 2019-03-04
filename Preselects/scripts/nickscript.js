  
            $(document).ready(function ()  
            {
                    $.ajax
                        ({
                    method: "GET",
                    url: "https://aaronlilly.github.io/ServerlessBrix/scripts/nick.json"
                         }).done(function(data) 

                               {
                        for (var i = 0; i < data.nick.length; i++) 
                        {
      
                        $("#legoList").append(data.nick.[i].page);
                        }            
                              });
            });
           