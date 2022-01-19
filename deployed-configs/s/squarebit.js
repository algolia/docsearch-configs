new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://transition.topshelfcraft.com/software/craft/searchplus/usage",
    "https://transition.topshelfcraft.com/",
    "https://transition.topshelfcraft.com/software/craft/charge/usage",
    "https://transition.topshelfcraft.com/software/craft/shortlist/usage",
    "https://transition.topshelfcraft.com/software/craft/maps/usage",
    "https://transition.topshelfcraft.com/software/expressionengine/binder/usage",
    "https://transition.topshelfcraft.com/software/expressionengine/charge/usage",
    "https://transition.topshelfcraft.com/software/expressionengine/maps/usage",
    "https://transition.topshelfcraft.com/software/expressionengine/shortlist/usage",
    "https://transition.topshelfcraft.com/software/expressionengine/seed/usage",
    "https://transition.topshelfcraft.com/software/craft/searchplus/faq",
    "https://transition.topshelfcraft.com/software/craft/charge/faq",
    "https://transition.topshelfcraft.com/software/craft/shortlist/faq",
    "https://transition.topshelfcraft.com/software/craft/maps/faq",
    "https://transition.topshelfcraft.com/software/expressionengine/binder/faq",
    "https://transition.topshelfcraft.com/software/expressionengine/charge/faq",
    "https://transition.topshelfcraft.com/software/expressionengine/maps/faq",
    "https://transition.topshelfcraft.com/software/expressionengine/shortlist/faq",
    "https://transition.topshelfcraft.com/software/expressionengine/seed/faq",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: ["**/**#**", "**/**#**/**"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://transition.topshelfcraft.com/**"],
  schedule: "at 15:30 on Friday",
  actions: [
    {
      indexName: "squarebit",
      pathsToMatch: [
        "https://transition.topshelfcraft.com/software/craft/searchplus/usage**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".quickjump";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".tab__body h2, .tab__body--fw h2",
            content: ".tab__body p, .tab__body--fw p",
            lvl0: {
              selectors: "",
              defaultValue: "FAQ",
            },
            lvl2: ".tab__body h3, .tab__body--fw h3",
            lvl3: ".tab__body h4, .tab__body--fw h4",
            tags: {
              defaultValue: ["craft", "searchplus"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "squarebit",
      pathsToMatch: [
        "https://transition.topshelfcraft.com/software/craft/charge/usage**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".quickjump";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".tab__body h2, .tab__body--fw h2",
            content: ".tab__body p, .tab__body--fw p",
            lvl0: {
              selectors: "",
              defaultValue: "FAQ",
            },
            lvl2: ".tab__body h3, .tab__body--fw h3",
            lvl3: ".tab__body h4, .tab__body--fw h4",
            tags: {
              defaultValue: ["craft", "charge"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "squarebit",
      pathsToMatch: [
        "https://transition.topshelfcraft.com/software/craft/shortlist/usage**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".quickjump";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".tab__body h2, .tab__body--fw h2",
            content: ".tab__body p, .tab__body--fw p",
            lvl0: {
              selectors: "",
              defaultValue: "FAQ",
            },
            lvl2: ".tab__body h3, .tab__body--fw h3",
            lvl3: ".tab__body h4, .tab__body--fw h4",
            tags: {
              defaultValue: ["craft", "shortlist"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "squarebit",
      pathsToMatch: [
        "https://transition.topshelfcraft.com/software/craft/maps/usage**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".quickjump";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".tab__body h2, .tab__body--fw h2",
            content: ".tab__body p, .tab__body--fw p",
            lvl0: {
              selectors: "",
              defaultValue: "FAQ",
            },
            lvl2: ".tab__body h3, .tab__body--fw h3",
            lvl3: ".tab__body h4, .tab__body--fw h4",
            tags: {
              defaultValue: ["craft", "maps"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "squarebit",
      pathsToMatch: [
        "https://transition.topshelfcraft.com/software/expressionengine/binder/usage**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".quickjump";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".tab__body h2, .tab__body--fw h2",
            content: ".tab__body p, .tab__body--fw p",
            lvl0: {
              selectors: "",
              defaultValue: "FAQ",
            },
            lvl2: ".tab__body h3, .tab__body--fw h3",
            lvl3: ".tab__body h4, .tab__body--fw h4",
            tags: {
              defaultValue: ["expressionengine", "binder"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "squarebit",
      pathsToMatch: [
        "https://transition.topshelfcraft.com/software/expressionengine/charge/usage**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".quickjump";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".tab__body h2, .tab__body--fw h2",
            content: ".tab__body p, .tab__body--fw p",
            lvl0: {
              selectors: "",
              defaultValue: "FAQ",
            },
            lvl2: ".tab__body h3, .tab__body--fw h3",
            lvl3: ".tab__body h4, .tab__body--fw h4",
            tags: {
              defaultValue: ["expressionengine", "charge"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "squarebit",
      pathsToMatch: [
        "https://transition.topshelfcraft.com/software/expressionengine/maps/usage**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".quickjump";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".tab__body h2, .tab__body--fw h2",
            content: ".tab__body p, .tab__body--fw p",
            lvl0: {
              selectors: "",
              defaultValue: "FAQ",
            },
            lvl2: ".tab__body h3, .tab__body--fw h3",
            lvl3: ".tab__body h4, .tab__body--fw h4",
            tags: {
              defaultValue: ["expressionengine", "maps"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "squarebit",
      pathsToMatch: [
        "https://transition.topshelfcraft.com/software/expressionengine/shortlist/usage**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".quickjump";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".tab__body h2, .tab__body--fw h2",
            content: ".tab__body p, .tab__body--fw p",
            lvl0: {
              selectors: "",
              defaultValue: "FAQ",
            },
            lvl2: ".tab__body h3, .tab__body--fw h3",
            lvl3: ".tab__body h4, .tab__body--fw h4",
            tags: {
              defaultValue: ["expressionengine", "shortlist"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "squarebit",
      pathsToMatch: [
        "https://transition.topshelfcraft.com/software/expressionengine/seed/usage**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".quickjump";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".tab__body h2, .tab__body--fw h2",
            content: ".tab__body p, .tab__body--fw p",
            lvl0: {
              selectors: "",
              defaultValue: "FAQ",
            },
            lvl2: ".tab__body h3, .tab__body--fw h3",
            lvl3: ".tab__body h4, .tab__body--fw h4",
            tags: {
              defaultValue: ["expressionengine", "seed"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "squarebit",
      pathsToMatch: [
        "https://transition.topshelfcraft.com/software/craft/searchplus/faq**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".quickjump";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".tab__body h2, .tab__body--fw h2",
            content: ".tab__body p, .tab__body--fw p",
            lvl0: {
              selectors: "",
              defaultValue: "FAQ",
            },
            lvl2: ".tab__body h3, .tab__body--fw h3",
            lvl3: ".tab__body h4, .tab__body--fw h4",
            tags: {
              defaultValue: ["craft", "searchplus"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "squarebit",
      pathsToMatch: [
        "https://transition.topshelfcraft.com/software/craft/charge/faq**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".quickjump";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".tab__body h2, .tab__body--fw h2",
            content: ".tab__body p, .tab__body--fw p",
            lvl0: {
              selectors: "",
              defaultValue: "FAQ",
            },
            lvl2: ".tab__body h3, .tab__body--fw h3",
            lvl3: ".tab__body h4, .tab__body--fw h4",
            tags: {
              defaultValue: ["craft", "charge"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "squarebit",
      pathsToMatch: [
        "https://transition.topshelfcraft.com/software/craft/shortlist/faq**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".quickjump";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".tab__body h2, .tab__body--fw h2",
            content: ".tab__body p, .tab__body--fw p",
            lvl0: {
              selectors: "",
              defaultValue: "FAQ",
            },
            lvl2: ".tab__body h3, .tab__body--fw h3",
            lvl3: ".tab__body h4, .tab__body--fw h4",
            tags: {
              defaultValue: ["craft", "shortlist"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "squarebit",
      pathsToMatch: [
        "https://transition.topshelfcraft.com/software/craft/maps/faq**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".quickjump";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".tab__body h2, .tab__body--fw h2",
            content: ".tab__body p, .tab__body--fw p",
            lvl0: {
              selectors: "",
              defaultValue: "FAQ",
            },
            lvl2: ".tab__body h3, .tab__body--fw h3",
            lvl3: ".tab__body h4, .tab__body--fw h4",
            tags: {
              defaultValue: ["craft", "maps"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "squarebit",
      pathsToMatch: [
        "https://transition.topshelfcraft.com/software/expressionengine/binder/faq**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".quickjump";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".tab__body h2, .tab__body--fw h2",
            content: ".tab__body p, .tab__body--fw p",
            lvl0: {
              selectors: "",
              defaultValue: "FAQ",
            },
            lvl2: ".tab__body h3, .tab__body--fw h3",
            lvl3: ".tab__body h4, .tab__body--fw h4",
            tags: {
              defaultValue: ["expressionengine", "binder"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "squarebit",
      pathsToMatch: [
        "https://transition.topshelfcraft.com/software/expressionengine/charge/faq**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".quickjump";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".tab__body h2, .tab__body--fw h2",
            content: ".tab__body p, .tab__body--fw p",
            lvl0: {
              selectors: "",
              defaultValue: "FAQ",
            },
            lvl2: ".tab__body h3, .tab__body--fw h3",
            lvl3: ".tab__body h4, .tab__body--fw h4",
            tags: {
              defaultValue: ["expressionengine", "charge"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "squarebit",
      pathsToMatch: [
        "https://transition.topshelfcraft.com/software/expressionengine/maps/faq**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".quickjump";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".tab__body h2, .tab__body--fw h2",
            content: ".tab__body p, .tab__body--fw p",
            lvl0: {
              selectors: "",
              defaultValue: "FAQ",
            },
            lvl2: ".tab__body h3, .tab__body--fw h3",
            lvl3: ".tab__body h4, .tab__body--fw h4",
            tags: {
              defaultValue: ["expressionengine", "maps"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "squarebit",
      pathsToMatch: [
        "https://transition.topshelfcraft.com/software/expressionengine/shortlist/faq**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".quickjump";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".tab__body h2, .tab__body--fw h2",
            content: ".tab__body p, .tab__body--fw p",
            lvl0: {
              selectors: "",
              defaultValue: "FAQ",
            },
            lvl2: ".tab__body h3, .tab__body--fw h3",
            lvl3: ".tab__body h4, .tab__body--fw h4",
            tags: {
              defaultValue: ["expressionengine", "shortlist"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "squarebit",
      pathsToMatch: [
        "https://transition.topshelfcraft.com/software/expressionengine/seed/faq**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".quickjump";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".tab__body h2, .tab__body--fw h2",
            content: ".tab__body p, .tab__body--fw p",
            lvl0: {
              selectors: "",
              defaultValue: "FAQ",
            },
            lvl2: ".tab__body h3, .tab__body--fw h3",
            lvl3: ".tab__body h4, .tab__body--fw h4",
            tags: {
              defaultValue: ["expressionengine", "seed"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    squarebit: {
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