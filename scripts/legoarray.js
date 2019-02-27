          

//             $(document).ready(function ()  
//             {
//                     $.ajax
//                         ({
//                     method: "GET",
//                     url: "https://aaronlilly.github.io/PokeApp/api/v2/pokemon/FakeLego2.json"
//                          }).done(function(data)  




//                                {  
//                         for (var i = 0; i < data.results.length; i++) 
//                         {
//                             var HRF = "<a href='";
//                             var ND = "'>";
//                             var AA = "</a>"
//                             var YES = '<img src="https://www.lego.com/biassets/biimg/6237212.png">';
//                             var IGG = '<img src="';
//                             var LST = '">'
                           

//                             $("#legoList2").append(HRF + data.results[i].URL + ND + IGG + data.results[i].Images + LST + AA);
//                         }            
//                               });
//             });

//         ;           
                   
//  $(document).ready(function () {
//      $('#SetNumberSearch2').click(function () {
//          $.ajax
//              ({
//                  method: "GET",
//                  url: "https://aaronlilly.github.io/ServerlessBrix/apis/FakeLego2.json"
//              }).done(function (data) {
//                  for (var i = 0; i < data.results.length; i++) {
//                      var HRF = "<a href='";
//                      var Datarr = [data.results];
//                      var UserInput = $('#prodID').val()
//                      var newArray = Datarr.results.filter(function (el) {
//                          return el.ID = 2924  &&
//                              el.SetNumber &&
//                              el.URL &&
//                              el.Images &&
//                              el.Description &&
//                              el.DashedNumber &&
//                              el.Preselect;
//                      });
//                      console.log(newArray);
//                      var ND = "'>";
//                      var AA = "</a>"
//                      var YES = '<img src="https://www.lego.com/biassets/biimg/6237212.png">';
//                      var IGG = '<img src="';
//                      var LST = '">'
                    
//                      //data.results[i].URL


//                      //$("#legoList2").append(HRF + data.results[i].URL + ND + IGG + data.results[i].Images + LST + AA);
//                      $("#legoList2").append(newArray);
//                  }
//              });
//      });
// });
//
// $(document).ready(function () {
// $('#search-now').click(function () {
//     alert($('#prodId').val());
// });
// });
//$('#prodId').val()


     var obj = {
      'results': [{
      "ID": 1,
      "SetNumber": 75929,
      "URL": "https://www.lego.com/biassets/bi/6237211.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6237211.png",
      "Description": "Carnotaurus Gyrosphere Escape",
      "Notes": "BI 3017 / 68+4 - 65/115g, 75929 1/2 V39",
      "DashedNumber": "75929-1"
    },
    {
      "ID": 2,
      "SetNumber": 75929,
      "URL": "https://www.lego.com/biassets/bi/6237212.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6237212.png",
      "Description": "Carnotaurus Gyrosphere Escape",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "75929-1"
    },
    {
      "ID": 3,
      "SetNumber": 75929,
      "URL": "https://www.lego.com/biassets/bi/6237213.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6237213.png",
      "Description": "Carnotaurus Gyrosphere Escape",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "75929-1"
    },
    {
      "ID": 4,
      "SetNumber": 75930,
      "URL": "https://www.lego.com/biassets/bi/6238887.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6238887.png",
      "Description": "Indoraptor Rampage at Lockwood Estate",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "75930-1"
    },
    {
      "ID": 5,
      "SetNumber": 75930,
      "URL": "https://www.lego.com/biassets/bi/6238889.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6238889.png",
      "Description": "Indoraptor Rampage at Lockwood Estate",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "75930-1"
    },
    {
      "ID": 6,
      "SetNumber": 75930,
      "URL": "https://www.lego.com/biassets/bi/6263178.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6263178.png",
      "Description": "Indoraptor Rampage at Lockwood Estate",
      "Notes": "BI 3016/172+4/65+200G, 75930 V29",
      "DashedNumber": "75930-1"
    },
    {
      "ID": 7,
      "SetNumber": 75930,
      "URL": "https://www.lego.com/biassets/bi/6263182.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6263182.png",
      "Description": "Indoraptor Rampage at Lockwood Estate",
      "Notes": "BI 3016/172+4/65+200G, 75930 V39",
      "DashedNumber": "75930-1"
    },
    {
      "ID": 8,
      "SetNumber": 75931,
      "URL": "https://www.lego.com/biassets/bi/6263185.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6263185.png",
      "Description": "Dilophosaurus Outpost Attack",
      "Notes": "BI 3018/68+4/65+115G, 75931 V29",
      "DashedNumber": "75931-1"
    },
    {
      "ID": 9,
      "SetNumber": 75931,
      "URL": "https://www.lego.com/biassets/bi/6237249.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6237249.png",
      "Description": "Dilophosaurus Outpost Attack",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "75931-1"
    },
    {
      "ID": 10,
      "SetNumber": 75931,
      "URL": "https://www.lego.com/biassets/bi/6237250.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6237250.png",
      "Description": "Dilophosaurus Outpost Attack",
      "Notes": "BI 3018/68+4/65+115G, 75931 V39",
      "DashedNumber": "75931-1"
    },
    {
      "ID": 11,
      "SetNumber": 75932,
      "URL": "https://www.lego.com/biassets/bi/6237327.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6237327.png",
      "Description": "Jurassic Park Velociraptor Chase",
      "Notes": "BI 3004/52 -, 75932 1/2 V29",
      "DashedNumber": "75932-1"
    },
    {
      "ID": 12,
      "SetNumber": 75932,
      "URL": "https://www.lego.com/biassets/bi/6237329.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6237329.png",
      "Description": "Jurassic Park Velociraptor Chase",
      "Notes": "BI 3004/52 -, 75932 1/2 V39",
      "DashedNumber": "75932-1"
    },
    {
      "ID": 13,
      "SetNumber": 75932,
      "URL": "https://www.lego.com/biassets/bi/6237330.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6237330.png",
      "Description": "Jurassic Park Velociraptor Chase",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "75932-1"
    },
    {
      "ID": 14,
      "SetNumber": 75932,
      "URL": "https://www.lego.com/biassets/bi/6237333.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6237333.png",
      "Description": "Jurassic Park Velociraptor Chase",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "75932-1"
    },
    {
      "ID": 15,
      "SetNumber": 75932,
      "URL": "https://www.lego.com/biassets/bi/6263189.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6263189.png",
      "Description": "Jurassic Park Velociraptor Chase",
      "Notes": "BI 3004/76+4*-, 75932 2/2 V29",
      "DashedNumber": "75932-1"
    },
    {
      "ID": 16,
      "SetNumber": 75932,
      "URL": "https://www.lego.com/biassets/bi/6263190.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6263190.png",
      "Description": "Jurassic Park Velociraptor Chase",
      "Notes": "BI 3004/76+4*-, 75932 2/2 V39",
      "DashedNumber": "75932-1"
    },
    {
      "ID": 17,
      "SetNumber": 75933,
      "URL": "https://www.lego.com/biassets/bi/6263197.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6263197.png",
      "Description": "T. rex Transport",
      "Notes": "BI 3017, 80+4/65+115G, 75933 2/2 V29",
      "DashedNumber": "75933-1"
    },
    {
      "ID": 18,
      "SetNumber": 75933,
      "URL": "https://www.lego.com/biassets/bi/6263198.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6263198.png",
      "Description": "T. rex Transport",
      "Notes": "BI 3017, 80+4/65+115G, 75933 2/2 V39",
      "DashedNumber": "75933-1"
    },
    {
      "ID": 19,
      "SetNumber": 75933,
      "URL": "https://www.lego.com/biassets/bi/6237253.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6237253.png",
      "Description": "T. rex Transport",
      "Notes": "BI 3004/68+4*-, 75933 1/2 V29",
      "DashedNumber": "75933-1"
    },
    {
      "ID": 20,
      "SetNumber": 75933,
      "URL": "https://www.lego.com/biassets/bi/6237260.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6237260.png",
      "Description": "T. rex Transport",
      "Notes": "BI 3004/68+4*-, 75933 1/2 V39",
      "DashedNumber": "75933-1"
    },
    {
      "ID": 21,
      "SetNumber": 75933,
      "URL": "https://www.lego.com/biassets/bi/6237261.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6237261.png",
      "Description": "T. rex Transport",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "75933-1"
    },
    {
      "ID": 22,
      "SetNumber": 75933,
      "URL": "https://www.lego.com/biassets/bi/6237263.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6237263.png",
      "Description": "T. rex Transport",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "75933-1"
    },
    {
      "ID": 23,
      "SetNumber": 75950,
      "URL": "https://www.lego.com/biassets/bi/6248728.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6248728.png",
      "Description": "Aragogs Lair",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "75950-1"
    },
    {
      "ID": 24,
      "SetNumber": 75950,
      "URL": "https://www.lego.com/biassets/bi/6263114.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6263114.png",
      "Description": "Aragogs Lair",
      "Notes": "BI 3001, 56/65G, 75950 V39",
      "DashedNumber": "75950-1"
    },
    {
      "ID": 25,
      "SetNumber": 75953,
      "URL": "https://www.lego.com/biassets/bi/6248757.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6248757.png",
      "Description": "Hogwarts � Whomping Willow �",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "75953-1"
    },
    {
      "ID": 26,
      "SetNumber": 75953,
      "URL": "https://www.lego.com/biassets/bi/6248758.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6248758.png",
      "Description": "Hogwarts � Whomping Willow �",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "75953-1"
    },
    {
      "ID": 27,
      "SetNumber": 75953,
      "URL": "https://www.lego.com/biassets/bi/6263122.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6263122.png",
      "Description": "Hogwarts � Whomping Willow �",
      "Notes": "BI 3017, 80+4/65+115G, 75953 1/2 V39",
      "DashedNumber": "75953-1"
    },
    {
      "ID": 28,
      "SetNumber": 75953,
      "URL": "https://www.lego.com/biassets/bi/6263123.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6263123.png",
      "Description": "Hogwarts � Whomping Willow �",
      "Notes": "BI 3017 / 60+4 - 65/115G, 75953 2/2 V39",
      "DashedNumber": "75953-1"
    },
    {
      "ID": 29,
      "SetNumber": 75954,
      "URL": "https://www.lego.com/biassets/bi/6263132.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6263132.png",
      "Description": "Hogwarts � Great Hall",
      "Notes": "BI 3019, 180+4/65+200G, 75954 V39",
      "DashedNumber": "75954-1"
    },
    {
      "ID": 30,
      "SetNumber": 75954,
      "URL": "https://www.lego.com/biassets/bi/6248760.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6248760.png",
      "Description": "Hogwarts � Great Hall",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "75954-1"
    },
    {
      "ID": 31,
      "SetNumber": 75956,
      "URL": "https://www.lego.com/biassets/bi/6248776.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6248776.png",
      "Description": "Quidditch � Match",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "75956-1"
    },
    {
      "ID": 32,
      "SetNumber": 75956,
      "URL": "https://www.lego.com/biassets/bi/6248777.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6248777.png",
      "Description": "Quidditch � Match",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "75956-1"
    },
    {
      "ID": 33,
      "SetNumber": 75956,
      "URL": "https://www.lego.com/biassets/bi/6263140.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6263140.png",
      "Description": "Quidditch � Match",
      "Notes": "BI 3017/68+4 - 65/115G, 75956 1/2 V39",
      "DashedNumber": "75956-1"
    },
    {
      "ID": 34,
      "SetNumber": 75956,
      "URL": "https://www.lego.com/biassets/bi/6263142.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6263142.png",
      "Description": "Quidditch � Match",
      "Notes": "BI 3017/40 - 65G, 75956 2/2 V39",
      "DashedNumber": "75956-1"
    },
    {
      "ID": 35,
      "SetNumber": 76000,
      "URL": "https://www.lego.com/biassets/bi/6035608.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6035608.png",
      "Description": "Arctic Batman � vs. Mr. Freeze �: Aquaman �",
      "Notes": "BI 3004/64+4-65*- 76000 V29",
      "DashedNumber": "76000-1"
    },
    {
      "ID": 36,
      "SetNumber": 76000,
      "URL": "https://www.lego.com/biassets/bi/6035609.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6035609.png",
      "Description": "Arctic Batman � vs. Mr. Freeze �: Aquaman �",
      "Notes": "BI 3004/64+4-65*- 76000 V39",
      "DashedNumber": "76000-1"
    },
    {
      "ID": 37,
      "SetNumber": 76001,
      "URL": "https://www.lego.com/biassets/bi/6035642.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6035642.png",
      "Description": "The Bat vs. Bane �: Tumbler Chase",
      "Notes": "BI 3004/44 - 76001 BOOK 1/2 V29",
      "DashedNumber": "76001-1"
    },
    {
      "ID": 38,
      "SetNumber": 76001,
      "URL": "https://www.lego.com/biassets/bi/6035647.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6035647.png",
      "Description": "The Bat vs. Bane �: Tumbler Chase",
      "Notes": "BI 3004/44 - 76001 BOOK 1/2 V39",
      "DashedNumber": "76001-1"
    },
    {
      "ID": 39,
      "SetNumber": 76001,
      "URL": "https://www.lego.com/biassets/bi/6035652.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6035652.png",
      "Description": "The Bat vs. Bane �: Tumbler Chase",
      "Notes": "BI 3004/56 - 76001 BOOK 2/2 V29",
      "DashedNumber": "76001-1"
    },
    {
      "ID": 40,
      "SetNumber": 76001,
      "URL": "https://www.lego.com/biassets/bi/6035655.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6035655.png",
      "Description": "The Bat vs. Bane �: Tumbler Chase",
      "Notes": "BI 3004/56 - 76001 BOOK 2/2 V39",
      "DashedNumber": "76001-1"
    },
    {
      "ID": 41,
      "SetNumber": 76002,
      "URL": "https://www.lego.com/biassets/bi/6047342.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6047342.png",
      "Description": "Superman �: Metropolis Showdown",
      "Notes": "BI 3001/16 - 76002 BOOK 1/2 V29",
      "DashedNumber": "76002-1"
    },
    {
      "ID": 42,
      "SetNumber": 76002,
      "URL": "https://www.lego.com/biassets/bi/6047344.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6047344.png",
      "Description": "Superman �: Metropolis Showdown",
      "Notes": "BI 3001/16 - 76002 BOOK 1/2 V39",
      "DashedNumber": "76002-1"
    },
    {
      "ID": 43,
      "SetNumber": 76002,
      "URL": "https://www.lego.com/biassets/bi/6047346.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6047346.png",
      "Description": "Superman �: Metropolis Showdown",
      "Notes": "BI 3001/32 - 76002 BOOK 2/2 V29",
      "DashedNumber": "76002-1"
    },
    {
      "ID": 44,
      "SetNumber": 76002,
      "URL": "https://www.lego.com/biassets/bi/6047347.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6047347.png",
      "Description": "Superman �: Metropolis Showdown",
      "Notes": "BI 3001/32 - 76002 BOOK 2/2 V39",
      "DashedNumber": "76002-1"
    },
    {
      "ID": 45,
      "SetNumber": 76003,
      "URL": "https://www.lego.com/biassets/bi/6047516.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6047516.png",
      "Description": "Superman TM: Battle of Smallville",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "76003-1"
    },
    {
      "ID": 46,
      "SetNumber": 76003,
      "URL": "https://www.lego.com/biassets/bi/6047517.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6047517.png",
      "Description": "Superman TM: Battle of Smallville",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "76003-1"
    },
    {
      "ID": 47,
      "SetNumber": 76003,
      "URL": "https://www.lego.com/biassets/bi/6047514.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6047514.png",
      "Description": "Superman TM: Battle of Smallville",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "76003-1"
    },
    {
      "ID": 48,
      "SetNumber": 76003,
      "URL": "https://www.lego.com/biassets/bi/6047515.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6047515.png",
      "Description": "Superman TM: Battle of Smallville",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "76003-1"
    },
    {
      "ID": 49,
      "SetNumber": 76003,
      "URL": "https://www.lego.com/biassets/bi/6047512.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6047512.png",
      "Description": "Superman �: Battle of Smallville",
      "Notes": "BI 3022/12-65G -  COMIC BOOK 76003 V29",
      "DashedNumber": "76003-1"
    },
    {
      "ID": 50,
      "SetNumber": 76003,
      "URL": "https://www.lego.com/biassets/bi/6047513.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6047513.png",
      "Description": "Superman �: Battle of Smallville",
      "Notes": "BI 3022/12-65G -  COMIC BOOK 76003 V39",
      "DashedNumber": "76003-1"
    },
    {
      "ID": 51,
      "SetNumber": 76003,
      "URL": "https://www.lego.com/biassets/bi/6074315.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6074315.png",
      "Description": "Superman �: Battle of Smallville",
      "Notes": "BI 3004/52 - 76003 BOOK 2/2 V29",
      "DashedNumber": "76003-1"
    },
    {
      "ID": 52,
      "SetNumber": 76003,
      "URL": "https://www.lego.com/biassets/bi/6074320.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6074320.png",
      "Description": "Superman �: Battle of Smallville",
      "Notes": "BI 3004/52 - 76003 BOOK 2/2 V39",
      "DashedNumber": "76003-1"
    },
    {
      "ID": 53,
      "SetNumber": 76003,
      "URL": "https://www.lego.com/biassets/bi/6074313.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6074313.png",
      "Description": "Superman �: Battle of Smallville",
      "Notes": "BI 3004/56 - 76003 BOOK 1/2 V29",
      "DashedNumber": "76003-1"
    },
    {
      "ID": 54,
      "SetNumber": 76003,
      "URL": "https://www.lego.com/biassets/bi/6074318.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6074318.png",
      "Description": "Superman �: Battle of Smallville",
      "Notes": "BI 3004/56 - 76003 BOOK 1/2 V39",
      "DashedNumber": "76003-1"
    },
    {
      "ID": 55,
      "SetNumber": 76004,
      "URL": "https://www.lego.com/biassets/bi/6047683.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6047683.png",
      "Description": "Spider-Man �: Spider-Cycle Chase",
      "Notes": "BI 3004 60/ 76004 V29",
      "DashedNumber": "76004-1"
    },
    {
      "ID": 56,
      "SetNumber": 76004,
      "URL": "https://www.lego.com/biassets/bi/6047684.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6047684.png",
      "Description": "Spider-Man �: Spider-Cycle Chase",
      "Notes": "BI 3004 60/ 76004 V39",
      "DashedNumber": "76004-1"
    },
    {
      "ID": 57,
      "SetNumber": 76004,
      "URL": "https://www.lego.com/biassets/bi/6037284.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6037284.png",
      "Description": "Spider-Man �: Spider-Cycle Chase",
      "Notes": "BI 3022/12 - COMIC BOOK 76004 V29",
      "DashedNumber": "76004-1"
    },
    {
      "ID": 58,
      "SetNumber": 76004,
      "URL": "https://www.lego.com/biassets/bi/6037286.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6037286.png",
      "Description": "Spider-Man �: Spider-Cycle Chase",
      "Notes": "BI 3022/12 - COMIC BOOK 76004 V39",
      "DashedNumber": "76004-1"
    },
    {
      "ID": 59,
      "SetNumber": 76005,
      "URL": "https://www.lego.com/biassets/bi/6035698.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6035698.png",
      "Description": "Spider-Man �: Daily Bugle Showdown",
      "Notes": "BI 3004/40 - 76005 BOOK 3/3 V29",
      "DashedNumber": "76005-1"
    },
    {
      "ID": 60,
      "SetNumber": 76005,
      "URL": "https://www.lego.com/biassets/bi/6035705.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6035705.png",
      "Description": "Spider-Man �: Daily Bugle Showdown",
      "Notes": "BI 3004/40 - 76005 BOOK 3/3 V39",
      "DashedNumber": "76005-1"
    },
    {
      "ID": 61,
      "SetNumber": 76005,
      "URL": "https://www.lego.com/biassets/bi/6038418.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6038418.png",
      "Description": "Spider-Man �: Daily Bugle Showdown",
      "Notes": "BI 3017/24 - 76005 BOOK 1/3 V29",
      "DashedNumber": "76005-1"
    },
    {
      "ID": 62,
      "SetNumber": 76005,
      "URL": "https://www.lego.com/biassets/bi/6038422.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6038422.png",
      "Description": "Spider-Man �: Daily Bugle Showdown",
      "Notes": "BI 3017/24 - 76005 BOOK 1/3 V39",
      "DashedNumber": "76005-1"
    },
    {
      "ID": 63,
      "SetNumber": 76005,
      "URL": "https://www.lego.com/biassets/bi/6038426.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6038426.png",
      "Description": "Spider-Man �: Daily Bugle Showdown",
      "Notes": "BI 3017/64+4*- 76005 BOOK 2/3 V29",
      "DashedNumber": "76005-1"
    },
    {
      "ID": 64,
      "SetNumber": 76005,
      "URL": "https://www.lego.com/biassets/bi/6038431.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6038431.png",
      "Description": "Spider-Man �: Daily Bugle Showdown",
      "Notes": "BI 3017/64+4*- 76005 BOOK 2/3 V39",
      "DashedNumber": "76005-1"
    },
    {
      "ID": 65,
      "SetNumber": 76005,
      "URL": "https://www.lego.com/biassets/bi/6037288.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6037288.png",
      "Description": "Spider-Man �: Daily Bugle Showdown",
      "Notes": "BI 3022/12 - COMIC BOOK 76005 V29",
      "DashedNumber": "76005-1"
    },
    {
      "ID": 66,
      "SetNumber": 76005,
      "URL": "https://www.lego.com/biassets/bi/6037290.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6037290.png",
      "Description": "Spider-Man �: Daily Bugle Showdown",
      "Notes": "BI 3022/12 - COMIC BOOK 76005 V39",
      "DashedNumber": "76005-1"
    },
    {
      "ID": 67,
      "SetNumber": 76006,
      "URL": "https://www.lego.com/biassets/bi/6046909.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6046909.png",
      "Description": "Iron Man �: Extremis � Sea Port Battle",
      "Notes": "BI 3004/60+4 - 76006 V29",
      "DashedNumber": "76006-1"
    },
    {
      "ID": 68,
      "SetNumber": 76006,
      "URL": "https://www.lego.com/biassets/bi/6046912.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6046912.png",
      "Description": "Iron Man �: Extremis � Sea Port Battle",
      "Notes": "BI 3004/60+4 - 76006 V39",
      "DashedNumber": "76006-1"
    },
    {
      "ID": 69,
      "SetNumber": 76006,
      "URL": "https://www.lego.com/biassets/bi/6046913.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6046913.png",
      "Description": "Iron Man �: Extremis � Sea Port Battle",
      "Notes": "BI 3022/12-65G - COMIC BOOK 76006 V29",
      "DashedNumber": "76006-1"
    },
    {
      "ID": 70,
      "SetNumber": 76006,
      "URL": "https://www.lego.com/biassets/bi/6046915.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6046915.png",
      "Description": "Iron Man �: Extremis � Sea Port Battle",
      "Notes": "BI 3022/12-65G - COMIC BOOK 76006 V39",
      "DashedNumber": "76006-1"
    },
    {
      "ID": 71,
      "SetNumber": 76007,
      "URL": "https://www.lego.com/biassets/bi/6049334.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6049334.png",
      "Description": "Iron Man �: Malibu Mansion Attack",
      "Notes": "BI 3004/52 - 76007 1/2 V29",
      "DashedNumber": "76007-1"
    },
    {
      "ID": 72,
      "SetNumber": 76007,
      "URL": "https://www.lego.com/biassets/bi/6049341.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6049341.png",
      "Description": "Iron Man �: Malibu Mansion Attack",
      "Notes": "BI 3004/52 - 76007 1/2 V39",
      "DashedNumber": "76007-1"
    },
    {
      "ID": 73,
      "SetNumber": 76007,
      "URL": "https://www.lego.com/biassets/bi/6049763.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6049763.png",
      "Description": "Iron Man �: Malibu Mansion Attack",
      "Notes": "BI 3017 / 68+4 - 65/115g 76007 2/2 V29",
      "DashedNumber": "76007-1"
    },
    {
      "ID": 74,
      "SetNumber": 76007,
      "URL": "https://www.lego.com/biassets/bi/6049764.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6049764.png",
      "Description": "Iron Man �: Malibu Mansion Attack",
      "Notes": "BI 3017 / 68+4 - 65/115g 76007 2/2 V39",
      "DashedNumber": "76007-1"
    },
    {
      "ID": 75,
      "SetNumber": 76007,
      "URL": "https://www.lego.com/biassets/bi/6046930.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6046930.png",
      "Description": "Iron Man �: Malibu Mansion Attack",
      "Notes": "BI 3022/12-65G - COMIC BOOK 76007 V29",
      "DashedNumber": "76007-1"
    },
    {
      "ID": 76,
      "SetNumber": 76007,
      "URL": "https://www.lego.com/biassets/bi/6046931.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6046931.png",
      "Description": "Iron Man �: Malibu Mansion Attack",
      "Notes": "BI 3022/12-65G - COMIC BOOK 76007 V39",
      "DashedNumber": "76007-1"
    },
    {
      "ID": 77,
      "SetNumber": 76008,
      "URL": "https://www.lego.com/biassets/bi/6046932.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6046932.png",
      "Description": "Iron Man � vs. The Mandarin �: Ultimate Sh",
      "Notes": "BI 3001/36-65G - 76008 V29",
      "DashedNumber": "76008-1"
    },
    {
      "ID": 78,
      "SetNumber": 76008,
      "URL": "https://www.lego.com/biassets/bi/6046933.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6046933.png",
      "Description": "Iron Man � vs. The Mandarin �: Ultimate Sh",
      "Notes": "BI 3001/36-65G - 76008 V39",
      "DashedNumber": "76008-1"
    },
    {
      "ID": 79,
      "SetNumber": 76009,
      "URL": "https://www.lego.com/biassets/bi/6047353.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6047353.png",
      "Description": "Superman �: Black Zero Escape",
      "Notes": "BI 3004/64+4-65*- 76009 V29",
      "DashedNumber": "76009-1"
    },
    {
      "ID": 80,
      "SetNumber": 76009,
      "URL": "https://www.lego.com/biassets/bi/6047355.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6047355.png",
      "Description": "Superman �: Black Zero Escape",
      "Notes": "BI 3004/64+4-65*- 76009 V39",
      "DashedNumber": "76009-1"
    },
    {
      "ID": 81,
      "SetNumber": 76009,
      "URL": "https://www.lego.com/biassets/bi/6047357.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6047357.png",
      "Description": "Superman �: Black Zero Escape",
      "Notes": "BI 3022/12-65G - COMIC BOOK 76009 V29",
      "DashedNumber": "76009-1"
    },
    {
      "ID": 82,
      "SetNumber": 76009,
      "URL": "https://www.lego.com/biassets/bi/6047359.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6047359.png",
      "Description": "Superman �: Black Zero Escape",
      "Notes": "BI 3022/12-65G - COMIC BOOK 76009 V39",
      "DashedNumber": "76009-1"
    },
    {
      "ID": 83,
      "SetNumber": 76010,
      "URL": "https://www.lego.com/biassets/bi/6070932.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6070932.png",
      "Description": "Batman �: The Penguin Face off",
      "Notes": "BI 3003/36-76010 V39",
      "DashedNumber": "76010-1"
    },
    {
      "ID": 84,
      "SetNumber": 76010,
      "URL": "https://www.lego.com/biassets/bi/6070930.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6070930.png",
      "Description": "Batman �: The Penguin Face off",
      "Notes": "BI 3003/36-76010 V29",
      "DashedNumber": "76010-1"
    },
    {
      "ID": 85,
      "SetNumber": 76011,
      "URL": "https://www.lego.com/biassets/bi/6070934.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6070934.png",
      "Description": "Batman �: Man-Bat Attack",
      "Notes": "BI 3004/60+4 -76011 V39",
      "DashedNumber": "76011-1"
    },
    {
      "ID": 86,
      "SetNumber": 76012,
      "URL": "https://www.lego.com/biassets/bi/6070949.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6070949.png",
      "Description": "Batman �: The Riddler Chase",
      "Notes": "BI 3004/36-76012 1/2 V29",
      "DashedNumber": "76012-1"
    },
    {
      "ID": 87,
      "SetNumber": 76012,
      "URL": "https://www.lego.com/biassets/bi/6070952.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6070952.png",
      "Description": "Batman �: The Riddler Chase",
      "Notes": "BI 3004/36-76012 1/2 V39",
      "DashedNumber": "76012-1"
    },
    {
      "ID": 88,
      "SetNumber": 76012,
      "URL": "https://www.lego.com/biassets/bi/6070950.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6070950.png",
      "Description": "Batman �: The Riddler Chase",
      "Notes": "BI 3004/72+4*-76012 2/2 V29",
      "DashedNumber": "76012-1"
    },
    {
      "ID": 89,
      "SetNumber": 76012,
      "URL": "https://www.lego.com/biassets/bi/6070953.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6070953.png",
      "Description": "Batman �: The Riddler Chase",
      "Notes": "BI 3004/72+4*-76012 2/2 V39",
      "DashedNumber": "76012-1"
    },
    {
      "ID": 90,
      "SetNumber": 76013,
      "URL": "https://www.lego.com/biassets/bi/6070941.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6070941.png",
      "Description": "Batman �: The Joker Steam Roller",
      "Notes": "BI 3017 / 56 - 65g-76013 1/2 V29",
      "DashedNumber": "76013-1"
    },
    {
      "ID": 91,
      "SetNumber": 76013,
      "URL": "https://www.lego.com/biassets/bi/6070944.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6070944.png",
      "Description": "Batman �: The Joker Steam Roller",
      "Notes": "BI 3017/60+4/65+115g-76013 2/2 V29",
      "DashedNumber": "76013-1"
    },
    {
      "ID": 92,
      "SetNumber": 76013,
      "URL": "https://www.lego.com/biassets/bi/6070942.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6070942.png",
      "Description": "Batman �: The Joker Steam Roller",
      "Notes": "BI 3017 / 56 - 65g-76013 1/2 V39",
      "DashedNumber": "76013-1"
    },
    {
      "ID": 93,
      "SetNumber": 76013,
      "URL": "https://www.lego.com/biassets/bi/6070946.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6070946.png",
      "Description": "Batman �: The Joker Steam Roller",
      "Notes": "BI 3017/60+4/65+115g-76013 2/2 V39",
      "DashedNumber": "76013-1"
    },
    {
      "ID": 94,
      "SetNumber": 76014,
      "URL": "https://www.lego.com/biassets/bi/6079387.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6079387.png",
      "Description": "Spider-Trike vs. Electro",
      "Notes": "BI 3003/28-76014 V29",
      "DashedNumber": "76014-1"
    },
    {
      "ID": 95,
      "SetNumber": 76014,
      "URL": "https://www.lego.com/biassets/bi/6079388.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6079388.png",
      "Description": "Spider-Trike vs. Electro",
      "Notes": "BI 3003/28-76014 V39",
      "DashedNumber": "76014-1"
    },
    {
      "ID": 96,
      "SetNumber": 76015,
      "URL": "https://www.lego.com/biassets/bi/6084701.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6084701.png",
      "Description": "Doc Ock  Truck Heist",
      "Notes": "BI 3004/72+4*-76015 V29",
      "DashedNumber": "76015-1"
    },
    {
      "ID": 97,
      "SetNumber": 76015,
      "URL": "https://www.lego.com/biassets/bi/6084702.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6084702.png",
      "Description": "Doc Ock  Truck Heist",
      "Notes": "BI 3004/72+4*-76015 V39",
      "DashedNumber": "76015-1"
    },
    {
      "ID": 98,
      "SetNumber": 76016,
      "URL": "https://www.lego.com/biassets/bi/6079403.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6079403.png",
      "Description": "Spider-Helicopter Rescue",
      "Notes": "BI 3004/28, 76016 1/2 V29",
      "DashedNumber": "76016-1"
    },
    {
      "ID": 99,
      "SetNumber": 76016,
      "URL": "https://www.lego.com/biassets/bi/6079405.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6079405.png",
      "Description": "Spider-Helicopter Rescue",
      "Notes": "BI 3004/28, 76016 1/2 V39",
      "DashedNumber": "76016-1"
    },
    {
      "ID": 100,
      "SetNumber": 76016,
      "URL": "https://www.lego.com/biassets/bi/6079407.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6079407.png",
      "Description": "Spider-Helicopter Rescue",
      "Notes": "BI 3017 / 60 - 65g, 76016 2/2 V29",
      "DashedNumber": "76016-1"
    },
    {
      "ID": 101,
      "SetNumber": 76016,
      "URL": "https://www.lego.com/biassets/bi/6079408.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6079408.png",
      "Description": "Spider-Helicopter Rescue",
      "Notes": "BI 3017 / 60 - 65g, 76016 2/2 V39",
      "DashedNumber": "76016-1"
    },
    {
      "ID": 102,
      "SetNumber": 76017,
      "URL": "https://www.lego.com/biassets/bi/6079478.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6079478.png",
      "Description": "Captain America vs. Hydra",
      "Notes": "BI 3004/56 - 76017 BOOK V29",
      "DashedNumber": "76017-1"
    },
    {
      "ID": 103,
      "SetNumber": 76017,
      "URL": "https://www.lego.com/biassets/bi/6079480.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6079480.png",
      "Description": "Captain America vs. Hydra",
      "Notes": "BI 3004/56 - 76017 BOOK V39",
      "DashedNumber": "76017-1"
    },
    {
      "ID": 104,
      "SetNumber": 76018,
      "URL": "https://www.lego.com/biassets/bi/6079482.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6079482.png",
      "Description": "Hulk Lab Smash",
      "Notes": "BI 3017/64+4-65/115g-76018 BOOK 1/2 V29",
      "DashedNumber": "76018-1"
    },
    {
      "ID": 105,
      "SetNumber": 76018,
      "URL": "https://www.lego.com/biassets/bi/6079484.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6079484.png",
      "Description": "Hulk Lab Smash",
      "Notes": "BI 3017/68+4-65/115g-76018 BOOK 2/2 V29",
      "DashedNumber": "76018-1"
    },
    {
      "ID": 106,
      "SetNumber": 76018,
      "URL": "https://www.lego.com/biassets/bi/6079483.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6079483.png",
      "Description": "Hulk Lab Smash",
      "Notes": "BI 3017/64+4-65/115g-76018 BOOK 1/2 V39",
      "DashedNumber": "76018-1"
    },
    {
      "ID": 107,
      "SetNumber": 76018,
      "URL": "https://www.lego.com/biassets/bi/6079485.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6079485.png",
      "Description": "Hulk Lab Smash",
      "Notes": "BI 3017/68+4-65/115g-76018 BOOK 2/2 V39",
      "DashedNumber": "76018-1"
    },
    {
      "ID": 108,
      "SetNumber": 76019,
      "URL": "https://www.lego.com/biassets/bi/6090099.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6090099.png",
      "Description": "Starblaster Showdown",
      "Notes": "BI 3004/60+4, 76019 V29",
      "DashedNumber": "76019-1"
    },
    {
      "ID": 109,
      "SetNumber": 76019,
      "URL": "https://www.lego.com/biassets/bi/6090101.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6090101.png",
      "Description": "Starblaster Showdown",
      "Notes": "BI 3004/60+4, 76019 V39",
      "DashedNumber": "76019-1"
    },
    {
      "ID": 110,
      "SetNumber": 76020,
      "URL": "https://www.lego.com/biassets/bi/6090107.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6090107.png",
      "Description": "Knowhere Escape Mission",
      "Notes": "BI 3004/52 - 76020 1/2 V29",
      "DashedNumber": "76020-1"
    },
    {
      "ID": 111,
      "SetNumber": 76020,
      "URL": "https://www.lego.com/biassets/bi/6090112.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6090112.png",
      "Description": "Knowhere Escape Mission",
      "Notes": "BI 3004/52 - 76020 1/2 V39",
      "DashedNumber": "76020-1"
    },
    {
      "ID": 112,
      "SetNumber": 76020,
      "URL": "https://www.lego.com/biassets/bi/6090155.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6090155.png",
      "Description": "Knowhere Escape Mission",
      "Notes": "BI 3004/64+4-65*- 76020 2/2 V29",
      "DashedNumber": "76020-1"
    },
    {
      "ID": 113,
      "SetNumber": 76020,
      "URL": "https://www.lego.com/biassets/bi/6090157.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6090157.png",
      "Description": "Knowhere Escape Mission",
      "Notes": "BI 3004/64+4-65*- 76020 2/2 V39",
      "DashedNumber": "76020-1"
    },
    {
      "ID": 114,
      "SetNumber": 76021,
      "URL": "https://www.lego.com/biassets/bi/6090127.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6090127.png",
      "Description": "The Milano Spaceship Rescue",
      "Notes": "BI 3016/60+4*- 76021 1/2 V29",
      "DashedNumber": "76021-1"
    },
    {
      "ID": 115,
      "SetNumber": 76021,
      "URL": "https://www.lego.com/biassets/bi/6090131.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6090131.png",
      "Description": "The Milano Spaceship Rescue",
      "Notes": "BI 3016/60+4*- 76021 1/2 V39",
      "DashedNumber": "76021-1"
    },
    {
      "ID": 116,
      "SetNumber": 76021,
      "URL": "https://www.lego.com/biassets/bi/6090143.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6090143.png",
      "Description": "The Milano Spaceship Rescue",
      "Notes": "BI 3016/64+4, 76021 2/2 V29",
      "DashedNumber": "76021-1"
    },
    {
      "ID": 117,
      "SetNumber": 76021,
      "URL": "https://www.lego.com/biassets/bi/6090144.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6090144.png",
      "Description": "The Milano Spaceship Rescue",
      "Notes": "BI 3016/64+4, 76021 2/2 V39",
      "DashedNumber": "76021-1"
    },
    {
      "ID": 118,
      "SetNumber": 76022,
      "URL": "https://www.lego.com/biassets/bi/6094062.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6094062.png",
      "Description": "X-Men vs. The Sentinel",
      "Notes": "BI 3004/72+4*-76022 2/2 V29",
      "DashedNumber": "76022-1"
    },
    {
      "ID": 119,
      "SetNumber": 76022,
      "URL": "https://www.lego.com/biassets/bi/6094063.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6094063.png",
      "Description": "X-Men vs. The Sentinel",
      "Notes": "BI 3004/72+4*-76022 2/2 V39",
      "DashedNumber": "76022-1"
    },
    {
      "ID": 120,
      "SetNumber": 76022,
      "URL": "https://www.lego.com/biassets/bi/6090146.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6090146.png",
      "Description": "X-Men vs. The Sentinel",
      "Notes": "BI 3022/32-65G, 76022 1/2 V29",
      "DashedNumber": "76022-1"
    },
    {
      "ID": 121,
      "SetNumber": 76022,
      "URL": "https://www.lego.com/biassets/bi/6090148.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6090148.png",
      "Description": "X-Men vs. The Sentinel",
      "Notes": "BI 3022/32-65G, 76022 1/2 V39",
      "DashedNumber": "76022-1"
    },
    {
      "ID": 122,
      "SetNumber": 76023,
      "URL": "https://www.lego.com/biassets/bi/6099978.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6099978.png",
      "Description": "The Tumbler",
      "Notes": "BI 3019 / 60 - 65g 76023 4/5 V29",
      "DashedNumber": "76023-1"
    },
    {
      "ID": 123,
      "SetNumber": 76023,
      "URL": "https://www.lego.com/biassets/bi/6099983.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6099983.png",
      "Description": "The Tumbler",
      "Notes": "BI 3019 / 60 - 65g 76023 4/5 V39",
      "DashedNumber": "76023-1"
    },
    {
      "ID": 124,
      "SetNumber": 76023,
      "URL": "https://www.lego.com/biassets/bi/6099989.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6099989.png",
      "Description": "The Tumbler",
      "Notes": "BI 3019/60+4*- 76023 5/5 V29",
      "DashedNumber": "76023-1"
    },
    {
      "ID": 125,
      "SetNumber": 76023,
      "URL": "https://www.lego.com/biassets/bi/6099992.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6099992.png",
      "Description": "The Tumbler",
      "Notes": "BI 3019/60+4*- 76023 5/5 V39",
      "DashedNumber": "76023-1"
    },
    {
      "ID": 126,
      "SetNumber": 76023,
      "URL": "https://www.lego.com/biassets/bi/6099971.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6099971.png",
      "Description": "The Tumbler",
      "Notes": "BI 3019/64+4*- 76023 3/5 V29",
      "DashedNumber": "76023-1"
    },
    {
      "ID": 127,
      "SetNumber": 76023,
      "URL": "https://www.lego.com/biassets/bi/6099974.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6099974.png",
      "Description": "The Tumbler",
      "Notes": "BI 3019/64+4*- 76023 3/5 V39",
      "DashedNumber": "76023-1"
    },
    {
      "ID": 128,
      "SetNumber": 76023,
      "URL": "https://www.lego.com/biassets/bi/6099967.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6099967.png",
      "Description": "The Tumbler",
      "Notes": "BI 3019/68+4*- 76023 2/5 V29",
      "DashedNumber": "76023-1"
    },
    {
      "ID": 129,
      "SetNumber": 76023,
      "URL": "https://www.lego.com/biassets/bi/6099969.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6099969.png",
      "Description": "The Tumbler",
      "Notes": "BI 3019/68+4*- 76023 2/5 V39",
      "DashedNumber": "76023-1"
    },
    {
      "ID": 130,
      "SetNumber": 76023,
      "URL": "https://www.lego.com/biassets/bi/6099964.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6099964.png",
      "Description": "The Tumbler",
      "Notes": "BI 3019/76+4*- 76023 1/5 V39",
      "DashedNumber": "76023-1"
    },
    {
      "ID": 131,
      "SetNumber": 76023,
      "URL": "https://www.lego.com/biassets/bi/6099959.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6099959.png",
      "Description": "The Tumbler",
      "Notes": "BI 3019/76+4*- 76023 1/5 V29",
      "DashedNumber": "76023-1"
    },
    {
      "ID": 132,
      "SetNumber": 76025,
      "URL": "https://www.lego.com/biassets/bi/6112149.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6112149.png",
      "Description": "Green Lantern vs. Sinestro",
      "Notes": "BI 3004/76+4*- 76025 V29",
      "DashedNumber": "76025-1"
    },
    {
      "ID": 133,
      "SetNumber": 76025,
      "URL": "https://www.lego.com/biassets/bi/6112151.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6112151.png",
      "Description": "Green Lantern vs. Sinestro",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "76025-1"
    },
    {
      "ID": 134,
      "SetNumber": 76025,
      "URL": "https://www.lego.com/biassets/bi/6112152.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6112152.png",
      "Description": "Darkseid Invasion",
      "Notes": "BI 3022/12-65G ComBkV29/76025+26+27+28",
      "DashedNumber": "76025-1"
    },
    {
      "ID": 135,
      "SetNumber": 76025,
      "URL": "https://www.lego.com/biassets/bi/6112153.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6112153.png",
      "Description": "Darkseid Invasion",
      "Notes": "BI 3022/12-65G ComBkV39/76025+26+27+28",
      "DashedNumber": "76025-1"
    },
    {
      "ID": 136,
      "SetNumber": 76025,
      "URL": "https://www.lego.com/biassets/bi/6152360.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6152360.png",
      "Description": "Green Lantern vs. Sinestro",
      "Notes": "BI 3004/76+4*- 76025 V39",
      "DashedNumber": "76025-1"
    },
    {
      "ID": 137,
      "SetNumber": 76026,
      "URL": "https://www.lego.com/biassets/bi/6117445.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6117445.png",
      "Description": "Gorilla Grodd goes Bananas",
      "Notes": "BI 3004/52 - 76026 V29 1/2",
      "DashedNumber": "76026-1"
    },
    {
      "ID": 138,
      "SetNumber": 76026,
      "URL": "https://www.lego.com/biassets/bi/6117449.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6117449.png",
      "Description": "Gorilla Grodd goes Bananas",
      "Notes": "BI 3004/52 - 76026 V39 1/2",
      "DashedNumber": "76026-1"
    },
    {
      "ID": 139,
      "SetNumber": 76026,
      "URL": "https://www.lego.com/biassets/bi/6112158.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6112158.png",
      "Description": "Gorilla Grodd goes Bananas",
      "Notes": "BI 3017 / 64+4 - 65/115g 76026 V29 2/2",
      "DashedNumber": "76026-1"
    },
    {
      "ID": 140,
      "SetNumber": 76026,
      "URL": "https://www.lego.com/biassets/bi/6112159.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6112159.png",
      "Description": "Gorilla Grodd goes Bananas",
      "Notes": "BI 3017 / 64+4 - 65/115g 76026 V39 2/2",
      "DashedNumber": "76026-1"
    },
    {
      "ID": 141,
      "SetNumber": 76027,
      "URL": "https://www.lego.com/biassets/bi/6112185.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6112185.png",
      "Description": "Black Manta Deep Sea Strike",
      "Notes": "BI 3004/36 76027 V29 3/3",
      "DashedNumber": "76027-1"
    },
    {
      "ID": 142,
      "SetNumber": 76027,
      "URL": "https://www.lego.com/biassets/bi/6112187.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6112187.png",
      "Description": "Black Manta Deep Sea Strike",
      "Notes": "BI 3004/36 76027 V39 3/3",
      "DashedNumber": "76027-1"
    },
    {
      "ID": 143,
      "SetNumber": 76027,
      "URL": "https://www.lego.com/biassets/bi/6112182.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6112182.png",
      "Description": "Black Manta Deep Sea Strike",
      "Notes": "BI 3004/52 - 76027 V29 2/3",
      "DashedNumber": "76027-1"
    },
    {
      "ID": 144,
      "SetNumber": 76027,
      "URL": "https://www.lego.com/biassets/bi/6112183.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6112183.png",
      "Description": "Black Manta Deep Sea Strike",
      "Notes": "BI 3004/52 - 76027 V39 2/3",
      "DashedNumber": "76027-1"
    },
    {
      "ID": 145,
      "SetNumber": 76027,
      "URL": "https://www.lego.com/biassets/bi/6112178.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6112178.png",
      "Description": "Black Manta Deep Sea Strike",
      "Notes": "BI 3004/56 - 76027 V29 1/3",
      "DashedNumber": "76027-1"
    },
    {
      "ID": 146,
      "SetNumber": 76027,
      "URL": "https://www.lego.com/biassets/bi/6112179.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6112179.png",
      "Description": "Black Manta Deep Sea Strike",
      "Notes": "BI 3004/56 - 76027 V39 1/3",
      "DashedNumber": "76027-1"
    },
    {
      "ID": 147,
      "SetNumber": 76028,
      "URL": "https://www.lego.com/biassets/bi/6112309.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6112309.png",
      "Description": "Darkseid Invasion",
      "Notes": "BI 3004/40 - 76028 V29 1/3",
      "DashedNumber": "76028-1"
    },
    {
      "ID": 148,
      "SetNumber": 76028,
      "URL": "https://www.lego.com/biassets/bi/6112310.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6112310.png",
      "Description": "Darkseid Invasion",
      "Notes": "BI 3004/40 - 76028 V39 1/3",
      "DashedNumber": "76028-1"
    },
    {
      "ID": 149,
      "SetNumber": 76028,
      "URL": "https://www.lego.com/biassets/bi/6112311.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6112311.png",
      "Description": "Darkseid Invasion",
      "Notes": "BI 3017 / 80+4 - 65/115g 76028 V29 2/3",
      "DashedNumber": "76028-1"
    },
    {
      "ID": 150,
      "SetNumber": 76028,
      "URL": "https://www.lego.com/biassets/bi/6112313.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6112313.png",
      "Description": "Darkseid Invasion",
      "Notes": "BI 3017 / 80+4 - 65/115g 76028 V39 2/3",
      "DashedNumber": "76028-1"
    },
    {
      "ID": 151,
      "SetNumber": 76028,
      "URL": "https://www.lego.com/biassets/bi/6112314.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6112314.png",
      "Description": "Darkseid Invasion",
      "Notes": "BI 3019/48-65G 76028 V29 3/3",
      "DashedNumber": "76028-1"
    },
    {
      "ID": 152,
      "SetNumber": 76028,
      "URL": "https://www.lego.com/biassets/bi/6112316.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6112316.png",
      "Description": "Darkseid Invasion",
      "Notes": "BI 3019/48-65G 76028 V39 3/3",
      "DashedNumber": "76028-1"
    },
    {
      "ID": 153,
      "SetNumber": 76029,
      "URL": "https://www.lego.com/biassets/bi/6119050.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6119050.png",
      "Description": "Iron Man vs. Ultron",
      "Notes": "BI 3003/36-76029 V29",
      "DashedNumber": "76029-1"
    },
    {
      "ID": 154,
      "SetNumber": 76029,
      "URL": "https://www.lego.com/biassets/bi/6119051.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6119051.png",
      "Description": "Iron Man vs. Ultron",
      "Notes": "BI 3003/36-76029 V39",
      "DashedNumber": "76029-1"
    },
    {
      "ID": 155,
      "SetNumber": 76030,
      "URL": "https://www.lego.com/biassets/bi/6121853.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6121853.png",
      "Description": "Avengers Hydra Showdown",
      "Notes": "BI 3004/68+4*- 76030 V29",
      "DashedNumber": "76030-1"
    },
    {
      "ID": 156,
      "SetNumber": 76030,
      "URL": "https://www.lego.com/biassets/bi/6121861.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6121861.png",
      "Description": "Avengers Hydra Showdown",
      "Notes": "BI 3004/68+4*- 76030 V39",
      "DashedNumber": "76030-1"
    },
    {
      "ID": 157,
      "SetNumber": 76031,
      "URL": "https://www.lego.com/biassets/bi/6119056.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6119056.png",
      "Description": "The Hulk Buster Smash",
      "Notes": "BI 3022/80+4-65+115G-76031 V29",
      "DashedNumber": "76031-1"
    },
    {
      "ID": 158,
      "SetNumber": 76031,
      "URL": "https://www.lego.com/biassets/bi/6119057.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6119057.png",
      "Description": "The Hulk Buster Smash",
      "Notes": "BI 3022/80+4-65+115G-76031 V39",
      "DashedNumber": "76031-1"
    },
    {
      "ID": 159,
      "SetNumber": 76032,
      "URL": "https://www.lego.com/biassets/bi/6129359.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6129359.png",
      "Description": "The Avengers Quinjet City Chase",
      "Notes": "BI 3019/60+4*-76032 V29 1/2",
      "DashedNumber": "76032-1"
    },
    {
      "ID": 160,
      "SetNumber": 76032,
      "URL": "https://www.lego.com/biassets/bi/6129361.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6129361.png",
      "Description": "The Avengers Quinjet City Chase",
      "Notes": "BI 3019/60+4*-76032 V39 1/2",
      "DashedNumber": "76032-1"
    },
    {
      "ID": 161,
      "SetNumber": 76032,
      "URL": "https://www.lego.com/biassets/bi/6132968.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6132968.png",
      "Description": "The Avengers Quinjet City Chase",
      "Notes": "BI 3019/76+4*- 76032 V29 2/2",
      "DashedNumber": "76032-1"
    },
    {
      "ID": 162,
      "SetNumber": 76032,
      "URL": "https://www.lego.com/biassets/bi/6132969.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6132969.png",
      "Description": "The Avengers Quinjet City Chase",
      "Notes": "BI 3019/76+4*- 76032 V39 2/2",
      "DashedNumber": "76032-1"
    },
    {
      "ID": 163,
      "SetNumber": 76034,
      "URL": "https://www.lego.com/biassets/bi/6128698.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6128698.png",
      "Description": "The Batboat Harbor Pursuit",
      "Notes": "BI 3018/76+4-65+115G 76034 V29",
      "DashedNumber": "76034-1"
    },
    {
      "ID": 164,
      "SetNumber": 76034,
      "URL": "https://www.lego.com/biassets/bi/6128701.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6128701.png",
      "Description": "The Batboat Harbor Pursuit",
      "Notes": "BI 3018/76+4-65+115G 76034 V39",
      "DashedNumber": "76034-1"
    },
    {
      "ID": 165,
      "SetNumber": 76035,
      "URL": "https://www.lego.com/biassets/bi/6129039.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6129039.png",
      "Description": "Jokerland",
      "Notes": "BI 3019/228+4/65+200g - 76035 V39",
      "DashedNumber": "76035-1"
    },
    {
      "ID": 166,
      "SetNumber": 76035,
      "URL": "https://www.lego.com/biassets/bi/6129035.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6129035.png",
      "Description": "Jokerland",
      "Notes": "BI 3019/228+4/65+200g - 76035 V29",
      "DashedNumber": "76035-1"
    },
    {
      "ID": 167,
      "SetNumber": 76036,
      "URL": "https://www.lego.com/biassets/bi/6128702.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6128702.png",
      "Description": "Carnages SHIELD Sky Attack",
      "Notes": "BI 3003/36- 76036 V29",
      "DashedNumber": "76036-1"
    },
    {
      "ID": 168,
      "SetNumber": 76036,
      "URL": "https://www.lego.com/biassets/bi/6128703.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6128703.png",
      "Description": "Carnages SHIELD Sky Attack",
      "Notes": "BI 3003/36- 76036 V39",
      "DashedNumber": "76036-1"
    },
    {
      "ID": 169,
      "SetNumber": 76037,
      "URL": "https://www.lego.com/biassets/bi/6128708.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6128708.png",
      "Description": "Rhino and Sandman Super Villain Team-up",
      "Notes": "BI 3017 / 60 - 65g 76037 V39 1/2",
      "DashedNumber": "76037-1"
    },
    {
      "ID": 170,
      "SetNumber": 76037,
      "URL": "https://www.lego.com/biassets/bi/6128710.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6128710.png",
      "Description": "Rhino and Sandman Super Villain Team-up",
      "Notes": "BI 3017/60+4/65+115g 76037 V39 2/2",
      "DashedNumber": "76037-1"
    },
    {
      "ID": 171,
      "SetNumber": 76037,
      "URL": "https://www.lego.com/biassets/bi/6128707.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6128707.png",
      "Description": "Rhino and Sandman Super Villain Team-up",
      "Notes": "BI 3017 / 60 - 65g 76037 V29 1/2",
      "DashedNumber": "76037-1"
    },
    {
      "ID": 172,
      "SetNumber": 76037,
      "URL": "https://www.lego.com/biassets/bi/6128709.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6128709.png",
      "Description": "Rhino and Sandman Super Villain Team-up",
      "Notes": "BI 3017/60+4/65+115g 76037 V29 2/2",
      "DashedNumber": "76037-1"
    },
    {
      "ID": 173,
      "SetNumber": 76038,
      "URL": "https://www.lego.com/biassets/bi/6119062.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6119062.png",
      "Description": "Attack on Avengers Tower",
      "Notes": "BI 3016 60/65g-76038 V29 1/2",
      "DashedNumber": "76038-1"
    },
    {
      "ID": 174,
      "SetNumber": 76038,
      "URL": "https://www.lego.com/biassets/bi/6119063.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6119063.png",
      "Description": "Attack on Avengers Tower",
      "Notes": "BI 3016 60/65g-76038 V39 1/2",
      "DashedNumber": "76038-1"
    },
    {
      "ID": 175,
      "SetNumber": 76038,
      "URL": "https://www.lego.com/biassets/bi/6121862.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6121862.png",
      "Description": "Attack on Avengers Tower",
      "Notes": "BI 3016/64+4/65+115g 76038 V29 2/2",
      "DashedNumber": "76038-1"
    },
    {
      "ID": 176,
      "SetNumber": 76038,
      "URL": "https://www.lego.com/biassets/bi/6121865.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6121865.png",
      "Description": "Attack on Avengers Tower",
      "Notes": "BI 3016/64+4/65+115g 76038 V39 2/2",
      "DashedNumber": "76038-1"
    },
    {
      "ID": 177,
      "SetNumber": 76039,
      "URL": "https://www.lego.com/biassets/bi/6146849.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6146849.png",
      "Description": "Ant-Man Final Battle",
      "Notes": "BI 3004/60+4/65+115g 76039 V29",
      "DashedNumber": "76039-1"
    },
    {
      "ID": 178,
      "SetNumber": 76039,
      "URL": "https://www.lego.com/biassets/bi/6146850.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6146850.png",
      "Description": "Ant-Man Final Battle",
      "Notes": "BI 3004/60+4/65+115g 76039 V39",
      "DashedNumber": "76039-1"
    },
    {
      "ID": 179,
      "SetNumber": 76040,
      "URL": "https://www.lego.com/biassets/bi/6117288.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6117288.png",
      "Description": "Brainiac Attack",
      "Notes": "BI 3004/72+4*- 76040 V29",
      "DashedNumber": "76040-1"
    },
    {
      "ID": 180,
      "SetNumber": 76040,
      "URL": "https://www.lego.com/biassets/bi/6117291.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6117291.png",
      "Description": "Brainiac Attack",
      "Notes": "BI 3004/72+4*- 76040 V39",
      "DashedNumber": "76040-1"
    },
    {
      "ID": 181,
      "SetNumber": 76041,
      "URL": "https://www.lego.com/biassets/bi/6119295.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6119295.png",
      "Description": "The Hydra Fortress Smash",
      "Notes": "BI 3004 60/ 76041 V29 1/2",
      "DashedNumber": "76041-1"
    },
    {
      "ID": 182,
      "SetNumber": 76041,
      "URL": "https://www.lego.com/biassets/bi/6119296.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6119296.png",
      "Description": "The Hydra Fortress Smash",
      "Notes": "BI 3004 60/ 76041 V39 1/2",
      "DashedNumber": "76041-1"
    },
    {
      "ID": 183,
      "SetNumber": 76041,
      "URL": "https://www.lego.com/biassets/bi/6122063.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6122063.png",
      "Description": "The Hydra Fortress Smash",
      "Notes": "BI 3017 / 72+4 - 65/115g 76041 V29 2/2",
      "DashedNumber": "76041-1"
    },
    {
      "ID": 184,
      "SetNumber": 76041,
      "URL": "https://www.lego.com/biassets/bi/6122064.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6122064.png",
      "Description": "The Hydra Fortress Smash",
      "Notes": "BI 3017 / 72+4 - 65/115g 76041 V39 2/2",
      "DashedNumber": "76041-1"
    },
    {
      "ID": 185,
      "SetNumber": 76042,
      "URL": "https://www.lego.com/biassets/bi/6125434.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6125434.png",
      "Description": "The SHIELD Helicarrier",
      "Notes": "BI 3019/440+4/65+200g 76042 V29",
      "DashedNumber": "76042-1"
    },
    {
      "ID": 186,
      "SetNumber": 76042,
      "URL": "https://www.lego.com/biassets/bi/6125435.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6125435.png",
      "Description": "The SHIELD Helicarrier",
      "Notes": "BI 3019/440+4/65+200g 76042 V39",
      "DashedNumber": "76042-1"
    },
    {
      "ID": 187,
      "SetNumber": 76044,
      "URL": "https://www.lego.com/biassets/bi/6188241.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6188241.png",
      "Description": "Clash of the Heroes",
      "Notes": "BI 3003/36, 76044 V29",
      "DashedNumber": "76044-1"
    },
    {
      "ID": 188,
      "SetNumber": 76044,
      "URL": "https://www.lego.com/biassets/bi/6188242.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6188242.png",
      "Description": "Clash of the Heroes",
      "Notes": "BI 3003/36, 76044 V39",
      "DashedNumber": "76044-1"
    },
    {
      "ID": 189,
      "SetNumber": 76044,
      "URL": "https://www.lego.com/biassets/bi/6151209.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6151209.png",
      "Description": "Clash of the Heroes",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "76044-1"
    },
    {
      "ID": 190,
      "SetNumber": 76044,
      "URL": "https://www.lego.com/biassets/bi/6151211.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6151211.png",
      "Description": "Clash of the Heroes",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "76044-1"
    },
    {
      "ID": 191,
      "SetNumber": 76045,
      "URL": "https://www.lego.com/biassets/bi/6151215.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6151215.png",
      "Description": "Kryptonite Interception",
      "Notes": "BI 3004/24 - 76045 1/2 V29",
      "DashedNumber": "76045-1"
    },
    {
      "ID": 192,
      "SetNumber": 76045,
      "URL": "https://www.lego.com/biassets/bi/6151222.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6151222.png",
      "Description": "Kryptonite Interception",
      "Notes": "BI 3004/24 - 76045 1/2 V39",
      "DashedNumber": "76045-1"
    },
    {
      "ID": 193,
      "SetNumber": 76045,
      "URL": "https://www.lego.com/biassets/bi/6151264.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6151264.png",
      "Description": "Kryptonite Interception",
      "Notes": "BI 3004/72+4*, 76045 2/2 V29",
      "DashedNumber": "76045-1"
    },
    {
      "ID": 194,
      "SetNumber": 76045,
      "URL": "https://www.lego.com/biassets/bi/6151269.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6151269.png",
      "Description": "Kryptonite Interception",
      "Notes": "BI 3004/72+4*, 76045 2/2 V39",
      "DashedNumber": "76045-1"
    },
    {
      "ID": 195,
      "SetNumber": 76046,
      "URL": "https://www.lego.com/biassets/bi/6151286.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6151286.png",
      "Description": "Heroes of Justice: Sky High Battle",
      "Notes": "BI 3004/36, 76046 1/2 V29",
      "DashedNumber": "76046-1"
    },
    {
      "ID": 196,
      "SetNumber": 76046,
      "URL": "https://www.lego.com/biassets/bi/6151287.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6151287.png",
      "Description": "Heroes of Justice: Sky High Battle",
      "Notes": "BI 3004/36, 76046 1/2 V39",
      "DashedNumber": "76046-1"
    },
    {
      "ID": 197,
      "SetNumber": 76046,
      "URL": "https://www.lego.com/biassets/bi/6151288.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6151288.png",
      "Description": "Heroes of Justice: Sky High Battle",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "76046-1"
    },
    {
      "ID": 198,
      "SetNumber": 76046,
      "URL": "https://www.lego.com/biassets/bi/6151290.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6151290.png",
      "Description": "Heroes of Justice: Sky High Battle",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "76046-1"
    },
    {
      "ID": 199,
      "SetNumber": 76046,
      "URL": "https://www.lego.com/biassets/bi/6172407.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6172407.png",
      "Description": "Heroes of Justice: Sky High Battle",
      "Notes": "BI 3019/68+4*, 76046 2/2 V29",
      "DashedNumber": "76046-1"
    },
    {
      "ID": 200,
      "SetNumber": 76046,
      "URL": "https://www.lego.com/biassets/bi/6172409.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6172409.png",
      "Description": "Heroes of Justice: Sky High Battle",
      "Notes": "BI 3019/68+4*, 76046 2/2 V39",
      "DashedNumber": "76046-1"
    },
    {
      "ID": 201,
      "SetNumber": 76047,
      "URL": "https://www.lego.com/biassets/bi/6163700.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6163700.png",
      "Description": "Black Panther Pursuit",
      "Notes": "BI 3018 / 72+4 / 65+115g, 76047 V29",
      "DashedNumber": "76047-1"
    },
    {
      "ID": 202,
      "SetNumber": 76047,
      "URL": "https://www.lego.com/biassets/bi/6163701.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6163701.png",
      "Description": "Black Panther Pursuit",
      "Notes": "BI 3018 / 72+4 / 65+115g, 76047 V39",
      "DashedNumber": "76047-1"
    },
    {
      "ID": 203,
      "SetNumber": 76048,
      "URL": "https://www.lego.com/biassets/bi/6151313.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6151313.png",
      "Description": "Iron Skull Sub Attack",
      "Notes": "BI 3018, 36/65g, 76048 BOOK 1/2 V29",
      "DashedNumber": "76048-1"
    },
    {
      "ID": 204,
      "SetNumber": 76048,
      "URL": "https://www.lego.com/biassets/bi/6151314.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6151314.png",
      "Description": "Iron Skull Sub Attack",
      "Notes": "BI 3018, 36/65g, 76048 BOOK 1/2 V39",
      "DashedNumber": "76048-1"
    },
    {
      "ID": 205,
      "SetNumber": 76048,
      "URL": "https://www.lego.com/biassets/bi/6151315.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6151315.png",
      "Description": "Iron Skull Sub Attack",
      "Notes": "BI 3018/56/65g, 76048 BOOK 2/2 V29",
      "DashedNumber": "76048-1"
    },
    {
      "ID": 206,
      "SetNumber": 76048,
      "URL": "https://www.lego.com/biassets/bi/6151316.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6151316.png",
      "Description": "Iron Skull Sub Attack",
      "Notes": "BI 3018/56/65g, 76048 BOOK 2/2 V39",
      "DashedNumber": "76048-1"
    },
    {
      "ID": 207,
      "SetNumber": 76049,
      "URL": "https://www.lego.com/biassets/bi/6155140.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6155140.png",
      "Description": "Avenjet Space Mission",
      "Notes": "BI 3017 / 112+4 / 65+200g, 76049 V29",
      "DashedNumber": "76049-1"
    },
    {
      "ID": 208,
      "SetNumber": 76049,
      "URL": "https://www.lego.com/biassets/bi/6155141.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6155141.png",
      "Description": "Avenjet Space Mission",
      "Notes": "BI 3017 / 112+4 / 65+200g, 76049 V39",
      "DashedNumber": "76049-1"
    },
    {
      "ID": 209,
      "SetNumber": 76050,
      "URL": "https://www.lego.com/biassets/bi/6160337.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6160337.png",
      "Description": "Crossbones Hazard Heist",
      "Notes": "BI 3004 60/, 76050 V29",
      "DashedNumber": "76050-1"
    },
    {
      "ID": 210,
      "SetNumber": 76050,
      "URL": "https://www.lego.com/biassets/bi/6160338.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6160338.png",
      "Description": "Crossbones Hazard Heist",
      "Notes": "BI 3004 60/, 76050 V39",
      "DashedNumber": "76050-1"
    },
    {
      "ID": 211,
      "SetNumber": 76051,
      "URL": "https://www.lego.com/biassets/bi/6160347.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6160347.png",
      "Description": "Super Hero Airport Battle",
      "Notes": "BI 3017, 160+4/65+200g, 76051 V29",
      "DashedNumber": "76051-1"
    },
    {
      "ID": 212,
      "SetNumber": 76051,
      "URL": "https://www.lego.com/biassets/bi/6160350.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6160350.png",
      "Description": "Super Hero Airport Battle",
      "Notes": "BI 3017, 160+4/65+200g, 76051 V39",
      "DashedNumber": "76051-1"
    },
    {
      "ID": 213,
      "SetNumber": 76052,
      "URL": "https://www.lego.com/biassets/bi/6162280.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6162280.png",
      "Description": "Batman � Classic TV Series � Batcave",
      "Notes": "BI 3016, 300+4/65+200G, 76052 V29",
      "DashedNumber": "76052-1"
    },
    {
      "ID": 214,
      "SetNumber": 76052,
      "URL": "https://www.lego.com/biassets/bi/6162281.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6162281.png",
      "Description": "Batman � Classic TV Series � Batcave",
      "Notes": "BI 3016, 300+4/65+200G, 76052 V39",
      "DashedNumber": "76052-1"
    },
    {
      "ID": 215,
      "SetNumber": 76053,
      "URL": "https://www.lego.com/biassets/bi/6155072.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6155072.png",
      "Description": "Batman �: Gotham City Cycle Chase",
      "Notes": "BI 3003/32, 76053 1/2 V29",
      "DashedNumber": "76053-1"
    },
    {
      "ID": 216,
      "SetNumber": 76053,
      "URL": "https://www.lego.com/biassets/bi/6155073.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6155073.png",
      "Description": "Batman �: Gotham City Cycle Chase",
      "Notes": "BI 3003/32, 76053 1/2 V39",
      "DashedNumber": "76053-1"
    },
    {
      "ID": 217,
      "SetNumber": 76053,
      "URL": "https://www.lego.com/biassets/bi/6155074.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6155074.png",
      "Description": "Batman �: Gotham City Cycle Chase",
      "Notes": "BI 3003/48/65g, 76053 2/2 V29",
      "DashedNumber": "76053-1"
    },
    {
      "ID": 218,
      "SetNumber": 76053,
      "URL": "https://www.lego.com/biassets/bi/6155076.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6155076.png",
      "Description": "Batman �: Gotham City Cycle Chase",
      "Notes": "BI 3003/48/65g, 76053 2/2 V39",
      "DashedNumber": "76053-1"
    },
    {
      "ID": 219,
      "SetNumber": 76054,
      "URL": "https://www.lego.com/biassets/bi/6163798.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6163798.png",
      "Description": "Batman �: Scarecrow � Harvest of Fear",
      "Notes": "BI 3017/60-65G, 76054 2/2 V29",
      "DashedNumber": "76054-1"
    },
    {
      "ID": 220,
      "SetNumber": 76054,
      "URL": "https://www.lego.com/biassets/bi/6163793.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6163793.png",
      "Description": "Batman �: Scarecrow � Harvest of Fear",
      "Notes": "BI 3017/76+4-65/115G, 76054 1/2 V29",
      "DashedNumber": "76054-1"
    },
    {
      "ID": 221,
      "SetNumber": 76054,
      "URL": "https://www.lego.com/biassets/bi/6163800.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6163800.png",
      "Description": "Batman �: Killer Croc � Sewer Smash",
      "Notes": "INSPIRATIONAL MATERIAL, 76054/76055 V29",
      "DashedNumber": "76054-1"
    },
    {
      "ID": 222,
      "SetNumber": 76054,
      "URL": "https://www.lego.com/biassets/bi/6163799.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6163799.png",
      "Description": "Batman �: Scarecrow � Harvest of Fear",
      "Notes": "BI 3017/60-65G, 76054 2/2 V39",
      "DashedNumber": "76054-1"
    },
    {
      "ID": 223,
      "SetNumber": 76054,
      "URL": "https://www.lego.com/biassets/bi/6163796.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6163796.png",
      "Description": "Batman �: Scarecrow � Harvest of Fear",
      "Notes": "BI 3017/76+4-65/115G, 76054 1/2 V39",
      "DashedNumber": "76054-1"
    },
    {
      "ID": 224,
      "SetNumber": 76054,
      "URL": "https://www.lego.com/biassets/bi/6163803.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6163803.png",
      "Description": "Batman �: Killer Croc � Sewer Smash",
      "Notes": "INSPIRATIONAL MATERIAL, 76054/76055 V39",
      "DashedNumber": "76054-1"
    },
    {
      "ID": 225,
      "SetNumber": 76055,
      "URL": "https://www.lego.com/biassets/bi/6167271.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6167271.png",
      "Description": "Batman �: Killer Croc � Sewer Smash",
      "Notes": "BI 3004/56, 76055 1/2 V29",
      "DashedNumber": "76055-1"
    },
    {
      "ID": 226,
      "SetNumber": 76055,
      "URL": "https://www.lego.com/biassets/bi/6163812.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6163812.png",
      "Description": "Batman �: Killer Croc � Sewer Smash",
      "Notes": "BI 3019/80+4, 76055 2/2 V29",
      "DashedNumber": "76055-1"
    },
    {
      "ID": 227,
      "SetNumber": 76055,
      "URL": "https://www.lego.com/biassets/bi/6167273.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6167273.png",
      "Description": "Batman �: Killer Croc � Sewer Smash",
      "Notes": "BI 3004/56, 76055 1/2 V39",
      "DashedNumber": "76055-1"
    },
    {
      "ID": 228,
      "SetNumber": 76055,
      "URL": "https://www.lego.com/biassets/bi/6163816.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6163816.png",
      "Description": "Batman �: Killer Croc � Sewer Smash",
      "Notes": "BI 3019/80+4, 76055 2/2 V39",
      "DashedNumber": "76055-1"
    },
    {
      "ID": 229,
      "SetNumber": 76056,
      "URL": "https://www.lego.com/biassets/bi/6163818.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6163818.png",
      "Description": "Batman �: Rescue from Ras al Ghul �",
      "Notes": "BI 3004/40, 76056 1/2 V29",
      "DashedNumber": "76056-1"
    },
    {
      "ID": 230,
      "SetNumber": 76056,
      "URL": "https://www.lego.com/biassets/bi/6163831.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6163831.png",
      "Description": "Batman �: Rescue from Ras al Ghul �",
      "Notes": "BI 3004/60+4/65+115G, 76056 2/2 V29",
      "DashedNumber": "76056-1"
    },
    {
      "ID": 231,
      "SetNumber": 76056,
      "URL": "https://www.lego.com/biassets/bi/6163820.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6163820.png",
      "Description": "Batman �: Rescue from Ras al Ghul �",
      "Notes": "BI 3004/40, 76056 1/2 V39",
      "DashedNumber": "76056-1"
    },
    {
      "ID": 232,
      "SetNumber": 76056,
      "URL": "https://www.lego.com/biassets/bi/6163832.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6163832.png",
      "Description": "Batman �: Rescue from Ras al Ghul �",
      "Notes": "BI 3004/60+4/65+115G, 76056 2/2 V39",
      "DashedNumber": "76056-1"
    },
    {
      "ID": 233,
      "SetNumber": 76057,
      "URL": "https://www.lego.com/biassets/bi/6167276.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6167276.png",
      "Description": "Spider-Man: Web Warriors Ultimate Bridge",
      "Notes": "BI 3019/168+4/65+200G, 76057 V29",
      "DashedNumber": "76057-1"
    },
    {
      "ID": 234,
      "SetNumber": 76057,
      "URL": "https://www.lego.com/biassets/bi/6163835.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6163835.png",
      "Description": "Spider-Man: Doc Ocks Tentacle Trap",
      "Notes": "INSP. MATERIAL,76057/76058/76059 V29",
      "DashedNumber": "76057-1"
    },
    {
      "ID": 235,
      "SetNumber": 76057,
      "URL": "https://www.lego.com/biassets/bi/6167277.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6167277.png",
      "Description": "Spider-Man: Web Warriors Ultimate Bridge",
      "Notes": "BI 3019/168+4/65+200G, 76057 V39",
      "DashedNumber": "76057-1"
    },
    {
      "ID": 236,
      "SetNumber": 76057,
      "URL": "https://www.lego.com/biassets/bi/6163836.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6163836.png",
      "Description": "Spider-Man: Doc Ocks Tentacle Trap",
      "Notes": "INSP. MATERIAL,76057/76058/76059 V39",
      "DashedNumber": "76057-1"
    },
    {
      "ID": 237,
      "SetNumber": 76058,
      "URL": "https://www.lego.com/biassets/bi/6163839.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6163839.png",
      "Description": "Spider-Man: Ghost Rider Team-up",
      "Notes": "BI 3004/60+4/65+115G, 76058 V29",
      "DashedNumber": "76058-1"
    },
    {
      "ID": 238,
      "SetNumber": 76058,
      "URL": "https://www.lego.com/biassets/bi/6163840.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6163840.png",
      "Description": "Spider-Man: Ghost Rider Team-up",
      "Notes": "BI 3004/60+4/65+115G, 76058 V39",
      "DashedNumber": "76058-1"
    },
    {
      "ID": 239,
      "SetNumber": 76059,
      "URL": "https://www.lego.com/biassets/bi/6173884.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6173884.png",
      "Description": "Spider-Man: Doc Ocks Tentacle Trap",
      "Notes": "BI 3017 / 68+4 - 65/115g, 76059 V29",
      "DashedNumber": "76059-1"
    },
    {
      "ID": 240,
      "SetNumber": 76059,
      "URL": "https://www.lego.com/biassets/bi/6173885.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6173885.png",
      "Description": "Spider-Man: Doc Ocks Tentacle Trap",
      "Notes": "BI 3017 / 68+4 - 65/115g, 76059 V39",
      "DashedNumber": "76059-1"
    },
    {
      "ID": 241,
      "SetNumber": 76060,
      "URL": "https://www.lego.com/biassets/bi/6168655.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6168655.png",
      "Description": "Doctor Stranges Sanctum Sanctorum",
      "Notes": "BI 3018 / 72+4 / 65+115g, 76060 1/2 V29",
      "DashedNumber": "76060-1"
    },
    {
      "ID": 242,
      "SetNumber": 76060,
      "URL": "https://www.lego.com/biassets/bi/6172581.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6172581.png",
      "Description": "Doctor Stranges Sanctum Sanctorum",
      "Notes": "BI 3018, 36/65G, 76060 2/2 V39",
      "DashedNumber": "76060-1"
    },
    {
      "ID": 243,
      "SetNumber": 76060,
      "URL": "https://www.lego.com/biassets/bi/6172579.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6172579.png",
      "Description": "Doctor Stranges Sanctum Sanctorum",
      "Notes": "BI 3018, 36/65G, 76060 2/2, V29",
      "DashedNumber": "76060-1"
    },
    {
      "ID": 244,
      "SetNumber": 76060,
      "URL": "https://www.lego.com/biassets/bi/6168656.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6168656.png",
      "Description": "Doctor Stranges Sanctum Sanctorum",
      "Notes": "BI 3018/72+4/65+115G, 76060 1/2 V39",
      "DashedNumber": "76060-1"
    },
    {
      "ID": 245,
      "SetNumber": 76061,
      "URL": "https://www.lego.com/biassets/bi/6154142.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6154142.png",
      "Description": "Mighty Micros: Batman � vs. Catwoman �",
      "Notes": "BI 2002/ 2, 76061 1/3 V29",
      "DashedNumber": "76061-1"
    },
    {
      "ID": 246,
      "SetNumber": 76061,
      "URL": "https://www.lego.com/biassets/bi/6154143.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6154143.png",
      "Description": "Mighty Micros: Batman � vs. Catwoman �",
      "Notes": "BI 2002/ 2, 76061 1/3 V39",
      "DashedNumber": "76061-1"
    },
    {
      "ID": 247,
      "SetNumber": 76061,
      "URL": "https://www.lego.com/biassets/bi/6154145.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6154145.png",
      "Description": "Mighty Micros: Batman � vs. Catwoman �",
      "Notes": "BI 2002/ 2, 76061 2/3 V29",
      "DashedNumber": "76061-1"
    },
    {
      "ID": 248,
      "SetNumber": 76061,
      "URL": "https://www.lego.com/biassets/bi/6154148.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6154148.png",
      "Description": "Mighty Micros: Batman � vs. Catwoman �",
      "Notes": "BI 2002/ 2, 76061 2/3 V39",
      "DashedNumber": "76061-1"
    },
    {
      "ID": 249,
      "SetNumber": 76061,
      "URL": "https://www.lego.com/biassets/bi/6154149.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6154149.png",
      "Description": "Mighty Micros: Batman � vs. Catwoman �",
      "Notes": "BI 2002/ 2, 76061 3/3 V29",
      "DashedNumber": "76061-1"
    },
    {
      "ID": 250,
      "SetNumber": 76061,
      "URL": "https://www.lego.com/biassets/bi/6154150.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6154150.png",
      "Description": "Mighty Micros: Batman � vs. Catwoman �",
      "Notes": "BI 2002/ 2, 76061 3/3 V39",
      "DashedNumber": "76061-1"
    },
    {
      "ID": 251,
      "SetNumber": 76062,
      "URL": "https://www.lego.com/biassets/bi/6154156.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6154156.png",
      "Description": "Mighty Micros: Robin � vs. Bane �",
      "Notes": "BI 2002/ 2, 76062 1/3 V29",
      "DashedNumber": "76062-1"
    },
    {
      "ID": 252,
      "SetNumber": 76062,
      "URL": "https://www.lego.com/biassets/bi/6154159.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6154159.png",
      "Description": "Mighty Micros: Robin � vs. Bane �",
      "Notes": "BI 2002/ 2, 76062 1/3 V39",
      "DashedNumber": "76062-1"
    },
    {
      "ID": 253,
      "SetNumber": 76062,
      "URL": "https://www.lego.com/biassets/bi/6154170.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6154170.png",
      "Description": "Mighty Micros: Robin � vs. Bane �",
      "Notes": "BI 2002/ 2, 76062 2/3 V29",
      "DashedNumber": "76062-1"
    },
    {
      "ID": 254,
      "SetNumber": 76062,
      "URL": "https://www.lego.com/biassets/bi/6154172.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6154172.png",
      "Description": "Mighty Micros: Robin � vs. Bane �",
      "Notes": "BI 2002/ 2, 76062 2/3 V39",
      "DashedNumber": "76062-1"
    },
    {
      "ID": 255,
      "SetNumber": 76062,
      "URL": "https://www.lego.com/biassets/bi/6154174.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6154174.png",
      "Description": "Mighty Micros: Robin � vs. Bane �",
      "Notes": "BI 2002/ 2, 76062 3/3 V29",
      "DashedNumber": "76062-1"
    },
    {
      "ID": 256,
      "SetNumber": 76062,
      "URL": "https://www.lego.com/biassets/bi/6154175.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6154175.png",
      "Description": "Mighty Micros: Robin � vs. Bane �",
      "Notes": "BI 2002/ 2, 76062 3/3 V39",
      "DashedNumber": "76062-1"
    },
    {
      "ID": 257,
      "SetNumber": 76063,
      "URL": "https://www.lego.com/biassets/bi/6154178.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6154178.png",
      "Description": "Mighty Micros: The Flash � vs. Captain Co",
      "Notes": "BI 2002/ 2, 76063 1/3 V29",
      "DashedNumber": "76063-1"
    },
    {
      "ID": 258,
      "SetNumber": 76063,
      "URL": "https://www.lego.com/biassets/bi/6154185.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6154185.png",
      "Description": "Mighty Micros: The Flash � vs. Captain Co",
      "Notes": "BI 2002/ 2, 76063 1/3 V39",
      "DashedNumber": "76063-1"
    },
    {
      "ID": 259,
      "SetNumber": 76063,
      "URL": "https://www.lego.com/biassets/bi/6154188.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6154188.png",
      "Description": "Mighty Micros: The Flash � vs. Captain Co",
      "Notes": "BI 2002/ 2, 76063 2/3 V29",
      "DashedNumber": "76063-1"
    },
    {
      "ID": 260,
      "SetNumber": 76063,
      "URL": "https://www.lego.com/biassets/bi/6154189.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6154189.png",
      "Description": "Mighty Micros: The Flash � vs. Captain Co",
      "Notes": "BI 2002/ 2, 76063 2/3 V39",
      "DashedNumber": "76063-1"
    },
    {
      "ID": 261,
      "SetNumber": 76063,
      "URL": "https://www.lego.com/biassets/bi/6154191.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6154191.png",
      "Description": "Mighty Micros: The Flash � vs. Captain Co",
      "Notes": "BI 2002/ 2, 76063 3/3 V29",
      "DashedNumber": "76063-1"
    },
    {
      "ID": 262,
      "SetNumber": 76063,
      "URL": "https://www.lego.com/biassets/bi/6154239.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6154239.png",
      "Description": "Mighty Micros: The Flash � vs. Captain Co",
      "Notes": "BI 2002/ 2, 76063 3/3 V39",
      "DashedNumber": "76063-1"
    },
    {
      "ID": 263,
      "SetNumber": 76064,
      "URL": "https://www.lego.com/biassets/bi/6154201.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6154201.png",
      "Description": "Mighty Micros: Spider-Man vs. Green Gobl",
      "Notes": "BI 2002/ 2, 76064 1/3 V29",
      "DashedNumber": "76064-1"
    },
    {
      "ID": 264,
      "SetNumber": 76064,
      "URL": "https://www.lego.com/biassets/bi/6154203.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6154203.png",
      "Description": "Mighty Micros: Spider-Man vs. Green Gobl",
      "Notes": "BI 2002/ 2, 76064 1/3 V39",
      "DashedNumber": "76064-1"
    },
    {
      "ID": 265,
      "SetNumber": 76064,
      "URL": "https://www.lego.com/biassets/bi/6154204.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6154204.png",
      "Description": "Mighty Micros: Spider-Man vs. Green Gobl",
      "Notes": "BI 2002/ 2, 76064 2/3 V29",
      "DashedNumber": "76064-1"
    },
    {
      "ID": 266,
      "SetNumber": 76064,
      "URL": "https://www.lego.com/biassets/bi/6154207.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6154207.png",
      "Description": "Mighty Micros: Spider-Man vs. Green Gobl",
      "Notes": "BI 2002/ 2, 76064 2/3 V39",
      "DashedNumber": "76064-1"
    },
    {
      "ID": 267,
      "SetNumber": 76064,
      "URL": "https://www.lego.com/biassets/bi/6154208.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6154208.png",
      "Description": "Mighty Micros: Spider-Man vs. Green Gobl",
      "Notes": "BI 2002/ 2, 76064 3/3 V29",
      "DashedNumber": "76064-1"
    },
    {
      "ID": 268,
      "SetNumber": 76064,
      "URL": "https://www.lego.com/biassets/bi/6154210.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6154210.png",
      "Description": "Mighty Micros: Spider-Man vs. Green Gobl",
      "Notes": "BI 2002/ 2, 76064 3/3 V39",
      "DashedNumber": "76064-1"
    },
    {
      "ID": 269,
      "SetNumber": 76065,
      "URL": "https://www.lego.com/biassets/bi/6154212.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6154212.png",
      "Description": "Mighty Micros: Captain America vs. Red S",
      "Notes": "BI 2002/ 2, 76065 1/3 V29",
      "DashedNumber": "76065-1"
    },
    {
      "ID": 270,
      "SetNumber": 76065,
      "URL": "https://www.lego.com/biassets/bi/6154213.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6154213.png",
      "Description": "Mighty Micros: Captain America vs. Red S",
      "Notes": "BI 2002/ 2, 76065 1/3 V39",
      "DashedNumber": "76065-1"
    },
    {
      "ID": 271,
      "SetNumber": 76065,
      "URL": "https://www.lego.com/biassets/bi/6154215.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6154215.png",
      "Description": "Mighty Micros: Captain America vs. Red S",
      "Notes": "BI 2002/ 2, 76065 2/3 V29",
      "DashedNumber": "76065-1"
    },
    {
      "ID": 272,
      "SetNumber": 76065,
      "URL": "https://www.lego.com/biassets/bi/6154216.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6154216.png",
      "Description": "Mighty Micros: Captain America vs. Red S",
      "Notes": "BI 2002/ 2, 76065 2/3 V39",
      "DashedNumber": "76065-1"
    },
    {
      "ID": 273,
      "SetNumber": 76065,
      "URL": "https://www.lego.com/biassets/bi/6154217.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6154217.png",
      "Description": "Mighty Micros: Captain America vs. Red S",
      "Notes": "BI 2002/ 2, 76065 3/3 V29",
      "DashedNumber": "76065-1"
    },
    {
      "ID": 274,
      "SetNumber": 76065,
      "URL": "https://www.lego.com/biassets/bi/6154218.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6154218.png",
      "Description": "Mighty Micros: Captain America vs. Red S",
      "Notes": "BI 2002/ 2, 76065 3/3 V39",
      "DashedNumber": "76065-1"
    },
    {
      "ID": 275,
      "SetNumber": 76066,
      "URL": "https://www.lego.com/biassets/bi/6154219.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6154219.png",
      "Description": "Mighty Micros: Hulk vs. Ultron",
      "Notes": "BI 2002/ 2, 76066 1/3 V29",
      "DashedNumber": "76066-1"
    },
    {
      "ID": 276,
      "SetNumber": 76066,
      "URL": "https://www.lego.com/biassets/bi/6154220.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6154220.png",
      "Description": "Mighty Micros: Hulk vs. Ultron",
      "Notes": "BI 2002/ 2, 76066 1/3 V39",
      "DashedNumber": "76066-1"
    },
    {
      "ID": 277,
      "SetNumber": 76066,
      "URL": "https://www.lego.com/biassets/bi/6154222.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6154222.png",
      "Description": "Mighty Micros: Hulk vs. Ultron",
      "Notes": "BI 2002/ 2, 76066 2/3 V29",
      "DashedNumber": "76066-1"
    },
    {
      "ID": 278,
      "SetNumber": 76066,
      "URL": "https://www.lego.com/biassets/bi/6154223.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6154223.png",
      "Description": "Mighty Micros: Hulk vs. Ultron",
      "Notes": "BI 2002/ 2, 76066 2/3 V39",
      "DashedNumber": "76066-1"
    },
    {
      "ID": 279,
      "SetNumber": 76066,
      "URL": "https://www.lego.com/biassets/bi/6154224.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6154224.png",
      "Description": "Mighty Micros: Hulk vs. Ultron",
      "Notes": "BI 2002/ 2, 76066 3/3 V29",
      "DashedNumber": "76066-1"
    },
    {
      "ID": 280,
      "SetNumber": 76066,
      "URL": "https://www.lego.com/biassets/bi/6154225.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6154225.png",
      "Description": "Mighty Micros: Hulk vs. Ultron",
      "Notes": "BI 2002/ 2, 76066 3/3 V39",
      "DashedNumber": "76066-1"
    },
    {
      "ID": 281,
      "SetNumber": 76067,
      "URL": "https://www.lego.com/biassets/bi/6172583.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6172583.png",
      "Description": "Tanker Truck Takedown",
      "Notes": "BI 3004 60, 76067 1/2 V29",
      "DashedNumber": "76067-1"
    },
    {
      "ID": 282,
      "SetNumber": 76067,
      "URL": "https://www.lego.com/biassets/bi/6172584.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6172584.png",
      "Description": "Tanker Truck Takedown",
      "Notes": "BI 3004 60, 76067 1/2 V39",
      "DashedNumber": "76067-1"
    },
    {
      "ID": 283,
      "SetNumber": 76067,
      "URL": "https://www.lego.com/biassets/bi/6167955.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6167955.png",
      "Description": "Tanker Truck Takedown",
      "Notes": "BI 3004/44, 76067 2/2 V29",
      "DashedNumber": "76067-1"
    },
    {
      "ID": 284,
      "SetNumber": 76067,
      "URL": "https://www.lego.com/biassets/bi/6167959.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6167959.png",
      "Description": "Tanker Truck Takedown",
      "Notes": "BI 3004/44, 76067 2/2 V39",
      "DashedNumber": "76067-1"
    },
    {
      "ID": 285,
      "SetNumber": 76068,
      "URL": "https://www.lego.com/biassets/bi/6187416.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6187416.png",
      "Description": "Mighty Micros: Superman � vs. Bizarro �",
      "Notes": "BI 2002/ 2, 76068 1/3 V29",
      "DashedNumber": "76068-1"
    },
    {
      "ID": 286,
      "SetNumber": 76068,
      "URL": "https://www.lego.com/biassets/bi/6187420.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6187420.png",
      "Description": "Mighty Micros: Superman � vs. Bizarro �",
      "Notes": "BI 2002/ 2, 76068 1/3 V39",
      "DashedNumber": "76068-1"
    },
    {
      "ID": 287,
      "SetNumber": 76068,
      "URL": "https://www.lego.com/biassets/bi/6187423.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6187423.png",
      "Description": "Mighty Micros: Superman � vs. Bizarro �",
      "Notes": "BI 2002/ 2, 76068 2/3 V29",
      "DashedNumber": "76068-1"
    },
    {
      "ID": 288,
      "SetNumber": 76068,
      "URL": "https://www.lego.com/biassets/bi/6187426.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6187426.png",
      "Description": "Mighty Micros: Superman � vs. Bizarro �",
      "Notes": "BI 2002/ 2, 76068 3/3 V29",
      "DashedNumber": "76068-1"
    },
    {
      "ID": 289,
      "SetNumber": 76068,
      "URL": "https://www.lego.com/biassets/bi/6187428.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6187428.png",
      "Description": "Mighty Micros: Superman � vs. Bizarro �",
      "Notes": "BI 2002/ 2, 76068 3/3 V39",
      "DashedNumber": "76068-1"
    },
    {
      "ID": 290,
      "SetNumber": 76068,
      "URL": "https://www.lego.com/biassets/bi/6187432.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6187432.png",
      "Description": "Mighty Micros: Superman � vs. Bizarro �",
      "Notes": "BI 2002/ 2, 76068 2/3 V39",
      "DashedNumber": "76068-1"
    },
    {
      "ID": 291,
      "SetNumber": 76069,
      "URL": "https://www.lego.com/biassets/bi/6187690.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6187690.png",
      "Description": "Mighty Micros: Batman � vs. Killer Moth �",
      "Notes": "BI 2002/ 2, 76069 1/3 V29",
      "DashedNumber": "76069-1"
    },
    {
      "ID": 292,
      "SetNumber": 76069,
      "URL": "https://www.lego.com/biassets/bi/6187697.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6187697.png",
      "Description": "Mighty Micros: Batman � vs. Killer Moth �",
      "Notes": "BI 2002/ 2, 76069 2/3 V29",
      "DashedNumber": "76069-1"
    },
    {
      "ID": 293,
      "SetNumber": 76069,
      "URL": "https://www.lego.com/biassets/bi/6187702.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6187702.png",
      "Description": "Mighty Micros: Batman � vs. Killer Moth �",
      "Notes": "BI 2002/ 2, 76069 3/3 V29",
      "DashedNumber": "76069-1"
    },
    {
      "ID": 294,
      "SetNumber": 76069,
      "URL": "https://www.lego.com/biassets/bi/6187704.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6187704.png",
      "Description": "Mighty Micros: Batman � vs. Killer Moth �",
      "Notes": "BI 2002/ 2, 76069 1/3 V39",
      "DashedNumber": "76069-1"
    },
    {
      "ID": 295,
      "SetNumber": 76069,
      "URL": "https://www.lego.com/biassets/bi/6187705.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6187705.png",
      "Description": "Mighty Micros: Batman � vs. Killer Moth �",
      "Notes": "BI 2002/ 2, 76069 2/3 V39",
      "DashedNumber": "76069-1"
    },
    {
      "ID": 296,
      "SetNumber": 76069,
      "URL": "https://www.lego.com/biassets/bi/6187715.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6187715.png",
      "Description": "Mighty Micros: Batman � vs. Killer Moth �",
      "Notes": "BI 2002/ 2, 76069 3/3 V39",
      "DashedNumber": "76069-1"
    },
    {
      "ID": 297,
      "SetNumber": 76070,
      "URL": "https://www.lego.com/biassets/bi/6187729.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6187729.png",
      "Description": "Mighty Micros: Wonder Woman � vs. Doomsda",
      "Notes": "BI 2002/ 2, 76070 3/3 V39",
      "DashedNumber": "76070-1"
    },
    {
      "ID": 298,
      "SetNumber": 76070,
      "URL": "https://www.lego.com/biassets/bi/6187718.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6187718.png",
      "Description": "Mighty Micros: Wonder Woman � vs. Doomsda",
      "Notes": "BI 2002/ 2, 76070 1/3 V29",
      "DashedNumber": "76070-1"
    },
    {
      "ID": 299,
      "SetNumber": 76070,
      "URL": "https://www.lego.com/biassets/bi/6187722.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6187722.png",
      "Description": "Mighty Micros: Wonder Woman � vs. Doomsda",
      "Notes": "BI 2002/ 2, 76070 2/3 V29",
      "DashedNumber": "76070-1"
    },
    {
      "ID": 300,
      "SetNumber": 76070,
      "URL": "https://www.lego.com/biassets/bi/6187724.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6187724.png",
      "Description": "Mighty Micros: Wonder Woman � vs. Doomsda",
      "Notes": "BI 2002/ 2, 76070 3/3 V29",
      "DashedNumber": "76070-1"
    },
    {
      "ID": 301,
      "SetNumber": 76070,
      "URL": "https://www.lego.com/biassets/bi/6187725.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6187725.png",
      "Description": "Mighty Micros: Wonder Woman � vs. Doomsda",
      "Notes": "BI 2002/ 2, 76070 1/3 V39",
      "DashedNumber": "76070-1"
    },
    {
      "ID": 302,
      "SetNumber": 76070,
      "URL": "https://www.lego.com/biassets/bi/6187726.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6187726.png",
      "Description": "Mighty Micros: Wonder Woman � vs. Doomsda",
      "Notes": "BI 2002/ 2, 76070 2/3 V39",
      "DashedNumber": "76070-1"
    },
    {
      "ID": 303,
      "SetNumber": 76071,
      "URL": "https://www.lego.com/biassets/bi/6187732.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6187732.png",
      "Description": "Mighty Micros: Spider-Man vs. Scorpion",
      "Notes": "BI 2002/ 2, 76071 1/3 V29",
      "DashedNumber": "76071-1"
    },
    {
      "ID": 304,
      "SetNumber": 76071,
      "URL": "https://www.lego.com/biassets/bi/6187796.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6187796.png",
      "Description": "Mighty Micros: Spider-Man vs. Scorpion",
      "Notes": "BI 2002/ 2, 76071 2/3 V29",
      "DashedNumber": "76071-1"
    },
    {
      "ID": 305,
      "SetNumber": 76071,
      "URL": "https://www.lego.com/biassets/bi/6187959.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6187959.png",
      "Description": "Mighty Micros: Spider-Man vs. Scorpion",
      "Notes": "BI 2002/ 2, 76071 3/3 V29",
      "DashedNumber": "76071-1"
    },
    {
      "ID": 306,
      "SetNumber": 76071,
      "URL": "https://www.lego.com/biassets/bi/6188046.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6188046.png",
      "Description": "Mighty Micros: Spider-Man vs. Scorpion",
      "Notes": "BI 2002/ 2, 76071 1/3 V39",
      "DashedNumber": "76071-1"
    },
    {
      "ID": 307,
      "SetNumber": 76071,
      "URL": "https://www.lego.com/biassets/bi/6188047.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6188047.png",
      "Description": "Mighty Micros: Spider-Man vs. Scorpion",
      "Notes": "BI 2002/ 2, 76071 2/3 V39",
      "DashedNumber": "76071-1"
    },
    {
      "ID": 308,
      "SetNumber": 76071,
      "URL": "https://www.lego.com/biassets/bi/6188049.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6188049.png",
      "Description": "Mighty Micros: Spider-Man vs. Scorpion",
      "Notes": "BI 2002/ 2, 76071 3/3 V39",
      "DashedNumber": "76071-1"
    },
    {
      "ID": 309,
      "SetNumber": 76072,
      "URL": "https://www.lego.com/biassets/bi/6188051.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6188051.png",
      "Description": "Mighty Micros: Iron Man vs. Thanos",
      "Notes": "BI 2002/ 2, 76072 1/3 V29",
      "DashedNumber": "76072-1"
    },
    {
      "ID": 310,
      "SetNumber": 76072,
      "URL": "https://www.lego.com/biassets/bi/6188053.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6188053.png",
      "Description": "Mighty Micros: Iron Man vs. Thanos",
      "Notes": "BI 2002/ 2, 76072 2/3 V29",
      "DashedNumber": "76072-1"
    },
    {
      "ID": 311,
      "SetNumber": 76072,
      "URL": "https://www.lego.com/biassets/bi/6188054.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6188054.png",
      "Description": "Mighty Micros: Iron Man vs. Thanos",
      "Notes": "BI 2002/ 2, 76072 3/3 V29",
      "DashedNumber": "76072-1"
    },
    {
      "ID": 312,
      "SetNumber": 76072,
      "URL": "https://www.lego.com/biassets/bi/6188056.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6188056.png",
      "Description": "Mighty Micros: Iron Man vs. Thanos",
      "Notes": "BI 2002/ 2, 76072 1/3 V39",
      "DashedNumber": "76072-1"
    },
    {
      "ID": 313,
      "SetNumber": 76072,
      "URL": "https://www.lego.com/biassets/bi/6188058.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6188058.png",
      "Description": "Mighty Micros: Iron Man vs. Thanos",
      "Notes": "BI 2002/ 2, 76072 2/3 V39",
      "DashedNumber": "76072-1"
    },
    {
      "ID": 314,
      "SetNumber": 76072,
      "URL": "https://www.lego.com/biassets/bi/6188060.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6188060.png",
      "Description": "Mighty Micros: Iron Man vs. Thanos",
      "Notes": "BI 2002/ 2, 76072 3/3 V39",
      "DashedNumber": "76072-1"
    },
    {
      "ID": 315,
      "SetNumber": 76073,
      "URL": "https://www.lego.com/biassets/bi/6188062.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6188062.png",
      "Description": "Mighty Micros: Wolverine vs. Magneto",
      "Notes": "BI 2002/ 2, 76073 1/3 V29",
      "DashedNumber": "76073-1"
    },
    {
      "ID": 316,
      "SetNumber": 76073,
      "URL": "https://www.lego.com/biassets/bi/6188065.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6188065.png",
      "Description": "Mighty Micros: Wolverine vs. Magneto",
      "Notes": "BI 2002/ 2, 76073 2/3 V29",
      "DashedNumber": "76073-1"
    },
    {
      "ID": 317,
      "SetNumber": 76073,
      "URL": "https://www.lego.com/biassets/bi/6188067.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6188067.png",
      "Description": "Mighty Micros: Wolverine vs. Magneto",
      "Notes": "BI 2002/ 2, 76073 3/3 V29",
      "DashedNumber": "76073-1"
    },
    {
      "ID": 318,
      "SetNumber": 76073,
      "URL": "https://www.lego.com/biassets/bi/6188073.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6188073.png",
      "Description": "Mighty Micros: Wolverine vs. Magneto",
      "Notes": "BI 2002/ 2, 76073 1/3 V39",
      "DashedNumber": "76073-1"
    },
    {
      "ID": 319,
      "SetNumber": 76073,
      "URL": "https://www.lego.com/biassets/bi/6188077.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6188077.png",
      "Description": "Mighty Micros: Wolverine vs. Magneto",
      "Notes": "BI 2002/ 2, 76073 2/3 V39",
      "DashedNumber": "76073-1"
    },
    {
      "ID": 320,
      "SetNumber": 76073,
      "URL": "https://www.lego.com/biassets/bi/6188080.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6188080.png",
      "Description": "Mighty Micros: Wolverine vs. Magneto",
      "Notes": "BI 2002/ 2, 76073 3/3 V39",
      "DashedNumber": "76073-1"
    },
    {
      "ID": 321,
      "SetNumber": 76075,
      "URL": "https://www.lego.com/biassets/bi/6200557.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6200557.png",
      "Description": "Wonder Woman � Warrior Battle",
      "Notes": "BI 3002/56/65G, 76075 1/2 V29",
      "DashedNumber": "76075-1"
    },
    {
      "ID": 322,
      "SetNumber": 76075,
      "URL": "https://www.lego.com/biassets/bi/6200573.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6200573.png",
      "Description": "Wonder Woman � Warrior Battle",
      "Notes": "BI 3002/56/65G, 76075 1/2 V39",
      "DashedNumber": "76075-1"
    },
    {
      "ID": 323,
      "SetNumber": 76075,
      "URL": "https://www.lego.com/biassets/bi/6200575.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6200575.png",
      "Description": "Wonder Woman � Warrior Battle",
      "Notes": "BI 3017 / 36 - 65g, 76075 2/2 V29",
      "DashedNumber": "76075-1"
    },
    {
      "ID": 324,
      "SetNumber": 76075,
      "URL": "https://www.lego.com/biassets/bi/6200576.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6200576.png",
      "Description": "Wonder Woman � Warrior Battle",
      "Notes": "BI 3017/36, 65G, 76075 2/2 V39",
      "DashedNumber": "76075-1"
    },
    {
      "ID": 325,
      "SetNumber": 76076,
      "URL": "https://www.lego.com/biassets/bi/6188130.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6188130.png",
      "Description": "Hulk vs. Red Hulk",
      "Notes": "INSP. MATERIAL,76076/76077/76078 V39",
      "DashedNumber": "76076-1"
    },
    {
      "ID": 326,
      "SetNumber": 76076,
      "URL": "https://www.lego.com/biassets/bi/6188151.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6188151.png",
      "Description": "Captain America Jet Pursuit",
      "Notes": "BI 3018/60-65G, 76076 1/1 V39",
      "DashedNumber": "76076-1"
    },
    {
      "ID": 327,
      "SetNumber": 76076,
      "URL": "https://www.lego.com/biassets/bi/6205688.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6205688.png",
      "Description": "Captain America Jet Pursuit",
      "Notes": "BI 3018/60-65G, 76076 1/1 V29",
      "DashedNumber": "76076-1"
    },
    {
      "ID": 328,
      "SetNumber": 76076,
      "URL": "https://www.lego.com/biassets/bi/6188123.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6188123.png",
      "Description": "Hulk vs. Red Hulk",
      "Notes": "INSP. MATERIAL,76076/76077/76078 V29",
      "DashedNumber": "76076-1"
    },
    {
      "ID": 329,
      "SetNumber": 76076,
      "URL": "https://www.lego.com/biassets/bi/6188134.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6188134.png",
      "Description": "Captain America Jet Pursuit",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "76076-1"
    },
    {
      "ID": 330,
      "SetNumber": 76077,
      "URL": "https://www.lego.com/biassets/bi/6188175.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6188175.png",
      "Description": "Iron Man: Detroit Steel Strikes",
      "Notes": "BI 3004 60, 76077 1/2 V29",
      "DashedNumber": "76077-1"
    },
    {
      "ID": 331,
      "SetNumber": 76077,
      "URL": "https://www.lego.com/biassets/bi/6188357.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6188357.png",
      "Description": "Iron Man: Detroit Steel Strikes",
      "Notes": "BI 3002, 64+4/65+115G, 76077 2/2 V29",
      "DashedNumber": "76077-1"
    },
    {
      "ID": 332,
      "SetNumber": 76077,
      "URL": "https://www.lego.com/biassets/bi/6188176.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6188176.png",
      "Description": "Iron Man: Detroit Steel Strikes",
      "Notes": "BI 3004 60, 76077 1/2 V39",
      "DashedNumber": "76077-1"
    },
    {
      "ID": 333,
      "SetNumber": 76077,
      "URL": "https://www.lego.com/biassets/bi/6188361.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6188361.png",
      "Description": "Iron Man: Detroit Steel Strikes",
      "Notes": "BI 3002, 64+4/65+115G, 76077 2/2 V39",
      "DashedNumber": "76077-1"
    },
    {
      "ID": 334,
      "SetNumber": 76078,
      "URL": "https://www.lego.com/biassets/bi/6188180.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6188180.png",
      "Description": "Hulk vs. Red Hulk",
      "Notes": "BI 3017 / 56 - 65g, 76078 1/2 V39",
      "DashedNumber": "76078-1"
    },
    {
      "ID": 335,
      "SetNumber": 76078,
      "URL": "https://www.lego.com/biassets/bi/6188187.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6188187.png",
      "Description": "Hulk vs. Red Hulk",
      "Notes": "BI 3017/60-65G, 76078 2/2 V39",
      "DashedNumber": "76078-1"
    },
    {
      "ID": 336,
      "SetNumber": 76078,
      "URL": "https://www.lego.com/biassets/bi/6205665.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6205665.png",
      "Description": "Hulk vs. Red Hulk",
      "Notes": "BI 3017/56 - 65G, 76078 1/2 V29",
      "DashedNumber": "76078-1"
    },
    {
      "ID": 337,
      "SetNumber": 76078,
      "URL": "https://www.lego.com/biassets/bi/6188182.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6188182.png",
      "Description": "Hulk vs. Red Hulk",
      "Notes": "BI 3017/60-65G, 76078 2/2 V29",
      "DashedNumber": "76078-1"
    },
    {
      "ID": 338,
      "SetNumber": 76078,
      "URL": "https://www.lego.com/biassets/bi/6188178.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6188178.png",
      "Description": "Hulk vs. Red Hulk",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "76078-1"
    },
    {
      "ID": 339,
      "SetNumber": 76079,
      "URL": "https://www.lego.com/biassets/bi/6195851.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6195851.png",
      "Description": "The Milano vs. The Abilisk",
      "Notes": "INSP. MATERIAL,76079/76080/76081 V29",
      "DashedNumber": "76079-1"
    },
    {
      "ID": 340,
      "SetNumber": 76079,
      "URL": "https://www.lego.com/biassets/bi/6195852.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6195852.png",
      "Description": "The Milano vs. The Abilisk",
      "Notes": "INSP. MATERIAL,76079/76080/76081 V39",
      "DashedNumber": "76079-1"
    },
    {
      "ID": 341,
      "SetNumber": 76079,
      "URL": "https://www.lego.com/biassets/bi/6195853.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6195853.png",
      "Description": "Ravager Attack",
      "Notes": "BI 3018/60-65G, 76079 V29",
      "DashedNumber": "76079-1"
    },
    {
      "ID": 342,
      "SetNumber": 76079,
      "URL": "https://www.lego.com/biassets/bi/6195855.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6195855.png",
      "Description": "Ravager Attack",
      "Notes": "BI 3018/60-65G, 76079 V39",
      "DashedNumber": "76079-1"
    },
    {
      "ID": 343,
      "SetNumber": 76080,
      "URL": "https://www.lego.com/biassets/bi/6195856.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6195856.png",
      "Description": "Ayeshas Revenge",
      "Notes": "BI 3004/28, 76080 1/2 V29",
      "DashedNumber": "76080-1"
    },
    {
      "ID": 344,
      "SetNumber": 76080,
      "URL": "https://www.lego.com/biassets/bi/6195857.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6195857.png",
      "Description": "Ayeshas Revenge",
      "Notes": "BI 3004/28, 76080 1/2 V39",
      "DashedNumber": "76080-1"
    },
    {
      "ID": 345,
      "SetNumber": 76080,
      "URL": "https://www.lego.com/biassets/bi/6199362.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6199362.png",
      "Description": "Ayeshas Revenge",
      "Notes": "BI 3018 / 72+4 / 65+115g, 76080 2/2 V29",
      "DashedNumber": "76080-1"
    },
    {
      "ID": 346,
      "SetNumber": 76080,
      "URL": "https://www.lego.com/biassets/bi/6199363.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6199363.png",
      "Description": "Ayeshas Revenge",
      "Notes": "BI 3018 / 72+4 / 65+115g, 76080 2/2 V39",
      "DashedNumber": "76080-1"
    },
    {
      "ID": 347,
      "SetNumber": 76081,
      "URL": "https://www.lego.com/biassets/bi/6199372.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6199372.png",
      "Description": "The Milano vs. The Abilisk",
      "Notes": "BI 3004/36, 76081 1/2 V29",
      "DashedNumber": "76081-1"
    },
    {
      "ID": 348,
      "SetNumber": 76081,
      "URL": "https://www.lego.com/biassets/bi/6199373.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6199373.png",
      "Description": "The Milano vs. The Abilisk",
      "Notes": "BI 3004/36, 76081 1/2 V39",
      "DashedNumber": "76081-1"
    },
    {
      "ID": 349,
      "SetNumber": 76081,
      "URL": "https://www.lego.com/biassets/bi/6199374.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6199374.png",
      "Description": "The Milano vs. The Abilisk",
      "Notes": "BI 3019/64+4*-, 76081 2/2 V29",
      "DashedNumber": "76081-1"
    },
    {
      "ID": 350,
      "SetNumber": 76081,
      "URL": "https://www.lego.com/biassets/bi/6199376.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6199376.png",
      "Description": "The Milano vs. The Abilisk",
      "Notes": "BI 3019/64+4*-, 76081 2/2 V39",
      "DashedNumber": "76081-1"
    },
    {
      "ID": 351,
      "SetNumber": 76082,
      "URL": "https://www.lego.com/biassets/bi/6204057.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6204057.png",
      "Description": "ATM Heist Battle",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "76082-1"
    },
    {
      "ID": 352,
      "SetNumber": 76082,
      "URL": "https://www.lego.com/biassets/bi/6204059.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6204059.png",
      "Description": "ATM Heist Battle",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "76082-1"
    },
    {
      "ID": 353,
      "SetNumber": 76082,
      "URL": "https://www.lego.com/biassets/bi/6228219.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6228219.png",
      "Description": "Thor vs. Hulk: Arena Clash",
      "Notes": "INSP. MATER, 76082/76083/76084/76088 V29",
      "DashedNumber": "76082-1"
    },
    {
      "ID": 354,
      "SetNumber": 76082,
      "URL": "https://www.lego.com/biassets/bi/6228222.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6228222.png",
      "Description": "Thor vs. Hulk: Arena Clash",
      "Notes": "INSP. MATER, 76082/76083/76084/76088 V39",
      "DashedNumber": "76082-1"
    },
    {
      "ID": 355,
      "SetNumber": 76082,
      "URL": "https://www.lego.com/biassets/bi/6228207.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6228207.png",
      "Description": "ATM Heist Battle",
      "Notes": "BI 3018/60+4/65+115G, 76082 V29",
      "DashedNumber": "76082-1"
    },
    {
      "ID": 356,
      "SetNumber": 76082,
      "URL": "https://www.lego.com/biassets/bi/6228209.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6228209.png",
      "Description": "ATM Heist Battle",
      "Notes": "BI 3018/60+4/65+115G, 76082 V39",
      "DashedNumber": "76082-1"
    },
    {
      "ID": 357,
      "SetNumber": 76083,
      "URL": "https://www.lego.com/biassets/bi/6228212.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6228212.png",
      "Description": "Beware the Vulture",
      "Notes": "BI 3004/36, 76083 1/2 V29",
      "DashedNumber": "76083-1"
    },
    {
      "ID": 358,
      "SetNumber": 76083,
      "URL": "https://www.lego.com/biassets/bi/6228214.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6228214.png",
      "Description": "Beware the Vulture",
      "Notes": "BI 3017/72+4, 65/115G, 76083 2/2 V29",
      "DashedNumber": "76083-1"
    },
    {
      "ID": 359,
      "SetNumber": 76083,
      "URL": "https://www.lego.com/biassets/bi/6228216.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6228216.png",
      "Description": "Beware the Vulture",
      "Notes": "BI 3004/36, 76083 1/2 V39",
      "DashedNumber": "76083-1"
    },
    {
      "ID": 360,
      "SetNumber": 76083,
      "URL": "https://www.lego.com/biassets/bi/6228217.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6228217.png",
      "Description": "Beware the Vulture",
      "Notes": "BI 3017/72+4, 65/115G, 76083 2/2 V39",
      "DashedNumber": "76083-1"
    },
    {
      "ID": 361,
      "SetNumber": 76083,
      "URL": "https://www.lego.com/biassets/bi/6204062.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6204062.png",
      "Description": "Beware the Vulture",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "76083-1"
    },
    {
      "ID": 362,
      "SetNumber": 76083,
      "URL": "https://www.lego.com/biassets/bi/6204066.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6204066.png",
      "Description": "Beware the Vulture",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "76083-1"
    },
    {
      "ID": 363,
      "SetNumber": 76083,
      "URL": "https://www.lego.com/biassets/bi/6204067.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6204067.png",
      "Description": "Beware the Vulture",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "76083-1"
    },
    {
      "ID": 364,
      "SetNumber": 76083,
      "URL": "https://www.lego.com/biassets/bi/6204072.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6204072.png",
      "Description": "Beware the Vulture",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "76083-1"
    },
    {
      "ID": 365,
      "SetNumber": 76084,
      "URL": "https://www.lego.com/biassets/bi/6204073.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6204073.png",
      "Description": "The Ultimate Battle for Asgard",
      "Notes": "BI 3017/72+4, 65/115G, 76084 1/2 V29",
      "DashedNumber": "76084-1"
    },
    {
      "ID": 366,
      "SetNumber": 76084,
      "URL": "https://www.lego.com/biassets/bi/6204074.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6204074.png",
      "Description": "The Ultimate Battle for Asgard",
      "Notes": "BI 3004/48, 76084 2/2 V29",
      "DashedNumber": "76084-1"
    },
    {
      "ID": 367,
      "SetNumber": 76084,
      "URL": "https://www.lego.com/biassets/bi/6204075.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6204075.png",
      "Description": "The Ultimate Battle for Asgard",
      "Notes": "BI 3017/72+4, 65/115G, 76084 1/2 V39",
      "DashedNumber": "76084-1"
    },
    {
      "ID": 368,
      "SetNumber": 76084,
      "URL": "https://www.lego.com/biassets/bi/6204076.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6204076.png",
      "Description": "The Ultimate Battle for Asgard",
      "Notes": "BI 3004/48, 76084 2/2 V39",
      "DashedNumber": "76084-1"
    },
    {
      "ID": 369,
      "SetNumber": 76085,
      "URL": "https://www.lego.com/biassets/bi/6208298.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6208298.png",
      "Description": "Battle of Atlantis",
      "Notes": "BI 3003, 72+4/65+115G, 76085 V29",
      "DashedNumber": "76085-1"
    },
    {
      "ID": 370,
      "SetNumber": 76085,
      "URL": "https://www.lego.com/biassets/bi/6208299.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6208299.png",
      "Description": "Battle of Atlantis",
      "Notes": "BI 3003, 72+4/65+115G, 76085 V39",
      "DashedNumber": "76085-1"
    },
    {
      "ID": 371,
      "SetNumber": 76086,
      "URL": "https://www.lego.com/biassets/bi/6210397.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6210397.png",
      "Description": "Knightcrawler Tunnel Attack",
      "Notes": "BI 3019/64+4*, 76086 V29",
      "DashedNumber": "76086-1"
    },
    {
      "ID": 372,
      "SetNumber": 76086,
      "URL": "https://www.lego.com/biassets/bi/6210398.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6210398.png",
      "Description": "Knightcrawler Tunnel Attack",
      "Notes": "BI 3019/64+4*, 76086 V39",
      "DashedNumber": "76086-1"
    },
    {
      "ID": 373,
      "SetNumber": 76087,
      "URL": "https://www.lego.com/biassets/bi/6207967.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6207967.png",
      "Description": "Flying Fox: Batmobile Airlift Attack",
      "Notes": "BI 3019/196+4/65+200G, 76087 V29",
      "DashedNumber": "76087-1"
    },
    {
      "ID": 374,
      "SetNumber": 76087,
      "URL": "https://www.lego.com/biassets/bi/6207968.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6207968.png",
      "Description": "Flying Fox: Batmobile Airlift Attack",
      "Notes": "BI 3019/196+4/65+200G, 76087 V39",
      "DashedNumber": "76087-1"
    },
    {
      "ID": 375,
      "SetNumber": 76088,
      "URL": "https://www.lego.com/biassets/bi/6204079.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6204079.png",
      "Description": "Thor vs. Hulk: Arena Clash",
      "Notes": "BI 3019/80+4, 76088 V39",
      "DashedNumber": "76088-1"
    },
    {
      "ID": 376,
      "SetNumber": 76088,
      "URL": "https://www.lego.com/biassets/bi/6204077.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6204077.png",
      "Description": "Thor vs. Hulk: Arena Clash",
      "Notes": "BI 3019/80+4, 76088 V29",
      "DashedNumber": "76088-1"
    },
    {
      "ID": 377,
      "SetNumber": 76089,
      "URL": "https://www.lego.com/biassets/bi/6221811.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6221811.png",
      "Description": "Mighty Micros: Scarlet Spider vs. Sandma",
      "Notes": "BI 2002/2, 76089 1/3 V29",
      "DashedNumber": "76089-1"
    },
    {
      "ID": 378,
      "SetNumber": 76089,
      "URL": "https://www.lego.com/biassets/bi/6221819.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6221819.png",
      "Description": "Mighty Micros: Scarlet Spider vs. Sandma",
      "Notes": "BI 2002/2, 76089 1/3 V39",
      "DashedNumber": "76089-1"
    },
    {
      "ID": 379,
      "SetNumber": 76089,
      "URL": "https://www.lego.com/biassets/bi/6221823.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6221823.png",
      "Description": "Mighty Micros: Scarlet Spider vs. Sandma",
      "Notes": "BI 2002/2, 76089 2/3 V29",
      "DashedNumber": "76089-1"
    },
    {
      "ID": 380,
      "SetNumber": 76089,
      "URL": "https://www.lego.com/biassets/bi/6221826.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6221826.png",
      "Description": "Mighty Micros: Scarlet Spider vs. Sandma",
      "Notes": "BI 2002/2, 76089 2/3 V39",
      "DashedNumber": "76089-1"
    },
    {
      "ID": 381,
      "SetNumber": 76089,
      "URL": "https://www.lego.com/biassets/bi/6221827.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6221827.png",
      "Description": "Mighty Micros: Scarlet Spider vs. Sandma",
      "Notes": "BI 2002/2, 76089 3/3 V29",
      "DashedNumber": "76089-1"
    },
    {
      "ID": 382,
      "SetNumber": 76089,
      "URL": "https://www.lego.com/biassets/bi/6221828.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6221828.png",
      "Description": "Mighty Micros: Scarlet Spider vs. Sandma",
      "Notes": "BI 2002/2, 76089 3/3 V39",
      "DashedNumber": "76089-1"
    },
    {
      "ID": 383,
      "SetNumber": 76090,
      "URL": "https://www.lego.com/biassets/bi/6221829.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6221829.png",
      "Description": "Mighty Micros: Star-Lord vs. Nebula",
      "Notes": "BI 2002/2, 76090 1/3 V29",
      "DashedNumber": "76090-1"
    },
    {
      "ID": 384,
      "SetNumber": 76090,
      "URL": "https://www.lego.com/biassets/bi/6221831.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6221831.png",
      "Description": "Mighty Micros: Star-Lord vs. Nebula",
      "Notes": "BI 2002/2, 76090 1/3 V39",
      "DashedNumber": "76090-1"
    },
    {
      "ID": 385,
      "SetNumber": 76090,
      "URL": "https://www.lego.com/biassets/bi/6221832.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6221832.png",
      "Description": "Mighty Micros: Star-Lord vs. Nebula",
      "Notes": "BI 2002/2, 76090 2/3 V29",
      "DashedNumber": "76090-1"
    },
    {
      "ID": 386,
      "SetNumber": 76090,
      "URL": "https://www.lego.com/biassets/bi/6221833.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6221833.png",
      "Description": "Mighty Micros: Star-Lord vs. Nebula",
      "Notes": "BI 2002/2, 76090 2/3 V39",
      "DashedNumber": "76090-1"
    },
    {
      "ID": 387,
      "SetNumber": 76090,
      "URL": "https://www.lego.com/biassets/bi/6221835.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6221835.png",
      "Description": "Mighty Micros: Star-Lord vs. Nebula",
      "Notes": "BI 2002/2, 76090 3/3 V29",
      "DashedNumber": "76090-1"
    },
    {
      "ID": 388,
      "SetNumber": 76090,
      "URL": "https://www.lego.com/biassets/bi/6221856.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6221856.png",
      "Description": "Mighty Micros: Star-Lord vs. Nebula",
      "Notes": "BI 2002/2, 76090 3/3 V39",
      "DashedNumber": "76090-1"
    },
    {
      "ID": 389,
      "SetNumber": 76091,
      "URL": "https://www.lego.com/biassets/bi/6221857.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6221857.png",
      "Description": "Mighty Micros: Thor vs. Loki",
      "Notes": "BI 2002/2, 76091 1/3 V29",
      "DashedNumber": "76091-1"
    },
    {
      "ID": 390,
      "SetNumber": 76091,
      "URL": "https://www.lego.com/biassets/bi/6221858.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6221858.png",
      "Description": "Mighty Micros: Thor vs. Loki",
      "Notes": "BI 2002/2, 76091 1/3 V39",
      "DashedNumber": "76091-1"
    },
    {
      "ID": 391,
      "SetNumber": 76091,
      "URL": "https://www.lego.com/biassets/bi/6221859.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6221859.png",
      "Description": "Mighty Micros: Thor vs. Loki",
      "Notes": "BI 2002/2, 76091 2/3 V29",
      "DashedNumber": "76091-1"
    },
    {
      "ID": 392,
      "SetNumber": 76091,
      "URL": "https://www.lego.com/biassets/bi/6221860.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6221860.png",
      "Description": "Mighty Micros: Thor vs. Loki",
      "Notes": "BI 2002/2, 76091 2/3 V39",
      "DashedNumber": "76091-1"
    },
    {
      "ID": 393,
      "SetNumber": 76091,
      "URL": "https://www.lego.com/biassets/bi/6221862.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6221862.png",
      "Description": "Mighty Micros: Thor vs. Loki",
      "Notes": "BI 2002/2, 76091 3/3 V29",
      "DashedNumber": "76091-1"
    },
    {
      "ID": 394,
      "SetNumber": 76091,
      "URL": "https://www.lego.com/biassets/bi/6222064.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6222064.png",
      "Description": "Mighty Micros: Thor vs. Loki",
      "Notes": "BI 2002/2, 76091 3/3 V39",
      "DashedNumber": "76091-1"
    },
    {
      "ID": 395,
      "SetNumber": 76092,
      "URL": "https://www.lego.com/biassets/bi/6222187.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6222187.png",
      "Description": "Mighty Micros: Batman � vs. Harley Quinn �",
      "Notes": "BI 2002/2, 76092 1/3 V29",
      "DashedNumber": "76092-1"
    },
    {
      "ID": 396,
      "SetNumber": 76092,
      "URL": "https://www.lego.com/biassets/bi/6222188.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6222188.png",
      "Description": "Mighty Micros: Batman � vs. Harley Quinn �",
      "Notes": "BI 2002/2, 76092 1/3 V39",
      "DashedNumber": "76092-1"
    },
    {
      "ID": 397,
      "SetNumber": 76092,
      "URL": "https://www.lego.com/biassets/bi/6222191.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6222191.png",
      "Description": "Mighty Micros: Batman � vs. Harley Quinn �",
      "Notes": "BI 2002/2, 76092 2/3 V29",
      "DashedNumber": "76092-1"
    },
    {
      "ID": 398,
      "SetNumber": 76092,
      "URL": "https://www.lego.com/biassets/bi/6222194.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6222194.png",
      "Description": "Mighty Micros: Batman � vs. Harley Quinn �",
      "Notes": "BI 2002/2, 76092 2/3 V39",
      "DashedNumber": "76092-1"
    },
    {
      "ID": 399,
      "SetNumber": 76092,
      "URL": "https://www.lego.com/biassets/bi/6222196.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6222196.png",
      "Description": "Mighty Micros: Batman � vs. Harley Quinn �",
      "Notes": "BI 2002/2, 76092 3/3 V29",
      "DashedNumber": "76092-1"
    },
    {
      "ID": 400,
      "SetNumber": 76092,
      "URL": "https://www.lego.com/biassets/bi/6222199.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6222199.png",
      "Description": "Mighty Micros: Batman � vs. Harley Quinn �",
      "Notes": "BI 2002/2, 76092 3/3 V39",
      "DashedNumber": "76092-1"
    },
    {
      "ID": 401,
      "SetNumber": 76093,
      "URL": "https://www.lego.com/biassets/bi/6222202.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6222202.png",
      "Description": "Mighty Micros: Nightwing � vs. The Joker �",
      "Notes": "BI 2002/2, 76093 1/3 V29",
      "DashedNumber": "76093-1"
    },
    {
      "ID": 402,
      "SetNumber": 76093,
      "URL": "https://www.lego.com/biassets/bi/6222205.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6222205.png",
      "Description": "Mighty Micros: Nightwing � vs. The Joker �",
      "Notes": "BI 2002/2, 76093 1/3 V39",
      "DashedNumber": "76093-1"
    },
    {
      "ID": 403,
      "SetNumber": 76093,
      "URL": "https://www.lego.com/biassets/bi/6222206.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6222206.png",
      "Description": "Mighty Micros: Nightwing � vs. The Joker �",
      "Notes": "BI 2002/2, 76093 2/3 V29",
      "DashedNumber": "76093-1"
    },
    {
      "ID": 404,
      "SetNumber": 76093,
      "URL": "https://www.lego.com/biassets/bi/6222208.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6222208.png",
      "Description": "Mighty Micros: Nightwing � vs. The Joker �",
      "Notes": "BI 2002/2, 76093 2/3 V39",
      "DashedNumber": "76093-1"
    },
    {
      "ID": 405,
      "SetNumber": 76093,
      "URL": "https://www.lego.com/biassets/bi/6222209.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6222209.png",
      "Description": "Mighty Micros: Nightwing � vs. The Joker �",
      "Notes": "BI 2002/2, 76093 3/3 V29",
      "DashedNumber": "76093-1"
    },
    {
      "ID": 406,
      "SetNumber": 76093,
      "URL": "https://www.lego.com/biassets/bi/6222210.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6222210.png",
      "Description": "Mighty Micros: Nightwing � vs. The Joker �",
      "Notes": "BI 2002/2, 76093 3/3 V39",
      "DashedNumber": "76093-1"
    },
    {
      "ID": 407,
      "SetNumber": 76094,
      "URL": "https://www.lego.com/biassets/bi/6222211.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6222211.png",
      "Description": "Mighty Micros: Supergirl � vs. Brainiac �",
      "Notes": "BI 2002/2, 76094 1/3 V29",
      "DashedNumber": "76094-1"
    },
    {
      "ID": 408,
      "SetNumber": 76094,
      "URL": "https://www.lego.com/biassets/bi/6222212.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6222212.png",
      "Description": "Mighty Micros: Supergirl � vs. Brainiac �",
      "Notes": "BI 2002/2, 76094 1/3 V39",
      "DashedNumber": "76094-1"
    },
    {
      "ID": 409,
      "SetNumber": 76094,
      "URL": "https://www.lego.com/biassets/bi/6222226.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6222226.png",
      "Description": "Mighty Micros: Supergirl � vs. Brainiac �",
      "Notes": "BI 2002/2, 76094 2/3 V29",
      "DashedNumber": "76094-1"
    },
    {
      "ID": 410,
      "SetNumber": 76094,
      "URL": "https://www.lego.com/biassets/bi/6222227.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6222227.png",
      "Description": "Mighty Micros: Supergirl � vs. Brainiac �",
      "Notes": "BI 2002/2, 76094 2/3 V39",
      "DashedNumber": "76094-1"
    },
    {
      "ID": 411,
      "SetNumber": 76094,
      "URL": "https://www.lego.com/biassets/bi/6222228.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6222228.png",
      "Description": "Mighty Micros: Supergirl � vs. Brainiac �",
      "Notes": "BI 2002/2, 76094 3/3 V29",
      "DashedNumber": "76094-1"
    },
    {
      "ID": 412,
      "SetNumber": 76094,
      "URL": "https://www.lego.com/biassets/bi/6222231.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6222231.png",
      "Description": "Mighty Micros: Supergirl � vs. Brainiac �",
      "Notes": "BI 2002/2, 76094 3/3 V39",
      "DashedNumber": "76094-1"
    },
    {
      "ID": 413,
      "SetNumber": 76096,
      "URL": "https://www.lego.com/biassets/bi/6231804.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6231804.png",
      "Description": "Superman � & Krypto � Team-Up",
      "Notes": "BI 3004/72+4*, 76096 V29",
      "DashedNumber": "76096-1"
    },
    {
      "ID": 414,
      "SetNumber": 76096,
      "URL": "https://www.lego.com/biassets/bi/6231805.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6231805.png",
      "Description": "Superman � & Krypto � Team-Up",
      "Notes": "BI 3004/72+4*, 76096 V39",
      "DashedNumber": "76096-1"
    },
    {
      "ID": 415,
      "SetNumber": 76097,
      "URL": "https://www.lego.com/biassets/bi/6231806.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6231806.png",
      "Description": "Lex Luthor � Mech Takedown",
      "Notes": "BI 3017, 80+4/65+115G, 76097 V29",
      "DashedNumber": "76097-1"
    },
    {
      "ID": 416,
      "SetNumber": 76097,
      "URL": "https://www.lego.com/biassets/bi/6231807.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6231807.png",
      "Description": "Lex Luthor � Mech Takedown",
      "Notes": "BI 3017, 80+4/65+115G, 76097 V39",
      "DashedNumber": "76097-1"
    },
    {
      "ID": 417,
      "SetNumber": 76098,
      "URL": "https://www.lego.com/biassets/bi/6231808.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6231808.png",
      "Description": "Speed Force Freeze Pursuit",
      "Notes": "BI 3018/76+4-65+115G, 76098 V29",
      "DashedNumber": "76098-1"
    },
    {
      "ID": 418,
      "SetNumber": 76098,
      "URL": "https://www.lego.com/biassets/bi/6231810.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6231810.png",
      "Description": "Speed Force Freeze Pursuit",
      "Notes": "BI 3018/76+4-65+115G, 76098 V39",
      "DashedNumber": "76098-1"
    },
    {
      "ID": 419,
      "SetNumber": 76099,
      "URL": "https://www.lego.com/biassets/bi/6228555.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6228555.png",
      "Description": "Rhino Face-Off by the Mine",
      "Notes": "BI 3004/28, 76099 V29 1/2",
      "DashedNumber": "76099-1"
    },
    {
      "ID": 420,
      "SetNumber": 76099,
      "URL": "https://www.lego.com/biassets/bi/6228556.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6228556.png",
      "Description": "Rhino Face-Off by the Mine",
      "Notes": "BI 3004/28, 76099 V39 1/2",
      "DashedNumber": "76099-1"
    },
    {
      "ID": 421,
      "SetNumber": 76099,
      "URL": "https://www.lego.com/biassets/bi/6228557.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6228557.png",
      "Description": "Rhino Face-Off by the Mine",
      "Notes": "BI 3004 60, 76099 V29 2/2",
      "DashedNumber": "76099-1"
    },
    {
      "ID": 422,
      "SetNumber": 76099,
      "URL": "https://www.lego.com/biassets/bi/6228568.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6228568.png",
      "Description": "Rhino Face-Off by the Mine",
      "Notes": "BI 3004 60, 76099 V39 2/2",
      "DashedNumber": "76099-1"
    },
    {
      "ID": 423,
      "SetNumber": 76100,
      "URL": "https://www.lego.com/biassets/bi/6228569.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6228569.png",
      "Description": "Royal Talon Fighter Attack",
      "Notes": "BI 3018, 96+4/65+200G, 76100 V29",
      "DashedNumber": "76100-1"
    },
    {
      "ID": 424,
      "SetNumber": 76100,
      "URL": "https://www.lego.com/biassets/bi/6228570.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6228570.png",
      "Description": "Royal Talon Fighter Attack",
      "Notes": "BI 3018, 96+4/65+200G, 76100 V39",
      "DashedNumber": "76100-1"
    },
    {
      "ID": 425,
      "SetNumber": 76101,
      "URL": "https://www.lego.com/biassets/bi/6231763.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6231763.png",
      "Description": "Outrider Dropship Attack",
      "Notes": "BI 3003, 52/65G, 76101 V29",
      "DashedNumber": "76101-1"
    },
    {
      "ID": 426,
      "SetNumber": 76101,
      "URL": "https://www.lego.com/biassets/bi/6231764.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6231764.png",
      "Description": "Outrider Dropship Attack",
      "Notes": "BI 3003, 52/65G, 76101 V39",
      "DashedNumber": "76101-1"
    },
    {
      "ID": 427,
      "SetNumber": 76102,
      "URL": "https://www.lego.com/biassets/bi/6231769.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6231769.png",
      "Description": "Thors Weapon Quest",
      "Notes": "BI 3004/80+4, 76102 V29",
      "DashedNumber": "76102-1"
    },
    {
      "ID": 428,
      "SetNumber": 76102,
      "URL": "https://www.lego.com/biassets/bi/6231772.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6231772.png",
      "Description": "Thors Weapon Quest",
      "Notes": "BI 3004/80+4, 76102 V39",
      "DashedNumber": "76102-1"
    },
    {
      "ID": 429,
      "SetNumber": 76103,
      "URL": "https://www.lego.com/biassets/bi/6236621.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6236621.png",
      "Description": "Corvus Glaive Thresher Attack",
      "Notes": "BI 3004/24, 76103 V29, 1/3",
      "DashedNumber": "76103-1"
    },
    {
      "ID": 430,
      "SetNumber": 76103,
      "URL": "https://www.lego.com/biassets/bi/6236622.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6236622.png",
      "Description": "Corvus Glaive Thresher Attack",
      "Notes": "BI 3004/40, 76103 V29, 2/3",
      "DashedNumber": "76103-1"
    },
    {
      "ID": 431,
      "SetNumber": 76103,
      "URL": "https://www.lego.com/biassets/bi/6236625.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6236625.png",
      "Description": "Corvus Glaive Thresher Attack",
      "Notes": "BI 3017, 60/65G, 76103 V29, 3/3",
      "DashedNumber": "76103-1"
    },
    {
      "ID": 432,
      "SetNumber": 76103,
      "URL": "https://www.lego.com/biassets/bi/6236627.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6236627.png",
      "Description": "Corvus Glaive Thresher Attack",
      "Notes": "BI 3004/24, 76103 V39, 1/3",
      "DashedNumber": "76103-1"
    },
    {
      "ID": 433,
      "SetNumber": 76103,
      "URL": "https://www.lego.com/biassets/bi/6236628.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6236628.png",
      "Description": "Corvus Glaive Thresher Attack",
      "Notes": "BI 3004/40, 76103 V39, 2/3",
      "DashedNumber": "76103-1"
    },
    {
      "ID": 434,
      "SetNumber": 76103,
      "URL": "https://www.lego.com/biassets/bi/6236630.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6236630.png",
      "Description": "Corvus Glaive Thresher Attack",
      "Notes": "BI 3017, 60/65G, 76103 V39, 3/3",
      "DashedNumber": "76103-1"
    },
    {
      "ID": 435,
      "SetNumber": 76104,
      "URL": "https://www.lego.com/biassets/bi/6236646.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6236646.png",
      "Description": "The Hulkbuster Smash-Up",
      "Notes": "BI 3017, 80+4/65+115G, 76104 V29",
      "DashedNumber": "76104-1"
    },
    {
      "ID": 436,
      "SetNumber": 76104,
      "URL": "https://www.lego.com/biassets/bi/6236653.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6236653.png",
      "Description": "The Hulkbuster Smash-Up",
      "Notes": "BI 3017, 80+4/65+115G, 76104 V39",
      "DashedNumber": "76104-1"
    },
    {
      "ID": 437,
      "SetNumber": 76105,
      "URL": "https://www.lego.com/biassets/bi/6236654.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6236654.png",
      "Description": "The Hulkbuster: Ultron Edition",
      "Notes": "BI 3016, 180+4/65+200G, 76105 V29",
      "DashedNumber": "76105-1"
    },
    {
      "ID": 438,
      "SetNumber": 76105,
      "URL": "https://www.lego.com/biassets/bi/6236656.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6236656.png",
      "Description": "The Hulkbuster: Ultron Edition",
      "Notes": "BI 3016, 180+4/65+200G, 76105 V39",
      "DashedNumber": "76105-1"
    },
    {
      "ID": 439,
      "SetNumber": 76107,
      "URL": "https://www.lego.com/biassets/bi/6236657.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6236657.png",
      "Description": "Thanos: Ultimate Battle",
      "Notes": "BI 3019/112+4/65+200G, 76107 V29",
      "DashedNumber": "76107-1"
    },
    {
      "ID": 440,
      "SetNumber": 76107,
      "URL": "https://www.lego.com/biassets/bi/6236659.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6236659.png",
      "Description": "Thanos: Ultimate Battle",
      "Notes": "BI 3019/112+4/65+200G, 76107 V39",
      "DashedNumber": "76107-1"
    },
    {
      "ID": 441,
      "SetNumber": 76108,
      "URL": "https://www.lego.com/biassets/bi/6236660.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6236660.png",
      "Description": "Sanctum Sanctorum Showdown",
      "Notes": "BI 3016, 216+4/65+200G, 76108 V29",
      "DashedNumber": "76108-1"
    },
    {
      "ID": 442,
      "SetNumber": 76108,
      "URL": "https://www.lego.com/biassets/bi/6236662.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6236662.png",
      "Description": "Sanctum Sanctorum Showdown",
      "Notes": "BI 3016, 216+4/65+200G, 76108 V39",
      "DashedNumber": "76108-1"
    },
    {
      "ID": 443,
      "SetNumber": 76109,
      "URL": "https://www.lego.com/biassets/bi/6242504.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6242504.png",
      "Description": "Quantum Realm Explorers",
      "Notes": "BI 3004, 60+4, 65+115G, 76109 V29",
      "DashedNumber": "76109-1"
    },
    {
      "ID": 444,
      "SetNumber": 76109,
      "URL": "https://www.lego.com/biassets/bi/6242505.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6242505.png",
      "Description": "Quantum Realm Explorers",
      "Notes": "BI 3004, 60+4, 65+115G, 76109 V39",
      "DashedNumber": "76109-1"
    },
    {
      "ID": 445,
      "SetNumber": 79000,
      "URL": "https://www.lego.com/biassets/bi/6035630.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6035630.png",
      "Description": "Riddles for The Ring",
      "Notes": "BI 3003/24 - 79000 V29",
      "DashedNumber": "79000-1"
    },
    {
      "ID": 446,
      "SetNumber": 79000,
      "URL": "https://www.lego.com/biassets/bi/6035631.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6035631.png",
      "Description": "Riddles for The Ring",
      "Notes": "BI 3003/24 - 79000 V39",
      "DashedNumber": "79000-1"
    },
    {
      "ID": 447,
      "SetNumber": 79001,
      "URL": "https://www.lego.com/biassets/bi/6035621.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6035621.png",
      "Description": "Escape from Mirkwood � Spiders",
      "Notes": "BI 3004/72+4*- 79001 V29",
      "DashedNumber": "79001-1"
    },
    {
      "ID": 448,
      "SetNumber": 79001,
      "URL": "https://www.lego.com/biassets/bi/6035628.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6035628.png",
      "Description": "Escape from Mirkwood � Spiders",
      "Notes": "BI 3004/72+4*- 79001 V39",
      "DashedNumber": "79001-1"
    },
    {
      "ID": 449,
      "SetNumber": 79002,
      "URL": "https://www.lego.com/biassets/bi/6044175.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6044175.png",
      "Description": "Attack of the Wargs",
      "Notes": "BI 3017 / 76+4 - 65/115g 79002 V29",
      "DashedNumber": "79002-1"
    },
    {
      "ID": 450,
      "SetNumber": 79002,
      "URL": "https://www.lego.com/biassets/bi/6044181.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6044181.png",
      "Description": "Attack of the Wargs",
      "Notes": "BI 3017 / 76+4 - 65/115g 79002 V39",
      "DashedNumber": "79002-1"
    },
    {
      "ID": 451,
      "SetNumber": 79003,
      "URL": "https://www.lego.com/biassets/bi/6036614.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6036614.png",
      "Description": "An Unexpected Gathering",
      "Notes": "BI 3016 80+4*- 79003 BOOK 1/2 V29",
      "DashedNumber": "79003-1"
    },
    {
      "ID": 452,
      "SetNumber": 79003,
      "URL": "https://www.lego.com/biassets/bi/6036617.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6036617.png",
      "Description": "An Unexpected Gathering",
      "Notes": "BI 3016 80+4*- 79003 BOOK 1/2 V39",
      "DashedNumber": "79003-1"
    },
    {
      "ID": 453,
      "SetNumber": 79003,
      "URL": "https://www.lego.com/biassets/bi/6040058.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6040058.png",
      "Description": "An Unexpected Gathering",
      "Notes": "BI 3016/52-65G 79003 BOOK 2/2 V29",
      "DashedNumber": "79003-1"
    },
    {
      "ID": 454,
      "SetNumber": 79003,
      "URL": "https://www.lego.com/biassets/bi/6040062.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6040062.png",
      "Description": "An Unexpected Gathering",
      "Notes": "BI 3016/52-65G 79003 BOOK 2/2 V39",
      "DashedNumber": "79003-1"
    },
    {
      "ID": 455,
      "SetNumber": 79004,
      "URL": "https://www.lego.com/biassets/bi/6036621.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6036621.png",
      "Description": "Barrel Escape",
      "Notes": "BI 3017 / 80+4 - 65/115g 79004 V29",
      "DashedNumber": "79004-1"
    },
    {
      "ID": 456,
      "SetNumber": 79004,
      "URL": "https://www.lego.com/biassets/bi/6036623.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6036623.png",
      "Description": "Barrel Escape",
      "Notes": "BI 3017 / 80+4 - 65/115g 79004 V39",
      "DashedNumber": "79004-1"
    },
    {
      "ID": 457,
      "SetNumber": 79005,
      "URL": "https://www.lego.com/biassets/bi/6051195.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6051195.png",
      "Description": "The Wizard Battle",
      "Notes": "BI 3003/36- 79005 V.29",
      "DashedNumber": "79005-1"
    },
    {
      "ID": 458,
      "SetNumber": 79005,
      "URL": "https://www.lego.com/biassets/bi/6051196.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6051196.png",
      "Description": "The Wizard Battle",
      "Notes": "BI 3003/36- 79005 V.39",
      "DashedNumber": "79005-1"
    },
    {
      "ID": 459,
      "SetNumber": 79006,
      "URL": "https://www.lego.com/biassets/bi/6053112.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6053112.png",
      "Description": "The Council of Elrond",
      "Notes": "BI 3018/68+4/65+115G 79006 V.29",
      "DashedNumber": "79006-1"
    },
    {
      "ID": 460,
      "SetNumber": 79006,
      "URL": "https://www.lego.com/biassets/bi/6053114.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6053114.png",
      "Description": "The Council of Elrond",
      "Notes": "BI 3018/68+4/65+115G 79006 V.39",
      "DashedNumber": "79006-1"
    },
    {
      "ID": 461,
      "SetNumber": 79007,
      "URL": "https://www.lego.com/biassets/bi/6051201.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6051201.png",
      "Description": "Battle at the Black Gate",
      "Notes": "BI 3016/68+4*- 79007 2/2 V.29",
      "DashedNumber": "79007-1"
    },
    {
      "ID": 462,
      "SetNumber": 79007,
      "URL": "https://www.lego.com/biassets/bi/6051202.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6051202.png",
      "Description": "Battle at the Black Gate",
      "Notes": "BI 3016/68+4*- 79007 2/2 V.39",
      "DashedNumber": "79007-1"
    },
    {
      "ID": 463,
      "SetNumber": 79007,
      "URL": "https://www.lego.com/biassets/bi/6051199.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6051199.png",
      "Description": "Battle at the Black Gate",
      "Notes": "BI 3017 / 56 79007 1/2 V.29",
      "DashedNumber": "79007-1"
    },
    {
      "ID": 464,
      "SetNumber": 79007,
      "URL": "https://www.lego.com/biassets/bi/6051200.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6051200.png",
      "Description": "Battle at the Black Gate",
      "Notes": "BI 3017 / 56 79007 1/2 V.39",
      "DashedNumber": "79007-1"
    },
    {
      "ID": 465,
      "SetNumber": 79008,
      "URL": "https://www.lego.com/biassets/bi/6051205.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6051205.png",
      "Description": "Pirate Ship Ambush",
      "Notes": "BI 3019/64+4*- 79008 2/2 V.29",
      "DashedNumber": "79008-1"
    },
    {
      "ID": 466,
      "SetNumber": 79008,
      "URL": "https://www.lego.com/biassets/bi/6051206.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6051206.png",
      "Description": "Pirate Ship Ambush",
      "Notes": "BI 3019/64+4*- 79008 2/2 V.39",
      "DashedNumber": "79008-1"
    },
    {
      "ID": 467,
      "SetNumber": 79008,
      "URL": "https://www.lego.com/biassets/bi/6052411.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6052411.png",
      "Description": "Pirate Ship Ambush",
      "Notes": "BI 3019/72+4, 79008 1/2 V29",
      "DashedNumber": "79008-1"
    },
    {
      "ID": 468,
      "SetNumber": 79008,
      "URL": "https://www.lego.com/biassets/bi/6052412.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6052412.png",
      "Description": "Pirate Ship Ambush",
      "Notes": "BI 3019/72+4, 79008 1/2 V39",
      "DashedNumber": "79008-1"
    },
    {
      "ID": 469,
      "SetNumber": 79010,
      "URL": "https://www.lego.com/biassets/bi/6036565.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6036565.png",
      "Description": "The Goblin King Battle",
      "Notes": "BI 3016 80+4*- 79010 BOOK 2/3 V29",
      "DashedNumber": "79010-1"
    },
    {
      "ID": 470,
      "SetNumber": 79010,
      "URL": "https://www.lego.com/biassets/bi/6036567.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6036567.png",
      "Description": "The Goblin King Battle",
      "Notes": "BI 3016 80+4*- 79010 BOOK 2/3 V39",
      "DashedNumber": "79010-1"
    },
    {
      "ID": 471,
      "SetNumber": 79010,
      "URL": "https://www.lego.com/biassets/bi/6046981.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6046981.png",
      "Description": "The Goblin King Battle",
      "Notes": "BI 3016/64+4 79010 3/3 V29",
      "DashedNumber": "79010-1"
    },
    {
      "ID": 472,
      "SetNumber": 79010,
      "URL": "https://www.lego.com/biassets/bi/6046982.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6046982.png",
      "Description": "The Goblin King Battle",
      "Notes": "BI 3016/64+4 79010 3/3 V39",
      "DashedNumber": "79010-1"
    },
    {
      "ID": 473,
      "SetNumber": 79010,
      "URL": "https://www.lego.com/biassets/bi/6042812.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6042812.png",
      "Description": "The Goblin King Battle",
      "Notes": "BI 3017/24 65G 79010-1/3 V29",
      "DashedNumber": "79010-1"
    },
    {
      "ID": 474,
      "SetNumber": 79010,
      "URL": "https://www.lego.com/biassets/bi/6042819.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6042819.png",
      "Description": "The Goblin King Battle",
      "Notes": "BI 3017/24-65g 79010-1/3 V39",
      "DashedNumber": "79010-1"
    },
    {
      "ID": 475,
      "SetNumber": 79011,
      "URL": "https://www.lego.com/biassets/bi/6073500.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6073500.png",
      "Description": "Dol Guldur Ambush",
      "Notes": "BI 3004 60/79011 V 29",
      "DashedNumber": "79011-1"
    },
    {
      "ID": 476,
      "SetNumber": 79011,
      "URL": "https://www.lego.com/biassets/bi/6073506.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6073506.png",
      "Description": "Dol Guldur Ambush",
      "Notes": "BI 3004 60/79011 V 39",
      "DashedNumber": "79011-1"
    },
    {
      "ID": 477,
      "SetNumber": 79012,
      "URL": "https://www.lego.com/biassets/bi/6073508.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6073508.png",
      "Description": "Mirkwood � Elf Army",
      "Notes": "BI 3004/72+4*-79012 V 29",
      "DashedNumber": "79012-1"
    },
    {
      "ID": 478,
      "SetNumber": 79012,
      "URL": "https://www.lego.com/biassets/bi/6073515.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6073515.png",
      "Description": "Mirkwood � Elf Army",
      "Notes": "BI 3004/72+4*-79012 V 39",
      "DashedNumber": "79012-1"
    },
    {
      "ID": 479,
      "SetNumber": 79013,
      "URL": "https://www.lego.com/biassets/bi/6081346.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6081346.png",
      "Description": "Lake-town Chase",
      "Notes": "BI 3017 / 40 - 65g-79013 V29 1/2",
      "DashedNumber": "79013-1"
    },
    {
      "ID": 480,
      "SetNumber": 79013,
      "URL": "https://www.lego.com/biassets/bi/6081347.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6081347.png",
      "Description": "Lake-town Chase",
      "Notes": "BI 3017 / 40 - 65g-79013 V39 1/2",
      "DashedNumber": "79013-1"
    },
    {
      "ID": 481,
      "SetNumber": 79013,
      "URL": "https://www.lego.com/biassets/bi/6081348.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6081348.png",
      "Description": "Lake-town Chase",
      "Notes": "BI 3017 / 64+4 - 65/115g-79013 V29 2/2",
      "DashedNumber": "79013-1"
    },
    {
      "ID": 482,
      "SetNumber": 79013,
      "URL": "https://www.lego.com/biassets/bi/6081349.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6081349.png",
      "Description": "Lake-town Chase",
      "Notes": "BI 3017 / 64+4 - 65/115g-79013 V39 2/2",
      "DashedNumber": "79013-1"
    },
    {
      "ID": 483,
      "SetNumber": 79014,
      "URL": "https://www.lego.com/biassets/bi/6089067.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6089067.png",
      "Description": "Dol Guldur Battle",
      "Notes": "BI 3017 / 60+4 - 65/115g-79014 V29 1/2",
      "DashedNumber": "79014-1"
    },
    {
      "ID": 484,
      "SetNumber": 79014,
      "URL": "https://www.lego.com/biassets/bi/6089068.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6089068.png",
      "Description": "Dol Guldur Battle",
      "Notes": "BI 3017 / 60+4 - 65/115g-79014 V39 1/2",
      "DashedNumber": "79014-1"
    },
    {
      "ID": 485,
      "SetNumber": 79014,
      "URL": "https://www.lego.com/biassets/bi/6073569.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6073569.png",
      "Description": "Dol Guldur Battle",
      "Notes": "BI 3017 / 80+4 - 65/115g-79014 V 29 2/2",
      "DashedNumber": "79014-1"
    },
    {
      "ID": 486,
      "SetNumber": 79014,
      "URL": "https://www.lego.com/biassets/bi/6073570.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6073570.png",
      "Description": "Dol Guldur Battle",
      "Notes": "BI 3017 / 80+4 - 65/115g-79014 V 39 2/2",
      "DashedNumber": "79014-1"
    },
    {
      "ID": 487,
      "SetNumber": 79015,
      "URL": "https://www.lego.com/biassets/bi/6103919.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6103919.png",
      "Description": "Witch-king Battle",
      "Notes": "BI 3003/28-79015 V29",
      "DashedNumber": "79015-1"
    },
    {
      "ID": 488,
      "SetNumber": 79015,
      "URL": "https://www.lego.com/biassets/bi/6103940.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6103940.png",
      "Description": "Witch-king Battle",
      "Notes": "BI 3003/28-79015 V39",
      "DashedNumber": "79015-1"
    },
    {
      "ID": 489,
      "SetNumber": 79016,
      "URL": "https://www.lego.com/biassets/bi/6103941.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6103941.png",
      "Description": "Attack on Lake-town",
      "Notes": "BI 3017 / 68+4 - 65/115g-79016 V29",
      "DashedNumber": "79016-1"
    },
    {
      "ID": 490,
      "SetNumber": 79016,
      "URL": "https://www.lego.com/biassets/bi/6103942.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6103942.png",
      "Description": "Attack on Lake-town",
      "Notes": "BI 3017 / 68+4 - 65/115g-79016 V39",
      "DashedNumber": "79016-1"
    },
    {
      "ID": 491,
      "SetNumber": 79017,
      "URL": "https://www.lego.com/biassets/bi/6103947.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6103947.png",
      "Description": "The Battle of Five Armies �",
      "Notes": "BI 3017 / 44 - 65g-79017 V29 2/2",
      "DashedNumber": "79017-1"
    },
    {
      "ID": 492,
      "SetNumber": 79017,
      "URL": "https://www.lego.com/biassets/bi/6103948.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6103948.png",
      "Description": "The Battle of Five Armies �",
      "Notes": "BI 3017 / 44 - 65g-79017 V39 2/2",
      "DashedNumber": "79017-1"
    },
    {
      "ID": 493,
      "SetNumber": 79017,
      "URL": "https://www.lego.com/biassets/bi/6103944.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6103944.png",
      "Description": "The Battle of Five Armies �",
      "Notes": "BI 3017 / 56 - 65g-79017 V29 1/2",
      "DashedNumber": "79017-1"
    },
    {
      "ID": 494,
      "SetNumber": 79017,
      "URL": "https://www.lego.com/biassets/bi/6103945.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6103945.png",
      "Description": "The Battle of Five Armies �",
      "Notes": "BI 3017 / 56 - 65g-79017 V39 1/2",
      "DashedNumber": "79017-1"
    },
    {
      "ID": 495,
      "SetNumber": 79018,
      "URL": "https://www.lego.com/biassets/bi/6104314.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6104314.png",
      "Description": "The Lonely Mountain",
      "Notes": "BI 3017/188+4/65+200g-79018 V29",
      "DashedNumber": "79018-1"
    },
    {
      "ID": 496,
      "SetNumber": 79018,
      "URL": "https://www.lego.com/biassets/bi/6104316.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6104316.png",
      "Description": "The Lonely Mountain",
      "Notes": "BI 3017/188+4/65+200g-79018 V39",
      "DashedNumber": "79018-1"
    },
    {
      "ID": 497,
      "SetNumber": 79100,
      "URL": "https://www.lego.com/biassets/bi/6036583.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6036583.png",
      "Description": "Kraang Lab Escape",
      "Notes": "BI 3001/32 - 79100 V29",
      "DashedNumber": "79100-1"
    },
    {
      "ID": 498,
      "SetNumber": 79100,
      "URL": "https://www.lego.com/biassets/bi/6036586.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6036586.png",
      "Description": "Kraang Lab Escape",
      "Notes": "BI 3001/32 - 79100 V39",
      "DashedNumber": "79100-1"
    },
    {
      "ID": 499,
      "SetNumber": 79101,
      "URL": "https://www.lego.com/biassets/bi/6042814.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6042814.png",
      "Description": "Shredders Dragon Bike",
      "Notes": "BI 3004/56 -  79101 V39",
      "DashedNumber": "79101-1"
    },
    {
      "ID": 500,
      "SetNumber": 79101,
      "URL": "https://www.lego.com/biassets/bi/6042813.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6042813.png",
      "Description": "Shredders Dragon Bike",
      "Notes": "BI 3004/56 - 79101 V29",
      "DashedNumber": "79101-1"
    },
    {
      "ID": 501,
      "SetNumber": 79102,
      "URL": "https://www.lego.com/biassets/bi/6036587.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6036587.png",
      "Description": "Stealth Shell in Pursuit",
      "Notes": "BI 3004/40 - 79102 V29",
      "DashedNumber": "79102-1"
    },
    {
      "ID": 502,
      "SetNumber": 79102,
      "URL": "https://www.lego.com/biassets/bi/6036590.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6036590.png",
      "Description": "Stealth Shell in Pursuit",
      "Notes": "BI 3004/40 - 79102 V39",
      "DashedNumber": "79102-1"
    },
    {
      "ID": 503,
      "SetNumber": 79103,
      "URL": "https://www.lego.com/biassets/bi/6036750.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6036750.png",
      "Description": "Turtle Lair Attack",
      "Notes": "BI 3004/36 79103 BOOK 1/2 V29",
      "DashedNumber": "79103-1"
    },
    {
      "ID": 504,
      "SetNumber": 79103,
      "URL": "https://www.lego.com/biassets/bi/6036752.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6036752.png",
      "Description": "Turtle Lair Attack",
      "Notes": "BI 3004/36 79103 BOOK 1/2 V39",
      "DashedNumber": "79103-1"
    },
    {
      "ID": 505,
      "SetNumber": 79103,
      "URL": "https://www.lego.com/biassets/bi/6036745.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6036745.png",
      "Description": "Turtle Lair Attack",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "79103-1"
    },
    {
      "ID": 506,
      "SetNumber": 79103,
      "URL": "https://www.lego.com/biassets/bi/6036747.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6036747.png",
      "Description": "Turtle Lair Attack",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "79103-1"
    },
    {
      "ID": 507,
      "SetNumber": 79103,
      "URL": "https://www.lego.com/biassets/bi/6090109.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6090109.png",
      "Description": "Turtle Lair Attack",
      "Notes": "BI 3019/68+4*- 79103 BOOK 2/2 V29",
      "DashedNumber": "79103-1"
    },
    {
      "ID": 508,
      "SetNumber": 79103,
      "URL": "https://www.lego.com/biassets/bi/6090116.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6090116.png",
      "Description": "Turtle Lair Attack",
      "Notes": "BI 3019/68+4*- 79103 BOOK 2/2 V39",
      "DashedNumber": "79103-1"
    },
    {
      "ID": 509,
      "SetNumber": 79104,
      "URL": "https://www.lego.com/biassets/bi/6070133.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6070133.png",
      "Description": "The Shellraiser Street Chase",
      "Notes": "BI 3016 80+4*-  79104 V110",
      "DashedNumber": "79104-1"
    },
    {
      "ID": 510,
      "SetNumber": 79104,
      "URL": "https://www.lego.com/biassets/bi/6070134.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6070134.png",
      "Description": "The Shellraiser Street Chase",
      "Notes": "BI 3016 80+4*- 79104 V140",
      "DashedNumber": "79104-1"
    },
    {
      "ID": 511,
      "SetNumber": 79104,
      "URL": "https://www.lego.com/biassets/bi/6036753.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6036753.png",
      "Description": "The Shellraiser Street Chase",
      "Notes": "BI 3016/76+4*- 79104 V29",
      "DashedNumber": "79104-1"
    },
    {
      "ID": 512,
      "SetNumber": 79104,
      "URL": "https://www.lego.com/biassets/bi/6036754.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6036754.png",
      "Description": "The Shellraiser Street Chase",
      "Notes": "BI 3016/76+4*- 79104 V39",
      "DashedNumber": "79104-1"
    },
    {
      "ID": 513,
      "SetNumber": 79105,
      "URL": "https://www.lego.com/biassets/bi/6042815.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6042815.png",
      "Description": "Baxter Robot Rampage",
      "Notes": "BI 3002/28 - 79105 BOOK 1/2 V29",
      "DashedNumber": "79105-1"
    },
    {
      "ID": 514,
      "SetNumber": 79105,
      "URL": "https://www.lego.com/biassets/bi/6042817.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6042817.png",
      "Description": "Baxter Robot Rampage",
      "Notes": "BI 3002/28 - 79105 BOOK 1/2 V39",
      "DashedNumber": "79105-1"
    },
    {
      "ID": 515,
      "SetNumber": 79105,
      "URL": "https://www.lego.com/biassets/bi/6042818.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6042818.png",
      "Description": "Baxter Robot Rampage",
      "Notes": "BI 3002/68+4*- 79105 BOOK 2/2 V29",
      "DashedNumber": "79105-1"
    },
    {
      "ID": 516,
      "SetNumber": 79105,
      "URL": "https://www.lego.com/biassets/bi/6042821.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6042821.png",
      "Description": "Baxter Robot Rampage",
      "Notes": "BI 3002/68+4*- 79105 BOOK 2/2 V39",
      "DashedNumber": "79105-1"
    },
    {
      "ID": 517,
      "SetNumber": 79106,
      "URL": "https://www.lego.com/biassets/bi/6045416.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6045416.png",
      "Description": "Cavalry Builder Set",
      "Notes": "BI 3001/28-65G 79106 V29 1/1",
      "DashedNumber": "79106-1"
    },
    {
      "ID": 518,
      "SetNumber": 79106,
      "URL": "https://www.lego.com/biassets/bi/6045417.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6045417.png",
      "Description": "Cavalry Builder Set",
      "Notes": "BI 3001/28-65G 79106 V39 1/1",
      "DashedNumber": "79106-1"
    },
    {
      "ID": 519,
      "SetNumber": 79107,
      "URL": "https://www.lego.com/biassets/bi/6051177.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6051177.png",
      "Description": "Comanche Camp",
      "Notes": "BI 3004/40 - 79107 V29 1/1",
      "DashedNumber": "79107-1"
    },
    {
      "ID": 520,
      "SetNumber": 79107,
      "URL": "https://www.lego.com/biassets/bi/6051181.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6051181.png",
      "Description": "Comanche Camp",
      "Notes": "BI 3004/40 - 79107 V39 1/1",
      "DashedNumber": "79107-1"
    },
    {
      "ID": 521,
      "SetNumber": 79108,
      "URL": "https://www.lego.com/biassets/bi/6045420.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6045420.png",
      "Description": "Stagecoach Escape",
      "Notes": "BI 3004/72+4*- 79108 V29 1/1",
      "DashedNumber": "79108-1"
    },
    {
      "ID": 522,
      "SetNumber": 79108,
      "URL": "https://www.lego.com/biassets/bi/6045422.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6045422.png",
      "Description": "Stagecoach Escape",
      "Notes": "BI 3004/72+4*- 79108 V39 1/1",
      "DashedNumber": "79108-1"
    },
    {
      "ID": 523,
      "SetNumber": 79109,
      "URL": "https://www.lego.com/biassets/bi/6051534.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6051534.png",
      "Description": "Colby City Showdown",
      "Notes": "BI 3017 / 60 - 65g 79109 V29 1/2",
      "DashedNumber": "79109-1"
    },
    {
      "ID": 524,
      "SetNumber": 79109,
      "URL": "https://www.lego.com/biassets/bi/6051535.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6051535.png",
      "Description": "Colby City Showdown",
      "Notes": "BI 3017 / 60 - 65g 79109 V39 1/2",
      "DashedNumber": "79109-1"
    },
    {
      "ID": 525,
      "SetNumber": 79109,
      "URL": "https://www.lego.com/biassets/bi/6051537.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6051537.png",
      "Description": "Colby City Showdown",
      "Notes": "BI 3017 / 64+4 - 65/115g 79109 V29 2/2",
      "DashedNumber": "79109-1"
    },
    {
      "ID": 526,
      "SetNumber": 79109,
      "URL": "https://www.lego.com/biassets/bi/6051538.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6051538.png",
      "Description": "Colby City Showdown",
      "Notes": "BI 3017 / 64+4 - 65/115g 79109 V39 2/2",
      "DashedNumber": "79109-1"
    },
    {
      "ID": 527,
      "SetNumber": 79110,
      "URL": "https://www.lego.com/biassets/bi/6058123.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6058123.png",
      "Description": "Silver Mine Shootout",
      "Notes": "BI 3016/68+4*- 79110 V29 2/2",
      "DashedNumber": "79110-1"
    },
    {
      "ID": 528,
      "SetNumber": 79110,
      "URL": "https://www.lego.com/biassets/bi/6058124.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6058124.png",
      "Description": "Silver Mine Shootout",
      "Notes": "BI 3016/68+4*- 79110 V39 2/2",
      "DashedNumber": "79110-1"
    },
    {
      "ID": 529,
      "SetNumber": 79110,
      "URL": "https://www.lego.com/biassets/bi/6058119.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6058119.png",
      "Description": "Silver Mine Shootout",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "79110-1"
    },
    {
      "ID": 530,
      "SetNumber": 79110,
      "URL": "https://www.lego.com/biassets/bi/6058120.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6058120.png",
      "Description": "Silver Mine Shootout",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "79110-1"
    },
    {
      "ID": 531,
      "SetNumber": 79110,
      "URL": "https://www.lego.com/biassets/bi/6063286.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6063286.png",
      "Description": "Silver Mine Shootout",
      "Notes": "BI 3016/76+4*- 79110 V29 1/2",
      "DashedNumber": "79110-1"
    },
    {
      "ID": 532,
      "SetNumber": 79110,
      "URL": "https://www.lego.com/biassets/bi/6063285.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6063285.png",
      "Description": "Silver Mine Shootout",
      "Notes": "BI 3016/76+4*- 79110 V39 1/2",
      "DashedNumber": "79110-1"
    },
    {
      "ID": 533,
      "SetNumber": 79111,
      "URL": "https://www.lego.com/biassets/bi/6063468.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6063468.png",
      "Description": "Constitution Train Chase",
      "Notes": "BI 3016/56 79111 V29 2/2",
      "DashedNumber": "79111-1"
    },
    {
      "ID": 534,
      "SetNumber": 79111,
      "URL": "https://www.lego.com/biassets/bi/6063469.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6063469.png",
      "Description": "Constitution Train Chase",
      "Notes": "BI 3016/56 79111 V39 2/2",
      "DashedNumber": "79111-1"
    },
    {
      "ID": 535,
      "SetNumber": 79111,
      "URL": "https://www.lego.com/biassets/bi/6045441.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6045441.png",
      "Description": "Constitution Train Chase",
      "Notes": "BI 3016 60/65g 79111 V29 1/2",
      "DashedNumber": "79111-1"
    },
    {
      "ID": 536,
      "SetNumber": 79111,
      "URL": "https://www.lego.com/biassets/bi/6045443.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6045443.png",
      "Description": "Constitution Train Chase",
      "Notes": "BI 3016 60/65g 79111 V39 1/2",
      "DashedNumber": "79111-1"
    },
    {
      "ID": 537,
      "SetNumber": 79115,
      "URL": "https://www.lego.com/biassets/bi/6083294.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6083294.png",
      "Description": "Turtle Van Takedown",
      "Notes": "BI 3004/28 79115 V29 1/2",
      "DashedNumber": "79115-1"
    },
    {
      "ID": 538,
      "SetNumber": 79115,
      "URL": "https://www.lego.com/biassets/bi/6083295.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6083295.png",
      "Description": "Turtle Van Takedown",
      "Notes": "BI 3004/28 79115 V39 1/2",
      "DashedNumber": "79115-1"
    },
    {
      "ID": 539,
      "SetNumber": 79115,
      "URL": "https://www.lego.com/biassets/bi/6083301.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6083301.png",
      "Description": "Turtle Van Takedown",
      "Notes": "BI 3004/64+4-65*- 79115 V29 2/2",
      "DashedNumber": "79115-1"
    },
    {
      "ID": 540,
      "SetNumber": 79115,
      "URL": "https://www.lego.com/biassets/bi/6083307.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6083307.png",
      "Description": "Turtle Van Takedown",
      "Notes": "BI 3004/64+4-65*- 79115 V39 2/2",
      "DashedNumber": "79115-1"
    },
    {
      "ID": 541,
      "SetNumber": 79116,
      "URL": "https://www.lego.com/biassets/bi/6083336.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6083336.png",
      "Description": "Big Rig Snow Getaway",
      "Notes": "BI 3004/40 - 79116 V29 1/3",
      "DashedNumber": "79116-1"
    },
    {
      "ID": 542,
      "SetNumber": 79116,
      "URL": "https://www.lego.com/biassets/bi/6083337.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6083337.png",
      "Description": "Big Rig Snow Getaway",
      "Notes": "BI 3004/40 - 79116 V39 1/3",
      "DashedNumber": "79116-1"
    },
    {
      "ID": 543,
      "SetNumber": 79116,
      "URL": "https://www.lego.com/biassets/bi/6090120.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6090120.png",
      "Description": "Big Rig Snow Getaway",
      "Notes": "BI 3004/64+4-65*-79116 V29 3/3",
      "DashedNumber": "79116-1"
    },
    {
      "ID": 544,
      "SetNumber": 79116,
      "URL": "https://www.lego.com/biassets/bi/6090122.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6090122.png",
      "Description": "Big Rig Snow Getaway",
      "Notes": "BI 3004/64+4-65*-79116 V39 3/3",
      "DashedNumber": "79116-1"
    },
    {
      "ID": 545,
      "SetNumber": 79116,
      "URL": "https://www.lego.com/biassets/bi/6090111.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6090111.png",
      "Description": "Big Rig Snow Getaway",
      "Notes": "BI 3017 / 72+4 - 65/115g-79116 V29 2/3",
      "DashedNumber": "79116-1"
    },
    {
      "ID": 546,
      "SetNumber": 79116,
      "URL": "https://www.lego.com/biassets/bi/6090117.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6090117.png",
      "Description": "Big Rig Snow Getaway",
      "Notes": "BI 3017 / 72+4 - 65/115g-79116 V39 2/3",
      "DashedNumber": "79116-1"
    },
    {
      "ID": 547,
      "SetNumber": 79117,
      "URL": "https://www.lego.com/biassets/bi/6090123.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6090123.png",
      "Description": "Turtle Lair Invasion",
      "Notes": "BI 3016/76+4*-79117 V29 2/2",
      "DashedNumber": "79117-1"
    },
    {
      "ID": 548,
      "SetNumber": 79117,
      "URL": "https://www.lego.com/biassets/bi/6090125.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6090125.png",
      "Description": "Turtle Lair Invasion",
      "Notes": "BI 3016/76+4*-79117 V39 2/2",
      "DashedNumber": "79117-1"
    },
    {
      "ID": 549,
      "SetNumber": 79117,
      "URL": "https://www.lego.com/biassets/bi/6097770.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6097770.png",
      "Description": "Turtle Lair Invasion",
      "Notes": "BI 3016/80+4/65+115g - 79117 V29 1/2",
      "DashedNumber": "79117-1"
    },
    {
      "ID": 550,
      "SetNumber": 79117,
      "URL": "https://www.lego.com/biassets/bi/6097772.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6097772.png",
      "Description": "Turtle Lair Invasion",
      "Notes": "BI 3016/80+4/65+115g - 79117 V39 1/2",
      "DashedNumber": "79117-1"
    },
    {
      "ID": 551,
      "SetNumber": 79118,
      "URL": "https://www.lego.com/biassets/bi/6083338.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6083338.png",
      "Description": "Karai Bike Escape",
      "Notes": "BI 3001/36-65G 79118 v29",
      "DashedNumber": "79118-1"
    },
    {
      "ID": 552,
      "SetNumber": 79118,
      "URL": "https://www.lego.com/biassets/bi/6083341.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6083341.png",
      "Description": "Karai Bike Escape",
      "Notes": "BI 3001/36-65G 79118 v39",
      "DashedNumber": "79118-1"
    },
    {
      "ID": 553,
      "SetNumber": 79119,
      "URL": "https://www.lego.com/biassets/bi/6083380.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6083380.png",
      "Description": "Mutation Chamber Unleashed",
      "Notes": "BI 3018/60-65g 79119 v29",
      "DashedNumber": "79119-1"
    },
    {
      "ID": 554,
      "SetNumber": 79119,
      "URL": "https://www.lego.com/biassets/bi/6083381.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6083381.png",
      "Description": "Mutation Chamber Unleashed",
      "Notes": "BI 3018/60-65g 79119 v39",
      "DashedNumber": "79119-1"
    },
    {
      "ID": 555,
      "SetNumber": 79120,
      "URL": "https://www.lego.com/biassets/bi/6083333.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6083333.png",
      "Description": "T-Rawket Sky Strike",
      "Notes": "BI 3004/28 79120 2/2 v29",
      "DashedNumber": "79120-1"
    },
    {
      "ID": 556,
      "SetNumber": 79120,
      "URL": "https://www.lego.com/biassets/bi/6083335.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6083335.png",
      "Description": "T-Rawket Sky Strike",
      "Notes": "BI 3004/28 79120 2/2 v39",
      "DashedNumber": "79120-1"
    },
    {
      "ID": 557,
      "SetNumber": 79120,
      "URL": "https://www.lego.com/biassets/bi/6092972.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6092972.png",
      "Description": "T-Rawket Sky Strike",
      "Notes": "BI 3004/56 - 79120 1/2 v29",
      "DashedNumber": "79120-1"
    },
    {
      "ID": 558,
      "SetNumber": 79120,
      "URL": "https://www.lego.com/biassets/bi/6092973.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6092973.png",
      "Description": "T-Rawket Sky Strike",
      "Notes": "BI 3004/56 - 79120 1/2 v39",
      "DashedNumber": "79120-1"
    },
    {
      "ID": 559,
      "SetNumber": 79121,
      "URL": "https://www.lego.com/biassets/bi/6083327.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6083327.png",
      "Description": "Turtle Sub Undersea Chase",
      "Notes": "BI 3016/76+4*- 79121 v29",
      "DashedNumber": "79121-1"
    },
    {
      "ID": 560,
      "SetNumber": 79121,
      "URL": "https://www.lego.com/biassets/bi/6083328.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6083328.png",
      "Description": "Turtle Sub Undersea Chase",
      "Notes": "BI 3016/76+4*- 79121 v39",
      "DashedNumber": "79121-1"
    },
    {
      "ID": 561,
      "SetNumber": 79122,
      "URL": "https://www.lego.com/biassets/bi/6083314.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6083314.png",
      "Description": "Shredders Lair Rescue",
      "Notes": "BI 3017 / 44 - 65g 70122 2/2 v29",
      "DashedNumber": "79122-1"
    },
    {
      "ID": 562,
      "SetNumber": 79122,
      "URL": "https://www.lego.com/biassets/bi/6083316.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6083316.png",
      "Description": "Shredders Lair Rescue",
      "Notes": "BI 3017 / 44 - 65g 70122 2/2 v39",
      "DashedNumber": "79122-1"
    },
    {
      "ID": 563,
      "SetNumber": 79122,
      "URL": "https://www.lego.com/biassets/bi/6090128.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6090128.png",
      "Description": "Shredders Lair Rescue",
      "Notes": "BI 3017 / 72+4 - 65/115g-79122 V29 1/2",
      "DashedNumber": "79122-1"
    },
    {
      "ID": 564,
      "SetNumber": 79122,
      "URL": "https://www.lego.com/biassets/bi/6090130.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6090130.png",
      "Description": "Shredders Lair Rescue",
      "Notes": "BI 3017 / 72+4 - 65/115g-79122 V39 1/2",
      "DashedNumber": "79122-1"
    },
    {
      "ID": 565,
      "SetNumber": 852293,
      "URL": "https://www.lego.com/biassets/bi/852293.pdf",
      "Images": "https://www.lego.com/biassets/biimg/852293.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "852293-1"
    },
    {
      "ID": 566,
      "SetNumber": 852331,
      "URL": "https://www.lego.com/biassets/bi/862331.pdf",
      "Images": "https://www.lego.com/biassets/biimg/862331.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "852331-1"
    },
    {
      "ID": 567,
      "SetNumber": 853175,
      "URL": "https://www.lego.com/biassets/bi/4630375.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4630375.png",
      "Description": "Pharaohs Quest Coin Bank",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "853175-1"
    },
    {
      "ID": 568,
      "SetNumber": 2000414,
      "URL": "https://www.lego.com/biassets/bi/4626038.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4626038.png",
      "Description": "LSP Starter Kit",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2000414-1"
    },
    {
      "ID": 569,
      "SetNumber": 3300000,
      "URL": "https://www.lego.com/biassets/bi/4618463.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4618463.png",
      "Description": "The Brick Apple",
      "Notes": "BI 3001/24 - 3300000 v17",
      "DashedNumber": "3300000-1"
    },
    {
      "ID": 570,
      "SetNumber": 3300001,
      "URL": "https://www.lego.com/biassets/bi/4652540.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4652540.png",
      "Description": "Brickley",
      "Notes": "BI 3003/36- 3300001 v46",
      "DashedNumber": "3300001-1"
    },
    {
      "ID": 571,
      "SetNumber": 3300002,
      "URL": "https://www.lego.com/biassets/bi/6008341.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6008341.png",
      "Description": "Fire Place Scene",
      "Notes": "BI 3003/20 - 3300002 FIRE PLACE V46",
      "DashedNumber": "3300002-1"
    },
    {
      "ID": 572,
      "SetNumber": 3300003,
      "URL": "https://www.lego.com/biassets/bi/6013902.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6013902.png",
      "Description": "Brand Retail Store",
      "Notes": "BI 3004/44 - ART 3300003",
      "DashedNumber": "3300003-1"
    },
    {
      "ID": 573,
      "SetNumber": 3300005,
      "URL": "https://www.lego.com/biassets/bi/4649835.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4649835.png",
      "Description": "CPH Waterfront",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3300005-1"
    },
    {
      "ID": 574,
      "SetNumber": 3300006,
      "URL": "https://www.lego.com/biassets/bi/4650140.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4650140.png",
      "Description": "London Brand Retail",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3300006-1"
    },
    {
      "ID": 575,
      "SetNumber": 3300014,
      "URL": "https://www.lego.com/biassets/bi/6039593.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6039593.png",
      "Description": "Black Friday 12",
      "Notes": "BI 3003/24 - 3300014 V46",
      "DashedNumber": "3300014-1"
    },
    {
      "ID": 576,
      "SetNumber": 3300020,
      "URL": "https://www.lego.com/biassets/bi/6008342.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6008342.png",
      "Description": "Christmas Tree Scene",
      "Notes": "BI 3003/20 - 3300020 V46 CHRISTMAS TREE",
      "DashedNumber": "3300020-1"
    },
    {
      "ID": 577,
      "SetNumber": 4000001,
      "URL": "https://www.lego.com/biassets/bi/4662165.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4662165.png",
      "Description": "LEGO Inside Tour 2011",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "4000001-1"
    },
    {
      "ID": 578,
      "SetNumber": 4000001,
      "URL": "https://www.lego.com/biassets/bi/4667956.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4667956.png",
      "Description": "LEGO Inside Tour 2011",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "4000001-1"
    },
    {
      "ID": 579,
      "SetNumber": 4000002,
      "URL": "https://www.lego.com/biassets/bi/6005919.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6005919.png",
      "Description": "LOM Moulding 2011",
      "Notes": "BI 3004/44+4-115+150g ART 4000002",
      "DashedNumber": "4000002-1"
    },
    {
      "ID": 580,
      "SetNumber": 4000004,
      "URL": "https://www.lego.com/biassets/bi/6028335.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6028335.png",
      "Description": "Systematic Creativity Toolbox",
      "Notes": "BI 3004 36+4 115+150, 4000004 v46",
      "DashedNumber": "4000004-1"
    },
    {
      "ID": 581,
      "SetNumber": 4000005,
      "URL": "https://www.lego.com/biassets/bi/6032205.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6032205.png",
      "Description": "Kornmarken Factory 2012",
      "Notes": "BI 3004/56+4-/115g+150g - 4000005 v.29",
      "DashedNumber": "4000005-1"
    },
    {
      "ID": 582,
      "SetNumber": 4000006,
      "URL": "https://www.lego.com/biassets/bi/6035024.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6035024.png",
      "Description": "Production Kladno Campus 2012",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "4000006-1"
    },
    {
      "ID": 583,
      "SetNumber": 4000008,
      "URL": "https://www.lego.com/biassets/bi/6059259.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6059259.png",
      "Description": "LEGO Inside Tour 2013",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "4000008-1"
    },
    {
      "ID": 584,
      "SetNumber": 4000012,
      "URL": "https://www.lego.com/biassets/bi/6031016.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6031016.png",
      "Description": "LEGO Inside Tour 2012",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "4000012-1"
    },
    {
      "ID": 585,
      "SetNumber": 4000012,
      "URL": "https://www.lego.com/biassets/bi/6031018.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6031018.png",
      "Description": "LEGO Inside Tour 2012",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "4000012-1"
    },
    {
      "ID": 586,
      "SetNumber": 4000014,
      "URL": "https://www.lego.com/biassets/bi/6103974.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6103974.png",
      "Description": "LEGO Inside Tour 2014",
      "Notes": "BI 3019/48+4/65+115g - 40000014 v.24",
      "DashedNumber": "4000014-1"
    },
    {
      "ID": 587,
      "SetNumber": 4000015,
      "URL": "https://www.lego.com/biassets/bi/6105821.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6105821.png",
      "Description": "LOM Packing 2014",
      "Notes": "BI 3004 52 + 4 - 115 + 150 - 4000015",
      "DashedNumber": "4000015-1"
    },
    {
      "ID": 588,
      "SetNumber": 4000018,
      "URL": "https://www.lego.com/biassets/bi/6129321.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6129321.png",
      "Description": "Kladno Campus 2015",
      "Notes": "BI 3018/80+4/115+150g, 4000018, V110",
      "DashedNumber": "4000018-1"
    },
    {
      "ID": 589,
      "SetNumber": 260,
      "URL": "https://www.lego.com/biassets/bi/120086.pdf",
      "Images": "https://www.lego.com/biassets/biimg/120086.png",
      "Description": "BUILDING BOOK",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "260-1"
    },
    {
      "ID": 590,
      "SetNumber": 260,
      "URL": "https://www.lego.com/biassets/bi/120087.pdf",
      "Images": "https://www.lego.com/biassets/biimg/120087.png",
      "Description": "BUILDING BOOK",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "260-1"
    },
    {
      "ID": 591,
      "SetNumber": 624,
      "URL": "https://www.lego.com/biassets/bi/4105065.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4105065.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "624-1"
    },
    {
      "ID": 592,
      "SetNumber": 697,
      "URL": "https://www.lego.com/biassets/bi/4108423.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4108423.png",
      "Description": "Ideas Book",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "697-1"
    },
    {
      "ID": 593,
      "SetNumber": 697,
      "URL": "https://www.lego.com/biassets/bi/4109085.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4109085.png",
      "Description": "Ideas Book",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "697-1"
    },
    {
      "ID": 594,
      "SetNumber": 1029,
      "URL": "https://www.lego.com/biassets/bi/4129147.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4129147.png",
      "Description": "MILK CART",
      "Notes": "BUILDING INST. FOR 1029",
      "DashedNumber": "1029-1"
    },
    {
      "ID": 595,
      "SetNumber": 1054,
      "URL": "https://www.lego.com/biassets/bi/4129304.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4129304.png",
      "Description": "P&O STENA LINE FERRY",
      "Notes": "BUILD. INST. FOR 1054",
      "DashedNumber": "1054-1"
    },
    {
      "ID": 596,
      "SetNumber": 1068,
      "URL": "https://www.lego.com/biassets/bi/4128300.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4128300.png",
      "Description": "2849 AIIR PATROL ",
      "Notes": "BUILDING INSTR. FOR 1068",
      "DashedNumber": "1068-1"
    },
    {
      "ID": 597,
      "SetNumber": 1069,
      "URL": "https://www.lego.com/biassets/bi/4128301.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4128301.png",
      "Description": "2882 SPEED BOAT ",
      "Notes": "BUILDING INSTR. FOR 1069",
      "DashedNumber": "1069-1"
    },
    {
      "ID": 598,
      "SetNumber": 1070,
      "URL": "https://www.lego.com/biassets/bi/4128302.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4128302.png",
      "Description": "2884 PLANE ",
      "Notes": "BUILDING INSTR. FOR 1070",
      "DashedNumber": "1070-1"
    },
    {
      "ID": 599,
      "SetNumber": 1088,
      "URL": "https://www.lego.com/biassets/bi/4128303.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4128303.png",
      "Description": "2886 ROAD RACER ",
      "Notes": "BUILDING INSTR. FOR 1088",
      "DashedNumber": "1088-1"
    },
    {
      "ID": 600,
      "SetNumber": 1095,
      "URL": "https://www.lego.com/biassets/bi/4128305.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4128305.png",
      "Description": "6100 SUPER SUB ",
      "Notes": "BUILDING INSTR. FOR 1095",
      "DashedNumber": "1095-1"
    },
    {
      "ID": 601,
      "SetNumber": 1096,
      "URL": "https://www.lego.com/biassets/bi/4128306.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4128306.png",
      "Description": "6400 RACE BUGGY ",
      "Notes": "BUILDING INSTR. FOR 1096",
      "DashedNumber": "1096-1"
    },
    {
      "ID": 602,
      "SetNumber": 1097,
      "URL": "https://www.lego.com/biassets/bi/4128297.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4128297.png",
      "Description": "6415 RES-Q RUNNER ",
      "Notes": "BUILDING INSTR. FOR 1097",
      "DashedNumber": "1097-1"
    },
    {
      "ID": 603,
      "SetNumber": 1098,
      "URL": "https://www.lego.com/biassets/bi/4128298.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4128298.png",
      "Description": "6585 HANG GLIDER ",
      "Notes": "BUILDING INSTR. FOR 1098",
      "DashedNumber": "1098-1"
    },
    {
      "ID": 604,
      "SetNumber": 1099,
      "URL": "https://www.lego.com/biassets/bi/4128299.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4128299.png",
      "Description": "3016 NINJA BLASTER ",
      "Notes": "BUILDING INSTR. FOR 1099",
      "DashedNumber": "1099-1"
    },
    {
      "ID": 605,
      "SetNumber": 1100,
      "URL": "https://www.lego.com/biassets/bi/4133627.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4133627.png",
      "Description": "SKY PIRATES  INFLIGHT",
      "Notes": "BUILD INST. 1100",
      "DashedNumber": "1100-1"
    },
    {
      "ID": 606,
      "SetNumber": 1106,
      "URL": "https://www.lego.com/biassets/bi/4128695.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4128695.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "1106-2"
    },
    {
      "ID": 607,
      "SetNumber": 1127,
      "URL": "https://www.lego.com/biassets/bi/4129483.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4129483.png",
      "Description": "SANTA CLAUS",
      "Notes": "BUILD.INST. FOR 1127 IN",
      "DashedNumber": "1127-1"
    },
    {
      "ID": 608,
      "SetNumber": 1128,
      "URL": "https://www.lego.com/biassets/bi/4129484.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4129484.png",
      "Description": "SKIING SANTA",
      "Notes": "BUILD.INST. FOR 1128 IN",
      "DashedNumber": "1128-1"
    },
    {
      "ID": 609,
      "SetNumber": 1129,
      "URL": "https://www.lego.com/biassets/bi/4129485.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4129485.png",
      "Description": "REINDEER WITH ELF",
      "Notes": "BUILD. INST. FOR 1129 IN",
      "DashedNumber": "1129-2"
    },
    {
      "ID": 610,
      "SetNumber": 1149,
      "URL": "https://www.lego.com/biassets/bi/4133626.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4133626.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "1149-1"
    },
    {
      "ID": 611,
      "SetNumber": 1177,
      "URL": "https://www.lego.com/biassets/bi/4154115.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4154115.png",
      "Description": "SANTAS TRUCK",
      "Notes": "BI 1177 IN",
      "DashedNumber": "1177-1"
    },
    {
      "ID": 612,
      "SetNumber": 1180,
      "URL": "https://www.lego.com/biassets/bi/4128346.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4128346.png",
      "Description": "RADAR CAR",
      "Notes": "BUILD INSTRUCTION FOR 1180",
      "DashedNumber": "1180-1"
    },
    {
      "ID": 613,
      "SetNumber": 1181,
      "URL": "https://www.lego.com/biassets/bi/4128347.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4128347.png",
      "Description": "SPACE JET",
      "Notes": "BUILD INSTRUCTION FOR 1181",
      "DashedNumber": "1181-1"
    },
    {
      "ID": 614,
      "SetNumber": 1182,
      "URL": "https://www.lego.com/biassets/bi/4128311.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4128311.png",
      "Description": "SMALL RAFT",
      "Notes": "BUILDING INST. FOR 1182",
      "DashedNumber": "1182-1"
    },
    {
      "ID": 615,
      "SetNumber": 1183,
      "URL": "https://www.lego.com/biassets/bi/4128312.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4128312.png",
      "Description": "MUMMY WITH SMALL CAR",
      "Notes": "BUILD.INST. FOR 1183",
      "DashedNumber": "1183-1"
    },
    {
      "ID": 616,
      "SetNumber": 1184,
      "URL": "https://www.lego.com/biassets/bi/4128313.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4128313.png",
      "Description": "CART WITH CANNON\"\"",
      "Notes": "BUILD.INST. FOR 1184",
      "DashedNumber": "1184-1"
    },
    {
      "ID": 617,
      "SetNumber": 1185,
      "URL": "https://www.lego.com/biassets/bi/4128314.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4128314.png",
      "Description": "NINJA WITH RAFT",
      "Notes": "BUILD.INST. FOR 1185",
      "DashedNumber": "1185-1"
    },
    {
      "ID": 618,
      "SetNumber": 1186,
      "URL": "https://www.lego.com/biassets/bi/4128315.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4128315.png",
      "Description": "NINJA WITH SWORDS",
      "Notes": "BUILDING INST. FOR 1186",
      "DashedNumber": "1186-1"
    },
    {
      "ID": 619,
      "SetNumber": 1187,
      "URL": "https://www.lego.com/biassets/bi/4128316.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4128316.png",
      "Description": "FLYING NINJA",
      "Notes": "BUILD.INST. FOR 1187",
      "DashedNumber": "1187-1"
    },
    {
      "ID": 620,
      "SetNumber": 1188,
      "URL": "https://www.lego.com/biassets/bi/4129324.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4129324.png",
      "Description": "DRAGSTER",
      "Notes": "BUILD.INST. FOR 1188",
      "DashedNumber": "1188-1"
    },
    {
      "ID": 621,
      "SetNumber": 1189,
      "URL": "https://www.lego.com/biassets/bi/4129325.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4129325.png",
      "Description": "BOAT",
      "Notes": "BUILD.INST. FOR 1189",
      "DashedNumber": "1189-1"
    },
    {
      "ID": 622,
      "SetNumber": 1190,
      "URL": "https://www.lego.com/biassets/bi/4129326.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4129326.png",
      "Description": "CAR",
      "Notes": "BUILD.INST. FOR 1190",
      "DashedNumber": "1190-1"
    },
    {
      "ID": 623,
      "SetNumber": 1191,
      "URL": "https://www.lego.com/biassets/bi/4129327.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4129327.png",
      "Description": "AIR PLANE",
      "Notes": "BUILD.INST. FOR 1191",
      "DashedNumber": "1191-1"
    },
    {
      "ID": 624,
      "SetNumber": 1195,
      "URL": "https://www.lego.com/biassets/bi/4155450.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4155450.png",
      "Description": "ALIEN ENCOUNTER",
      "Notes": "BI 1195",
      "DashedNumber": "1195-1"
    },
    {
      "ID": 625,
      "SetNumber": 1197,
      "URL": "https://www.lego.com/biassets/bi/4131316.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4131316.png",
      "Description": "DT MOTOR BIKE W/CAMERA",
      "Notes": "BUILD.INST. 1197 IN",
      "DashedNumber": "1197-1"
    },
    {
      "ID": 626,
      "SetNumber": 1198,
      "URL": "https://www.lego.com/biassets/bi/4131317.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4131317.png",
      "Description": "DT BIKE PIT STOP",
      "Notes": "BUILD.INST. 1198 IN",
      "DashedNumber": "1198-1"
    },
    {
      "ID": 627,
      "SetNumber": 1199,
      "URL": "https://www.lego.com/biassets/bi/4131318.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4131318.png",
      "Description": "DT MAN.CAR AND TRIBUNE",
      "Notes": "BUILD. INST. 1199 IN",
      "DashedNumber": "1199-1"
    },
    {
      "ID": 628,
      "SetNumber": 1246,
      "URL": "https://www.lego.com/biassets/bi/4129318.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4129318.png",
      "Description": "POLICE HELICOPTER",
      "Notes": "BUILD.INST FOR 1246",
      "DashedNumber": "1246-1"
    },
    {
      "ID": 629,
      "SetNumber": 1247,
      "URL": "https://www.lego.com/biassets/bi/4129319.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4129319.png",
      "Description": "POLICE PATROL CAR",
      "Notes": "BUILD.INST. FOR 1247",
      "DashedNumber": "1247-1"
    },
    {
      "ID": 630,
      "SetNumber": 1248,
      "URL": "https://www.lego.com/biassets/bi/4129320.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4129320.png",
      "Description": "FIRE BOAT",
      "Notes": "BUILD. INST. FOR 1248",
      "DashedNumber": "1248-1"
    },
    {
      "ID": 631,
      "SetNumber": 1249,
      "URL": "https://www.lego.com/biassets/bi/4129321.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4129321.png",
      "Description": "PARAMEDIC ON MOTORCYCLE",
      "Notes": "BUILD.INST. FOR 1249",
      "DashedNumber": "1249-1"
    },
    {
      "ID": 632,
      "SetNumber": 1250,
      "URL": "https://www.lego.com/biassets/bi/4129322.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4129322.png",
      "Description": "SHELL DRAGSTER",
      "Notes": "BUILD. INST. FOR 1250",
      "DashedNumber": "1250-1"
    },
    {
      "ID": 633,
      "SetNumber": 1251,
      "URL": "https://www.lego.com/biassets/bi/4129323.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4129323.png",
      "Description": "SHELL GO-CART",
      "Notes": "BUILD. INST. FOR 1251",
      "DashedNumber": "1251-1"
    },
    {
      "ID": 634,
      "SetNumber": 1252,
      "URL": "https://www.lego.com/biassets/bi/4129333.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4129333.png",
      "Description": "SHELL TANKER",
      "Notes": "BUILD. INST FOR 1252",
      "DashedNumber": "1252-1"
    },
    {
      "ID": 635,
      "SetNumber": 1253,
      "URL": "https://www.lego.com/biassets/bi/4129334.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4129334.png",
      "Description": "FORMULA 1 TRANSPORT",
      "Notes": "BUILD. INST. FOR 1253",
      "DashedNumber": "1253-1"
    },
    {
      "ID": 636,
      "SetNumber": 1254,
      "URL": "https://www.lego.com/biassets/bi/4129486.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4129486.png",
      "Description": "SELECT SHOP",
      "Notes": "BUILD.INST. FOR 1254",
      "DashedNumber": "1254-1"
    },
    {
      "ID": 637,
      "SetNumber": 1255,
      "URL": "https://www.lego.com/biassets/bi/4129480.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4129480.png",
      "Description": "CAR WASH",
      "Notes": "BUILD.INST. FOR 1255",
      "DashedNumber": "1255-1"
    },
    {
      "ID": 638,
      "SetNumber": 1256,
      "URL": "https://www.lego.com/biassets/bi/4129481.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4129481.png",
      "Description": "SHELL TANK STATION",
      "Notes": "BUILD.INST. FOR 1256",
      "DashedNumber": "1256-1"
    },
    {
      "ID": 639,
      "SetNumber": 1257,
      "URL": "https://www.lego.com/biassets/bi/4129254.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4129254.png",
      "Description": "JUMPING TRIKE",
      "Notes": "BUILDING INSTR. 1257",
      "DashedNumber": "1257-1"
    },
    {
      "ID": 640,
      "SetNumber": 1258,
      "URL": "https://www.lego.com/biassets/bi/4129255.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4129255.png",
      "Description": "PROPELLER CAR",
      "Notes": "BUILDING INSTR. 1258",
      "DashedNumber": "1258-1"
    },
    {
      "ID": 641,
      "SetNumber": 1259,
      "URL": "https://www.lego.com/biassets/bi/4129274.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4129274.png",
      "Description": "MOTOR CYCLE",
      "Notes": "BUILDING INSTR. 1259",
      "DashedNumber": "1259-1"
    },
    {
      "ID": 642,
      "SetNumber": 1260,
      "URL": "https://www.lego.com/biassets/bi/4129275.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4129275.png",
      "Description": "PISTON CAR",
      "Notes": "BUILDING INSTR. 1260",
      "DashedNumber": "1260-1"
    },
    {
      "ID": 643,
      "SetNumber": 1263,
      "URL": "https://www.lego.com/biassets/bi/4132573.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4132573.png",
      "Description": "EASTER BUNNY WITH FLOWER",
      "Notes": "BUILD. INST. FOR 1263",
      "DashedNumber": "1263-1"
    },
    {
      "ID": 644,
      "SetNumber": 1264,
      "URL": "https://www.lego.com/biassets/bi/4132574.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4132574.png",
      "Description": "HEN WITH CHICKEN",
      "Notes": "BUILD. INST. FOR 1264 IN",
      "DashedNumber": "1264-1"
    },
    {
      "ID": 645,
      "SetNumber": 1265,
      "URL": "https://www.lego.com/biassets/bi/4132640.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4132640.png",
      "Description": "MOON BUGGY OLD 1180",
      "Notes": "BUILD.INST. FOR 1265",
      "DashedNumber": "1265-1"
    },
    {
      "ID": 646,
      "SetNumber": 1266,
      "URL": "https://www.lego.com/biassets/bi/4132641.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4132641.png",
      "Description": "SPACE PROBE OLD 1181",
      "Notes": "BUILD.INST FOR 1266",
      "DashedNumber": "1266-1"
    },
    {
      "ID": 647,
      "SetNumber": 1268,
      "URL": "https://www.lego.com/biassets/bi/4132639.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4132639.png",
      "Description": "BIKE BLASTER OLD 3003",
      "Notes": "BUILD.INST FOR 1268",
      "DashedNumber": "1268-1"
    },
    {
      "ID": 648,
      "SetNumber": 1269,
      "URL": "https://www.lego.com/biassets/bi/4132642.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4132642.png",
      "Description": "WHITE NINJA OLD 3076",
      "Notes": "BUILD.INST. FOR 1269 AM",
      "DashedNumber": "1269-1"
    },
    {
      "ID": 649,
      "SetNumber": 1271,
      "URL": "https://www.lego.com/biassets/bi/4132643.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4132643.png",
      "Description": "JUNGLE SURPRICE OLD 5905",
      "Notes": "BUILD.INSTR. FOR 1271",
      "DashedNumber": "1271-1"
    },
    {
      "ID": 650,
      "SetNumber": 1274,
      "URL": "https://www.lego.com/biassets/bi/4132577.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4132577.png",
      "Description": "HOVERCRAFT WITH SEARCHLIGHT",
      "Notes": "BUILD.INST. FOR 1274 IN",
      "DashedNumber": "1274-1"
    },
    {
      "ID": 651,
      "SetNumber": 1275,
      "URL": "https://www.lego.com/biassets/bi/4132644.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4132644.png",
      "Description": "CAR WITH CICULAR SAWS",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "1275-1"
    },
    {
      "ID": 652,
      "SetNumber": 1276,
      "URL": "https://www.lego.com/biassets/bi/4132645.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4132645.png",
      "Description": "HELICOPTER",
      "Notes": "BUILD.INSTR. FOR 1276 IN",
      "DashedNumber": "1276-1"
    },
    {
      "ID": 653,
      "SetNumber": 1277,
      "URL": "https://www.lego.com/biassets/bi/4132646.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4132646.png",
      "Description": "HOVERCRAFT WITH ICE SAWS",
      "Notes": "BUILD.INSTR. FOR 1277 IN",
      "DashedNumber": "1277-1"
    },
    {
      "ID": 654,
      "SetNumber": 1285,
      "URL": "https://www.lego.com/biassets/bi/4132653.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4132653.png",
      "Description": "YELLOW RACER BOAT",
      "Notes": "BUILDINST. FOR 1285 IN",
      "DashedNumber": "1285-1"
    },
    {
      "ID": 655,
      "SetNumber": 1286,
      "URL": "https://www.lego.com/biassets/bi/4132672.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4132672.png",
      "Description": "KING WITH CHART",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "1286-1"
    },
    {
      "ID": 656,
      "SetNumber": 1288,
      "URL": "https://www.lego.com/biassets/bi/4129493.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4129493.png",
      "Description": "Also 4807-1",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "1288-1"
    },
    {
      "ID": 657,
      "SetNumber": 1289,
      "URL": "https://www.lego.com/biassets/bi/4132673.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4132673.png",
      "Description": "SMALL CATAPULT",
      "Notes": "BUILD. INST FOR 1289 IN",
      "DashedNumber": "1289-1"
    },
    {
      "ID": 658,
      "SetNumber": 1290,
      "URL": "https://www.lego.com/biassets/bi/4132920.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4132920.png",
      "Description": "VOLCANO CLIMBER",
      "Notes": "BUILDING INSTR. 1290",
      "DashedNumber": "1290-1"
    },
    {
      "ID": 659,
      "SetNumber": 1291,
      "URL": "https://www.lego.com/biassets/bi/4132921.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4132921.png",
      "Description": "DIRT BIKE",
      "Notes": "BUILD. INSTR. 1291",
      "DashedNumber": "1291-1"
    },
    {
      "ID": 660,
      "SetNumber": 1292,
      "URL": "https://www.lego.com/biassets/bi/4132922.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4132922.png",
      "Description": "ICE EXPLORER",
      "Notes": "BUILD.INSTR. 1292",
      "DashedNumber": "1292-1"
    },
    {
      "ID": 661,
      "SetNumber": 1293,
      "URL": "https://www.lego.com/biassets/bi/4132923.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4132923.png",
      "Description": "SWAMP CRAFT",
      "Notes": "BUILD. INSTR. 1293",
      "DashedNumber": "1293-1"
    },
    {
      "ID": 662,
      "SetNumber": 1294,
      "URL": "https://www.lego.com/biassets/bi/4133285.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4133285.png",
      "Description": "FIRE HELICOPTER",
      "Notes": "BUILD.INSTR. 1294",
      "DashedNumber": "1294-1"
    },
    {
      "ID": 663,
      "SetNumber": 1295,
      "URL": "https://www.lego.com/biassets/bi/4133286.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4133286.png",
      "Description": "HOVERCRAFT",
      "Notes": "BUILD.INSTR. 1295",
      "DashedNumber": "1295-1"
    },
    {
      "ID": 664,
      "SetNumber": 1296,
      "URL": "https://www.lego.com/biassets/bi/4133287.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4133287.png",
      "Description": "EXCAVATOR",
      "Notes": "BUILD.INSTR. 1296",
      "DashedNumber": "1296-1"
    },
    {
      "ID": 665,
      "SetNumber": 1297,
      "URL": "https://www.lego.com/biassets/bi/4133288.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4133288.png",
      "Description": "POLICE CAR",
      "Notes": "BUILD.INSTR. 1297",
      "DashedNumber": "1297-1"
    },
    {
      "ID": 666,
      "SetNumber": 1349,
      "URL": "https://www.lego.com/biassets/bi/4130816.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4130816.png",
      "Description": "Truck & Dino",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "1349-1"
    },
    {
      "ID": 667,
      "SetNumber": 1349,
      "URL": "https://www.lego.com/biassets/bi/4130821.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4130821.png",
      "Description": "Explosion Studio",
      "Notes": "BUILDING INSTR. 1352",
      "DashedNumber": "1349-1"
    },
    {
      "ID": 668,
      "SetNumber": 1351,
      "URL": "https://www.lego.com/biassets/bi/4130802.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4130802.png",
      "Description": "Moving Backdrop Studio",
      "Notes": "BULDING INSTR. 1351",
      "DashedNumber": "1351-1"
    },
    {
      "ID": 669,
      "SetNumber": 1353,
      "URL": "https://www.lego.com/biassets/bi/4130822.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4130822.png",
      "Description": "Car Stunt Studio",
      "Notes": "BUILDING INSTR. FOR 1353",
      "DashedNumber": "1353-1"
    },
    {
      "ID": 670,
      "SetNumber": 1354,
      "URL": "https://www.lego.com/biassets/bi/4130823.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4130823.png",
      "Description": "Dino Head Attack",
      "Notes": "BUILDING INSTR. FOR 1354",
      "DashedNumber": "1354-1"
    },
    {
      "ID": 671,
      "SetNumber": 1355,
      "URL": "https://www.lego.com/biassets/bi/4130824.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4130824.png",
      "Description": "Temple of Gloom",
      "Notes": "BUILDING INSTR. 1355",
      "DashedNumber": "1355-1"
    },
    {
      "ID": 672,
      "SetNumber": 1356,
      "URL": "https://www.lego.com/biassets/bi/4130825.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4130825.png",
      "Description": "Stuntman Catapult",
      "Notes": "BI 1356",
      "DashedNumber": "1356-1"
    },
    {
      "ID": 673,
      "SetNumber": 1357,
      "URL": "https://www.lego.com/biassets/bi/4130826.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4130826.png",
      "Description": "Cameraman",
      "Notes": "BI 1357",
      "DashedNumber": "1357-1"
    },
    {
      "ID": 674,
      "SetNumber": 1360,
      "URL": "https://www.lego.com/biassets/bi/4156208.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4156208.png",
      "Description": "DIRECTORS COPTER",
      "Notes": "BI 1360",
      "DashedNumber": "1360-1"
    },
    {
      "ID": 675,
      "SetNumber": 1361,
      "URL": "https://www.lego.com/biassets/bi/4156209.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4156209.png",
      "Description": "CAMERA CAR",
      "Notes": "BI 1361",
      "DashedNumber": "1361-1"
    },
    {
      "ID": 676,
      "SetNumber": 1362,
      "URL": "https://www.lego.com/biassets/bi/4156210.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4156210.png",
      "Description": "AIR BOAT",
      "Notes": "BI 1362",
      "DashedNumber": "1362-1"
    },
    {
      "ID": 677,
      "SetNumber": 1363,
      "URL": "https://www.lego.com/biassets/bi/4156211.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4156211.png",
      "Description": "STUNT GO-CART",
      "Notes": "BI 1363",
      "DashedNumber": "1363-1"
    },
    {
      "ID": 678,
      "SetNumber": 1370,
      "URL": "https://www.lego.com/biassets/bi/4161750.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4161750.png",
      "Description": "Raptor Rumble Studio",
      "Notes": "BI 1370",
      "DashedNumber": "1370-1"
    },
    {
      "ID": 679,
      "SetNumber": 1371,
      "URL": "https://www.lego.com/biassets/bi/4161787.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4161787.png",
      "Description": "Spinosaurus Attack Studio",
      "Notes": "BI 1371",
      "DashedNumber": "1371-1"
    },
    {
      "ID": 680,
      "SetNumber": 1374,
      "URL": "https://www.lego.com/biassets/bi/4182046.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4182046.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "1374-1"
    },
    {
      "ID": 681,
      "SetNumber": 1374,
      "URL": "https://www.lego.com/biassets/bi/4201445.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4201445.png",
      "Description": "Green Goblin �",
      "Notes": "BI 1374",
      "DashedNumber": "1374-1"
    },
    {
      "ID": 682,
      "SetNumber": 1376,
      "URL": "https://www.lego.com/biassets/bi/4182052.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4182052.png",
      "Description": "Spider-Man � Action Studio",
      "Notes": "BI 1376",
      "DashedNumber": "1376-1"
    },
    {
      "ID": 683,
      "SetNumber": 1380,
      "URL": "https://www.lego.com/biassets/bi/4177856.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4177856.png",
      "Description": "Werewolf Ambush",
      "Notes": "BI 1380",
      "DashedNumber": "1380-1"
    },
    {
      "ID": 684,
      "SetNumber": 1381,
      "URL": "https://www.lego.com/biassets/bi/4177857.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4177857.png",
      "Description": "Vampires Crypt",
      "Notes": "BI 1381",
      "DashedNumber": "1381-1"
    },
    {
      "ID": 685,
      "SetNumber": 1382,
      "URL": "https://www.lego.com/biassets/bi/4177858.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4177858.png",
      "Description": "Scary Laboratory",
      "Notes": "BI 1382",
      "DashedNumber": "1382-1"
    },
    {
      "ID": 686,
      "SetNumber": 1383,
      "URL": "https://www.lego.com/biassets/bi/4177859.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4177859.png",
      "Description": "Curse of the Pharaoh",
      "Notes": "BI 1383",
      "DashedNumber": "1383-1"
    },
    {
      "ID": 687,
      "SetNumber": 1413,
      "URL": "https://www.lego.com/biassets/bi/4130833.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4130833.png",
      "Description": "ROVER",
      "Notes": "BUILD INST. 1413",
      "DashedNumber": "1413-1"
    },
    {
      "ID": 688,
      "SetNumber": 1414,
      "URL": "https://www.lego.com/biassets/bi/4131474.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4131474.png",
      "Description": "DOUBLE HOVER",
      "Notes": "BUILD INST. 1414",
      "DashedNumber": "1414-1"
    },
    {
      "ID": 689,
      "SetNumber": 1415,
      "URL": "https://www.lego.com/biassets/bi/4131475.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4131475.png",
      "Description": "JET SCOOTER",
      "Notes": "BUILD INST. 1415",
      "DashedNumber": "1415-1"
    },
    {
      "ID": 690,
      "SetNumber": 1416,
      "URL": "https://www.lego.com/biassets/bi/4131460.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4131460.png",
      "Description": "WORKER ROBOT",
      "Notes": "BUILD INST. 1416",
      "DashedNumber": "1416-1"
    },
    {
      "ID": 691,
      "SetNumber": 1417,
      "URL": "https://www.lego.com/biassets/bi/4161956.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4161956.png",
      "Description": "VAKAMA",
      "Notes": "BI 1417 IN",
      "DashedNumber": "1417-1"
    },
    {
      "ID": 692,
      "SetNumber": 1418,
      "URL": "https://www.lego.com/biassets/bi/4161957.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4161957.png",
      "Description": "MATAU",
      "Notes": "BI 1418 IN",
      "DashedNumber": "1418-1"
    },
    {
      "ID": 693,
      "SetNumber": 1419,
      "URL": "https://www.lego.com/biassets/bi/4161959.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4161959.png",
      "Description": "NOKAMA",
      "Notes": "BI 1419 IN",
      "DashedNumber": "1419-1"
    },
    {
      "ID": 694,
      "SetNumber": 1420,
      "URL": "https://www.lego.com/biassets/bi/4161965.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4161965.png",
      "Description": "NUJU",
      "Notes": "BI 1420 IN",
      "DashedNumber": "1420-1"
    },
    {
      "ID": 695,
      "SetNumber": 1421,
      "URL": "https://www.lego.com/biassets/bi/4166107.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4166107.png",
      "Description": "DIRECTORS COPTER",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "1421-1"
    },
    {
      "ID": 696,
      "SetNumber": 1422,
      "URL": "https://www.lego.com/biassets/bi/4166108.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4166108.png",
      "Description": "CAMERA CAR",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "1422-1"
    },
    {
      "ID": 697,
      "SetNumber": 1423,
      "URL": "https://www.lego.com/biassets/bi/4166109.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4166109.png",
      "Description": "AIR BOAT",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "1423-1"
    },
    {
      "ID": 698,
      "SetNumber": 1424,
      "URL": "https://www.lego.com/biassets/bi/4166110.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4166110.png",
      "Description": "STUNT GO-CART",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "1424-1"
    },
    {
      "ID": 699,
      "SetNumber": 1425,
      "URL": "https://www.lego.com/biassets/bi/4178468.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4178468.png",
      "Description": "ALPHA TEAM JET SUB",
      "Notes": "BI 1425",
      "DashedNumber": "1425-1"
    },
    {
      "ID": 700,
      "SetNumber": 1426,
      "URL": "https://www.lego.com/biassets/bi/4178470.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4178470.png",
      "Description": "ALPHA TEAM WING DIVER",
      "Notes": "BI 1426",
      "DashedNumber": "1426-1"
    },
    {
      "ID": 701,
      "SetNumber": 1427,
      "URL": "https://www.lego.com/biassets/bi/4178472.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4178472.png",
      "Description": "OGEL UNDERWATER SLIZER",
      "Notes": "BI 1427",
      "DashedNumber": "1427-1"
    },
    {
      "ID": 702,
      "SetNumber": 1428,
      "URL": "https://www.lego.com/biassets/bi/4174856.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4174856.png",
      "Description": "Kick n Score",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "1428-1"
    },
    {
      "ID": 703,
      "SetNumber": 1429,
      "URL": "https://www.lego.com/biassets/bi/4174858.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4174858.png",
      "Description": "Goalkeeper Training",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "1429-1"
    },
    {
      "ID": 704,
      "SetNumber": 1430,
      "URL": "https://www.lego.com/biassets/bi/4174859.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4174859.png",
      "Description": "Precision Training",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "1430-1"
    },
    {
      "ID": 705,
      "SetNumber": 1441,
      "URL": "https://www.lego.com/biassets/bi/4206494.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4206494.png",
      "Description": "FIKOU",
      "Notes": "BI  1441",
      "DashedNumber": "1441-1"
    },
    {
      "ID": 706,
      "SetNumber": 1660,
      "URL": "https://www.lego.com/biassets/bi/4103889.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4103889.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "1660-1"
    },
    {
      "ID": 707,
      "SetNumber": 1719,
      "URL": "https://www.lego.com/biassets/bi/877195.pdf",
      "Images": "https://www.lego.com/biassets/biimg/877195.png",
      "Description": "CANN. W. BUILDING LID EXCL.",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "1719-1"
    },
    {
      "ID": 708,
      "SetNumber": 1747,
      "URL": "https://www.lego.com/biassets/bi/4103885.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4103885.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "1747-1"
    },
    {
      "ID": 709,
      "SetNumber": 1749,
      "URL": "https://www.lego.com/biassets/bi/4103886.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4103886.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "1749-1"
    },
    {
      "ID": 710,
      "SetNumber": 1752,
      "URL": "https://www.lego.com/biassets/bi/4103887.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4103887.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "1752-1"
    },
    {
      "ID": 711,
      "SetNumber": 1760,
      "URL": "https://www.lego.com/biassets/bi/877132.pdf",
      "Images": "https://www.lego.com/biassets/biimg/877132.png",
      "Description": "GO-KART",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "1760-1"
    },
    {
      "ID": 712,
      "SetNumber": 1775,
      "URL": "https://www.lego.com/biassets/bi/877075.pdf",
      "Images": "https://www.lego.com/biassets/biimg/877075.png",
      "Description": "INFLIGHT FUN JET",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "1775-1"
    },
    {
      "ID": 713,
      "SetNumber": 1782,
      "URL": "https://www.lego.com/biassets/bi/4109179.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4109179.png",
      "Description": "DIVING",
      "Notes": "BUILDING INSTR. 1782",
      "DashedNumber": "1782-1"
    },
    {
      "ID": 714,
      "SetNumber": 1796,
      "URL": "https://www.lego.com/biassets/bi/4108581.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4108581.png",
      "Description": "Freestyle Large Monster Bucket",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "1796-1"
    },
    {
      "ID": 715,
      "SetNumber": 1796,
      "URL": "https://www.lego.com/biassets/bi/4105511.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4105511.png",
      "Description": "Freestyle Large Monster Bucket",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "1796-1"
    },
    {
      "ID": 716,
      "SetNumber": 1802,
      "URL": "https://www.lego.com/biassets/bi/4101182.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4101182.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "1802-1"
    },
    {
      "ID": 717,
      "SetNumber": 1804,
      "URL": "https://www.lego.com/biassets/bi/4101183.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4101183.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "1804-1"
    },
    {
      "ID": 718,
      "SetNumber": 1806,
      "URL": "https://www.lego.com/biassets/bi/4101184.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4101184.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "1806-1"
    },
    {
      "ID": 719,
      "SetNumber": 1808,
      "URL": "https://www.lego.com/biassets/bi/4100907.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4100907.png",
      "Description": "INFLIGHT CLOUD HOPPER",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "1808-1"
    },
    {
      "ID": 720,
      "SetNumber": 1808,
      "URL": "https://www.lego.com/biassets/bi/4100906.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4100906.png",
      "Description": "INFLIGHT CLOUD HOPPER",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "1808-1"
    },
    {
      "ID": 721,
      "SetNumber": 1809,
      "URL": "https://www.lego.com/biassets/bi/4105460.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4105460.png",
      "Description": "INFLIGHT FUN FLYER GA",
      "Notes": "BI ITEM 1809",
      "DashedNumber": "1809-1"
    },
    {
      "ID": 722,
      "SetNumber": 1809,
      "URL": "https://www.lego.com/biassets/bi/4109228.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4109228.png",
      "Description": "INFLIGHT FUN FLYER GA",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "1809-1"
    },
    {
      "ID": 723,
      "SetNumber": 1809,
      "URL": "https://www.lego.com/biassets/bi/4117659.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4117659.png",
      "Description": "INFLIGHT FUN FLYER GA",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "1809-1"
    },
    {
      "ID": 724,
      "SetNumber": 1815,
      "URL": "https://www.lego.com/biassets/bi/4103883.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4103883.png",
      "Description": "PARADISA SMALL BEACH",
      "Notes": "BUILDING INSTR., ITEM 1815 IN",
      "DashedNumber": "1815-1"
    },
    {
      "ID": 725,
      "SetNumber": 1817,
      "URL": "https://www.lego.com/biassets/bi/4105367.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4105367.png",
      "Description": "INFLIGHT FOREST FLYER",
      "Notes": "BUILDING INSTR. 1817 IN PROM.",
      "DashedNumber": "1817-1"
    },
    {
      "ID": 726,
      "SetNumber": 1817,
      "URL": "https://www.lego.com/biassets/bi/4105532.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4105532.png",
      "Description": "INFLIGHT FOREST FLYER",
      "Notes": "BI 1817",
      "DashedNumber": "1817-1"
    },
    {
      "ID": 727,
      "SetNumber": 1818,
      "URL": "https://www.lego.com/biassets/bi/4105466.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4105466.png",
      "Description": "INFLIGHT STARLINER",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "1818-1"
    },
    {
      "ID": 728,
      "SetNumber": 1821,
      "URL": "https://www.lego.com/biassets/bi/4103884.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4103884.png",
      "Description": "TOWN RACE TEAM",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "1821-1"
    },
    {
      "ID": 729,
      "SetNumber": 1822,
      "URL": "https://www.lego.com/biassets/bi/4101177.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4101177.png",
      "Description": "III NEPTUNES",
      "Notes": "BUILDING INSTR. 1822 IN",
      "DashedNumber": "1822-1"
    },
    {
      "ID": 730,
      "SetNumber": 1831,
      "URL": "https://www.lego.com/biassets/bi/4101178.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4101178.png",
      "Description": "MAERSK TRUCK TOWN",
      "Notes": "BUILDING INSTR. 1831 IN",
      "DashedNumber": "1831-1"
    },
    {
      "ID": 731,
      "SetNumber": 1843,
      "URL": "https://www.lego.com/biassets/bi/4103888.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4103888.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "1843-2"
    },
    {
      "ID": 732,
      "SetNumber": 1858,
      "URL": "https://www.lego.com/biassets/bi/4105467.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4105467.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "1858-1"
    },
    {
      "ID": 733,
      "SetNumber": 1865,
      "URL": "https://www.lego.com/biassets/bi/4105528.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4105528.png",
      "Description": "INFLIGHT SKY HOPPER GA",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "1865-1"
    },
    {
      "ID": 734,
      "SetNumber": 1869,
      "URL": "https://www.lego.com/biassets/bi/4105479.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4105479.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "1869-1"
    },
    {
      "ID": 735,
      "SetNumber": 1955,
      "URL": "https://www.lego.com/biassets/bi/120691.pdf",
      "Images": "https://www.lego.com/biassets/biimg/120691.png",
      "Description": "COLOR LINE FERRY",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "1955-1"
    },
    {
      "ID": 736,
      "SetNumber": 2010,
      "URL": "https://www.lego.com/biassets/bi/4111737.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4111737.png",
      "Description": "Baby Walker",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2010-1"
    },
    {
      "ID": 737,
      "SetNumber": 2063,
      "URL": "https://www.lego.com/biassets/bi/4620381.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4620381.png",
      "Description": "STORMER 2.0",
      "Notes": "BI 3010/24 - 2063",
      "DashedNumber": "2063-1"
    },
    {
      "ID": 738,
      "SetNumber": 2064,
      "URL": "https://www.lego.com/biassets/bi/4511979.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4511979.png",
      "Description": "LEGO� Rescue Plane",
      "Notes": "BI 2064",
      "DashedNumber": "2064-1"
    },
    {
      "ID": 739,
      "SetNumber": 2064,
      "URL": "https://www.lego.com/biassets/bi/4511980.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4511980.png",
      "Description": "Parts list and flyer",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2064-1"
    },
    {
      "ID": 740,
      "SetNumber": 2065,
      "URL": "https://www.lego.com/biassets/bi/4620382.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4620382.png",
      "Description": "FURNO 2.0",
      "Notes": "BI 3010/24 - 2065",
      "DashedNumber": "2065-1"
    },
    {
      "ID": 741,
      "SetNumber": 2067,
      "URL": "https://www.lego.com/biassets/bi/4620383.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4620383.png",
      "Description": "EVO 2.0",
      "Notes": "BI 3010/24 - 2067",
      "DashedNumber": "2067-1"
    },
    {
      "ID": 742,
      "SetNumber": 2068,
      "URL": "https://www.lego.com/biassets/bi/4620384.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4620384.png",
      "Description": "NEX 2.0",
      "Notes": "BI 3010/24 - 2068",
      "DashedNumber": "2068-1"
    },
    {
      "ID": 743,
      "SetNumber": 2111,
      "URL": "https://www.lego.com/biassets/bi/4618487.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4618487.png",
      "Description": "Kai",
      "Notes": "BI 2002/ 2 - 2111 V.39",
      "DashedNumber": "2111-1"
    },
    {
      "ID": 744,
      "SetNumber": 2111,
      "URL": "https://www.lego.com/biassets/bi/4618486.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4618486.png",
      "Description": "Kai",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2111-1"
    },
    {
      "ID": 745,
      "SetNumber": 2112,
      "URL": "https://www.lego.com/biassets/bi/4618488.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4618488.png",
      "Description": "Cole",
      "Notes": "BI 2002/ 2 - 2112 V.29",
      "DashedNumber": "2112-1"
    },
    {
      "ID": 746,
      "SetNumber": 2112,
      "URL": "https://www.lego.com/biassets/bi/4618489.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4618489.png",
      "Description": "Cole",
      "Notes": "BI 2002/ 2 - 2112 V.39",
      "DashedNumber": "2112-1"
    },
    {
      "ID": 747,
      "SetNumber": 2113,
      "URL": "https://www.lego.com/biassets/bi/4618490.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4618490.png",
      "Description": "Zane",
      "Notes": "BI 2002/ 2 - 2113 V.29",
      "DashedNumber": "2113-1"
    },
    {
      "ID": 748,
      "SetNumber": 2113,
      "URL": "https://www.lego.com/biassets/bi/4618491.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4618491.png",
      "Description": "Zane",
      "Notes": "BI 2002/ 2 - 2113 V.39",
      "DashedNumber": "2113-1"
    },
    {
      "ID": 749,
      "SetNumber": 2114,
      "URL": "https://www.lego.com/biassets/bi/4618492.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4618492.png",
      "Description": "Chopov",
      "Notes": "BI 2002/ 2 - 2114 V.29",
      "DashedNumber": "2114-1"
    },
    {
      "ID": 750,
      "SetNumber": 2114,
      "URL": "https://www.lego.com/biassets/bi/4618493.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4618493.png",
      "Description": "Chopov",
      "Notes": "BI 2002/ 2 - 2114 V.39",
      "DashedNumber": "2114-1"
    },
    {
      "ID": 751,
      "SetNumber": 2115,
      "URL": "https://www.lego.com/biassets/bi/4618494.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4618494.png",
      "Description": "Bonezai",
      "Notes": "BI 2002/ 2 - 2115 V.29",
      "DashedNumber": "2115-1"
    },
    {
      "ID": 752,
      "SetNumber": 2115,
      "URL": "https://www.lego.com/biassets/bi/4618495.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4618495.png",
      "Description": "Bonezai",
      "Notes": "BI 2002/ 2 - 2115 V.39",
      "DashedNumber": "2115-1"
    },
    {
      "ID": 753,
      "SetNumber": 2116,
      "URL": "https://www.lego.com/biassets/bi/4618496.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4618496.png",
      "Description": "Krazi",
      "Notes": "BI 2002/ 2 - 2116 V.29",
      "DashedNumber": "2116-1"
    },
    {
      "ID": 754,
      "SetNumber": 2116,
      "URL": "https://www.lego.com/biassets/bi/4618497.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4618497.png",
      "Description": "Krazi",
      "Notes": "BI 2002/ 2 - 2116 V.39",
      "DashedNumber": "2116-1"
    },
    {
      "ID": 755,
      "SetNumber": 2126,
      "URL": "https://www.lego.com/biassets/bi/4115734.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4115734.png",
      "Description": "TRAIN WAGGONS",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2126-1"
    },
    {
      "ID": 756,
      "SetNumber": 2129,
      "URL": "https://www.lego.com/biassets/bi/4108973.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4108973.png",
      "Description": "DRAGSTER",
      "Notes": "BI 2129",
      "DashedNumber": "2129-1"
    },
    {
      "ID": 757,
      "SetNumber": 2141,
      "URL": "https://www.lego.com/biassets/bi/4620386.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4620386.png",
      "Description": "SURGE 2.0",
      "Notes": "BI 3010/24 - 2141",
      "DashedNumber": "2141-1"
    },
    {
      "ID": 758,
      "SetNumber": 2142,
      "URL": "https://www.lego.com/biassets/bi/4620387.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4620387.png",
      "Description": "BREEZ 2.0",
      "Notes": "BI 3010/24 - 2142",
      "DashedNumber": "2142-1"
    },
    {
      "ID": 759,
      "SetNumber": 2143,
      "URL": "https://www.lego.com/biassets/bi/4641230.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4641230.png",
      "Description": "Rocka 3.0",
      "Notes": "BI 3010/24 - 2143",
      "DashedNumber": "2143-1"
    },
    {
      "ID": 760,
      "SetNumber": 2144,
      "URL": "https://www.lego.com/biassets/bi/4641233.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4641233.png",
      "Description": "Nex 3.0",
      "Notes": "BI 3010/24 - 2144",
      "DashedNumber": "2144-1"
    },
    {
      "ID": 761,
      "SetNumber": 2145,
      "URL": "https://www.lego.com/biassets/bi/4641234.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4641234.png",
      "Description": "Stormer 3.0",
      "Notes": "BI 3010/24 - 2145",
      "DashedNumber": "2145-1"
    },
    {
      "ID": 762,
      "SetNumber": 2147,
      "URL": "https://www.lego.com/biassets/bi/4111303.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4111303.png",
      "Description": "INFLIGHT DRAGON FLY",
      "Notes": "BUILD.INSTR. ITEM 2147 (1)",
      "DashedNumber": "2147-1"
    },
    {
      "ID": 763,
      "SetNumber": 2147,
      "URL": "https://www.lego.com/biassets/bi/4111304.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4111304.png",
      "Description": "INFLIGHT DRAGON FLY",
      "Notes": "BUILD.INSTR. ITEM 2147 (2)",
      "DashedNumber": "2147-1"
    },
    {
      "ID": 764,
      "SetNumber": 2148,
      "URL": "https://www.lego.com/biassets/bi/4109180.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4109180.png",
      "Description": "LEGO TRUCK",
      "Notes": "BUILDING INSTR. 2148",
      "DashedNumber": "2148-1"
    },
    {
      "ID": 765,
      "SetNumber": 2149,
      "URL": "https://www.lego.com/biassets/bi/4111429.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4111429.png",
      "Description": "COLOR LINE TRUCK",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2149-1"
    },
    {
      "ID": 766,
      "SetNumber": 2150,
      "URL": "https://www.lego.com/biassets/bi/4108683.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4108683.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2150-1"
    },
    {
      "ID": 767,
      "SetNumber": 2152,
      "URL": "https://www.lego.com/biassets/bi/4117789.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4117789.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2152-1"
    },
    {
      "ID": 768,
      "SetNumber": 2153,
      "URL": "https://www.lego.com/biassets/bi/4124711.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4124711.png",
      "Description": "ROBO BLOCKBLASTER",
      "Notes": "BUILD.INST. 2153 IN",
      "DashedNumber": "2153-1"
    },
    {
      "ID": 769,
      "SetNumber": 2160,
      "URL": "https://www.lego.com/biassets/bi/4108974.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4108974.png",
      "Description": "SUBMOUNTAIN CRYSTAL",
      "Notes": "BI 2160",
      "DashedNumber": "2160-1"
    },
    {
      "ID": 770,
      "SetNumber": 2161,
      "URL": "https://www.lego.com/biassets/bi/4108975.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4108975.png",
      "Description": "SUB-MOUNTAIN DOZER",
      "Notes": "BI 2161",
      "DashedNumber": "2161-1"
    },
    {
      "ID": 771,
      "SetNumber": 2162,
      "URL": "https://www.lego.com/biassets/bi/4108976.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4108976.png",
      "Description": "SUB-MOUNTAIN DRILLER",
      "Notes": "BI 2162",
      "DashedNumber": "2162-1"
    },
    {
      "ID": 772,
      "SetNumber": 2170,
      "URL": "https://www.lego.com/biassets/bi/4618502.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4618502.png",
      "Description": "Cole DX",
      "Notes": "BI 2002/ 2 - 2170 V.29",
      "DashedNumber": "2170-1"
    },
    {
      "ID": 773,
      "SetNumber": 2170,
      "URL": "https://www.lego.com/biassets/bi/4618503.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4618503.png",
      "Description": "Cole DX",
      "Notes": "BI 2002/ 2 - 2170 V.39",
      "DashedNumber": "2170-1"
    },
    {
      "ID": 774,
      "SetNumber": 2171,
      "URL": "https://www.lego.com/biassets/bi/4618504.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4618504.png",
      "Description": "Zane DX",
      "Notes": "BI 2002/ 2 - 2171 V.29",
      "DashedNumber": "2171-1"
    },
    {
      "ID": 775,
      "SetNumber": 2171,
      "URL": "https://www.lego.com/biassets/bi/4618505.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4618505.png",
      "Description": "Zane DX",
      "Notes": "BI 2002/ 2 - 2171 V.39",
      "DashedNumber": "2171-1"
    },
    {
      "ID": 776,
      "SetNumber": 2172,
      "URL": "https://www.lego.com/biassets/bi/4618507.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4618507.png",
      "Description": "Nya",
      "Notes": "BI 2002/ 2 - 2172 V.29",
      "DashedNumber": "2172-1"
    },
    {
      "ID": 777,
      "SetNumber": 2172,
      "URL": "https://www.lego.com/biassets/bi/4618508.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4618508.png",
      "Description": "Nya",
      "Notes": "BI 2002/ 2 - 2172 V.39",
      "DashedNumber": "2172-1"
    },
    {
      "ID": 778,
      "SetNumber": 2173,
      "URL": "https://www.lego.com/biassets/bi/4618509.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4618509.png",
      "Description": "Nuckal",
      "Notes": "BI 2002/ 2 - 2173 V.29",
      "DashedNumber": "2173-1"
    },
    {
      "ID": 779,
      "SetNumber": 2173,
      "URL": "https://www.lego.com/biassets/bi/4618510.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4618510.png",
      "Description": "Nuckal",
      "Notes": "BI 2002/ 2 - 2173 V.39",
      "DashedNumber": "2173-1"
    },
    {
      "ID": 780,
      "SetNumber": 2174,
      "URL": "https://www.lego.com/biassets/bi/4645003.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4645003.png",
      "Description": "Kruncha",
      "Notes": "BI 2002/ 2 - 2174 V.29",
      "DashedNumber": "2174-1"
    },
    {
      "ID": 781,
      "SetNumber": 2174,
      "URL": "https://www.lego.com/biassets/bi/4645004.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4645004.png",
      "Description": "Kruncha",
      "Notes": "BI 2002/ 2 - 2174 V.39",
      "DashedNumber": "2174-1"
    },
    {
      "ID": 782,
      "SetNumber": 2175,
      "URL": "https://www.lego.com/biassets/bi/4645005.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4645005.png",
      "Description": "Wyplash",
      "Notes": "BI 2002/ 2 - 2175 V.29",
      "DashedNumber": "2175-1"
    },
    {
      "ID": 783,
      "SetNumber": 2175,
      "URL": "https://www.lego.com/biassets/bi/4645006.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4645006.png",
      "Description": "Wyplash",
      "Notes": "BI 2002/ 2 - 2175 V.39",
      "DashedNumber": "2175-1"
    },
    {
      "ID": 784,
      "SetNumber": 2182,
      "URL": "https://www.lego.com/biassets/bi/4641235.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4641235.png",
      "Description": "Bulk 3.0",
      "Notes": "BI 3010/24 - 2182",
      "DashedNumber": "2182-1"
    },
    {
      "ID": 785,
      "SetNumber": 2183,
      "URL": "https://www.lego.com/biassets/bi/4641236.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4641236.png",
      "Description": "STRINGER 3.0",
      "Notes": "BI 3010/24 - 2183",
      "DashedNumber": "2183-1"
    },
    {
      "ID": 786,
      "SetNumber": 2191,
      "URL": "https://www.lego.com/biassets/bi/4641237.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4641237.png",
      "Description": "Furno 3.0",
      "Notes": "BI 3010/24 - 2191",
      "DashedNumber": "2191-1"
    },
    {
      "ID": 787,
      "SetNumber": 2192,
      "URL": "https://www.lego.com/biassets/bi/4620948.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4620948.png",
      "Description": "DRILLDOZER",
      "Notes": "BI 3002/32 - 2192 V. 29",
      "DashedNumber": "2192-1"
    },
    {
      "ID": 788,
      "SetNumber": 2192,
      "URL": "https://www.lego.com/biassets/bi/4620949.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4620949.png",
      "Description": "DRILLDOZER",
      "Notes": "BI 3002/32 - 2192 V. 39",
      "DashedNumber": "2192-1"
    },
    {
      "ID": 789,
      "SetNumber": 2193,
      "URL": "https://www.lego.com/biassets/bi/4620951.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4620951.png",
      "Description": "JETBUG",
      "Notes": "BI 3002/32 - 2193 V. 29",
      "DashedNumber": "2193-1"
    },
    {
      "ID": 790,
      "SetNumber": 2193,
      "URL": "https://www.lego.com/biassets/bi/4620952.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4620952.png",
      "Description": "JETBUG",
      "Notes": "BI 3002/32 - 2193 V. 39",
      "DashedNumber": "2193-1"
    },
    {
      "ID": 791,
      "SetNumber": 2194,
      "URL": "https://www.lego.com/biassets/bi/4620955.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4620955.png",
      "Description": "NITROBLAST",
      "Notes": "BI 3002/32 - 2194 V. 29",
      "DashedNumber": "2194-1"
    },
    {
      "ID": 792,
      "SetNumber": 2194,
      "URL": "https://www.lego.com/biassets/bi/4620956.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4620956.png",
      "Description": "NITROBLAST",
      "Notes": "BI 3002/32 - 2194 V. 39",
      "DashedNumber": "2194-1"
    },
    {
      "ID": 793,
      "SetNumber": 2229,
      "URL": "https://www.lego.com/biassets/bi/4117957.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4117957.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2229-1"
    },
    {
      "ID": 794,
      "SetNumber": 2230,
      "URL": "https://www.lego.com/biassets/bi/4526159.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4526159.png",
      "Description": "In-flight Helicopter and Raft",
      "Notes": "BUILD INSTR 3001, 2230 1/2",
      "DashedNumber": "2230-1"
    },
    {
      "ID": 795,
      "SetNumber": 2230,
      "URL": "https://www.lego.com/biassets/bi/4526180.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4526180.png",
      "Description": "In-flight Helicopter and Raft",
      "Notes": "BUILD INSTR 3001, 2230 2/2",
      "DashedNumber": "2230-1"
    },
    {
      "ID": 796,
      "SetNumber": 2231,
      "URL": "https://www.lego.com/biassets/bi/4648058.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4648058.png",
      "Description": "Waspix",
      "Notes": "BI 3004/28 - 2231 V. 29/39",
      "DashedNumber": "2231-1"
    },
    {
      "ID": 797,
      "SetNumber": 2232,
      "URL": "https://www.lego.com/biassets/bi/4648061.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4648061.png",
      "Description": "Raw-Jaw",
      "Notes": "BI 3004/28 - 2232 V. 29/39",
      "DashedNumber": "2232-1"
    },
    {
      "ID": 798,
      "SetNumber": 2233,
      "URL": "https://www.lego.com/biassets/bi/4648064.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4648064.png",
      "Description": "FANGZ",
      "Notes": "BI 3004/28 - 2233 V. 29",
      "DashedNumber": "2233-1"
    },
    {
      "ID": 799,
      "SetNumber": 2233,
      "URL": "https://www.lego.com/biassets/bi/4648065.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4648065.png",
      "Description": "FANGZ",
      "Notes": "BI 3004/28 - 2233 V. 39",
      "DashedNumber": "2233-1"
    },
    {
      "ID": 800,
      "SetNumber": 2234,
      "URL": "https://www.lego.com/biassets/bi/4117705.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4117705.png",
      "Description": "POLICE W. 2 ROAD PLATES",
      "Notes": "BUILDINSTR. 2234 1/7",
      "DashedNumber": "2234-1"
    },
    {
      "ID": 801,
      "SetNumber": 2234,
      "URL": "https://www.lego.com/biassets/bi/4117706.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4117706.png",
      "Description": "POLICE W. 2 ROAD PLATES",
      "Notes": "BUILDINSTR. 2234 2/7",
      "DashedNumber": "2234-1"
    },
    {
      "ID": 802,
      "SetNumber": 2234,
      "URL": "https://www.lego.com/biassets/bi/4117707.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4117707.png",
      "Description": "POLICE W. 2 ROAD PLATES",
      "Notes": "BUILDINSTR. 2234 3/7",
      "DashedNumber": "2234-1"
    },
    {
      "ID": 803,
      "SetNumber": 2234,
      "URL": "https://www.lego.com/biassets/bi/4117708.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4117708.png",
      "Description": "POLICE W. 2 ROAD PLATES",
      "Notes": "BUILDINSTR. 2234 4/7",
      "DashedNumber": "2234-1"
    },
    {
      "ID": 804,
      "SetNumber": 2234,
      "URL": "https://www.lego.com/biassets/bi/4117709.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4117709.png",
      "Description": "POLICE W. 2 ROAD PLATES",
      "Notes": "BUILDINSTR. 2234 5/7",
      "DashedNumber": "2234-1"
    },
    {
      "ID": 805,
      "SetNumber": 2234,
      "URL": "https://www.lego.com/biassets/bi/4117710.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4117710.png",
      "Description": "POLICE W. 2 ROAD PLATES",
      "Notes": "BUILDINSTR. 2234 6/7",
      "DashedNumber": "2234-1"
    },
    {
      "ID": 806,
      "SetNumber": 2234,
      "URL": "https://www.lego.com/biassets/bi/4117711.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4117711.png",
      "Description": "POLICE W. 2 ROAD PLATES",
      "Notes": "BUILDINSTR. 2234 7/7",
      "DashedNumber": "2234-1"
    },
    {
      "ID": 807,
      "SetNumber": 2235,
      "URL": "https://www.lego.com/biassets/bi/4622252.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4622252.png",
      "Description": "FIRE LORD",
      "Notes": "BI 3005/48 - 2235",
      "DashedNumber": "2235-1"
    },
    {
      "ID": 808,
      "SetNumber": 2236,
      "URL": "https://www.lego.com/biassets/bi/4646736.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4646736.png",
      "Description": "Scorpio",
      "Notes": "BI 3005/40 - 2236 V. 29/39",
      "DashedNumber": "2236-1"
    },
    {
      "ID": 809,
      "SetNumber": 2250,
      "URL": "https://www.lego.com/biassets/bi/4129288.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4129288.png",
      "Description": "Page 1 missing",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2250-1"
    },
    {
      "ID": 810,
      "SetNumber": 2250,
      "URL": "https://www.lego.com/biassets/bi/4133278.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4133278.png",
      "Description": "Only 1 page",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2250-1"
    },
    {
      "ID": 811,
      "SetNumber": 2250,
      "URL": "https://www.lego.com/biassets/bi/4133279.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4133279.png",
      "Description": "Only 1 page",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2250-1"
    },
    {
      "ID": 812,
      "SetNumber": 2250,
      "URL": "https://www.lego.com/biassets/bi/4133280.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4133280.png",
      "Description": "Only 1 page",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2250-1"
    },
    {
      "ID": 813,
      "SetNumber": 2250,
      "URL": "https://www.lego.com/biassets/bi/4133281.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4133281.png",
      "Description": "Only 1 page",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2250-1"
    },
    {
      "ID": 814,
      "SetNumber": 2250,
      "URL": "https://www.lego.com/biassets/bi/4133282.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4133282.png",
      "Description": "Only 1 page",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2250-1"
    },
    {
      "ID": 815,
      "SetNumber": 2250,
      "URL": "https://www.lego.com/biassets/bi/4133283.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4133283.png",
      "Description": "Only 1 page",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2250-1"
    },
    {
      "ID": 816,
      "SetNumber": 2250,
      "URL": "https://www.lego.com/biassets/bi/4133284.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4133284.png",
      "Description": "Only 1 page",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2250-1"
    },
    {
      "ID": 817,
      "SetNumber": 2254,
      "URL": "https://www.lego.com/biassets/bi/4648876.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4648876.png",
      "Description": "Mountain Shrine",
      "Notes": "BI 3004 60/65g - 2254 V29/39",
      "DashedNumber": "2254-1"
    },
    {
      "ID": 818,
      "SetNumber": 2254,
      "URL": "https://www.lego.com/biassets/bi/4648877.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4648877.png",
      "Description": "Mountain Shrine",
      "Notes": "BI 3004 60/65g - 2254 V29/39",
      "DashedNumber": "2254-1"
    },
    {
      "ID": 819,
      "SetNumber": 2255,
      "URL": "https://www.lego.com/biassets/bi/4644677.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4644677.png",
      "Description": "Sensei Wu",
      "Notes": "BI 2002/ 2 - 2255 V29",
      "DashedNumber": "2255-1"
    },
    {
      "ID": 820,
      "SetNumber": 2255,
      "URL": "https://www.lego.com/biassets/bi/4644678.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4644678.png",
      "Description": "Sensei Wu",
      "Notes": "BI 2002/ 2 - 2255 V39",
      "DashedNumber": "2255-1"
    },
    {
      "ID": 821,
      "SetNumber": 2256,
      "URL": "https://www.lego.com/biassets/bi/4645007.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4645007.png",
      "Description": "Lord Garmadon",
      "Notes": "BI 2002/ 2 - 2256 V.29",
      "DashedNumber": "2256-1"
    },
    {
      "ID": 822,
      "SetNumber": 2256,
      "URL": "https://www.lego.com/biassets/bi/4645008.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4645008.png",
      "Description": "Lord Garmadon",
      "Notes": "BI 2002/ 2 - 2256 V.39",
      "DashedNumber": "2256-1"
    },
    {
      "ID": 823,
      "SetNumber": 2257,
      "URL": "https://www.lego.com/biassets/bi/4618499.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4618499.png",
      "Description": "Spinjitzu Starter Set",
      "Notes": "BI 2002/ 2 - 2257 V.29",
      "DashedNumber": "2257-1"
    },
    {
      "ID": 824,
      "SetNumber": 2257,
      "URL": "https://www.lego.com/biassets/bi/4618500.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4618500.png",
      "Description": "Spinjitzu Starter Set",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2257-1"
    },
    {
      "ID": 825,
      "SetNumber": 2258,
      "URL": "https://www.lego.com/biassets/bi/4625536.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4625536.png",
      "Description": "Ninja Ambush",
      "Notes": "BI 3001/24 - 2258 V 39",
      "DashedNumber": "2258-1"
    },
    {
      "ID": 826,
      "SetNumber": 2258,
      "URL": "https://www.lego.com/biassets/bi/4625535.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4625535.png",
      "Description": "Ninjago Value Pack",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2258-1"
    },
    {
      "ID": 827,
      "SetNumber": 2259,
      "URL": "https://www.lego.com/biassets/bi/4625556.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4625556.png",
      "Description": "Ninjago",
      "Notes": "BI 3004/48 - 2259 V 29",
      "DashedNumber": "2259-1"
    },
    {
      "ID": 828,
      "SetNumber": 2259,
      "URL": "https://www.lego.com/biassets/bi/4625558.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4625558.png",
      "Description": "Skull Motorbike",
      "Notes": "BI 3004/48 - 2259 V 39",
      "DashedNumber": "2259-1"
    },
    {
      "ID": 829,
      "SetNumber": 2260,
      "URL": "https://www.lego.com/biassets/bi/6000621.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6000621.png",
      "Description": "Ninjago",
      "Notes": "BI 3005/44 - 2260 V29",
      "DashedNumber": "2260-1"
    },
    {
      "ID": 830,
      "SetNumber": 2260,
      "URL": "https://www.lego.com/biassets/bi/6000622.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6000622.png",
      "Description": "Ice Dragon Attack",
      "Notes": "BI 3005/44 - 2260 V39",
      "DashedNumber": "2260-1"
    },
    {
      "ID": 831,
      "SetNumber": 2260,
      "URL": "https://www.lego.com/biassets/bi/4645044.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4645044.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2260-1"
    },
    {
      "ID": 832,
      "SetNumber": 2260,
      "URL": "https://www.lego.com/biassets/bi/4645046.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4645046.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2260-1"
    },
    {
      "ID": 833,
      "SetNumber": 2263,
      "URL": "https://www.lego.com/biassets/bi/4625724.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4625724.png",
      "Description": "Turbo Shredder",
      "Notes": "BI 3005/40 - 2263 1/2 V 29",
      "DashedNumber": "2263-1"
    },
    {
      "ID": 834,
      "SetNumber": 2263,
      "URL": "https://www.lego.com/biassets/bi/4644260.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4644260.png",
      "Description": "Turbo Shredder",
      "Notes": "BI 3005/40 - 2263 2/2 V 29",
      "DashedNumber": "2263-1"
    },
    {
      "ID": 835,
      "SetNumber": 2263,
      "URL": "https://www.lego.com/biassets/bi/4644261.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4644261.png",
      "Description": "Turbo Shredder",
      "Notes": "BI 3005/40 - 2263 2/2 V 39",
      "DashedNumber": "2263-1"
    },
    {
      "ID": 836,
      "SetNumber": 2263,
      "URL": "https://www.lego.com/biassets/bi/4625725.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4625725.png",
      "Description": "Turbo Shredder",
      "Notes": "BI 3005/40 - 2263 1/2 V 39",
      "DashedNumber": "2263-1"
    },
    {
      "ID": 837,
      "SetNumber": 2282,
      "URL": "https://www.lego.com/biassets/bi/4646689.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4646689.png",
      "Description": "Rocka XL",
      "Notes": "BI 3005/56 - 2282 V. 29/39",
      "DashedNumber": "2282-1"
    },
    {
      "ID": 838,
      "SetNumber": 2283,
      "URL": "https://www.lego.com/biassets/bi/6000946.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6000946.png",
      "Description": "Witch Doctor",
      "Notes": "BI 3005/72+4*-2283",
      "DashedNumber": "2283-1"
    },
    {
      "ID": 839,
      "SetNumber": 2326,
      "URL": "https://www.lego.com/biassets/bi/4108895.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4108895.png",
      "Description": "GREEN ELEPHANT BUCKET XL",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2326-1"
    },
    {
      "ID": 840,
      "SetNumber": 2490,
      "URL": "https://www.lego.com/biassets/bi/4117971.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4117971.png",
      "Description": "BI-BEETLE BLASTER",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2490-1"
    },
    {
      "ID": 841,
      "SetNumber": 2504,
      "URL": "https://www.lego.com/biassets/bi/6000593.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6000593.png",
      "Description": "Spinjitzu Dojo",
      "Notes": "BI 3005/44 - 2504 2/2 V29",
      "DashedNumber": "2504-1"
    },
    {
      "ID": 842,
      "SetNumber": 2504,
      "URL": "https://www.lego.com/biassets/bi/6000612.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6000612.png",
      "Description": "Spinjitzu Dojo",
      "Notes": "BI 3005/44 - 2504 2/2 V39",
      "DashedNumber": "2504-1"
    },
    {
      "ID": 843,
      "SetNumber": 2504,
      "URL": "https://www.lego.com/biassets/bi/4625731.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4625731.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2504-1"
    },
    {
      "ID": 844,
      "SetNumber": 2504,
      "URL": "https://www.lego.com/biassets/bi/4644297.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4644297.png",
      "Description": "Spinjitzu Dojo",
      "Notes": "BI 3005/44 - 2504 1/2 V 29",
      "DashedNumber": "2504-1"
    },
    {
      "ID": 845,
      "SetNumber": 2504,
      "URL": "https://www.lego.com/biassets/bi/4644299.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4644299.png",
      "Description": "Spinjitzu Dojo",
      "Notes": "BI 3005/44 - 2504 1/2 V 39",
      "DashedNumber": "2504-1"
    },
    {
      "ID": 846,
      "SetNumber": 2504,
      "URL": "https://www.lego.com/biassets/bi/4625730.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4625730.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2504-1"
    },
    {
      "ID": 847,
      "SetNumber": 2505,
      "URL": "https://www.lego.com/biassets/bi/4642940.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4642940.png",
      "Description": "Garmadons Dark Fortress",
      "Notes": "BI 3006/48 - 2505 1/2 V 39",
      "DashedNumber": "2505-1"
    },
    {
      "ID": 848,
      "SetNumber": 2505,
      "URL": "https://www.lego.com/biassets/bi/4642939.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4642939.png",
      "Description": "Garmadons Dark Fortress",
      "Notes": "BI 3006/48 - 2505 1/2 V29",
      "DashedNumber": "2505-1"
    },
    {
      "ID": 849,
      "SetNumber": 2505,
      "URL": "https://www.lego.com/biassets/bi/4625734.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4625734.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2505-1"
    },
    {
      "ID": 850,
      "SetNumber": 2505,
      "URL": "https://www.lego.com/biassets/bi/6000617.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6000617.png",
      "Description": "Garmadons Dark Fortress",
      "Notes": "BI 3006/48 - 2505 2/2 V29",
      "DashedNumber": "2505-1"
    },
    {
      "ID": 851,
      "SetNumber": 2505,
      "URL": "https://www.lego.com/biassets/bi/6000620.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6000620.png",
      "Description": "Garmadons Dark Fortress",
      "Notes": "BI 3006/48 - 2505 2/2 V39",
      "DashedNumber": "2505-1"
    },
    {
      "ID": 852,
      "SetNumber": 2505,
      "URL": "https://www.lego.com/biassets/bi/4625735.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4625735.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2505-1"
    },
    {
      "ID": 853,
      "SetNumber": 2506,
      "URL": "https://www.lego.com/biassets/bi/4645944.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4645944.png",
      "Description": "Skull Truck",
      "Notes": "BI 3005/60 - 2506 V 29/39 1/2",
      "DashedNumber": "2506-1"
    },
    {
      "ID": 854,
      "SetNumber": 2506,
      "URL": "https://www.lego.com/biassets/bi/4645942.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4645942.png",
      "Description": "Skull Truck",
      "Notes": "BI 3005/60 - 2506 V 29/39 1/2",
      "DashedNumber": "2506-1"
    },
    {
      "ID": 855,
      "SetNumber": 2506,
      "URL": "https://www.lego.com/biassets/bi/6000625.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6000625.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2506-1"
    },
    {
      "ID": 856,
      "SetNumber": 2506,
      "URL": "https://www.lego.com/biassets/bi/6000628.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6000628.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2506-1"
    },
    {
      "ID": 857,
      "SetNumber": 2506,
      "URL": "https://www.lego.com/biassets/bi/6020855.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6020855.png",
      "Description": "Skull Truck",
      "Notes": "BI 3005/60 - 2506 2/2 V29/39",
      "DashedNumber": "2506-1"
    },
    {
      "ID": 858,
      "SetNumber": 2506,
      "URL": "https://www.lego.com/biassets/bi/6020904.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6020904.png",
      "Description": "Skull Truck",
      "Notes": "BI 3005/60 - 2506 2/2 V29/39",
      "DashedNumber": "2506-1"
    },
    {
      "ID": 859,
      "SetNumber": 2507,
      "URL": "https://www.lego.com/biassets/bi/6020854.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6020854.png",
      "Description": "Fire Temple",
      "Notes": "BI 3016 80+4*- 2507 3/3 29/39",
      "DashedNumber": "2507-1"
    },
    {
      "ID": 860,
      "SetNumber": 2507,
      "URL": "https://www.lego.com/biassets/bi/6020902.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6020902.png",
      "Description": "Fire Temple",
      "Notes": "BI 3016 80+4*- 2507 3/3 29/39",
      "DashedNumber": "2507-1"
    },
    {
      "ID": 861,
      "SetNumber": 2507,
      "URL": "https://www.lego.com/biassets/bi/4645946.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4645946.png",
      "Description": "Fire Temple",
      "Notes": "BI 3005/60 - 2507 V29/39 1/3",
      "DashedNumber": "2507-1"
    },
    {
      "ID": 862,
      "SetNumber": 2507,
      "URL": "https://www.lego.com/biassets/bi/4645947.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4645947.png",
      "Description": "Fire Temple",
      "Notes": "BI 3016 80+4 - 2507 V29/39 2/3",
      "DashedNumber": "2507-1"
    },
    {
      "ID": 863,
      "SetNumber": 2507,
      "URL": "https://www.lego.com/biassets/bi/4645949.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4645949.png",
      "Description": "Fire Temple",
      "Notes": "BI 3005/60 - 2507 V29/39 1/3",
      "DashedNumber": "2507-1"
    },
    {
      "ID": 864,
      "SetNumber": 2507,
      "URL": "https://www.lego.com/biassets/bi/4645950.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4645950.png",
      "Description": "Fire Temple",
      "Notes": "BI 3016 80+4 - 2507 V29/39 2/3",
      "DashedNumber": "2507-1"
    },
    {
      "ID": 865,
      "SetNumber": 2507,
      "URL": "https://www.lego.com/biassets/bi/6000636.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6000636.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2507-1"
    },
    {
      "ID": 866,
      "SetNumber": 2507,
      "URL": "https://www.lego.com/biassets/bi/6000639.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6000639.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2507-1"
    },
    {
      "ID": 867,
      "SetNumber": 2508,
      "URL": "https://www.lego.com/biassets/bi/6000673.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6000673.png",
      "Description": "Blacksmith Shop",
      "Notes": "BI 3005/60 - 2508 V29/39",
      "DashedNumber": "2508-1"
    },
    {
      "ID": 868,
      "SetNumber": 2508,
      "URL": "https://www.lego.com/biassets/bi/6000773.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6000773.png",
      "Description": "Blacksmith Shop",
      "Notes": "BI 3005/60 - 2508 V29/39",
      "DashedNumber": "2508-1"
    },
    {
      "ID": 869,
      "SetNumber": 2509,
      "URL": "https://www.lego.com/biassets/bi/6000634.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6000634.png",
      "Description": "Earth Dragon Defense",
      "Notes": "BI 3005/60 - 2509  V29",
      "DashedNumber": "2509-1"
    },
    {
      "ID": 870,
      "SetNumber": 2509,
      "URL": "https://www.lego.com/biassets/bi/6000637.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6000637.png",
      "Description": "Earth Dragon Defense",
      "Notes": "BI 3005/60 - 2509 V39",
      "DashedNumber": "2509-1"
    },
    {
      "ID": 871,
      "SetNumber": 2516,
      "URL": "https://www.lego.com/biassets/bi/4625527.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4625527.png",
      "Description": "Ninja Training Outpost",
      "Notes": "BI 3001/16 - 2516 V 39",
      "DashedNumber": "2516-1"
    },
    {
      "ID": 872,
      "SetNumber": 2516,
      "URL": "https://www.lego.com/biassets/bi/4625525.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4625525.png",
      "Description": "Ninja Training Outpost",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2516-1"
    },
    {
      "ID": 873,
      "SetNumber": 2518,
      "URL": "https://www.lego.com/biassets/bi/4631367.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4631367.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2518-1"
    },
    {
      "ID": 874,
      "SetNumber": 2518,
      "URL": "https://www.lego.com/biassets/bi/4631366.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4631366.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2518-1"
    },
    {
      "ID": 875,
      "SetNumber": 2518,
      "URL": "https://www.lego.com/biassets/bi/6000762.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6000762.png",
      "Description": "Nuckals ATV",
      "Notes": "BI 3005/40 -  2518  V29",
      "DashedNumber": "2518-1"
    },
    {
      "ID": 876,
      "SetNumber": 2518,
      "URL": "https://www.lego.com/biassets/bi/6000763.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6000763.png",
      "Description": "Nuckals ATV",
      "Notes": "BI 3005/40 -  2518 V39",
      "DashedNumber": "2518-1"
    },
    {
      "ID": 877,
      "SetNumber": 2519,
      "URL": "https://www.lego.com/biassets/bi/4642941.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4642941.png",
      "Description": "Ninjago Value Pack",
      "Notes": "BI 3005/72+4 - 2519 V29",
      "DashedNumber": "2519-1"
    },
    {
      "ID": 878,
      "SetNumber": 2519,
      "URL": "https://www.lego.com/biassets/bi/4642942.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4642942.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2519-1"
    },
    {
      "ID": 879,
      "SetNumber": 2519,
      "URL": "https://www.lego.com/biassets/bi/6000766.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6000766.png",
      "Description": "Skeleton Bowling",
      "Notes": "BI 3005/72+4*- 2519 V29",
      "DashedNumber": "2519-1"
    },
    {
      "ID": 880,
      "SetNumber": 2519,
      "URL": "https://www.lego.com/biassets/bi/6000770.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6000770.png",
      "Description": "Skeleton Bowling",
      "Notes": "BI 3005/72+4*- 2519 V39",
      "DashedNumber": "2519-1"
    },
    {
      "ID": 881,
      "SetNumber": 2520,
      "URL": "https://www.lego.com/biassets/bi/4637079.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4637079.png",
      "Description": "Ninjago Battle Arena",
      "Notes": "BI 3005/44 - 2520 V29 2/2",
      "DashedNumber": "2520-1"
    },
    {
      "ID": 882,
      "SetNumber": 2520,
      "URL": "https://www.lego.com/biassets/bi/4644248.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4644248.png",
      "Description": "Ninjago Battle Arena",
      "Notes": "BI 3005/48 - 2520 V29 1/2",
      "DashedNumber": "2520-1"
    },
    {
      "ID": 883,
      "SetNumber": 2520,
      "URL": "https://www.lego.com/biassets/bi/4648589.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4648589.png",
      "Description": "Ninjago Battle Arena",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2520-1"
    },
    {
      "ID": 884,
      "SetNumber": 2520,
      "URL": "https://www.lego.com/biassets/bi/4648592.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4648592.png",
      "Description": "Ninjago Battle Arena",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2520-1"
    },
    {
      "ID": 885,
      "SetNumber": 2521,
      "URL": "https://www.lego.com/biassets/bi/4646354.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4646354.png",
      "Description": "Lightning Dragon Battle",
      "Notes": "BI 3005/52 - 2521 V29/39 1/2",
      "DashedNumber": "2521-1"
    },
    {
      "ID": 886,
      "SetNumber": 2521,
      "URL": "https://www.lego.com/biassets/bi/4646356.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4646356.png",
      "Description": "Lightning Dragon Battle",
      "Notes": "BI 3005/52 - 2521 V29/39 1/2",
      "DashedNumber": "2521-1"
    },
    {
      "ID": 887,
      "SetNumber": 2521,
      "URL": "https://www.lego.com/biassets/bi/6000657.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6000657.png",
      "Description": "Lightning Dragon Battle",
      "Notes": "BI 3005/72+4*- 2521 2/2 V29/39",
      "DashedNumber": "2521-1"
    },
    {
      "ID": 888,
      "SetNumber": 2521,
      "URL": "https://www.lego.com/biassets/bi/6000659.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6000659.png",
      "Description": "Lightning Dragon Battle",
      "Notes": "BI 3005/72+4*- 2521 2/2 V29/39",
      "DashedNumber": "2521-1"
    },
    {
      "ID": 889,
      "SetNumber": 2531,
      "URL": "https://www.lego.com/biassets/bi/4117897.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4117897.png",
      "Description": "INFLIGHT CHOPPER",
      "Notes": "BUILDING INSTR. FOR 2531",
      "DashedNumber": "2531-1"
    },
    {
      "ID": 890,
      "SetNumber": 2532,
      "URL": "https://www.lego.com/biassets/bi/4117864.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4117864.png",
      "Description": "INFLIGHT COM JET",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2532-1"
    },
    {
      "ID": 891,
      "SetNumber": 2535,
      "URL": "https://www.lego.com/biassets/bi/4115714.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4115714.png",
      "Description": "FERRARI",
      "Notes": "BUILD. INSTR. FOR 2535 SHELL-I",
      "DashedNumber": "2535-1"
    },
    {
      "ID": 892,
      "SetNumber": 2535,
      "URL": "https://www.lego.com/biassets/bi/4133254.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4133254.png",
      "Description": "FERRARI",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2535-1"
    },
    {
      "ID": 893,
      "SetNumber": 2536,
      "URL": "https://www.lego.com/biassets/bi/4115715.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4115715.png",
      "Description": "JETSKI",
      "Notes": "BUILD.INSTR. FOR 2536 SHELL-IN",
      "DashedNumber": "2536-1"
    },
    {
      "ID": 894,
      "SetNumber": 2536,
      "URL": "https://www.lego.com/biassets/bi/4133255.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4133255.png",
      "Description": "JETSKI",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2536-1"
    },
    {
      "ID": 895,
      "SetNumber": 2537,
      "URL": "https://www.lego.com/biassets/bi/4115716.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4115716.png",
      "Description": "RAFT",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2537-1"
    },
    {
      "ID": 896,
      "SetNumber": 2537,
      "URL": "https://www.lego.com/biassets/bi/4133256.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4133256.png",
      "Description": "RAFT",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2537-1"
    },
    {
      "ID": 897,
      "SetNumber": 2538,
      "URL": "https://www.lego.com/biassets/bi/4133257.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4133257.png",
      "Description": "KNIGHT W. WAGGON",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2538-1"
    },
    {
      "ID": 898,
      "SetNumber": 2538,
      "URL": "https://www.lego.com/biassets/bi/4115717.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4115717.png",
      "Description": "KNIGHT W. WAGGON",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2538-1"
    },
    {
      "ID": 899,
      "SetNumber": 2539,
      "URL": "https://www.lego.com/biassets/bi/4115718.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4115718.png",
      "Description": "DRAGGON PLANE",
      "Notes": "BUILD. INSTR. FOR 2539SHELL-IN",
      "DashedNumber": "2539-1"
    },
    {
      "ID": 900,
      "SetNumber": 2539,
      "URL": "https://www.lego.com/biassets/bi/4133258.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4133258.png",
      "Description": "DRAGGON PLANE",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2539-1"
    },
    {
      "ID": 901,
      "SetNumber": 2540,
      "URL": "https://www.lego.com/biassets/bi/4115719.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4115719.png",
      "Description": "BATLORD W. WAGGON",
      "Notes": "BUILD. INSTR. FOR 2540 SHELL-I",
      "DashedNumber": "2540-1"
    },
    {
      "ID": 902,
      "SetNumber": 2540,
      "URL": "https://www.lego.com/biassets/bi/4133259.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4133259.png",
      "Description": "BATLORD W. WAGGON",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2540-1"
    },
    {
      "ID": 903,
      "SetNumber": 2541,
      "URL": "https://www.lego.com/biassets/bi/4115720.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4115720.png",
      "Description": "ADVENTURER CAR",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2541-1"
    },
    {
      "ID": 904,
      "SetNumber": 2541,
      "URL": "https://www.lego.com/biassets/bi/4133260.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4133260.png",
      "Description": "ADVENTURER CAR",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2541-1"
    },
    {
      "ID": 905,
      "SetNumber": 2542,
      "URL": "https://www.lego.com/biassets/bi/4115721.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4115721.png",
      "Description": "ADVENTURER PLANE",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2542-1"
    },
    {
      "ID": 906,
      "SetNumber": 2542,
      "URL": "https://www.lego.com/biassets/bi/4133261.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4133261.png",
      "Description": "ADVENTURER PLANE",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2542-1"
    },
    {
      "ID": 907,
      "SetNumber": 2543,
      "URL": "https://www.lego.com/biassets/bi/4115722.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4115722.png",
      "Description": "ALIEN SPACE PLANE",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2543-1"
    },
    {
      "ID": 908,
      "SetNumber": 2544,
      "URL": "https://www.lego.com/biassets/bi/4115723.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4115723.png",
      "Description": "TECHNIC MC",
      "Notes": "BUILD. INSTR. FOR 2544 SHELL-I",
      "DashedNumber": "2544-1"
    },
    {
      "ID": 909,
      "SetNumber": 2554,
      "URL": "https://www.lego.com/biassets/bi/4117772.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4117772.png",
      "Description": "PIT STOP RACING",
      "Notes": "BUILDING INSTR. FOR 2554",
      "DashedNumber": "2554-1"
    },
    {
      "ID": 910,
      "SetNumber": 2555,
      "URL": "https://www.lego.com/biassets/bi/4117773.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4117773.png",
      "Description": "GIRLS ON BEACH",
      "Notes": "BUILDING INSTR. FOR 2555",
      "DashedNumber": "2555-1"
    },
    {
      "ID": 911,
      "SetNumber": 2556,
      "URL": "https://www.lego.com/biassets/bi/4117774.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4117774.png",
      "Description": "FORMEL 1 RACE CAR",
      "Notes": "BUILDING INSTR. FOR 2556",
      "DashedNumber": "2556-1"
    },
    {
      "ID": 912,
      "SetNumber": 2584,
      "URL": "https://www.lego.com/biassets/bi/4124657.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4124657.png",
      "Description": "BIKER BOB",
      "Notes": "BUILDINSTR. FOR 2584",
      "DashedNumber": "2584-1"
    },
    {
      "ID": 913,
      "SetNumber": 2585,
      "URL": "https://www.lego.com/biassets/bi/4124658.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4124658.png",
      "Description": "BOGEY",
      "Notes": "BUILDING INSTR. FOR 2585",
      "DashedNumber": "2585-1"
    },
    {
      "ID": 914,
      "SetNumber": 2586,
      "URL": "https://www.lego.com/biassets/bi/4124659.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4124659.png",
      "Description": "KING & THRONE",
      "Notes": "BUILDING INSTR. FOR 2586",
      "DashedNumber": "2586-1"
    },
    {
      "ID": 915,
      "SetNumber": 2741,
      "URL": "https://www.lego.com/biassets/bi/4120773.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4120773.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2741-1"
    },
    {
      "ID": 916,
      "SetNumber": 2741,
      "URL": "https://www.lego.com/biassets/bi/4105435.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4105435.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2741-1"
    },
    {
      "ID": 917,
      "SetNumber": 2743,
      "URL": "https://www.lego.com/biassets/bi/4124919.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4124919.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2743-1"
    },
    {
      "ID": 918,
      "SetNumber": 2769,
      "URL": "https://www.lego.com/biassets/bi/4125017.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4125017.png",
      "Description": "INFLIGHT JUNGLE EXPRESS",
      "Notes": "BUILDING INST. FOR 2769",
      "DashedNumber": "2769-1"
    },
    {
      "ID": 919,
      "SetNumber": 2774,
      "URL": "https://www.lego.com/biassets/bi/4125016.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4125016.png",
      "Description": "INFLIGHT RED TIGER",
      "Notes": "BUILD.INST. FOR 2774",
      "DashedNumber": "2774-1"
    },
    {
      "ID": 920,
      "SetNumber": 2847,
      "URL": "https://www.lego.com/biassets/bi/4111794.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4111794.png",
      "Description": "SPACE ALIEN PG1",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2847-1"
    },
    {
      "ID": 921,
      "SetNumber": 2849,
      "URL": "https://www.lego.com/biassets/bi/4111796.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4111796.png",
      "Description": "GYROCOPTER",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2849-1"
    },
    {
      "ID": 922,
      "SetNumber": 2854,
      "URL": "https://www.lego.com/biassets/bi/4117894.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4117894.png",
      "Description": "TRIKE - PURPLE",
      "Notes": "BUILDINGINSTR.FOR 2854-1 IN",
      "DashedNumber": "2854-1"
    },
    {
      "ID": 923,
      "SetNumber": 2854,
      "URL": "https://www.lego.com/biassets/bi/4117895.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4117895.png",
      "Description": "TRIKE - PURPLE",
      "Notes": "BUILDINGINSTR.FOR 2854-2 IN",
      "DashedNumber": "2854-1"
    },
    {
      "ID": 924,
      "SetNumber": 2879,
      "URL": "https://www.lego.com/biassets/bi/4117958.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4117958.png",
      "Description": "DESERT EXPEDITION",
      "Notes": "BUILDING INSTR. 5909/5948/2879",
      "DashedNumber": "2879-1"
    },
    {
      "ID": 925,
      "SetNumber": 2880,
      "URL": "https://www.lego.com/biassets/bi/4111800.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4111800.png",
      "Description": "WHITE SPORTS CAR",
      "Notes": "BUILDING INSTR. ITEM 2880",
      "DashedNumber": "2880-1"
    },
    {
      "ID": 926,
      "SetNumber": 2884,
      "URL": "https://www.lego.com/biassets/bi/4115303.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4115303.png",
      "Description": "WHITE MINI PLANE",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2884-1"
    },
    {
      "ID": 927,
      "SetNumber": 2886,
      "URL": "https://www.lego.com/biassets/bi/4115305.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4115305.png",
      "Description": "BLACK FORMULA 1",
      "Notes": "BUILDING INSTR. ITEM 2886 IN",
      "DashedNumber": "2886-1"
    },
    {
      "ID": 928,
      "SetNumber": 2890,
      "URL": "https://www.lego.com/biassets/bi/4115655.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4115655.png",
      "Description": "CASTLE SINGLE CATAPULT",
      "Notes": "BUILDINGINSTRUCTION FOR 2890",
      "DashedNumber": "2890-1"
    },
    {
      "ID": 929,
      "SetNumber": 2892,
      "URL": "https://www.lego.com/biassets/bi/4115657.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4115657.png",
      "Description": "CASTLE BOAT W. ARMING",
      "Notes": "BI FOR 2892",
      "DashedNumber": "2892-1"
    },
    {
      "ID": 930,
      "SetNumber": 2905,
      "URL": "https://www.lego.com/biassets/bi/120646.pdf",
      "Images": "https://www.lego.com/biassets/biimg/120646.png",
      "Description": "TOOLO SUPPLEMENTARY SET",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2905-1"
    },
    {
      "ID": 931,
      "SetNumber": 2913,
      "URL": "https://www.lego.com/biassets/bi/4132940.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4132940.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2913-1"
    },
    {
      "ID": 932,
      "SetNumber": 2914,
      "URL": "https://www.lego.com/biassets/bi/4132943.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4132943.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2914-1"
    },
    {
      "ID": 933,
      "SetNumber": 2916,
      "URL": "https://www.lego.com/biassets/bi/4133409.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4133409.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2916-1"
    },
    {
      "ID": 934,
      "SetNumber": 2928,
      "URL": "https://www.lego.com/biassets/bi/4298310.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4298310.png",
      "Description": "City In-Flight 2006",
      "Notes": "BUILDING INSTRUC.,1/2 ART.2928",
      "DashedNumber": "2928-1"
    },
    {
      "ID": 935,
      "SetNumber": 2928,
      "URL": "https://www.lego.com/biassets/bi/4298315.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4298315.png",
      "Description": "City In-Flight 2006",
      "Notes": "BUILDING INSTRUC, 2/2 ART.2928",
      "DashedNumber": "2928-1"
    },
    {
      "ID": 936,
      "SetNumber": 2935,
      "URL": "https://www.lego.com/biassets/bi/4104848.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4104848.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "2935-1"
    },
    {
      "ID": 937,
      "SetNumber": 2962,
      "URL": "https://www.lego.com/biassets/bi/4120627.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4120627.png",
      "Description": "RES-Q CAR",
      "Notes": "BUILDING INSTR. FOR 2962",
      "DashedNumber": "2962-1"
    },
    {
      "ID": 938,
      "SetNumber": 2963,
      "URL": "https://www.lego.com/biassets/bi/4120847.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4120847.png",
      "Description": "X-TREME CAR",
      "Notes": "BUILDING INSTR. FOR 2963",
      "DashedNumber": "2963-1"
    },
    {
      "ID": 939,
      "SetNumber": 2964,
      "URL": "https://www.lego.com/biassets/bi/4120855.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4120855.png",
      "Description": "SPACE INSECTOIDS - VEHICLE",
      "Notes": "BUILDING INSTR. FOR 2964",
      "DashedNumber": "2964-1"
    },
    {
      "ID": 940,
      "SetNumber": 2965,
      "URL": "https://www.lego.com/biassets/bi/4120930.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4120930.png",
      "Description": "SPACE INSECTOIDS - INSECT",
      "Notes": "BUILDING INSTR. FOR 2965",
      "DashedNumber": "2965-1"
    },
    {
      "ID": 941,
      "SetNumber": 2995,
      "URL": "https://www.lego.com/biassets/bi/4120526.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4120526.png",
      "Description": "ADVENTURER - CAR",
      "Notes": "BUILDING INSTR. FOR 2995",
      "DashedNumber": "2995-1"
    },
    {
      "ID": 942,
      "SetNumber": 2996,
      "URL": "https://www.lego.com/biassets/bi/4120527.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4120527.png",
      "Description": "ADVENTURER - TEMPLE",
      "Notes": "BUILDING INSTR. FOR 2996",
      "DashedNumber": "2996-1"
    },
    {
      "ID": 943,
      "SetNumber": 2998,
      "URL": "https://www.lego.com/biassets/bi/4120913.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4120913.png",
      "Description": "STENA LINE CATAMARAN",
      "Notes": "BUILDING INSTR. FOR 2998",
      "DashedNumber": "2998-1"
    },
    {
      "ID": 944,
      "SetNumber": 3000,
      "URL": "https://www.lego.com/biassets/bi/4129091.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4129091.png",
      "Description": "JUMPING TRIKE",
      "Notes": "BI FOR 3000",
      "DashedNumber": "3000-1"
    },
    {
      "ID": 945,
      "SetNumber": 3001,
      "URL": "https://www.lego.com/biassets/bi/4129092.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4129092.png",
      "Description": "PROPELLER CAR",
      "Notes": "BI FOR 3001",
      "DashedNumber": "3001-1"
    },
    {
      "ID": 946,
      "SetNumber": 3003,
      "URL": "https://www.lego.com/biassets/bi/4129093.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4129093.png",
      "Description": "MOTOR CYCLE",
      "Notes": "BI FOR 3003",
      "DashedNumber": "3003-1"
    },
    {
      "ID": 947,
      "SetNumber": 3005,
      "URL": "https://www.lego.com/biassets/bi/4129094.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4129094.png",
      "Description": "PISTON CAR",
      "Notes": "BI FOR 3005",
      "DashedNumber": "3005-1"
    },
    {
      "ID": 948,
      "SetNumber": 3012,
      "URL": "https://www.lego.com/biassets/bi/4117871.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4117871.png",
      "Description": "# 6800",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3012-1"
    },
    {
      "ID": 949,
      "SetNumber": 3013,
      "URL": "https://www.lego.com/biassets/bi/4117872.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4117872.png",
      "Description": "# 1954",
      "Notes": "BUILDINSTR. FOR 3013",
      "DashedNumber": "3013-1"
    },
    {
      "ID": 950,
      "SetNumber": 3014,
      "URL": "https://www.lego.com/biassets/bi/4117873.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4117873.png",
      "Description": "# 1711",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3014-1"
    },
    {
      "ID": 951,
      "SetNumber": 3015,
      "URL": "https://www.lego.com/biassets/bi/4117874.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4117874.png",
      "Description": "# 1916",
      "Notes": "BUILDINSTR. FOR 3015",
      "DashedNumber": "3015-1"
    },
    {
      "ID": 952,
      "SetNumber": 3016,
      "URL": "https://www.lego.com/biassets/bi/4118033.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4118033.png",
      "Description": "PG1 CASTLE 1",
      "Notes": "BUILDING INSTR. FOR 3016",
      "DashedNumber": "3016-1"
    },
    {
      "ID": 953,
      "SetNumber": 3017,
      "URL": "https://www.lego.com/biassets/bi/4118034.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4118034.png",
      "Description": "PG1 CASTLE 2",
      "Notes": "BUILDING INSTR. FOR 3017",
      "DashedNumber": "3017-1"
    },
    {
      "ID": 954,
      "SetNumber": 3018,
      "URL": "https://www.lego.com/biassets/bi/4118035.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4118035.png",
      "Description": "PG1 CASTLE 3",
      "Notes": "BUILDING INSTR. FOR 3018",
      "DashedNumber": "3018-1"
    },
    {
      "ID": 955,
      "SetNumber": 3019,
      "URL": "https://www.lego.com/biassets/bi/4118036.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4118036.png",
      "Description": "PG1 CASTLE 4",
      "Notes": "BUILDING INSTR. FOR 3019",
      "DashedNumber": "3019-1"
    },
    {
      "ID": 956,
      "SetNumber": 3020,
      "URL": "https://www.lego.com/biassets/bi/4123620.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4123620.png",
      "Description": "PG1 ADV. 1",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3020-1"
    },
    {
      "ID": 957,
      "SetNumber": 3021,
      "URL": "https://www.lego.com/biassets/bi/4123621.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4123621.png",
      "Description": "PG1 ADV. 2",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3021-1"
    },
    {
      "ID": 958,
      "SetNumber": 3022,
      "URL": "https://www.lego.com/biassets/bi/4123622.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4123622.png",
      "Description": "PG1 ADV. 3",
      "Notes": "BUILD.INST.FOR 3022 IN",
      "DashedNumber": "3022-1"
    },
    {
      "ID": 959,
      "SetNumber": 3023,
      "URL": "https://www.lego.com/biassets/bi/4123623.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4123623.png",
      "Description": "PG1 ADV. 4",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3023-1"
    },
    {
      "ID": 960,
      "SetNumber": 3039,
      "URL": "https://www.lego.com/biassets/bi/4123654.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4123654.png",
      "Description": "AIRPLANE",
      "Notes": "BUILDING INSTR. FOR 3039 US",
      "DashedNumber": "3039-1"
    },
    {
      "ID": 961,
      "SetNumber": 3050,
      "URL": "https://www.lego.com/biassets/bi/4124852.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4124852.png",
      "Description": "Shanghai Surprise",
      "Notes": "BUILD INST. FOR 3050",
      "DashedNumber": "3050-1"
    },
    {
      "ID": 962,
      "SetNumber": 3051,
      "URL": "https://www.lego.com/biassets/bi/4128424.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4128424.png",
      "Description": "RED DRAGONS ATTACK",
      "Notes": "BUILDING INST. FOR 3051",
      "DashedNumber": "3051-1"
    },
    {
      "ID": 963,
      "SetNumber": 3052,
      "URL": "https://www.lego.com/biassets/bi/4124881.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4124881.png",
      "Description": "Ninjas Fire Fortress",
      "Notes": "BUILDING INST. FOR 3052",
      "DashedNumber": "3052-1"
    },
    {
      "ID": 964,
      "SetNumber": 3053,
      "URL": "https://www.lego.com/biassets/bi/4124908.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4124908.png",
      "Description": "Emperors Stronghold",
      "Notes": "BUILDING INST. FOR 3053",
      "DashedNumber": "3053-1"
    },
    {
      "ID": 965,
      "SetNumber": 3055,
      "URL": "https://www.lego.com/biassets/bi/4123782.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4123782.png",
      "Description": "PG 1 CAR",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3055-1"
    },
    {
      "ID": 966,
      "SetNumber": 3056,
      "URL": "https://www.lego.com/biassets/bi/4123783.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4123783.png",
      "Description": "PG 1 GO-CART",
      "Notes": "BUILDING INST. FOR 3056 IN",
      "DashedNumber": "3056-1"
    },
    {
      "ID": 967,
      "SetNumber": 3061,
      "URL": "https://www.lego.com/biassets/bi/6001956.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6001956.png",
      "Description": "FRIENDS 2",
      "Notes": "BI 3005/64 - 3061 V29",
      "DashedNumber": "3061-1"
    },
    {
      "ID": 968,
      "SetNumber": 3061,
      "URL": "https://www.lego.com/biassets/bi/6001958.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6001958.png",
      "Description": "City Park Caf�",
      "Notes": "BI 3005/64 - 3061 V39",
      "DashedNumber": "3061-1"
    },
    {
      "ID": 969,
      "SetNumber": 3063,
      "URL": "https://www.lego.com/biassets/bi/6014454.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6014454.png",
      "Description": "Heartlake Flying Club",
      "Notes": "BI 3004 60/ 3063 V29/V39",
      "DashedNumber": "3063-1"
    },
    {
      "ID": 970,
      "SetNumber": 3063,
      "URL": "https://www.lego.com/biassets/bi/6014459.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6014459.png",
      "Description": "Heartlake Flying Club",
      "Notes": "BI 3004 60/ 3063 V39/V29",
      "DashedNumber": "3063-1"
    },
    {
      "ID": 971,
      "SetNumber": 3065,
      "URL": "https://www.lego.com/biassets/bi/6006114.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6006114.png",
      "Description": "Olivias Tree House",
      "Notes": "BI 3004 60/3065 V29",
      "DashedNumber": "3065-1"
    },
    {
      "ID": 972,
      "SetNumber": 3065,
      "URL": "https://www.lego.com/biassets/bi/6006116.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6006116.png",
      "Description": "Olivias Tree House",
      "Notes": "BI 3004 60/3065 V39",
      "DashedNumber": "3065-1"
    },
    {
      "ID": 973,
      "SetNumber": 3066,
      "URL": "https://www.lego.com/biassets/bi/4125043.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4125043.png",
      "Description": "MINI JET",
      "Notes": "BUILDING INST. FOR 3066",
      "DashedNumber": "3066-1"
    },
    {
      "ID": 974,
      "SetNumber": 3067,
      "URL": "https://www.lego.com/biassets/bi/4125044.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4125044.png",
      "Description": "REMOTE CONTROL ROCKET",
      "Notes": "BUILDING INST. FOR 3067",
      "DashedNumber": "3067-1"
    },
    {
      "ID": 975,
      "SetNumber": 3068,
      "URL": "https://www.lego.com/biassets/bi/4125045.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4125045.png",
      "Description": "RADAR CAR",
      "Notes": "BUILDING INST. FOR 3068",
      "DashedNumber": "3068-1"
    },
    {
      "ID": 976,
      "SetNumber": 3069,
      "URL": "https://www.lego.com/biassets/bi/4125046.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4125046.png",
      "Description": "SPACE JET",
      "Notes": "BUILDING INST. FOR 3069",
      "DashedNumber": "3069-1"
    },
    {
      "ID": 977,
      "SetNumber": 3070,
      "URL": "https://www.lego.com/biassets/bi/4129007.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4129007.png",
      "Description": "MOSCASPEEDER",
      "Notes": "BUILDING INST. FOR 3070 IN",
      "DashedNumber": "3070-1"
    },
    {
      "ID": 978,
      "SetNumber": 3071,
      "URL": "https://www.lego.com/biassets/bi/4129008.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4129008.png",
      "Description": "GIGABOT HOVER",
      "Notes": "BUILDING INST. FOR 3071 IN",
      "DashedNumber": "3071-1"
    },
    {
      "ID": 979,
      "SetNumber": 3072,
      "URL": "https://www.lego.com/biassets/bi/4129009.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4129009.png",
      "Description": "SPEED BUZZER",
      "Notes": "BUILDING INST. FOR 3072 IN",
      "DashedNumber": "3072-1"
    },
    {
      "ID": 980,
      "SetNumber": 3073,
      "URL": "https://www.lego.com/biassets/bi/4129010.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4129010.png",
      "Description": "SWARM INTRUDER",
      "Notes": "BUILDING INST. FOR 3073 IN",
      "DashedNumber": "3073-1"
    },
    {
      "ID": 981,
      "SetNumber": 3074,
      "URL": "https://www.lego.com/biassets/bi/4127822.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4127822.png",
      "Description": "RED NINJA DRAGON FLYER",
      "Notes": "BUILD.INST FOR 3074 IN",
      "DashedNumber": "3074-1"
    },
    {
      "ID": 982,
      "SetNumber": 3075,
      "URL": "https://www.lego.com/biassets/bi/4127823.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4127823.png",
      "Description": "NINJA MASTER BOAT",
      "Notes": "BUILD.INST. FOR 3075 IN",
      "DashedNumber": "3075-1"
    },
    {
      "ID": 983,
      "SetNumber": 3076,
      "URL": "https://www.lego.com/biassets/bi/4127824.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4127824.png",
      "Description": "WHITE NINJA AXE WAGON",
      "Notes": "BUILD.INST. FOR 3076 IN",
      "DashedNumber": "3076-1"
    },
    {
      "ID": 984,
      "SetNumber": 3077,
      "URL": "https://www.lego.com/biassets/bi/4127825.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4127825.png",
      "Description": "SHOGUN PLATFORM",
      "Notes": "BUILD.INST. FOR 3077 IN",
      "DashedNumber": "3077-1"
    },
    {
      "ID": 985,
      "SetNumber": 3112,
      "URL": "https://www.lego.com/biassets/bi/4120949.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4120949.png",
      "Description": "SCALA GIGGLY NURSERY",
      "Notes": "BUILDING INSTR. FOR 3112",
      "DashedNumber": "3112-1"
    },
    {
      "ID": 986,
      "SetNumber": 3114,
      "URL": "https://www.lego.com/biassets/bi/4120950.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4120950.png",
      "Description": "SCALA PLACE FOR ME",
      "Notes": "BUILDING INSTR. FOR 3114",
      "DashedNumber": "3114-1"
    },
    {
      "ID": 987,
      "SetNumber": 3115,
      "URL": "https://www.lego.com/biassets/bi/4120951.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4120951.png",
      "Description": "SPICY KITCHEN",
      "Notes": "BUILDING INSTR. FOR 3115",
      "DashedNumber": "3115-1"
    },
    {
      "ID": 988,
      "SetNumber": 3116,
      "URL": "https://www.lego.com/biassets/bi/4120952.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4120952.png",
      "Description": "SCALA COOL ICECREAM CAFE",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3116-1"
    },
    {
      "ID": 989,
      "SetNumber": 3116,
      "URL": "https://www.lego.com/biassets/bi/4120945.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4120945.png",
      "Description": "SCALA COOL ICECREAM CAFE",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3116-1"
    },
    {
      "ID": 990,
      "SetNumber": 3117,
      "URL": "https://www.lego.com/biassets/bi/4120953.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4120953.png",
      "Description": "SPLASHY SWIMMINGPOOL",
      "Notes": "BUILDING INSTR. FOR 3117",
      "DashedNumber": "3117-1"
    },
    {
      "ID": 991,
      "SetNumber": 3118,
      "URL": "https://www.lego.com/biassets/bi/4120954.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4120954.png",
      "Description": "FUNKY FASHION SHOP",
      "Notes": "BUILDING INSTR. FOR 3118",
      "DashedNumber": "3118-1"
    },
    {
      "ID": 992,
      "SetNumber": 3119,
      "URL": "https://www.lego.com/biassets/bi/4120955.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4120955.png",
      "Description": "SUNSHINE HOME",
      "Notes": "BUILDING INSTR. FOR 3119",
      "DashedNumber": "3119-1"
    },
    {
      "ID": 993,
      "SetNumber": 3120,
      "URL": "https://www.lego.com/biassets/bi/4120956.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4120956.png",
      "Description": "SCALA MOVING IN",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3120-1"
    },
    {
      "ID": 994,
      "SetNumber": 3123,
      "URL": "https://www.lego.com/biassets/bi/4164084.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4164084.png",
      "Description": "Emmas Chill-out Kitchen",
      "Notes": "BI 3123 IN",
      "DashedNumber": "3123-1"
    },
    {
      "ID": 995,
      "SetNumber": 3124,
      "URL": "https://www.lego.com/biassets/bi/4164085.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4164085.png",
      "Description": "Indies Stable",
      "Notes": "BI 3124 IN",
      "DashedNumber": "3124-1"
    },
    {
      "ID": 996,
      "SetNumber": 3142,
      "URL": "https://www.lego.com/biassets/bi/4129340.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4129340.png",
      "Description": "MARIE`S CREATIVE CORNER",
      "Notes": "BUILD.INST FOR 3142",
      "DashedNumber": "3142-1"
    },
    {
      "ID": 997,
      "SetNumber": 3143,
      "URL": "https://www.lego.com/biassets/bi/4129328.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4129328.png",
      "Description": "Ridin Camp Out",
      "Notes": "BUILD.INST. FOR 3143",
      "DashedNumber": "3143-1"
    },
    {
      "ID": 998,
      "SetNumber": 3144,
      "URL": "https://www.lego.com/biassets/bi/4129329.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4129329.png",
      "Description": "Wilderness Waterstop",
      "Notes": "BUILD. INST. FOR 3144",
      "DashedNumber": "3144-1"
    },
    {
      "ID": 999,
      "SetNumber": 3148,
      "URL": "https://www.lego.com/biassets/bi/4132568.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4132568.png",
      "Description": "Carla and the Bear Cubs",
      "Notes": "BUILDING INST. FOR 3148 IN",
      "DashedNumber": "3148-1"
    },
    {
      "ID": 1000,
      "SetNumber": 3149,
      "URL": "https://www.lego.com/biassets/bi/4133273.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4133273.png",
      "Description": "Happy Home",
      "Notes": "BUILD.INST FOR 3149 IN",
      "DashedNumber": "3149-1"
    },
    {
      "ID": 1001,
      "SetNumber": 3150,
      "URL": "https://www.lego.com/biassets/bi/4133274.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4133274.png",
      "Description": "Puppy Playground",
      "Notes": "BUILD.INST. FOR 3150 IN",
      "DashedNumber": "3150-1"
    },
    {
      "ID": 1002,
      "SetNumber": 3151,
      "URL": "https://www.lego.com/biassets/bi/4133276.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4133276.png",
      "Description": "Emma on the Move",
      "Notes": "BUILD.INST FOR 3151 IN",
      "DashedNumber": "3151-1"
    },
    {
      "ID": 1003,
      "SetNumber": 3152,
      "URL": "https://www.lego.com/biassets/bi/4132576.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4132576.png",
      "Description": "Playroom for Baby Thomas",
      "Notes": "BUILD.INST. FOR 3152 IN",
      "DashedNumber": "3152-1"
    },
    {
      "ID": 1004,
      "SetNumber": 3159,
      "URL": "https://www.lego.com/biassets/bi/4133277.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4133277.png",
      "Description": "Celebration",
      "Notes": "BUILD.INST. FOR 3159 IN",
      "DashedNumber": "3159-1"
    },
    {
      "ID": 1005,
      "SetNumber": 3177,
      "URL": "https://www.lego.com/biassets/bi/4584498.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4584498.png",
      "Description": "CITY Value Pack",
      "Notes": "BI 3001/16 - 3177 V. 29",
      "DashedNumber": "3177-1"
    },
    {
      "ID": 1006,
      "SetNumber": 3177,
      "URL": "https://www.lego.com/biassets/bi/4584500.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4584500.png",
      "Description": "Small car",
      "Notes": "BI 3001/16 - 3177 V. 39",
      "DashedNumber": "3177-1"
    },
    {
      "ID": 1007,
      "SetNumber": 3178,
      "URL": "https://www.lego.com/biassets/bi/4584654.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4584654.png",
      "Description": "EU Book 1",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3178-1"
    },
    {
      "ID": 1008,
      "SetNumber": 3178,
      "URL": "https://www.lego.com/biassets/bi/4584655.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4584655.png",
      "Description": "NA Book 1",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3178-1"
    },
    {
      "ID": 1009,
      "SetNumber": 3178,
      "URL": "https://www.lego.com/biassets/bi/4584657.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4584657.png",
      "Description": "Seaplane",
      "Notes": "BI 3003/24 - 3178 V.29 2/2",
      "DashedNumber": "3178-1"
    },
    {
      "ID": 1010,
      "SetNumber": 3178,
      "URL": "https://www.lego.com/biassets/bi/4584658.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4584658.png",
      "Description": "Seaplane",
      "Notes": "BI 3003/24 - 3178 V. 39 2/2",
      "DashedNumber": "3178-1"
    },
    {
      "ID": 1011,
      "SetNumber": 3178,
      "URL": "https://www.lego.com/biassets/bi/6012190.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6012190.png",
      "Description": "Seaplane",
      "Notes": "BI 3001/16 - 3178 V. 39 1/2",
      "DashedNumber": "3178-1"
    },
    {
      "ID": 1012,
      "SetNumber": 3178,
      "URL": "https://www.lego.com/biassets/bi/6012188.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6012188.png",
      "Description": "Seaplane",
      "Notes": "BI 3001/16 - 3178 V.29 1/2",
      "DashedNumber": "3178-1"
    },
    {
      "ID": 1013,
      "SetNumber": 3179,
      "URL": "https://www.lego.com/biassets/bi/4584643.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4584643.png",
      "Description": "CITY Town",
      "Notes": "BI 3002/32- 3179 V. 29",
      "DashedNumber": "3179-1"
    },
    {
      "ID": 1014,
      "SetNumber": 3179,
      "URL": "https://www.lego.com/biassets/bi/4584645.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4584645.png",
      "Description": "Repair Truck",
      "Notes": "BI 3002/32- 3179 V. 39",
      "DashedNumber": "3179-1"
    },
    {
      "ID": 1015,
      "SetNumber": 3180,
      "URL": "https://www.lego.com/biassets/bi/4584648.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4584648.png",
      "Description": "Tank Truck",
      "Notes": "BI 3004/56 - 3180 V.29",
      "DashedNumber": "3180-1"
    },
    {
      "ID": 1016,
      "SetNumber": 3180,
      "URL": "https://www.lego.com/biassets/bi/4584650.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4584650.png",
      "Description": "Tank Truck",
      "Notes": "BI 3004/56 - 3180 V. 39",
      "DashedNumber": "3180-1"
    },
    {
      "ID": 1017,
      "SetNumber": 3181,
      "URL": "https://www.lego.com/biassets/bi/4584663.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4584663.png",
      "Description": "Passenger Plane",
      "Notes": "BI 3005/60 - 3181 V. 39 2/2",
      "DashedNumber": "3181-1"
    },
    {
      "ID": 1018,
      "SetNumber": 3181,
      "URL": "https://www.lego.com/biassets/bi/4587233.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4587233.png",
      "Description": "Passenger Plane",
      "Notes": "BI 3010/24 - 3181 V.39 1/2",
      "DashedNumber": "3181-1"
    },
    {
      "ID": 1019,
      "SetNumber": 3181,
      "URL": "https://www.lego.com/biassets/bi/4587232.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4587232.png",
      "Description": "Passenger Plane",
      "Notes": "BI 3010/24 - 3181 V.29 1/2",
      "DashedNumber": "3181-1"
    },
    {
      "ID": 1020,
      "SetNumber": 3181,
      "URL": "https://www.lego.com/biassets/bi/4584662.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4584662.png",
      "Description": "Passenger Plane",
      "Notes": "BI 3005/60 - 3181 V. 29 2/2",
      "DashedNumber": "3181-1"
    },
    {
      "ID": 1021,
      "SetNumber": 3182,
      "URL": "https://www.lego.com/biassets/bi/4585182.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4585182.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3182-1"
    },
    {
      "ID": 1022,
      "SetNumber": 3182,
      "URL": "https://www.lego.com/biassets/bi/4585184.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4585184.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3182-1"
    },
    {
      "ID": 1023,
      "SetNumber": 3182,
      "URL": "https://www.lego.com/biassets/bi/4585186.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4585186.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3182-1"
    },
    {
      "ID": 1024,
      "SetNumber": 3182,
      "URL": "https://www.lego.com/biassets/bi/4585185.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4585185.png",
      "Description": "Book 2",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3182-1"
    },
    {
      "ID": 1025,
      "SetNumber": 3182,
      "URL": "https://www.lego.com/biassets/bi/4585187.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4585187.png",
      "Description": "Airport",
      "Notes": "BI 3002/24 - 3182 V.29 4/4",
      "DashedNumber": "3182-1"
    },
    {
      "ID": 1026,
      "SetNumber": 3182,
      "URL": "https://www.lego.com/biassets/bi/4585188.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4585188.png",
      "Description": "Book 4",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3182-1"
    },
    {
      "ID": 1027,
      "SetNumber": 3182,
      "URL": "https://www.lego.com/biassets/bi/4585189.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4585189.png",
      "Description": "Airport",
      "Notes": "BI 3009/60+4 - 3182 V.29 2/4",
      "DashedNumber": "3182-1"
    },
    {
      "ID": 1028,
      "SetNumber": 3182,
      "URL": "https://www.lego.com/biassets/bi/4585190.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4585190.png",
      "Description": "Book 3",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3182-1"
    },
    {
      "ID": 1029,
      "SetNumber": 3182,
      "URL": "https://www.lego.com/biassets/bi/4590064.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4590064.png",
      "Description": "Book 1",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3182-1"
    },
    {
      "ID": 1030,
      "SetNumber": 3182,
      "URL": "https://www.lego.com/biassets/bi/4590067.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4590067.png",
      "Description": "Airport",
      "Notes": "BI 3004/32 - 3182 V. 39 1/4",
      "DashedNumber": "3182-1"
    },
    {
      "ID": 1031,
      "SetNumber": 3182,
      "URL": "https://www.lego.com/biassets/bi/4598417.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4598417.png",
      "Description": "Airport",
      "Notes": "BI 3006/64 - 3182 V.29 3/4",
      "DashedNumber": "3182-1"
    },
    {
      "ID": 1032,
      "SetNumber": 3182,
      "URL": "https://www.lego.com/biassets/bi/4598419.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4598419.png",
      "Description": "Book 3",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3182-1"
    },
    {
      "ID": 1033,
      "SetNumber": 3182,
      "URL": "https://www.lego.com/biassets/bi/4626061.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4626061.png",
      "Description": "Airport",
      "Notes": "BI 3002/24 - 3182 V.39 4/4",
      "DashedNumber": "3182-1"
    },
    {
      "ID": 1034,
      "SetNumber": 3182,
      "URL": "https://www.lego.com/biassets/bi/6012191.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6012191.png",
      "Description": "Airport",
      "Notes": "BI 3004/32 - 3182 V. 29 1/4",
      "DashedNumber": "3182-1"
    },
    {
      "ID": 1035,
      "SetNumber": 3182,
      "URL": "https://www.lego.com/biassets/bi/6012192.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6012192.png",
      "Description": "Airport",
      "Notes": "BI 3004/32 - 3182 V. 39 1/4",
      "DashedNumber": "3182-1"
    },
    {
      "ID": 1036,
      "SetNumber": 3182,
      "URL": "https://www.lego.com/biassets/bi/4626125.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4626125.png",
      "Description": "Airport",
      "Notes": "BI 3006/64 - 3182 V.39 3/4",
      "DashedNumber": "3182-1"
    },
    {
      "ID": 1037,
      "SetNumber": 3182,
      "URL": "https://www.lego.com/biassets/bi/4626062.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4626062.png",
      "Description": "Airport",
      "Notes": "BI 3009/60+4 - 3182 V.39 2/4",
      "DashedNumber": "3182-1"
    },
    {
      "ID": 1038,
      "SetNumber": 3182,
      "URL": "https://www.lego.com/biassets/bi/4626066.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4626066.png",
      "Description": "Airport",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3182-1"
    },
    {
      "ID": 1039,
      "SetNumber": 3183,
      "URL": "https://www.lego.com/biassets/bi/6006117.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6006117.png",
      "Description": "FRIENDS 2",
      "Notes": "BI 3004/40 -3183 V29",
      "DashedNumber": "3183-1"
    },
    {
      "ID": 1040,
      "SetNumber": 3183,
      "URL": "https://www.lego.com/biassets/bi/6006118.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6006118.png",
      "Description": "Stephanies Cool Convertible",
      "Notes": "BI 3004/40 -3183 V39",
      "DashedNumber": "3183-1"
    },
    {
      "ID": 1041,
      "SetNumber": 3184,
      "URL": "https://www.lego.com/biassets/bi/6014698.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6014698.png",
      "Description": "Adventure Camper",
      "Notes": "BI 3004/24 - 3184 V29/V39 BOOK 1",
      "DashedNumber": "3184-1"
    },
    {
      "ID": 1042,
      "SetNumber": 3184,
      "URL": "https://www.lego.com/biassets/bi/6014699.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6014699.png",
      "Description": "Adventure Camper",
      "Notes": "BI 3004/24 - 3184 V39/V29 BOOK 1",
      "DashedNumber": "3184-1"
    },
    {
      "ID": 1043,
      "SetNumber": 3184,
      "URL": "https://www.lego.com/biassets/bi/6014701.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6014701.png",
      "Description": "Adventure Camper",
      "Notes": "BI 3004/64+4-65*- 3184 V29/V39 BOOK 2",
      "DashedNumber": "3184-1"
    },
    {
      "ID": 1044,
      "SetNumber": 3184,
      "URL": "https://www.lego.com/biassets/bi/6014702.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6014702.png",
      "Description": "Adventure Camper",
      "Notes": "BI 3004/64+4-65*- 3184 V39/V29 BOOK 2",
      "DashedNumber": "3184-1"
    },
    {
      "ID": 1045,
      "SetNumber": 3185,
      "URL": "https://www.lego.com/biassets/bi/6029678.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6029678.png",
      "Description": "Summer Riding Camp",
      "Notes": "BI 3004/68+4*- 3185 V29/V39 1/3",
      "DashedNumber": "3185-1"
    },
    {
      "ID": 1046,
      "SetNumber": 3185,
      "URL": "https://www.lego.com/biassets/bi/6029679.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6029679.png",
      "Description": "Summer Riding Camp",
      "Notes": "BI 3004/68+4*- 3185 V39/V29 1/3",
      "DashedNumber": "3185-1"
    },
    {
      "ID": 1047,
      "SetNumber": 3185,
      "URL": "https://www.lego.com/biassets/bi/6014705.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6014705.png",
      "Description": "Summer Riding Camp",
      "Notes": "BI 3005/80+4*- 3185 V29/V39 2/3",
      "DashedNumber": "3185-1"
    },
    {
      "ID": 1048,
      "SetNumber": 3185,
      "URL": "https://www.lego.com/biassets/bi/6014707.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6014707.png",
      "Description": "Summer Riding Camp",
      "Notes": "BI 3005/80+4*- 3185 V29/V39 3/3",
      "DashedNumber": "3185-1"
    },
    {
      "ID": 1049,
      "SetNumber": 3185,
      "URL": "https://www.lego.com/biassets/bi/6014706.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6014706.png",
      "Description": "Summer Riding Camp",
      "Notes": "BI 3005/80+4*- 3185 V39/V29 2/3",
      "DashedNumber": "3185-1"
    },
    {
      "ID": 1050,
      "SetNumber": 3185,
      "URL": "https://www.lego.com/biassets/bi/6014708.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6014708.png",
      "Description": "Summer Riding Camp",
      "Notes": "BI 3005/80+4*- 3185 V39/V29 3/3",
      "DashedNumber": "3185-1"
    },
    {
      "ID": 1051,
      "SetNumber": 3186,
      "URL": "https://www.lego.com/biassets/bi/6014461.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6014461.png",
      "Description": "Emmas Horse Trailer",
      "Notes": "BI 3004/68+4*- 3186 V29/V39",
      "DashedNumber": "3186-1"
    },
    {
      "ID": 1052,
      "SetNumber": 3186,
      "URL": "https://www.lego.com/biassets/bi/6014462.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6014462.png",
      "Description": "Emmas Horse Trailer",
      "Notes": "BI 3004/68+4*- 3186 V39/V29",
      "DashedNumber": "3186-1"
    },
    {
      "ID": 1053,
      "SetNumber": 3187,
      "URL": "https://www.lego.com/biassets/bi/6006120.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6006120.png",
      "Description": "FRIENDS 2",
      "Notes": "BI 3005/60 -3187 V29",
      "DashedNumber": "3187-1"
    },
    {
      "ID": 1054,
      "SetNumber": 3187,
      "URL": "https://www.lego.com/biassets/bi/6006125.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6006125.png",
      "Description": "Butterfly Beauty Shop",
      "Notes": "BI 3005/60 -3187 V39",
      "DashedNumber": "3187-1"
    },
    {
      "ID": 1055,
      "SetNumber": 3188,
      "URL": "https://www.lego.com/biassets/bi/6006127.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6006127.png",
      "Description": "Heartlake Vet",
      "Notes": "BI 3005/80+4*-3188 V29",
      "DashedNumber": "3188-1"
    },
    {
      "ID": 1056,
      "SetNumber": 3188,
      "URL": "https://www.lego.com/biassets/bi/6006128.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6006128.png",
      "Description": "Heartlake Vet",
      "Notes": "BI 3005/80+4*-3188 V39",
      "DashedNumber": "3188-1"
    },
    {
      "ID": 1057,
      "SetNumber": 3189,
      "URL": "https://www.lego.com/biassets/bi/6029680.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6029680.png",
      "Description": "Heartlake Stables",
      "Notes": "BI 3004/80+4*- 3189 V29/V39 BOOK 1",
      "DashedNumber": "3189-1"
    },
    {
      "ID": 1058,
      "SetNumber": 3189,
      "URL": "https://www.lego.com/biassets/bi/6029681.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6029681.png",
      "Description": "Heartlake Stables",
      "Notes": "BI 3004/80+4*- 3189 V39/V29 BOOK 1",
      "DashedNumber": "3189-1"
    },
    {
      "ID": 1059,
      "SetNumber": 3189,
      "URL": "https://www.lego.com/biassets/bi/6014757.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6014757.png",
      "Description": "Heartlake Stables",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3189-1"
    },
    {
      "ID": 1060,
      "SetNumber": 3189,
      "URL": "https://www.lego.com/biassets/bi/6014758.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6014758.png",
      "Description": "Heartlake Stables",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3189-1"
    },
    {
      "ID": 1061,
      "SetNumber": 3189,
      "URL": "https://www.lego.com/biassets/bi/6045330.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6045330.png",
      "Description": "Heartlake Stables",
      "Notes": "BI 3017 / 48 - 65g, 3189 V29 BOOK 2",
      "DashedNumber": "3189-1"
    },
    {
      "ID": 1062,
      "SetNumber": 3189,
      "URL": "https://www.lego.com/biassets/bi/6045331.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6045331.png",
      "Description": "Heartlake Stables",
      "Notes": "BI 3017 / 48 - 65g, 3189 V39 BOOK 2",
      "DashedNumber": "3189-1"
    },
    {
      "ID": 1063,
      "SetNumber": 3192,
      "URL": "https://www.lego.com/biassets/bi/4278093.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4278093.png",
      "Description": "Cool Friends Clips & Pad",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3192-1"
    },
    {
      "ID": 1064,
      "SetNumber": 3193,
      "URL": "https://www.lego.com/biassets/bi/4278094.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4278094.png",
      "Description": "Fun Friends Frame",
      "Notes": "BI, 3193",
      "DashedNumber": "3193-1"
    },
    {
      "ID": 1065,
      "SetNumber": 3197,
      "URL": "https://www.lego.com/biassets/bi/4172178.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4172178.png",
      "Description": "BLUE AEROPLANE INFLIGHT",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3197-1"
    },
    {
      "ID": 1066,
      "SetNumber": 3200,
      "URL": "https://www.lego.com/biassets/bi/4108817.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4108817.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3200-1"
    },
    {
      "ID": 1067,
      "SetNumber": 3201,
      "URL": "https://www.lego.com/biassets/bi/4108818.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4108818.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3201-1"
    },
    {
      "ID": 1068,
      "SetNumber": 3202,
      "URL": "https://www.lego.com/biassets/bi/4108826.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4108826.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3202-1"
    },
    {
      "ID": 1069,
      "SetNumber": 3219,
      "URL": "https://www.lego.com/biassets/bi/4193299.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4193299.png",
      "Description": "MINI TIE Fighter �",
      "Notes": "BI 3219",
      "DashedNumber": "3219-1"
    },
    {
      "ID": 1070,
      "SetNumber": 3221,
      "URL": "https://www.lego.com/biassets/bi/4597391.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4597391.png",
      "Description": "LEGO� Truck",
      "Notes": "BI 3005/60 - 3221 V. 29",
      "DashedNumber": "3221-1"
    },
    {
      "ID": 1071,
      "SetNumber": 3221,
      "URL": "https://www.lego.com/biassets/bi/4597394.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4597394.png",
      "Description": "LEGO� Truck",
      "Notes": "BI 3005/60 - 3221 V. 39",
      "DashedNumber": "3221-1"
    },
    {
      "ID": 1072,
      "SetNumber": 3222,
      "URL": "https://www.lego.com/biassets/bi/4589988.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4589988.png",
      "Description": "Helicopter and Limousine",
      "Notes": "BI 3005/56-3222 V.39 2/2",
      "DashedNumber": "3222-1"
    },
    {
      "ID": 1073,
      "SetNumber": 3222,
      "URL": "https://www.lego.com/biassets/bi/4586731.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4586731.png",
      "Description": "Helicopter and Limousine",
      "Notes": "BI 3004/32 - 3222 V. 39 1/2",
      "DashedNumber": "3222-1"
    },
    {
      "ID": 1074,
      "SetNumber": 3222,
      "URL": "https://www.lego.com/biassets/bi/4586730.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4586730.png",
      "Description": "Helicopter and Limousine",
      "Notes": "BI 3004/32 - 3222 V.29 1/2",
      "DashedNumber": "3222-1"
    },
    {
      "ID": 1075,
      "SetNumber": 3222,
      "URL": "https://www.lego.com/biassets/bi/4589987.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4589987.png",
      "Description": "Helicopter and Limousine",
      "Notes": "BI 3005/56-3222 V.29 2/2",
      "DashedNumber": "3222-1"
    },
    {
      "ID": 1076,
      "SetNumber": 3223,
      "URL": "https://www.lego.com/biassets/bi/4202799.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4202799.png",
      "Description": "Little Fish",
      "Notes": "BUILDING INSTR.  3223 IN",
      "DashedNumber": "3223-1"
    },
    {
      "ID": 1077,
      "SetNumber": 3223,
      "URL": "https://www.lego.com/biassets/bi/4236186.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4236186.png",
      "Description": "Little Fish",
      "Notes": "BI, 3223 NA",
      "DashedNumber": "3223-1"
    },
    {
      "ID": 1078,
      "SetNumber": 3225,
      "URL": "https://www.lego.com/biassets/bi/4123863.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4123863.png",
      "Description": "LOCOMOTIVE OLD W.4 CARRIAGES",
      "Notes": "BUILDING INSTR. 3225 IN",
      "DashedNumber": "3225-1"
    },
    {
      "ID": 1079,
      "SetNumber": 3233,
      "URL": "https://www.lego.com/biassets/bi/4123618.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4123618.png",
      "Description": "INFLIGHT FANTASY BIRD GA",
      "Notes": "BUILD INST.FOR 3233 IN",
      "DashedNumber": "3233-1"
    },
    {
      "ID": 1080,
      "SetNumber": 3234,
      "URL": "https://www.lego.com/biassets/bi/4123619.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4123619.png",
      "Description": "INFLIGHT FANTASY BOAT GA",
      "Notes": "BUILD INST.FOR3234 IN",
      "DashedNumber": "3234-1"
    },
    {
      "ID": 1081,
      "SetNumber": 3240,
      "URL": "https://www.lego.com/biassets/bi/4108819.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4108819.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3240-1"
    },
    {
      "ID": 1082,
      "SetNumber": 3241,
      "URL": "https://www.lego.com/biassets/bi/4108820.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4108820.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3241-1"
    },
    {
      "ID": 1083,
      "SetNumber": 3242,
      "URL": "https://www.lego.com/biassets/bi/4108821.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4108821.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3242-1"
    },
    {
      "ID": 1084,
      "SetNumber": 3243,
      "URL": "https://www.lego.com/biassets/bi/4108822.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4108822.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3243-1"
    },
    {
      "ID": 1085,
      "SetNumber": 3270,
      "URL": "https://www.lego.com/biassets/bi/4108823.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4108823.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3270-1"
    },
    {
      "ID": 1086,
      "SetNumber": 3272,
      "URL": "https://www.lego.com/biassets/bi/4162547.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4162547.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3272-1"
    },
    {
      "ID": 1087,
      "SetNumber": 3290,
      "URL": "https://www.lego.com/biassets/bi/4108824.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4108824.png",
      "Description": "Cropped",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3290-1"
    },
    {
      "ID": 1088,
      "SetNumber": 3294,
      "URL": "https://www.lego.com/biassets/bi/4270659.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4270659.png",
      "Description": "Mucks Recycling Set",
      "Notes": "BI, 3294",
      "DashedNumber": "3294-1"
    },
    {
      "ID": 1089,
      "SetNumber": 3295,
      "URL": "https://www.lego.com/biassets/bi/4270657.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4270657.png",
      "Description": "Roleys Road Set",
      "Notes": "BI, 3295",
      "DashedNumber": "3295-1"
    },
    {
      "ID": 1090,
      "SetNumber": 3296,
      "URL": "https://www.lego.com/biassets/bi/4270656.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4270656.png",
      "Description": "Travis and the Mobile Caravan",
      "Notes": "BI, 3296",
      "DashedNumber": "3296-1"
    },
    {
      "ID": 1091,
      "SetNumber": 3297,
      "URL": "https://www.lego.com/biassets/bi/4270655.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4270655.png",
      "Description": "Scoop and Lofty at the Building Yard",
      "Notes": "BI, 3297",
      "DashedNumber": "3297-1"
    },
    {
      "ID": 1092,
      "SetNumber": 3299,
      "URL": "https://www.lego.com/biassets/bi/4494599.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4494599.png",
      "Description": "Scrambler and Dizzy at Bobs Workshop",
      "Notes": "BI  3299",
      "DashedNumber": "3299-1"
    },
    {
      "ID": 1093,
      "SetNumber": 3301,
      "URL": "https://www.lego.com/biassets/bi/4290519.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4290519.png",
      "Description": "Cargo-Loading Cranky",
      "Notes": "BI ART 3301",
      "DashedNumber": "3301-1"
    },
    {
      "ID": 1094,
      "SetNumber": 3303,
      "URL": "https://www.lego.com/biassets/bi/4118002.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4118002.png",
      "Description": "REFEREE, LINESMAN, GOAL ETC.",
      "Notes": "BUILDING INSTR. FOR 3303",
      "DashedNumber": "3303-1"
    },
    {
      "ID": 1095,
      "SetNumber": 3308,
      "URL": "https://www.lego.com/biassets/bi/4118003.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4118003.png",
      "Description": "SIDE STAND BEHIND GOAL",
      "Notes": "BUILDING INSTR. FOR 3308",
      "DashedNumber": "3308-1"
    },
    {
      "ID": 1096,
      "SetNumber": 3309,
      "URL": "https://www.lego.com/biassets/bi/4118004.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4118004.png",
      "Description": "MAIN STAND - SIDE",
      "Notes": "BUILDING INSTR. FOR 3309",
      "DashedNumber": "3309-1"
    },
    {
      "ID": 1097,
      "SetNumber": 3310,
      "URL": "https://www.lego.com/biassets/bi/4118005.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4118005.png",
      "Description": "MAIN STAND - CENTRE",
      "Notes": "BUILDING INSTR. FOR 3310",
      "DashedNumber": "3310-1"
    },
    {
      "ID": 1098,
      "SetNumber": 3311,
      "URL": "https://www.lego.com/biassets/bi/4118006.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4118006.png",
      "Description": "TELEVISION TOWER",
      "Notes": "BUILDING INSTR. FOR 3311",
      "DashedNumber": "3311-1"
    },
    {
      "ID": 1099,
      "SetNumber": 3312,
      "URL": "https://www.lego.com/biassets/bi/4118007.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4118007.png",
      "Description": "FIRST AID STATION",
      "Notes": "BUILDING INSTR. FOR 3312",
      "DashedNumber": "3312-1"
    },
    {
      "ID": 1100,
      "SetNumber": 3313,
      "URL": "https://www.lego.com/biassets/bi/4118008.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4118008.png",
      "Description": "FIELD SPOTLIGHT",
      "Notes": "BUILDING INSTR. FOR 3313",
      "DashedNumber": "3313-1"
    },
    {
      "ID": 1101,
      "SetNumber": 3314,
      "URL": "https://www.lego.com/biassets/bi/4118009.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4118009.png",
      "Description": "RIOT POLICE",
      "Notes": "BUILDING INSTR. FOR 3314",
      "DashedNumber": "3314-1"
    },
    {
      "ID": 1102,
      "SetNumber": 3315,
      "URL": "https://www.lego.com/biassets/bi/6001960.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6001960.png",
      "Description": "Olivias House",
      "Notes": "BI 3005/56- 3315 V39 1/2",
      "DashedNumber": "3315-1"
    },
    {
      "ID": 1103,
      "SetNumber": 3315,
      "URL": "https://www.lego.com/biassets/bi/6001959.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6001959.png",
      "Description": "Olivias House",
      "Notes": "BI 3005/56-3315 V29 1/2",
      "DashedNumber": "3315-1"
    },
    {
      "ID": 1104,
      "SetNumber": 3315,
      "URL": "https://www.lego.com/biassets/bi/6015515.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6015515.png",
      "Description": "Olivias House",
      "Notes": "BI 3005/80+4*- 3315 V29 2/2",
      "DashedNumber": "3315-1"
    },
    {
      "ID": 1105,
      "SetNumber": 3315,
      "URL": "https://www.lego.com/biassets/bi/6015516.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6015516.png",
      "Description": "Olivias House",
      "Notes": "BI 3005/80+4*- 3315 V39 2/2",
      "DashedNumber": "3315-1"
    },
    {
      "ID": 1106,
      "SetNumber": 3316,
      "URL": "https://www.lego.com/biassets/bi/6004037.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6004037.png",
      "Description": "LEGO� Friends Advent Calendar",
      "Notes": "BI 2001/ 2 -3316 v39",
      "DashedNumber": "3316-1"
    },
    {
      "ID": 1107,
      "SetNumber": 3325,
      "URL": "https://www.lego.com/biassets/bi/4252800.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4252800.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3325-1"
    },
    {
      "ID": 1108,
      "SetNumber": 3325,
      "URL": "https://www.lego.com/biassets/bi/4252801.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4252801.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3325-1"
    },
    {
      "ID": 1109,
      "SetNumber": 3365,
      "URL": "https://www.lego.com/biassets/bi/4617445.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4617445.png",
      "Description": "Space Moon Buggy",
      "Notes": "BI 3001/24 - 3365 IN",
      "DashedNumber": "3365-1"
    },
    {
      "ID": 1110,
      "SetNumber": 3365,
      "URL": "https://www.lego.com/biassets/bi/4617447.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4617447.png",
      "Description": "Space Moon Buggy",
      "Notes": "BI 3001/24 - 3365 NA",
      "DashedNumber": "3365-1"
    },
    {
      "ID": 1111,
      "SetNumber": 3366,
      "URL": "https://www.lego.com/biassets/bi/4625138.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4625138.png",
      "Description": "Satellite Launch Pad",
      "Notes": "BI 3004/56 - 3366 V. 29",
      "DashedNumber": "3366-1"
    },
    {
      "ID": 1112,
      "SetNumber": 3366,
      "URL": "https://www.lego.com/biassets/bi/4625139.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4625139.png",
      "Description": "Satellite Launch Pad",
      "Notes": "BI 3004/56 - 3366 V.39",
      "DashedNumber": "3366-1"
    },
    {
      "ID": 1113,
      "SetNumber": 3367,
      "URL": "https://www.lego.com/biassets/bi/4648469.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4648469.png",
      "Description": "Space Shuttle",
      "Notes": "BI 3005/72+4 - 3367 V.29",
      "DashedNumber": "3367-1"
    },
    {
      "ID": 1114,
      "SetNumber": 3367,
      "URL": "https://www.lego.com/biassets/bi/4648470.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4648470.png",
      "Description": "Space Shuttle",
      "Notes": "BI 3005/68+4 - 3367 V. 39",
      "DashedNumber": "3367-1"
    },
    {
      "ID": 1115,
      "SetNumber": 3367,
      "URL": "https://www.lego.com/biassets/bi/6009628.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6009628.png",
      "Description": "Space Shuttle",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3367-1"
    },
    {
      "ID": 1116,
      "SetNumber": 3367,
      "URL": "https://www.lego.com/biassets/bi/6009596.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6009596.png",
      "Description": "Space Shuttle",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3367-1"
    },
    {
      "ID": 1117,
      "SetNumber": 3367,
      "URL": "https://www.lego.com/biassets/bi/6045733.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6045733.png",
      "Description": "Space Shuttle",
      "Notes": "BI 3017 / 72+4 - 65/115g, 3367 V29",
      "DashedNumber": "3367-1"
    },
    {
      "ID": 1118,
      "SetNumber": 3367,
      "URL": "https://www.lego.com/biassets/bi/6045734.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6045734.png",
      "Description": "Space Shuttle",
      "Notes": "BI 3017 / 72+4 - 65/115g, 3367 V39",
      "DashedNumber": "3367-1"
    },
    {
      "ID": 1119,
      "SetNumber": 3368,
      "URL": "https://www.lego.com/biassets/bi/4622636.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4622636.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3368-1"
    },
    {
      "ID": 1120,
      "SetNumber": 3368,
      "URL": "https://www.lego.com/biassets/bi/4632152.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4632152.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3368-1"
    },
    {
      "ID": 1121,
      "SetNumber": 3368,
      "URL": "https://www.lego.com/biassets/bi/4625298.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4625298.png",
      "Description": "Space Center",
      "Notes": "BI 3004/48 - 3368 V.29 2/3",
      "DashedNumber": "3368-1"
    },
    {
      "ID": 1122,
      "SetNumber": 3368,
      "URL": "https://www.lego.com/biassets/bi/4625300.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4625300.png",
      "Description": "Space Center",
      "Notes": "BI 3004/48 - 3368 V.39 2/3",
      "DashedNumber": "3368-1"
    },
    {
      "ID": 1123,
      "SetNumber": 3368,
      "URL": "https://www.lego.com/biassets/bi/4625296.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4625296.png",
      "Description": "Space Center",
      "Notes": "BI 3006/24 - 3368 V. 29/39 1/3",
      "DashedNumber": "3368-1"
    },
    {
      "ID": 1124,
      "SetNumber": 3368,
      "URL": "https://www.lego.com/biassets/bi/4625303.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4625303.png",
      "Description": "Space Center",
      "Notes": "BI 3006/72+4 -3368 V.29/39 3/3",
      "DashedNumber": "3368-1"
    },
    {
      "ID": 1125,
      "SetNumber": 3368,
      "URL": "https://www.lego.com/biassets/bi/4666254.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4666254.png",
      "Description": "Space Center",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3368-1"
    },
    {
      "ID": 1126,
      "SetNumber": 3368,
      "URL": "https://www.lego.com/biassets/bi/4666260.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4666260.png",
      "Description": "Space Center",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3368-1"
    },
    {
      "ID": 1127,
      "SetNumber": 3368,
      "URL": "https://www.lego.com/biassets/bi/4625295.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4625295.png",
      "Description": "Space Center",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3368-1"
    },
    {
      "ID": 1128,
      "SetNumber": 3368,
      "URL": "https://www.lego.com/biassets/bi/4625301.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4625301.png",
      "Description": "Space Center",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3368-1"
    },
    {
      "ID": 1129,
      "SetNumber": 3401,
      "URL": "https://www.lego.com/biassets/bi/4132678.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4132678.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3401-1"
    },
    {
      "ID": 1130,
      "SetNumber": 3402,
      "URL": "https://www.lego.com/biassets/bi/4132648.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4132648.png",
      "Description": "Grandstand",
      "Notes": "BUILD.INST FOR 3402 IN",
      "DashedNumber": "3402-1"
    },
    {
      "ID": 1131,
      "SetNumber": 3402,
      "URL": "https://www.lego.com/biassets/bi/4157483.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4157483.png",
      "Description": "Grandstand",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3402-1"
    },
    {
      "ID": 1132,
      "SetNumber": 3403,
      "URL": "https://www.lego.com/biassets/bi/4132649.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4132649.png",
      "Description": "Grandstand with Scoreboard",
      "Notes": "BUILD.INST FOR 3403 IN",
      "DashedNumber": "3403-1"
    },
    {
      "ID": 1133,
      "SetNumber": 3403,
      "URL": "https://www.lego.com/biassets/bi/4132915.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4132915.png",
      "Description": "Grandstand with Scoreboard",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3403-1"
    },
    {
      "ID": 1134,
      "SetNumber": 3404,
      "URL": "https://www.lego.com/biassets/bi/4132654.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4132654.png",
      "Description": "Football Team Coaches",
      "Notes": "BUILD. INST FOR 3404 IN",
      "DashedNumber": "3404-1"
    },
    {
      "ID": 1135,
      "SetNumber": 3405,
      "URL": "https://www.lego.com/biassets/bi/4132655.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4132655.png",
      "Description": "Football Team Coaches",
      "Notes": "BUILD.INST FOR 3405 IN",
      "DashedNumber": "3405-1"
    },
    {
      "ID": 1136,
      "SetNumber": 3406,
      "URL": "https://www.lego.com/biassets/bi/4171916.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4171916.png",
      "Description": "Football Team Coaches",
      "Notes": "BUILDINGINSTR.  3406 IN",
      "DashedNumber": "3406-1"
    },
    {
      "ID": 1137,
      "SetNumber": 3406,
      "URL": "https://www.lego.com/biassets/bi/4177072.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4177072.png",
      "Description": "Football Team Coaches",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3406-1"
    },
    {
      "ID": 1138,
      "SetNumber": 3406,
      "URL": "https://www.lego.com/biassets/bi/4171917.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4171917.png",
      "Description": "Football Team Coaches",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3406-1"
    },
    {
      "ID": 1139,
      "SetNumber": 3407,
      "URL": "https://www.lego.com/biassets/bi/4132657.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4132657.png",
      "Description": "Football Team Coaches",
      "Notes": "BUILD.INST. FOR 3407 IN",
      "DashedNumber": "3407-1"
    },
    {
      "ID": 1140,
      "SetNumber": 3408,
      "URL": "https://www.lego.com/biassets/bi/4132661.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4132661.png",
      "Description": "Main Entrance with Ground Staff",
      "Notes": "BUILDINST. FOR 3408 IN",
      "DashedNumber": "3408-1"
    },
    {
      "ID": 1141,
      "SetNumber": 3408,
      "URL": "https://www.lego.com/biassets/bi/4132905.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4132905.png",
      "Description": "Main Entrance with Ground Staff",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3408-1"
    },
    {
      "ID": 1142,
      "SetNumber": 3409,
      "URL": "https://www.lego.com/biassets/bi/4132906.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4132906.png",
      "Description": "Football Pitch",
      "Notes": "BUILD INST. 3409 AM",
      "DashedNumber": "3409-1"
    },
    {
      "ID": 1143,
      "SetNumber": 3409,
      "URL": "https://www.lego.com/biassets/bi/4171919.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4171919.png",
      "Description": "Football Pitch",
      "Notes": "BI  3409 IN",
      "DashedNumber": "3409-1"
    },
    {
      "ID": 1144,
      "SetNumber": 3409,
      "URL": "https://www.lego.com/biassets/bi/4171920.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4171920.png",
      "Description": "Football Pitch",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3409-1"
    },
    {
      "ID": 1145,
      "SetNumber": 3411,
      "URL": "https://www.lego.com/biassets/bi/4132914.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4132914.png",
      "Description": "TEAM TRANSPORT",
      "Notes": "BUILD.INSTR. 3411 AM",
      "DashedNumber": "3411-1"
    },
    {
      "ID": 1146,
      "SetNumber": 3412,
      "URL": "https://www.lego.com/biassets/bi/4133401.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4133401.png",
      "Description": "POINT SHOOTING",
      "Notes": "BUILD INST. 3412 IN",
      "DashedNumber": "3412-1"
    },
    {
      "ID": 1147,
      "SetNumber": 3412,
      "URL": "https://www.lego.com/biassets/bi/4133404.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4133404.png",
      "Description": "POINT SHOOTING",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3412-1"
    },
    {
      "ID": 1148,
      "SetNumber": 3413,
      "URL": "https://www.lego.com/biassets/bi/4133402.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4133402.png",
      "Description": "GOAL KEEPER",
      "Notes": "BUILD INST. 3413 IN",
      "DashedNumber": "3413-1"
    },
    {
      "ID": 1149,
      "SetNumber": 3413,
      "URL": "https://www.lego.com/biassets/bi/4133405.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4133405.png",
      "Description": "GOAL KEEPER",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3413-1"
    },
    {
      "ID": 1150,
      "SetNumber": 3414,
      "URL": "https://www.lego.com/biassets/bi/4133403.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4133403.png",
      "Description": "PRECISION SHOOTOING",
      "Notes": "BUILD INST. 3414 IN",
      "DashedNumber": "3414-1"
    },
    {
      "ID": 1151,
      "SetNumber": 3414,
      "URL": "https://www.lego.com/biassets/bi/4133406.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4133406.png",
      "Description": "PRECISION SHOOTOING",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3414-1"
    },
    {
      "ID": 1152,
      "SetNumber": 3416,
      "URL": "https://www.lego.com/biassets/bi/4157285.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4157285.png",
      "Description": "WOMENS TEAM",
      "Notes": "BI 3416 AM",
      "DashedNumber": "3416-1"
    },
    {
      "ID": 1153,
      "SetNumber": 3418,
      "URL": "https://www.lego.com/biassets/bi/4157564.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4157564.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3418-1"
    },
    {
      "ID": 1154,
      "SetNumber": 3419,
      "URL": "https://www.lego.com/biassets/bi/4157565.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4157565.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3419-1"
    },
    {
      "ID": 1155,
      "SetNumber": 3420,
      "URL": "https://www.lego.com/biassets/bi/4168781.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4168781.png",
      "Description": "Championship Challenge II",
      "Notes": "BI, 3420 IN",
      "DashedNumber": "3420-1"
    },
    {
      "ID": 1156,
      "SetNumber": 3420,
      "URL": "https://www.lego.com/biassets/bi/4168782.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4168782.png",
      "Description": "Championship Challenge II",
      "Notes": "BI 3420 AM",
      "DashedNumber": "3420-1"
    },
    {
      "ID": 1157,
      "SetNumber": 3420,
      "URL": "https://www.lego.com/biassets/bi/4177070.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4177070.png",
      "Description": "Championship Challenge II",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3420-1"
    },
    {
      "ID": 1158,
      "SetNumber": 3420,
      "URL": "https://www.lego.com/biassets/bi/4251418.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4251418.png",
      "Description": "Championship Challenge II",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3420-1"
    },
    {
      "ID": 1159,
      "SetNumber": 3420,
      "URL": "https://www.lego.com/biassets/bi/4263160.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4263160.png",
      "Description": "Championship Challenge II",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3420-1"
    },
    {
      "ID": 1160,
      "SetNumber": 3420,
      "URL": "https://www.lego.com/biassets/bi/4252471.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4252471.png",
      "Description": "Championship Challenge II",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3420-1"
    },
    {
      "ID": 1161,
      "SetNumber": 3421,
      "URL": "https://www.lego.com/biassets/bi/4168783.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4168783.png",
      "Description": "3 v 3 Shootout",
      "Notes": "BI 3421 IN",
      "DashedNumber": "3421-1"
    },
    {
      "ID": 1162,
      "SetNumber": 3421,
      "URL": "https://www.lego.com/biassets/bi/4168784.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4168784.png",
      "Description": "Three-aside Set",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3421-1"
    },
    {
      "ID": 1163,
      "SetNumber": 3422,
      "URL": "https://www.lego.com/biassets/bi/4188737.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4188737.png",
      "Description": "Shoot n Save",
      "Notes": "BI  3422 IN",
      "DashedNumber": "3422-1"
    },
    {
      "ID": 1164,
      "SetNumber": 3422,
      "URL": "https://www.lego.com/biassets/bi/4188740.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4188740.png",
      "Description": "Shoot n Save",
      "Notes": "BI  3422 AM",
      "DashedNumber": "3422-1"
    },
    {
      "ID": 1165,
      "SetNumber": 3422,
      "URL": "https://www.lego.com/biassets/bi/4176526.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4176526.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3422-1"
    },
    {
      "ID": 1166,
      "SetNumber": 3423,
      "URL": "https://www.lego.com/biassets/bi/4168834.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4168834.png",
      "Description": "Freekick Frenzy",
      "Notes": "BI 3423 IN",
      "DashedNumber": "3423-1"
    },
    {
      "ID": 1167,
      "SetNumber": 3423,
      "URL": "https://www.lego.com/biassets/bi/4168835.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4168835.png",
      "Description": "Precision Shooting",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3423-1"
    },
    {
      "ID": 1168,
      "SetNumber": 3424,
      "URL": "https://www.lego.com/biassets/bi/4168836.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4168836.png",
      "Description": "Target Practice",
      "Notes": "BI 3424 IN",
      "DashedNumber": "3424-1"
    },
    {
      "ID": 1169,
      "SetNumber": 3424,
      "URL": "https://www.lego.com/biassets/bi/4168837.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4168837.png",
      "Description": "Target Practice",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3424-1"
    },
    {
      "ID": 1170,
      "SetNumber": 3425,
      "URL": "https://www.lego.com/biassets/bi/4168838.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4168838.png",
      "Description": "U.S. National Team � Cup Edition",
      "Notes": "BI 3425 AM",
      "DashedNumber": "3425-1"
    },
    {
      "ID": 1171,
      "SetNumber": 3425,
      "URL": "https://www.lego.com/biassets/bi/4171854.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4171854.png",
      "Description": "U.S. National Team � Cup Edition",
      "Notes": "BI 3425 IN",
      "DashedNumber": "3425-1"
    },
    {
      "ID": 1172,
      "SetNumber": 3426,
      "URL": "https://www.lego.com/biassets/bi/4177067.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4177067.png",
      "Description": "TEAM TRANSPORT",
      "Notes": "BI 3426 AM",
      "DashedNumber": "3426-1"
    },
    {
      "ID": 1173,
      "SetNumber": 3427,
      "URL": "https://www.lego.com/biassets/bi/4195738.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4195738.png",
      "Description": "NBA Slam Dunk",
      "Notes": "BI 3427 IN",
      "DashedNumber": "3427-1"
    },
    {
      "ID": 1174,
      "SetNumber": 3427,
      "URL": "https://www.lego.com/biassets/bi/4195739.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4195739.png",
      "Description": "NBA Slam Dunk",
      "Notes": "BI  3427 NA",
      "DashedNumber": "3427-1"
    },
    {
      "ID": 1175,
      "SetNumber": 3427,
      "URL": "https://www.lego.com/biassets/bi/4224038.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4224038.png",
      "Description": "NBA Slam Dunk",
      "Notes": "BI  3427 IN",
      "DashedNumber": "3427-1"
    },
    {
      "ID": 1176,
      "SetNumber": 3427,
      "URL": "https://www.lego.com/biassets/bi/4224112.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4224112.png",
      "Description": "NBA Slam Dunk",
      "Notes": "BI, 3427 NA",
      "DashedNumber": "3427-1"
    },
    {
      "ID": 1177,
      "SetNumber": 3428,
      "URL": "https://www.lego.com/biassets/bi/4224113.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4224113.png",
      "Description": "1 vs. 1 Action",
      "Notes": "BI,  3428 NA",
      "DashedNumber": "3428-1"
    },
    {
      "ID": 1178,
      "SetNumber": 3428,
      "URL": "https://www.lego.com/biassets/bi/4224098.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4224098.png",
      "Description": "1 vs. 1 Action",
      "Notes": "BI, 3428 IN",
      "DashedNumber": "3428-1"
    },
    {
      "ID": 1179,
      "SetNumber": 3428,
      "URL": "https://www.lego.com/biassets/bi/4195740.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4195740.png",
      "Description": "1 vs. 1 Action",
      "Notes": "BI  3428 IN",
      "DashedNumber": "3428-1"
    },
    {
      "ID": 1180,
      "SetNumber": 3428,
      "URL": "https://www.lego.com/biassets/bi/4195741.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4195741.png",
      "Description": "1 vs. 1 Action",
      "Notes": "BI  3428 NA",
      "DashedNumber": "3428-1"
    },
    {
      "ID": 1181,
      "SetNumber": 3429,
      "URL": "https://www.lego.com/biassets/bi/4195742.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4195742.png",
      "Description": "Ultimate Defense",
      "Notes": "BI  3429 IN",
      "DashedNumber": "3429-1"
    },
    {
      "ID": 1182,
      "SetNumber": 3429,
      "URL": "https://www.lego.com/biassets/bi/4195747.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4195747.png",
      "Description": "Ultimate Defense",
      "Notes": "BI  3429 NA",
      "DashedNumber": "3429-1"
    },
    {
      "ID": 1183,
      "SetNumber": 3429,
      "URL": "https://www.lego.com/biassets/bi/4224099.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4224099.png",
      "Description": "Ultimate Defense",
      "Notes": "BI, 3429 IN",
      "DashedNumber": "3429-1"
    },
    {
      "ID": 1184,
      "SetNumber": 3430,
      "URL": "https://www.lego.com/biassets/bi/4224100.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4224100.png",
      "Description": "Spin & Shoot",
      "Notes": "BI, 3430 IN",
      "DashedNumber": "3430-1"
    },
    {
      "ID": 1185,
      "SetNumber": 3430,
      "URL": "https://www.lego.com/biassets/bi/4195749.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4195749.png",
      "Description": "Spin & Shoot",
      "Notes": "BI  3430 IN",
      "DashedNumber": "3430-1"
    },
    {
      "ID": 1186,
      "SetNumber": 3431,
      "URL": "https://www.lego.com/biassets/bi/4195752.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4195752.png",
      "Description": "Streetball 2 vs. 2",
      "Notes": "BI  3431 IN",
      "DashedNumber": "3431-1"
    },
    {
      "ID": 1187,
      "SetNumber": 3431,
      "URL": "https://www.lego.com/biassets/bi/4195753.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4195753.png",
      "Description": "Streetball 2 vs. 2",
      "Notes": "BI  3431 NA",
      "DashedNumber": "3431-1"
    },
    {
      "ID": 1188,
      "SetNumber": 3431,
      "URL": "https://www.lego.com/biassets/bi/4224101.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4224101.png",
      "Description": "Streetball 2 vs. 2",
      "Notes": "BI, 3431 IN",
      "DashedNumber": "3431-1"
    },
    {
      "ID": 1189,
      "SetNumber": 3431,
      "URL": "https://www.lego.com/biassets/bi/4224116.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4224116.png",
      "Description": "Streetball 2 vs. 2",
      "Notes": "BI,  3431 NA",
      "DashedNumber": "3431-1"
    },
    {
      "ID": 1190,
      "SetNumber": 3432,
      "URL": "https://www.lego.com/biassets/bi/4224117.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4224117.png",
      "Description": "NBA Challenge",
      "Notes": "BI, 3432 NA",
      "DashedNumber": "3432-1"
    },
    {
      "ID": 1191,
      "SetNumber": 3432,
      "URL": "https://www.lego.com/biassets/bi/4224102.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4224102.png",
      "Description": "NBA Challenge",
      "Notes": "BI, 3432 IN",
      "DashedNumber": "3432-1"
    },
    {
      "ID": 1192,
      "SetNumber": 3432,
      "URL": "https://www.lego.com/biassets/bi/4195755.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4195755.png",
      "Description": "NBA Challenge",
      "Notes": "BI 3432 IN",
      "DashedNumber": "3432-1"
    },
    {
      "ID": 1193,
      "SetNumber": 3432,
      "URL": "https://www.lego.com/biassets/bi/4195756.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4195756.png",
      "Description": "NBA Challenge",
      "Notes": "BI 3432 NA",
      "DashedNumber": "3432-1"
    },
    {
      "ID": 1194,
      "SetNumber": 3433,
      "URL": "https://www.lego.com/biassets/bi/4195757.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4195757.png",
      "Description": "The Ultimate NBA Arena",
      "Notes": "BI  3433 IN",
      "DashedNumber": "3433-1"
    },
    {
      "ID": 1195,
      "SetNumber": 3433,
      "URL": "https://www.lego.com/biassets/bi/4195758.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4195758.png",
      "Description": "The Ultimate NBA Arena",
      "Notes": "BI  3433 NA",
      "DashedNumber": "3433-1"
    },
    {
      "ID": 1196,
      "SetNumber": 3433,
      "URL": "https://www.lego.com/biassets/bi/4224103.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4224103.png",
      "Description": "The Ultimate NBA Arena",
      "Notes": "BI, 3433 IN",
      "DashedNumber": "3433-1"
    },
    {
      "ID": 1197,
      "SetNumber": 3433,
      "URL": "https://www.lego.com/biassets/bi/4224118.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4224118.png",
      "Description": "The Ultimate NBA Arena",
      "Notes": "BI, 3433 NA",
      "DashedNumber": "3433-1"
    },
    {
      "ID": 1198,
      "SetNumber": 3438,
      "URL": "https://www.lego.com/biassets/bi/4127851.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4127851.png",
      "Description": "MC DONALDS RESTAURANT",
      "Notes": "BUILDING INSTR. 3438",
      "DashedNumber": "3438-1"
    },
    {
      "ID": 1199,
      "SetNumber": 3439,
      "URL": "https://www.lego.com/biassets/bi/4131287.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4131287.png",
      "Description": "SPY RUNNER S.A.H.",
      "Notes": "BI 3439",
      "DashedNumber": "3439-1"
    },
    {
      "ID": 1200,
      "SetNumber": 3440,
      "URL": "https://www.lego.com/biassets/bi/4224115.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4224115.png",
      "Description": "GAME SET WITH BALL",
      "Notes": "BI,  3440 NA",
      "DashedNumber": "3440-1"
    },
    {
      "ID": 1201,
      "SetNumber": 3442,
      "URL": "https://www.lego.com/biassets/bi/4123864.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4123864.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3442-1"
    },
    {
      "ID": 1202,
      "SetNumber": 3450,
      "URL": "https://www.lego.com/biassets/bi/4183855.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4183855.png",
      "Description": "LEGO STATUE OF LIBERTY",
      "Notes": "BI  3450",
      "DashedNumber": "3450-1"
    },
    {
      "ID": 1203,
      "SetNumber": 3451,
      "URL": "https://www.lego.com/biassets/bi/4163969.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4163969.png",
      "Description": "SOPHWITH CAMEL",
      "Notes": "BI 3451",
      "DashedNumber": "3451-1"
    },
    {
      "ID": 1204,
      "SetNumber": 3501,
      "URL": "https://www.lego.com/biassets/bi/4123869.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4123869.png",
      "Description": "ZNAP Jet-Car",
      "Notes": "BUIL.INST. FOR 3501",
      "DashedNumber": "3501-1"
    },
    {
      "ID": 1205,
      "SetNumber": 3502,
      "URL": "https://www.lego.com/biassets/bi/4123870.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4123870.png",
      "Description": "GREEN JET PLANE",
      "Notes": "BUILD.INST. FOR 3502",
      "DashedNumber": "3502-1"
    },
    {
      "ID": 1206,
      "SetNumber": 3503,
      "URL": "https://www.lego.com/biassets/bi/4123871.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4123871.png",
      "Description": "RED SPEED BOAT",
      "Notes": "BUILD.INST. FOR 3503",
      "DashedNumber": "3503-1"
    },
    {
      "ID": 1207,
      "SetNumber": 3504,
      "URL": "https://www.lego.com/biassets/bi/4123872.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4123872.png",
      "Description": "YELLOW TRUCK",
      "Notes": "BUILDING INST. FOR 3504",
      "DashedNumber": "3504-1"
    },
    {
      "ID": 1208,
      "SetNumber": 3505,
      "URL": "https://www.lego.com/biassets/bi/4129085.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4129085.png",
      "Description": "ZNAP Sky-Fly",
      "Notes": "BUILDING INST. FOR 3505",
      "DashedNumber": "3505-1"
    },
    {
      "ID": 1209,
      "SetNumber": 3506,
      "URL": "https://www.lego.com/biassets/bi/4129086.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4129086.png",
      "Description": "ZNAP Road Ripper",
      "Notes": "BUILDING INST. FOR 3506",
      "DashedNumber": "3506-1"
    },
    {
      "ID": 1210,
      "SetNumber": 3510,
      "URL": "https://www.lego.com/biassets/bi/4124662.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4124662.png",
      "Description": "PROMOTION ITEM",
      "Notes": "BUILDING INSTR. FOR 3510",
      "DashedNumber": "3510-1"
    },
    {
      "ID": 1211,
      "SetNumber": 3520,
      "URL": "https://www.lego.com/biassets/bi/4129339.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4129339.png",
      "Description": "ZNAP Fork-Truck",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3520-1"
    },
    {
      "ID": 1212,
      "SetNumber": 3521,
      "URL": "https://www.lego.com/biassets/bi/4129341.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4129341.png",
      "Description": "ZNAP Red Racer",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3521-1"
    },
    {
      "ID": 1213,
      "SetNumber": 3531,
      "URL": "https://www.lego.com/biassets/bi/4123873.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4123873.png",
      "Description": "ZNAP Tri-Bike",
      "Notes": "BUILD.INST. FOR 3531",
      "DashedNumber": "3531-1"
    },
    {
      "ID": 1214,
      "SetNumber": 3532,
      "URL": "https://www.lego.com/biassets/bi/4123874.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4123874.png",
      "Description": "YELLOW WATER SCOOTER",
      "Notes": "BUILD.INST. FOR 3532",
      "DashedNumber": "3532-1"
    },
    {
      "ID": 1215,
      "SetNumber": 3535,
      "URL": "https://www.lego.com/biassets/bi/4217676.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4217676.png",
      "Description": "Skateboard Street Park",
      "Notes": "BI 3535",
      "DashedNumber": "3535-1"
    },
    {
      "ID": 1216,
      "SetNumber": 3536,
      "URL": "https://www.lego.com/biassets/bi/4217677.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4217677.png",
      "Description": "Snowboard Big Air Comp",
      "Notes": "BI  3536",
      "DashedNumber": "3536-1"
    },
    {
      "ID": 1217,
      "SetNumber": 3537,
      "URL": "https://www.lego.com/biassets/bi/4217679.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4217679.png",
      "Description": "Skateboard Vert Park Challenge",
      "Notes": "BI 3537",
      "DashedNumber": "3537-1"
    },
    {
      "ID": 1218,
      "SetNumber": 3538,
      "URL": "https://www.lego.com/biassets/bi/4235652.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4235652.png",
      "Description": "Snowboard Boarder Cross Race",
      "Notes": "BI, 3538",
      "DashedNumber": "3538-1"
    },
    {
      "ID": 1219,
      "SetNumber": 3540,
      "URL": "https://www.lego.com/biassets/bi/4224120.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4224120.png",
      "Description": "Puck Passer",
      "Notes": "BI, 3540 NA",
      "DashedNumber": "3540-1"
    },
    {
      "ID": 1220,
      "SetNumber": 3540,
      "URL": "https://www.lego.com/biassets/bi/4224105.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4224105.png",
      "Description": "Puck Passer",
      "Notes": "BI, 3540 IN",
      "DashedNumber": "3540-1"
    },
    {
      "ID": 1221,
      "SetNumber": 3540,
      "URL": "https://www.lego.com/biassets/bi/4210070.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4210070.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3540-1"
    },
    {
      "ID": 1222,
      "SetNumber": 3541,
      "URL": "https://www.lego.com/biassets/bi/4210072.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4210072.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3541-1"
    },
    {
      "ID": 1223,
      "SetNumber": 3541,
      "URL": "https://www.lego.com/biassets/bi/4224107.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4224107.png",
      "Description": "Slap Shot",
      "Notes": "BI, 3541 IN",
      "DashedNumber": "3541-1"
    },
    {
      "ID": 1224,
      "SetNumber": 3541,
      "URL": "https://www.lego.com/biassets/bi/4224121.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4224121.png",
      "Description": "Slap Shot",
      "Notes": "BI, 3541 NA",
      "DashedNumber": "3541-1"
    },
    {
      "ID": 1225,
      "SetNumber": 3542,
      "URL": "https://www.lego.com/biassets/bi/4224122.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4224122.png",
      "Description": "Flip Shot",
      "Notes": "BI, 3542 NA",
      "DashedNumber": "3542-1"
    },
    {
      "ID": 1226,
      "SetNumber": 3542,
      "URL": "https://www.lego.com/biassets/bi/4224108.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4224108.png",
      "Description": "Flip Shot",
      "Notes": "BI, 3542 IN",
      "DashedNumber": "3542-1"
    },
    {
      "ID": 1227,
      "SetNumber": 3542,
      "URL": "https://www.lego.com/biassets/bi/4210077.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4210077.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3542-1"
    },
    {
      "ID": 1228,
      "SetNumber": 3543,
      "URL": "https://www.lego.com/biassets/bi/4210079.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4210079.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3543-1"
    },
    {
      "ID": 1229,
      "SetNumber": 3543,
      "URL": "https://www.lego.com/biassets/bi/4224109.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4224109.png",
      "Description": "Slammer Goalie",
      "Notes": "BI, 3543 IN",
      "DashedNumber": "3543-1"
    },
    {
      "ID": 1230,
      "SetNumber": 3543,
      "URL": "https://www.lego.com/biassets/bi/4224124.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4224124.png",
      "Description": "Slammer Goalie",
      "Notes": "BI, 3543 NA",
      "DashedNumber": "3543-1"
    },
    {
      "ID": 1231,
      "SetNumber": 3544,
      "URL": "https://www.lego.com/biassets/bi/4224125.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4224125.png",
      "Description": "Slammer Stadium",
      "Notes": "BI, 3544 NA",
      "DashedNumber": "3544-1"
    },
    {
      "ID": 1232,
      "SetNumber": 3544,
      "URL": "https://www.lego.com/biassets/bi/4224110.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4224110.png",
      "Description": "Game Set",
      "Notes": "BI, 3544 IN",
      "DashedNumber": "3544-1"
    },
    {
      "ID": 1233,
      "SetNumber": 3544,
      "URL": "https://www.lego.com/biassets/bi/4209827.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4209827.png",
      "Description": "Game Set",
      "Notes": "BI 3544 IN",
      "DashedNumber": "3544-1"
    },
    {
      "ID": 1234,
      "SetNumber": 3544,
      "URL": "https://www.lego.com/biassets/bi/4209830.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4209830.png",
      "Description": "Game Set",
      "Notes": "BI 3544 NA",
      "DashedNumber": "3544-1"
    },
    {
      "ID": 1235,
      "SetNumber": 3545,
      "URL": "https://www.lego.com/biassets/bi/4224111.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4224111.png",
      "Description": "Puck Feeder",
      "Notes": "BI, 3545 IN",
      "DashedNumber": "3545-1"
    },
    {
      "ID": 1236,
      "SetNumber": 3545,
      "URL": "https://www.lego.com/biassets/bi/4224126.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4224126.png",
      "Description": "Puck Feeder",
      "Notes": "BI 3545 NA",
      "DashedNumber": "3545-1"
    },
    {
      "ID": 1237,
      "SetNumber": 3548,
      "URL": "https://www.lego.com/biassets/bi/4198319.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4198319.png",
      "Description": "Slam Dunk Trainer",
      "Notes": "BI 3548 IN",
      "DashedNumber": "3548-1"
    },
    {
      "ID": 1238,
      "SetNumber": 3548,
      "URL": "https://www.lego.com/biassets/bi/4198320.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4198320.png",
      "Description": "Slam Dunk Trainer",
      "Notes": "BI  3548 NA",
      "DashedNumber": "3548-1"
    },
    {
      "ID": 1239,
      "SetNumber": 3549,
      "URL": "https://www.lego.com/biassets/bi/4198321.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4198321.png",
      "Description": "Practice Shooting",
      "Notes": "BI  3549 IN",
      "DashedNumber": "3549-1"
    },
    {
      "ID": 1240,
      "SetNumber": 3549,
      "URL": "https://www.lego.com/biassets/bi/4198322.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4198322.png",
      "Description": "Practice Shooting",
      "Notes": "BI  3549 NA",
      "DashedNumber": "3549-1"
    },
    {
      "ID": 1241,
      "SetNumber": 3550,
      "URL": "https://www.lego.com/biassets/bi/4198323.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4198323.png",
      "Description": "Jump & Shoot",
      "Notes": "BI  3550 IN",
      "DashedNumber": "3550-1"
    },
    {
      "ID": 1242,
      "SetNumber": 3550,
      "URL": "https://www.lego.com/biassets/bi/4198325.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4198325.png",
      "Description": "Jump & Shoot",
      "Notes": "BI  3550 NA",
      "DashedNumber": "3550-1"
    },
    {
      "ID": 1243,
      "SetNumber": 3551,
      "URL": "https://www.lego.com/biassets/bi/4123875.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4123875.png",
      "Description": "RED JET PLANE",
      "Notes": "BUILD.INST. FOR 3551",
      "DashedNumber": "3551-1"
    },
    {
      "ID": 1244,
      "SetNumber": 3552,
      "URL": "https://www.lego.com/biassets/bi/4123876.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4123876.png",
      "Description": "GREEN HELICOPTER W. MOTOR",
      "Notes": "BUILD.INST. FOR 3552",
      "DashedNumber": "3552-1"
    },
    {
      "ID": 1245,
      "SetNumber": 3554,
      "URL": "https://www.lego.com/biassets/bi/4129090.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4129090.png",
      "Description": "ZNAP Mini-Constructor Set",
      "Notes": "BUILDING INST. FOR 3554",
      "DashedNumber": "3554-1"
    },
    {
      "ID": 1246,
      "SetNumber": 3555,
      "URL": "https://www.lego.com/biassets/bi/4129491.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4129491.png",
      "Description": "ZNAP Off Roader",
      "Notes": "BUILD.INST. FOR 3555",
      "DashedNumber": "3555-1"
    },
    {
      "ID": 1247,
      "SetNumber": 3557,
      "URL": "https://www.lego.com/biassets/bi/4215457.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4215457.png",
      "Description": "Blue Player & Goal",
      "Notes": "BI  3557 IN",
      "DashedNumber": "3557-1"
    },
    {
      "ID": 1248,
      "SetNumber": 3557,
      "URL": "https://www.lego.com/biassets/bi/4223327.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4223327.png",
      "Description": "Blue Player & Goal",
      "Notes": "BI  3557 NA",
      "DashedNumber": "3557-1"
    },
    {
      "ID": 1249,
      "SetNumber": 3558,
      "URL": "https://www.lego.com/biassets/bi/4223328.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4223328.png",
      "Description": "Red Player & Goal",
      "Notes": "BI  3558 NA",
      "DashedNumber": "3558-1"
    },
    {
      "ID": 1250,
      "SetNumber": 3558,
      "URL": "https://www.lego.com/biassets/bi/4215458.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4215458.png",
      "Description": "Red Player & Goal",
      "Notes": "BI  3558 IN",
      "DashedNumber": "3558-1"
    },
    {
      "ID": 1251,
      "SetNumber": 3559,
      "URL": "https://www.lego.com/biassets/bi/4215459.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4215459.png",
      "Description": "Red & Blue Player",
      "Notes": "BI  3559 IN",
      "DashedNumber": "3559-1"
    },
    {
      "ID": 1252,
      "SetNumber": 3559,
      "URL": "https://www.lego.com/biassets/bi/4223329.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4223329.png",
      "Description": "Red & Blue Player",
      "Notes": "BI  3559 NA",
      "DashedNumber": "3559-1"
    },
    {
      "ID": 1253,
      "SetNumber": 3568,
      "URL": "https://www.lego.com/biassets/bi/4292834.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4292834.png",
      "Description": "Soccer Target Practice",
      "Notes": "BI  3568",
      "DashedNumber": "3568-1"
    },
    {
      "ID": 1254,
      "SetNumber": 3569,
      "URL": "https://www.lego.com/biassets/bi/4293130.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4293130.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3569-1"
    },
    {
      "ID": 1255,
      "SetNumber": 3569,
      "URL": "https://www.lego.com/biassets/bi/4492532.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4492532.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3569-1"
    },
    {
      "ID": 1256,
      "SetNumber": 3569,
      "URL": "https://www.lego.com/biassets/bi/4498826.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4498826.png",
      "Description": "Table Top Soccer",
      "Notes": "BIIION 3569 NA",
      "DashedNumber": "3569-1"
    },
    {
      "ID": 1257,
      "SetNumber": 3569,
      "URL": "https://www.lego.com/biassets/bi/4498823.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4498823.png",
      "Description": "Table Top Soccer",
      "Notes": "BI 3569 IN",
      "DashedNumber": "3569-1"
    },
    {
      "ID": 1258,
      "SetNumber": 3570,
      "URL": "https://www.lego.com/biassets/bi/4492533.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4492533.png",
      "Description": "Street Soccer",
      "Notes": "BI  3570/NA",
      "DashedNumber": "3570-1"
    },
    {
      "ID": 1259,
      "SetNumber": 3570,
      "URL": "https://www.lego.com/biassets/bi/4293133.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4293133.png",
      "Description": "Street Soccer",
      "Notes": "BI  3570/IN",
      "DashedNumber": "3570-1"
    },
    {
      "ID": 1260,
      "SetNumber": 3571,
      "URL": "https://www.lego.com/biassets/bi/4124604.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4124604.png",
      "Description": "BLACK RACER W. MOTOR",
      "Notes": "BUILD.INST. FOR 3571",
      "DashedNumber": "3571-1"
    },
    {
      "ID": 1261,
      "SetNumber": 3578,
      "URL": "https://www.lego.com/biassets/bi/4250151.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4250151.png",
      "Description": "NHL Championship Challenge",
      "Notes": "BI 3578IN/NA",
      "DashedNumber": "3578-1"
    },
    {
      "ID": 1262,
      "SetNumber": 3579,
      "URL": "https://www.lego.com/biassets/bi/4250152.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4250152.png",
      "Description": "NHL Street Hockey",
      "Notes": "BI 3579IN/NA",
      "DashedNumber": "3579-1"
    },
    {
      "ID": 1263,
      "SetNumber": 3581,
      "URL": "https://www.lego.com/biassets/bi/4123878.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4123878.png",
      "Description": "RED FORMULA 1 RACER W.STORAGE",
      "Notes": "BUILD.INST.FOR 3581",
      "DashedNumber": "3581-1"
    },
    {
      "ID": 1264,
      "SetNumber": 3582,
      "URL": "https://www.lego.com/biassets/bi/4129492.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4129492.png",
      "Description": "ZNAP Super Constructor Set",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3582-1"
    },
    {
      "ID": 1265,
      "SetNumber": 3584,
      "URL": "https://www.lego.com/biassets/bi/4195759.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4195759.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3584-1"
    },
    {
      "ID": 1266,
      "SetNumber": 3584,
      "URL": "https://www.lego.com/biassets/bi/4195760.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4195760.png",
      "Description": "Rapid Return",
      "Notes": "BI 3584 NA",
      "DashedNumber": "3584-1"
    },
    {
      "ID": 1267,
      "SetNumber": 3584,
      "URL": "https://www.lego.com/biassets/bi/4224104.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4224104.png",
      "Description": "Rapid Return",
      "Notes": "BI, 3584 IN",
      "DashedNumber": "3584-1"
    },
    {
      "ID": 1268,
      "SetNumber": 3585,
      "URL": "https://www.lego.com/biassets/bi/4217684.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4217684.png",
      "Description": "Snowboard Super Pipe",
      "Notes": "BI 3585",
      "DashedNumber": "3585-1"
    },
    {
      "ID": 1269,
      "SetNumber": 3591,
      "URL": "https://www.lego.com/biassets/bi/4123879.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4123879.png",
      "Description": "GREEN HELOCOPTER TRANSP.W.MOTO",
      "Notes": "BUILD.INST. FOR 3591",
      "DashedNumber": "3591-1"
    },
    {
      "ID": 1270,
      "SetNumber": 3592,
      "URL": "https://www.lego.com/biassets/bi/4294711.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4294711.png",
      "Description": "KNIGHTS KINGDOM TM Board Game",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3592-1"
    },
    {
      "ID": 1271,
      "SetNumber": 3596,
      "URL": "https://www.lego.com/biassets/bi/4549169.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4549169.png",
      "Description": "Muck can do it",
      "Notes": "BI 3006/ 8-GLUED-3596",
      "DashedNumber": "3596-1"
    },
    {
      "ID": 1272,
      "SetNumber": 3597,
      "URL": "https://www.lego.com/biassets/bi/4549174.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4549174.png",
      "Description": "Lofty and Dizzy Hard at Work",
      "Notes": "BI 3006/ 8 -GLUED-3597",
      "DashedNumber": "3597-1"
    },
    {
      "ID": 1273,
      "SetNumber": 3600,
      "URL": "https://www.lego.com/biassets/bi/4288813.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4288813.png",
      "Description": "LEGO� Deluxe House Building",
      "Notes": "BI, SKU 3600",
      "DashedNumber": "3600-2"
    },
    {
      "ID": 1274,
      "SetNumber": 3648,
      "URL": "https://www.lego.com/biassets/bi/4625462.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4625462.png",
      "Description": "Police Chase",
      "Notes": "BI 3010/32 - 3648 V.29/39 2/2",
      "DashedNumber": "3648-1"
    },
    {
      "ID": 1275,
      "SetNumber": 3648,
      "URL": "https://www.lego.com/biassets/bi/4625460.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4625460.png",
      "Description": "Police Chase",
      "Notes": "BI 3010/32 - 3648 V. 29 1/2",
      "DashedNumber": "3648-1"
    },
    {
      "ID": 1276,
      "SetNumber": 3648,
      "URL": "https://www.lego.com/biassets/bi/4625461.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4625461.png",
      "Description": "Police Chase",
      "Notes": "BI 3010/32 - 3648 V. 39 1/2",
      "DashedNumber": "3648-1"
    },
    {
      "ID": 1277,
      "SetNumber": 3648,
      "URL": "https://www.lego.com/biassets/bi/4625463.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4625463.png",
      "Description": "Police Chase",
      "Notes": "BI 3010/32 - 3648 V.29/39 2/2",
      "DashedNumber": "3648-1"
    },
    {
      "ID": 1278,
      "SetNumber": 3658,
      "URL": "https://www.lego.com/biassets/bi/4625468.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4625468.png",
      "Description": "Police Helicopter",
      "Notes": "BI 3005/60 - 3658 V. 29/39 2/2",
      "DashedNumber": "3658-1"
    },
    {
      "ID": 1279,
      "SetNumber": 3658,
      "URL": "https://www.lego.com/biassets/bi/4625464.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4625464.png",
      "Description": "Police Helicopter",
      "Notes": "BI 3010/24 - 3658 V. 29 1/2",
      "DashedNumber": "3658-1"
    },
    {
      "ID": 1280,
      "SetNumber": 3658,
      "URL": "https://www.lego.com/biassets/bi/4625466.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4625466.png",
      "Description": "Police Helicopter",
      "Notes": "BI 3010/24 - 3658 V. 39 1/2",
      "DashedNumber": "3658-1"
    },
    {
      "ID": 1281,
      "SetNumber": 3658,
      "URL": "https://www.lego.com/biassets/bi/4625467.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4625467.png",
      "Description": "Police Helicopter",
      "Notes": "BI 3005/60 - 3658 V. 29/39 2/2",
      "DashedNumber": "3658-1"
    },
    {
      "ID": 1282,
      "SetNumber": 3661,
      "URL": "https://www.lego.com/biassets/bi/4625451.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4625451.png",
      "Description": "Bank & Money Transfer",
      "Notes": "BI 3005/60 - 3661 V. 29/39 3/3",
      "DashedNumber": "3661-1"
    },
    {
      "ID": 1283,
      "SetNumber": 3661,
      "URL": "https://www.lego.com/biassets/bi/4656129.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4656129.png",
      "Description": "Bank & Money Transfer",
      "Notes": "BI 3004/56 - 3661 V.29/39 2/3",
      "DashedNumber": "3661-1"
    },
    {
      "ID": 1284,
      "SetNumber": 3661,
      "URL": "https://www.lego.com/biassets/bi/4656131.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4656131.png",
      "Description": "Bank & Money Transfer",
      "Notes": "BI 3004/56 - 3661 V.29/39 2/3",
      "DashedNumber": "3661-1"
    },
    {
      "ID": 1285,
      "SetNumber": 3661,
      "URL": "https://www.lego.com/biassets/bi/4625450.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4625450.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3661-1"
    },
    {
      "ID": 1286,
      "SetNumber": 3661,
      "URL": "https://www.lego.com/biassets/bi/4625452.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4625452.png",
      "Description": "Bank & Money Transfer",
      "Notes": "BI 3005/60 - 3661 V. 29/39 3/3",
      "DashedNumber": "3661-1"
    },
    {
      "ID": 1287,
      "SetNumber": 3661,
      "URL": "https://www.lego.com/biassets/bi/4625420.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4625420.png",
      "Description": "Bank & Money Transfer",
      "Notes": "BI 3010/24 - 3661 V. 29 1/3",
      "DashedNumber": "3661-1"
    },
    {
      "ID": 1288,
      "SetNumber": 3661,
      "URL": "https://www.lego.com/biassets/bi/4625421.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4625421.png",
      "Description": "Bank & Money Transfer",
      "Notes": "BI 3010/24 - 3661 V. 39 1/3",
      "DashedNumber": "3661-1"
    },
    {
      "ID": 1289,
      "SetNumber": 3677,
      "URL": "https://www.lego.com/biassets/bi/4646704.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4646704.png",
      "Description": "Red Cargo Train",
      "Notes": "BI 3004/20 - 3677 V29/39 4/6",
      "DashedNumber": "3677-1"
    },
    {
      "ID": 1290,
      "SetNumber": 3677,
      "URL": "https://www.lego.com/biassets/bi/4646705.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4646705.png",
      "Description": "Red Cargo Train",
      "Notes": "BI 3004/20 - 3677 V29/39 4/6",
      "DashedNumber": "3677-1"
    },
    {
      "ID": 1291,
      "SetNumber": 3677,
      "URL": "https://www.lego.com/biassets/bi/4653303.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4653303.png",
      "Description": "Red Cargo Train",
      "Notes": "BI 3004/36 - 3677 V 29/39 6/6",
      "DashedNumber": "3677-1"
    },
    {
      "ID": 1292,
      "SetNumber": 3677,
      "URL": "https://www.lego.com/biassets/bi/4653302.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4653302.png",
      "Description": "Red Cargo Train",
      "Notes": "BI 3004/36 - 3677 V.29/39 6/6",
      "DashedNumber": "3677-1"
    },
    {
      "ID": 1293,
      "SetNumber": 3677,
      "URL": "https://www.lego.com/biassets/bi/4646697.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4646697.png",
      "Description": "Red Cargo Train",
      "Notes": "BI 3004/36-3677 V 29/39 2/6",
      "DashedNumber": "3677-1"
    },
    {
      "ID": 1294,
      "SetNumber": 3677,
      "URL": "https://www.lego.com/biassets/bi/4646698.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4646698.png",
      "Description": "Red Cargo Train",
      "Notes": "BI 3004/36-3677 V 29/39 2/6",
      "DashedNumber": "3677-1"
    },
    {
      "ID": 1295,
      "SetNumber": 3677,
      "URL": "https://www.lego.com/biassets/bi/4646699.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4646699.png",
      "Description": "Red Cargo Train",
      "Notes": "BI 3004/48 - 3677 V29/39 3/6",
      "DashedNumber": "3677-1"
    },
    {
      "ID": 1296,
      "SetNumber": 3677,
      "URL": "https://www.lego.com/biassets/bi/4646701.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4646701.png",
      "Description": "Red Cargo Train",
      "Notes": "BI 3004/48 - 3677 V29/39 3/6",
      "DashedNumber": "3677-1"
    },
    {
      "ID": 1297,
      "SetNumber": 3677,
      "URL": "https://www.lego.com/biassets/bi/4652856.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4652856.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3677-1"
    },
    {
      "ID": 1298,
      "SetNumber": 3677,
      "URL": "https://www.lego.com/biassets/bi/4652865.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4652865.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3677-1"
    },
    {
      "ID": 1299,
      "SetNumber": 3677,
      "URL": "https://www.lego.com/biassets/bi/4646708.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4646708.png",
      "Description": "Red Cargo Train",
      "Notes": "BI 3012/36 - 3677 V 29/39 5/6",
      "DashedNumber": "3677-1"
    },
    {
      "ID": 1300,
      "SetNumber": 3677,
      "URL": "https://www.lego.com/biassets/bi/4646709.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4646709.png",
      "Description": "Red Cargo Train",
      "Notes": "BI 3012/36 - 3677 V 29/39 5/6",
      "DashedNumber": "3677-1"
    },
    {
      "ID": 1301,
      "SetNumber": 3677,
      "URL": "https://www.lego.com/biassets/bi/6013652.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6013652.png",
      "Description": "Red Cargo Train",
      "Notes": "BI 3009 76+4*-3677 V29/39 1/6",
      "DashedNumber": "3677-1"
    },
    {
      "ID": 1302,
      "SetNumber": 3677,
      "URL": "https://www.lego.com/biassets/bi/6013655.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6013655.png",
      "Description": "Red Cargo Train",
      "Notes": "BI 3009 76+4*-3677 V29/39 1/6",
      "DashedNumber": "3677-1"
    },
    {
      "ID": 1303,
      "SetNumber": 3723,
      "URL": "https://www.lego.com/biassets/bi/4154614.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4154614.png",
      "Description": "LEGO MINIFIGURE",
      "Notes": "BI 3723 GLOBAL",
      "DashedNumber": "3723-1"
    },
    {
      "ID": 1304,
      "SetNumber": 3724,
      "URL": "https://www.lego.com/biassets/bi/4157487.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4157487.png",
      "Description": "LEGO DRAGON",
      "Notes": "BI 3724",
      "DashedNumber": "3724-1"
    },
    {
      "ID": 1305,
      "SetNumber": 3739,
      "URL": "https://www.lego.com/biassets/bi/4177128.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4177128.png",
      "Description": "Blacksmith Shop",
      "Notes": "BI 3739",
      "DashedNumber": "3739-1"
    },
    {
      "ID": 1306,
      "SetNumber": 3740,
      "URL": "https://www.lego.com/biassets/bi/4162295.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4162295.png",
      "Description": "SMALL TRAIN BASIS",
      "Notes": "BYGGEVEJLEDNING TIL 3740",
      "DashedNumber": "3740-1"
    },
    {
      "ID": 1307,
      "SetNumber": 3741,
      "URL": "https://www.lego.com/biassets/bi/4162296.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4162296.png",
      "Description": "Co-Pack C",
      "Notes": "BI 3741",
      "DashedNumber": "3741-1"
    },
    {
      "ID": 1308,
      "SetNumber": 3742,
      "URL": "https://www.lego.com/biassets/bi/4162297.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4162297.png",
      "Description": "Co-Pack C",
      "Notes": "BI 3742",
      "DashedNumber": "3742-1"
    },
    {
      "ID": 1309,
      "SetNumber": 3771,
      "URL": "https://www.lego.com/biassets/bi/4275516.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4275516.png",
      "Description": "Deluxe Train Set",
      "Notes": "BI 3771+3772",
      "DashedNumber": "3771-1"
    },
    {
      "ID": 1310,
      "SetNumber": 3801,
      "URL": "https://www.lego.com/biassets/bi/4132910.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4132910.png",
      "Description": "Constructopedia",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3801-1"
    },
    {
      "ID": 1311,
      "SetNumber": 3804,
      "URL": "https://www.lego.com/biassets/bi/4157492.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4157492.png",
      "Description": "Robotics Invention System 2.0",
      "Notes": "BUILDING INSTR. 3804 ENG/US",
      "DashedNumber": "3804-1"
    },
    {
      "ID": 1312,
      "SetNumber": 3804,
      "URL": "https://www.lego.com/biassets/bi/4153532.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4153532.png",
      "Description": "Robotics Invention System 2.0",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3804-1"
    },
    {
      "ID": 1313,
      "SetNumber": 3804,
      "URL": "https://www.lego.com/biassets/bi/4153542.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4153542.png",
      "Description": "Robotics Invention System 2.0",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3804-1"
    },
    {
      "ID": 1314,
      "SetNumber": 3804,
      "URL": "https://www.lego.com/biassets/bi/4153534.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4153534.png",
      "Description": "Robotics Invention System 2.0",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3804-1"
    },
    {
      "ID": 1315,
      "SetNumber": 3804,
      "URL": "https://www.lego.com/biassets/bi/4153527.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4153527.png",
      "Description": "Robotics Invention System 2.0",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3804-1"
    },
    {
      "ID": 1316,
      "SetNumber": 3804,
      "URL": "https://www.lego.com/biassets/bi/4153541.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4153541.png",
      "Description": "Robotics Invention System 2.0",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3804-1"
    },
    {
      "ID": 1317,
      "SetNumber": 3815,
      "URL": "https://www.lego.com/biassets/bi/4645650.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4645650.png",
      "Description": "Heroic Heroes of the Deep",
      "Notes": "BI 3003/24 - 3815 V 29/39",
      "DashedNumber": "3815-1"
    },
    {
      "ID": 1318,
      "SetNumber": 3815,
      "URL": "https://www.lego.com/biassets/bi/4645652.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4645652.png",
      "Description": "Heroic Heroes of the Deep",
      "Notes": "BI 3003/24 - 3815 V 29/39",
      "DashedNumber": "3815-1"
    },
    {
      "ID": 1319,
      "SetNumber": 3816,
      "URL": "https://www.lego.com/biassets/bi/4645655.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4645655.png",
      "Description": "Glove World",
      "Notes": "BI 3004/32 - 3816 V 29/39",
      "DashedNumber": "3816-1"
    },
    {
      "ID": 1320,
      "SetNumber": 3816,
      "URL": "https://www.lego.com/biassets/bi/4645656.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4645656.png",
      "Description": "Glove World",
      "Notes": "BI 3004/32 - 3816 V 29/39",
      "DashedNumber": "3816-1"
    },
    {
      "ID": 1321,
      "SetNumber": 3817,
      "URL": "https://www.lego.com/biassets/bi/6003838.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6003838.png",
      "Description": "The Flying Dutchman",
      "Notes": "BI 3004/68+4*- 3817 V 29/39",
      "DashedNumber": "3817-1"
    },
    {
      "ID": 1322,
      "SetNumber": 3817,
      "URL": "https://www.lego.com/biassets/bi/6003868.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6003868.png",
      "Description": "The Flying Dutchman",
      "Notes": "BI 3004/68+4*-3817 V 29/39",
      "DashedNumber": "3817-1"
    },
    {
      "ID": 1323,
      "SetNumber": 3818,
      "URL": "https://www.lego.com/biassets/bi/6003870.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6003870.png",
      "Description": "Bikini Bottom Undersea Party",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3818-1"
    },
    {
      "ID": 1324,
      "SetNumber": 3818,
      "URL": "https://www.lego.com/biassets/bi/6003869.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6003869.png",
      "Description": "Bikini Bottom Undersea Party",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3818-1"
    },
    {
      "ID": 1325,
      "SetNumber": 3818,
      "URL": "https://www.lego.com/biassets/bi/6047002.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6047002.png",
      "Description": "Bikini Bottom Undersea Party",
      "Notes": "BI 3017 / 80+4 - 65/115g, 3818 V29",
      "DashedNumber": "3818-1"
    },
    {
      "ID": 1326,
      "SetNumber": 3818,
      "URL": "https://www.lego.com/biassets/bi/6047003.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6047003.png",
      "Description": "Bikini Bottom Undersea Party",
      "Notes": "BI 3017 / 80+4 - 65/115g, 3818 V39",
      "DashedNumber": "3818-1"
    },
    {
      "ID": 1327,
      "SetNumber": 3825,
      "URL": "https://www.lego.com/biassets/bi/4494955.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4494955.png",
      "Description": "Krusty Krab",
      "Notes": "BI 3825 NA",
      "DashedNumber": "3825-1"
    },
    {
      "ID": 1328,
      "SetNumber": 3825,
      "URL": "https://www.lego.com/biassets/bi/4494587.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4494587.png",
      "Description": "Krusty Krab",
      "Notes": "BI 3825 IN",
      "DashedNumber": "3825-1"
    },
    {
      "ID": 1329,
      "SetNumber": 3826,
      "URL": "https://www.lego.com/biassets/bi/4495453.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4495453.png",
      "Description": "Build-A-Bob",
      "Notes": "BI. 3826  VER29",
      "DashedNumber": "3826-1"
    },
    {
      "ID": 1330,
      "SetNumber": 3826,
      "URL": "https://www.lego.com/biassets/bi/4497924.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4497924.png",
      "Description": "Build-A-Bob",
      "Notes": "BUILDING INSTRUC. 3826 VER 39",
      "DashedNumber": "3826-1"
    },
    {
      "ID": 1331,
      "SetNumber": 3827,
      "URL": "https://www.lego.com/biassets/bi/4495185.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4495185.png",
      "Description": "Adventures in Bikini Bottom",
      "Notes": "BI  3827 IN",
      "DashedNumber": "3827-1"
    },
    {
      "ID": 1332,
      "SetNumber": 3827,
      "URL": "https://www.lego.com/biassets/bi/4495182.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4495182.png",
      "Description": "Adventures in Bikini Bottom",
      "Notes": "BI  3827 NA",
      "DashedNumber": "3827-1"
    },
    {
      "ID": 1333,
      "SetNumber": 3828,
      "URL": "https://www.lego.com/biassets/bi/4498009.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4498009.png",
      "Description": "Air Temple",
      "Notes": "BI 3828 V 39",
      "DashedNumber": "3828-1"
    },
    {
      "ID": 1334,
      "SetNumber": 3828,
      "URL": "https://www.lego.com/biassets/bi/4498010.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4498010.png",
      "Description": "Air Temple",
      "Notes": "BI 3828 V 29",
      "DashedNumber": "3828-1"
    },
    {
      "ID": 1335,
      "SetNumber": 3829,
      "URL": "https://www.lego.com/biassets/bi/4498011.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4498011.png",
      "Description": "Fire Nation Ship",
      "Notes": "BI  3829 V39",
      "DashedNumber": "3829-1"
    },
    {
      "ID": 1336,
      "SetNumber": 3829,
      "URL": "https://www.lego.com/biassets/bi/4498012.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4498012.png",
      "Description": "Fire Nation Ship",
      "Notes": "BI  3829 V29",
      "DashedNumber": "3829-1"
    },
    {
      "ID": 1337,
      "SetNumber": 3830,
      "URL": "https://www.lego.com/biassets/bi/4527938.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4527938.png",
      "Description": "The Bikini Bottom Express",
      "Notes": "BI,  3830",
      "DashedNumber": "3830-1"
    },
    {
      "ID": 1338,
      "SetNumber": 3831,
      "URL": "https://www.lego.com/biassets/bi/4527940.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4527940.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3831-1"
    },
    {
      "ID": 1339,
      "SetNumber": 3831,
      "URL": "https://www.lego.com/biassets/bi/4527942.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4527942.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3831-1"
    },
    {
      "ID": 1340,
      "SetNumber": 3831,
      "URL": "https://www.lego.com/biassets/bi/4542394.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4542394.png",
      "Description": "Rocket Ride",
      "Notes": "BUILD. INSTRUCTION, 3831 IN 29",
      "DashedNumber": "3831-1"
    },
    {
      "ID": 1341,
      "SetNumber": 3831,
      "URL": "https://www.lego.com/biassets/bi/4542395.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4542395.png",
      "Description": "Rocket Ride",
      "Notes": "BUILD. INSTRUCTION, 3831 NA 39",
      "DashedNumber": "3831-1"
    },
    {
      "ID": 1342,
      "SetNumber": 3832,
      "URL": "https://www.lego.com/biassets/bi/4538093.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4538093.png",
      "Description": "SpongeBobs Emergency",
      "Notes": "BUILDING INSTRUC. 3005, 3832",
      "DashedNumber": "3832-1"
    },
    {
      "ID": 1343,
      "SetNumber": 3833,
      "URL": "https://www.lego.com/biassets/bi/4548973.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4548973.png",
      "Description": "Krusty Krab Adventures",
      "Notes": "BI 3004/48 - 3833",
      "DashedNumber": "3833-1"
    },
    {
      "ID": 1344,
      "SetNumber": 3834,
      "URL": "https://www.lego.com/biassets/bi/4548974.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4548974.png",
      "Description": "Good Neighbors at Bikini Bottom",
      "Notes": "BI 3006/48 - 3834",
      "DashedNumber": "3834-1"
    },
    {
      "ID": 1345,
      "SetNumber": 3834,
      "URL": "https://www.lego.com/biassets/bi/4592784.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4592784.png",
      "Description": "Lunar Command",
      "Notes": "BI 3005/12 - 3842 V92",
      "DashedNumber": "3834-1"
    },
    {
      "ID": 1346,
      "SetNumber": 3835,
      "URL": "https://www.lego.com/biassets/bi/4592605.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4592605.png",
      "Description": "Robo Champ",
      "Notes": "BI 3003/24 - 3835 V92",
      "DashedNumber": "3835-1"
    },
    {
      "ID": 1347,
      "SetNumber": 3835,
      "URL": "https://www.lego.com/biassets/bi/4595459.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4595459.png",
      "Description": "Game rules",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3835-1"
    },
    {
      "ID": 1348,
      "SetNumber": 3835,
      "URL": "https://www.lego.com/biassets/bi/4595467.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4595467.png",
      "Description": "Game instructions",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3835-1"
    },
    {
      "ID": 1349,
      "SetNumber": 3835,
      "URL": "https://www.lego.com/biassets/bi/4561319.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4561319.png",
      "Description": "Robo Champ",
      "Notes": "BI 3003/24 - 3835",
      "DashedNumber": "3835-1"
    },
    {
      "ID": 1350,
      "SetNumber": 3835,
      "URL": "https://www.lego.com/biassets/bi/4579235.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4579235.png",
      "Description": "Gameplay",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3835-1"
    },
    {
      "ID": 1351,
      "SetNumber": 3836,
      "URL": "https://www.lego.com/biassets/bi/4579237.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4579237.png",
      "Description": "Gameplay",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3836-1"
    },
    {
      "ID": 1352,
      "SetNumber": 3836,
      "URL": "https://www.lego.com/biassets/bi/4561320.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4561320.png",
      "Description": "Magikus",
      "Notes": "BI 3003/24 - 3836",
      "DashedNumber": "3836-1"
    },
    {
      "ID": 1353,
      "SetNumber": 3836,
      "URL": "https://www.lego.com/biassets/bi/4595474.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4595474.png",
      "Description": "Game instructions",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3836-1"
    },
    {
      "ID": 1354,
      "SetNumber": 3836,
      "URL": "https://www.lego.com/biassets/bi/4595468.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4595468.png",
      "Description": "Game rules",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3836-1"
    },
    {
      "ID": 1355,
      "SetNumber": 3836,
      "URL": "https://www.lego.com/biassets/bi/4592613.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4592613.png",
      "Description": "Magikus",
      "Notes": "BI 3003/24 - 3836 V92",
      "DashedNumber": "3836-1"
    },
    {
      "ID": 1356,
      "SetNumber": 3837,
      "URL": "https://www.lego.com/biassets/bi/4595779.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4595779.png",
      "Description": "Game instructions",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3837-1"
    },
    {
      "ID": 1357,
      "SetNumber": 3837,
      "URL": "https://www.lego.com/biassets/bi/4592619.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4592619.png",
      "Description": "Monster 4",
      "Notes": "BI 3003/24 - 3837 V92",
      "DashedNumber": "3837-1"
    },
    {
      "ID": 1358,
      "SetNumber": 3837,
      "URL": "https://www.lego.com/biassets/bi/4595775.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4595775.png",
      "Description": "Game rules",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3837-1"
    },
    {
      "ID": 1359,
      "SetNumber": 3837,
      "URL": "https://www.lego.com/biassets/bi/4561321.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4561321.png",
      "Description": "Monster 4",
      "Notes": "BI 3003/24 - 3837",
      "DashedNumber": "3837-1"
    },
    {
      "ID": 1360,
      "SetNumber": 3837,
      "URL": "https://www.lego.com/biassets/bi/4578700.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4578700.png",
      "Description": "Gameplay",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3837-1"
    },
    {
      "ID": 1361,
      "SetNumber": 3837,
      "URL": "https://www.lego.com/biassets/bi/4626083.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4626083.png",
      "Description": "Monster 4",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3837-1"
    },
    {
      "ID": 1362,
      "SetNumber": 3838,
      "URL": "https://www.lego.com/biassets/bi/4578701.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4578701.png",
      "Description": "Gameplay",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3838-1"
    },
    {
      "ID": 1363,
      "SetNumber": 3838,
      "URL": "https://www.lego.com/biassets/bi/4561322.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4561322.png",
      "Description": "Lava Dragon",
      "Notes": "BI 3002/24 - 3838",
      "DashedNumber": "3838-1"
    },
    {
      "ID": 1364,
      "SetNumber": 3838,
      "URL": "https://www.lego.com/biassets/bi/4592631.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4592631.png",
      "Description": "Lava Dragon",
      "Notes": "BI 3002/24 - 3838 V92",
      "DashedNumber": "3838-1"
    },
    {
      "ID": 1365,
      "SetNumber": 3838,
      "URL": "https://www.lego.com/biassets/bi/4595788.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4595788.png",
      "Description": "Game instructions",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3838-1"
    },
    {
      "ID": 1366,
      "SetNumber": 3839,
      "URL": "https://www.lego.com/biassets/bi/4595798.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4595798.png",
      "Description": "Game instructions",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3839-1"
    },
    {
      "ID": 1367,
      "SetNumber": 3839,
      "URL": "https://www.lego.com/biassets/bi/4589443.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4589443.png",
      "Description": "Game instructions",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3839-1"
    },
    {
      "ID": 1368,
      "SetNumber": 3839,
      "URL": "https://www.lego.com/biassets/bi/4561323.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4561323.png",
      "Description": "Race 3000",
      "Notes": "BI 3003/24 - 3839",
      "DashedNumber": "3839-1"
    },
    {
      "ID": 1369,
      "SetNumber": 3839,
      "URL": "https://www.lego.com/biassets/bi/4578702.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4578702.png",
      "Description": "Gameplay",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3839-1"
    },
    {
      "ID": 1370,
      "SetNumber": 3839,
      "URL": "https://www.lego.com/biassets/bi/4592639.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4592639.png",
      "Description": "Race 3000",
      "Notes": "BI 3003/24 - 3839 V92",
      "DashedNumber": "3839-1"
    },
    {
      "ID": 1371,
      "SetNumber": 3840,
      "URL": "https://www.lego.com/biassets/bi/4578703.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4578703.png",
      "Description": "Gameplay",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3840-1"
    },
    {
      "ID": 1372,
      "SetNumber": 3840,
      "URL": "https://www.lego.com/biassets/bi/4568707.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4568707.png",
      "Description": "Pirate Code",
      "Notes": "BI 3003/24 - 3840",
      "DashedNumber": "3840-1"
    },
    {
      "ID": 1373,
      "SetNumber": 3840,
      "URL": "https://www.lego.com/biassets/bi/4595813.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4595813.png",
      "Description": "Game instructions",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3840-1"
    },
    {
      "ID": 1374,
      "SetNumber": 3840,
      "URL": "https://www.lego.com/biassets/bi/4592771.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4592771.png",
      "Description": "Pirate Code",
      "Notes": "BI 3003/24 - 3840 V92",
      "DashedNumber": "3840-1"
    },
    {
      "ID": 1375,
      "SetNumber": 3840,
      "URL": "https://www.lego.com/biassets/bi/4595808.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4595808.png",
      "Description": "Game rules",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3840-1"
    },
    {
      "ID": 1376,
      "SetNumber": 3841,
      "URL": "https://www.lego.com/biassets/bi/4595801.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4595801.png",
      "Description": "Game rules",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3841-1"
    },
    {
      "ID": 1377,
      "SetNumber": 3841,
      "URL": "https://www.lego.com/biassets/bi/4592778.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4592778.png",
      "Description": "Minotaurus",
      "Notes": "BI 3005/24 - 3841 V92",
      "DashedNumber": "3841-1"
    },
    {
      "ID": 1378,
      "SetNumber": 3841,
      "URL": "https://www.lego.com/biassets/bi/4595805.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4595805.png",
      "Description": "Game instructions",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3841-1"
    },
    {
      "ID": 1379,
      "SetNumber": 3841,
      "URL": "https://www.lego.com/biassets/bi/4578704.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4578704.png",
      "Description": "Gameplay",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3841-1"
    },
    {
      "ID": 1380,
      "SetNumber": 3841,
      "URL": "https://www.lego.com/biassets/bi/4579682.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4579682.png",
      "Description": "Minotaurus",
      "Notes": "BI 3005/24 - 3841",
      "DashedNumber": "3841-1"
    },
    {
      "ID": 1381,
      "SetNumber": 3842,
      "URL": "https://www.lego.com/biassets/bi/4579684.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4579684.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3842-1"
    },
    {
      "ID": 1382,
      "SetNumber": 3842,
      "URL": "https://www.lego.com/biassets/bi/4578705.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4578705.png",
      "Description": "Gameplay",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3842-1"
    },
    {
      "ID": 1383,
      "SetNumber": 3842,
      "URL": "https://www.lego.com/biassets/bi/4595823.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4595823.png",
      "Description": "Game instructions",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3842-1"
    },
    {
      "ID": 1384,
      "SetNumber": 3842,
      "URL": "https://www.lego.com/biassets/bi/4586360.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4586360.png",
      "Description": "Lunar Command",
      "Notes": "BI 3005/12 - 3842",
      "DashedNumber": "3842-1"
    },
    {
      "ID": 1385,
      "SetNumber": 3842,
      "URL": "https://www.lego.com/biassets/bi/4626089.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4626089.png",
      "Description": "Lunar Command",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3842-1"
    },
    {
      "ID": 1386,
      "SetNumber": 3843,
      "URL": "https://www.lego.com/biassets/bi/4595831.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4595831.png",
      "Description": "Game instructions",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3843-1"
    },
    {
      "ID": 1387,
      "SetNumber": 3843,
      "URL": "https://www.lego.com/biassets/bi/4578706.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4578706.png",
      "Description": "Gameplay",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3843-1"
    },
    {
      "ID": 1388,
      "SetNumber": 3843,
      "URL": "https://www.lego.com/biassets/bi/4579685.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4579685.png",
      "Description": "Ramses Pyramid",
      "Notes": "BI 3005/24 - 3843",
      "DashedNumber": "3843-1"
    },
    {
      "ID": 1389,
      "SetNumber": 3843,
      "URL": "https://www.lego.com/biassets/bi/4592793.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4592793.png",
      "Description": "Ramses Pyramid",
      "Notes": "BI 3005/24 - 3843 V92",
      "DashedNumber": "3843-1"
    },
    {
      "ID": 1390,
      "SetNumber": 3844,
      "URL": "https://www.lego.com/biassets/bi/4578707.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4578707.png",
      "Description": "Gameplay",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3844-1"
    },
    {
      "ID": 1391,
      "SetNumber": 3844,
      "URL": "https://www.lego.com/biassets/bi/4595847.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4595847.png",
      "Description": "Game instructions",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3844-1"
    },
    {
      "ID": 1392,
      "SetNumber": 3844,
      "URL": "https://www.lego.com/biassets/bi/4596574.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4596574.png",
      "Description": "Game rules",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3844-1"
    },
    {
      "ID": 1393,
      "SetNumber": 3845,
      "URL": "https://www.lego.com/biassets/bi/4595485.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4595485.png",
      "Description": "Game rules",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3845-1"
    },
    {
      "ID": 1394,
      "SetNumber": 3845,
      "URL": "https://www.lego.com/biassets/bi/4590189.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4590189.png",
      "Description": "Wild Wool",
      "Notes": "BI 3003/16 - 3845 IN",
      "DashedNumber": "3845-1"
    },
    {
      "ID": 1395,
      "SetNumber": 3845,
      "URL": "https://www.lego.com/biassets/bi/4603704.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4603704.png",
      "Description": "Wild Wool",
      "Notes": "BI 3003/16 - 3845 V.92",
      "DashedNumber": "3845-1"
    },
    {
      "ID": 1396,
      "SetNumber": 3845,
      "URL": "https://www.lego.com/biassets/bi/6007017.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6007017.png",
      "Description": "Shave a Sheep",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3845-1"
    },
    {
      "ID": 1397,
      "SetNumber": 3845,
      "URL": "https://www.lego.com/biassets/bi/6007018.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6007018.png",
      "Description": "Shave a Sheep",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3845-1"
    },
    {
      "ID": 1398,
      "SetNumber": 3846,
      "URL": "https://www.lego.com/biassets/bi/4603705.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4603705.png",
      "Description": "UFO Attack",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3846-1"
    },
    {
      "ID": 1399,
      "SetNumber": 3846,
      "URL": "https://www.lego.com/biassets/bi/4590192.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4590192.png",
      "Description": "UFO Attack",
      "Notes": "BI 3003/24 - 3846 V.90",
      "DashedNumber": "3846-1"
    },
    {
      "ID": 1400,
      "SetNumber": 3846,
      "URL": "https://www.lego.com/biassets/bi/4595486.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4595486.png",
      "Description": "Game rules",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3846-1"
    },
    {
      "ID": 1401,
      "SetNumber": 3847,
      "URL": "https://www.lego.com/biassets/bi/4590195.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4590195.png",
      "Description": "Magma Monster",
      "Notes": "BI 3003/24 - 3847 V.90",
      "DashedNumber": "3847-1"
    },
    {
      "ID": 1402,
      "SetNumber": 3847,
      "URL": "https://www.lego.com/biassets/bi/4593375.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4593375.png",
      "Description": "Game rules",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3847-1"
    },
    {
      "ID": 1403,
      "SetNumber": 3847,
      "URL": "https://www.lego.com/biassets/bi/4603710.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4603710.png",
      "Description": "Magma Monster",
      "Notes": "BI 3003/24 - 3847 V.92",
      "DashedNumber": "3847-1"
    },
    {
      "ID": 1404,
      "SetNumber": 3848,
      "URL": "https://www.lego.com/biassets/bi/4603713.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4603713.png",
      "Description": "Pirate Plank",
      "Notes": "BI 3003/24 - 3848 V.92",
      "DashedNumber": "3848-1"
    },
    {
      "ID": 1405,
      "SetNumber": 3848,
      "URL": "https://www.lego.com/biassets/bi/4593376.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4593376.png",
      "Description": "Game rules",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3848-1"
    },
    {
      "ID": 1406,
      "SetNumber": 3848,
      "URL": "https://www.lego.com/biassets/bi/4590196.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4590196.png",
      "Description": "Pirate Plank",
      "Notes": "BI 3003/24 - 3848 IN",
      "DashedNumber": "3848-1"
    },
    {
      "ID": 1407,
      "SetNumber": 3848,
      "URL": "https://www.lego.com/biassets/bi/4595781.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4595781.png",
      "Description": "Game rules",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3848-1"
    },
    {
      "ID": 1408,
      "SetNumber": 3849,
      "URL": "https://www.lego.com/biassets/bi/4626127.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4626127.png",
      "Description": "Gold Oasis",
      "Notes": "BI 3003/16 - 3849 V.92",
      "DashedNumber": "3849-1"
    },
    {
      "ID": 1409,
      "SetNumber": 3849,
      "URL": "https://www.lego.com/biassets/bi/4598877.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4598877.png",
      "Description": "Gold Oasis",
      "Notes": "BI 3003/16 - 3849 IN",
      "DashedNumber": "3849-1"
    },
    {
      "ID": 1410,
      "SetNumber": 3849,
      "URL": "https://www.lego.com/biassets/bi/4598882.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4598882.png",
      "Description": "No Description Currently Available",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3849-1"
    },
    {
      "ID": 1411,
      "SetNumber": 3850,
      "URL": "https://www.lego.com/biassets/bi/4598883.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4598883.png",
      "Description": "Meteor Strike",
      "Notes": "BI 3004/48 - 3850 IN",
      "DashedNumber": "3850-1"
    },
    {
      "ID": 1412,
      "SetNumber": 3850,
      "URL": "https://www.lego.com/biassets/bi/4626489.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4626489.png",
      "Description": "Meteor Strike",
      "Notes": "BI 3004/48 - 3850 NA",
      "DashedNumber": "3850-1"
    },
    {
      "ID": 1413,
      "SetNumber": 3851,
      "URL": "https://www.lego.com/biassets/bi/4598887.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4598887.png",
      "Description": "Atlantis Treasure",
      "Notes": "BI 3005/32 - 3851 IN",
      "DashedNumber": "3851-1"
    },
    {
      "ID": 1414,
      "SetNumber": 3851,
      "URL": "https://www.lego.com/biassets/bi/4598888.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4598888.png",
      "Description": "Atlantis Treasure",
      "Notes": "BI 3005/32 - 3851 V.92",
      "DashedNumber": "3851-1"
    },
    {
      "ID": 1415,
      "SetNumber": 3852,
      "URL": "https://www.lego.com/biassets/bi/4622154.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4622154.png",
      "Description": "Sunblock",
      "Notes": "BI 3010/16, 3852 IN",
      "DashedNumber": "3852-1"
    },
    {
      "ID": 1416,
      "SetNumber": 3852,
      "URL": "https://www.lego.com/biassets/bi/4622160.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4622160.png",
      "Description": "Sunblock",
      "Notes": "BI 3010/16, 3852 NA",
      "DashedNumber": "3852-1"
    },
    {
      "ID": 1417,
      "SetNumber": 3853,
      "URL": "https://www.lego.com/biassets/bi/4622162.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4622162.png",
      "Description": "Banana Balance",
      "Notes": "BI 3003/16 -3853 IN",
      "DashedNumber": "3853-1"
    },
    {
      "ID": 1418,
      "SetNumber": 3853,
      "URL": "https://www.lego.com/biassets/bi/4622167.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4622167.png",
      "Description": "Banana Balance",
      "Notes": "BI 3003/16 -3853 NA",
      "DashedNumber": "3853-1"
    },
    {
      "ID": 1419,
      "SetNumber": 3854,
      "URL": "https://www.lego.com/biassets/bi/4622552.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4622552.png",
      "Description": "Frog Rush",
      "Notes": "BI 3003/20 - 3854 NA",
      "DashedNumber": "3854-1"
    },
    {
      "ID": 1420,
      "SetNumber": 3854,
      "URL": "https://www.lego.com/biassets/bi/4622551.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4622551.png",
      "Description": "Frog Rush",
      "Notes": "BI 3003/20 - 3854 IN",
      "DashedNumber": "3854-1"
    },
    {
      "ID": 1421,
      "SetNumber": 3855,
      "URL": "https://www.lego.com/biassets/bi/4622169.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4622169.png",
      "Description": "Ramses Return",
      "Notes": "BI 3003/16 -3855 IN",
      "DashedNumber": "3855-1"
    },
    {
      "ID": 1422,
      "SetNumber": 3855,
      "URL": "https://www.lego.com/biassets/bi/4622172.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4622172.png",
      "Description": "Ramses Return",
      "Notes": "BI 3003/16 -3855 NA",
      "DashedNumber": "3855-1"
    },
    {
      "ID": 1423,
      "SetNumber": 3856,
      "URL": "https://www.lego.com/biassets/bi/4622550.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4622550.png",
      "Description": "Ninjago",
      "Notes": "BI 3005/28 - 3856 NA",
      "DashedNumber": "3856-1"
    },
    {
      "ID": 1424,
      "SetNumber": 3856,
      "URL": "https://www.lego.com/biassets/bi/4622549.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4622549.png",
      "Description": "Ninjago",
      "Notes": "BI 3005/28 - 3856 IN",
      "DashedNumber": "3856-1"
    },
    {
      "ID": 1425,
      "SetNumber": 3857,
      "URL": "https://www.lego.com/biassets/bi/4646620.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4646620.png",
      "Description": "Heroica Draida Bay",
      "Notes": "BI 3004/20, 3857 IN",
      "DashedNumber": "3857-1"
    },
    {
      "ID": 1426,
      "SetNumber": 3857,
      "URL": "https://www.lego.com/biassets/bi/4646621.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4646621.png",
      "Description": "Heroica Draida Bay",
      "Notes": "BI 3004/20, 3857 NA",
      "DashedNumber": "3857-1"
    },
    {
      "ID": 1427,
      "SetNumber": 3858,
      "URL": "https://www.lego.com/biassets/bi/4646622.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4646622.png",
      "Description": "Heroica Waldurk Forest",
      "Notes": "BI 3004/24 -3858 IN",
      "DashedNumber": "3858-1"
    },
    {
      "ID": 1428,
      "SetNumber": 3858,
      "URL": "https://www.lego.com/biassets/bi/4646623.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4646623.png",
      "Description": "Heroica Waldurk Forest",
      "Notes": "BI 3004/24 -3858 NA",
      "DashedNumber": "3858-1"
    },
    {
      "ID": 1429,
      "SetNumber": 3859,
      "URL": "https://www.lego.com/biassets/bi/4646624.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4646624.png",
      "Description": "Heroica Caverns of Nathuz",
      "Notes": "BI 3004/24 -3859 IN",
      "DashedNumber": "3859-1"
    },
    {
      "ID": 1430,
      "SetNumber": 3859,
      "URL": "https://www.lego.com/biassets/bi/4646625.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4646625.png",
      "Description": "Heroica Caverns of Nathuz",
      "Notes": "BI 3004/24 -3859 NA",
      "DashedNumber": "3859-1"
    },
    {
      "ID": 1431,
      "SetNumber": 3860,
      "URL": "https://www.lego.com/biassets/bi/4646627.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4646627.png",
      "Description": "Heroica Castle Fortaan",
      "Notes": "BI 3004/40 -3860 IN",
      "DashedNumber": "3860-1"
    },
    {
      "ID": 1432,
      "SetNumber": 3860,
      "URL": "https://www.lego.com/biassets/bi/4646628.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4646628.png",
      "Description": "Heroica Castle Fortaan",
      "Notes": "BI 3004/40 -3860 NA",
      "DashedNumber": "3860-1"
    },
    {
      "ID": 1433,
      "SetNumber": 3861,
      "URL": "https://www.lego.com/biassets/bi/4659517.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4659517.png",
      "Description": "LEGO� Champion",
      "Notes": "BI 2005/ 2 -3861 IN",
      "DashedNumber": "3861-1"
    },
    {
      "ID": 1434,
      "SetNumber": 3861,
      "URL": "https://www.lego.com/biassets/bi/4659520.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4659520.png",
      "Description": "LEGO� Champion",
      "Notes": "BI 2005/2-80g,3861 NA",
      "DashedNumber": "3861-1"
    },
    {
      "ID": 1435,
      "SetNumber": 3862,
      "URL": "https://www.lego.com/biassets/bi/4603728.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4603728.png",
      "Description": "Game rules",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3862-1"
    },
    {
      "ID": 1436,
      "SetNumber": 3862,
      "URL": "https://www.lego.com/biassets/bi/4603725.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4603725.png",
      "Description": "Game instructions",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3862-1"
    },
    {
      "ID": 1437,
      "SetNumber": 3862,
      "URL": "https://www.lego.com/biassets/bi/4603730.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4603730.png",
      "Description": "Harry Potter � Hogwarts �",
      "Notes": "BI 3005/32 - 3862 IN",
      "DashedNumber": "3862-1"
    },
    {
      "ID": 1438,
      "SetNumber": 3862,
      "URL": "https://www.lego.com/biassets/bi/4603731.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4603731.png",
      "Description": "Harry Potter � Hogwarts �",
      "Notes": "BI 3005/32 - 3862 V.92",
      "DashedNumber": "3862-1"
    },
    {
      "ID": 1439,
      "SetNumber": 3863,
      "URL": "https://www.lego.com/biassets/bi/6002810.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6002810.png",
      "Description": "Kokoriko",
      "Notes": "BI 3010/16 - 3863 IN",
      "DashedNumber": "3863-1"
    },
    {
      "ID": 1440,
      "SetNumber": 3863,
      "URL": "https://www.lego.com/biassets/bi/6002981.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6002981.png",
      "Description": "Kokoriko",
      "Notes": "BI 3010/16 - 3863 NA",
      "DashedNumber": "3863-1"
    },
    {
      "ID": 1441,
      "SetNumber": 3864,
      "URL": "https://www.lego.com/biassets/bi/6002813.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6002813.png",
      "Description": "Mini-Taurus",
      "Notes": "BI 3004/24 - 3864 IN",
      "DashedNumber": "3864-1"
    },
    {
      "ID": 1442,
      "SetNumber": 3864,
      "URL": "https://www.lego.com/biassets/bi/6002983.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6002983.png",
      "Description": "Mini-Taurus",
      "Notes": "BI 3004/24 - 3864 NA",
      "DashedNumber": "3864-1"
    },
    {
      "ID": 1443,
      "SetNumber": 3865,
      "URL": "https://www.lego.com/biassets/bi/6020376.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6020376.png",
      "Description": "CITY Alarm",
      "Notes": "BI 3004 60/3865 IN",
      "DashedNumber": "3865-1"
    },
    {
      "ID": 1444,
      "SetNumber": 3865,
      "URL": "https://www.lego.com/biassets/bi/6020374.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6020374.png",
      "Description": "CITY Alarm",
      "Notes": "BI 3004 60/3865 NA",
      "DashedNumber": "3865-1"
    },
    {
      "ID": 1445,
      "SetNumber": 3866,
      "URL": "https://www.lego.com/biassets/bi/6004523.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6004523.png",
      "Description": "Star Wars �: The Battle of Hoth �",
      "Notes": "BI 3005/36 - 3866 IN",
      "DashedNumber": "3866-1"
    },
    {
      "ID": 1446,
      "SetNumber": 3870,
      "URL": "https://www.lego.com/biassets/bi/4507071.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4507071.png",
      "Description": "Red Walker",
      "Notes": "BUILD.INSTRUCT. SKU 3870",
      "DashedNumber": "3870-1"
    },
    {
      "ID": 1447,
      "SetNumber": 3871,
      "URL": "https://www.lego.com/biassets/bi/4507072.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4507072.png",
      "Description": "White Flyer",
      "Notes": "BUILD.INSTRUCT. SKU 3871",
      "DashedNumber": "3871-1"
    },
    {
      "ID": 1448,
      "SetNumber": 3872,
      "URL": "https://www.lego.com/biassets/bi/4507073.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4507073.png",
      "Description": "Robo Chopper",
      "Notes": "BUILD.INSTRUCT. SKU 3872",
      "DashedNumber": "3872-1"
    },
    {
      "ID": 1449,
      "SetNumber": 3874,
      "URL": "https://www.lego.com/biassets/bi/6010546.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6010546.png",
      "Description": "HEROICA Ilrion",
      "Notes": "BI 3004/24 -3874",
      "DashedNumber": "3874-1"
    },
    {
      "ID": 1450,
      "SetNumber": 3874,
      "URL": "https://www.lego.com/biassets/bi/6010577.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6010577.png",
      "Description": "HEROICA Ilrion",
      "Notes": "BI 3004/24 -3874 NA",
      "DashedNumber": "3874-1"
    },
    {
      "ID": 1451,
      "SetNumber": 3885,
      "URL": "https://www.lego.com/biassets/bi/4507078.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4507078.png",
      "Description": "Mini Jet Fighter",
      "Notes": "BI.SKU 3885",
      "DashedNumber": "3885-1"
    },
    {
      "ID": 1452,
      "SetNumber": 3886,
      "URL": "https://www.lego.com/biassets/bi/4507079.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4507079.png",
      "Description": "Green Exo Fighter",
      "Notes": "BI. SKU 3886",
      "DashedNumber": "3886-1"
    },
    {
      "ID": 1453,
      "SetNumber": 3888,
      "URL": "https://www.lego.com/biassets/bi/4117956.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4117956.png",
      "Description": "THREE EIGHTS",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "3888-1"
    },
    {
      "ID": 1454,
      "SetNumber": 3920,
      "URL": "https://www.lego.com/biassets/bi/6029669.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6029669.png",
      "Description": "The Hobbit: An Unexpected Journey",
      "Notes": "BI 3004/32 -3920 IN",
      "DashedNumber": "3920-1"
    },
    {
      "ID": 1455,
      "SetNumber": 3920,
      "URL": "https://www.lego.com/biassets/bi/6029670.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6029670.png",
      "Description": "The Hobbit: An Unexpected Journey",
      "Notes": "BI 3004/32 -3920 NA",
      "DashedNumber": "3920-1"
    },
    {
      "ID": 1456,
      "SetNumber": 3930,
      "URL": "https://www.lego.com/biassets/bi/6001980.pdf",
      "Images": "https://www.lego.com/biassets/biimg/6001980.png",
      "Description": "Stephanies Outdoor Bakery",
      "Notes": "BI 3001/16 - 3930 V29",
      "DashedNumber": "3930-1"
    },
    {
      "ID": 1457,
      "SetNumber": 8230,
      "URL": "https://www.lego.com/biassets/bi/4101169.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4101169.png",
      "Description": "POLICE CAR",
      "Notes": "BUILDING INSTR. 8230 IN",
      "DashedNumber": "8230-1"
    },
    {
      "ID": 1458,
      "SetNumber": 8231,
      "URL": "https://www.lego.com/biassets/bi/4614527.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4614527.png",
      "Description": "Vicious Viper",
      "Notes": "BI 3003/32- 8231 V.29",
      "DashedNumber": "8231-1"
    },
    {
      "ID": 1459,
      "SetNumber": 8231,
      "URL": "https://www.lego.com/biassets/bi/4614528.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4614528.png",
      "Description": "Vicious Viper",
      "Notes": "BI 3003/32- 8231 V.39",
      "DashedNumber": "8231-1"
    },
    {
      "ID": 1460,
      "SetNumber": 8232,
      "URL": "https://www.lego.com/biassets/bi/4105776.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4105776.png",
      "Description": "HELICOPTER WITH PRESS AND PLAY",
      "Notes": "BI 8232 IN",
      "DashedNumber": "8232-1"
    },
    {
      "ID": 1461,
      "SetNumber": 8232,
      "URL": "https://www.lego.com/biassets/bi/4108979.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4108979.png",
      "Description": "HELICOPTER WITH PRESS AND PLAY",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "8232-1"
    },
    {
      "ID": 1462,
      "SetNumber": 8233,
      "URL": "https://www.lego.com/biassets/bi/4115481.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4115481.png",
      "Description": "COMPETITION MODEL POWER ITEM",
      "Notes": "BUILDING INSTR.FORO 8233/8239",
      "DashedNumber": "8233-1"
    },
    {
      "ID": 1463,
      "SetNumber": 8235,
      "URL": "https://www.lego.com/biassets/bi/877117.pdf",
      "Images": "https://www.lego.com/biassets/biimg/877117.png",
      "Description": "FRONT LOADER",
      "Notes": "No longer listed at LEGO.com",
      "DashedNumber": "8235-1"
    },
    {
      "ID": 1464,
      "SetNumber": 8236,
      "URL": "https://www.lego.com/biassets/bi/4133252.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4133252.png",
      "Description": "Bike Burner",
      "Notes": "BI 8236",
      "DashedNumber": "8236-1"
    },
    {
      "ID": 1465,
      "SetNumber": 8237,
      "URL": "https://www.lego.com/biassets/bi/4133249.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4133249.png",
      "Description": "Slammer Racer",
      "Notes": "BUILDINGINSTRUCTION 8237",
      "DashedNumber": "8237-1"
    },
    {
      "ID": 1466,
      "SetNumber": 8238,
      "URL": "https://www.lego.com/biassets/bi/4133253.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4133253.png",
      "Description": "Slammer Dragsters",
      "Notes": "BI 8238",
      "DashedNumber": "8238-1"
    },
    {
      "ID": 1467,
      "SetNumber": 8240,
      "URL": "https://www.lego.com/biassets/bi/4154150.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4154150.png",
      "Description": "Slammer Stunt Bike",
      "Notes": "BI 8240",
      "DashedNumber": "8240-1"
    },
    {
      "ID": 1468,
      "SetNumber": 8241,
      "URL": "https://www.lego.com/biassets/bi/4154151.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4154151.png",
      "Description": "Battle Cars",
      "Notes": "BI 8241",
      "DashedNumber": "8241-1"
    },
    {
      "ID": 1469,
      "SetNumber": 8242,
      "URL": "https://www.lego.com/biassets/bi/4154177.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4154177.png",
      "Description": "Slammer Turbo",
      "Notes": "BI 8242",
      "DashedNumber": "8242-1"
    },
    {
      "ID": 1470,
      "SetNumber": 8244,
      "URL": "https://www.lego.com/biassets/bi/4101170.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4101170.png",
      "Description": "MULTI SET",
      "Notes": "BUILDING INSTR. 8244 IN",
      "DashedNumber": "8244-1"
    },
    {
      "ID": 1471,
      "SetNumber": 8245,
      "URL": "https://www.lego.com/biassets/bi/4115771.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4115771.png",
      "Description": "ROBOTS REVENGE",
      "Notes": "BUILDING INSTR. 8245",
      "DashedNumber": "8245-1"
    },
    {
      "ID": 1472,
      "SetNumber": 8246,
      "URL": "https://www.lego.com/biassets/bi/4123569.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4123569.png",
      "Description": "SWAMP BOAT",
      "Notes": "BUILD INST. FOR 8246",
      "DashedNumber": "8246-1"
    },
    {
      "ID": 1473,
      "SetNumber": 8247,
      "URL": "https://www.lego.com/biassets/bi/4120977.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4120977.png",
      "Description": "Turbo Buggy",
      "Notes": "BUILD INST.  FOR 8247",
      "DashedNumber": "8247-1"
    },
    {
      "ID": 1474,
      "SetNumber": 8248,
      "URL": "https://www.lego.com/biassets/bi/4115772.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4115772.png",
      "Description": "FORKLIFT TRUCK",
      "Notes": "BUILDING INSTR. 8248",
      "DashedNumber": "8248-1"
    },
    {
      "ID": 1475,
      "SetNumber": 8251,
      "URL": "https://www.lego.com/biassets/bi/4124613.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4124613.png",
      "Description": "Motorbike",
      "Notes": "BUILD.INST. FOR 8251",
      "DashedNumber": "8251-1"
    },
    {
      "ID": 1476,
      "SetNumber": 8252,
      "URL": "https://www.lego.com/biassets/bi/4124624.pdf",
      "Images": "https://www.lego.com/biassets/biimg/4124624.png",
      "Description": "Police Buggy",
      "Notes": "BUILD.INST. FOR 8252",
      "DashedNumber": "8252-1"
     }
           
    ]
};


    $(document).ready(function () {
$('#dynam-now').click(function () {
    
var newArray = obj.results.filter(function (el) {
  return el.ID ==  $('#dynamId').val() &&
         el.SetNumber &&
         el.URL &&
         el.Images &&
         el.Description &&
         el.Notes &&   
         el.DashedNumber &&; 
});
console.log(newArray);
});
});


/////
////var newArray = Datarr.results.filter(function (el) {
////  return el.ID ==  UserInput &&
////         el.SetNumber &&
////         el.URL &&
////         el.Images &&
////         el.Description &&
////         el.DashedNumber &&
////         el.Preselect ; 
////});
////console.log(newArray);


///
