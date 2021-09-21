new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://skywalking.apache.org/docs/main/latest/",
    "https://skywalking.apache.org/",
    "https://skywalking.apache.org/docs/main/v8.7.0/",
    "https://skywalking.apache.org/docs/main/v8.6.0/",
    "https://skywalking.apache.org/docs/main/v8.5.0/",
    "https://skywalking.apache.org/docs/main/v8.4.0/",
    "https://skywalking.apache.org/docs/main/v8.3.0/",
    "https://skywalking.apache.org/docs/main/v8.2.0/",
    "https://skywalking.apache.org/docs/skywalking-java/latest/",
    "https://skywalking.apache.org/docs/skywalking-satellite/latest/",
    "https://skywalking.apache.org/docs/skywalking-satellite/v0.1.0/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://skywalking.apache.org/sitemap.xml"],
  exclusionPatterns: ["!**/"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://skywalking.apache.org/**"],
  schedule: "at 15:20 on Friday",
  actions: [
    {
      indexName: "skywalking",
      pathsToMatch: ["https://skywalking.apache.org/docs/main/latest/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h1",
            content: "main p, main li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "main h2",
            lvl3: "main h3",
            lvl4: "main h4",
            lvl5: "main h5",
            version: {
              defaultValue: ["latest"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "skywalking",
      pathsToMatch: ["https://skywalking.apache.org/docs/main/v8.7.0/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h1",
            content: "main p, main li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "main h2",
            lvl3: "main h3",
            lvl4: "main h4",
            lvl5: "main h5",
            version: {
              defaultValue: ["v8.7.0"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "skywalking",
      pathsToMatch: ["https://skywalking.apache.org/docs/main/v8.6.0/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h1",
            content: "main p, main li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "main h2",
            lvl3: "main h3",
            lvl4: "main h4",
            lvl5: "main h5",
            version: {
              defaultValue: ["v8.6.0"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "skywalking",
      pathsToMatch: ["https://skywalking.apache.org/docs/main/v8.5.0/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h1",
            content: "main p, main li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "main h2",
            lvl3: "main h3",
            lvl4: "main h4",
            lvl5: "main h5",
            version: {
              defaultValue: ["v8.5.0"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "skywalking",
      pathsToMatch: ["https://skywalking.apache.org/docs/main/v8.4.0/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h1",
            content: "main p, main li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "main h2",
            lvl3: "main h3",
            lvl4: "main h4",
            lvl5: "main h5",
            version: {
              defaultValue: ["v8.4.0"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "skywalking",
      pathsToMatch: ["https://skywalking.apache.org/docs/main/v8.3.0/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h1",
            content: "main p, main li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "main h2",
            lvl3: "main h3",
            lvl4: "main h4",
            lvl5: "main h5",
            version: {
              defaultValue: ["v8.3.0"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "skywalking",
      pathsToMatch: ["https://skywalking.apache.org/docs/main/v8.2.0/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h1",
            content: "main p, main li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "main h2",
            lvl3: "main h3",
            lvl4: "main h4",
            lvl5: "main h5",
            version: {
              defaultValue: ["v8.2.0"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "skywalking",
      pathsToMatch: [
        "https://skywalking.apache.org/docs/skywalking-java/latest/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h1",
            content: "main p, main li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "main h2",
            lvl3: "main h3",
            lvl4: "main h4",
            lvl5: "main h5",
            version: {
              defaultValue: ["latest"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "skywalking",
      pathsToMatch: [
        "https://skywalking.apache.org/docs/skywalking-satellite/latest/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h1",
            content: "main p, main li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "main h2",
            lvl3: "main h3",
            lvl4: "main h4",
            lvl5: "main h5",
            version: {
              defaultValue: ["latest"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "skywalking",
      pathsToMatch: [
        "https://skywalking.apache.org/docs/skywalking-satellite/v0.1.0/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h1",
            content: "main p, main li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "main h2",
            lvl3: "main h3",
            lvl4: "main h4",
            lvl5: "main h5",
            version: {
              defaultValue: ["v0.1.0"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "skywalking",
      pathsToMatch: ["https://skywalking.apache.org/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "container h1",
            content: "container p, container li",
            lvl0: {
              selectors: "",
              defaultValue: "Skywalking",
            },
            lvl2: "container h2",
            lvl3: "container h3",
            lvl4: "container h4",
            lvl5: "container h5",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    skywalking: {
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