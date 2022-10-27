---
sidebar_position: 1
description: There are six sections in total that you can interact with at the moment of publishing the ebook. Details, Meta, Links, Appearance, Premium and Resources.
---

# Book Details

There are six sections in total that you can interact with at the moment of publishing the book: "Details", "Meta", "Links", "Appearance", "Premium" and "Resources".

## Details

In "Details" you can edit the most important information about the book, such as the title, description, and the authors (or author) of the book. All this will be useful to provide more detailed information about your book to the publishing sites. In this way, users on platforms such as Amazon will be able to find your book much faster when they are looking for it.

![Book details](https://ik.imagekit.io/ferranfigueredo/mpl-publisher/details-1_Gi6xmbHs82c.png)

## Meta

The "Meta" section is where you can define the metadata that will be part of your book once it has been converted to the ebook format you want. Information such as the language, the publication date, the cover of the book, the name of the publisher, or Copyright data.

All this information also adds weight to the internals of your book, so it can appear in the first positions of the search discovery in web book distributors such as Amazon.

![Book Meta](https://ik.imagekit.io/ferranfigueredo/mpl-publisher/details-2_EsSlkaGTP.png)

This is for sure a good practice, so publishing platforms know more data about your book and thus it can reflect that data in search engines to achieve an accurate search.

### External Links

Over the "External Links" section, you can add direct links to your Amazon page, a website, other distributors, and social networks. It can be seen as a bridge or a connection to other sites that you want to show to your readers, such as a landing page where they can continue to buy your products, including them in their sales funnel or social networks.

## Design

The "Design" section is where you can choose the look & feel in which the contents of the book will be displayed. Also, if you are proficient in front-end technologies (don't worry if you don't know, this is only optional), you can add your styles of how you want the pages of your book to look, how the texts will be aligned, choosing colors, etc.

![Book Appearance](https://ik.imagekit.io/ferranfigueredo/mpl-publisher/details-3_o2xysBfqC.png)

### Custom CSS

You can publish your book with your custom CSS, overriding the default file included with our themes.

:::note

The HTML used by the plugin is the same that your website does, but cleaning all the inline styles, non-valid attributes or other unnecesary elements. This way we generate a more readable and cleaner HTML.

:::

If you want a base for editing your own styles, this is the CSS we use with our default theme.

```css title="theme-default.css"s
@font-face {
    font-family: 'Merriweather';
    font-weight: normal;
    font-style: normal;
    src: url('./merriweather-regular.ttf');
}

@font-face {
    font-family: 'Merriweather';
    font-weight: 700;
    font-style: normal;
    src: url('./merriweather-bold.ttf');
}

@font-face {
    font-family: 'Merriweather';
    font-weight: normal;
    font-style: italic;
    src: url('./merriweather-italic.ttf');
}

@font-face {
    font-family: 'Lato';
    font-weight: 500;
    font-style: normal;
    src: url('./lato-bold.ttf');
}

body {
    font-family: 'Merriweather', serif;
    font-weight: normal;
    color:#222;
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Lato', sans-serif;
    font-weight: 500;
}

h1.chapter-title {
    margin: 2em 0 1em;
    text-align: center;
    font-size: 2.2rem;
}

h2 {
    color: #ba3925;
    font-size: 1.4rem;
    margin: 1.8rem 0 1rem;
}

a {
    color: #ba3925;
}

p {
    line-height: 1.6rem;
    margin-bottom: 1.6rem;
}

p i, p em {
    font-style: italic;
}

/* https://codex.wordpress.org/Styling_Images_in_Posts_and_Pages */
img.alignright { float:right; margin:0 0 1em 1em }
img.alignleft { float:left; margin:0 1em 1em 0 }
img.aligncenter { display: block; margin-left: auto; margin-right: auto }
a img.alignright { float:right; margin:0 0 1em 1em }
a img.alignleft { float:left; margin:0 1em 1em 0 }
a img.aligncenter { display: block; margin-left: auto; margin-right: auto }
figure.alignright { float:right; margin:0 0 1em 1em }
figure.alignleft { float:left; margin:0 1em 1em 0 }
figure.aligncenter { display: block; margin-left: auto; margin-right: auto }
```

### Content images

Images are an innovative component of digital books, so using them is crucial for most authors. We enable three different ways to include images in your book.

- **Load images from original URL** - It's the faster, and it will generete ligher book. However, compatibility with readers is highly reduced. Use it only when images do not play a critical role in your book.

- **Insert images into output file\*** - The image will be downloaded from your server and copied into the generated file. This is the most common way of including images inside an ebook. It's slower than loading images from the original URL but more compatible with readers. This is the default method.

- **Embed images into chapter content\*** - The image will be downloaded from your server, and it will be placed inside the content of your book as base64. If you are an standard user, there is no practical difference between this method and inserting images into the file.

\*These methods will automatically reescale images to 500px width to reduce the weight of the document.

If you are having trouble with images, check out our **FAQ** to get more details about [images not being displayed](/docs/faq/#images-are-not-displayed).

## Premium

If you click on "Premium" you will see that it allows you to unlock a mode that serves to expand the catalog of tools and features that this plugin has.

The features are activated when purchasing the MPL-Publisher Premium license from our homepage. Immediately, the MPL-Publisher team will send you a key that you must put in the field called: "License key". Then you must click the "Save" button (next to "Publish Ebook") to keep the changes.

From there, you will have a more extensive list of tools at your disposal to customize and create your ebook easier.

## Resources

Last but not least, you can go to the "Resources" tab, which is a section that will provide some guidance through the standards of large retailers.

It can be very helpful if you want to know what the world of ebooks and self-publishers is like and all that it takes to become an expert self-publisher on the internet.

This section has been designed to serve as a source of real background and knowledge that can be used as inspiration or guidance if you don't have ideas on how to get started on your book.

It's okay. You shouldn't feel forced to read all this section. However, if you find it interesting, you may be able to find some valuable information.