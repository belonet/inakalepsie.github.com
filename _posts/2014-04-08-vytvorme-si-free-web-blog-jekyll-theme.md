---
layout: post
title: "Vytvorme si web: 3. Vytvorenie webu z jekyll témy"
description: "O tom ako rýchlo a jednoducho vytvoriť statický web bez finančných nákladov: 3. Vytvorenie webu z jekyll témy"
modified: 2014-04-08
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

Dnes, tak ako som sľúbil posledne, sa pozrieme na to ako si vytvoriť blog s použitím jekyll témy.
Odporúčam poobzerať sa po webe a nájsť si niečo, čo vyhovuje vášmu vkusu:-).

Ja pre potrebu tohto tutoriálu použijem tému [Minimal Mistakes](http://mmistakes.github.io/minimal-mistakes/) od autora [Michael Rose ](http://mademistakes.com/) 

## Prihlásenie sa na koding.com

Doposiaľ som to nespomínal, tak to urobím teraz.

Do služby [koding.com](https://koding.com/R/pbelopotocan) je možné prihlásiť sa aj prostredníctvom učtu Github!
{: .notice} 

Aby sme mohli s VM pracovať musíme si po príhlásení VM zapnúť - a to v sekcii [Enviroment](https://koding.com/Environments)

Keď nám VM beží otvorime si [Terminal](https://koding.com/Terminal) a pracujeme tak ako keby sme boli na lokalnej mašine.

## Stiahnutie témy
Pre stiahnutie témy použijeme nasledovný príkaz:

{% highlight bash %}
git clone https://github.com/mmistakes/minimal-mistakes 
{% endhighlight %}

Nasledne sa presunieme do adresara minimal-mistakes a zmažeme adresár .git:
{% highlight bash  %}
cd minimal-mistakes
rm -Rf .git
{% endhighlight %}


Už sme takmer hotoví. Pre spravne fungovanie treba ešte upraviť configuračný súbor _config.yml a to nasledovne:

zapoznamkujeme riadok
{% highlight yaml  %}
#url:              http://localhost:4000
{% endhighlight %}

a vložíme nový riadok, kde url bude vo formáte http://KODING_UZIVATEL.kd.io:4000/
{% highlight yaml  %}
url:              http://belo2.kd.io:4000/
{% endhighlight %}

zmenu nahráme a spustíme príkaz

{% highlight bash  %}
jekyll serve --watch
{% endhighlight %}

Následne do prehliadača zadáme adresu http://KODING_UZIVATEL.kd.io:4000/ a možeme sa tešiť s nášho súkromného webu:-)

## Prisposobenie a preloženie webu (customisation)

To ako si nastaviť celú tému pekne autor popísal na nasledovnej linke [Theme setup](http://mmistakes.github.io/minimal-mistakes/theme-setup/)


Ja som pre tých lenivejších čo si nechú čítať link vyššie:-) do originálneho konfiguráku pridal poznámky pre prispôsobneie si blogu pre potreby toho ktorého uzívateľa.

{% highlight yaml  %}
title:            Site Title                # Title sajtu
description:      Describe your website.    # Krátky popis
# Your site's domain goes here. Leave localhost server or blank when working locally.
#url:              http://localhost:4000
url:              http://belo2.kd.io:4000/  # URL musi byť nastavená správne - odkiaľ je web hostovaný 
disqus_shortname: 
 
# Owner/author information
owner:
  name:           Your Name             # tvoje meno
  avatar:         bio-photo.jpg         # tvoja fotka, myslim, že 200x200px  
  bio:            "Describe your self." # tvoj krátky popis
  email:          your@email.com        #  emailová adresa
  # Social networking links are used in author-bio sidebar. Update and remove as you like.
  twitter:        
  facebook:       
  github:         
  stackoverflow: 
  linkedin:       
  instagram:      
  lastfm:         
  tumblr: 
  pinterest: 
  foursquare: 
  steam: 
  dribbble: 
  # For Google Authorship https://plus.google.com/authorship
  google_plus:
 
# Analytics and webmaster tools stuff goes here
google_analytics:   
google_verify:      
# https://ssl.bing.com/webmaster/configure/verify/ownership Option 2 content= goes here
bing_verify:        
 
# Links to include in top navigation
# For external links add external: true
links:
  - title: About    # hlavné linky blogu
    url: /about/
  - title: Posts
    url: /posts/
  - title: Theme Setup
    url: /theme-setup/
  - title: Made Mistakes
    url: http://mademistakes.com
    external: true
 
# http://en.wikipedia.org/wiki/List_of_tz_database_time_zones
timezone:    America/New_York  # Europe/Bratislava - toto je naša zóna
future:      true
pygments:    true
markdown:    kramdown
 
# https://github.com/mojombo/jekyll/wiki/Permalinks
permalink:   /:categories/:title/
 
kramdown:
  auto_ids: true
  footnote_nr: 1
  entity_output: as_char
  toc_levels: 1..6
  use_coderay: false
 
  coderay:
    coderay_line_numbers: 
    coderay_line_numbers_start: 1
    coderay_tab_width: 4
    coderay_bold_every: 10
    coderay_css: class
 
include: [".htaccess"]
exclude: ["lib", "config.rb", "Capfile", "config", "log", "Rakefile", "Rakefile.rb", "tmp", "less", "*.sublime-project", "*.sublime-workspace", "test", "spec", "Gruntfile.js", "package.json", "no
de_modules"]
{% endhighlight %}


## Ako sa píšu príspevky?

v adresári **_post** sa nachádzaju súbory s koncovkou ***.md**

Treba si pozrieť tie príklady čo sú tam a všetko bude jasné:-), prípadne link [All Posts](http://mmistakes.github.io/minimal-mistakes/posts/)


Pre názornosť som pridal jeden post, kde vidieť najzákladnejšie použitie jednotlivých štýlov.
{% highlight yaml %}

---
layout: post
title: Sample Post
description: "Just about everything you'll need to style in the theme: headings, paragraphs, blockquotes, tables, code blocks, and more."
modified: 2013-05-31
tags: [intro, beginner, jekyll, tutorial]
comments: true
image:
  feature: texture-feature-05.jpg
  credit: Texture Lovers
  creditlink: http://texturelovers.com
---
 
<section id="table-of-contents" class="toc">
  <header>
    <h3>Contents</h3>
  </header>
<div id="drawer" markdown="1">
*  Auto generated table of contents
{:toc}
</div>
</section><!-- /#table-of-contents -->
 
## HTML Elements
 
Below is just about everything you'll need to style in the theme. Check the source code to see the many embedded elements within paragraphs.
 
# Heading 1
 
## Heading 2
 
### Heading 3
 
#### Heading 4
 
##### Heading 5
 
###### Heading 6
 
### Body text
 
Lorem ipsum dolor sit amet, test link adipiscing elit. **This is strong**. Nullam dignissim convallis est. Quisque aliquam.
 
![Smithsonian Image]({{ site.url }}/images/3953273590_704e3899d5_m.jpg)
{: .image-pull-right}
 
*This is emphasized*. Donec faucibus. Nunc iaculis suscipit dui. 53 = 125. Water is H2O. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. The New York T
imes (That’s a citation). Underline.Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Mor
bi imperdiet augue quis tellus.
 
HTML and CSS are our tools. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus. Praesent mattis, massa quis luctus fermentum, tu
rpis mi volutpat justo, eu volutpat enim diam eget metus.
 
### Blockquotes
 
> Lorem ipsum dolor sit amet, test link adipiscing elit. Nullam dignissim convallis est. Quisque aliquam.
 
## List Types
 
### Ordered Lists
 
1. Item one
   1. sub item one
   2. sub item two
   3. sub item three
2. Item two
 
### Unordered Lists
 
* Item one
* Item two
* Item three
 
## Tables
 
| Header1 | Header2 | Header3 |
|:--------|:-------:|--------:|
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
|----
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
|=====
| Foot1   | Foot2   | Foot3
{: rules="groups"}
 
## Code Snippets
 
{% highlight css %}
#container {
  float: left;
  margin: 0 -240px 0 0;
  width: 100%;
}
{% endhighlight %}
 
## Buttons
 
Make any link standout more when applying the `.btn` class.
 
{% highlight html %}
<a href="#" class="btn btn-success">Success Button</a>
{% endhighlight %}
 
<div markdown="0"><a href="#" class="btn">Primary Button</a></div>
<div markdown="0"><a href="#" class="btn btn-success">Success Button</a></div>
<div markdown="0"><a href="#" class="btn btn-warning">Warning Button</a></div>
<div markdown="0"><a href="#" class="btn btn-danger">Danger Button</a></div>
<div markdown="0"><a href="#" class="btn btn-info">Info Button</a></div>
 
## Notices
 
**Watch out!** You can also add notices by appending `{: .notice}` to a paragraph.
{: .notice}

{% endhighlight %}

## Umiestnenie prisposobeného webu na Github

Ak sme so zmenami na webe spokojní, je čas ho umiestniť na Github servri.
Nebudem sa opakovať, len odporučím na prispevok, kde som presne popísal [ako si umiestniť web na servri Github](/vytvorme-si-free-web-blog-github-pages/#github)

## Záver

Tak a sme na konci nášho minit "How to - Vytvorme si web". 

Snáď všetko fungovalo tak ako malo a vy sa už tešíte zo svojho nového webu.

PS: Ak by ste mali nejaké dotazy, pripomienky kludne sa možete ozvať cez komentáre disqus na konci každého príspevku. 
 
<br><br>  

