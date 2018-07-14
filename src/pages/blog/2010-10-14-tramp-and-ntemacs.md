---
templateKey: blog-post
title: Tramp and NTEmacs
date: 2010-10-14T20:16:50+00:00
permalink: /blog/2010/10/tramp-and-ntemacs/
aktt_notify_twitter:
  - 'no'
tags:
  - Emacs
  - Uncategorized
---
After a few failed attempted at getting tramp working in NTEmacs the solution ended up being pretty simple.

**1)** Download [Plink.exe](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html).

**2)** Place Plink.exe somewhere in your windows PATH, doesn&#8217;t matter where but you have to be able to run in from a command line anywhere on your system.

**3)** Add the following line somewhere in your _.emacs_.
  


    (setq tramp-default-method "plink")
    

From there you should be able to use _find-file_ (C-x C-f) and a command like the following to bring up a remote file:
  


    /user@host.com:/path/to/file.ext