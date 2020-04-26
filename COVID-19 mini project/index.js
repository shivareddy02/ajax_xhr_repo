document.getElementById('button').addEventListener('click',loadInfo);

function loadInfo(){
var xhr = new XMLHttpRequest();
xhr.open('GET','https://api.covid19india.org/data.json',true);

xhr.onload = function(){
      if(this.status == 200){
        var info = JSON.parse(this.responseText);
        main_info=info.cases_time_series;
        var output = '';
         for(var i=main_info.length-1;i>=0;i--){
           output +=
          '<link rel="stylesheet" href="index.css">' +
           '<table class="info">' +
             '<tr>' +
               '<th>Date</th>' +
               '<th>Total Cases</th>' +
               '<th>New  Cases</th>' +
               '<th style="color:red;">Total Deaths</th>' +
               '<th style="color:green">Total  Recovered</th>' +
             '</tr>' +
             '<tr>' +
               '<td>'+main_info[i].date+'</td>' +
               '<td>'+main_info[i].totalconfirmed+'</td>' +
               '<td>'+main_info[i].dailyconfirmed+'</td>' +
               '<td>'+main_info[i].totaldeceased+'</td>' +
               '<td>'+main_info[i].totalrecovered+'</td>' +
               '</tr>'+
           '</table>'
         }
         document.getElementById('info').innerHTML = output;
         }
    }
      xhr.send();
  }
