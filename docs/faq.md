---
sidebar_position: 7
description: 
---

# FAQ - Common Errors

## Does this work with multisite?

The plugin (free and paid) works generating a book for every site of the network. In this sense, the plugin works with multisite. However, it does not allow you to create a unique book from all your network posts.

## Are the books created using a cloud service?

It will depend on the output format. If the chosen format is PDF or audiobook, it will be generated on the MPL-Publisher cloud service. If the output format is any other (EPUB, Word, etc.), it will be generated on the client-server side. In these cases, no information will travel outside your servers.

## Why the MOBI format has been removed?

We are aware that Amazon is no longer supporting MOBI files as of August 2022 so we've decided to made all the necessary changes on our plugin.

## I get the error message “Invalid parameters passed.”

One of the posts you are trying to convert to a Word document has an `a` tag without a proper `href` (note that `<a href="#">` also triggers the error). So you have to find in your selected posts which is the responsible one. Editing your link to something like `<a href="#section">` should fix the error.

Another way to find the link could be running a SQL query with the text you are looking for. For example, running something like `select * from wp_posts where post_content like '%href=""%' or post_content like '%href="#%"` should return the root cause.
