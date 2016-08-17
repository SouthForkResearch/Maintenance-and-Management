# The NAR Client Website Template

This repo is everything you need to turn a flat directory structure of Markdown into a beautiful web-ready site.

You will clone this repo and copy the files out of it (unless you're starting from scratch with no content. Then just remove the `.git` folder of this repo and start writing).

## Setting up for Hugo. 

I will refer to two repos here: 

#### `<YOURREPO>` Where you have all your flat content organized. 

####`<THISREPO>` "This" repo with the `hugo.exe`, `README.md`, `themes` folder etc....

*** NB: If you haven't got any content yet then just treat these as the same and do everything in this repo's folder.***

### Instructions:

1. `<YOURREPO>`: If you haven't already create a `content` folder and move your entire content structure inside it. Make this commit to git. 
2. Download `<THISREPO>` somewhere ELSE on your computer by cloning it using Sourcetree or just git from the command line.
3. Move all files (except the .git folder) from `<THISREPO>` repo to `<YOURREPO>`. 
4. `<YOURREPO>`: Edit appropriate fields in your new `config.yaml` file.
5. `<YOURREPO>`: Open all your `.md` files and insert appropriate FrontMatter (see note below). 
6. `<YOURREPO>`: Commit everything to git.

You should now be good to go on your first site!

## Editing Your New Site

Technically all you need to do to edit your site is to change files in the `/content` folder with the text editor of your choosing. You can get fancy though and see a preview of the site as you type. To do this. 

1. Run `serve.bat` *(or `hugo.exe server -t narclients` at the command line in the root folder.)*
2. In the terminal box you will get a message telling you where you can preview it. ```Web Server is available at http://localhost:1313/ (bind address 127.0.0.1)```
3. Open a web browser and go to the address it gives you: `http://localhost:1313/`
4. Now if you open your text editor on the left and your web browser on the right you can see changes every time you `save` your file

## Publishing (FTP)

1. Run `build.bat` *(or `hugo -t narclient` from the command line. (the -t indicates which theme you are using)*
2. You should now see a `/public` folder in your root. This folder will not be detected by git.
3. Upload the contents of this folder to your FTP site. If you have renamed pages you may want to delete what is in the FTP site first. You can be selective; for example if you know your `images` and `documetns` have already been uploaded you don't have to do them again.

## Publishing (Wercker)

Wercker is a system for continuous integration. Using this method you will be able to push your commits to the git repo and see the site published automatically 2-3 minutes later. 

This method will require a worker account as well as an amazon S3 account.

*Instructions coming soon...*

### FAQ

#### What is FrontMatter

FrontMatter is a few lines of YAML at the top of your page which gives context to how it is to be rendered. 

For most pages all you need is the following: 

```
---
title: "My awesome page title goes here"
---
```

#### What is Hugo?

[Hugo](https://gohugo.io/) is a static website builder. It's similar to [Jekyll](http://jekyllrb.com/) 

#### Why Hugo? Why not Jekyll?

Jekyll is great. No, seriously, it's awesome. It has a ruby dependency though so it's kind of a bummer for windows users. Hugo is a single executable that anyone can run.

#### Why static sites? I thohugought Wordpress and Drupal were the new hotness?

Static sites are making a comeback and they have some very compelling advantages over CMS systems.

* Focus on content. Write in markdown (plain text) on your computer. No logging in. 
* Never update another plugin. Zero site maintenance.
* Almost un-hackable. Also much easier to recover from a hack.

### Where do I find?....

#### A Better theme!

Hey! I wrote that!! Kidding. The theme is called `narclient` and it's located in the `themes` folder. It's a bootstrap 4](http://v4-alpha.getbootstrap.com/getting-started/introduction/) theme that uses [FontAwesome](https://fortawesome.github.io/Font-Awesome/) for the icons. uses a `Grunt` + `sass` for all the theming. If none of that scares you then feel free to dive in and make changes.

Or... you can go find a stock theme you like better using [Hugo's theme site](http://themes.gohugo.io/).

Once you have your theme, plunk it in the theme directory and switch to it by specifying the theme in your `hugo -t <THEMENAME>` or `hugo server -t <THEMENAME>` command. It's that easy.

#### The sidebar?

The sidebar contents can be found in the `layouts/default/customsidebar.html` folder. You can put whatever you want in there. If you empty it out you will only get the automatic sidebar elements.

#### Logos / Images

Any file you put in `/static` will get built automatically. `images`, `documents` and `css` have been created for you but you can add more if you want. Anything put in this folder, for example `/static/images/cutecat.jpg` would correspond to `<img src="/images/cutecat.jpg"/>`

#### CSS and Colors

**NB: Permanent, Sitewide changes should be made hugo theme using SCSS. Get in touch with your local web drone if you need instructions.**

Look for `/stati/css/extra.css`. CSS styling you put in here should override the theme.
