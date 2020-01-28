CodeDevils Docs
===============
[CodeDevils Docs](https://docs.codedevils.org/#/) (CDDocs) is the official public CodeDevils knowledge base, containing articles
detailing the different services/software tools we use. It uses [docsify](https://docsify.js.org/#/) to render markdown
pages into html.

## Contributing
All documentation pages are markdown, so anyone can contribute! It's very easy to contribute:

1. Fork the repository
2. Make any changes that you need to (see the folder structure below).
3. Create a merge request to the `dev` branch.
4. Make any edits requested by officers.
5. 2 officers must approve your merge request. Once approved, they will commit the merge and update
the website.

It's that easy!

### Folder Structure
CDDocs uses the same folder structure specified through the [docsify](https://docsify.js.org/#/) documentation. The root
of the project is the `public` folder:


|-- public/
|-- dreamhost/
|   |-- _sidebar.md
|   |-- email.md
|   |-- README.md
|-- fso/
|-- sundevilsync/
|-- static/

#### File/directory Defaults
Each folder represents a directory on the CDDocs website. For example, the `public/dreamhost` is the same as
`https://docs.codedevils.org/#/dreamhost/`. Each folder has a `README.md` file, which is treated as the default page
for that folder. 

#### Sidebar
Each folder has a `_sidebar.md` file which defines the left-side navigation menu. Every folder needs to
have this file to display the navigation menu, but it can be left blank and will default to 2 levels of depth
(corresponding to your titles on your markdown page, so it will show a table of contents for Header 1 and Header 2).
Without it, it uses the one from the last page visited, which isn't always wanted.

#### Static files
Static files not including markdown or HTML files go in the `static` directory. You can arrange the folder structure
inside of there to your page's needs within this directory. The idea is to keep the rest of the project clean of random
static files so that first-time users understand the folder structure.

## Additional Features
There are additional features added to the project that make it easier to publish pages.

### Optional HTML Pages
You have the option of including straight HTML pages in your documentation. HTML files will be left as-is and include
the `.html` file extension at the end of the directory.
### Image Shadowing
By default, all images have shadows. If you want to disable the shadow, you can add a `no-shadow` class to your image:
```html
<img class="no-shadow" alt="logo" src="https://drive.google.com/uc?id=1561NfmfYh7kaglPBZ3xzVYPuz5WvevKg">
```

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

### Image Accessory Blocks
Markdown by default does not support image and paragraphs placed beside each other. CDDocs has a plugin that allows you
to place a paragraph next to an image. The format is:
```markdown
<: The paragraph | <img alt_text="logo" src="https://mysite.com/static/myimage.png"> :>
```
_or_
```markdown
<: <img alt_text="logo" width="400" src="https://mysite.com/static/myimage.png"> | The paragraph :>
```
_Notes:_
- _The `<:` is custom to CDDocs and won't render as normal markdown._
- _The paragraph will take up the entire width if it can. Change the width attribute of the image to tell the parser how
big you want the paragraph to be._
- _This works on multiple tags in one document._

### Modification Date
The **Last modified** date you see at the top-right of every page is added automatically based on the date the rendered
markdown file was created.

## Contact Us
For questions not answered by this page, you can contact our webmaster(s) at webmaster@codedevils.org.
