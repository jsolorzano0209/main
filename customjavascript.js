<script>
$(document).ready(function () {
        $("input:radio[name='element_0']:checked").change(function () {
            if ($("input[name='element_0']:checked").val() == '$50') {
           
   
       
       $('#f4276037_total_price').html(function(){var result= "$"+(0.25 * 50)+50; return result;});
   $('#f4276037_total_items tr th').html(function(){var result= "$"+(0.25 * 50)+50; return result;});
         $("#f4276037_total_items tr td").html(function(){var result= "$"+(0.25 *50)+50; return result;});
      
     }
if ($("input[name='element_0']:checked").val() == '$100') {
             $("#f4276037_total_price").html(function(){var result= "$"+(0.25 * 100)+100; return result;});
   $('#f4276037_total_items tr th').html(function(){var result= "$"+(0.25 * 100)+100; return result;});
         $("#f4276037_total_items tr td").html(function(){var result= "$"+(0.25 *100)+100; return result;});
     }
if ($("input[name='element_0']:checked").val() == '$500') {
             $('#f4276037_total_price').html(function(){var result= "$"+(0.25 * 500)+500; return result;});
   $('#f4276037_total_items tr th').html(function(){var result= "$"+(0.25 * 500)+500; return result;});
         $('#f4276037_total_items tr td').html(function(){var result= "$"+(0.25 *500)+500; return result;});
     }
});
    });
</script>
