---
templateKey: blog-post
title: Controlling Drupal Block Display
date: 2010-05-07T04:10:58+00:00
permalink: /blog/2010/05/controlling-drupal-block-display/
aktt_notify_twitter:
  - 'no'
aktt_tweeted:
  - "1"
tags:
  - Drupal
---
So there&#8217;s two ways you can go about displaying blocks on your site. 

  * You can use the excellent [contexts module](http://drupal.org/project/context) which will allow you to create smart contexts within your site and basically do what I&#8217;m going to explain below with no PHP code.
  * You write php code in your block display textarea to get what you want to show up. You might do this if you&#8217;re doing something simple or you don&#8217;t want the added complexity of installing context.

So if you&#8217;re writing php code it&#8217;s a pain to get all the different conditions right so I&#8217;m going to outline most of the major things you would want to do. First off you&#8217;re going to want to set up the condition, depending on if you want the block to display by default and have a condition that prevents it from displaying or if you want the block hidden by default and displayed if a condition is met.
  


    //set default no or yes
    $match = FALSE;
    //condition goes here
    return $match;

Next you&#8217;re going to want to add some conditions where I indicated above. Here&#8217;s how to display a block based on content type:
  


    //match article type
    $types = array(& 'content_type& ' => 1);
    if (arg(0) == & 'node& ' && is_numeric(arg(1))) {
      $nid = arg(1);
      $node = node_load(array(& 'nid& ' => $nid));
      $type = $node->type;
      if (isset($types[$type])) {
        $match = TRUE;
      }
    }

Here&#8217;s how to display a block based on vocabulary ID on a term page:
  


    //check for a vid
    if ( ((arg(0) == & 'taxonomy& ')
         && (arg(1) == & 'term& ')
         && is_numeric(arg(2))
         && ($term = taxonomy_get_term(arg(2)))
         && ($term->vid == 7 )) ) {
             $match = TRUE;
    }

Here&#8217;s how to display a block based on a URL:
  


    //videos page check
    if(arg(0) == & 'videos& '){return false;}

Here&#8217;s how to display a block based on the taxonomy term hierarchical level on a term page:
  


    //is this is a taxonomy page
    if (arg(0) == & 'taxonomy& ')
    { $match = TRUE;}
    
    //taxonomy level
    if (arg(0) == & 'taxonomy& '){
      $term_parents = taxonomy_get_parents_all(arg(2));
      
      //highest level
      if(count($term_parents) == 1){
        $match = TRUE;
      }
      //second level
      if(count($term_parents) == 2){
        $match = TRUE;
      }
      //third level
      if(count($term_parents) == 3){
        $match = TRUE;
      }
    }

I&#8217;ll be posting some more block display rules in the near future.