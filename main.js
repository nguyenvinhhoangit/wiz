 function calSum()
 {
   var soa=document.getElementById('soa').value
   var sob=document.getElementById('sob').value
   soa=parseInt(soa)
   sob=parseInt(sob)
   var sum=soa+sob;
   document.getElementById('result').innerHTML=sum;
 }