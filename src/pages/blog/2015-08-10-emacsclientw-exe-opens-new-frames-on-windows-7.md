---
templateKey: blog-post
title: emacsclientw.exe Opens New Frames on Windows 7
date: 2015-08-10T14:21:54+00:00
permalink: /blog/2015/08/emacsclientw-exe-opens-new-frames-on-windows-7
aktt_notify_twitter:
  - 'no'
tags:
  - Emacs
---
There is an issue specific to Windows 7 that will cause emacs open new frames even if you have the server running. I believe for me there are actually two issues:

1) The emacs server file cannot be stored anywhere except within %appdata% so if you run your home from Dropbox or somesuch thing you will have to add this to force the server file back to the appdata directory:

    (if (string= system-name "MATH-PC")
      (setq server-auth-dir (concat (getenv "APPDATA") "/.emacs.d/server")))

2) The server directory had to be owned by the same user as is running emacs. Typically you will run emacs from a normal user and the directory will below to Administrator. To fix this you need to browse to &#8220;%appdata%/.emacs.d/server&#8221; in explorer and change the ownership of the directory to your windows username: 

<a href="https://technet.microsoft.com/en-us/library/Cc753659.aspx" title="https://technet.microsoft.com/en-us/library/Cc753659.aspx" target="_blank">https://technet.microsoft.com/en-us/library/Cc753659.aspx</a>