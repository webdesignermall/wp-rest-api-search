jQuery(document).ready(function($){

$('#quick-search-form').submit(function(e){
	e.preventDefault();
	var keyword = $('#quick-search-form #keyword').val();
	
	//Change this URL to your own.
	var home_url = "http://www.webdesignermall.com";
	
	$.ajax({
	'url'	:	homeurl + '/wp-json/wp/v2/posts?filter[s]=' + keyword,
	}).done(function(response){
		if(response.length)
		{
			var html = 'Search Results:<br/><ul>';
			
			// Load the posts that contain the keyword from the above REST API URL and loop through them.
			
			$.each(response, function(index,val){
				var title 			= val.title.rendered;
				var post_id 		= val.id;
				var plink 			= val.link;
				var pdate			= val.date;
				html += "<li><a class='wprestapi-link' id='post-link-"+post_id+"' href='"+plink+"'>" + title + "</a> Published on "+pdate+"</li>";
			})
			
			html += '</ul>';
			
			
			$('#quick-search-results').html(html);
			
		
		}
	});
	
});


});