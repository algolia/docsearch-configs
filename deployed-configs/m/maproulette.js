new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://learn.maproulette.org/documentation/",
    "https://learn.maproulette.org/",
    "https://learn.maproulette.org/screencasts/",
    "https://learn.maproulette.org/releases/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://learn.maproulette.org/sitemap.xml"],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://learn.maproulette.org/**"],
  schedule: "at 10:00 on Thursday",
  actions: [
    {
      indexName: "maproulette",
      pathsToMatch: ["https://learn.maproulette.org/documentation/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main#content header h1",
            content: "main#content p",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "main#content h1",
            lvl3: "main#content h2",
            lvl4: "main#content h3",
            tags: {
              defaultValue: ["documentation"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "maproulette",
      pathsToMatch: ["https://learn.maproulette.org/screencasts/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main#content header h1",
            content: "main#content p",
            lvl0: {
              selectors: "",
              defaultValue: "Screencasts",
            },
            lvl2: "main#content h1",
            lvl3: "main#content h2",
            lvl4: "main#content h3",
            tags: {
              defaultValue: ["screencasts"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "maproulette",
      pathsToMatch: ["https://learn.maproulette.org/releases/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main#content header h1",
            content: "main#content p",
            lvl0: {
              selectors: "",
              defaultValue: "Releases",
            },
            lvl2: "main#content h1",
            lvl3: "main#content h2",
            lvl4: "main#content h3",
            tags: {
              defaultValue: ["releases"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    maproulette: {
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