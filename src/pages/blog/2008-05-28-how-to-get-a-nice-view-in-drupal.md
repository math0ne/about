---
templateKey: blog-post
title: How to Get a Nice View (in Drupal)
date: 2008-05-28T16:48:40+00:00
permalink: /blog/2008/05/how-to-get-a-nice-view-in-drupal
tags:
  - Drupal
---
When creating custom drupal functionality its often very handy to use the [views](http://drupal.org/project/views) module to retrieve information for you. This way you never have to muck around with messy old sql. To do this we need to use a couple functions; _views\_get\_view,_ and _views\_build\_view._ I&#8217;ll go through a simple explanation on how to use them below.

## 1. Get the View

The first thing we have to do is retrieve the view we want to work with. To do that we use the _views\_get\_view_ and assign its return value to a variable we will use below.
  


    $view = views_get_view(& 'view_name& ');
    

## 2. Display the View

Next we have to build the view and tell drupal how we would like it to display. If you just want to display the view you will want to use one of these options:
  


    & 'block& ' -- Produce output as a block, sent through theme.
    & 'embed& ' -- Use this if you want to embed a view onto another page, 
    and don& 't want any block or page specific things to happen to it.
    

Additionally you will have to tell drupal some info on how many results and what paging options you would like to use.
  


    @param $use_pager
    If set, use a pager. 
    
    @param $limit
    Required if $use_pager is set; if $limit is set and $use_pager is not, 
    this will be the maximum number of records returned. 
    
    @param $page
    $use_pager is false, and $limit is !0, $page tells it what page to start on
    , in case for some reason a particular section of view is needed.
    

So to embed the view in an existing page with 10 results and paging enabled you would do something like this:
  


    $viewRender = views_build_view(& 'block& ', $view, $argarray, 1, 10)
    

## 3. Passing Arguments

Now presumably you are doing this to display dynamic data to say a specific user or role or circumstance. To customize the results of the view you can pass arguments using _views\_build\_view_ as well. To do this you have to pass an array of arguments in the third variable. Here you can see I am passing the user id to the view:
  


    $viewItems = views_build_view(& 'block& ', $view, array(0 => $user->uid), 1, 10);
    

## 3. Retrieving Variables

Now, if you need direct access to node or cck information you are going to want to use the _items_ display type:
  


    & 'items& ' -- return info array, except instead of result, an array of 
    objects containing the results of the query.
    

If you pass this display type you will have direct access to node information and can access it as shown here:
  


    //build the view
    $viewItems = views_build_view(& 'items& ', $view, $argarray, 1, 10);
    
    //get cck data
    $var1 = $viewItems[items][$itemid]->node_data_field_fieldname_value;
    
    //get normal data
    $var2 = $viewItems[items][$itemid]->title;
    

For more information on this I would recommed checking out this page from the drupal book: [Using views\_build\_view to control your own views](http://drupal.org/node/99721). Let me know if this article was helpful for you.