---
templateKey: blog-post
title: Firefox / Textmate Like Search in EMACS
date: 2010-05-14T10:32:50+00:00
permalink: /blog/2010/05/firefox-textmate-like-search-in-emacs/
aktt_notify_twitter:
  - 'yes'
aktt_tweeted:
  - "1"
tags:
  - Emacs
  - Uncategorized
---
I&#8217;m in the process of switching text editors to using EMACS full time. I&#8217;ve got it very close to where I want it at this point but has been quite the journey.

One of the things I found the most frustrating was the search functionality, I wanted a search that functioned like firefox&#8217;s. It&#8217;s second nature to me to copy something hit C-f and C-v in succession to search for it. In EMACS you have to C-s C-y. Here&#8217;s a little something I cooked up to get more windows esque functionality with isearch.
  


    (defun windows-isearch-hook ()
      (define-key isearch-mode-map (kbd "C-f") & 'isearch-repeat-forward)
      (define-key isearch-mode-map (kbd "RET") & 'isearch-repeat-forward)
      (define-key isearch-mode-map (kbd "<escape>") & 'isearch-exit)
      (define-key isearch-mode-map (kbd "C-S-f") & 'isearch-repeat-backward)
      (define-key isearch-mode-map (kbd "C-v") & 'isearch-yank-kill)
      (define-key isearch-mode-map (kbd "<up>") & 'isearch-ring-retreat)
      (define-key isearch-mode-map (kbd "<down>") & 'isearch-ring-advance))
    (add-hook & 'isearch-mode-hook & 'windows-isearch-hook)

Additionally if you want to map the C-f key to isearch you&#8217;ll have to add this to an appropriate mode hook:
  


    (global-set-key (kbd "C-f") & 'isearch-forward)