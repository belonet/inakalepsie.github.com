---
layout: post
title: "Vytvorme si web: 1. inštalácia Jekyll"
description: "O tom ako rýchlo a jednoducho vytvoriť statický web bez finančných nákladov: 1. inštalácia Jekyll"
modified: 2014-04-06
tags: [Inak a lepšie, technológie, jekyll, github]
comments: true
share: true
image:
  feature: header_tvorba_webu.jpg
#  feature: headerImgParkovanie.png
  credit: Kresby Kristianko Belopotočan, 2013 - Slnečná sústava, Slnko, Na pláži
  creditlink: https://www.flickr.com/photos/belonet/sets/72157643281223573/
---

<section id="table-of-contents" class="toc">
  <header>
    <h3>Obsah</h3>
  </header>
<div id="drawer" markdown="1">
*  Auto generated table of contents
{:toc}
</div>
</section><!-- /#table-of-contents -->

V príspevku [Krátke info o tom ako vznikal web Inak a lepšie](/o-webe/) som načrtol aké technologie a služby som použil pri vytváran9 tohto webu.

Možno by niekoho zaujímali aj detaily a rád by si vytvoril niečo podobné, svoje ale nevie ako. Preto som sa rozhodol, že spravím krátky "How to" ako si vytvoriť web podobný totu čo tu práve čítate:-)

## Na úvod

