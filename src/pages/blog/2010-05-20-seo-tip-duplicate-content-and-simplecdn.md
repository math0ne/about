---
templateKey: blog-post
title: 'SEO Tip: Duplicate Content and SimpleCDN'
date: 2010-05-20T10:20:36+00:00
permalink: /blog/2010/05/seo-tip-duplicate-content-and-simplecdn/
aktt_notify_twitter:
  - 'yes'
aktt_tweeted:
  - "1"
tags:
  - Uncategorized
---
If your using any sort of mirror server (simplecdn, maxcdn, akamai, limelight, etc) you have to be very careful about creating duplicate content that could be spidered by search engines. There&#8217;s a way to handle this issue that does not require you to have access to the mirror server itself.

First you have to identify the User Agent the mirror server is using to access your origin site. You will have to create a rewrite condition in your _.htaccess_ file that targets that User Agent, and serves a different robots.txt to the CDN, for SimpleCDN it&#8217;s this:
  


    RewriteCond %{HTTP_USER_AGENT} SimpleCDN
    RewriteRule ^robots\.txt$ /robots_simplecdn.txt [L]

Now you just need to create a _robots_simplecdn.txt_ and block all robots:
  


    User-agent: *
    Disallow: /