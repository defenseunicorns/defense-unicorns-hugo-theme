# Defense Unicorns Hugo Theme

Forked from [Docsy](https://github.com/defenseunicorns/defense-unicorns-hugo-theme), a [Hugo](https://gohugo.io) theme for technical documentation.

## Prerequisites

The following are basic prerequisites for using this theme:

- Install a recent release of the Hugo "extended" version. If you install from
  the [Hugo release page](https://github.com/gohugoio/hugo/releases), make sure
  you download the `_extended` version which supports SCSS.

- Install `PostCSS` so that the site build can create the final CSS assets. You
  can install it locally by running the following commands from the root
  directory of your project:

  ```bash
  npm i -D autoprefixer postcss-cli
  ```

Add the theme as a Hugo module

```bash
hugo new site my-new-site
cd  my-new-site
hugo mod init github.com/me/my-new-site
hugo mod get github.com/defenseunicorns/defense-unicorns-hugo-theme
cat >> config.toml <<EOL
[module]
proxy = "direct"
[[module.imports]]
path = "github.com/defenseunicorns/defense-unicorns-hugo-theme"
[[module.imports]]
path = "github.com/defenseunicorns/defense-unicorns-hugo-theme/dependencies"
EOL
hugo server
```

## Example and Usage

You can find an example project that uses Docsy in the [Docsy Example Project
repo](https://github.com/defenseunicorns/defense-unicorns-hugo-theme-example).The Docsy Example Project is
hosted at [example.docsy.dev](https://example.docsy.dev). For
real-life examples of sites that use Docsy (and their source repos), see our
[Examples](https://www.docsy.dev/docs/examples/) page.

To use the Docsy theme for your own site:

- (Recommended) Use the [example
  project](https://github.com/defenseunicorns/defense-unicorns-hugo-theme-example), which includes the Docsy
  theme as a Hugo module, as a template to create your project. You can customize
  this pre-configured basic site into your themed site. [Learn
  more...](https://github.com/defenseunicorns/defense-unicorns-hugo-theme-example)

- Add Docsy to your existing Hugo site. You can
  add Docsy as a Hugo module, as a Git submodule, or clone the Docsy theme into your
  project.

See the [Get started guides](https://www.docsy.dev/docs/get-started/)
for details about the various usage options.

## Documentation

You can use Hugo to generate and serve a local copy of the user guide
(also useful for testing local theme changes), making sure you have installed
all the prerequisites listed above:

```console
git clone --depth 1 https://github.com/defenseunicorns/defense-unicorns-hugo-theme.git
cd defense-unicorns-hugo-theme/userguide/
npm install
npm run serve
```

## Contributing ![GitHub](https://img.shields.io/github/contributors/defenseunicorns/defense-unicorns-hugo-theme)

Please read
[CONTRIBUTING.md](https://github.com/defenseunicorns/defense-unicorns-hugo-theme/blob/main/CONTRIBUTING.md)
for details on our code of conduct, and the process for submitting pull requests
to us. See also the list of
[contributors](https://github.com/defenseunicorns/defense-unicorns-hugo-theme/graphs/contributors) who
participated in this project.

## License ![GitHub](https://img.shields.io/github/license/defenseunicorns/defense-unicorns-hugo-theme)

This project is licensed under the Apache License 2.0 - see the
[LICENSE.md](https://github.com/defenseunicorns/defense-unicorns-hugo-theme/blob/main/LICENSE) file for
details
