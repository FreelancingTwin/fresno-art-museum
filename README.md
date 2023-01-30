# Fresno Art Museum redesign
A website I designed for the Fresno Art Museum. The site is built on React and Typescript. It scores well on speed indices and metrics, showing my flair in SPAs. The site adapts dynamically to screens of all sizes.

**Link to project:**  https://fam-redesign.netlify.app/

![Landing page Screenshot](https://github.com/FreelancingTwin/fresno-art-museum/blob/master/public/assets/fam%20redesign%20thumbnail.png)

## How It's Made:

**Tech used:** 
<ul>
    <li>React</li>
    <li>Typescript</li>
    <li>JSX</li>
    <li>CSS</li>
    <li>HTML</li>
    <li>NPM</li>
    <li>Swiper.js : A Javascript gallery library.</li>
</ul>

## Developer's commentary

**Folks from 100Devs, Definitely read this!**

I used Vite to build this app. That made it breezy. You should try vite instead of create-react-app. It's just the same process but as create-react-app takes around 5 mins to initiate, vite does it in under 30 secs. I make my react starter templates by typing: 

```
npm create vite@latest
```
and I suggest you do the same. To make a habit, it's best if you make it easy-breezy isn't it? More time coding, less time waiting. Just starting? Overwhelmed? Send me a message and I'll be more than happy to guide ya.

 Maybe you wanna improvise the app. I welcome the thought! No need to ask permission. Just fork it, clone it, and to run this app in your local machine, use the good old:
```
npm run dev
```

**A foolproof way to test frontend:**
Build your app before pushing to github, and Preview it. It shows how your app will behave after your hosting provider will 'build' your app to display. They usually do. 'Building' apps just restructures your complex folder structure so it's quicker to read.
```
npm run build && npm run preview
```
After running that, you'll have a new folder called build in the top. Now that's a copy of your code. Still accessible even after you've deleted the production code! *If you have the guts, hehe*

**The pesky Bugs: *squached*:**
<ul>
    <li>There was a time where I was having trouble with getting the browser to display images. Turns out, I needed to put all the images in the public folder. I'm not a fan of React's src file structure. Next.js's pages, styles structure is cleaner imo.</li>
    <li>You see the hamburger menu? At version 1, it wasn't responsive. It's supposed to change icons from = to x, but wouldn't.
    <br>
    <strong>The fix:</strong> I made the mistake of assigning a class to my component & toggling it, instead of assigning a key or even a prop. Should've done that. This took me two days and two nights to come up with. Pretty standard for beginner projects don't you think?
    </li>
    <li>Swiper js would stack text. You can still see it in the picture above, but I fixed it with some z-index and backdrop-filters.</li>
</ul>

**Known bugs:**
I want the site to not scroll when I use the dropdown menu. I do have a workaround of positioning the div absolute, but still, it scrolls in the background. Still thinking... If you know a better solution, or have a suggestion, message me at my twitter @katkawpose https://twitter.com/KatKawPose saying 'Hey, I checked your fam project, I know how to fix the dropdown better! Would save ya a million dollars.'

## Optimizations

There was a time where I used font imports that were causing one more get request than I wanted. Set local fonts up instead.

Through Netlify, I customized my panel to filter my site with: 
URLs:
    Pretty URLs.
CSS:
    Bundle & Minify.
JS: 
    Bundle & Minify.
Images:
    Lossless compression.

In your netlify dashboard, Go to my sites, then select a site, then site settings, there's a section in the left called general. Select Build and deploy which is just under it, then post processing. Click that, check the boxes in the menu that shows up, and your site is optimized!

At first I used a relatively unknown CDN to import fonts, but that dragged the loading up to 18 seconds! So, I took some time and implemented local fonts. That resulted the site to load in under a second. So, practically an 18x speed increase!


## Lessons Learned:

Learned to use props and keys to recognize components from the DOM, instead of classes.
Learned more Typescript!
Refined my CSS. Learned to use Object-fit property in CSS to make divs the perfect size of images.
Learned a new library: Swiper.js!
More freelancing ftw.

## Also, check some of my other projects:

**My Website:** https://tau-website-maker.netlify.app/

**Obsession - A sleep calculator** https://obsession-by-tau-website-maker.netlify.app/

**Barb-her Salon:** https://barb-her-salon.netlify.app/