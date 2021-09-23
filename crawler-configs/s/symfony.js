new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://symfony.com/bundles/.*/current/",
    "https://symfony.com/",
    "https://symfony.com/doc/current/the-fast-track/en/",
    "https://symfony.com/doc/2.0/",
    "https://symfony.com/doc/2.1/",
    "https://symfony.com/doc/2.2/",
    "https://symfony.com/doc/2.3/",
    "https://symfony.com/doc/2.4/",
    "https://symfony.com/doc/2.5/",
    "https://symfony.com/doc/2.6/",
    "https://symfony.com/doc/2.7/",
    "https://symfony.com/doc/2.8/",
    "https://symfony.com/doc/3.0/",
    "https://symfony.com/doc/3.1/",
    "https://symfony.com/doc/3.2/",
    "https://symfony.com/doc/3.3/",
    "https://symfony.com/doc/3.4/",
    "https://symfony.com/doc/4.0/",
    "https://symfony.com/doc/4.1/",
    "https://symfony.com/doc/4.2/",
    "https://symfony.com/doc/4.3/",
    "https://symfony.com/doc/4.4/",
    "https://symfony.com/doc/5.0/",
    "https://symfony.com/doc/5.1/",
    "https://symfony.com/doc/5.2/",
    "https://symfony.com/doc/5.3/",
    "https://symfony.com/doc/5.4/",
    "https://symfony.com/doc/6.0/",
    "https://symfony.com/doc/current/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://symfony.com/sitemap.xml"],
  exclusionPatterns: [
    "**/cmf/**",
    "**/create_framework/**",
    "**/the-fast-track/(?!en)**",
    "**/the-fast-track/(?!en)**/**",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://symfony.com/**"],
  schedule: "at 15:50 on Friday",
  actions: [
    {
      indexName: "symfony",
      pathsToMatch: ["https://symfony.com/bundles/.*/current/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".breadcrumb, .toc--embedded, .toctree-wrapper";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li, main dt, main dd, main blockquote",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lvl5: "main h6",
            version: {
              defaultValue: ["current"],
            },
            tags: {
              defaultValue: ["bundles"],
            },
            pageRank: "50",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "symfony",
      pathsToMatch: ["https://symfony.com/doc/current/the-fast-track/en/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".breadcrumb, .toc--embedded, .toctree-wrapper";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li, main dt, main dd, main blockquote",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lvl5: "main h6",
            language: {
              defaultValue: ["en"],
            },
            tags: {
              defaultValue: ["fast-track"],
            },
            pageRank: "75",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "symfony",
      pathsToMatch: ["https://symfony.com/doc/2.0/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".breadcrumb, .toc--embedded, .toctree-wrapper";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li, main dt, main dd, main blockquote",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lvl5: "main h6",
            version: {
              defaultValue: ["2.0"],
            },
            pageRank: "100",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "symfony",
      pathsToMatch: ["https://symfony.com/doc/2.1/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".breadcrumb, .toc--embedded, .toctree-wrapper";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li, main dt, main dd, main blockquote",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lvl5: "main h6",
            version: {
              defaultValue: ["2.1"],
            },
            pageRank: "100",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "symfony",
      pathsToMatch: ["https://symfony.com/doc/2.2/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".breadcrumb, .toc--embedded, .toctree-wrapper";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li, main dt, main dd, main blockquote",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lvl5: "main h6",
            version: {
              defaultValue: ["2.2"],
            },
            pageRank: "100",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "symfony",
      pathsToMatch: ["https://symfony.com/doc/2.3/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".breadcrumb, .toc--embedded, .toctree-wrapper";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li, main dt, main dd, main blockquote",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lvl5: "main h6",
            version: {
              defaultValue: ["2.3"],
            },
            pageRank: "100",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "symfony",
      pathsToMatch: ["https://symfony.com/doc/2.4/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".breadcrumb, .toc--embedded, .toctree-wrapper";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li, main dt, main dd, main blockquote",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lvl5: "main h6",
            version: {
              defaultValue: ["2.4"],
            },
            pageRank: "100",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "symfony",
      pathsToMatch: ["https://symfony.com/doc/2.5/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".breadcrumb, .toc--embedded, .toctree-wrapper";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li, main dt, main dd, main blockquote",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lvl5: "main h6",
            version: {
              defaultValue: ["2.5"],
            },
            pageRank: "100",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "symfony",
      pathsToMatch: ["https://symfony.com/doc/2.6/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".breadcrumb, .toc--embedded, .toctree-wrapper";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li, main dt, main dd, main blockquote",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lvl5: "main h6",
            version: {
              defaultValue: ["2.6"],
            },
            pageRank: "100",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "symfony",
      pathsToMatch: ["https://symfony.com/doc/2.7/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".breadcrumb, .toc--embedded, .toctree-wrapper";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li, main dt, main dd, main blockquote",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lvl5: "main h6",
            version: {
              defaultValue: ["2.7"],
            },
            pageRank: "100",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "symfony",
      pathsToMatch: ["https://symfony.com/doc/2.8/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".breadcrumb, .toc--embedded, .toctree-wrapper";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li, main dt, main dd, main blockquote",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lvl5: "main h6",
            version: {
              defaultValue: ["2.8"],
            },
            pageRank: "100",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "symfony",
      pathsToMatch: ["https://symfony.com/doc/3.0/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".breadcrumb, .toc--embedded, .toctree-wrapper";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li, main dt, main dd, main blockquote",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lvl5: "main h6",
            version: {
              defaultValue: ["3.0"],
            },
            pageRank: "100",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "symfony",
      pathsToMatch: ["https://symfony.com/doc/3.1/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".breadcrumb, .toc--embedded, .toctree-wrapper";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li, main dt, main dd, main blockquote",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lvl5: "main h6",
            version: {
              defaultValue: ["3.1"],
            },
            pageRank: "100",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "symfony",
      pathsToMatch: ["https://symfony.com/doc/3.2/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".breadcrumb, .toc--embedded, .toctree-wrapper";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li, main dt, main dd, main blockquote",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lvl5: "main h6",
            version: {
              defaultValue: ["3.2"],
            },
            pageRank: "100",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "symfony",
      pathsToMatch: ["https://symfony.com/doc/3.3/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".breadcrumb, .toc--embedded, .toctree-wrapper";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li, main dt, main dd, main blockquote",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lvl5: "main h6",
            version: {
              defaultValue: ["3.3"],
            },
            pageRank: "100",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "symfony",
      pathsToMatch: ["https://symfony.com/doc/3.4/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".breadcrumb, .toc--embedded, .toctree-wrapper";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li, main dt, main dd, main blockquote",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lvl5: "main h6",
            version: {
              defaultValue: ["3.4"],
            },
            pageRank: "100",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "symfony",
      pathsToMatch: ["https://symfony.com/doc/4.0/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".breadcrumb, .toc--embedded, .toctree-wrapper";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li, main dt, main dd, main blockquote",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lvl5: "main h6",
            version: {
              defaultValue: ["4.0"],
            },
            pageRank: "100",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "symfony",
      pathsToMatch: ["https://symfony.com/doc/4.1/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".breadcrumb, .toc--embedded, .toctree-wrapper";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li, main dt, main dd, main blockquote",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lvl5: "main h6",
            version: {
              defaultValue: ["4.1"],
            },
            pageRank: "100",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "symfony",
      pathsToMatch: ["https://symfony.com/doc/4.2/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".breadcrumb, .toc--embedded, .toctree-wrapper";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li, main dt, main dd, main blockquote",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lvl5: "main h6",
            version: {
              defaultValue: ["4.2"],
            },
            pageRank: "100",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "symfony",
      pathsToMatch: ["https://symfony.com/doc/4.3/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".breadcrumb, .toc--embedded, .toctree-wrapper";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li, main dt, main dd, main blockquote",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lvl5: "main h6",
            version: {
              defaultValue: ["4.3"],
            },
            pageRank: "100",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "symfony",
      pathsToMatch: ["https://symfony.com/doc/4.4/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".breadcrumb, .toc--embedded, .toctree-wrapper";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li, main dt, main dd, main blockquote",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lvl5: "main h6",
            version: {
              defaultValue: ["4.4"],
            },
            pageRank: "100",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "symfony",
      pathsToMatch: ["https://symfony.com/doc/5.0/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".breadcrumb, .toc--embedded, .toctree-wrapper";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li, main dt, main dd, main blockquote",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lvl5: "main h6",
            version: {
              defaultValue: ["5.0"],
            },
            pageRank: "100",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "symfony",
      pathsToMatch: ["https://symfony.com/doc/5.1/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".breadcrumb, .toc--embedded, .toctree-wrapper";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li, main dt, main dd, main blockquote",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lvl5: "main h6",
            version: {
              defaultValue: ["5.1"],
            },
            pageRank: "100",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "symfony",
      pathsToMatch: ["https://symfony.com/doc/5.2/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".breadcrumb, .toc--embedded, .toctree-wrapper";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li, main dt, main dd, main blockquote",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lvl5: "main h6",
            version: {
              defaultValue: ["5.2"],
            },
            pageRank: "100",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "symfony",
      pathsToMatch: ["https://symfony.com/doc/5.3/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".breadcrumb, .toc--embedded, .toctree-wrapper";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li, main dt, main dd, main blockquote",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lvl5: "main h6",
            version: {
              defaultValue: ["5.3"],
            },
            pageRank: "100",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "symfony",
      pathsToMatch: ["https://symfony.com/doc/5.4/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".breadcrumb, .toc--embedded, .toctree-wrapper";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li, main dt, main dd, main blockquote",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lvl5: "main h6",
            version: {
              defaultValue: ["5.4"],
            },
            pageRank: "100",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "symfony",
      pathsToMatch: ["https://symfony.com/doc/6.0/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".breadcrumb, .toc--embedded, .toctree-wrapper";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li, main dt, main dd, main blockquote",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lvl5: "main h6",
            version: {
              defaultValue: ["6.0"],
            },
            pageRank: "100",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "symfony",
      pathsToMatch: ["https://symfony.com/doc/current/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".breadcrumb, .toc--embedded, .toctree-wrapper";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li, main dt, main dd, main blockquote",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lvl5: "main h6",
            version: {
              defaultValue: ["current"],
            },
            pageRank: "100",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    symfony: {
      attributesForFaceting: ["type", "lang", "version"],
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
      synonyms: [
        ["yaml", "yml"],
        [
          "env var",
          "env vars",
          "environment variable",
          "environment variables",
        ],
        [
          "i18n",
          "internationalization",
          "internationalize",
          "multilingual",
          "translate",
          "translating",
          "translation",
          "translator",
        ],
        ["route", "router", "routes", "routing"],
        ["URI", "URIs", "URL", "URLs"],
        ["param", "parameter", "parameters", "params"],
        ["console", "terminal"],
        [
          "container",
          "dependency injection",
          "DI",
          "IoC",
          "service container",
          "services",
        ],
        ["env", "environment", "environments", "envs"],
        ["log", "logger", "logging", "logs", "monolog"],
        ["test", "tester", "testing", "tests"],
        ["database", "db", "doctrine"],
        ["template engine", "template", "templates", "templating", "twig"],
        ["config", "configs", "configuration"],
        ["deploy", "deployment"],
        [
          "event dispatcher",
          "event listener",
          "event listeners",
          "event subscriber",
          "event subscribers",
          "event",
          "events",
        ],
      ],
    },
  },
});