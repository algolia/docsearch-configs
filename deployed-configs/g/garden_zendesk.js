new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://garden.zendesk.com/content",
    "https://garden.zendesk.com/",
    "https://garden.zendesk.com/design",
    "https://garden.zendesk.com/components",
  ],
  renderJavaScript: false,
  sitemaps: ["https://garden.zendesk.com/sitemap.xml"],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://garden.zendesk.com/**"],
  schedule: "at 06:00 on Wednesday",
  actions: [
    {
      indexName: "garden_zendesk",
      pathsToMatch: ["https://garden.zendesk.com/content**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#main-content h2",
            content: "#main-content p, #main-content li",
            lvl0: {
              selectors: "#main-content h1",
            },
            lvl2: "#main-content h3",
            lvl3: "#main-content h4",
            lvl4: "#main-content h5",
            lvl5: "#main-content h6",
            tags: {
              defaultValue: ["content"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "garden_zendesk",
      pathsToMatch: ["https://garden.zendesk.com/design**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#main-content h2",
            content: "#main-content p, #main-content li",
            lvl0: {
              selectors: "#main-content h1",
            },
            lvl2: "#main-content h3",
            lvl3: "#main-content h4",
            lvl4: "#main-content h5",
            lvl5: "#main-content h6",
            tags: {
              defaultValue: ["design"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "garden_zendesk",
      pathsToMatch: ["https://garden.zendesk.com/components**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#main-content h2",
            content: "#main-content p, #main-content li",
            lvl0: {
              selectors: "#main-content h1",
            },
            lvl2: "#main-content h3",
            lvl3: "#main-content h4",
            lvl4: "#main-content h5",
            lvl5: "#main-content h6",
            tags: {
              defaultValue: ["components"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    garden_zendesk: {
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