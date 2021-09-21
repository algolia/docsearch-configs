new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://www.openhab.org/docs/",
    "https://www.openhab.org/",
    "https://www.openhab.org/addons/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [
    "https://www.openhab.org/addons/bindings/zwave/thing.html",
    "**/index.html",
    "**/**docs/configuration/sitemaps",
    "**/openhabian",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://www.openhab.org/**"],
  schedule: "at 20:30 on Thursday",
  actions: [
    {
      indexName: "openhab",
      pathsToMatch: ["https://www.openhab.org/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".table-of.content__defaults, #table-of.content__defaults";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".content__default h1",
            content:
              ".content__default li, .content__default p, .content__default table td:last-child",
            lvl0: {
              selectors: "p.sidebar-heading.open",
              defaultValue: "Documentation",
            },
            lvl2: ".content__default h2",
            lvl3: ".content__default h3",
            lvl4: ".content__default h4, .content__default table td:first-of-type",
            tags: {
              defaultValue: ["docs"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "openhab",
      pathsToMatch: ["https://www.openhab.org/addons/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".table-of.content__defaults, #table-of.content__defaults";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "p.sidebar-heading.open",
            content:
              ".content__default li, .content__default p, .content__default table td:last-child",
            lvl0: {
              selectors: ".links .router-link-active",
              defaultValue: "Add-ons",
            },
            lvl2: ".content__default h1",
            lvl3: ".content__default h2",
            lvl4: ".content__default h3",
            lvl5: ".content__default h4, .content__default table td:first-of-type",
            tags: {
              defaultValue: ["addons"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    openhab: {
      attributesForFaceting: ["type", "lang", "tags"],
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