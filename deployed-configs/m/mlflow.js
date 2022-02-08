new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://mlflow.org/docs/latest/rest-api.html",
    "https://mlflow.org/",
    "https://mlflow.org/docs/latest/R-api.html",
    "https://mlflow.org/docs/latest/python_api",
    "https://mlflow.org/docs/latest/",
    "https://mlflow.org/docs/latest/index.html",
  ],
  renderJavaScript: false,
  sitemaps: ["https://mlflow.org/sitemap.xml"],
  exclusionPatterns: ["**/java_api/**", "**/_modules/**"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://mlflow.org/**"],
  schedule: "at 10:20 on Thursday",
  actions: [
    {
      indexName: "mlflow",
      pathsToMatch: ["https://mlflow.org/docs/latest/rest-api.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content: "[itemprop='articleBody'] p, [itemprop='articleBody'] li",
            lvl0: {
              selectors: "[itemprop='articleBody'] h1",
            },
            lvl3: "[itemprop='articleBody'] h4",
            lvl4: "[itemprop='articleBody'] h5",
            pageRank: "1",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "mlflow",
      pathsToMatch: ["https://mlflow.org/docs/latest/R-api.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content: "[itemprop='articleBody'] p, [itemprop='articleBody'] li",
            lvl0: {
              selectors: "[itemprop='articleBody'] h1",
            },
            lvl3: "[itemprop='articleBody'] h4",
            lvl4: "[itemprop='articleBody'] h5",
            pageRank: "2",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "mlflow",
      pathsToMatch: ["https://mlflow.org/docs/latest/python_api**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content: "[itemprop='articleBody'] p, [itemprop='articleBody'] li",
            lvl0: {
              selectors: "[itemprop='articleBody'] h1",
            },
            lvl3: "[itemprop='articleBody'] h4",
            lvl4: "[itemprop='articleBody'] h5",
            pageRank: "3",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "mlflow",
      pathsToMatch: ["https://mlflow.org/docs/latest/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content: "[itemprop='articleBody'] p, [itemprop='articleBody'] li",
            lvl0: {
              selectors: "[itemprop='articleBody'] h1",
            },
            lvl3: "[itemprop='articleBody'] h4",
            lvl4: "[itemprop='articleBody'] h5",
            pageRank: "4",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "mlflow",
      pathsToMatch: ["https://mlflow.org/docs/latest/index.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content: "[itemprop='articleBody'] p, [itemprop='articleBody'] li",
            lvl0: {
              selectors: "[itemprop='articleBody'] h1",
            },
            lvl3: "[itemprop='articleBody'] h4",
            lvl4: "[itemprop='articleBody'] h5",
            pageRank: "5",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    mlflow: {
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