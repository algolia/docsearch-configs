new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://help.doxey.io/en/",
    "https://help.doxey.io/",
    "https://help.doxey.io/de/",
    "https://help.doxey.io/en/support/overview.html",
    "https://help.doxey.io/de/support/overview.html",
    "https://help.doxey.io/en/templates/overview.html",
    "https://help.doxey.io/de/templates/overview.html",
  ],
  renderJavaScript: false,
  sitemaps: ["https://help.doxey.io/sitemap.xml"],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://help.doxey.io/**"],
  schedule: "at 15:30 on Tuesday",
  actions: [
    {
      indexName: "doxey",
      pathsToMatch: ["https://help.doxey.io/en/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#feedback, #feedback ~ p";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".fs-sub-sidebar a[aria-expanded=true]",
            content: "[role='main'] p, [role='main'] li",
            lvl0: {
              selectors: "header .navbar-nav li.active > a",
              defaultValue: "Documentation",
            },
            lvl2: "[role='main'] h1",
            lvl3: "[role='main'] h3",
            lvl4: "[role='main'] h4",
            lvl5: "[role='main'] h5",
            lang: {
              defaultValue: ["en"],
            },
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "doxey",
      pathsToMatch: ["https://help.doxey.io/de/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#feedback, #feedback ~ p";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".fs-sub-sidebar a[aria-expanded=true]",
            content: "[role='main'] p, [role='main'] li",
            lvl0: {
              selectors: "header .navbar-nav li.active > a",
              defaultValue: "Documentation",
            },
            lvl2: "[role='main'] h1",
            lvl3: "[role='main'] h3",
            lvl4: "[role='main'] h4",
            lvl5: "[role='main'] h5",
            lang: {
              defaultValue: ["de"],
            },
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "doxey",
      pathsToMatch: ["https://help.doxey.io/en/support/overview.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#feedback, #feedback ~ p";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".fs-sub-sidebar a[aria-expanded=true]",
            content: "[role='main'] p, [role='main'] li",
            lvl0: {
              selectors: "header .navbar-nav li.active > a",
              defaultValue: "Documentation",
            },
            lvl2: "[role='main'] h1",
            lvl3: "[role='main'] h3",
            lvl4: "[role='main'] h4",
            lvl5: "[role='main'] h5",
            lang: {
              defaultValue: ["en"],
            },
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "doxey",
      pathsToMatch: ["https://help.doxey.io/de/support/overview.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#feedback, #feedback ~ p";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".fs-sub-sidebar a[aria-expanded=true]",
            content: "[role='main'] p, [role='main'] li",
            lvl0: {
              selectors: "header .navbar-nav li.active > a",
              defaultValue: "Documentation",
            },
            lvl2: "[role='main'] h1",
            lvl3: "[role='main'] h3",
            lvl4: "[role='main'] h4",
            lvl5: "[role='main'] h5",
            lang: {
              defaultValue: ["de"],
            },
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "doxey",
      pathsToMatch: ["https://help.doxey.io/en/templates/overview.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#feedback, #feedback ~ p";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".fs-sub-sidebar a[aria-expanded=true]",
            content: "[role='main'] p, [role='main'] li",
            lvl0: {
              selectors: "header .navbar-nav li.active > a",
              defaultValue: "Documentation",
            },
            lvl2: "[role='main'] h1",
            lvl3: "[role='main'] h3",
            lvl4: "[role='main'] h4",
            lvl5: "[role='main'] h5",
            lang: {
              defaultValue: ["en"],
            },
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "doxey",
      pathsToMatch: ["https://help.doxey.io/de/templates/overview.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#feedback, #feedback ~ p";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".fs-sub-sidebar a[aria-expanded=true]",
            content: "[role='main'] p, [role='main'] li",
            lvl0: {
              selectors: "header .navbar-nav li.active > a",
              defaultValue: "Documentation",
            },
            lvl2: "[role='main'] h1",
            lvl3: "[role='main'] h3",
            lvl4: "[role='main'] h4",
            lvl5: "[role='main'] h5",
            lang: {
              defaultValue: ["de"],
            },
          },
          indexHeadings: false,
        });
      },
    },
  ],
  initialIndexSettings: {
    doxey: {
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