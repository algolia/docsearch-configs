new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://test.vite.wiki/zh/",
    "https://test.vite.wiki/",
    "https://vite.wiki/zh/",
    "https://vite.wiki/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://test.vite.wiki/**", "https://vite.wiki/**"],
  schedule: "at 05:10 on Saturday",
  actions: [
    {
      indexName: "vite_labs",
      pathsToMatch: ["https://test.vite.wiki/zh/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".page .theme-default-content h1",
            content:
              ".page .theme-default-content p, .page .theme-default-content li",
            lvl0: {
              selectors: "p.sidebar-heading.open",
              defaultValue: "Documentation",
            },
            lvl2: ".page .theme-default-content h2",
            lvl3: ".page .theme-default-content h3",
            lvl4: ".page .theme-default-content h4",
            lvl5: ".page .theme-default-content h5",
            lang: {
              defaultValue: ["zh"],
            },
            version: {
              defaultValue: ["test"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "vite_labs",
      pathsToMatch: ["https://test.vite.wiki/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".page .theme-default-content h1",
            content:
              ".page .theme-default-content p, .page .theme-default-content li",
            lvl0: {
              selectors: "p.sidebar-heading.open",
              defaultValue: "Documentation",
            },
            lvl2: ".page .theme-default-content h2",
            lvl3: ".page .theme-default-content h3",
            lvl4: ".page .theme-default-content h4",
            lvl5: ".page .theme-default-content h5",
            version: {
              defaultValue: ["test"],
            },
            lang: {
              defaultValue: ["en"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "vite_labs",
      pathsToMatch: ["https://vite.wiki/zh/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".page .theme-default-content h1",
            content:
              ".page .theme-default-content p, .page .theme-default-content li",
            lvl0: {
              selectors: "p.sidebar-heading.open",
              defaultValue: "Documentation",
            },
            lvl2: ".page .theme-default-content h2",
            lvl3: ".page .theme-default-content h3",
            lvl4: ".page .theme-default-content h4",
            lvl5: ".page .theme-default-content h5",
            lang: {
              defaultValue: ["zh"],
            },
            version: {
              defaultValue: ["master"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "vite_labs",
      pathsToMatch: ["https://vite.wiki/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".page .theme-default-content h1",
            content:
              ".page .theme-default-content p, .page .theme-default-content li",
            lvl0: {
              selectors: "p.sidebar-heading.open",
              defaultValue: "Documentation",
            },
            lvl2: ".page .theme-default-content h2",
            lvl3: ".page .theme-default-content h3",
            lvl4: ".page .theme-default-content h4",
            lvl5: ".page .theme-default-content h5",
            lang: {
              defaultValue: ["en"],
            },
            version: {
              defaultValue: ["master"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    vite_labs: {
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