new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://developer.snapappointments.com/bootstrap-select/",
    "https://developer.snapappointments.com/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://developer.snapappointments.com/sitemap.xml"],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://developer.snapappointments.com/**"],
  schedule: "at 06:30 on Tuesday",
  actions: [
    {
      indexName: "bootstrap-select",
      pathsToMatch: [
        "https://developer.snapappointments.com/bootstrap-select/",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "[class='bs-docs-example']";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".container.pb-4 h1",
            content:
              ".container.pb-4 p, .container.pb-4 li,.container.pb-4 .small, .bs-docs-header .lead",
            lvl0: {
              selectors: ".bs-docs-header h1",
              defaultValue: "Documentation",
            },
            lvl2: ".container.pb-4 h2",
            lvl3: ".container.pb-4 h3",
            lvl4: ".container.pb-4 h4",
            lvl5: ".container.pb-4 h5",
            lvl6: ".container.pb-4 h6",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "bootstrap-select",
      pathsToMatch: [
        "https://developer.snapappointments.com/bootstrap-select/**",
        "!https://developer.snapappointments.com/bootstrap-select/",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "[class='bs-docs-example']";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "[role='main'] h1",
            content: "[role='main'] p, [role='main'] li",
            lvl0: {
              selectors: ".bs-docs-header h1",
              defaultValue: "Documentation",
            },
            lvl2: "[role='main'] h2, [role='main'] td:first-child",
            lvl3: "[role='main'] h4",
            lvl4: "[role='main'] h5",
            lvl5: "[role='main'] h6",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    "bootstrap-select": {
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