---
templateKey: blog-post
title: Num Lock Email Indicator (AutoIt + Samurize)
date: 2009-11-21T08:04:57+00:00
permalink: /blog/2009/11/num-lock-email-indicator-autoit-samurize/
tags:
  - Desktop Customization
---
I like visual indicators, and I&#8217;ve never really seen the point in the num lock key so one day I decided I wanted to use that light to indicate that I have unread email on my laptop.  I used AutoIt and Samurize to get a system working on my laptop. Here&#8217;s how&#8221;

**AutoIt**
  


    ; NUMLOCK ON
    
    Send("{NUMLOCK on}")
    SoundPlay("click.wav",1)

    ;NUMLOCK OFF
    
    Send("{NUMLOCK off}")

I used autoit to create two exe&#8217;s. One that turns on the numlock and plays a sound. One that Turns off numlock.

**Samurize**

I then used the gmail.dll plugin to check my gmail account.  I then create two numeric alerts that trigger the exe&#8217;s I created above.

![](http://floatsolutions.net/docs/Capture1_001.jpg)

**Download**

Here&#8217;s the source code, exe&#8217;s and sound file:

<http://floatsolutions.net/docs/numlock.zip>