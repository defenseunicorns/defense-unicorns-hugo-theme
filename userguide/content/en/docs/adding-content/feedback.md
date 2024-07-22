---
title: Analytics and SEO
date: 2019-06-05
description: >-
  Add Google Analytics tracking to your site and learn
  about the page description meta tag.
weight: 8
---

## Adding Analytics

The theme builds upon [Hugo's support for Google Analytics][hugo-ga],
which Hugo provides through [internal templates][]. Once you set up analytics as
described below, usage information for your site (such as page views) is sent to
your [Google Analytics][] account.

### Prerequisites

You will need an **analytics ID** for your website before proceeding
(technically it's called a measurement ID or property ID but we'll use the term
"analytics ID" in this guide). If you don't have one, see the **How to get
started** section of [Introducing Google Analytics 4 (GA4)][ga4-intro].

{{% alert-tip %}}

  Your project's **analytics ID** is a string that starts with `G-` (a GA4
  measurement ID) or `UA-` (a universal analytics property ID).

{{% /alert-tip %}}

### Setup

Enable Google Analytics by adding your project's analytics ID to the site
configuration file. For details, see [Configure Google Analytics][https://gohugo.io/templates/embedded/#google-analytics].

By default, this uses the [gtag.js][] analytics library for both GA4 (which
_requires_ `gtag.js`) and Universal Analytics (UA) site tags. If you prefer using
the older `analytics.js` library for your UA site tag, then set
`params.disableGtagForUniversalAnalytics` to `true` in your project's [configuration file].

You can configure your project's analytics ID by setting `services.googleAnalytics.id` in the Hugo configuration.

```toml
[services.googleAnalytics]
    id = 'G-12345'
```

{{% alert-note %}}

  Analytics are enabled _only_ for **production** builds (called "environments"
  in Hugo terminology). For information about Hugo environments and how to set
  them, see the following [discussion][].

  [discussion]: https://discourse.gohugo.io/t/what-does-setting-hugo-env-to-production-do/24669/2

{{% /alert-note %}}

{{< tabpane persistLang=false >}}
{{< tab header="Front matter:" disabled=true />}}
{{< tab header="toml" lang="toml" >}}
+++
hide_feedback = true
+++
{{< /tab >}}
{{< tab header="yaml" lang="yaml" >}}
---

hide_feedback: true
---

{{< /tab >}}
{{< tab header="json" lang="json" >}}
{
    "hide_feedback": true
}
{{< /tab >}}
{{< /tabpane >}}

### Disable feedback on all pages

Set `params.ui.feedback.enable` to `false` or delete the value in
`hugo.toml`/`hugo.yaml`/`hugo.json`:

{{< tabpane persistLang=false >}}
{{< tab header="Configuration file:" disabled=true />}}
{{< tab header="hugo.toml" lang="toml" >}}
[params.ui.feedback]
enable = false
{{< /tab >}}
{{< tab header="hugo.yaml" lang="yaml" >}}
params:
  ui:
    feedback:
      enable: false
{{< /tab >}}
{{< tab header="hugo.json" lang="json" >}}
{
  "params": {
    "ui": {
      "feedback": {
        "enable": false
      }
    }
  }
}
{{< /tab >}}
{{< /tabpane >}}

## Search Engine Optimization meta tags

To learn how to optimize your site for SEO see,
[Search Engine Optimization (SEO) Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide).

Google
[recommends](https://developers.google.com/search/docs/beginner/seo-starter-guide?hl=en%2F#descriptionmeta)
using the `description` meta tag to tell search engines what your page is about.
For each generated page, The theme will set the content of the meta `description` by
using the first of the following that is defined:

- The page `description` [frontmatter field]({{< ref
"content#page-frontmatter" >}})
- For non-index pages, the page [summary][], as computed by Hugo
- The site description taken from the [site `params`][]

For the template code used to perform this computation, see
[layouts/partials/page-description.html][].

Add more meta tags as needed to your project's copy of the `head-end.html`
partial. For details, see [Customizing templates]({{< ref "lookandfeel#customizing-templates"
>}}).

[ga4-intro]: https://support.google.com/analytics/answer/1042508
[Google Analytics]: https://analytics.google.com/analytics/web/
[gtag.js]: https://support.google.com/analytics/answer/10220869
[hugo-ga]: https://gohugo.io/templates/internal/#google-analytics
[internal templates]: https://gohugo.io/templates/internal/
[layouts/partials/page-description.html]: https://github.com/defenseunicorns/defense-unicorns-hugo-theme/blob/main/layouts/partials/page-description.html
[site `params`]: https://gohugo.io/variables/site/#the-siteparams-variable
[summary]: https://gohugo.io/content-management/summaries/
[configuration file]: https://gohugo.io/getting-started/configuration/#configuration-file
