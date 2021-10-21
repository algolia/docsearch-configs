new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://brew.sh/d%7B4%7D//d%7B2%7D//d%7B2%7D/",
    "https://brew.sh/",
    "https://docs.brew.sh/",
    "https://formulae.brew.sh/docs/",
    "https://formulae.brew.sh/",
    "https://formulae.brew.sh/formula/",
    "https://formulae.brew.sh/cask/",
    "https://formulae.brew.sh/analytics/",
  ],
  renderJavaScript: false,
  sitemaps: [
    "https://brew.sh/sitemap.xml",
    "https://docs.brew.sh/sitemap.xml",
    "https://formulae.brew.sh/sitemap.xml",
  ],
  exclusionPatterns: ["https://brew.sh/blog/**", "**.json"],
  ignoreCanonicalTo: false,
  discoveryPatterns: [
    "https://brew.sh/**",
    "https://docs.brew.sh/**",
    "https://formulae.brew.sh/**",
  ],
  schedule: "at 06:40 on Tuesday",
  actions: [
    {
      indexName: "brew_all",
      pathsToMatch: ["https://brew.sh/\\d{4}/\\d{2}/\\d{2}/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#post h2",
            content: ".postcontent p, .postcontent li",
            lvl0: {
              selectors: "",
              defaultValue: "Blog",
            },
            lvl2: "#post h3:not(.author)",
            site: {
              defaultValue: ["brew"],
            },
            tags: {
              defaultValue: ["blog"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "brew_all",
      pathsToMatch: ["https://brew.sh/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#wrap h2",
            content: "#wrap p, #wrap li",
            lvl0: {
              selectors: "#wrap h1",
            },
            lvl2: "#wrap h3",
            lvl3: "#wrap h4",
            lvl4: "#wrap h5",
            lvl5: "#wrap h6",
            site: {
              defaultValue: ["brew"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "brew_all",
      pathsToMatch: ["https://docs.brew.sh/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#page h2",
            content: "#page p, #page li, #page td:nth-child(n+2)",
            lvl0: {
              selectors: "#page h1",
              defaultValue: "Documentation",
            },
            lvl2: "#page h3",
            lvl3: "#page h4, #page td:first-child",
            lvl4: "#page h5",
            lvl5: "#page h6",
            site: {
              defaultValue: ["docs"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "brew_all",
      pathsToMatch: ["https://formulae.brew.sh/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#page h2",
            content: "#page p, #page li",
            lvl0: {
              selectors: "",
              defaultValue: "JSON API documentation",
            },
            lvl2: "#page h3",
            lvl3: "#page h4",
            lvl4: "#page h5",
            lvl5: "#page h6",
            site: {
              defaultValue: ["formulae"],
            },
            tags: {
              defaultValue: ["formulae_docs"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "brew_all",
      pathsToMatch: ["https://formulae.brew.sh/formula/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#default h2",
            content: "#default .desc, #default .homepage",
            lvl0: {
              selectors: "",
              defaultValue: "Formulae",
            },
            lvl2: "#default h3, #default .aliases",
            lvl3: "#default h4, #default .oldname",
            lvl4: "#default h5",
            lvl5: "#default h6",
            site: {
              defaultValue: ["formulae"],
            },
            tags: {
              defaultValue: ["formula"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "brew_all",
      pathsToMatch: ["https://formulae.brew.sh/cask/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#default h2",
            content: "#default .desc, #default .homepage",
            lvl0: {
              selectors: "",
              defaultValue: "Casks",
            },
            lvl2: "#default h3, #default .names",
            lvl3: "#default h4",
            lvl4: "#default h5",
            lvl5: "#default h6",
            site: {
              defaultValue: ["formulae"],
            },
            tags: {
              defaultValue: ["cask", "formula"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "brew_all",
      pathsToMatch: ["https://formulae.brew.sh/analytics/"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "#page h1",
            content: "#page td:first-child",
            lvl0: {
              selectors: "",
              defaultValue: "Formulae",
            },
            lvl2: "#page h2",
            site: {
              defaultValue: ["formulae"],
            },
            tags: {
              defaultValue: ["analytics", "formula"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "brew_all",
      pathsToMatch: ["https://formulae.brew.sh/analytics/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content: "",
            lvl0: {
              selectors: "",
              defaultValue: "Formulae",
            },
            lvl2: "#wrap h2",
            site: {
              defaultValue: ["formulae"],
            },
            tags: {
              defaultValue: ["analytics", "formula", "install_events"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    brew_all: {
      attributesForFaceting: ["type", "lang", "tags", "site"],
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
      separatorsToIndex: "_+@/",
    },
  },
});