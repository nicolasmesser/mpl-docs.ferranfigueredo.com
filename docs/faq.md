---
sidebar_position: 7
description: FAQ - Common Errors
---

# FAQ - Common Errors

## Does this work with multisite?

The plugin (free and paid) works generating a book for every site of the network. In this sense, the plugin works with multisite. However, it does not allow you to create a unique book from all your network posts.

## Are the files created using a cloud service?

It will depend on the output format. If the chosen format is PDF or audiobook, it will be generated on the [MPL-Publisher](https://mpl-publisher.com) cloud service. If the output format is any other (EPUB, Word, etc.), it will be generated on your server. In these cases, no information will travel outside your servers.

## Some Word chapters are blank

The empty posts are related with HTML validation errors. Try checking the "Validate content before download" into the plugin settings and it will output all the HTML errors in your content. Once they are all fixed, generate again your Word document.

![Validate HTML errors](https://ik.imagekit.io/ferranfigueredo/mpl-publisher/faq-validate_q60jpzVuW.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1664090129640)

## Why the MOBI format has been removed?

We are aware that Amazon is no longer supporting MOBI files as of August 2022 so we've decided to made all the necessary changes on our plugin.

You can read more details in [the Amazon's announcement](https://www.amazon.com/gp/help/customer/display.html?nodeId=G5WYD9SAF7PGXRNA).

## I get the error message “Invalid parameters passed.”

One of the posts you are trying to convert to a Word document has an `a` tag without a proper `href` (note that `<a href="#">` also triggers the error). So you have to find in your selected posts which is the responsible one. Editing your link to something like `<a href="#section">` should fix the error.

Another way to find the link could be running a SQL query with the text you are looking for. For example, running something like `select * from wp_posts where post_content like '%href=""%' or post_content like '%href="#%"` should return the root cause.
