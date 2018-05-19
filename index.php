<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Wordpress-JSON demo</title>
</head>
<body>

	<div id="app"></div>
	<script
		type="text/javascript"
	>
	var pageId = <?=$wp_query->post->ID?>;
	</script>
	<script
		type="text/javascript"
		src="<?php echo get_template_directory_uri();?>/js/build/index.js"
	></script>
	
</body>
</html>