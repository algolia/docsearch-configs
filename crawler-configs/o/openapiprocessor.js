new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://docs.openapiprocessor.io/spring/2021.3/",
    "https://docs.openapiprocessor.io/",
    "https://docs.openapiprocessor.io/spring/2021.2/",
    "https://docs.openapiprocessor.io/spring/2020.1/",
    "https://docs.openapiprocessor.io/spring/1.0.0.M14/",
    "https://docs.openapiprocessor.io/micronaut/2021.1/",
    "https://docs.openapiprocessor.io/json/2021.1/",
    "https://docs.openapiprocessor.io/gradle/2021.3/",
    "https://docs.openapiprocessor.io/gradle/2021.2/",
    "https://docs.openapiprocessor.io/maven/2021.1/",
    "https://docs.openapiprocessor.io/maven/1.0.0.M2/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://docs.openapiprocessor.io/sitemap.xml"],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://docs.openapiprocessor.io/**"],
  schedule: "at 20:30 on Thursday",
  actions: [
    {
      indexName: "openapiprocessor",
      pathsToMatch: ["https://docs.openapiprocessor.io/spring/2021.3/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "article h1",
            content: "article p, article li",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5",
            lvl6: "article h6",
            version: {
              defaultValue: ["2021.3"],
            },
            component: {
              defaultValue: ["spring"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "openapiprocessor",
      pathsToMatch: ["https://docs.openapiprocessor.io/spring/2021.2/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "article h1",
            content: "article p, article li",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5",
            lvl6: "article h6",
            version: {
              defaultValue: ["2021.2"],
            },
            component: {
              defaultValue: ["spring"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "openapiprocessor",
      pathsToMatch: ["https://docs.openapiprocessor.io/spring/2020.1/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "article h1",
            content: "article p, article li",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5",
            lvl6: "article h6",
            version: {
              defaultValue: ["2020.1"],
            },
            component: {
              defaultValue: ["spring"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "openapiprocessor",
      pathsToMatch: ["https://docs.openapiprocessor.io/spring/1.0.0.M14/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "article h1",
            content: "article p, article li",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5",
            lvl6: "article h6",
            version: {
              defaultValue: ["1.0.0"],
            },
            component: {
              defaultValue: ["spring"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "openapiprocessor",
      pathsToMatch: ["https://docs.openapiprocessor.io/micronaut/2021.1/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "article h1",
            content: "article p, article li",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5",
            lvl6: "article h6",
            version: {
              defaultValue: ["2021.1"],
            },
            component: {
              defaultValue: ["micronaut"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "openapiprocessor",
      pathsToMatch: ["https://docs.openapiprocessor.io/json/2021.1/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "article h1",
            content: "article p, article li",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5",
            lvl6: "article h6",
            version: {
              defaultValue: ["2021.1"],
            },
            component: {
              defaultValue: ["json"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "openapiprocessor",
      pathsToMatch: ["https://docs.openapiprocessor.io/gradle/2021.3/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "article h1",
            content: "article p, article li",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5",
            lvl6: "article h6",
            version: {
              defaultValue: ["2021.3"],
            },
            component: {
              defaultValue: ["gradle"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "openapiprocessor",
      pathsToMatch: ["https://docs.openapiprocessor.io/gradle/2021.2/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "article h1",
            content: "article p, article li",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5",
            lvl6: "article h6",
            version: {
              defaultValue: ["2021.2"],
            },
            component: {
              defaultValue: ["gradle"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "openapiprocessor",
      pathsToMatch: ["https://docs.openapiprocessor.io/maven/2021.1/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "article h1",
            content: "article p, article li",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5",
            lvl6: "article h6",
            version: {
              defaultValue: ["2021.1"],
            },
            component: {
              defaultValue: ["maven"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "openapiprocessor",
      pathsToMatch: ["https://docs.openapiprocessor.io/maven/1.0.0.M2/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "article h1",
            content: "article p, article li",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5",
            lvl6: "article h6",
            version: {
              defaultValue: ["1.0.0"],
            },
            component: {
              defaultValue: ["maven"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "openapiprocessor",
      pathsToMatch: ["https://docs.openapiprocessor.io**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "article h1",
            content: "article p, article li",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5",
            lvl6: "article h6",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    openapiprocessor: {
      attributesForFaceting: ["type", "lang", "component", "version"],
      attributesToRetrieve: [
        "anchor",
        "content",
        "hierarchy",
        "url",
        "component",
        "version",
      ],
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
      customRanking: ["asc(component)", "desc(version)"],
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