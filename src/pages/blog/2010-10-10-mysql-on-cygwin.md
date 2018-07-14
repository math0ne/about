---
templateKey: blog-post
title: MySQL on Cygwin
date: 2010-10-10T22:37:44+00:00
permalink: /blog/2010/10/mysql-on-cygwin/
aktt_notify_twitter:
  - 'no'
tags:
  - Uncategorized
---
I&#8217;ve been puttering around trying to get MySQL to work with Cygwin for a while. It&#8217;s not available on the main application package system, so there&#8217;s a lot of advice out there on how to compile it.

Unfortunately it&#8217;s really hard to compile, I mucked around with it for quite a few hours before, finally finding the advice hidden deep in a thread that it&#8217;s available in Cygwin Ports. Cygwin ports which I hadn&#8217;t heard of before provided all sorts of stuff that&#8217;s not available normally.

Just follow the directions here, and select the MySQL package when prompted.

<http://sourceware.org/cygwinports/>

It&#8217;s been working great for me and I can finally use SQL-MODE in emacs.