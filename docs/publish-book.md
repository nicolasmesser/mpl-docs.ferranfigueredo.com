---
sidebar_position: 5
description: Choose the output format and select the posts to publish. Click the "Publish Ebook" button to export in the selected format. The generation will start immediately.
---

# Publish your Ebook

## Export from Admin

To export your book, first, you must choose the output format (in the lower-left part from any of the sections). On the right side, select the posts or pages to publish (or you can click on the "content" checkbox to choose all items listed).

Finally, press the **"Download eBook"** button to export in the format you previously selected. The generation will start immediately.

![Publish your Ebook](https://ik.imagekit.io/ferranfigueredo/mpl-publisher/publish-1_BLZKXzgb6bI.gif)

:::note

By default, no posts or pages are selected, so you must choose the items to be included in your book (using the checkbox) and then click on the "publish Ebook" button. Otherwise, the plugin will not publish the book because no items have been selected

:::

And then you are done! You already have the book in the format you want, and you just have to follow the steps of the provider to which you want to upload your book to sell.

## Export with Shortcode

You can include a download widget in your pages or posts. Just add the `[mpl]` shortcode into your content. There are multiple available options for customize your widget.

![Export with Shortcode](https://ik.imagekit.io/ferranfigueredo/mpl-publisher/widget_QwbPOzlp6.png)

These options are:

- `[mpl book_id="XXX"][/mpl]` will export the defined book. You can find the **Book ID** in your [Book details](/docs/book-options/book-details/).
- `[mpl download="true"][/mpl]` will include a download button. The download will be based on your current saved settings.
- `[mpl external="true"][/mpl]` will include your ebook's external links. You can change these links on your [Metadata setings](/docs/book-options/book-details/#external-links).
- Modify your shortcode's title using `[mpl]Download My Book[/mpl]`
- Multiple options can be combined, so your shortcode may look like `[mpl book-id="XXX" download="true"][/mpl]`
