$(document).ready(function () {
    $('#no-now').click(function () {
        var newArray = obj.results.filter(function (el) {
            return el.ID &&
                el.SetNumber == $('#dynamId').val() &&
                el.Images &&
                el.URL &&
                el.Description &&
                el.Notes &&
                el.DashedNumber;
                
        });


        for (var i = 0; i < newArray.length; i++) {
            $('#ArrayD').append("<div class='col - sm' style='float:left;'><figure><a href ='" + newArray[i].URL + "'> <img src='" + newArray[i].Images + "' style='margin-right:1px;'>" + '<figcaption> <span class="badge badge-primary" style="background:#5cb85c;margin-left: 20px;">' + newArray[i].SetNumber + " " + '</span><span class="badge badge-primary" style="background:#428bca;"> ' + newArray[i].Description + ' </figcaption></span></figure></div>')
        };
    });
});

var obj = {
    'results': [{
    "ID": 11762,
    "SetNumber": 7772,
    "URL": "https://www.lego.com/biassets/bi/4505802.pdf",
    "Images": "https://www.lego.com/biassets/biimg/4505802.png",
    "Description": "Lobster Strike",
    "Notes": "BI, 7772",
    "DashedNumber": "7772-1"
  },
  {
    "ID": 11763,
    "SetNumber": 7773,
    "URL": "https://www.lego.com/biassets/bi/4518762.pdf",
    "Images": "https://www.lego.com/biassets/biimg/4518762.png",
    "Description": "Tiger Shark Attack",
    "Notes": "BI, 7773",
    "DashedNumber": "7773-1"
  }
    ]
};
