new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://docs.timescale.com/latest/getting-started/installation",
    "https://docs.timescale.com/",
    "https://docs.timescale.com/v2.0/getting-started/installation",
    "https://docs.timescale.com/v1.7/getting-started/installation",
    "https://docs.timescale.com/v1.6/getting-started/installation",
    "https://docs.timescale.com/v1.5/getting-started/installation",
    "https://docs.timescale.com/v1.4/getting-started/installation",
    "https://docs.timescale.com/v1.3/getting-started/installation",
    "https://docs.timescale.com/v1.2/getting-started/installation",
    "https://docs.timescale.com/v1.1/getting-started/installation",
    "https://docs.timescale.com/v1.0/getting-started/installation",
    "https://docs.timescale.com/v0.12/getting-started/installation",
    "https://docs.timescale.com/v0.11/getting-started/installation",
    "https://docs.timescale.com/v0.10/getting-started/installation",
    "https://docs.timescale.com/v0.9/getting-started/installation",
    "https://docs.timescale.com/latest/",
    "https://docs.timescale.com/v2.0/",
    "https://docs.timescale.com/v1.7/",
    "https://docs.timescale.com/v1.6/",
    "https://docs.timescale.com/v1.5/",
    "https://docs.timescale.com/v1.4/",
    "https://docs.timescale.com/v1.3/",
    "https://docs.timescale.com/v1.2/",
    "https://docs.timescale.com/v1.1/",
    "https://docs.timescale.com/v1.0/",
    "https://docs.timescale.com/v0.12/",
    "https://docs.timescale.com/v0.11/",
    "https://docs.timescale.com/v0.10/",
    "https://docs.timescale.com/v0.9/",
  ],
  renderJavaScript: true,
  sitemaps: ["https://docs.timescale.com/docs-sitemap.xml"],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://docs.timescale.com/**"],
  schedule: "at 19:10 on Friday",
  actions: [
    {
      indexName: "timescale",
      pathsToMatch: [
        "https://docs.timescale.com/latest/getting-started/installation**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".top-list";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".os.hidden__index",
            content:
              ".main-content__text p, .main-content__text li, .main-content__text pre code",
            lvl0: {
              selectors: ".main-index.hidden__index",
            },
            lvl2: ".method.hidden__index",
            lvl3: ".main-content__text h2",
            lvl4: ".main-content__text h3",
            version: {
              defaultValue: ["latest"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "timescale",
      pathsToMatch: [
        "https://docs.timescale.com/v2.0/getting-started/installation**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".top-list";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".os.hidden__index",
            content:
              ".main-content__text p, .main-content__text li, .main-content__text pre code",
            lvl0: {
              selectors: ".main-index.hidden__index",
            },
            lvl2: ".method.hidden__index",
            lvl3: ".main-content__text h2",
            lvl4: ".main-content__text h3",
            version: {
              defaultValue: ["v2.0"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "timescale",
      pathsToMatch: [
        "https://docs.timescale.com/v1.7/getting-started/installation**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".top-list";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".os.hidden__index",
            content:
              ".main-content__text p, .main-content__text li, .main-content__text pre code",
            lvl0: {
              selectors: ".main-index.hidden__index",
            },
            lvl2: ".method.hidden__index",
            lvl3: ".main-content__text h2",
            lvl4: ".main-content__text h3",
            version: {
              defaultValue: ["v1.7"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "timescale",
      pathsToMatch: [
        "https://docs.timescale.com/v1.6/getting-started/installation**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".top-list";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".os.hidden__index",
            content:
              ".main-content__text p, .main-content__text li, .main-content__text pre code",
            lvl0: {
              selectors: ".main-index.hidden__index",
            },
            lvl2: ".method.hidden__index",
            lvl3: ".main-content__text h2",
            lvl4: ".main-content__text h3",
            version: {
              defaultValue: ["v1.6"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "timescale",
      pathsToMatch: [
        "https://docs.timescale.com/v1.5/getting-started/installation**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".top-list";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".os.hidden__index",
            content:
              ".main-content__text p, .main-content__text li, .main-content__text pre code",
            lvl0: {
              selectors: ".main-index.hidden__index",
            },
            lvl2: ".method.hidden__index",
            lvl3: ".main-content__text h2",
            lvl4: ".main-content__text h3",
            version: {
              defaultValue: ["v1.5"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "timescale",
      pathsToMatch: [
        "https://docs.timescale.com/v1.4/getting-started/installation**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".top-list";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".os.hidden__index",
            content:
              ".main-content__text p, .main-content__text li, .main-content__text pre code",
            lvl0: {
              selectors: ".main-index.hidden__index",
            },
            lvl2: ".method.hidden__index",
            lvl3: ".main-content__text h2",
            lvl4: ".main-content__text h3",
            version: {
              defaultValue: ["v1.4"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "timescale",
      pathsToMatch: [
        "https://docs.timescale.com/v1.3/getting-started/installation**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".top-list";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".os.hidden__index",
            content:
              ".main-content__text p, .main-content__text li, .main-content__text pre code",
            lvl0: {
              selectors: ".main-index.hidden__index",
            },
            lvl2: ".method.hidden__index",
            lvl3: ".main-content__text h2",
            lvl4: ".main-content__text h3",
            version: {
              defaultValue: ["v1.3"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "timescale",
      pathsToMatch: [
        "https://docs.timescale.com/v1.2/getting-started/installation**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".top-list";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".os.hidden__index",
            content:
              ".main-content__text p, .main-content__text li, .main-content__text pre code",
            lvl0: {
              selectors: ".main-index.hidden__index",
            },
            lvl2: ".method.hidden__index",
            lvl3: ".main-content__text h2",
            lvl4: ".main-content__text h3",
            version: {
              defaultValue: ["v1.2"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "timescale",
      pathsToMatch: [
        "https://docs.timescale.com/v1.1/getting-started/installation**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".top-list";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".os.hidden__index",
            content:
              ".main-content__text p, .main-content__text li, .main-content__text pre code",
            lvl0: {
              selectors: ".main-index.hidden__index",
            },
            lvl2: ".method.hidden__index",
            lvl3: ".main-content__text h2",
            lvl4: ".main-content__text h3",
            version: {
              defaultValue: ["v1.1"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "timescale",
      pathsToMatch: [
        "https://docs.timescale.com/v1.0/getting-started/installation**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".top-list";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".os.hidden__index",
            content:
              ".main-content__text p, .main-content__text li, .main-content__text pre code",
            lvl0: {
              selectors: ".main-index.hidden__index",
            },
            lvl2: ".method.hidden__index",
            lvl3: ".main-content__text h2",
            lvl4: ".main-content__text h3",
            version: {
              defaultValue: ["v1.0"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "timescale",
      pathsToMatch: [
        "https://docs.timescale.com/v0.12/getting-started/installation**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".top-list";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".os.hidden__index",
            content:
              ".main-content__text p, .main-content__text li, .main-content__text pre code",
            lvl0: {
              selectors: ".main-index.hidden__index",
            },
            lvl2: ".method.hidden__index",
            lvl3: ".main-content__text h2",
            lvl4: ".main-content__text h3",
            version: {
              defaultValue: ["v0.12"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "timescale",
      pathsToMatch: [
        "https://docs.timescale.com/v0.11/getting-started/installation**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".top-list";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".os.hidden__index",
            content:
              ".main-content__text p, .main-content__text li, .main-content__text pre code",
            lvl0: {
              selectors: ".main-index.hidden__index",
            },
            lvl2: ".method.hidden__index",
            lvl3: ".main-content__text h2",
            lvl4: ".main-content__text h3",
            version: {
              defaultValue: ["v0.11"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "timescale",
      pathsToMatch: [
        "https://docs.timescale.com/v0.10/getting-started/installation**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".top-list";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".os.hidden__index",
            content:
              ".main-content__text p, .main-content__text li, .main-content__text pre code",
            lvl0: {
              selectors: ".main-index.hidden__index",
            },
            lvl2: ".method.hidden__index",
            lvl3: ".main-content__text h2",
            lvl4: ".main-content__text h3",
            version: {
              defaultValue: ["v0.10"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "timescale",
      pathsToMatch: [
        "https://docs.timescale.com/v0.9/getting-started/installation**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".top-list";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".os.hidden__index",
            content:
              ".main-content__text p, .main-content__text li, .main-content__text pre code",
            lvl0: {
              selectors: ".main-index.hidden__index",
            },
            lvl2: ".method.hidden__index",
            lvl3: ".main-content__text h2",
            lvl4: ".main-content__text h3",
            version: {
              defaultValue: ["v0.9"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "timescale",
      pathsToMatch: ["https://docs.timescale.com/latest/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".top-list";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".main-content__text h1",
            content:
              ".main-content__text p, .main-content__text li, .main-content__text pre code",
            lvl0: {
              selectors: ".main-index.hidden__index",
            },
            lvl2: ".main-content__text h2",
            lvl3: ".main-content__text h3",
            version: {
              defaultValue: ["latest"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "timescale",
      pathsToMatch: ["https://docs.timescale.com/v2.0/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".top-list";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".main-content__text h1",
            content:
              ".main-content__text p, .main-content__text li, .main-content__text pre code",
            lvl0: {
              selectors: ".main-index.hidden__index",
            },
            lvl2: ".main-content__text h2",
            lvl3: ".main-content__text h3",
            version: {
              defaultValue: ["v2.0"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "timescale",
      pathsToMatch: ["https://docs.timescale.com/v1.7/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".top-list";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".main-content__text h1",
            content:
              ".main-content__text p, .main-content__text li, .main-content__text pre code",
            lvl0: {
              selectors: ".main-index.hidden__index",
            },
            lvl2: ".main-content__text h2",
            lvl3: ".main-content__text h3",
            version: {
              defaultValue: ["v1.7"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "timescale",
      pathsToMatch: ["https://docs.timescale.com/v1.6/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".top-list";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".main-content__text h1",
            content:
              ".main-content__text p, .main-content__text li, .main-content__text pre code",
            lvl0: {
              selectors: ".main-index.hidden__index",
            },
            lvl2: ".main-content__text h2",
            lvl3: ".main-content__text h3",
            version: {
              defaultValue: ["v1.6"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "timescale",
      pathsToMatch: ["https://docs.timescale.com/v1.5/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".top-list";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".main-content__text h1",
            content:
              ".main-content__text p, .main-content__text li, .main-content__text pre code",
            lvl0: {
              selectors: ".main-index.hidden__index",
            },
            lvl2: ".main-content__text h2",
            lvl3: ".main-content__text h3",
            version: {
              defaultValue: ["v1.5"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "timescale",
      pathsToMatch: ["https://docs.timescale.com/v1.4/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".top-list";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".main-content__text h1",
            content:
              ".main-content__text p, .main-content__text li, .main-content__text pre code",
            lvl0: {
              selectors: ".main-index.hidden__index",
            },
            lvl2: ".main-content__text h2",
            lvl3: ".main-content__text h3",
            version: {
              defaultValue: ["v1.4"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "timescale",
      pathsToMatch: ["https://docs.timescale.com/v1.3/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".top-list";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".main-content__text h1",
            content:
              ".main-content__text p, .main-content__text li, .main-content__text pre code",
            lvl0: {
              selectors: ".main-index.hidden__index",
            },
            lvl2: ".main-content__text h2",
            lvl3: ".main-content__text h3",
            version: {
              defaultValue: ["v1.3"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "timescale",
      pathsToMatch: ["https://docs.timescale.com/v1.2/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".top-list";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".main-content__text h1",
            content:
              ".main-content__text p, .main-content__text li, .main-content__text pre code",
            lvl0: {
              selectors: ".main-index.hidden__index",
            },
            lvl2: ".main-content__text h2",
            lvl3: ".main-content__text h3",
            version: {
              defaultValue: ["v1.2"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "timescale",
      pathsToMatch: ["https://docs.timescale.com/v1.1/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".top-list";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".main-content__text h1",
            content:
              ".main-content__text p, .main-content__text li, .main-content__text pre code",
            lvl0: {
              selectors: ".main-index.hidden__index",
            },
            lvl2: ".main-content__text h2",
            lvl3: ".main-content__text h3",
            version: {
              defaultValue: ["v1.1"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "timescale",
      pathsToMatch: ["https://docs.timescale.com/v1.0/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".top-list";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".main-content__text h1",
            content:
              ".main-content__text p, .main-content__text li, .main-content__text pre code",
            lvl0: {
              selectors: ".main-index.hidden__index",
            },
            lvl2: ".main-content__text h2",
            lvl3: ".main-content__text h3",
            version: {
              defaultValue: ["v1.0"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "timescale",
      pathsToMatch: ["https://docs.timescale.com/v0.12/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".top-list";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".main-content__text h1",
            content:
              ".main-content__text p, .main-content__text li, .main-content__text pre code",
            lvl0: {
              selectors: ".main-index.hidden__index",
            },
            lvl2: ".main-content__text h2",
            lvl3: ".main-content__text h3",
            version: {
              defaultValue: ["v0.12"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "timescale",
      pathsToMatch: ["https://docs.timescale.com/v0.11/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".top-list";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".main-content__text h1",
            content:
              ".main-content__text p, .main-content__text li, .main-content__text pre code",
            lvl0: {
              selectors: ".main-index.hidden__index",
            },
            lvl2: ".main-content__text h2",
            lvl3: ".main-content__text h3",
            version: {
              defaultValue: ["v0.11"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "timescale",
      pathsToMatch: ["https://docs.timescale.com/v0.10/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".top-list";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".main-content__text h1",
            content:
              ".main-content__text p, .main-content__text li, .main-content__text pre code",
            lvl0: {
              selectors: ".main-index.hidden__index",
            },
            lvl2: ".main-content__text h2",
            lvl3: ".main-content__text h3",
            version: {
              defaultValue: ["v0.10"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "timescale",
      pathsToMatch: ["https://docs.timescale.com/v0.9/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".top-list";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".main-content__text h1",
            content:
              ".main-content__text p, .main-content__text li, .main-content__text pre code",
            lvl0: {
              selectors: ".main-index.hidden__index",
            },
            lvl2: ".main-content__text h2",
            lvl3: ".main-content__text h3",
            version: {
              defaultValue: ["v0.9"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    timescale: {
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