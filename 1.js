// Set the date we're counting down to 
var pasTime;
var resTime;
var setTime=false;
var strt=false;
var ps=false;       //initially not paused after pause make true after resume make false
// var targetDate=new Date("Sep 16, 2022 19:39:10");
// var targetSec=targetDate.getTime();

//implementing input fn.
var targetDate;
var targetSec;

function start(){
  if(setTime==false)
  {
    document.getElementById("er-msg").innerText="Plese set the value first";
  }
  if(strt==false && setTime==true)    //timer should be set and not running already
  {
        strt=true;  //timer is running
        // Update the count down every 1 second
        window.temp=setInterval(timer,1000);

        
        function timer(){
            // Get today's date and time
            var now=new Date().getTime();
            var targetSec=targetDate.getTime();
            // Find the distance between now and the count down date
            var distance = targetSec - now;
            if(distance>=0)
            {
                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                document.getElementById("days").innerText=days;
                document.getElementById("hours").innerText=hours;
                document.getElementById("minutes").innerText=minutes;
                document.getElementById("seconds").innerText=seconds;
            }
              if (distance < 0) {
                clearInterval(temp);
                
            }
        } 
  }
       
}

function resett(){
  document.getElementById("er-msg").innerText="";
  if(strt)    //means timer is running then only reset
  {
      strt=false;   //timer is stopped
      setTime=false;
      clearInterval(window.temp);
      document.getElementById("days").innerText="0";
      document.getElementById("hours").innerText="0";
      document.getElementById("minutes").innerText="0";
      document.getElementById("seconds").innerText="0";
    document.getElementById("dy").value="";
   document.getElementById("hrs").value="";
   document.getElementById("mins").value="";
   document.getElementById("sss").value="";
  }
    

}

function paus(){
  if(strt && ps==false)    //timer is running then only and watch is already not paused
  {
      ps=true;
      pasTime=new Date().getTime();
      clearInterval(window.temp);
  }
    
}


function res(){
    if(ps){
        ps=false;
        strt=false;
        resTime=new Date().getTime();
        var diffsec=Math.floor((resTime-pasTime)/1000);
        var psday=Math.floor(diffsec / (3600*24));
        diffsec  -= psday*3600*24;
        var pshour=Math.floor(diffsec / 3600);
        diffsec  -= pshour*3600;
        var psminute=Math.floor(diffsec / 60);
        diffsec  -= psminute*60;
        var pssecond=diffsec;
        
        //add time to target date
        var x=addDays(psday,targetDate);
        var y=addHours(pshour,x);
        var z=addMinutes(psminute,y);
        var tt=addSeconds(pssecond,z);
        targetDate=tt;
        //now new target date got updated!
        start();
    }
    
}

var dt=new Date();

function addDays(numOfDays, dt) {
  dt.setTime(dt.getTime() + numOfDays* 24 * 60 * 60 * 1000);

  return dt;
}
function addHours(numOfHours, dt) {
  dt.setTime(dt.getTime() + numOfHours * 60 * 60 * 1000);

  return dt;
}
function addMinutes(numOfMinutes, dt) {
  dt.setTime(dt.getTime() + numOfMinutes * 60 * 1000);

  return dt;
}
function addSeconds(numOfSeconds, dt) {
  dt.setTime(dt.getTime() + numOfSeconds * 1000);

  return dt;
}


function setVal(){
    setTime=true;
   var dy= document.getElementById("dy").value;
   var hrs= document.getElementById("hrs").value;
   var mins= document.getElementById("mins").value;
   var sss= document.getElementById("sss").value;
   if(dy=="")
   {
    document.getElementById("days").innerText="0";
   }
   else{
    document.getElementById("days").innerText=dy;
   }
   if(hrs=="")
   {
    document.getElementById("hours").innerText="0";
   }
   else{
    document.getElementById("hours").innerText=hrs;
   }
   if(mins=="")
   {
    document.getElementById("minutes").innerText="0";
   }
   else{
    document.getElementById("minutes").innerText=mins;
   }
   if(sss=="")
   {
    document.getElementById("seconds").innerText="0";
   }
   else{
    document.getElementById("seconds").innerText=sss;
   }
    
    // document.getElementById("hours").innerText=hrs;
    // document.getElementById("minutes").innerText=mins;
    // document.getElementById("seconds").innerText=sss;
   targetDate=new Date();
   var x=addDays(dy,targetDate);
    var y=addHours(hrs,x);
    var z=addMinutes(mins,y);
    var tt=addSeconds(sss,z);
    targetDate=tt;
}


function clrmsg(){
  document.getElementById("er-msg").innerText="";
}