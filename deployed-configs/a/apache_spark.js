new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://spark.apache.org/docs/latest/",
    "https://spark.apache.org/",
    "https://spark.apache.org/docs/3.0.3/",
    "https://spark.apache.org/docs/3.1.1/",
    "https://spark.apache.org/docs/3.1.2/",
    "https://spark.apache.org/docs/3.2.0/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://spark.apache.org/sitemap.xml"],
  exclusionPatterns: ["**/api**", "**/api**/**", "**/index.html"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://spark.apache.org/**"],
  schedule: "at 01:30 on Tuesday",
  actions: [
    {
      indexName: "apache_spark",
      pathsToMatch: ["https://spark.apache.org/docs/latest/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".container-wrapper h1.title",
            content: ".container-wrapper p, .container-wrapper li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".container-wrapper h1",
            lvl3: ".container-wrapper h2",
            lvl4: ".container-wrapper h3",
            lvl5: ".container-wrapper h4",
            version: {
              defaultValue: ["latest"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "apache_spark",
      pathsToMatch: ["https://spark.apache.org/docs/3.0.3/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".container-wrapper h1.title",
            content: ".container-wrapper p, .container-wrapper li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".container-wrapper h1",
            lvl3: ".container-wrapper h2",
            lvl4: ".container-wrapper h3",
            lvl5: ".container-wrapper h4",
            version: {
              defaultValue: ["3.0.3"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "apache_spark",
      pathsToMatch: ["https://spark.apache.org/docs/3.1.1/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".container-wrapper h1.title",
            content: ".container-wrapper p, .container-wrapper li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".container-wrapper h1",
            lvl3: ".container-wrapper h2",
            lvl4: ".container-wrapper h3",
            lvl5: ".container-wrapper h4",
            version: {
              defaultValue: ["3.1.1"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "apache_spark",
      pathsToMatch: ["https://spark.apache.org/docs/3.1.2/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".container-wrapper h1.title",
            content: ".container-wrapper p, .container-wrapper li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".container-wrapper h1",
            lvl3: ".container-wrapper h2",
            lvl4: ".container-wrapper h3",
            lvl5: ".container-wrapper h4",
            version: {
              defaultValue: ["3.1.2"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "apache_spark",
      pathsToMatch: ["https://spark.apache.org/docs/3.2.0/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".container-wrapper h1.title",
            content: ".container-wrapper p, .container-wrapper li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".container-wrapper h1",
            lvl3: ".container-wrapper h2",
            lvl4: ".container-wrapper h3",
            lvl5: ".container-wrapper h4",
            version: {
              defaultValue: ["3.2.0"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    apache_spark: {
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
    },
  },
});