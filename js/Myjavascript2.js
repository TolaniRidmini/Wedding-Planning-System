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
	document.getElementById("img1").src = "../images/s4.jpg";
	document.getElementById("para").innerHTML ="<h1><i>Specialized in sri lankan foods</i></h1><br><h2>Pan Kendiya Cateres</h2><br><h2>The Colombo Catering</h2><br><h2>Tasty Cateres</h2><br><h2>Galle Cateres</h2><br><h2>Kandy Catering Service</h2>"
  }else if(name=="button2"){
	 document.getElementById("img1").src = "../images/cate1.jpg";
	document.getElementById("para").innerHTML ="<h1><i>Specialized in Indian foods</i></h1><br><h2>The Colombo Catering</h2><br><h2>Galle Cateres</h2>" 
    }else if(name=="button3"){
	 document.getElementById("img1").src = "../images/KC.jpg";
	document.getElementById("para").innerHTML ="<h1><i>Specialized in Italian foods</i></h1><br><h2>Tasty Cateres</h2><br><h2>Kandy Catering Service</h2>" 
	}else if(name=="button4"){
	 document.getElementById("img1").src = "../images/Catering.jpg";
	document.getElementById("para").innerHTML ="<h1><i>Located Inside Colombo Area</i></h1><br><h2>Tasty Cateres</h2><br><h2>Pan Kendiya Cateres</h2><br><h2>The Colombo Catering</h2>" 
	}else if(name=="button5"){
	 document.getElementById("img1").src = "../images/pan.jpg";
	document.getElementById("para").innerHTML ="<h1><i>Located Outside Colombo Area</i></h1><br><h2>Galle Cateres</h2><br><h2>Kandy Catering Service</h2>" 
  }else{
	 alert("invalid")
    }
	
 }	
 
function PriceHigher(){
	var cater = [];
	var txt="";
	cater["<h2>The Colombo Catering <br> price per plate</h2>"]= 2500.00 ;
    cater["<h2><i>Pan Kendiya Cateres <br> price per plate<i></h2>"]= 1500.00;
	cater["<h2>Tasty Cateres <br> price per plate</h2>"]= 1500.00;
	cater["<h2><i>Galle Cateres <br> price per plate</i></h2>"]= 2300.00 ;
    cater["<h2><i>Kandy Catering Service <br> price per plate<i></h2>"]= 1300.00;
	cater["<h2><i>Sarath Cateres <br> price per plate<i></h2>"]= 900.00;
	for(var item in cater){
		 if (cater [item]>2000.00){
			 txt+= item + ":" + cater[item] + "<br/>"
		 }
	}
     document.getElementById("img1").src= "../images/c1.jpg"; 
   document.getElementById("para").innerHTML= txt;

} 
function PriceLower(){
	
	var cater = [];
	var txt="";
	cater["<h2>The Colombo Catering <br> price per plate</h2>"]= 2500.00 ;
    cater["<h2><i>Pan Kendiya Cateres <br> price per plate<i></h2>"]= 1500.00;
	cater["<h2>Tasty Cateres <br> price per plate</h2>"]= 1500.00;
	cater["<h2><i>Galle Cateres <br> price per plate</i></h2>"]= 2300.00 ;
    cater["<h2><i>Kandy Catering Serivce <br> price per plate<i></h2>"]= 1300.00;
	cater["<h2><i>Sarath Cateres<br> price per plate<i></h2>"]= 900.00;
	
	for(var item in cater){
		 if (cater [item]<2000.00){
			 txt+= item + ":" + cater[item] + "<br/>"
		 }
	}
    document.getElementById("img1").src= "../images/c2.png"; 
   document.getElementById("para").innerHTML= txt;

} 

var gallery = document.querySelector('#gallery');
var getVal = function (elem, style) { return parseInt(window.getComputedStyle(elem).getPropertyValue(style)); };
var getHeight = function (item) { return item.querySelector('.content').getBoundingClientRect().height; };
var resizeAll = function () {
    var altura = getVal(gallery, 'grid-auto-rows');
    var gap = getVal(gallery, 'grid-row-gap');
    gallery.querySelectorAll('.gallery-item').forEach(function (item) {
        var el = item;
        el.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
    });
};
gallery.querySelectorAll('img').forEach(function (item) {
    item.classList.add('byebye');
    if (item.complete) {
        console.log(item.src);
    }
    else {
        item.addEventListener('load', function () {
            var altura = getVal(gallery, 'grid-auto-rows');
            var gap = getVal(gallery, 'grid-row-gap');
            var gitem = item.parentElement.parentElement;
            gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
            item.classList.remove('byebye');
        });
    }
});
window.addEventListener('resize', resizeAll);
gallery.querySelectorAll('.gallery-item').forEach(function (item) {
    item.addEventListener('click', function () {        
        item.classList.toggle('full');        
    });
});
