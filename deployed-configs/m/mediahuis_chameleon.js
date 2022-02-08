new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "http://chameleon.mediahuis.be/components/",
    "http://chameleon.mediahuis.be/",
    "http://chameleon.mediahuis.be/updates/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["http://chameleon.mediahuis.be/**"],
  schedule: "at 10:00 on Thursday",
  actions: [
    {
      indexName: "mediahuis_chameleon",
      pathsToMatch: ["http://chameleon.mediahuis.be/components/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "section [class*='-Paper'] a";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "main h1",
            content:
              "section p, section li, section h3[class*='regular'], section td:not(first-child)",
            lvl0: {
              selectors: "",
              defaultValue: "Components",
            },
            lvl2: "section h2",
            lvl3: "section h3:not([class*='regular']), section td:first-child",
            lvl4: "section h4",
            lvl5: "section h5",
            lvl6: "section h6",
            tags: {
              defaultValue: ["components"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "mediahuis_chameleon",
      pathsToMatch: ["http://chameleon.mediahuis.be/updates/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "section [class*='-Paper'] a";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "main h1",
            content:
              "section p, section li, section h3[class*='regular'], section td:not(first-child)",
            lvl0: {
              selectors: "",
              defaultValue: "Updates",
            },
            lvl2: "section h2",
            lvl3: "section h3:not([class*='regular']), section td:first-child",
            lvl4: "section h4",
            lvl5: "section h5",
            lvl6: "section h6",
            tags: {
              defaultValue: ["updates"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "mediahuis_chameleon",
      pathsToMatch: [
        "http://chameleon.mediahuis.be/**",
        "!http://chameleon.mediahuis.be/components/**",
        "!http://chameleon.mediahuis.be/updates/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "section [class*='-Paper'] a";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "main h1",
            content:
              "section p, section li, section h3[class*='regular'], section td:not(first-child)",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "section h2",
            lvl3: "section h3:not([class*='regular']), section td:first-child",
            lvl4: "section h4",
            lvl5: "section h5",
            lvl6: "section h6",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    mediahuis_chameleon: {
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