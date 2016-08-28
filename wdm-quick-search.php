<?php

/*
Plugin Name: WP REST API Quick Search Utilities
Description: A set of utilities for the WP REST API running on WebDesignerMall.com...
Version 1.0
Author: Bruce Chamoff
Author URL: http://www.webdesignermall.com
*/

add_action('wp_enqueue_scripts','load_wp_api');

function load_wp_api() {
		$plugins_dir = plugins_url();
		
	    wp_enqueue_script('mh-edition', $plugins_dir . '/wdm-quick-search/qs_wpapi.js', array( 'jquery' ) );
		wp_enqueue_style('x`mh-edition', $plugins_dir . '/wdm-quick-search/qs_style.css' );
}

add_shortcode('quick-search-form','qs_form');
function qs_search()
{
	$html =  ('
		<form id="quick-search-form">
		<input name="keyword" id="keyword"/>
		<input type="submit" value="Search" />
		</form>	
	');
	
	return $html;
}
