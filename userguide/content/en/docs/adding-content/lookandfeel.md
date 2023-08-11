---
title: Look and Feel
date: 2017-01-05
weight: 2
description: Customize colors, fonts, code highlighting, and more for your site.
spelling: cSpell:ignore wordmark docsy
---

By default, a site using Docsy has the theme's default fonts, colors, and general look and feel. However, if you want your own color scheme (and you probably will!) you can very easily override the theme defaults with your own project-specific values - Hugo will look in your project files first when looking for information to build your site. And because Docsy uses Bootstrap 4 and SCSS for styling, you can override just single values (such as project colors and fonts) in its special SCSS project variables file, or do more serious customization by creating your own styles.

Docsy also provides options for styling your code blocks, using Chroma for highlighting.

## Project style files

To customize your project's look and feel, create your own version of either or both of the following
Docsy placeholder files (note the **`_project.scss`** suffixes):

- [`assets/scss/`**`_variables_project.scss`**][_variables_project] is where you add project-specific definitions of theme variables such as [site colors](#site-colors), as well as any additional Bootstrap variable values you want to set. You can find a list of Docsy's theme variables and their default values in [<code>assets/scss/<strong>_variables.scss</strong></code>][_variables].  For information about other Bootstrap 4 variables, see [Variable defaults][] and Bootstrap's [v4-dev/scss/_variables.scss][] file.
- [`assets/scss/`**`_styles_project.scss`**][_styles_project] is where you can add your own custom SCSS styles, including overriding any of the styles in Docsy's theme SCSS files.

[_styles_project]: https://github.com/defenseunicorns/defense-unicorns-hugo-theme/blob/main/assets/scss/_styles_project.scss
[_variables_project]: https://github.com/defenseunicorns/defense-unicorns-hugo-theme/blob/main/assets/scss/_variables_project.scss
[_variables]: https://github.com/defenseunicorns/defense-unicorns-hugo-theme/blob/main/assets/scss/_variables.scss
[v4-dev/scss/_variables.scss]: https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss
[Variable defaults]: https://getbootstrap.com/docs/4.1/getting-started/theming/#variable-defaults

{{% alert-tip %}}
PostCSS (autoprefixing of CSS browser-prefixes) is not enabled when running in server mode (it is a little slow), so Chrome is the recommended choice for development.
{{% /alert-tip %}}

## Site colors

To customize your site's colors, add SCSS variable overrides to
`assets/scss/_variables_project.scss`. For example, you can set the primary and
secondary site colors as follows:

```scss
$primary: #390040;
$secondary: #A23B72;
```

The theme has features such as gradient backgrounds (`$enable-gradients`) and
shadows (`$enable-shadows`) enabled by default. These can also be toggled in
your project variables file by setting the variables to `false`.

## Fonts

The theme uses [Roboto](https://fonts.google.com/specimen/Roboto) as its primary font. To disable Google Fonts and use a system font, set this SCSS variable in `assets/scss/_variables_project.scss`:

```scss
$td-enable-google-fonts: false;
```

To configure another Google Font:

```scss
$google_font_name: "Roboto";
$google_font_family: "Roboto:300,300i,400,400i,700,700i";
```

Note that if you decide to go with a font with different weights (in the built-in configuration this is `300` (light), `400` (medium) and `700` (bold)), you also need to adjust the weight related variables, i.e. variables starting with `$font-weight-`.

## CSS utilities

For documentation of available CSS utility classes, see the [Bootstrap Documentation](https://getbootstrap.com/). This theme adds very little on its own in this area. However, we have added some color state CSS classes that can be useful in a dynamic context:

- `.-bg-<color>`
- `.-text-<color>`

You can use these classes, for example, to style your text in an appropriate color when you don't know if the `primary` color is dark or light, to ensure proper color contrast. They are also useful when you receive the color code as a [shortcode](/docs/adding-content/shortcodes/) parameter.

The value of `<color>` can be any of the color names, `primary`, `white`, `dark`, `warning`, `light`, `success`, `300`, `blue`, `orange` etc.

When you use `.-bg-<color>`, the text colors will be adjusted to get proper contrast:

```html
<div class="-bg-primary p-3 display-4">Background: Primary</div>
<div class="-bg-200 p-3 display-4">Background: Gray 200</div>
```

<div class="-bg-primary p-3 display-4 w-75">Background: Primary</div>
<div class="-bg-200 p-3 display-4 mb-5 w-50 w-75">Background: Gray 200</div>

`.-text-<color>` sets the text color only:

```html
<div class="-text-blue pt-3 display-4">Text: Blue</div>
```

<div class="-text-blue pt-3 display-4">Text: Blue</div>

## Code highlighting with Chroma

With Hugo version 0.60 and higher, you can choose from a range of code block highlight and colour styles using [Chroma](https://github.com/alecthomas/chroma) that are applied to your fenced code blocks by default. If you copied a recent `config.toml` your site uses Tango (like this site), otherwise the Hugo default is Monokai. You can switch to any of the [available Chroma styles](https://xyproto.github.io/splash/docs/all.html) (including our Docsy default Tango) using your `hugo.toml`/`hugo.yaml`/`hugo.json`:

{{< tabpane persistLang=false >}}
{{< tab header="Configuration file:" disabled=true />}}
{{< tab header="hugo.toml" lang="toml" >}}
[markup]
  [markup.goldmark]
    [markup.goldmark.renderer]
      unsafe = true
  [markup.highlight]
      # See a complete list of available styles at <https://xyproto.github.io/splash/docs/all.html>
      style = "tango"
{{< /tab >}}
{{< tab header="hugo.yaml" lang="yaml" >}}
markup:
  goldmark:
    renderer:
      unsafe: true
  highlight:
    style: tango
{{< /tab >}}
{{< tab header="hugo.json" lang="json" >}}
{
  "markup": {
    "goldmark": {
      "renderer": {
        "unsafe": true
      }
    },
    "highlight": {
      "style": "tango"
    }
  }
}
{{< /tab >}}
{{< /tabpane >}}

By default code highlighting styles are not applied to code blocks without a specified language, instead you get Docsy's default style of grey with black text. If you would like the code highlighting style to apply to all code blocks, even without a language, uncomment or add the following line under `[markup.highlight]` in your `hugo.toml`/`hugo.yaml`/`hugo.json`.

{{< tabpane persistLang=false >}}
{{< tab header="Configuration file:" disabled=true />}}
{{< tab header="hugo.toml" lang="toml" >}}

# Uncomment if you want your chosen highlight style used for code blocks without a specified language

guessSyntax = true
{{< /tab >}}
{{< tab header="hugo.yaml" lang="yaml" >}}
guessSyntax: true
{{< /tab >}}
{{< tab header="hugo.json" lang="json" >}}
"guessSyntax": true
{{< /tab >}}
{{< /tabpane >}}

If you are using a Docsy version later than `0.6.0`, the code blocks show a
"Copy to clipboard" icon in the top right-hand corner. To disable this
functionality set `disable_click2copy_chroma` to `true` in your configuration
file:

You can find out more about code highlighting in Hugo with Chroma in [Syntax Highlighting](https://gohugo.io/content-management/syntax-highlighting/).
