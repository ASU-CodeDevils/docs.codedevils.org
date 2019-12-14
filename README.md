CodeDevils Docs
===============
[CodeDevils Docs](https://docs.codedevils.org/#/) is the official public CodeDevils knowledge base, containing articles
detailing the different services/software tools we use. It uses [docsify](https://docsify.js.org/#/) to render markdown
pages into html.

## Contributing
To publish a page on the website, simply create a markdown and send it as an email attachment to 
<a href="mailto:webmaster@codedevils.org?subject=Publish Page to CD Docs">webmaster@codedevils.org</a>.

## Additional Features
There are additional features added to the project that make it easier to publish pages.
### Theme-minded Blocks
You can add `.light-theme` or `.dark-theme` classes to your inline html tags to make your html blocks theme-specific.
Light theme is the theme with a white background, and dark theme is the theme with a dark grey background. A common
example is for changing the logo. An example of changing the logo:
```markdown
<img class="no-shadow light-theme" src="https://www.codedevils.org/public/static/home/img/logo.png" alt="logo" width="400">
<img class="no-shadow dark-theme" src="https://www.codedevils.org/public/static/home/img/logo-light.png" alt="logo" width="400">
```
So for the light theme:

<img src="https://drive.google.com/uc?id=1561NfmfYh7kaglPBZ3xzVYPuz5WvevKg" alt="logo-light-example" width="400">

And for dark theme:

<img src="https://drive.google.com/uc?id=1sQhF9jRfuyh_H-Luf_fQgxM4WR_Aah2h" alt="logo-dark-example" width="400">

### Modification Date
The **Last modified** date you see at the top-right of every page is added automatically based on the date the rendered
markdown file was created.
