new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://www.jovo.tech/docs/reference/",
    "https://www.jovo.tech/",
    "https://www.jovo.tech/tutorials/",
    "https://www.jovo.tech/docs/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [
    "**/**reference/lib**",
    "**/**reference/lib**/**",
    "**/**reference/examples**",
    "**/**reference/examples**/**",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://www.jovo.tech/**"],
  schedule: "at 20:30 on Wednesday",
  actions: [
    {
      indexName: "jovo",
      pathsToMatch: ["https://www.jovo.tech/docs/reference/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".breadcrumb + h1 + p + ul, #comments-and-questions, #disqus_thread";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#main h1",
            content: "section p, section li:not([class*=breadcrumb])",
            lvl0: {
              selectors: "",
              defaultValue: "Reference",
            },
            lvl2: "section h2",
            lvl3: "section h3",
            lvl4: "section h4",
            lvl5: "section h5",
            tags: {
              defaultValue: ["reference"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "jovo",
      pathsToMatch: ["https://www.jovo.tech/tutorials/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".breadcrumb + h1 + p + ul, #comments-and-questions, #disqus_thread";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h1",
            content: ".content p, .content li",
            lvl0: {
              selectors: "",
              defaultValue: "Tutorials",
            },
            lvl2: ".content h2",
            lvl3: ".content h3",
            lvl4: ".content h4",
            tags: {
              defaultValue: ["tutorials"],
            },
            pageRank: "1",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "jovo",
      pathsToMatch: ["https://www.jovo.tech/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".breadcrumb + h1 + p + ul, #comments-and-questions, #disqus_thread";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h1",
            content: ".content p, .content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".content h2",
            lvl3: ".content h3",
            lvl4: ".content h4",
            tags: {
              defaultValue: ["docs"],
            },
            pageRank: "2",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    jovo: {
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