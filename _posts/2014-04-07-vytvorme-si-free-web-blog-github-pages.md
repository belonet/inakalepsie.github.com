---
layout: post
title: "Vytvorme si web: 2. Nahranie webu na Github"
description: "O tom ako rýchlo a jednoducho vytvoriť statický web bez finančných nákladov: 2. Nahranie webu na Github"
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

Ak ešte nemáte konto na Github - nič jednoduchšie - zaregistrujeme sa na nasledovnej linke: [Github Join](https://github.com/join)

## Registrácia Github konta

<figure>
	<a href="https://github.com/join"><img src="/images/github/GithubRegistracia.png"></a>
	<figcaption><a href="https://github.com/join" title="Registrácia Github konta">Registrácia Github konta</a>.</figcaption>
</figure>


Vyplníme formulár, potvrdíme a konto u Github je vytvorené.:-)

<figure>
	<img src="/images/github/GithubRegistraciaForm.png">
	<figcaption>Registračný formulár Github konta.</figcaption>
</figure>


Na zadanú mailovú adresu príde verifikačný mail, či ste naozaj vlastník zadanej adresy. Celý proces verifikácie treba prejsť a až potom je konto plnohodnotne vytvorené. 


## Vytvorenie repozitára

Teraz si môžeme vytvoriť prvý repozitár. (nič jednoduchšie:-)) 
 
Postupujeme podľa obrázkov... 

Klikneme na znamienko "+"

<figure>
	<img src="/images/github/GithubVytvorenieRepozitara.png">
	<figcaption>Vytvorenie repozitára</figcaption>
</figure>

Vyplníme údaje potrebné pre definíciu repozitára

<figure>
	<img src="/images/github/GithubVytvorenieRepozitara2.png">
	<figcaption>Formulár pre vytvorenie repozitára</figcaption>
</figure>

Po úspešnom vytvorení repozitára by ste mali vidieť niečo takéto:-)
<figure>
	<img src="/images/github/GithubVytvorenieRepozitara3.png">
	<figcaption>Repozitár je vytvorený</figcaption>
</figure>

Samotný Github nám našepkáva ako vytvoriť v repozitári niečo nové, pripadne do neho niečo pridať. 

## Vytvorenie repozitára z príkazoveho riadku
(tento odstavec môžete kľudne preskočiť, kedže repozitár sme si už vytvorili cez GUI)

Snažil som sa zistiť ako vytvoriť nový repozitár z prikazového riadku a nakoniec sa podarilo - treba využiť Github API, avšak potrebujete poznať token, ktorý si vygenerujete, pripadne nájdete v **Nastaveniach konta (Account settings) : Applications**
{: .notice}  
<figure>
	<img src="/images/github/token.png">
	<figcaption>Vyenerovanie tokenu</figcaption>
</figure>
<figure>
	<img src="/images/github/tokenVygenerovanie.png">
	<figcaption>Formulár pre vyenerovanie tokenu</figcaption>
</figure> 

Akonáhle máme token pre vytvorenie repozitára použijeme nasledovný CURL príkaz  

{% highlight bash %}
curl -XPOST -H 'Authorization: token TVOJ_TOKEN' https://api.github.com/user/repos -d '{"name":"test","description":"my new test repo description"}' 

{% endhighlight %}
 
{% highlight ReST %}
   
