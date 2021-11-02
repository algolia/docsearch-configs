new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://docs.secureauth.com/2104test/",
    "https://docs.secureauth.com/",
    "https://docs.secureauth.com/2006test/",
    "https://docs.secureauth.com/1907test/",
    "https://docs.secureauth.com/2104test/index.html?lang=en",
    "https://docs.secureauth.com/2006test/index.html?lang=en",
    "https://docs.secureauth.com/1907test/index.html?lang=en",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [
    "**/login**",
    "**/login**/**",
    "**/label/**",
    "**/download**",
    "**/download**/**",
    "**/pages/**",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://docs.secureauth.com/**"],
  schedule: "at 15:00 on Friday",
  actions: [
    {
      indexName: "secureauth",
      pathsToMatch: ["https://docs.secureauth.com/2104test/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "section h2",
            content: "section p, section li",
            lvl0: {
              selectors: "section h1",
            },
            lvl2: "section h3",
            lvl3: "section h4",
            lvl4: "section h5",
            lvl5: "section h6",
            versions: {
              defaultValue: ["2104test"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "secureauth",
      pathsToMatch: ["https://docs.secureauth.com/2006test/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "section h2",
            content: "section p, section li",
            lvl0: {
              selectors: "section h1",
            },
            lvl2: "section h3",
            lvl3: "section h4",
            lvl4: "section h5",
            lvl5: "section h6",
            versions: {
              defaultValue: ["2006test"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "secureauth",
      pathsToMatch: ["https://docs.secureauth.com/1907test/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "section h2",
            content: "section p, section li",
            lvl0: {
              selectors: "section h1",
            },
            lvl2: "section h3",
            lvl3: "section h4",
            lvl4: "section h5",
            lvl5: "section h6",
            versions: {
              defaultValue: ["1907test"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "secureauth",
      pathsToMatch: [
        "https://docs.secureauth.com/2104test/index.html?lang=en**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "section h2",
            content: "section p, section li",
            lvl0: {
              selectors: "section h1",
            },
            lvl2: "section h3",
            lvl3: "section h4",
            lvl4: "section h5",
            lvl5: "section h6",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "secureauth",
      pathsToMatch: [
        "https://docs.secureauth.com/2006test/index.html?lang=en**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "section h2",
            content: "section p, section li",
            lvl0: {
              selectors: "section h1",
            },
            lvl2: "section h3",
            lvl3: "section h4",
            lvl4: "section h5",
            lvl5: "section h6",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "secureauth",
      pathsToMatch: [
        "https://docs.secureauth.com/1907test/index.html?lang=en**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "section h2",
            content: "section p, section li",
            lvl0: {
              selectors: "section h1",
            },
            lvl2: "section h3",
            lvl3: "section h4",
            lvl4: "section h5",
            lvl5: "section h6",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    secureauth: {
      attributesForFaceting: ["type", "lang", "version"],
      attributesToRetrieve: [
        "hierarchy",
        "content",
        "anchor",
        "url",
        "url_without_anchor",
        "type",
        "version",
        "cat1",
        "cat2",
        "cat3",
        "cat4",
        "cat5",
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
    },
  },
});