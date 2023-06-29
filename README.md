# Defense Unicorns Hugo Theme

Forked from [Docsy](https://github.com/defenseunicorns/defense-unicorns-hugo-theme), a [Hugo](https://gohugo.io) theme
for technical documentation.

## Prerequisites

The following are basic prerequisites for using this theme:

- Install a recent release of the Hugo "extended" version. If you install from the
  [Hugo release page](https://github.com/gohugoio/hugo/releases), make sure you download the `_extended` version which
  supports SCSS.

- Install `PostCSS` so that the site build can create the final CSS assets. You can install it locally by running the
  following commands from the root directory of your project:

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

## Documentation

You can use Hugo to generate and serve a local copy of the user guide (also useful for testing local theme changes),
making sure you have installed all the prerequisites listed above:

```console
git clone --depth 1 https://github.com/defenseunicorns/defense-unicorns-hugo-theme.git
cd defense-unicorns-hugo-theme/userguide/
npm install
npm run serve
```

## Contributing ![GitHub](https://img.shields.io/github/contributors/defenseunicorns/defense-unicorns-hugo-theme)

Please read [CONTRIBUTING.md](https://github.com/defenseunicorns/defense-unicorns-hugo-theme/blob/main/CONTRIBUTING.md)
for details on our code of conduct, and the process for submitting pull requests to us. See also the list of
[contributors](https://github.com/defenseunicorns/defense-unicorns-hugo-theme/graphs/contributors) who participated in
this project.

## License ![GitHub](https://img.shields.io/github/license/defenseunicorns/defense-unicorns-hugo-theme)

This project is licensed under the Apache License 2.0 - see the
[LICENSE.md](https://github.com/defenseunicorns/defense-unicorns-hugo-theme/blob/main/LICENSE) file for details
