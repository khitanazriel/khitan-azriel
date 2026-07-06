function nextPage(){
 document.querySelector('.cover').style.display='none';
 document.getElementById('page2').style.display='flex';
}
function nextPage2(){
 document.getElementById('page2').style.display='none';
 document.getElementById('page3').style.display='flex';
}
const eventDate = new Date('2026-07-09 09:00:00').getTime();
setInterval(function(){
 const now = new Date().getTime();
 const distance = eventDate - now;
 document.getElementById('days').innerHTML = Math.max(0, Math.floor(distance/(1000*60*60*24)));
 document.getElementById('hours').innerHTML = Math.max(0, Math.floor((distance%(1000*60*60*24))/(1000*60*60)));
 document.getElementById('minutes').innerHTML = Math.max(0, Math.floor((distance%(1000*60*60))/(1000*60)));
 document.getElementById('seconds').innerHTML = Math.max(0, Math.floor((distance%(1000*60))/1000));
},1000);
