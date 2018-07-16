---
templateKey: blog-post
title: TortoiseGit Interface for EMACS
date: 2010-05-25T08:46:35+00:00
permalink: /blog/2010/05/tortoisegit-interface-for-emacs
aktt_notify_twitter:
  - 'yes'
aktt_tweeted:
  - "1"
tags:
  - Emacs
  - Uncategorized
---
I&#8217;ve been releasing stuff to Github these days, [basecamp2text](http://github.com/openist/basecamp2text), [drupal-irssi](http://github.com/openist/drupal-irssi), [simple-volume-osd](http://github.com/openist/simple-volume-osd), etc. So I&#8217;ve been using TortoiseGit as a GUI to make git a little easier to swallow. 

On the SVN side of things I&#8217;ve been using a library I found over on the EmacsWIKI to interface SVN and emacs. Since I&#8217;m using Git so much these days I thought I&#8217;d adapt that library to work with TortioseGit. 

Right now it only supports log, diff, blame, commit, revert and help. It&#8217;s been working great for my uses so far. 

## tortoise-git.el

    (defun tortoise-git-command (command filename)
      (start-process "tortoise-git" "foo"
       "c:/Progra~1/TortoiseGit/bin/TortoiseProc" (concat "/command:" command) 
         (concat "/path:" (replace-regexp-in-string "Program Files" 
               (regexp-quote "Progra~1") (expand-file-name filename))
                "")))
    
    (defun tortoise-git-log ()
      (interactive)
      (tortoise-git-log-select (buffer-file-name)))
    
    (defun tortoise-git-log-select (filename &optional wildcards)
      (interactive (find-file-read-args "Find file: " t))
      (tortoise-git-command "log" filename))
    
    (defun tortoise-git-diff ()
      (interactive)
      (tortoise-git-command "diff" (buffer-file-name)))
    
    (defun tortoise-git-blame ()
     (interactive)
     (tortoise-git-command "blame" (buffer-file-name)))
    
    (defun tortoise-git-commit () 
      (interactive)
      (tortoise-git-command "commit" (buffer-file-name)))
    
    (defun tortoise-git-commit-select (filename &optional wildcards)
    (interactive (find-file-read-args "Find file: " t))
      (tortoise-git-command "commit" (buffer-file-name)))
    
    (defun tortoise-git-revert ()
      (interactive)
      (tortoise-git-revert-select (buffer-file-name)))
    
    (defun tortoise-git-revert-select (filename &optional wildcards)
      (interactive (find-file-read-args "Find file: " t))
      (tortoise-git-command "revert" filename))
    
    (defun tortoise-git-help ()
     (interactive)
     (start-process-shell-command "tortoise-git" nil
      (concat "/cygdrive/c/Progra~1/TortoiseGit/bin/TortoiseProc /command:help")))
    
    ; add key bind
    (global-set-key "\C-xgl" & 'tortoise-git-log)
    (global-set-key "\C-xgL" & 'tortoise-git-log-select)
    (global-set-key "\C-xg=" & 'tortoise-git-diff)
    (global-set-key "\C-xgb" & 'tortoise-git-blame)
    (global-set-key "\C-xgc" & 'tortoise-git-commit)
    (global-set-key "\C-xgC" & 'tortoise-git-commit-select)
    (global-set-key "\C-xgs" & 'tortoise-git-repostatus)
    (global-set-key "\C-xgS" & 'tortoise-git-repostatus-select)
    (global-set-key "\C-xgr" & 'tortoise-git-revert)
    (global-set-key "\C-xgR" & 'tortoise-git-revert-select)
    (global-set-key "\C-xgh" & 'tortoise-git-help)
    
    (provide & 'tortoise-git)
    

Watch the github repository for more features in the future:

<http://github.com/openist/tortoise-git-emacs>