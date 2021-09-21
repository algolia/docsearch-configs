new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://www.kirupa.com/learn/",
    "https://www.kirupa.com/",
    "https://www.kirupa.com/react/",
    "https://www.kirupa.com/html5/",
    "https://www.kirupa.com/canvas/",
    "https://www.kirupa.com/data_structures_algorithms/",
    "https://www.kirupa.com/javascript/",
    "https://www.kirupa.com/apps/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [
    "**/examples/**",
    "**/code/**",
    "**/me/**",
    "**/css/**",
    "**/sotw/**",
    "**/interviews/**",
    "**/blend**",
    "**/blend**/**",
    "**/developer**",
    "**/developer**/**",
    "**/motiongraphics**",
    "**/motiongraphics**/**",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://www.kirupa.com/**"],
  schedule: "at 01:10 on Thursday",
  actions: [
    {
      indexName: "kirupa",
      pathsToMatch: ["https://www.kirupa.com/learn/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".tutorialInfo, .homeList, #sigNewsletter + p, .centerImage, #table1, #pageComments, #bookPromo";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#mainContent h2",
            content: "#mainContent > p, #mainContent > li",
            lvl0: {
              selectors: "#mainContent h1",
            },
            lvl2: "#mainContent h3",
            lvl3: "#mainContent h4",
            lvl4: "#mainContent h5",
            lvl5: "#mainContent h6",
            tags: {
              defaultValue: ["learn"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "kirupa",
      pathsToMatch: ["https://www.kirupa.com/react/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".tutorialInfo, .homeList, #sigNewsletter + p, .centerImage, #table1, #pageComments, #bookPromo";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#mainContent h2",
            content: "#mainContent > p, #mainContent > li",
            lvl0: {
              selectors: "#mainContent h1",
            },
            lvl2: "#mainContent h3",
            lvl3: "#mainContent h4",
            lvl4: "#mainContent h5",
            lvl5: "#mainContent h6",
            tags: {
              defaultValue: ["react"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "kirupa",
      pathsToMatch: ["https://www.kirupa.com/html5/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".tutorialInfo, .homeList, #sigNewsletter + p, .centerImage, #table1, #pageComments, #bookPromo";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#mainContent h2",
            content: "#mainContent > p, #mainContent > li",
            lvl0: {
              selectors: "#mainContent h1",
            },
            lvl2: "#mainContent h3",
            lvl3: "#mainContent h4",
            lvl4: "#mainContent h5",
            lvl5: "#mainContent h6",
            tags: {
              defaultValue: ["web"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "kirupa",
      pathsToMatch: ["https://www.kirupa.com/canvas/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".tutorialInfo, .homeList, #sigNewsletter + p, .centerImage, #table1, #pageComments, #bookPromo";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#mainContent h2",
            content: "#mainContent > p, #mainContent > li",
            lvl0: {
              selectors: "#mainContent h1",
            },
            lvl2: "#mainContent h3",
            lvl3: "#mainContent h4",
            lvl4: "#mainContent h5",
            lvl5: "#mainContent h6",
            tags: {
              defaultValue: ["canvas"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "kirupa",
      pathsToMatch: ["https://www.kirupa.com/data_structures_algorithms/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".tutorialInfo, .homeList, #sigNewsletter + p, .centerImage, #table1, #pageComments, #bookPromo";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#mainContent h2",
            content: "#mainContent > p, #mainContent > li",
            lvl0: {
              selectors: "#mainContent h1",
            },
            lvl2: "#mainContent h3",
            lvl3: "#mainContent h4",
            lvl4: "#mainContent h5",
            lvl5: "#mainContent h6",
            tags: {
              defaultValue: ["algorithms"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "kirupa",
      pathsToMatch: ["https://www.kirupa.com/javascript/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".tutorialInfo, .homeList, #sigNewsletter + p, .centerImage, #table1, #pageComments, #bookPromo";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#mainContent h2",
            content: "#mainContent > p, #mainContent > li",
            lvl0: {
              selectors: "#mainContent h1",
            },
            lvl2: "#mainContent h3",
            lvl3: "#mainContent h4",
            lvl4: "#mainContent h5",
            lvl5: "#mainContent h6",
            tags: {
              defaultValue: ["javascript"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "kirupa",
      pathsToMatch: ["https://www.kirupa.com/apps/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".tutorialInfo, .homeList, #sigNewsletter + p, .centerImage, #table1, #pageComments, #bookPromo";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#mainContent h2",
            content: "#mainContent > p, #mainContent > li",
            lvl0: {
              selectors: "#mainContent h1",
            },
            lvl2: "#mainContent h3",
            lvl3: "#mainContent h4",
            lvl4: "#mainContent h5",
            lvl5: "#mainContent h6",
            tags: {
              defaultValue: ["web"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "kirupa",
      pathsToMatch: [
        "https://www.kirupa.com**/**",
        "!https://www.kirupa.com/learn/**",
        "!https://www.kirupa.com/react/**",
        "!https://www.kirupa.com/html5/**",
        "!https://www.kirupa.com/canvas/**",
        "!https://www.kirupa.com/data_structures_algorithms/**",
        "!https://www.kirupa.com/javascript/**",
        "!https://www.kirupa.com/apps/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".tutorialInfo, .homeList, #sigNewsletter + p, .centerImage, #table1, #pageComments, #bookPromo";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#mainContent h2",
            content: "#mainContent > p, #mainContent > li",
            lvl0: {
              selectors: "#mainContent h1",
            },
            lvl2: "#mainContent h3",
            lvl3: "#mainContent h4",
            lvl4: "#mainContent h5",
            lvl5: "#mainContent h6",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    kirupa: {
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