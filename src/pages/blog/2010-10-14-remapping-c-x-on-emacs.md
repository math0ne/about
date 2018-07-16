---
templateKey: blog-post
title: Remapping C-x on Emacs
date: 2010-10-14T17:02:29+00:00
permalink: /blog/2010/10/remapping-c-x-on-emacs
aktt_notify_twitter:
  - 'no'
tags:
  - Emacs
---
I&#8217;ve recently decided to ditch CUA mode. It steals some shortcuts that I would like to override. One thing CUA mode did really well is allow the use of C-x for CUT and for the C-x Command Prefix. I haven&#8217;t quite figured out how to replicate this exact behavior, even finding info on how to remap C-x reliably was difficult. 

The problem here is that if you remap C-x it breaks commands further down the line regardless. Instead of remapping the keys in this case you want to use _keyboard-translate_:
  


    ;; -- cut C-x, C-x is now C-j
    (keyboard-translate ?\C-j ?\C-x)
    (keyboard-translate ?\C-x ?\C-w)

This remaps Swaps C-x for C-j and puts _kill-region_ in for for C-x.