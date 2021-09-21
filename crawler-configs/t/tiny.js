new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://www.tiny.cloud/docs-beta",
    "https://www.tiny.cloud/",
    "https://www.tiny.cloud/docs-3x",
    "https://www.tiny.cloud/docs-4x",
    "https://www.tiny.cloud/docs",
  ],
  renderJavaScript: false,
  sitemaps: ["https://www.tiny.cloud/sitemap.xml"],
  exclusionPatterns: ["**/changelog/**"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://www.tiny.cloud/**"],
  schedule: "at 19:10 on Friday",
  actions: [
    {
      indexName: "tiny",
      pathsToMatch: ["https://www.tiny.cloud/docs-beta**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".feedback, [class^=feedback-], .let-us-know, .license, .content > div, .license";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".heading h1",
            content:
              ".content p,.content li,.content td,.content th,.content dt,.content dd",
            lvl0: {
              selectors: ".breadcrumbs span:nth-child(2) a",
              defaultValue: "Documentation",
            },
            lvl2: ".content h2",
            lvl3: ".content h3",
            lvl4: ".content h4",
            lvl5: ".content h5",
            tags: {
              defaultValue: ["docs-beta"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "tiny",
      pathsToMatch: ["https://www.tiny.cloud/docs-3x**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".feedback, [class^=feedback-], .let-us-know, .license, .content > div, .license";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".heading h1",
            content:
              ".content p,.content li,.content td,.content th,.content dt,.content dd",
            lvl0: {
              selectors: ".breadcrumbs span:nth-child(2) a",
              defaultValue: "Documentation",
            },
            lvl2: ".content h2",
            lvl3: ".content h3",
            lvl4: ".content h4",
            lvl5: ".content h5",
            tags: {
              defaultValue: ["docs-3x"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "tiny",
      pathsToMatch: ["https://www.tiny.cloud/docs-4x**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".feedback, [class^=feedback-], .let-us-know, .license, .content > div, .license";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".heading h1",
            content:
              ".content p,.content li,.content td,.content th,.content dt,.content dd",
            lvl0: {
              selectors: ".breadcrumbs span:nth-child(2) a",
              defaultValue: "Documentation",
            },
            lvl2: ".content h2",
            lvl3: ".content h3",
            lvl4: ".content h4",
            lvl5: ".content h5",
            tags: {
              defaultValue: ["docs-4x"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "tiny",
      pathsToMatch: ["https://www.tiny.cloud/docs**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".feedback, [class^=feedback-], .let-us-know, .license, .content > div, .license";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".heading h1",
            content:
              ".content p,.content li,.content td,.content th,.content dt,.content dd",
            lvl0: {
              selectors: ".breadcrumbs span:nth-child(2) a",
              defaultValue: "Documentation",
            },
            lvl2: ".content h2",
            lvl3: ".content h3",
            lvl4: ".content h4",
            lvl5: ".content h5",
            tags: {
              defaultValue: ["docs"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    tiny: {
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
      separatorsToIndex: "_",
    },
  },
});