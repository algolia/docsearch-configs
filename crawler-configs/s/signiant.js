new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://help.signiant.com/jet",
    "https://help.signiant.com/",
    "https://help.signiant.com/flight",
    "https://help.signiant.com/manager-agents",
    "https://help.signiant.com/media-shuttle",
  ],
  renderJavaScript: false,
  sitemaps: ["https://help.signiant.com/sitemap.xml"],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://help.signiant.com/**"],
  schedule: "at 15:10 on Friday",
  actions: [
    {
      indexName: "signiant",
      pathsToMatch: ["https://help.signiant.com/jet**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".page h2",
            content: ".page p, .page li",
            lvl0: {
              selectors: ".page h1",
            },
            lvl2: ".page h3",
            lvl3: ".page h4",
            lvl4: ".page h5",
            lvl5: ".page h6",
            product: {
              defaultValue: ["jet"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "signiant",
      pathsToMatch: ["https://help.signiant.com/flight**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".page h2",
            content: ".page p, .page li",
            lvl0: {
              selectors: ".page h1",
            },
            lvl2: ".page h3",
            lvl3: ".page h4",
            lvl4: ".page h5",
            lvl5: ".page h6",
            product: {
              defaultValue: ["flight"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "signiant",
      pathsToMatch: ["https://help.signiant.com/manager-agents**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".page h2",
            content: ".page p, .page li",
            lvl0: {
              selectors: ".page h1",
            },
            lvl2: ".page h3",
            lvl3: ".page h4",
            lvl4: ".page h5",
            lvl5: ".page h6",
            product: {
              defaultValue: ["manager-agents"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "signiant",
      pathsToMatch: ["https://help.signiant.com/media-shuttle**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".page h2",
            content: ".page p, .page li",
            lvl0: {
              selectors: ".page h1",
            },
            lvl2: ".page h3",
            lvl3: ".page h4",
            lvl4: ".page h5",
            lvl5: ".page h6",
            product: {
              defaultValue: ["media-shuttle"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    signiant: {
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