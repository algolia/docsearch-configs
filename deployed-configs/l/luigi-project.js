new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://docs.luigi-project.io/docu-microfrontend/docs/faq",
    "https://docs.luigi-project.io/",
    "https://docs.luigi-project.io/docu-microfrontend/docs/tutorials",
    "https://docs.luigi-project.io/docu-microfrontend/docs",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://docs.luigi-project.io/**"],
  schedule: "at 05:40 on Thursday",
  actions: [
    {
      indexName: "luigi-project",
      pathsToMatch: [
        "https://docs.luigi-project.io/docu-microfrontend/docs/faq**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".h2Wrapper > h2",
            content:
              "p, .accordion-item-content p, .accordion-item-content ul, .accordion-item-content ol, .accordion-item-content pre",
            lvl0: {
              selectors: ".h1Wrapper > h1",
            },
            lvl2: ".accordion-item-title > h3",
            lvl3: ".accordion-item-content > h4",
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "luigi-project",
      pathsToMatch: [
        "https://docs.luigi-project.io/docu-microfrontend/docs/tutorials**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".h2Wrapper > h2",
            content:
              "p, .accordion-item-content p, .accordion-item-content ul, .accordion-item-content ol, .accordion-item-content pre",
            lvl0: {
              selectors: ".h1Wrapper > h1",
            },
            lvl2: ".accordion-item-title > h3",
            lvl3: ".accordion-item-content > h4",
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "luigi-project",
      pathsToMatch: [
        "https://docs.luigi-project.io/docu-microfrontend/docs**/**",
        "!https://docs.luigi-project.io/docu-microfrontend/docs/faq**/**",
        "!https://docs.luigi-project.io/docu-microfrontend/docs/tutorials**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".h2Wrapper > h2",
            content:
              "section blockquote, section p, section ul, section ol, section pre",
            lvl0: {
              selectors: ".h1Wrapper > h1",
            },
            lvl2: ".h3Wrapper > h3",
            lvl3: ".h4Wrapper > h4",
            lvl4: ".h5Wrapper > h5",
            lvl5: ".h6Wrapper > h6",
          },
          indexHeadings: false,
        });
      },
    },
  ],
  initialIndexSettings: {
    "luigi-project": {
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