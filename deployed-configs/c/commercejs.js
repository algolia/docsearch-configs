new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://commercejs.com/docs/release-notes/",
    "https://commercejs.com/",
    "https://commercejs.com/docs/sdk/",
    "https://commercejs.com/docs/guides/",
    "https://commercejs.com/docs/community/",
    "https://commercejs.com/docs/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://commercejs.com/sitemap.xml"],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://commercejs.com/**"],
  schedule: "at 11:30 on Tuesday",
  actions: [
    {
      indexName: "commercejs",
      pathsToMatch: ["https://commercejs.com/docs/release-notes/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main li",
            lvl0: {
              selectors: "main h1",
              defaultValue: "Release notes",
            },
            lvl2: "main h3",
            pageRank: "4",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "commercejs",
      pathsToMatch: ["https://commercejs.com/docs/sdk/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h1",
            content: "main p",
            lvl0: {
              selectors:
                ".docs-layout .docs-side-nav__section-header.docs-side-nav__section-header--active",
              defaultValue: "Documentation",
            },
            lvl2: "main h2",
            pageRank: "1",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "commercejs",
      pathsToMatch: ["https://commercejs.com/docs/guides/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h1",
            content: "main p",
            lvl0: {
              selectors:
                ".docs-layout .docs-side-nav__section-header.docs-side-nav__section-header--active",
              defaultValue: "Documentation",
            },
            lvl2: "main h2",
            pageRank: "2",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "commercejs",
      pathsToMatch: ["https://commercejs.com/docs/community/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h1",
            content: "main p",
            lvl0: {
              selectors:
                ".docs-layout .docs-side-nav__section-header.docs-side-nav__section-header--active",
              defaultValue: "Documentation",
            },
            lvl2: "main h2",
            pageRank: "3",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "commercejs",
      pathsToMatch: [
        "https://commercejs.com/docs/**",
        "!https://commercejs.com/docs/release-notes/**",
        "!https://commercejs.com/docs/sdk/**",
        "!https://commercejs.com/docs/guides/**",
        "!https://commercejs.com/docs/community/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h1",
            content: "main p",
            lvl0: {
              selectors:
                ".docs-layout .docs-side-nav__section-header.docs-side-nav__section-header--active",
              defaultValue: "Documentation",
            },
            lvl2: "main h2",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    commercejs: {
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