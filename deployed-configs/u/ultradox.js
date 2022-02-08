new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://help.ultradox.com/en/",
    "https://help.ultradox.com/",
    "https://help.ultradox.com/de/",
    "https://help.ultradox.com/en/guides/overview.html",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: ["**/pricing/**", "**/reference/api/**"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://help.ultradox.com/**"],
  schedule: "at 00:20 on Saturday",
  actions: [
    {
      indexName: "ultradox",
      pathsToMatch: ["https://help.ultradox.com/en/**"],
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
      indexName: "ultradox",
      pathsToMatch: ["https://help.ultradox.com/de/**"],
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
      indexName: "ultradox",
      pathsToMatch: ["https://help.ultradox.com/en/guides/overview.html**/**"],
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
          },
          indexHeadings: false,
        });
      },
    },
  ],
  initialIndexSettings: {
    ultradox: {
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