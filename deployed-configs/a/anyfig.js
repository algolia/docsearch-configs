new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://anyfig.now.sh/docs/",
    "https://anyfig.now.sh/",
    "https://anyfig.docsforge.com/master/",
    "https://anyfig.docsforge.com/",
    "https://anyfig.docsforge.com/develop/",
  ],
  renderJavaScript: false,
  sitemaps: [
    "https://anyfig.now.sh/sitemap.xml",
    "https://anyfig.docsforge.com/sitemap.xml",
  ],
  exclusionPatterns: [],
  ignoreCanonicalTo: true,
  discoveryPatterns: [
    "https://anyfig.now.sh/**",
    "https://anyfig.docsforge.com/**",
  ],
  schedule: "at 01:30 on Tuesday",
  actions: [
    {
      indexName: "anyfig",
      pathsToMatch: ["https://anyfig.now.sh/docs/**"],
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
            tags: {
              defaultValue: ["docusaurus2"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "anyfig",
      pathsToMatch: ["https://anyfig.docsforge.com/master/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            version: {
              defaultValue: ["master"],
            },
            tags: {
              defaultValue: ["docsforge"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "anyfig",
      pathsToMatch: ["https://anyfig.docsforge.com/develop/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            version: {
              defaultValue: ["develop"],
            },
            tags: {
              defaultValue: ["docsforge"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    anyfig: {
      attributesForFaceting: [
        "type",
        "lang",
        "language",
        "version",
        "docusaurus_tag",
        "tags",
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