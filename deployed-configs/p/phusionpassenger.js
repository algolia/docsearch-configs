new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://www.phusionpassenger.com/docs/tutorials/deploy_to_production/",
    "https://www.phusionpassenger.com/",
    "https://www.phusionpassenger.com/docs/tutorials/installation/ruby/",
    "https://www.phusionpassenger.com/docs/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://www.phusionpassenger.com/**"],
  schedule: "at 00:10 on Friday",
  actions: [
    {
      indexName: "phusionpassenger",
      pathsToMatch: [
        "https://www.phusionpassenger.com/docs/tutorials/deploy_to_production/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          "[id^='next-step'], [id^='next-step'] ~ p, [id^='next-step'] ~ li, .toc-container";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".bs-docs-section h1",
            content: ".bs-docs-section p, .bs-docs-section li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".bs-docs-section h2",
            lvl3: ".bs-docs-section h3",
            lvl4: ".bs-docs-section h4",
            lvl5: ".bs-docs-section h5",
            pageRank: "1",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "phusionpassenger",
      pathsToMatch: [
        "https://www.phusionpassenger.com/docs/tutorials/installation/ruby/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          "[id^='next-step'], [id^='next-step'] ~ p, [id^='next-step'] ~ li, .toc-container";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".bs-docs-section h1",
            content: ".bs-docs-section p, .bs-docs-section li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".bs-docs-section h2",
            lvl3: ".bs-docs-section h3",
            lvl4: ".bs-docs-section h4",
            lvl5: ".bs-docs-section h5",
            pageRank: "1",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "phusionpassenger",
      pathsToMatch: [
        "https://www.phusionpassenger.com/docs/**",
        "!https://www.phusionpassenger.com/docs/tutorials/deploy_to_production/**",
        "!https://www.phusionpassenger.com/docs/tutorials/installation/ruby/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          "[id^='next-step'], [id^='next-step'] ~ p, [id^='next-step'] ~ li, .toc-container";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".bs-docs-section h1",
            content: ".bs-docs-section p, .bs-docs-section li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".bs-docs-section h2",
            lvl3: ".bs-docs-section h3",
            lvl4: ".bs-docs-section h4",
            lvl5: ".bs-docs-section h5",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    phusionpassenger: {
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