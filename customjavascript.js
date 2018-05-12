var radios = document.getElementsByTagName('input');
var value; 
for (var i = 0; i < radios.length; i++) {
    if (radios[i].type === 'radio' && radios[i].checked) {
        // get value, set checked flag or do whatever you need to
        value = radios[i].value; 
            if(value === '$50'){
               document.getElementById('f4276037_total_price').innerHTML(function(){var result= "$" +(0.25 * 50)+50; return result;});
               document.getElementById('f4276037_total_items tr th').innerHTML(function(){var result= "$" +(0.25 * 50)+50; return result;});
               document.getElementById("f4276037_total_items tr td").innerHTML(function(){var result= "$" +(0.25 *50)+50; return result;});

            }          
    }
}
