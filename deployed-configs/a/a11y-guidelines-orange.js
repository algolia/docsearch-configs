new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://a11y-guidelines.orange.com/en/web/",
    "https://a11y-guidelines.orange.com/",
    "https://a11y-guidelines.orange.com/en/mobile/android/",
    "https://a11y-guidelines.orange.com/en/mobile/ios/",
    "https://a11y-guidelines.orange.com/en/editorial-content/",
    "https://a11y-guidelines.orange.com/fr/web/",
    "https://a11y-guidelines.orange.com/fr/mobile/android/",
    "https://a11y-guidelines.orange.com/fr/mobile/ios/",
    "https://a11y-guidelines.orange.com/fr/editorial-content/",
    "https://a11y-guidelines.orange.com/en/",
    "https://a11y-guidelines.orange.com/fr/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://a11y-guidelines.orange.com/**"],
  schedule: "at 01:00 on Tuesday",
  actions: [
    {
      indexName: "a11y-guidelines-orange",
      pathsToMatch: ["https://a11y-guidelines.orange.com/en/web/**"],
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
            lvl5: "main h6",
            platform: {
              defaultValue: ["web"],
            },
            language: {
              defaultValue: ["en"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "a11y-guidelines-orange",
      pathsToMatch: ["https://a11y-guidelines.orange.com/en/mobile/android/**"],
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
            lvl5: "main h6",
            platform: {
              defaultValue: ["mobile/android"],
            },
            language: {
              defaultValue: ["en"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "a11y-guidelines-orange",
      pathsToMatch: ["https://a11y-guidelines.orange.com/en/mobile/ios/**"],
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
            lvl5: "main h6",
            platform: {
              defaultValue: ["mobile/ios"],
            },
            language: {
              defaultValue: ["en"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "a11y-guidelines-orange",
      pathsToMatch: [
        "https://a11y-guidelines.orange.com/en/editorial-content/**",
      ],
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
            lvl5: "main h6",
            platform: {
              defaultValue: ["editorial-content"],
            },
            language: {
              defaultValue: ["en"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "a11y-guidelines-orange",
      pathsToMatch: ["https://a11y-guidelines.orange.com/fr/web/**"],
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
            lvl5: "main h6",
            platform: {
              defaultValue: ["web"],
            },
            language: {
              defaultValue: ["fr"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "a11y-guidelines-orange",
      pathsToMatch: ["https://a11y-guidelines.orange.com/fr/mobile/android/**"],
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
            lvl5: "main h6",
            platform: {
              defaultValue: ["mobile/android"],
            },
            language: {
              defaultValue: ["fr"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "a11y-guidelines-orange",
      pathsToMatch: ["https://a11y-guidelines.orange.com/fr/mobile/ios/**"],
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
            lvl5: "main h6",
            platform: {
              defaultValue: ["mobile/ios"],
            },
            language: {
              defaultValue: ["fr"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "a11y-guidelines-orange",
      pathsToMatch: [
        "https://a11y-guidelines.orange.com/fr/editorial-content/**",
      ],
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
            lvl5: "main h6",
            platform: {
              defaultValue: ["editorial-content"],
            },
            language: {
              defaultValue: ["fr"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "a11y-guidelines-orange",
      pathsToMatch: ["https://a11y-guidelines.orange.com/en/**"],
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
            lvl5: "main h6",
            language: {
              defaultValue: ["en"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "a11y-guidelines-orange",
      pathsToMatch: ["https://a11y-guidelines.orange.com/fr/**"],
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
            lvl5: "main h6",
            language: {
              defaultValue: ["fr"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    "a11y-guidelines-orange": {
      attributesForFaceting: ["type", "lang", "language", "platform"],
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