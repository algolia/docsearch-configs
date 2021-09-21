new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://www.lightningdesignsystem.com/components/",
    "https://www.lightningdesignsystem.com/",
    "https://www.lightningdesignsystem.com/design-tokens/",
    "https://www.lightningdesignsystem.com/icons/",
    "https://www.lightningdesignsystem.com/guidelines/",
    "https://www.lightningdesignsystem.com/faq/",
    "https://www.lightningdesignsystem.com/platforms/",
    "https://www.lightningdesignsystem.com/getting-started/",
    "https://www.lightningdesignsystem.com/release-notes/",
    "https://www.lightningdesignsystem.com/articles/",
    "https://www.lightningdesignsystem.com/downloads/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: ["**/**?**", "**/**?**/**"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://www.lightningdesignsystem.com/**"],
  schedule: "at 05:10 on Thursday",
  actions: [
    {
      indexName: "lightningdesignsystem",
      pathsToMatch: ["https://www.lightningdesignsystem.com/components/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "span.slds-badge, .docsearch-ignore";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h1",
            content:
              ".docsearch-text, .site-main-stage__content p, .site-main-stage__content th, .site-content p, .docsearch-text, .slds-text-longform p, .site-content th",
            lvl0: {
              selectors: ".docsearch-category",
            },
            lvl2: ".docsearch-level-2 .slds-hide, #overview, div.lead.doc",
            pageRank: "2",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "lightningdesignsystem",
      pathsToMatch: ["https://www.lightningdesignsystem.com/design-tokens/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "span.slds-badge, .docsearch-ignore";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h1",
            content:
              ".docsearch-text, .site-main-stage__content p, .site-main-stage__content th, .site-content p, .docsearch-text, .slds-text-longform p, .site-content th",
            lvl0: {
              selectors: ".docsearch-category",
            },
            lvl2: ".docsearch-level-2 .slds-hide, #overview, div.lead.doc",
            pageRank: "1",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "lightningdesignsystem",
      pathsToMatch: ["https://www.lightningdesignsystem.com/icons/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "span.slds-badge, .docsearch-ignore";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h1",
            content:
              ".docsearch-text, .site-main-stage__content p, .site-main-stage__content th, .site-content p, .docsearch-text, .slds-text-longform p, .site-content th",
            lvl0: {
              selectors: ".docsearch-category",
            },
            lvl2: ".docsearch-level-2 .slds-hide, #overview, div.lead.doc",
            pageRank: "1",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "lightningdesignsystem",
      pathsToMatch: ["https://www.lightningdesignsystem.com/guidelines/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "span.slds-badge, .docsearch-ignore";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h1",
            content:
              ".docsearch-text, .site-main-stage__content p, .site-main-stage__content th, .site-content p, .docsearch-text, .slds-text-longform p, .site-content th",
            lvl0: {
              selectors: ".docsearch-category",
            },
            lvl2: ".docsearch-level-2 .slds-hide, #overview, div.lead.doc",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "lightningdesignsystem",
      pathsToMatch: ["https://www.lightningdesignsystem.com/faq/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "span.slds-badge, .docsearch-ignore";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h1",
            content:
              ".docsearch-text, .site-main-stage__content p, .site-main-stage__content th, .site-content p, .docsearch-text, .slds-text-longform p, .site-content th",
            lvl0: {
              selectors: ".docsearch-category",
            },
            lvl2: ".docsearch-level-2 .slds-hide, #overview, div.lead.doc",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "lightningdesignsystem",
      pathsToMatch: ["https://www.lightningdesignsystem.com/platforms/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "span.slds-badge, .docsearch-ignore";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h1",
            content:
              ".docsearch-text, .site-main-stage__content p, .site-main-stage__content th, .site-content p, .docsearch-text, .slds-text-longform p, .site-content th",
            lvl0: {
              selectors: ".docsearch-category",
            },
            lvl2: ".docsearch-level-2 .slds-hide, #overview, div.lead.doc",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "lightningdesignsystem",
      pathsToMatch: [
        "https://www.lightningdesignsystem.com/getting-started/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "span.slds-badge, .docsearch-ignore";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h1",
            content:
              ".docsearch-text, .site-main-stage__content p, .site-main-stage__content th, .site-content p, .docsearch-text, .slds-text-longform p, .site-content th",
            lvl0: {
              selectors: ".docsearch-category",
            },
            lvl2: ".docsearch-level-2 .slds-hide, #overview, div.lead.doc",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "lightningdesignsystem",
      pathsToMatch: ["https://www.lightningdesignsystem.com/release-notes/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "span.slds-badge, .docsearch-ignore";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h1",
            content:
              ".docsearch-text, .site-main-stage__content p, .site-main-stage__content th, .site-content p, .docsearch-text, .slds-text-longform p, .site-content th",
            lvl0: {
              selectors: ".docsearch-category",
            },
            lvl2: ".docsearch-level-2 .slds-hide, #overview, div.lead.doc",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "lightningdesignsystem",
      pathsToMatch: ["https://www.lightningdesignsystem.com/articles/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "span.slds-badge, .docsearch-ignore";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h1",
            content:
              ".docsearch-text, .site-main-stage__content p, .site-main-stage__content th, .site-content p, .docsearch-text, .slds-text-longform p, .site-content th",
            lvl0: {
              selectors: ".docsearch-category",
            },
            lvl2: ".docsearch-level-2 .slds-hide, #overview, div.lead.doc",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "lightningdesignsystem",
      pathsToMatch: ["https://www.lightningdesignsystem.com/downloads/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "span.slds-badge, .docsearch-ignore";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h1",
            content:
              ".docsearch-text, .site-main-stage__content p, .site-main-stage__content th, .site-content p, .docsearch-text, .slds-text-longform p, .site-content th",
            lvl0: {
              selectors: ".docsearch-category",
            },
            lvl2: ".docsearch-level-2 .slds-hide, #overview, div.lead.doc",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "lightningdesignsystem",
      pathsToMatch: ["https://www.lightningdesignsystem.com/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "span.slds-badge, .docsearch-ignore";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h1",
            content:
              ".docsearch-text, .site-main-stage__content p, .site-main-stage__content th, .site-content p, .docsearch-text, .slds-text-longform p, .site-content th",
            lvl0: {
              selectors: ".docsearch-category",
            },
            lvl2: ".docsearch-level-2 .slds-hide, #overview, div.lead.doc",
            pageRank: "1",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    lightningdesignsystem: {
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
      separatorsToIndex: ".-_",
    },
  },
});