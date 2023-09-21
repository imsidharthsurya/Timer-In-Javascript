# Timer In Javascript
### Tech Stack:
HTML, CSS & Javascript

### Features:
- Timer App in which user can set days, hours, minutes & seconds and the countdown will begin.
- In addition user can also pause, resume, reset the timer.

### Logic:
- Main logic is to add the days, hours, minutes & seconds user entered in current time. that will be our destination time till which we've to count.
- Now using setInterval after each second we'll find diff. b/w destination time & current time & will show that. Once difference b/w them become 0 means countdown over so we'll clear the setInterval.

```sh
var current_date=new Date().getTime();        //will get current time in ms
// in this time add days, hours, minutes & seconds entered by user that will be destination time
var dest=current_time+(days*24*60*60*1000)+(hours*60*60*1000)+(minutes*60*1000)+(seconds*1000);
//since 1 day = 24*60*60*1000 ms 
//so x days= x*24*60*60*1000 ms 
var diff=dest-current_time
//after finding diff in ms now convert that ms into days, hours, minutes, seconds
var days= diff/(24*60*60*1000);
//since 24*60*60*60*1000 ms = 1day
// so 1 ms= (1/24*60*60*1000)days
//so dest ms= diff/(24*60*60*1000) days
var hours=(diff % (24*60*60*1000))/(60*60*1000);
//since ms remaining after converting to days convert that into hours
similarly,
var minutes=(diff%60*60*1000))/(60*10000);
var seconds=(diff%(60*1000))/(1000);