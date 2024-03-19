var reg1=document.getElementById('btn1');
	var reg2=document.getElementById('btn2');
	var dep=document.getElementById('dept');
    var sem=document.getElementById('sem');
	var can=document.getElementById('cancel')
        var gpa=0;
        var a='';

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("cl");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  document.getElementById('res').style.display = "block";
}

// When the user clicks on <span> (x), close the modal
  function clos() {
  document.getElementById('res').style.display = "none";
  console.log('X');
}
function cancel() {
  document.getElementById('semester').style.display = "none";
  console.log('X');
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    document.getElementById('res').style.display = "none";
  }
}

function move(){
	document.getElementById('semester').style.display = "block";
	document.getElementById('hel').className="course col-4";
	console.log("jii");
	document.getElementById('semester').innerHTML='';
	dep=document.getElementById('dept').value;
    sem=document.getElementById('sem').value;
    a=dep+"("+sem+");";
    console.log(a);
    var arr=eval(a);
    console.log(arr);
    for(let t of arr)
    {
    	console.log(t);
    	
    	document.getElementById('semester').innerHTML+=t;
		document.getElementById('semester').innerHTML+="<select  class=grade><option>O</option><option>A+</option><option>A</option><option>B+</option><option>B</option><option>U</option></select><br>";
    }
	
    document.getElementById('semester').innerHTML+="<button class=cl onclick='cal()'>calculate</button><br><br>"
	document.getElementById('semester').innerHTML+="<button onclick='cancel()'>cancel</button><br>"
}

function cal(){
	document.getElementById('res').style.display = "block";
	document.getElementById('result').innerHTML='';
	var x=document.getElementsByClassName('grade');
	var s=0;
	var sam=0;
    gpa=0;
	var a=dep+"("+sem*10+");";
	console.log(a);
    var arr=eval(a);
	for(let t of x){
        
		console.log(
			t.value);
		var k=t.value;
		switch(k)
				{
					case 'O':
						gpa+=arr[s]*10;
						sam+=parseInt(arr[s]);
						break;
					
					case 'A+':
						gpa+=arr[s]*9;
						sam+=parseInt(arr[s]);
						break;
					
					case 'A':
						gpa+=arr[s]*8;
						sam+=parseInt(arr[s]);
						break;
					
					case 'B+':
						gpa+=arr[s]*7;
						sam+=parseInt(arr[s]);
						break;
					
					case 'B':
						gpa+=arr[s]*6;
						sam+=parseInt(arr[s]);
						break;

					case 'U':
						gpa+=arr[s]*0;
						sam+=parseInt(arr[s]);
						break;
					}
					s+=1;
					console.log(gpa/sam)
	}
	document.getElementById('result').innerHTML=gpa/sam;
}


