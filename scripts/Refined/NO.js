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
            $('#ArrayD').append("<div class='col - sm' style='float:left;'><figure><a href ='" + newArray[i].URL + "'> <img src='" + newArray[i].Images + "' style='margin-right:1px;'>" + '<figcaption> <span class="badge badge-primary" style="background:#5cb85c;margin-left: 20px;">' + newArray[i].SetNumber + " " + '</span><span class="badge badge-primary" style="background:#428bca;"> ' + newArray[i].Description + ' </figcaption></span></figure></div>')
        };
    });
});

var obj = {
    'results': [{
        "ID": 1,
        "SetNumber": 260,
        "URL": "https://www.lego.com/biassets/bi/120086.pdf",
        "Images": "https://www.lego.com/biassets/biimg/120086.png",
        "Description": "BUILDING BOOK",
        "Notes": "{No longer listed at LEGO.com}",
        "DashedNumber": "260-1"
    },
    {
        "ID": 2,
        "SetNumber": 260,
        "URL": "https://www.lego.com/biassets/bi/120087.pdf",
        "Images": "https://www.lego.com/biassets/biimg/120087.png",
        "Description": "BUILDING BOOK",
        "Notes": "{No longer listed at LEGO.com}",
        "DashedNumber": "260-01
    }
    ]
};