{ 
  "id": 18454295, 
  "name": "test", 
  "full_name": "belonet/test", 
  "owner": { 
    "login": "belonet", 
    "id": 2955300, 
    "avatar_url": "https://avatars.githubusercontent.com/u/2955300?", 
    "gravatar_id": "e80fa9b0798c8f69a6363ba8e395981f", 
    "url": "https://api.github.com/users/belonet", 
    "html_url": "https://github.com/belonet", 
    "followers_url": "https://api.github.com/users/belonet/followers", 
    "following_url": "https://api.github.com/users/belonet/following{/other_user}", 
    "gists_url": "https://api.github.com/users/belonet/gists{/gist_id}", 
    "starred_url": "https://api.github.com/users/belonet/starred{/owner}{/repo}", 
    "subscriptions_url": "https://api.github.com/users/belonet/subscriptions", 
    "organizations_url": "https://api.github.com/users/belonet/orgs", 
    "repos_url": "https://api.github.com/users/belonet/repos", 
    "events_url": "https://api.github.com/users/belonet/events{/privacy}", 
    "received_events_url": "https://api.github.com/users/belonet/received_events", 
    "type": "User", 
    "site_admin": false 
  }, 
  "private": false, 
  "html_url": "https://github.com/belonet/test", 
  "description": "my new test repo description", 
  "fork": false, 
  "url": "https://api.github.com/repos/belonet/test", 
  "forks_url": "https://api.github.com/repos/belonet/test/forks", 
  "keys_url": "https://api.github.com/repos/belonet/test/keys{/key_id}", 
  "collaborators_url": "https://api.github.com/repos/belonet/test/collaborators{/collaborator}", 
  "teams_url": "https://api.github.com/repos/belonet/test/teams", 
  "hooks_url": "https://api.github.com/repos/belonet/test/hooks", 
  "issue_events_url": "https://api.github.com/repos/belonet/test/issues/events{/number}", 
  "events_url": "https://api.github.com/repos/belonet/test/events", 
  "assignees_url": "https://api.github.com/repos/belonet/test/assignees{/user}", 
  "branches_url": "https://api.github.com/repos/belonet/test/branches{/branch}", 
  "tags_url": "https://api.github.com/repos/belonet/test/tags", 
  "blobs_url": "https://api.github.com/repos/belonet/test/git/blobs{/sha}", 
  "git_tags_url": "https://api.github.com/repos/belonet/test/git/tags{/sha}", 
  "git_refs_url": "https://api.github.com/repos/belonet/test/git/refs{/sha}", 
  "trees_url": "https://api.github.com/repos/belonet/test/git/trees{/sha}", 
  "statuses_url": "https://api.github.com/repos/belonet/test/statuses/{sha}", 
  "languages_url": "https://api.github.com/repos/belonet/test/languages", 
  "stargazers_url": "https://api.github.com/repos/belonet/test/stargazers", 
  "contributors_url": "https://api.github.com/repos/belonet/test/contributors", 
  "subscribers_url": "https://api.github.com/repos/belonet/test/subscribers", 
  "subscription_url": "https://api.github.com/repos/belonet/test/subscription", 
  "commits_url": "https://api.github.com/repos/belonet/test/commits{/sha}", 
  "git_commits_url": "https://api.github.com/repos/belonet/test/git/commits{/sha}", 
  "comments_url": "https://api.github.com/repos/belonet/test/comments{/number}", 
  "issue_comment_url": "https://api.github.com/repos/belonet/test/issues/comments/{number}", 
  "contents_url": "https://api.github.com/repos/belonet/test/contents/{+path}", 
  "compare_url": "https://api.github.com/repos/belonet/test/compare/{base}...{head}", 
  "merges_url": "https://api.github.com/repos/belonet/test/merges", 
  "archive_url": "https://api.github.com/repos/belonet/test/{archive_format}{/ref}", 
  "downloads_url": "https://api.github.com/repos/belonet/test/downloads", 
  "issues_url": "https://api.github.com/repos/belonet/test/issues{/number}", 
  "pulls_url": "https://api.github.com/repos/belonet/test/pulls{/number}", 
  "milestones_url": "https://api.github.com/repos/belonet/test/milestones{/number}", 
  "notifications_url": "https://api.github.com/repos/belonet/test/notifications{?since,all,participating}", 
  "labels_url": "https://api.github.com/repos/belonet/test/labels{/name}", 
  "releases_url": "https://api.github.com/repos/belonet/test/releases{/id}", 
  "created_at": "2014-04-04T22:17:54Z", 
  "updated_at": "2014-04-04T22:17:55Z", 
  "pushed_at": "2014-04-04T22:17:55Z", 
  "git_url": "git://github.com/belonet/test.git", 
  "ssh_url": "git@github.com:belonet/test.git", 
  "clone_url": "https://github.com/belonet/test.git", 
  "svn_url": "https://github.com/belonet/test", 
  "homepage": null, 
  "size": 0, 
  "stargazers_count": 0, 
  "watchers_count": 0, 
  "language": null, 
  "has_issues": true, 
  "has_downloads": true, 
  "has_wiki": true, 
  "forks_count": 0, 
  "mirror_url": null, 
  "open_issues_count": 0, 
  "forks": 0, 
  "open_issues": 0, 
  "watchers": 0, 
  "default_branch": "master", 
  "master_branch": "master", 
  "permissions": { 
    "admin": true, 
    "push": true, 
    "pull": true 
  }, 
  "network_count": 0, 
  "subscribers_count": 1 
} 

{% endhighlight %}



<a name="github"></a>

## Vytvorenie projektovej stránky na github

Ak máme vytvorený repozitár, vytvorenie projektovej stránky (názov repozitára = projekt) je len otázka niekolkých minút.
Poďme na to:

Mali by sme byť v adresári **~/helloworld** kde smi si pred chvílkou vytvorili našu prvú str8nku. Ak tam nie sme zadáme príkaz

{% highlight bash %}cd ~/helloworld{% endhighlight %}

Následne zadáme tieto príkazy:

Ak sme si vytvorili repozitár s názvom test
{: .notice}  

{% highlight bash %}
git init
git add .
git commit -m "uvodna stranka"
git remote add origin https://github.com/GITHUB_USER_NAME/test.git
git push -u origin master
git checkout -b gh-pages 
git push origin gh-pages 
{% endhighlight %}

Teraz sa musime prihlásiť cez GUI Github na svoje konto a zmeníme pre našu **test** repozitory default branch na **gh-pages**.
Kliknutím na túto URL **https://github.com/GITHUB_USER_NAME/REPOSITORY/settings** by sme sa mali dostať do sekcie kde to dokážeme zmeniť.  

Následne zmažeme vzdialený a potom aj lokálny "branch" **master**
{% highlight bash %}
git push origin :master
git branch -d  master
{% endhighlight %}

Po niekoľkých minútach je naša stránka dostupná na adrese: **http://GITHUB_USER_NAME.github.io/REPOSITORY**

## Vytvorenie stránky organizácie na github

V tomto prípade je nutné vytvoriť repozitár s názvom **GITHUB_USER_NAME.github.io**

Ak máme lokálne vytvorenú nejaku webovú stránku, presunieme sa do adresara kde ten web je.

Vo vnútri adresára vykonáme nasledovnú sériu príkazov:

{% highlight bash %}
git init
git add .
git commit -m "uvodna stranka"
git remote add origin https://github.com/GITHUB_USER_NAME/GITHUB_USER_NAME.github.io.git
git push -u origin master
{% endhighlight %}


A sme hotoví, naša web stránka je dostupná na adrese **http://GITHUB_USER_NAME.github.io** (treba byť trpezlivý uvodné zobrazenie trva nejaku tu minutku, ďalšie zmeny sú už takmer okamžité)

V ďaľšom dieli si ukážeme ako si vytvoriť niečo zložitejšie ako je len "Hello World" stránka:-)
 
<br><br>  

