---
title: "Airgapped Deploy Configuration"
linkTitle: "Airgapped Deploy"
description: >
  How to configure for disconnected environments
---

By default, this theme uses several CDNs to improve performance. However, these are unreachable in disconnected
environments. We want to keep the CDNs for performance reasons, but when delivering to an air-gapped environment, we
will need to use local resources.

## Configuring for air-gapped

In the `hugo.toml` configuration file, add the following setting

```toml
[params]
  airgapped = true
```

This will switch to using local dependencies.
