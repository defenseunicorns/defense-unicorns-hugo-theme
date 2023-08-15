---
title: "Airgapped Deploy Configuration"
linkTitle: "Airgapped Deploy"
weight: -1
description: >
  How to configure for disconnected environments
---

By default, this theme uses several CDNs to improve performance. However, these are unreachable in disconnected
environments. We want to keep the CDNs for performance reasons, but when delivering to an air-gapped environment, we
will need to use local resources.

## Configuring for air-gapped

Install the following dependencies that provide the scripts

```bash
npm i -D jquery lunr markmap-autoloader mermaid redoc
```

In your site's `hugo.toml` configuration file, add the following setting to the `[params]` section:

```toml
[params]
  airgapped = true
```

Then mount them from node_modules to the site's assets

```toml
[[module.mounts]]
  source = "node_modules/redoc/bundles"
  target = "assets/js/redoc"

[[module.mounts]]
  source = "node_modules/mermaid/dist"
  target = "assets/js/mermaid"

[[module.mounts]]
  source = "node_modules/markmap-autoloader/dist"
  target = "assets/js/markmap-autoloader"

[[module.mounts]]
  source = "node_modules/jquery/dist"
  target = "assets/js/jquery"

[[module.mounts]]
  source = "node_modules/lunr"
  target = "assets/js/lunr"
  ```

This will switch to using local dependencies
