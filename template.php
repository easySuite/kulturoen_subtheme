<?php

/**
 * @file
 * The primary PHP file for this theme.
 */


/**
 * Implements theme_menu_tree().
 */
function kulturoen_subtheme_menu_tree__menu_block__1($vars) {
  return '<div class="transform-main-menu"></div><ul class="main-menu">' . $vars['tree'] . '</ul>';
}

/**
 * Implements theme_menu_tree().
 */
function kulturoen_subtheme_menu_tree__menu_block__2($vars) {
  return '<div class="transform-sub-menu"></div><ul class="secondary-menu">' . $vars['tree'] . '</ul>';
}
