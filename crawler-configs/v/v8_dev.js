new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: ["https://v8.dev/docs", "https://v8.dev/", "https://v8.dev/blog/"],
  renderJavaScript: false,
  sitemaps: ["https://v8.dev/sitemap.xml"],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://v8.dev/**"],
  schedule: "at 05:50 on Saturday",
  actions: [
    {
      indexName: "v8_dev",
      pathsToMatch: ["https://v8.dev/docs**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "p.meta";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#main h2",
            content: "#main p, #main li",
            lvl0: {
              selectors: "#main h1",
            },
            lvl2: "#main h3",
            lvl3: "#main h4",
            lvl4: "#main h5",
            lvl5: "#main h6",
            tags: {
              defaultValue: ["docs"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "v8_dev",
      pathsToMatch: ["https://v8.dev/blog/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "p.meta";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "[itemprop='articleBody'] h2",
            content:
              "[itemprop='articleBody'] p, [itemprop='articleBody'] li, #main footer p",
            lvl0: {
              selectors: "#main article h1",
            },
            lvl2: "[itemprop='articleBody'] h3",
            lvl3: "[itemprop='articleBody'] h4",
            lvl4: "[itemprop='articleBody'] h5",
            lvl5: "[itemprop='articleBody'] h6",
            tags: {
              defaultValue: ["blog"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    v8_dev: {
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
      separatorsToIndex: "_",
    },
  },
});