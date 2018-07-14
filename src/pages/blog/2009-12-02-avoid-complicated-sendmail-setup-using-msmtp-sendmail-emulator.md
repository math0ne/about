---
templateKey: blog-post
title: Avoid Complicated Sendmail Setups using MSMTP Sendmail Emulator
date: 2009-12-02T15:27:54+00:00
permalink: /blog/2009/12/avoid-complicated-sendmail-setup-using-msmtp-sendmail-emulator/
aktt_tweeted:
  - "1"
aktt_notify_twitter:
  - 'yes'
tags:
  - Uncategorized
---
The only thing I hate more than configuring sendmail is configuring BIND. Of course, as you may already know getting sendmail up and running requires a solid BIND configuration. Even if you do get sendmail all set up and running you may still get your outgoing messages banned by the SPAMhaus for a variety of reasons.

Luckily for most people there is a viable albeit poorly promoted alternative to sendmail. This is a solutions that will work for most dedicated server and VPS web hosting solutions. I doubt that you would want a set up like this for larger mail requirements, but this should work for most web apps that just need to send out a few hundred emails a day.

_What we&#8217;re going to do is use a SMTP emulator of sorts to trick PHP into using a external SMTP server for it&#8217;s outgoing mail._

**What You Need**

  * Root access to your server
  * A SMTP account with reasonable limits

**1. Download Compile and Install MSMTP**

First you have to download and install the sendmail emulator

```bash
> wget http://downloads.sourceforge.net/project/msmtp/msmtp/1.4.19/msmtp-1.4.19-w32.zip?use_mirror=softlayer
> tar xvzf msmtp-1.4.19-w32.zip
> cd msmtp-1.4.19-w32.zip
> ./configure
> make
> make install
```

**2. Configure MSMTP**

Next we need to configure the MSMTP server to use our external SMTP Server. Pretty straight forward, just replace the entries with your info from your SMTP provider.
  
```
# Set default values for all following accounts.
defaults
tls on
tls_trust_file /etc/ssl/certs/ca-certificates.crt
logfile ~/.msmtp.log

# The SMTP server of the provider.
account provider
host mail.provider.example
from smithjoe@provider.example
auth on
user 123456789
password my_password
account default : provider
```

**3. Tell PHP to use MSMTP**

Next you have to find and replace the smtp server binary path with MSMTP. Replace the path with the location where MSMTP was installed on your distribution and where you created your config file.
  
```
sendmail_path = "/opt/local/bin/msmtp -C /var/empty/.msmtprc -t"
```

**4. Call mail() From Your Scripts**

You should now be able to call _mail()_ from your php scripts as normal and have the mail delivered through your external provider. If you are having trouble try adding this line to your scripts to set the tmp directory properly.

```
putenv("TMPDIR=/tmp");
```