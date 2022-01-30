new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://docs.talon.one/management-api",
    "https://docs.talon.one/",
    "https://docs.talon.one/integration-api",
  ],
  renderJavaScript: true,
  sitemaps: ["https://docs.talon.one/sitemap.xml"],
  exclusionPatterns: [],
  ignoreCanonicalTo: true,
  discoveryPatterns: ["https://docs.talon.one/**"],
  schedule: "at 19:00 on Friday",
  actions: [
    {
      indexName: "talon",
      pathsToMatch: ["https://docs.talon.one/management-api**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".api-content h1",
            content: ".api-content p, .api-content ul, .api-content ol",
            lvl0: {
              selectors: "",
              defaultValue: "Management API reference docs",
            },
            lvl2: ".api-content h2",
            lvl3: ".api-content h3",
            lvl4: ".api-content h4",
            pageRank: "1",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "talon",
      pathsToMatch: ["https://docs.talon.one/integration-api**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".api-content h1",
            content: ".api-content p, .api-content ul, .api-content ol",
            lvl0: {
              selectors: "",
              defaultValue: "Integration API reference docs",
            },
            lvl2: ".api-content h2",
            lvl3: ".api-content h3",
            lvl4: ".api-content h4",
            pageRank: "1",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "talon",
      pathsToMatch: [
        "https://docs.talon.one/**",
        "!https://docs.talon.one/management-api**/**",
        "!https://docs.talon.one/integration-api**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // priority order: deepest active sub list header -> navbar active item -> 'Documentation'
        const lvl0 =
          $(
            ".menu__link.menu__link--sublist.menu__link--active, .navbar__item.navbar__link--active"
          )
            .last()
            .text() || "Documentation";

        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: "",
              defaultValue: lvl0,
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    talon: {
      attributesForFaceting: [
        "type",
        "lang",
        "language",
        "version",
        "docusaurus_tag",
      ],
      attributesToRetrieve: [
        "hierarchy",
        "content",
        "anchor",
        "url",
        "url_without_anchor",
        "type",
      ],
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