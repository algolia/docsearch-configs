new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://larecipe.binarytorch.com.my/docs/2.2/",
    "https://larecipe.binarytorch.com.my/",
    "https://larecipe.binarytorch.com.my/docs/2.0/",
    "https://larecipe.binarytorch.com.my/docs/1.3/",
    "https://larecipe.binarytorch.com.my/docs/1.2/",
    "https://larecipe.binarytorch.com.my/docs/1.1/",
    "https://larecipe.binarytorch.com.my/docs/1.0/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://larecipe.binarytorch.com.my/sitemap.xml"],
  exclusionPatterns: ["**/overview"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://larecipe.binarytorch.com.my/**"],
  schedule: "at 05:00 on Thursday",
  actions: [
    {
      indexName: "larecipe",
      pathsToMatch: ["https://larecipe.binarytorch.com.my/docs/2.2/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".documentation h1",
            content: ".documentation p, .documentation li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".documentation h2",
            lvl3: ".documentation h3",
            lvl4: ".documentation h4",
            lvl5: ".documentation h5",
            version: {
              defaultValue: ["2.2"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "larecipe",
      pathsToMatch: ["https://larecipe.binarytorch.com.my/docs/2.0/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".documentation h1",
            content: ".documentation p, .documentation li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".documentation h2",
            lvl3: ".documentation h3",
            lvl4: ".documentation h4",
            lvl5: ".documentation h5",
            version: {
              defaultValue: ["2.0"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "larecipe",
      pathsToMatch: ["https://larecipe.binarytorch.com.my/docs/1.3/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".documentation h1",
            content: ".documentation p, .documentation li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".documentation h2",
            lvl3: ".documentation h3",
            lvl4: ".documentation h4",
            lvl5: ".documentation h5",
            version: {
              defaultValue: ["1.3"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "larecipe",
      pathsToMatch: ["https://larecipe.binarytorch.com.my/docs/1.2/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".documentation h1",
            content: ".documentation p, .documentation li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".documentation h2",
            lvl3: ".documentation h3",
            lvl4: ".documentation h4",
            lvl5: ".documentation h5",
            version: {
              defaultValue: ["1.2"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "larecipe",
      pathsToMatch: ["https://larecipe.binarytorch.com.my/docs/1.1/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".documentation h1",
            content: ".documentation p, .documentation li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".documentation h2",
            lvl3: ".documentation h3",
            lvl4: ".documentation h4",
            lvl5: ".documentation h5",
            version: {
              defaultValue: ["1.1"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "larecipe",
      pathsToMatch: ["https://larecipe.binarytorch.com.my/docs/1.0/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".documentation h1",
            content: ".documentation p, .documentation li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".documentation h2",
            lvl3: ".documentation h3",
            lvl4: ".documentation h4",
            lvl5: ".documentation h5",
            version: {
              defaultValue: ["1.0"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    larecipe: {
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