new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://mercure.rocks/docs",
    "https://mercure.rocks/",
    "https://mercure.rocks/spec",
  ],
  renderJavaScript: false,
  sitemaps: ["https://mercure.rocks/sitemap.xml"],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://mercure.rocks/**"],
  schedule: "at 15:40 on Tuesday",
  actions: [
    {
      indexName: "dunglas_mercure",
      pathsToMatch: ["https://mercure.rocks/docs**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["404: Not Found"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        }
        return helpers.docsearch({
          recordProps: {
            lvl1: "[class*='Box-root-'] h2",
            content: "[class*='Box-root-'] p, [class*='Box-root-'] li",
            lvl0: {
              selectors: "[class*='Box-root-'] h1",
            },
            lvl2: "[class*='Box-root-'] h3",
            lvl3: "[class*='Box-root-'] h4",
            lvl4: "[class*='Box-root-'] h5",
            lvl5: "[class*='Box-root-'] h6",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "dunglas_mercure",
      pathsToMatch: ["https://mercure.rocks/spec**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["404: Not Found"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        }
        return helpers.docsearch({
          recordProps: {
            lvl1: "[class*='Box-root-'] h2",
            content: "[class*='Box-root-'] p, [class*='Box-root-'] li",
            lvl0: {
              selectors: "[class*='Box-root-'] h1",
            },
            lvl2: "[class*='Box-root-'] h3",
            lvl3: "[class*='Box-root-'] h4",
            lvl4: "[class*='Box-root-'] h5",
            lvl5: "[class*='Box-root-'] h6",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    dunglas_mercure: {
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