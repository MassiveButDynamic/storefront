<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package storefront
 */

?>

		</div><!-- .col-full -->
	</div><!-- #content -->

	<?php
		if(is_front_page() and get_theme_mod( 'storefront_front_page_image_above_footer' )) {
			$result = '<div id="image-above-footer-wrapper"><img src="'.get_theme_mod( 'storefront_front_page_image_above_footer' ).'" alt="'.get_post_meta(attachment_url_to_postid(esc_url(get_theme_mod( 'storefront_front_page_image_above_footer' ))), '_wp_attachment_image_alt', TRUE).'">';
			if(get_theme_mod( 'storefront_footer_page_image_slogan' )) $result .= '<div class="text-overlay-wrapper" id="text-overlay-wrapper-footer"><div class="slogan">'.get_theme_mod( 'storefront_footer_page_image_slogan' ).'</div></div>';	
			$result .= '</div>';
			
			echo $result;
		}
	?>
	<?php do_action( 'storefront_before_footer' ); ?>

	<footer id="colophon" class="site-footer" role="contentinfo">
		<div class="col-full">

			<?php
			/**
			 * Functions hooked in to storefront_footer action
			 *
			 * @hooked storefront_footer_widgets - 10
			 * @hooked storefront_credit         - 20
			 */
			do_action( 'storefront_footer' );
			wp_nav_menu( 'footer' )
			?>
			<br>
			

		</div><!-- .col-full -->
	</footer><!-- #colophon -->

	<?php do_action( 'storefront_after_footer' ); ?>

</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
