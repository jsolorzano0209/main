var radios = document.getElementsByName('element_0');

for (var i = 0, length = radios.length; i < length; i++)
{ 
 if (radios[i].checked && radios[i].value==='$50')
 {
       var a = document.querySelector('#f4276037_total_price');
       a.textContent('$62.50');
       var b = document.querySelector('#f4276037_total_items tr th');
       b.textContent('$62.50');
       var c = document.querySelector('#f4276037_total_items tr td');
       c.textContent('$62.50');

  // only one radio can be logically checked, don't check the rest
  break;
 }
    
}
    
