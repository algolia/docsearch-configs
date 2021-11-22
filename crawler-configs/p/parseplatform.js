new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://docs.parseplatform.org/parse-server/guide/",
    "https://docs.parseplatform.org/",
    "https://docs.parseplatform.org/ios/guide/",
    "https://docs.parseplatform.org/android/guide/",
    "https://docs.parseplatform.org/js/guide/",
    "https://docs.parseplatform.org/dotnet/guide/",
    "https://docs.parseplatform.org/macos/guide/",
    "https://docs.parseplatform.org/unity/guide/",
    "https://docs.parseplatform.org/php/guide/",
    "https://docs.parseplatform.org/arduino/guide/",
    "https://docs.parseplatform.org/embedded_c/guide/",
    "https://docs.parseplatform.org/cloudcode/guide/",
    "https://docs.parseplatform.org/rest/guide/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://docs.parseplatform.org/**"],
  schedule: "at 00:00 on Friday",
  actions: [
    {
      indexName: "parseplatform",
      pathsToMatch: ["https://docs.parseplatform.org/parse-server/guide/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".wysiwyg-content h1",
            content: ".wysiwyg-content p, .wysiwyg-content li",
            lvl0: {
              selectors: "p.h1 > span",
              defaultValue: "Documentation",
            },
            lvl2: ".wysiwyg-content h2",
            lvl3: ".wysiwyg-content h3",
            lvl4: ".wysiwyg-content h4",
            lvl5: ".wysiwyg-content h5",
            tags: {
              defaultValue: ["parse-server"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "parseplatform",
      pathsToMatch: ["https://docs.parseplatform.org/ios/guide/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".wysiwyg-content h1",
            content: ".wysiwyg-content p, .wysiwyg-content li",
            lvl0: {
              selectors: "p.h1 > span",
              defaultValue: "Documentation",
            },
            lvl2: ".wysiwyg-content h2",
            lvl3: ".wysiwyg-content h3",
            lvl4: ".wysiwyg-content h4",
            lvl5: ".wysiwyg-content h5",
            tags: {
              defaultValue: ["ios"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "parseplatform",
      pathsToMatch: ["https://docs.parseplatform.org/android/guide/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".wysiwyg-content h1",
            content: ".wysiwyg-content p, .wysiwyg-content li",
            lvl0: {
              selectors: "p.h1 > span",
              defaultValue: "Documentation",
            },
            lvl2: ".wysiwyg-content h2",
            lvl3: ".wysiwyg-content h3",
            lvl4: ".wysiwyg-content h4",
            lvl5: ".wysiwyg-content h5",
            tags: {
              defaultValue: ["android"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "parseplatform",
      pathsToMatch: ["https://docs.parseplatform.org/js/guide/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".wysiwyg-content h1",
            content: ".wysiwyg-content p, .wysiwyg-content li",
            lvl0: {
              selectors: "p.h1 > span",
              defaultValue: "Documentation",
            },
            lvl2: ".wysiwyg-content h2",
            lvl3: ".wysiwyg-content h3",
            lvl4: ".wysiwyg-content h4",
            lvl5: ".wysiwyg-content h5",
            tags: {
              defaultValue: ["js"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "parseplatform",
      pathsToMatch: ["https://docs.parseplatform.org/dotnet/guide/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".wysiwyg-content h1",
            content: ".wysiwyg-content p, .wysiwyg-content li",
            lvl0: {
              selectors: "p.h1 > span",
              defaultValue: "Documentation",
            },
            lvl2: ".wysiwyg-content h2",
            lvl3: ".wysiwyg-content h3",
            lvl4: ".wysiwyg-content h4",
            lvl5: ".wysiwyg-content h5",
            tags: {
              defaultValue: ["dotnet"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "parseplatform",
      pathsToMatch: ["https://docs.parseplatform.org/macos/guide/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".wysiwyg-content h1",
            content: ".wysiwyg-content p, .wysiwyg-content li",
            lvl0: {
              selectors: "p.h1 > span",
              defaultValue: "Documentation",
            },
            lvl2: ".wysiwyg-content h2",
            lvl3: ".wysiwyg-content h3",
            lvl4: ".wysiwyg-content h4",
            lvl5: ".wysiwyg-content h5",
            tags: {
              defaultValue: ["macos"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "parseplatform",
      pathsToMatch: ["https://docs.parseplatform.org/unity/guide/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".wysiwyg-content h1",
            content: ".wysiwyg-content p, .wysiwyg-content li",
            lvl0: {
              selectors: "p.h1 > span",
              defaultValue: "Documentation",
            },
            lvl2: ".wysiwyg-content h2",
            lvl3: ".wysiwyg-content h3",
            lvl4: ".wysiwyg-content h4",
            lvl5: ".wysiwyg-content h5",
            tags: {
              defaultValue: ["unity"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "parseplatform",
      pathsToMatch: ["https://docs.parseplatform.org/php/guide/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".wysiwyg-content h1",
            content: ".wysiwyg-content p, .wysiwyg-content li",
            lvl0: {
              selectors: "p.h1 > span",
              defaultValue: "Documentation",
            },
            lvl2: ".wysiwyg-content h2",
            lvl3: ".wysiwyg-content h3",
            lvl4: ".wysiwyg-content h4",
            lvl5: ".wysiwyg-content h5",
            tags: {
              defaultValue: ["php"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "parseplatform",
      pathsToMatch: ["https://docs.parseplatform.org/arduino/guide/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".wysiwyg-content h1",
            content: ".wysiwyg-content p, .wysiwyg-content li",
            lvl0: {
              selectors: "p.h1 > span",
              defaultValue: "Documentation",
            },
            lvl2: ".wysiwyg-content h2",
            lvl3: ".wysiwyg-content h3",
            lvl4: ".wysiwyg-content h4",
            lvl5: ".wysiwyg-content h5",
            tags: {
              defaultValue: ["arduino"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "parseplatform",
      pathsToMatch: ["https://docs.parseplatform.org/embedded_c/guide/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".wysiwyg-content h1",
            content: ".wysiwyg-content p, .wysiwyg-content li",
            lvl0: {
              selectors: "p.h1 > span",
              defaultValue: "Documentation",
            },
            lvl2: ".wysiwyg-content h2",
            lvl3: ".wysiwyg-content h3",
            lvl4: ".wysiwyg-content h4",
            lvl5: ".wysiwyg-content h5",
            tags: {
              defaultValue: ["embedded_c"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "parseplatform",
      pathsToMatch: ["https://docs.parseplatform.org/cloudcode/guide/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".wysiwyg-content h1",
            content: ".wysiwyg-content p, .wysiwyg-content li",
            lvl0: {
              selectors: "p.h1 > span",
              defaultValue: "Documentation",
            },
            lvl2: ".wysiwyg-content h2",
            lvl3: ".wysiwyg-content h3",
            lvl4: ".wysiwyg-content h4",
            lvl5: ".wysiwyg-content h5",
            tags: {
              defaultValue: ["cloudcode"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "parseplatform",
      pathsToMatch: ["https://docs.parseplatform.org/rest/guide/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".wysiwyg-content h1",
            content: ".wysiwyg-content p, .wysiwyg-content li",
            lvl0: {
              selectors: "p.h1 > span",
              defaultValue: "Documentation",
            },
            lvl2: ".wysiwyg-content h2",
            lvl3: ".wysiwyg-content h3",
            lvl4: ".wysiwyg-content h4",
            lvl5: ".wysiwyg-content h5",
            tags: {
              defaultValue: ["rest"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    parseplatform: {
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