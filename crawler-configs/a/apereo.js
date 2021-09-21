new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://apereo.github.io/cas/6.4.x/",
    "https://apereo.github.io/",
    "https://apereo.github.io/cas/6.3.x/",
    "https://apereo.github.io/cas/6.2.x/",
    "https://apereo.github.io/cas/6.1.x/",
    "https://apereo.github.io/cas/6.0.x/",
    "https://apereo.github.io/cas/5.3.x/",
    "https://apereo.github.io/cas/5.2.x/",
    "https://apereo.github.io/cas/5.1.x/",
    "https://apereo.github.io/cas/5.0.x/",
    "https://apereo.github.io/cas/4.2.x/",
    "https://apereo.github.io/cas/4.1.x/",
    "https://apereo.github.io/cas/4.0.x/",
    "https://apereo.github.io/cas/development/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://apereo.github.io/cas/sitemap.xml"],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://apereo.github.io/**"],
  schedule: "at 01:30 on Tuesday",
  actions: [
    {
      indexName: "apereo",
      pathsToMatch: ["https://apereo.github.io/cas/6.4.x/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#cas-docs-container h1",
            content: "#cas-docs-container p, #cas-docs-container li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "#cas-docs-container h2",
            lvl3: "#cas-docs-container h3",
            lvl4: "#cas-docs-container h4",
            lvl5: "#cas-docs-container h5",
            version: {
              defaultValue: ["6.4.x"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "apereo",
      pathsToMatch: ["https://apereo.github.io/cas/6.3.x/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#cas-docs-container h1",
            content: "#cas-docs-container p, #cas-docs-container li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "#cas-docs-container h2",
            lvl3: "#cas-docs-container h3",
            lvl4: "#cas-docs-container h4",
            lvl5: "#cas-docs-container h5",
            version: {
              defaultValue: ["6.3.x"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "apereo",
      pathsToMatch: ["https://apereo.github.io/cas/6.2.x/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#cas-docs-container h1",
            content: "#cas-docs-container p, #cas-docs-container li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "#cas-docs-container h2",
            lvl3: "#cas-docs-container h3",
            lvl4: "#cas-docs-container h4",
            lvl5: "#cas-docs-container h5",
            version: {
              defaultValue: ["6.2.x"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "apereo",
      pathsToMatch: ["https://apereo.github.io/cas/6.1.x/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#cas-docs-container h1",
            content: "#cas-docs-container p, #cas-docs-container li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "#cas-docs-container h2",
            lvl3: "#cas-docs-container h3",
            lvl4: "#cas-docs-container h4",
            lvl5: "#cas-docs-container h5",
            version: {
              defaultValue: ["6.1.x"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "apereo",
      pathsToMatch: ["https://apereo.github.io/cas/6.0.x/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#cas-docs-container h1",
            content: "#cas-docs-container p, #cas-docs-container li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "#cas-docs-container h2",
            lvl3: "#cas-docs-container h3",
            lvl4: "#cas-docs-container h4",
            lvl5: "#cas-docs-container h5",
            version: {
              defaultValue: ["6.0.x"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "apereo",
      pathsToMatch: ["https://apereo.github.io/cas/5.3.x/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#cas-docs-container h1",
            content: "#cas-docs-container p, #cas-docs-container li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "#cas-docs-container h2",
            lvl3: "#cas-docs-container h3",
            lvl4: "#cas-docs-container h4",
            lvl5: "#cas-docs-container h5",
            version: {
              defaultValue: ["5.3.x"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "apereo",
      pathsToMatch: ["https://apereo.github.io/cas/5.2.x/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#cas-docs-container h1",
            content: "#cas-docs-container p, #cas-docs-container li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "#cas-docs-container h2",
            lvl3: "#cas-docs-container h3",
            lvl4: "#cas-docs-container h4",
            lvl5: "#cas-docs-container h5",
            version: {
              defaultValue: ["5.2.x"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "apereo",
      pathsToMatch: ["https://apereo.github.io/cas/5.1.x/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#cas-docs-container h1",
            content: "#cas-docs-container p, #cas-docs-container li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "#cas-docs-container h2",
            lvl3: "#cas-docs-container h3",
            lvl4: "#cas-docs-container h4",
            lvl5: "#cas-docs-container h5",
            version: {
              defaultValue: ["5.1.x"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "apereo",
      pathsToMatch: ["https://apereo.github.io/cas/5.0.x/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#cas-docs-container h1",
            content: "#cas-docs-container p, #cas-docs-container li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "#cas-docs-container h2",
            lvl3: "#cas-docs-container h3",
            lvl4: "#cas-docs-container h4",
            lvl5: "#cas-docs-container h5",
            version: {
              defaultValue: ["5.0.x"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "apereo",
      pathsToMatch: ["https://apereo.github.io/cas/4.2.x/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#cas-docs-container h1",
            content: "#cas-docs-container p, #cas-docs-container li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "#cas-docs-container h2",
            lvl3: "#cas-docs-container h3",
            lvl4: "#cas-docs-container h4",
            lvl5: "#cas-docs-container h5",
            version: {
              defaultValue: ["4.2.x"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "apereo",
      pathsToMatch: ["https://apereo.github.io/cas/4.1.x/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#cas-docs-container h1",
            content: "#cas-docs-container p, #cas-docs-container li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "#cas-docs-container h2",
            lvl3: "#cas-docs-container h3",
            lvl4: "#cas-docs-container h4",
            lvl5: "#cas-docs-container h5",
            version: {
              defaultValue: ["4.1.x"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "apereo",
      pathsToMatch: ["https://apereo.github.io/cas/4.0.x/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#cas-docs-container h1",
            content: "#cas-docs-container p, #cas-docs-container li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "#cas-docs-container h2",
            lvl3: "#cas-docs-container h3",
            lvl4: "#cas-docs-container h4",
            lvl5: "#cas-docs-container h5",
            version: {
              defaultValue: ["4.0.x"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "apereo",
      pathsToMatch: ["https://apereo.github.io/cas/development/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#cas-docs-container h1",
            content: "#cas-docs-container p, #cas-docs-container li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "#cas-docs-container h2",
            lvl3: "#cas-docs-container h3",
            lvl4: "#cas-docs-container h4",
            lvl5: "#cas-docs-container h5",
            version: {
              defaultValue: ["development"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    apereo: {
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