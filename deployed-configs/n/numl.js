new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: ["https://numl.design/"],
  renderJavaScript: false,
  sitemaps: ["https://numl.design/sitemap.xml"],
  exclusionPatterns: [
    "**/**styles/--**",
    "**/**styles/--**/**",
    "**/repl**",
    "**/repl**/**",
    "**/preview**",
    "**/preview**/**",
    "**/blog**",
    "**/blog**/**",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://numl.design/**"],
  schedule: "at 15:40 on Thursday",
  actions: [
    {
      indexName: "numl",
      pathsToMatch: ["https://numl.design/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["Content page. Has no description yet."];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        }
        return helpers.docsearch({
          recordProps: {
            lvl1: "nu-article nu-h2",
            content: "nu-article [role='paragraph']",
            lvl0: {
              selectors: "nu-article nu-h1",
            },
            lvl2: "nu-article nu-h3",
            lvl3: "nu-article nu-h4",
            lvl4: "nu-article nu-h5",
            lvl5: "nu-article nu-h6",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    numl: {
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