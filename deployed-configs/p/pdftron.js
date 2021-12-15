new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://www.pdftron.com/api/PDFTronSDK/java/",
    "https://www.pdftron.com/",
    "https://www.pdftron.com/api/web/",
    "https://www.pdftron.com/api/android/",
    "https://www.pdftron.com/api/android/javadoc/reference/packages.html",
    "https://www.pdftron.com/api/android/javadoc/reference",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://www.pdftron.com/**"],
  schedule: "at 00:00 on Friday",
  actions: [
    {
      indexName: "pdftron",
      pathsToMatch: ["https://www.pdftron.com/api/PDFTronSDK/java/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#doc-content h2,#main h2",
            content: "#doc-content p, #doc-content li,#main p, #main li",
            lvl0: {
              selectors: "#doc-content h1,#main h1",
            },
            lvl2: "#doc-content h3,#main h3",
            lvl3: "#doc-content h4,#main h4",
            lvl4: "#doc-content h5,#main h5",
            lvl5: "#doc-content h6,#main h6",
            tags: {
              defaultValue: ["java"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "pdftron",
      pathsToMatch: ["https://www.pdftron.com/api/web/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#doc-content h2,#main h2",
            content: "#doc-content p, #doc-content li,#main p, #main li",
            lvl0: {
              selectors: "#doc-content h1,#main h1",
            },
            lvl2: "#doc-content h3,#main h3",
            lvl3: "#doc-content h4,#main h4",
            lvl4: "#doc-content h5,#main h5",
            lvl5: "#doc-content h6,#main h6",
            tags: {
              defaultValue: ["web"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "pdftron",
      pathsToMatch: ["https://www.pdftron.com/api/android/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#doc-content h2,#main h2",
            content: "#doc-content p, #doc-content li,#main p, #main li",
            lvl0: {
              selectors: "#doc-content h1,#main h1",
            },
            lvl2: "#doc-content h3,#main h3",
            lvl3: "#doc-content h4,#main h4",
            lvl4: "#doc-content h5,#main h5",
            lvl5: "#doc-content h6,#main h6",
            tags: {
              defaultValue: ["android"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "pdftron",
      pathsToMatch: [
        "https://www.pdftron.com/api/android/javadoc/reference**/**",
        "https://www.pdftron.com/api/android/javadoc/reference/packages.html**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#doc-content h2,#main h2",
            content: "#doc-content p, #doc-content li,#main p, #main li",
            lvl0: {
              selectors: "#doc-content h1,#main h1",
            },
            lvl2: "#doc-content h3,#main h3",
            lvl3: "#doc-content h4,#main h4",
            lvl4: "#doc-content h5,#main h5",
            lvl5: "#doc-content h6,#main h6",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    pdftron: {
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