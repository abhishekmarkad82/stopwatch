var time = document.getElementById("time");
var startbtn = document.getElementById("start");
var lapbtn = document.getElementById("lap");
var laplist = document.getElementById("laplist");
var min = 00;
var sec = 00;
var hr = 00;
cahngeonpage(hr, min, sec);
var timer = false;
var id = 0;
var total = 0;
var lapcount = 0;
startbtn.onclick= function () {
  if (!timer) {
    timer = true;
    id = setInterval(function () {
        if(timer)   
            total++;
      hr = parseInt(total / 3600);
      min = parseInt(total / 60);
      sec = parseInt(total % 60);
      cahngeonpage(hr, min, sec);
    }, 1000);

    startbtn.innerHTML = "Stop";
    startbtn.style.backgroundColor="red";
    lapbtn.innerHTML="Lap";
    
  } else {
    clearInterval(id);
    startbtn.innerHTML = "Start";
    startbtn.style.backgroundColor="aquamarine";
    lapbtn.innerHTML="Reset";
    timer = false;
  /*  total = 0;
    lapcount = 0;*/
  }
};

function cahngeonpage(hr, min, sec) {
  hr = `${hr}`.padStart(2, 0);
  min = `${min}`.padStart(2, 0);
  sec = `${sec}`.padStart(2, 0);
  time.innerHTML = `${hr}:${min}:${sec}`;
}

lapbtn.addEventListener("click", function () {
    if(!timer)
    {
       total=0;
       lapcount=0;
       lapbtn.innerHTML="Lap";
       laplist.innerHTML="";
       cahngeonpage(0,0,0);
       clearInterval(id);
       return;
    }
    
    if(lapcount==0)
     laplist.innerHTML="";
  hr = parseInt(total / 3600);
  min = parseInt(total / 60);
  sec = parseInt(total % 60);

  hr = `${hr}`.padStart(2, 0);
  min = `${min}`.padStart(2, 0);
  sec = `${sec}`.padStart(2, 0);
  var li = document.createElement("li");
  lapcount++;

  var div = document.createElement("div");
  var p1 = document.createElement("p");
  p1.style.display = "inline-block";
  p1.innerHTML = `Lap ${lapcount}`;
  var p2 = document.createElement("p");
  p2.style.display = "inline-block";
  var text = `${hr}:${min}:${sec}`;
  p2.innerHTML = text;

  var p3 = document.createElement("p");
  p3.style.display = "inline-block";
  p3.innerHTML =
    "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
  // div
  li.appendChild(p1);
  //div
  li.appendChild(p3);
  //div
  li.appendChild(p2);

  //li.appendChild(div);
  laplist.appendChild(li);
});  
