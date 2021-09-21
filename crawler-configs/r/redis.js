new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://docsearch-redis.netlify.app/documentation",
    "https://docsearch-redis.netlify.app/",
    "https://docsearch-redis.netlify.app/commands",
    "https://docsearch-redis.netlify.app/topics",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://docsearch-redis.netlify.app/**"],
  schedule: "at 10:00 on Friday",
  actions: [
    {
      indexName: "redis",
      pathsToMatch: ["https://docsearch-redis.netlify.app/documentation**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#topic > p:first-child, .site-content .metadata";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content: "",
            lvl0: {
              selectors: "",
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "redis",
      pathsToMatch: ["https://docsearch-redis.netlify.app/commands**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#topic > p:first-child, .site-content .metadata";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".article-aside li strong",
            content: ".article-main p, .article-main li",
            lvl0: {
              selectors: "",
              defaultValue: "Commands",
            },
            lvl2: ".text h1.command",
            lvl3: ".article-main h2",
            lvl4: ".article-main h3",
            lvl5: ".article-main h4",
            pageRank: "5",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "redis",
      pathsToMatch: ["https://docsearch-redis.netlify.app/topics**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#topic > p:first-child, .site-content .metadata";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#topic h1",
            content: "#topic p, #topic li",
            lvl0: {
              selectors: "",
              defaultValue: "Topics",
            },
            lvl2: "#topic h2",
            lvl3: "#topic h3",
            lvl4: "#topic h4",
            lvl5: "#topic h5",
            pageRank: "1",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    redis: {
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
        "desc(weight.page_rank)",
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