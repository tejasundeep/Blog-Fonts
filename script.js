 $(document).ready(function() {
  $('img').each(function(){
   var $img = $(this);
   var filename = $img.attr('src')
   $img.attr('title', filename.substring((filename.lastIndexOf('/'))+1, filename.lastIndexOf('.')));
   $img.attr('alt', filename.substring((filename.lastIndexOf('/'))+1, filename.lastIndexOf('.')));
  });
 });
 //]]>
 </script>

<script type='text/javascript'>
$(document).ready(function() { 
  $(&quot;a[href^=&#39;http://&#39;]&quot;).each( 
    function(){ 
     if(this.href.indexOf(location.hostname) == -1) { 
        $(this).attr(&#39;target&#39;, &#39;_blank&#39;); 
      } 
    } 
  );
$(&quot;a[href^=&#39;https://&#39;]&quot;).each( 
function(){ 
if(this.href.indexOf(location.hostname) == -1) { 
$(this).attr(&#39;target&#39;, &#39;_blank&#39;); 
} 
} 
);
  
});
  
  