[Jekyll](http://jekyllrb.com/) je framework, ktorý umožňuje pretransformovať plain text do statickej webovej stránky, blogu. 
 
Pre jednoduchosť a možnosť ísť "krok za krokom" podľa tohto "how to" som sa rozhodol, že pre inštaláciu použijem službu [koding.com](https://koding.com/R/pbelopotocan) s nainštalovaným Ubuntu 13.04. (samozrejme, kto chce ten si to može všetko nainštalovať priamo na svoje PC, ale pravdu povediac tá virtulána mašina má svoje výhody a nie je ich málo.:-))


Pre samotnú inštaláciu Jekyll-u je nutné mať na systéme nainštalované: 

* Ruby
* RubyGems
 
### Inštalácia Ruby

Ruby - podporované OS platformy - Linux/UNIX , OS X, Windows 
 
samozrejme je možne nainštalovať si balíček Ruby alebo priamo skompilovať zdrojáky, možnosti je veľa, odporúčam pozrie ich oficiálnu stránku: [Ruby downloads](https://www.ruby-lang.org/en/downloads/) 
 
pre môj systém to je: 
 
{% highlight bash %}
belo2@vm-0:~$ sudo apt-get install ruby 
{% endhighlight %}

 
v prípade systému na [koding.com](https://koding.com/R/pbelopotocan), túto inštaláciu môžete preskočiť, ruby je predinštalované 
 
{% highlight bash %}
belo2@vm-0:~$ ruby --version  d
ruby 1.9.3p194 (2012-04-20 revision 35410) [x86_64-linux] 
{% endhighlight %}

 
### Inštalácia RubyGems
RubyGems - package management framework pre Ruby. 

Ak je potreba inštalácie postup je jednoduchý, viď [RubyGems download](http://rubygems.org/pages/download)
 
v mojom prípade opäť predinštalované 
{% highlight bash %}
belo2@vm-0:~$ gem --version 
1.8.23 
{% endhighlight %}


### Inštalácia Jekyll
Po úspešných inštaláciach z Ruby a RubyGem nainštalujem jekyll prostredníctvom RubyGem 
 
{% highlight bash %}
belo2@vm-0:~$ sudo gem install jekyll 
Fetching: liquid-2.5.5.gem (100%) 
Fetching: fast-stemmer-1.0.2.gem (100%) 
Building native extensions.  This could take a while... 
Fetching: classifier-1.3.4.gem (100%) 
Fetching: rb-fsevent-0.9.4.gem (100%) 
Fetching: ffi-1.9.3.gem (100%) 
Building native extensions.  This could take a while... 
Fetching: rb-inotify-0.9.3.gem (100%) 
Fetching: rb-kqueue-0.2.2.gem (100%) 
Fetching: listen-1.3.1.gem (100%) 
Fetching: maruku-0.7.0.gem (100%) 
Fetching: yajl-ruby-1.1.0.gem (100%) 
Building native extensions.  This could take a while... 
Fetching: posix-spawn-0.3.8.gem (100%) 
Building native extensions.  This could take a while... 
Fetching: pygments.rb-0.5.4.gem (100%) 
Fetching: highline-1.6.21.gem (100%) 
Fetching: commander-4.1.6.gem (100%) 
Fetching: safe_yaml-1.0.1.gem (100%) 
Fetching: colorator-0.1.gem (100%) 
Fetching: redcarpet-2.3.0.gem (100%) 
Building native extensions.  This could take a while... 
Fetching: blankslate-2.1.2.4.gem (100%) 
Fetching: parslet-1.5.0.gem (100%) 
Fetching: toml-0.1.1.gem (100%) 
Fetching: jekyll-1.5.1.gem (100%) 
Successfully installed liquid-2.5.5 
Successfully installed fast-stemmer-1.0.2 
Successfully installed classifier-1.3.4 
Successfully installed rb-fsevent-0.9.4 
Successfully installed ffi-1.9.3 
Successfully installed rb-inotify-0.9.3 
Successfully installed rb-kqueue-0.2.2 
Successfully installed listen-1.3.1 
Successfully installed maruku-0.7.0 
Successfully installed yajl-ruby-1.1.0 
Successfully installed posix-spawn-0.3.8 
Successfully installed pygments.rb-0.5.4 
Successfully installed highline-1.6.21 
Successfully installed commander-4.1.6 
Successfully installed safe_yaml-1.0.1 
Successfully installed colorator-0.1 
Successfully installed redcarpet-2.3.0 
Successfully installed blankslate-2.1.2.4 
Successfully installed parslet-1.5.0 
Successfully installed toml-0.1.1 
Successfully installed jekyll-1.5.1 
21 gems installed 
Installing ri documentation for liquid-2.5.5... 
Installing ri documentation for fast-stemmer-1.0.2... 
Installing ri documentation for classifier-1.3.4... 
Installing ri documentation for rb-fsevent-0.9.4... 
Installing ri documentation for ffi-1.9.3... 
Enclosing class/module 'moduleFFI' for class Function not known 
Enclosing class/module 'rbffi_StructLayoutClass' for class CharArray not known 
Enclosing class/module "rbffi_StructLayoutCharArrayClass" for alias to_str to_s not known 
Installing ri documentation for rb-inotify-0.9.3... 
Installing ri documentation for rb-kqueue-0.2.2... 
Installing ri documentation for listen-1.3.1... 
Installing ri documentation for maruku-0.7.0... 
Installing ri documentation for yajl-ruby-1.1.0... 
Installing ri documentation for posix-spawn-0.3.8... 
Installing ri documentation for pygments.rb-0.5.4... 
Installing ri documentation for highline-1.6.21... 
Installing ri documentation for commander-4.1.6... 
Installing ri documentation for safe_yaml-1.0.1... 
Installing ri documentation for colorator-0.1... 
Installing ri documentation for redcarpet-2.3.0... 
Installing ri documentation for blankslate-2.1.2.4... 
Installing ri documentation for parslet-1.5.0... 
Installing ri documentation for toml-0.1.1... 
Installing ri documentation for jekyll-1.5.1... 
Installing RDoc documentation for liquid-2.5.5... 
Installing RDoc documentation for fast-stemmer-1.0.2... 
Installing RDoc documentation for classifier-1.3.4... 
Installing RDoc documentation for rb-fsevent-0.9.4... 
Installing RDoc documentation for ffi-1.9.3... 
Enclosing class/module 'moduleFFI' for class Function not known 
Enclosing class/module 'rbffi_StructLayoutClass' for class CharArray not known 
Enclosing class/module "rbffi_StructLayoutCharArrayClass" for alias to_str to_s not known 
Installing RDoc documentation for rb-inotify-0.9.3... 
Installing RDoc documentation for rb-kqueue-0.2.2... 
Installing RDoc documentation for listen-1.3.1... 
Installing RDoc documentation for maruku-0.7.0... 
Installing RDoc documentation for yajl-ruby-1.1.0... 
Installing RDoc documentation for posix-spawn-0.3.8... 
Installing RDoc documentation for pygments.rb-0.5.4... 
Installing RDoc documentation for highline-1.6.21... 
Installing RDoc documentation for commander-4.1.6... 
Installing RDoc documentation for safe_yaml-1.0.1... 
Installing RDoc documentation for colorator-0.1... 
Installing RDoc documentation for redcarpet-2.3.0... 
Installing RDoc documentation for blankslate-2.1.2.4... 
Installing RDoc documentation for parslet-1.5.0... 
Installing RDoc documentation for toml-0.1.1... 
Installing RDoc documentation for jekyll-1.5.1... 
 
{% endhighlight %} 


Ak sa počas inštalacie neobjavili žiadne chyby s inštaláciou sme hotový:-)

Pre kontrolu si možeme dať vypísať verziu práve nainštalovaného Jekyll.
{% highlight bash %}
belo2@vm-0:~$ jekyll --version
jekyll 1.5.1
{% endhighlight %}



## Prvá web stránka

V domovskom adresari si vytvoríme nový adresár, kde umiestnime našu prvú testovaciu/ilustračnú stránku.

(vytvorenie adresára a presunutie sa do neho)
{% highlight bash %}
belo2@vm-0:~$ mkdir helloworld && cd $_
belo2@vm-0:~/helloworld
{% endhighlight %}

vytvoríme súbor index.html (príkaz touch nám vytvori iba prázdny súbor) 

{% highlight bash %}
belo2@vm-0:~/helloworld touch index.html
{% endhighlight %}

následne treba do súboru index.html vložiť nasledovný obsah
{% highlight html %}
<html>
<header><title>This is title</title></header>
<body>
Hello world
</body>
</html>{% endhighlight %}


{% highlight bash %}
belo2@vm-0:~/helloworld vi index.html
{% endhighlight %}

(po "odklepnutí" príkazu sa vo vi prepneme do režimu "vkladania" napísaním "i", následne vložíme skopirovaný html text, ak sme skončili klikneme na ESC a následne súbor uložíme cez ":wq!" alebo SHIFT ZZ)


Týmto sme dospeli k záverečnemú kroku. V adresati, kde sme vytvorili súbor index.html spustíme príkaz:

{% highlight bash %}
belo2@vm-0:~/helloworld jekyll serve --watch
Configuration file: none
            Source: /home/belo2/helloworld
       Destination: /home/belo2/helloworld/_site
      Generating... done.
 Auto-regeneration: enabled
    Server address: http://0.0.0.0:4000
  Server running... press ctrl-c to stop.
{% endhighlight %}


Teraz už len zadať do webového prehliadača URL: **http://belo2.kd.io:4000/**
(samozrejme belo2 nahradiť svojim vlastným užívatelským menom)

V ďaľšom dieli si ukážeme ako si umiestniť svoj web na službe [Github](http://www.github.com).
 
<br><br>  