function Computer_science_engineering(a){
		var a=a;
		switch(a){
		case 1:
		return ["HS8151","MA8151","PH8151","CY8151","GE8151","GE8152","GE8161","BS8161"];
		case 2:
		return ["HS8251","MA8251","PH8252","BE8255","GE8291","CS8251","GE8261","CS8261"];
		case 3:
		return ["MA8351","CS8351","CS8391","CS8392","EC8395","CS8381","CS8383","CS8382","HS8381"];
		case 4:
		return ["MA8402","CS8491","CS8492","CS8451","CS8493","CS8494","CS8481","CS8461","HS8461"];
		case 5:
		return ["MA8551","CS8591","EC8691","CS8501","CS8592","O.E","EC8681","CS8582","CS8581"];
		case 6:
		return ["CS8651","CS8691","CS8601","CS8602","CS8603","O.E","CS8661","CS8662","CS8611","HS8581"];
		case 7:
		return ["MG8591","CS8792","CS8791","O.E.","P.E.","P.E.","CS8711","IT8761"];
		case 8:
		return ["P.E","P.E","CS8811"];
		case 10:
		return ["4","4","3","3","3","4","2","2"];
		case 20:
		return ["4","4","3","3","3","3","2","2"];
	    case 30:
		return ["4","4","3","3","3","2","2","2","1"];
		case 40:
		return ["4","3","3","3","3","3","2","2","1"];
		case 50:
		return ["4","3","3","3","3","3","2","2","2"];
		case 60:
		return ["3","3","3","4","3","3","2","2","1","1"];
		case 70:
		return ["3","3","3","3","3","3","2","2"];
		case 80:
		return ["3","3","10"];
		}
}
function Electronic_Communication_Engineering(a){
		var a=a;
		switch(a){
		case 1:
		return ["HS8151","MA8151","PH8151","CY8151","GE8151","GE8152","GE8161","BS8161"];
		case 2:
		return ["HS8251","MA8251","PH8253","BE8254","EC8251","EC8252","EC8261","GE8261"];
		case 3:
		return ["MA8352","EC8393","EC8351","EC8352","EC8392","EC8391","EC8381","EC8361","HS8381"];
		case 4:
		return ["MA8451","EC8452","EC8491","EC8451","EC8453","GE8291","EC8461","EC8462"];
		case 5:
		return ["EC8501","EC8553","EC8552","EC8551","O.P.","O.P.","EC8562","EC8561","EC8563"];
		case 6:
		return ["EC8691","EC8095","EC8652","MG8591","EC8651","P.E.","EC8681","EC8661","EC8611","HS8581"];
		case 7:
		return ["EC8701","EC8751","EC8791","EC8702","P.E.","O.E.","EC8711","EC8761"];
		case 8:
		return ["P.E","P.E","EC8811"];
		case 10:
		return ["4","4","3","3","3","4","2","2"];
		case 20:
		return ["4","4","3","3","4","3","2","2"];
	    case 30:
		return ["4","3","3","4","3","3","2","2","1"];
		case 40:
		return ["4","3","3","4","3","3","2","2"];
		case 50:
		return ["3","4","3","3","3","3","2","2","2"];
		case 60:
		return ["3","3","3","3","3","3","2","2","1","1"];
		case 70:
		return ["3","3","3","3","3","3","2","2"];
		case 80:
		return ["3","3","10"];
		}
}
function Information_Technology(a){
		var a=a;
		switch(a){
		case 1:
		return ["HS8151","MA8151","PH8151","CY8151","GE8151","GE8152","GE8161","BS8161"];
		case 2:
		return ["HS8251","MA8251","PH8252","BE8255","IT8201","CS8251","GE8261","CS8261","IT8211"];
		case 3:
		return ["MA8351","CS8351","CS8391","CS8392","EC8394","CS8381","CS8383","CS8382","HS8381"];
		case 4:
		return ["MA8391","CS8491","CS8492","CS8451","CS8493","GE8291","CS8481","CS8461","HS8461"];
		case 5:
		return ["MA8551","CS8591","EC8691","IT8501","CS8494","O.E","EC8681","CS8581","IT8511"];
		case 6:
		return ["IT8601","CS8592","IT8601","CS8091","CS8092","P.E","CS8662","CS8582","IT8611","HS8581"];
		case 7:
		return ["MG8591","CS8792","CS8791","O.E.","P.E.","P.E.","IT8711","IT8761"];
		case 8:
		return ["P.E","P.E","IT8811"];
		case 10:
		return ["4","4","3","3","3","4","2","2"];
		case 20:
		return ["4","4","3","3","3","3","2","2","1"];
	    case 30:
		return ["4","4","3","3","3","2","2","2","1"];
		case 40:
		return ["4","3","3","3","3","3","2","2","1"];
		case 50:
		return ["4","3","3","3","3","3","2","2","2"];
		case 60:
		return ["3","3","3","3","3","3","2","2","1","1"];
		case 70:
		return ["3","3","3","3","3","3","2","2"];
		case 80:
		return ["3","3","10"];
		}
}
function Electrical_Electronic_Engineering(a){
		var a=a;
		switch(a){
		case 1:
		return ["HS8151","MA8151","PH8151","CY8151","GE8151","GE8152","GE8161","BS8161"];
		case 2:
		return ["HS8251","MA8251","PH8253","BE8252","EE8251","GE8291","GE8261","EE8261"];
		case 3:
		return ["MA8353","EE8351","EE8391","EE8301","EC8353","ME8792","EC8311","EE8311"];
		case 4:
		return ["MA8491","EE8401","EE8402","EE8403","IC8451","EE8411","EE8411","EE8461","EE8412"];
		case 5:
		return ["EE8501","EE8551","EE8552","EE8591","CS8392","O.E.","EE8511","HS8581","CS8383"];
		case 6:
		return ["EE8601","EE8602","EE8691","P.E.","P.E.","EE8661","EE8681","EE8611"];
		case 7:
		return ["EE8701","EE8702","EE8703","O.E.","P.E.","P.E.","EE8711","EE8712"];
		case 8:
		return ["P.E","P.E","EE8811"];
		case 10:
		return ["4","4","3","3","3","4","2","2"];
		case 20:
		return ["4","4","3","4","3","3","2","2"];
	    case 30:
		return ["4","3","3","3","3","3","2","2"];
		case 40:
		return ["4","3","3","3","3","4","2","2","1"];
		case 50:
		return ["3","3","3","3","3","3","2","2","1"];
		case 60:
		return ["3","3","3","3","3","2","2","2"];
		case 70:
		return ["3","3","3","3","3","3","2","2"];
		case 80:
		return ["3","3","10"];
		}
}
function Mechanical_Engineering(a){
		var a=a;
		switch(a){
		case 1:
		return ["HS8151","MA8151","PH8151","CY8151","GE8151","GE8152","GE8161","BS8161"];
		case 2:
		return ["HS8251","MA8251","PH8251","BE8253","GE8291","GE8292","GE8261","BE8261"];
		case 3:
		return ["MA8353","ME8391","CE8394","ME8351","EE8353","ME8361","ME8381","EE8361","HS8381"];
		case 4:
		return ["MA8452","ME8492","ME8451","ME8491","CE8395","ME8493","ME8462","CE8381","HS8461"];
		case 5:
		return ["ME8595","ME8593","ME8501","ME8594","O.P.","ME8511","ME8512","ME8513"];
		case 6:
		return ["ME8651","ME8691","ME8693","ME8692","ME8694","P.E.","ME8681","ME682","HS8581"];
		case 7:
		return ["ME8792","ME8793","ME8791","O.E.","P.E.","P.E.","ME8711","ME8781","ME8712"];
		case 8:
		return ["MG8591","P.E","ME8811"];
		case 10:
		return ["4","4","3","3","3","4","2","2"];
		case 20:
		return ["4","4","3","3","3","4","2","2"];
	    case 30:
		return ["4","4","4","3","3","2","2","2","1"];
		case 40:
		return ["4","3","3","3","3","3","2","2","1"];
		case 50:
		return ["3","3","3","4","3","2","2","2"];
		case 60:
		return ["3","3","4","3","3","3","2","2","1"];
		case 70:
		return ["3","3","3","3","3","3","2","2","1"];
		case 80:
		return ["3","3","10"];
		}
}
function Civil_Engineering(a){
		var a=a;
		switch(a){
		case 1:
		return ["HS8151","MA8151","PH8151","CY8151","GE8151","GE8152","GE8161","BS8161"];
		case 2:
		return ["HS8251","MA8251","PH8201","BE8251","GE8291","GE8292","GE8261","CE8211"];
		case 3:
		return ["MA8353","CE8301","CE8302","CE8351","CE8391","CE8392","CE8311","CE8361","HS8381"];
		case 4:
		return ["MA8491","CE8401","CE8402","CE8403","CE8404","CE8491","CE8481","CE8461","HS8461"];
		case 5:
		return ["CE8501","CE8502","EN8491","CE8591","P.E.","O.E.","CE8511","CE8512","CE8513"];
		case 6:
		return ["CE8601","CE8602","CE8603","CE8304","EN8592","P.E.","CE8611","CE8612","HS8581"];
		case 7:
		return ["CE8701","CE8702","CE8703","P.E.","O.E.","CE8711","CE8712"];
		case 8:
		return ["P.E","P.E","CE8811"];
		case 10:
		return ["4","4","3","3","3","4","2","2"];
		case 20:
		return ["4","4","3","3","3","4","2","2"];
	    case 30:
		return ["4","3","3","3","3","3","2","2","1"];
		case 40:
		return ["4","3","3","3","3","3","2","2","1"];
		case 50:
		return ["4","3","3","3","3","3","2","2","2"];
		case 60:
		return ["4","3","3","3","3","3","2","2","1"];
		case 70:
		return ["3","3","4","3","3","2","2"];
		case 80:
		return ["3","3","10"];
		}}