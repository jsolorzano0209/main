var radios = document.getElementsByName('element_0');

for (var i = 0, length = radios.length; i < length; i++)
{ 
 if (radios[i].checked && radios[i].value==='$50')
 {
       document.querySelector('#f4276037_total_price').innerHTML('$62.50');
       document.querySelector('#f4276037_total_items tr th').innerHTML('$62.50');
       document.querySelector('#f4276037_total_items tr td').innerHTML('$62.50');

  // only one radio can be logically checked, don't check the rest
  break;
 }
    
}
    
