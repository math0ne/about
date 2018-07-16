---
templateKey: blog-post
title: Displaying Inline Images in Emacs org-mode
date: 2010-10-15T01:17:36+00:00
permalink: /blog/2010/10/displaying-inline-images-in-emacs-org-mode
aktt_notify_twitter:
  - 'no'
tags:
  - Emacs
---
I had to patch together some various emacs from around the web to get inline images with iimage.el working in emacs exactly the way I wanted. Here&#8217;s some info:

  * Load and displays images in org files on initial load
  * Provides a function that allows you to toggle images on and off
  * Specify images you would like to load with the [[file://file.png]] org link type

[<img src="/img/2010/10/inline_image_screenshot.png" alt="" title="inline_image_screenshot" width="501" height="361" class="aligncenter size-full wp-image-277" />](/img/2010/10/inline_image_screenshot.png)

Here&#8217;s the code, you can add it anywhere in your _.emacs_
  
```lisp
;; -- Display images in org mode
;; enable image mode first
(iimage-mode)
;; add the org file link format to the iimage mode regex
(add-to-list & 'iimage-mode-image-regex-alist
  (cons (concat "\\[\\[file:\\(~?" iimage-mode-image-filename-regex "\\)\\]") ))
;;  add a hook so we can display images on load
(add-hook & 'org-mode-hook & '(lambda () (org-turn-on-iimage-in-org)))
;; function to setup images for display on load
(defun org-turn-on-iimage-in-org ()
  "display images in your org file"
  (interactive)
  (turn-on-iimage-mode)
  (set-face-underline-p & 'org-link nil))
;; function to toggle images in a org bugger
(defun org-toggle-iimage-in-org ()
  "display images in your org file"
  (interactive)
  (if (face-underline-p & 'org-link)
      (set-face-underline-p & 'org-link nil)
      (set-face-underline-p & 'org-link t))
  (call-interactively & 'iimage-mode))
```

I have this function bound to C-l with a call like this:

```
(define-key org-mode-map (kbd "C-S-a") & 'org-archive-subtree)
```