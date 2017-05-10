/**
 * Created by rounakbastola100 on 4/24/2017.
 */
window.onload = function(){
    document.getElementById("p1").innerHTML = "";// /500

};
window.onload = function () {
    document.getElementById("second").innerHTML="";
};
window.onload= function(){
    document.getElementById("data").innerHTML="";
};
var type= "";
function go(){
    document.getElementById("count").innerHTML="";
    document.getElementById("season").innerHTML="";
    type= "movie"
};
function go2(){
    document.getElementById("count").innerHTML="<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<Strong>Episode:</Strong><input type=number id=episodes step=1 value=0><span id=p1 >Max Episode</span>";
    document.getElementById("p1").innerHTML = ""//500
    document.getElementById("season").innerHTML = "<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;" +
        " <Strong>Season:</Strong><input type=number id=season2 step=1 value=0><span id=p2 >&emsp;" +
        "<Strong>Episode:</Strong></span><input type=number id=episode step=1 value=0>";
    type= "tvshow";
};
function go3(){
    document.getElementById("count").innerHTML="<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;" +
        "<Strong>Episode:</Strong><input type=number id=episodes step=1 value=0><span id=p1 >Max Episode</span>";
    document.getElementById("p1").innerHTML = "";// /500
    document.getElementById("season").innerHTML = "<br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp; " +
        "<Strong>Season:</Strong><input type=number id=season2 step=1 value=0><span id=p2 >&emsp;" +
        "<Strong>Episode:</Strong></span><input type=number id=episode step=1 value=0>";
    type= "anime";
};
function login(){
    var username= document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username=="rounak" && password=="lisa"){
        document.getElementById("login").innerHTML="";
        document.getElementById("second").innerHTML= "<div id=second>\
    <div>\
    <br>\
    <h2>Enter Show:</h2>\
    </div>\
    <div class=center>\
    <form id =show>\
        <input type=text class=lisa id=lisa>\
    </form>\
        </div>\
        <br>\
        <form id=types class=types>\
        <Strong>Type:</Strong>\
    &emsp;\
<input type=radio class=type name=type id=type1 value=movie onclick=go() >Movie\
        &emsp;&emsp;&emsp;\
<input type=radio class=type name=type id=type2 value=tvshow onclick=go2()>Tv Show\
    &emsp;&emsp;&emsp;\
<input type=radio class=type name=type id =type3 value=anime onclick=go3() >Anime\
        <br>\
        <br>\
        </form>\
        <div id=count>\
        </div>\
        <div id=season>\
        </div>\
        <br>\
        <div class=select>\
        <Strong>Rating:</Strong>&nbsp;\
<select name=score id=score class=score>\
        <option selected=selected value=0>Select</option>\
        <option value=10>10</option>\
        <option value=9>9</option>\
        <option value=8>8</option>\
        <option value=7>7</option>\
        <option value=6>6</option>\
        <option value=5>5</option>\
        <option value=4>4</option>\
        <option value=3>3</option>\
        <option value=2>2</option>\
        <option value=1>1</option>\
        </select>\
        </div>\
        <div id=comment>\
        <br>\
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;\
<Strong>Comments:</Strong>\
    <br>\
    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;\
<textarea class=info cols=50 rows=10 id=info ></textarea><br>\
        </div>\
        <br>\
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;\
        <Strong>Record for Offline:</Strong>\
        <button id=record onclick=save()>On</button>\
        <button>Off</button><br><br>\
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;\
<button type=button onclick=logdata()  id=sumbit   class=sumbit >submit</button>\
        </div><br>";

    }else{
        document.getElementById("second").innerHTML= "<br><Strong>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;\
        Incorrect username or password</Strong><br><Strong>&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Try again</Strong>";
    }
};

function save(){
    $(function() {
        var input = $("#lisa");//works
        if(document.getElementById("type1").checked){
            var input2=$("#type1");
        }else if(document.getElementById("type2").checked){
            input2=$("#type2");
        }else if(document.getElementById("type3").checked){
            input2=$("#type3");
        }
        var input3=$("#episodes");
        var input4= $("#score");//works
        var input5= $("#info");//works
        var button = $("#sumbit");
        var output = $("output");
        window.arr = [];
        arr[0]=["Show:","Type","Episodes","Rating","Comments:"];
        button.click(function() {
            try{
                arr.push([input.val(),type,document.getElementById("episodes").value,input4.val(),input5.val()]);
            }
            catch(err){
                arr.push([input.val(),"movie","N/A",input4.val(),input5.val()]);

            }
            input.val("");
            input2.val("");
            input3.val("");
            input4.val("");
            input5.val("");
            //window.open("data:application/octet-stream," + JSON.stringify(arr));
        })
    });

}
function logdata(){
    document.getElementById("download").innerHTML="<div id=download1><br><br><br><br><button type=button class=exceldownload id=exceldownload onclick=exceldownload() >download</input></button><br>";
    document.getElementById("data").innerHTML="<table id=myTable style=width:100%><tr><th>Show:</th><th>Type</th><th>Episodes</th><th>Rating</th><th>Comments:</th></tr>";
    window.show = document.getElementById("lisa").value;
    if(type=="tvshow" || type=="anime"){
       window.episodes = document.getElementById("episodes").value;
       window.episode = document.getElementById("episode").value;
       window.season = document.getElementById('season2').value;
       window.rating= document.getElementById("score").value;
       window.comments= document.getElementById("info").value;
    }else{
        episodes = "N/A";
        episode= "N/A";
        season = "N/A";
        rating= document.getElementById("score").value;
        comments= document.getElementById("info").value;

    }
    if(season ==0 || episodes=="N/A"){
        var table = document.createElement("TABLE");
        var row= table.insertRow(0);
        var cell1= row.insertCell(0);
        var cell2= row.insertCell(1);
        var cell3= row.insertCell(2);
        var cell4= row.insertCell(3);
        var cell5= row.insertCell(4);
        cell1.innerHTML= show;
        cell2.innerHTML= type;
        cell3.innerHTML= episodes;
        cell4.innerHTML= rating;
        cell5.innerHTML= comments;
        document.body.appendChild(table);

        /*if(type=="movie"){
            document.getElementById("lisa").value="";
            document.getElementById("score").value="";
            document.getElementById("info").value="";
        }else if(type=="tvshow" || type=="anime"){
            document.getElementById("lisa").value="";
            document.getElementById("episodes").value="";
            document.getElementById("episode").value="";
            document.getElementById('season2').value="";
            document.getElementById("score").value="";
            document.getElementById("info").value="";
        }*/
    }
}

function exceldownload(){
    var csvContent = "data:text/csv;charset=utf-8,";
    arr.forEach(function(infoArray, index){
        dataString = infoArray.join(",");
        csvContent += index < arr.length ? dataString+ "\n" : dataString;
    });
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "MediumData.csv");
    document.body.appendChild(link); // Required for FF

    link.click(); // This will download the data file named "MediumData.csv".

}