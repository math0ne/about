---
templateKey: blog-post
title: How to Install a Color Theme in EMACS on Windows
date: 2010-05-10T06:16:39+00:00
permalink: /blog/2010/05/how-to-install-a-color-theme-in-emacs-on-windows
aktt_notify_twitter:
  - 'yes'
aktt_tweeted:
  - "1"
tags:
  - Emacs
  - Uncategorized
---
There&#8217;s a bunch of tutorial on how to work with EMACS on windows, however I found a lot of them quite confusing and they didn&#8217;t really focus on the basics of how to EMACS up and running on windows with a custom color theme. So here&#8217;s how I did it from scratch.

### 1) Download NTEMACS + color-theme

There are some various distributions of EMACS for windows but for the purpose of this we will be using NTEMACS, a version of EMACS that uses the native windows GUI. Grab it here:

<http://ntemacs.sourceforge.net/>

EMACS does not support custom color-themes by default so we will have to download a custom plugin to use themes. Grab this plugin here:

<http://download.gna.org/color-theme/>

Extract your EMACS folder to c:\emacs or something similar.

### 2) Create your .emacs file and install the plugin

On windows your EMACS home directory is going to be your &#8220;Application Data&#8221; folder in your &#8220;Documents and Settings&#8221; folder. eg:
  


     C:\Documents and Settings\USERNAME\Application Data  
    

In this folder create a blank text file called &#8220;.emacs&#8221;.

Now we&#8217;re going to have to choose a folder where we will install our EMACS plugins this should be within the EMACS home directory. In &#8220;C:\Documents and Settings\USERNAME\Application Data&#8221; create a folder called: &#8220;.emacs.d\includes&#8221; and extact color-theme to that directory.

### 3) Load the color-theme plugin and select a theme

Now bring up .emacs file in your favorite editor again. We&#8217;re going to load up the plugin and select a theme. You do so by adding a include call so EMACS knows about the plugin then you can call plugin functions to load up the theme. In your .emacs file place something like:
  


     (add-to-list & 'load-path "~/.emacs.d/includes/color-theme-6.6.0")
     (require & 'color-theme)
     (setq color-theme-is-global t)
     (color-theme-initialize)
     ;; A nice dark color theme
     (color-theme-deep-blue)

Now you can start emacs by calling c:\emacs\bin\runemacs.exe and you should see your wonderful new theme.