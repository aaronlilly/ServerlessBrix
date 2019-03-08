          

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
                                                    $("#legoList2").append('<span class="badge badge-primary" style="background:#5cb85c;margin-left: 20px;">' + data.results[i].SetNumber + " " + '</span><span class="badge badge-primary" style="background:#428bca;"> '+ data.results[i].Description + '</span>' + " ");
                        }            
                              });
            });

        ;           
    


// data.results[i].SetNumber + " " + data.results[i].Description