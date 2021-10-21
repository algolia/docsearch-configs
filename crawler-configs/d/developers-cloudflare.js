new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://developers.cloudflare.com/analytics/",
    "https://developers.cloudflare.com/",
    "https://developers.cloudflare.com/api/",
    "https://developers.cloudflare.com/api-security/",
    "https://developers.cloudflare.com/automatic-platform-optimization/",
    "https://developers.cloudflare.com/bots/",
    "https://developers.cloudflare.com/byoip/",
    "https://developers.cloudflare.com/cache/",
    "https://developers.cloudflare.com/client-ip-geolocation/",
    "https://developers.cloudflare.com/cloudflare-one/",
    "https://developers.cloudflare.com/1.1.1.1/",
    "https://developers.cloudflare.com/distributed-web/",
    "https://developers.cloudflare.com/firewall/",
    "https://developers.cloudflare.com/fundamentals/",
    "https://developers.cloudflare.com/http3/",
    "https://developers.cloudflare.com/images/",
    "https://developers.cloudflare.com/load-balancing/",
    "https://developers.cloudflare.com/logs/",
    "https://developers.cloudflare.com/magic-transit/",
    "https://developers.cloudflare.com/magic-wan/",
    "https://developers.cloudflare.com/network-interconnect/",
    "https://developers.cloudflare.com/pages/",
    "https://developers.cloudflare.com/page-shield/",
    "https://developers.cloudflare.com/partners/",
    "https://developers.cloudflare.com/railgun/",
    "https://developers.cloudflare.com/randomness-beacon/",
    "https://developers.cloudflare.com/registrar/",
    "https://developers.cloudflare.com/rules/",
    "https://developers.cloudflare.com/ruleset-engine/",
    "https://developers.cloudflare.com/spectrum/",
    "https://developers.cloudflare.com/ssl/",
    "https://developers.cloudflare.com/stream/",
    "https://developers.cloudflare.com/terraform/",
    "https://developers.cloudflare.com/time-services/",
    "https://developers.cloudflare.com/waf/",
    "https://developers.cloudflare.com/waiting-room/",
    "https://developers.cloudflare.com/warp-client/",
    "https://developers.cloudflare.com/workers/",
  ],
  renderJavaScript: true,
  sitemaps: [
    "https://developers.cloudflare.com/analytics/sitemap.xml",
    "https://developers.cloudflare.com/api/sitemap.xml",
    "https://developers.cloudflare.com/api-security/sitemap.xml",
    "https://developers.cloudflare.com/automatic-platform-optimization/sitemap.xml",
    "https://developers.cloudflare.com/bots/sitemap.xml",
    "https://developers.cloudflare.com/byoip/sitemap.xml",
    "https://developers.cloudflare.com/cache/sitemap.xml",
    "https://developers.cloudflare.com/client-ip-geolocation/sitemap.xml",
    "https://developers.cloudflare.com/cloudflare-one/sitemap.xml",
    "https://developers.cloudflare.com/1.1.1.1/sitemap.xml",
    "https://developers.cloudflare.com/distributed-web/sitemap.xml",
    "https://developers.cloudflare.com/firewall/sitemap.xml",
    "https://developers.cloudflare.com/fundamentals/sitemap.xml",
    "https://developers.cloudflare.com/http3/sitemap.xml",
    "https://developers.cloudflare.com/images/sitemap.xml",
    "https://developers.cloudflare.com/load-balancing/sitemap.xml",
    "https://developers.cloudflare.com/logs/sitemap.xml",
    "https://developers.cloudflare.com/magic-transit/sitemap.xml",
    "https://developers.cloudflare.com/magic-wan/sitemap.xml",
    "https://developers.cloudflare.com/network-interconnect/sitemap.xml",
    "https://developers.cloudflare.com/pages/sitemap.xml",
    "https://developers.cloudflare.com/page-shield/sitemap.xml",
    "https://developers.cloudflare.com/partners/sitemap.xml",
    "https://developers.cloudflare.com/railgun/sitemap.xml",
    "https://developers.cloudflare.com/randomness-beacon/sitemap.xml",
    "https://developers.cloudflare.com/registrar/sitemap.xml",
    "https://developers.cloudflare.com/rules/sitemap.xml",
    "https://developers.cloudflare.com/ruleset-engine/sitemap.xml",
    "https://developers.cloudflare.com/spectrum/sitemap.xml",
    "https://developers.cloudflare.com/ssl/sitemap.xml",
    "https://developers.cloudflare.com/stream/sitemap.xml",
    "https://developers.cloudflare.com/terraform/sitemap.xml",
    "https://developers.cloudflare.com/time-services/sitemap.xml",
    "https://developers.cloudflare.com/waf/sitemap.xml",
    "https://developers.cloudflare.com/warp-client/sitemap.xml",
    "https://developers.cloudflare.com/waiting-room/sitemap.xml",
    "https://developers.cloudflare.com/workers/sitemap.xml",
  ],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://developers.cloudflare.com/**"],
  schedule: "at 15:00 on Tuesday",
  actions: [
    {
      indexName: "developers-cloudflare",
      pathsToMatch: ["https://developers.cloudflare.com/analytics/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "h1 + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".DocsContent h2",
            content:
              ".DocsContent p, .DocsContent li, .DocsContent tbody tr > td",
            lvl0: {
              selectors: ".DocsContent h1",
            },
            lvl2: ".DocsContent h3",
            lvl3: ".DocsContent h4",
            lvl4: ".DocsContent h5",
            lvl5: ".DocsContent h6",
            project: {
              defaultValue: ["analytics"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "developers-cloudflare",
      pathsToMatch: ["https://developers.cloudflare.com/api/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "h1 + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".DocsContent h2",
            content:
              ".DocsContent p, .DocsContent li, .DocsContent tbody tr > td",
            lvl0: {
              selectors: ".DocsContent h1",
            },
            lvl2: ".DocsContent h3",
            lvl3: ".DocsContent h4",
            lvl4: ".DocsContent h5",
            lvl5: ".DocsContent h6",
            project: {
              defaultValue: ["api"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "developers-cloudflare",
      pathsToMatch: ["https://developers.cloudflare.com/api-security/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "h1 + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".DocsContent h2",
            content:
              ".DocsContent p, .DocsContent li, .DocsContent tbody tr > td",
            lvl0: {
              selectors: ".DocsContent h1",
            },
            lvl2: ".DocsContent h3",
            lvl3: ".DocsContent h4",
            lvl4: ".DocsContent h5",
            lvl5: ".DocsContent h6",
            project: {
              defaultValue: ["api-security"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "developers-cloudflare",
      pathsToMatch: [
        "https://developers.cloudflare.com/automatic-platform-optimization/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "h1 + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".DocsContent h2",
            content:
              ".DocsContent p, .DocsContent li, .DocsContent tbody tr > td",
            lvl0: {
              selectors: ".DocsContent h1",
            },
            lvl2: ".DocsContent h3",
            lvl3: ".DocsContent h4",
            lvl4: ".DocsContent h5",
            lvl5: ".DocsContent h6",
            project: {
              defaultValue: ["automatic-platform-optimization"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "developers-cloudflare",
      pathsToMatch: ["https://developers.cloudflare.com/bots/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "h1 + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".DocsContent h2",
            content:
              ".DocsContent p, .DocsContent li, .DocsContent tbody tr > td",
            lvl0: {
              selectors: ".DocsContent h1",
            },
            lvl2: ".DocsContent h3",
            lvl3: ".DocsContent h4",
            lvl4: ".DocsContent h5",
            lvl5: ".DocsContent h6",
            project: {
              defaultValue: ["bots"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "developers-cloudflare",
      pathsToMatch: ["https://developers.cloudflare.com/byoip/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "h1 + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".DocsContent h2",
            content:
              ".DocsContent p, .DocsContent li, .DocsContent tbody tr > td",
            lvl0: {
              selectors: ".DocsContent h1",
            },
            lvl2: ".DocsContent h3",
            lvl3: ".DocsContent h4",
            lvl4: ".DocsContent h5",
            lvl5: ".DocsContent h6",
            project: {
              defaultValue: ["byoip"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "developers-cloudflare",
      pathsToMatch: ["https://developers.cloudflare.com/cache/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "h1 + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".DocsContent h2",
            content:
              ".DocsContent p, .DocsContent li, .DocsContent tbody tr > td",
            lvl0: {
              selectors: ".DocsContent h1",
            },
            lvl2: ".DocsContent h3",
            lvl3: ".DocsContent h4",
            lvl4: ".DocsContent h5",
            lvl5: ".DocsContent h6",
            project: {
              defaultValue: ["cache"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "developers-cloudflare",
      pathsToMatch: [
        "https://developers.cloudflare.com/client-ip-geolocation/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "h1 + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".DocsContent h2",
            content:
              ".DocsContent p, .DocsContent li, .DocsContent tbody tr > td",
            lvl0: {
              selectors: ".DocsContent h1",
            },
            lvl2: ".DocsContent h3",
            lvl3: ".DocsContent h4",
            lvl4: ".DocsContent h5",
            lvl5: ".DocsContent h6",
            project: {
              defaultValue: ["client-ip-geolocation"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "developers-cloudflare",
      pathsToMatch: ["https://developers.cloudflare.com/cloudflare-one/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "h1 + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".DocsContent h2",
            content:
              ".DocsContent p, .DocsContent li, .DocsContent tbody tr > td",
            lvl0: {
              selectors: ".DocsContent h1",
            },
            lvl2: ".DocsContent h3",
            lvl3: ".DocsContent h4",
            lvl4: ".DocsContent h5",
            lvl5: ".DocsContent h6",
            project: {
              defaultValue: ["cloudflare-one"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "developers-cloudflare",
      pathsToMatch: ["https://developers.cloudflare.com/1.1.1.1/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "h1 + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".DocsContent h2",
            content:
              ".DocsContent p, .DocsContent li, .DocsContent tbody tr > td",
            lvl0: {
              selectors: ".DocsContent h1",
            },
            lvl2: ".DocsContent h3",
            lvl3: ".DocsContent h4",
            lvl4: ".DocsContent h5",
            lvl5: ".DocsContent h6",
            project: {
              defaultValue: ["1.1.1.1"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "developers-cloudflare",
      pathsToMatch: ["https://developers.cloudflare.com/distributed-web/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "h1 + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".DocsContent h2",
            content:
              ".DocsContent p, .DocsContent li, .DocsContent tbody tr > td",
            lvl0: {
              selectors: ".DocsContent h1",
            },
            lvl2: ".DocsContent h3",
            lvl3: ".DocsContent h4",
            lvl4: ".DocsContent h5",
            lvl5: ".DocsContent h6",
            project: {
              defaultValue: ["distributed-web"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "developers-cloudflare",
      pathsToMatch: ["https://developers.cloudflare.com/firewall/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "h1 + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".DocsContent h2",
            content:
              ".DocsContent p, .DocsContent li, .DocsContent tbody tr > td",
            lvl0: {
              selectors: ".DocsContent h1",
            },
            lvl2: ".DocsContent h3",
            lvl3: ".DocsContent h4",
            lvl4: ".DocsContent h5",
            lvl5: ".DocsContent h6",
            project: {
              defaultValue: ["firewall"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "developers-cloudflare",
      pathsToMatch: ["https://developers.cloudflare.com/fundamentals/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "h1 + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".DocsContent h2",
            content:
              ".DocsContent p, .DocsContent li, .DocsContent tbody tr > td",
            lvl0: {
              selectors: ".DocsContent h1",
            },
            lvl2: ".DocsContent h3",
            lvl3: ".DocsContent h4",
            lvl4: ".DocsContent h5",
            lvl5: ".DocsContent h6",
            project: {
              defaultValue: ["fundamentals"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "developers-cloudflare",
      pathsToMatch: ["https://developers.cloudflare.com/http3/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "h1 + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".DocsContent h2",
            content:
              ".DocsContent p, .DocsContent li, .DocsContent tbody tr > td",
            lvl0: {
              selectors: ".DocsContent h1",
            },
            lvl2: ".DocsContent h3",
            lvl3: ".DocsContent h4",
            lvl4: ".DocsContent h5",
            lvl5: ".DocsContent h6",
            project: {
              defaultValue: ["http3"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "developers-cloudflare",
      pathsToMatch: ["https://developers.cloudflare.com/images/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "h1 + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".DocsContent h2",
            content:
              ".DocsContent p, .DocsContent li, .DocsContent tbody tr > td",
            lvl0: {
              selectors: ".DocsContent h1",
            },
            lvl2: ".DocsContent h3",
            lvl3: ".DocsContent h4",
            lvl4: ".DocsContent h5",
            lvl5: ".DocsContent h6",
            project: {
              defaultValue: ["images"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "developers-cloudflare",
      pathsToMatch: ["https://developers.cloudflare.com/load-balancing/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "h1 + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".DocsContent h2",
            content:
              ".DocsContent p, .DocsContent li, .DocsContent tbody tr > td",
            lvl0: {
              selectors: ".DocsContent h1",
            },
            lvl2: ".DocsContent h3",
            lvl3: ".DocsContent h4",
            lvl4: ".DocsContent h5",
            lvl5: ".DocsContent h6",
            project: {
              defaultValue: ["load-balancing"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "developers-cloudflare",
      pathsToMatch: ["https://developers.cloudflare.com/logs/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "h1 + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".DocsContent h2",
            content:
              ".DocsContent p, .DocsContent li, .DocsContent tbody tr > td",
            lvl0: {
              selectors: ".DocsContent h1",
            },
            lvl2: ".DocsContent h3",
            lvl3: ".DocsContent h4",
            lvl4: ".DocsContent h5",
            lvl5: ".DocsContent h6",
            project: {
              defaultValue: ["logs"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "developers-cloudflare",
      pathsToMatch: ["https://developers.cloudflare.com/magic-transit/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "h1 + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".DocsContent h2",
            content:
              ".DocsContent p, .DocsContent li, .DocsContent tbody tr > td",
            lvl0: {
              selectors: ".DocsContent h1",
            },
            lvl2: ".DocsContent h3",
            lvl3: ".DocsContent h4",
            lvl4: ".DocsContent h5",
            lvl5: ".DocsContent h6",
            project: {
              defaultValue: ["magic-transit"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "developers-cloudflare",
      pathsToMatch: ["https://developers.cloudflare.com/magic-wan/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "h1 + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".DocsContent h2",
            content:
              ".DocsContent p, .DocsContent li, .DocsContent tbody tr > td",
            lvl0: {
              selectors: ".DocsContent h1",
            },
            lvl2: ".DocsContent h3",
            lvl3: ".DocsContent h4",
            lvl4: ".DocsContent h5",
            lvl5: ".DocsContent h6",
            project: {
              defaultValue: ["magic-wan"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "developers-cloudflare",
      pathsToMatch: [
        "https://developers.cloudflare.com/network-interconnect/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "h1 + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".DocsContent h2",
            content:
              ".DocsContent p, .DocsContent li, .DocsContent tbody tr > td",
            lvl0: {
              selectors: ".DocsContent h1",
            },
            lvl2: ".DocsContent h3",
            lvl3: ".DocsContent h4",
            lvl4: ".DocsContent h5",
            lvl5: ".DocsContent h6",
            project: {
              defaultValue: ["network-interconnect"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "developers-cloudflare",
      pathsToMatch: ["https://developers.cloudflare.com/pages/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "h1 + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".DocsContent h2",
            content:
              ".DocsContent p, .DocsContent li, .DocsContent tbody tr > td",
            lvl0: {
              selectors: ".DocsContent h1",
            },
            lvl2: ".DocsContent h3",
            lvl3: ".DocsContent h4",
            lvl4: ".DocsContent h5",
            lvl5: ".DocsContent h6",
            project: {
              defaultValue: ["pages"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "developers-cloudflare",
      pathsToMatch: ["https://developers.cloudflare.com/page-shield/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "h1 + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".DocsContent h2",
            content:
              ".DocsContent p, .DocsContent li, .DocsContent tbody tr > td",
            lvl0: {
              selectors: ".DocsContent h1",
            },
            lvl2: ".DocsContent h3",
            lvl3: ".DocsContent h4",
            lvl4: ".DocsContent h5",
            lvl5: ".DocsContent h6",
            project: {
              defaultValue: ["page-shield"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "developers-cloudflare",
      pathsToMatch: ["https://developers.cloudflare.com/partners/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "h1 + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".DocsContent h2",
            content:
              ".DocsContent p, .DocsContent li, .DocsContent tbody tr > td",
            lvl0: {
              selectors: ".DocsContent h1",
            },
            lvl2: ".DocsContent h3",
            lvl3: ".DocsContent h4",
            lvl4: ".DocsContent h5",
            lvl5: ".DocsContent h6",
            project: {
              defaultValue: ["partners"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "developers-cloudflare",
      pathsToMatch: ["https://developers.cloudflare.com/railgun/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "h1 + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".DocsContent h2",
            content:
              ".DocsContent p, .DocsContent li, .DocsContent tbody tr > td",
            lvl0: {
              selectors: ".DocsContent h1",
            },
            lvl2: ".DocsContent h3",
            lvl3: ".DocsContent h4",
            lvl4: ".DocsContent h5",
            lvl5: ".DocsContent h6",
            project: {
              defaultValue: ["railgun"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "developers-cloudflare",
      pathsToMatch: ["https://developers.cloudflare.com/randomness-beacon/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "h1 + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".DocsContent h2",
            content:
              ".DocsContent p, .DocsContent li, .DocsContent tbody tr > td",
            lvl0: {
              selectors: ".DocsContent h1",
            },
            lvl2: ".DocsContent h3",
            lvl3: ".DocsContent h4",
            lvl4: ".DocsContent h5",
            lvl5: ".DocsContent h6",
            project: {
              defaultValue: ["randomness-beacon"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "developers-cloudflare",
      pathsToMatch: ["https://developers.cloudflare.com/registrar/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "h1 + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".DocsContent h2",
            content:
              ".DocsContent p, .DocsContent li, .DocsContent tbody tr > td",
            lvl0: {
              selectors: ".DocsContent h1",
            },
            lvl2: ".DocsContent h3",
            lvl3: ".DocsContent h4",
            lvl4: ".DocsContent h5",
            lvl5: ".DocsContent h6",
            project: {
              defaultValue: ["registrar"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "developers-cloudflare",
      pathsToMatch: ["https://developers.cloudflare.com/rules/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "h1 + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".DocsContent h2",
            content:
              ".DocsContent p, .DocsContent li, .DocsContent tbody tr > td",
            lvl0: {
              selectors: ".DocsContent h1",
            },
            lvl2: ".DocsContent h3",
            lvl3: ".DocsContent h4",
            lvl4: ".DocsContent h5",
            lvl5: ".DocsContent h6",
            project: {
              defaultValue: ["rules"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "developers-cloudflare",
      pathsToMatch: ["https://developers.cloudflare.com/ruleset-engine/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "h1 + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".DocsContent h2",
            content:
              ".DocsContent p, .DocsContent li, .DocsContent tbody tr > td",
            lvl0: {
              selectors: ".DocsContent h1",
            },
            lvl2: ".DocsContent h3",
            lvl3: ".DocsContent h4",
            lvl4: ".DocsContent h5",
            lvl5: ".DocsContent h6",
            project: {
              defaultValue: ["ruleset-engine"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "developers-cloudflare",
      pathsToMatch: ["https://developers.cloudflare.com/spectrum/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "h1 + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".DocsContent h2",
            content:
              ".DocsContent p, .DocsContent li, .DocsContent tbody tr > td",
            lvl0: {
              selectors: ".DocsContent h1",
            },
            lvl2: ".DocsContent h3",
            lvl3: ".DocsContent h4",
            lvl4: ".DocsContent h5",
            lvl5: ".DocsContent h6",
            project: {
              defaultValue: ["spectrum"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "developers-cloudflare",
      pathsToMatch: ["https://developers.cloudflare.com/ssl/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "h1 + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".DocsContent h2",
            content:
              ".DocsContent p, .DocsContent li, .DocsContent tbody tr > td",
            lvl0: {
              selectors: ".DocsContent h1",
            },
            lvl2: ".DocsContent h3",
            lvl3: ".DocsContent h4",
            lvl4: ".DocsContent h5",
            lvl5: ".DocsContent h6",
            project: {
              defaultValue: ["ssl"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "developers-cloudflare",
      pathsToMatch: ["https://developers.cloudflare.com/stream/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "h1 + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".DocsContent h2",
            content:
              ".DocsContent p, .DocsContent li, .DocsContent tbody tr > td",
            lvl0: {
              selectors: ".DocsContent h1",
            },
            lvl2: ".DocsContent h3",
            lvl3: ".DocsContent h4",
            lvl4: ".DocsContent h5",
            lvl5: ".DocsContent h6",
            project: {
              defaultValue: ["stream"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "developers-cloudflare",
      pathsToMatch: ["https://developers.cloudflare.com/terraform/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "h1 + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".DocsContent h2",
            content:
              ".DocsContent p, .DocsContent li, .DocsContent tbody tr > td",
            lvl0: {
              selectors: ".DocsContent h1",
            },
            lvl2: ".DocsContent h3",
            lvl3: ".DocsContent h4",
            lvl4: ".DocsContent h5",
            lvl5: ".DocsContent h6",
            project: {
              defaultValue: ["terraform"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "developers-cloudflare",
      pathsToMatch: ["https://developers.cloudflare.com/time-services/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "h1 + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".DocsContent h2",
            content:
              ".DocsContent p, .DocsContent li, .DocsContent tbody tr > td",
            lvl0: {
              selectors: ".DocsContent h1",
            },
            lvl2: ".DocsContent h3",
            lvl3: ".DocsContent h4",
            lvl4: ".DocsContent h5",
            lvl5: ".DocsContent h6",
            project: {
              defaultValue: ["time-services"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "developers-cloudflare",
      pathsToMatch: ["https://developers.cloudflare.com/waf/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "h1 + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".DocsContent h2",
            content:
              ".DocsContent p, .DocsContent li, .DocsContent tbody tr > td",
            lvl0: {
              selectors: ".DocsContent h1",
            },
            lvl2: ".DocsContent h3",
            lvl3: ".DocsContent h4",
            lvl4: ".DocsContent h5",
            lvl5: ".DocsContent h6",
            project: {
              defaultValue: ["waf"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "developers-cloudflare",
      pathsToMatch: ["https://developers.cloudflare.com/waiting-room/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "h1 + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".DocsContent h2",
            content:
              ".DocsContent p, .DocsContent li, .DocsContent tbody tr > td",
            lvl0: {
              selectors: ".DocsContent h1",
            },
            lvl2: ".DocsContent h3",
            lvl3: ".DocsContent h4",
            lvl4: ".DocsContent h5",
            lvl5: ".DocsContent h6",
            project: {
              defaultValue: ["waiting-room"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "developers-cloudflare",
      pathsToMatch: ["https://developers.cloudflare.com/warp-client/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "h1 + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".DocsContent h2",
            content:
              ".DocsContent p, .DocsContent li, .DocsContent tbody tr > td",
            lvl0: {
              selectors: ".DocsContent h1",
            },
            lvl2: ".DocsContent h3",
            lvl3: ".DocsContent h4",
            lvl4: ".DocsContent h5",
            lvl5: ".DocsContent h6",
            project: {
              defaultValue: ["warp-client"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "developers-cloudflare",
      pathsToMatch: ["https://developers.cloudflare.com/workers/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "h1 + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".DocsContent h2",
            content:
              ".DocsContent p, .DocsContent li, .DocsContent tbody tr > td",
            lvl0: {
              selectors: ".DocsContent h1",
            },
            lvl2: ".DocsContent h3",
            lvl3: ".DocsContent h4",
            lvl4: ".DocsContent h5",
            lvl5: ".DocsContent h6",
            project: {
              defaultValue: ["workers"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    "developers-cloudflare": {
      attributesForFaceting: ["type", "lang"],
      attributesToRetrieve: ["hierarchy", "content", "anchor", "url"],
      attributesToHighlight: ["hierarchy", "hierarchy_camel", "content"],
      attributesToSnippet: ["content:10"],
      camelCaseAttributes: ["hierarchy", "hierarchy_radio", "content"],
      searchableAttributes: [
        "unordered(hierarchy_radio_camel.lvl0)",
        "unordered(hierarchy_radio.lvl0)",
        "unordered(hierarchy_radio_camel.lvl1)",
        "unordered(hierarchy_radio.lvl1)",
        "unordered(hierarchy_radio_camel.lvl2)",
        "unordered(hierarchy_radio.lvl2)",
        "unordered(hierarchy_radio_camel.lvl3)",
        "unordered(hierarchy_radio.lvl3)",
        "unordered(hierarchy_radio_camel.lvl4)",
        "unordered(hierarchy_radio.lvl4)",
        "unordered(hierarchy_radio_camel.lvl5)",
        "unordered(hierarchy_radio.lvl5)",
        "unordered(hierarchy_radio_camel.lvl6)",
        "unordered(hierarchy_radio.lvl6)",
        "unordered(hierarchy_camel.lvl0)",
        "unordered(hierarchy.lvl0)",
        "unordered(hierarchy_camel.lvl1)",
        "unordered(hierarchy.lvl1)",
        "unordered(hierarchy_camel.lvl2)",
        "unordered(hierarchy.lvl2)",
        "unordered(hierarchy_camel.lvl3)",
        "unordered(hierarchy.lvl3)",
        "unordered(hierarchy_camel.lvl4)",
        "unordered(hierarchy.lvl4)",
        "unordered(hierarchy_camel.lvl5)",
        "unordered(hierarchy.lvl5)",
        "unordered(hierarchy_camel.lvl6)",
        "unordered(hierarchy.lvl6)",
        "content",
      ],
      distinct: true,
      attributeForDistinct: "url",
      customRanking: [
        "desc(weight.pageRank)",
        "desc(weight.level)",
        "asc(weight.position)",
      ],
      ranking: [
        "words",
        "filters",
        "typo",
        "attribute",
        "proximity",
        "exact",
        "custom",
      ],
      highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
      highlightPostTag: "</span>",
      minWordSizefor1Typo: 3,
      minWordSizefor2Typos: 7,
      allowTyposOnNumericTokens: false,
      minProximity: 1,
      ignorePlurals: true,
      advancedSyntax: true,
      attributeCriteriaComputedByMinProximity: true,
      removeWordsIfNoResults: "allOptional",
    },
  },
});