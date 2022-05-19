window.onload = function(){
    var d = new Date();
    var month_name = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var month = d.getMonth();   
    var year = d.getFullYear(); 
    var first_date = month_name[month] + " " + 1 + " " + year;
    
    var tmp = new Date(first_date).toDateString();
    
    var first_day = tmp.substring(0, 3);    
    var day_name = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var day_no = day_name.indexOf(first_day);   
    var days = new Date(year, month+1, 0).getDate();    
    
    var calendar = get_calendar(day_no, days);
    document.getElementById("calendar-month-year").innerHTML = month_name[month]+" "+year;
    document.getElementById("calendar-dates").appendChild(calendar);
}

function get_calendar(day_no, days){
    var table = document.createElement('table');
    var tr = document.createElement('tr');
    
    
    for(var c=0; c<=6; c++){
        var td = document.createElement('td');
        td.innerHTML = "SMTWTFS"[c];
        tr.appendChild(td);
    }
    table.appendChild(tr);
    
    
    tr = document.createElement('tr');
    var c;
    for(c=0; c<=6; c++){
        if(c == day_no){
            break;
        }
        var td = document.createElement('td');
        td.innerHTML = "";
        tr.appendChild(td);
    }
    
    var count = 1;
    for(; c<=6; c++){
        var td = document.createElement('td');
        td.innerHTML = count;
        count++;
        tr.appendChild(td);
    }
    table.appendChild(tr);
    
    
    for(var r=3; r<=7; r++){
        tr = document.createElement('tr');
        for(var c=0; c<=6; c++){
            if(count > days){
                table.appendChild(tr);
                return table;
            }
            var td = document.createElement('td');
            td.innerHTML = count;
            count++;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
	return table;
}
 
 
 function loadData(name){
  if(name =="button1"){	 
	document.getElementById("img1").src = "../images/VID3.jpg";
	document.getElementById("para").innerHTML ="<h1><i>Specialized in Wedding Photography</i></h1><br><h2>Lights and Magic</h2><br><h2>Shine</h2><br><h2>Siyak Seenu</h2><br><h2>The Wedding Diary</h2><br>"
  }else if(name=="button2"){
	 document.getElementById("img1").src = "../images/VID4.jpg";
	document.getElementById("para").innerHTML ="<h1><i>Specialized in Wedding Videography</i></h1><br><h2>DR creation</h2><br><h2>Native Tribe</h2><br><h2>Momento Creation</h2><br><h2>Chroma Pictures Wedding Films</h2><br>" 
    }
 else{
	 alert("invalid")
    }
	
 }	


 
function PriceHigher(){
	var video = [];
	var txt="";
	
	video["<h2>Ligthts and Magic <br> package</h2>"]= 100000.00 ;
    video["<h2><i>shine <br> package<i></h2>"]= 40000.00;
	video["<h2>Siyak Seenu <br> package</h2>"]= 45000.00;
	video["<h2><i>The Wedding Diary <br> package</i></h2>"]= 150000.00 ;
    video["<h2><i>DR Creation<br> package<i></h2>"]= 49000.00;
	video["<h2><i>Native Tribe<br> package<i></h2>"]= 900000.00;
	video["<h2><i>Momento creations<br> package</i></h2>"]= 230000.00 ;
    video["<h2><i>Chroma Pictures Wedding Films<br> package<i></h2>"]= 130000.00;

	for(var item in video){
		 if (video [item]>50000.00){
			 txt+= item + ":" + video[item] + "<br/>"
		 }
	}
     document.getElementById("img1").src= "../images/VID2.jpg";
   document.getElementById("para").innerHTML= txt;

} 

function PriceLower(){
	var video = [];
	var txt="";
	
	video["<h2>Ligthts and Magic <br> package</h2>"]= 100000.00 ;
    video["<h2><i>shine <br> package<i></h2>"]= 40000.00;
	video["<h2>Siyak Seenu <br> package</h2>"]= 45000.00;
	video["<h2><i>The Wedding Diary <br> package</i></h2>"]= 150000.00 ;
    video["<h2><i>DR Creation<br> package<i></h2>"]= 49000.00;
	video["<h2><i>Native Tribe<br> package<i></h2>"]= 900000.00;
	video["<h2><i>Momento creations<br> package</i></h2>"]= 230000.00 ;
    video["<h2><i>Chroma Pictures Wedding Films<br> package<i></h2>"]= 130000.00;
	for(var item in video){
		 if (video [item]<50000.00){
			 txt+= item + ":" + video[item] + "<br/>"
		 }
	}
     document.getElementById("img1").src= "../images/VID1.jpg";
   document.getElementById("para").innerHTML= txt;
	

}

setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()



