---
templateKey: blog-post
title: Share Calendars in Outlook 2007 without Exchange
date: 2008-06-17T20:25:00+00:00
permalink: /blog/2008/06/share-calendars-in-outlook-2007-without-exchange/
tags:
  - Desktop Customization
---
I was recently asked how one might go about sharing a calendar on outlook.  Having been on Thunderbird and Google apps for a while i assumed two way synchronization would be as easy as creating a public calendar and adding it to their outlook installs.  Turns out even the newest Outlook can only really publish or subscribe to ical calendars without exchange.

Here&#8217;s a step by step guide to setting up calendar sharing in Oulook 2007 without Exchange.  I know I&#8217;m not interested in paying for exchange so here&#8217;s some advice that might help if all you need to do is share calendars.

_This post assumes you have access to a open webdav directory, eg; http://webdav/dir with directories set up for all your users. eg;_ _http://webdav/dir/firstinitiallastname/_

## Publish Your Calendar

  * Start Outlook and Click _Calendar_ to open to Calendar slider
  * Right Click on _Calendar_ under the _My Calendars_ section

[<img class="aligncenter size-full wp-image-11" title="blog1" src="/img/2008/06/blog1.jpg" alt="" width="339" height="384" />](/img/2008/06/blog1.jpg)

  * Click _Publish to Internet_ then _Publish to Webdav Server_

[<img class="aligncenter size-full wp-image-12" title="blog2" src="/img/2008/06/blog2.jpg" alt="" width="482" height="295" />](/img/2008/06/blog2.jpg)

  * For location enter: _http://webdav/dir/firstinitiallastname/_
  * For Time Span: Unfortunately Microsoft will only allow you to share 90 days ahead and back for you main calendar but set it to the max for posterity
  * For Detail: Full Details
  * _You can optionally email the link to your co-workers here as well_
  * Click _OK_

## Subscribe to your Co-Workers Calendars

  * Click _Tools_ then _Accounts_ on the _Menu
  
_ 

[<img class="aligncenter size-full wp-image-13" title="blog3" src="/img/2008/06/blog3.jpg" alt="" width="432" height="285" />](/img/2008/06/blog3.jpg)

  * Click Internet Calendars
  * Click New
  * For the location use: _http://webdav/dir/firstinitiallastname/My_Calendar.ics_

[<img class="aligncenter size-full wp-image-14" title="blog4" src="/img/2008/06/blog4.jpg" alt="" width="384" height="311" />](/img/2008/06/blog4.jpg)

  * Give the calendar a useful name such as _Bob&#8217;s Calendar_
  * Click _OK_

[<img class="aligncenter size-full wp-image-15" title="blog5" src="/img/2008/06/blog5.jpg" alt="" width="468" height="290" />](/img/2008/06/blog5.jpg)

  * This will give you a split side by side view of your coworker and you schedule&#8217;s
  * To the left you can check and uncheck the calendars you would like to view at any given time

[<img class="aligncenter size-full wp-image-17" title="blog7" src="/img/2008/06/blog7.jpg" alt="" width="206" height="85" />](/img/2008/06/blog7.jpg)

  * To see a merged version of your and a co-workers calendars click the small left facing arrow by the calendars name

[<img class="aligncenter size-full wp-image-16" title="blog6" src="/img/2008/06/blog6.jpg" alt="" width="500" height="365" />](/img/2008/06/blog6.jpg)

It&#8217;s not a perfect solution and really it leaves a lot to be desired compared to some of the open source group calendaring platforms, but it might work depending on your needs.  I ivestigated a number of free and otherwise alternatives but they all lacked in some ways, the only real solution to this problem is Exchange.