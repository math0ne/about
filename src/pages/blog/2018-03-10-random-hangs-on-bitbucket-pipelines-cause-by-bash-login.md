---
templateKey: blog-post
title: Random Hangs on Bitbucket Pipelines Cause by Bash Login
date: 2018-03-10T14:21:54+00:00
permalink: /blog/2018/03/random-hangs-on-bitbucket-pipelines-cause-by-bash-login
aktt_notify_twitter:
  - 'no'
tags:
  - Bitbucket
  - Devops
---

We were having trouble for weeks with our pipelines randonly failing on bitbucket.  The issue turned out to be with the ``` /bin/bash --login ``` command which is necessary for many node and ruby version managment systems and I wanted to put this out there for any one else that may be running into this issue.

This issue can be easily fixed by taking the contents of your ``` .bashrc ``` file and running those command directly in your ``` bitbucket-pipelines.yml ``` file and then removing the ``` /bin/bash --login ``` command.