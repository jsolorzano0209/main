<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script type="text/javascript">
jQuery('input:radio[name="element_0"]').change(function() {
     if (jQuery(this).is(':checked') && jQuery(this).val() == '$50') { 
           
   
       
       jQuery('#f4276037_total_price').html(function(){var result= "$"+(0.25 * 50)+50; return result;});
   jQuery('#f4276037_total_items tr th').html(function(){var result= "$"+(0.25 * 50)+50; return result;});
         jQuery("#f4276037_total_items tr td").html(function(){var result= "$"+(0.25 *50)+50; return result;});
      
     }
if (jQuery(this).is(':checked') && jQuery(this).val() == '$100') {
             jQuery("#f4276037_total_price").html(function(){var result= "$"+(0.25 * 100)+100; return result;});
   jQuery('#f4276037_total_items tr th').html(function(){var result= "$"+(0.25 * 100)+100; return result;});
         jQuery("#f4276037_total_items tr td").html(function(){var result= "$"+(0.25 *100)+100; return result;});
     }
if ($(this).is(':checked') && $(this).val() == '$500') {
             jQuery('#f4276037_total_price').html(function(){var result= "$"+(0.25 * 500)+500; return result;});
   jQuery('#f4276037_total_items tr th').html(function(){var result= "$"+(0.25 * 500)+500; return result;});
         jQuery('#f4276037_total_items tr td').html(function(){var result= "$"+(0.25 *500)+500; return result;});
     }
});
</script>
