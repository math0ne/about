---
templateKey: blog-post
title: Free PHP Link Directory Script
date: 2007-11-23T08:14:39+00:00
permalink: /blog/2007/11/free-php-link-directory-script
description: Directory Page is a simple to use link directory class.
aktt_notify_twitter:
  - 'no'
tags:
  - Uncategorized
---
I had to write a link directory script a while back, since then i had to use it again and decided to spiffy it up and release it under the BSD license. I couldn&#8217;t find a free scrip that did what i needed to so i think this might be useful to people. Its super simple, can be inserted into any php page, and is standards complaint. In the zip file you&#8217;ll find the php class and an example usage file:
  


    
    //|-========================================================================-|
    //| Directory Page Example Usage
    //|--------------------------------------------------------------------------|
    //|
    //| Directory Page is a simple to use link directory class.  It can be set up
    //| in 5 simple steps.
    //|
    //|  1. Include the class
    //|    a. include("Directory.php");
    //|
    //|  2. Set your sql variables, the database will be set up the first time you
    //|     run the class.
    //|    a. $host = "localhost";
    //|    b. $user = "root";
    //|    c. $pass = "";
    //|    d. $db = "directory";
    //|    e. $secret = "whateveryouputasyoursecret";
    //|
    //|  3. Set up the name and description of the directory
    //|    a. $directoryName = "Directory Name";
    //|    b. $directoryDescription = "Directory Description";
    //|
    //|  4. Create the directory object
    //|    a. $directory = new DirectoryPage($host, $user, $pass, $db, $directoryName, $directoryDescription, $secret);
    //|
    //|  5. Create your HTML template and insert the draw command in the body of your html
    //|    a. echo $directory->drawDirectory();
    //|
    //|  6. To admin your directory browse to:
    //|    a. example.php?action=whateveryouputasyoursecret
    //|
    //| Thats it, you done. Check below for a complete usage example with a basic
    //| HTML templaye.
    //|
    //|-========================================================================-|
    

You can download it here: [phpLinkDirectory.zip](http://floatsolutions.net/docs/phpLinkDirectory.zip)

Post if you have any problems questions or if you find this useful.