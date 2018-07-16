---
templateKey: blog-post
title: PowerGrep Integration For Emacs
date: 2012-05-08T18:12:59+00:00
permalink: /blog/2012/05/powergrep-integration-for-emacs
aktt_notify_twitter:
  - 'no'
tags:
  - Uncategorized
---
I whipped up a quick function that allows you to quickly search for a string in a folder or project (if you use repository detection) using the commercial PowerGrep program.

Just add the following to your .emacs:

    (defun power-grep-selection-folder ()
    (interactive)
      (start-process "powergrep" "foo" "C:\\Program Files (x86)\\JGsoft\\PowerGREP3\\powergrep.exe" 
      "/search" "/folderrecurse" 
      (replace-regexp-in-string (regexp-quote "\/") (regexp-quote "\\") default-directory) 
      "/searchtext" (buffer-substring (region-beginning) (region-end)) 
      "/resultsoptions" "5" "1" "9" "0" "0" "2" "/execute"))
    

From there you can assign it a keyboard shortcut or just use it as is. If you use [repository root](http://emacswiki.org/emacs/repository-root.el) to manage project scope you can use the following to search your current repository:

    (defun power-grep-selection-project ()
    (interactive)
      (start-process "powergrep" "foo" "C:\\Program Files (x86)\\JGsoft\\PowerGREP3\\powergrep.exe" 
      "/search" "/folderrecurse" 
      (replace-regexp-in-string (regexp-quote "\/") 
      (regexp-quote "\\") (repository-root buffer-file-name)) 
      "/searchtext" (buffer-substring (region-beginning) (region-end)) 
      "/resultsoptions" "5" "1" "9" "0" "0" "2" "/execute"))