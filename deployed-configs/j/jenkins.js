new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: ["https://www.jenkins.io/", "https://www.jenkins.io/zh/"],
  renderJavaScript: false,
  sitemaps: ["https://www.jenkins.io/sitemap.xml"],
  exclusionPatterns: ["**/**upgrade-guide**", "**/**upgrade-guide**/**"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://www.jenkins.io/**"],
  schedule: "at 20:00 on Wednesday",
  actions: [
    {
      indexName: "jenkins",
      pathsToMatch: ["https://www.jenkins.io/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["404 Not Found"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        } // Removing DOM elements we don't want to crawl
        const toRemove = ".sidebar-nav";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".container .body h1",
            content: ".container .body p",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".container .body h2",
            lvl3: ".container .body h3",
            lvl4: ".container .body h4",
            lvl5: ".container .body h5",
            tags: {
              defaultValue: ["en"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "jenkins",
      pathsToMatch: ["https://www.jenkins.io/zh/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["404 Not Found"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        } // Removing DOM elements we don't want to crawl
        const toRemove = ".sidebar-nav";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".container .body h1",
            content: ".container .body p",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".container .body h2",
            lvl3: ".container .body h3",
            lvl4: ".container .body h4",
            lvl5: ".container .body h5",
            tags: {
              defaultValue: ["zh"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    jenkins: {
      attributesForFaceting: ["type", "lang", "tags"],
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