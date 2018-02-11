<!-- POST -->

<!-- Créer un lien vers la page d'un post -->
<!-- <a href="Lien du post" class=""></a> -->
<a href="<?php the_permalink(); ?>" class=""></a>

<!-- Affiche le titre d'un post -->
<?= the_title(); ?>

<!-- Affiche le contenu d'un post -->
<?= the_content(); ?>

<!-- Affiche un extrait de post (50 premier caractères) -->
<?php the_excerpt(); ?>

<!-- Affiche la date de publication d'un post -->
<!-- 4 Décembre, 2013 -->
<?= the_time('F j, Y') ?>

<!-- Affiche l'image à la une d'un post -->
<!-- <img src="lien de l'image à la une" class="img-responsive"> -->
<?= the_post_thumbnail('large', ['class' => 'img-responsive']) ?>

<!-- AUTEUR -->
<!-- <a href="lien vers les posts d'un auteur">Nom de l'auteur</a>  -->
<?php the_author_posts_link(); ?>

<!-- Permet de générer un menu Wordpress -->
<?php wp_nav_menu([
    // Nom du menu donné dans l'interface Wordpress
    'menu' => 'Mon premier menu',
    // Nom donné dans la fonction register nav
    'theme_location' => 'primary'
]) ?>

<!-- Affiche le nom du tag en cours sur la page tags.php -->
<?php single_tag_title('', true) ?>

<!-- Affiche le num de la category en cours sur la page category.php -->
<?php single_cat_title('', true) ?>

<!-- Permer d'inclure un fichier qui pourrait être répété plusieurs fois -->
<?php get_template_part('nom_du_fichier')?>

<!-- Permet de générer une navbar modifiable -->
<?php wp_nav_menu([
    // Nom du menu donné dans l'interface Wordpress
    'menu' => 'Mon premier menu',
    // Nom donné dans la fonction register nav
    'theme_location' => 'primary',
    // Type du container
    'container' => 'div',
    // Class du container
    'container_class' => 'collapse navbar-collapse',
    // Class pour les ul
    'menu_class' => 'nav navbar-nav navbar-right'
]) ?>
