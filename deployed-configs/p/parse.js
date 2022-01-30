new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "http://docs.parseplatform.org/parse-server/guide/",
    "http://docs.parseplatform.org/",
    "http://docs.parseplatform.org/ios/guide/",
    "http://docs.parseplatform.org/android/guide/",
    "http://docs.parseplatform.org/js/guide/",
    "http://docs.parseplatform.org/dotnet/guide/",
    "http://docs.parseplatform.org/macos/guide/",
    "http://docs.parseplatform.org/unity/guide/",
    "http://docs.parseplatform.org/php/guide/",
    "http://docs.parseplatform.org/arduino/guide/",
    "http://docs.parseplatform.org/embedded_c/guide/",
    "http://docs.parseplatform.org/cloudcode/guide/",
    "http://docs.parseplatform.org/rest/guide/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["http://docs.parseplatform.org/**"],
  schedule: "at 00:00 on Friday",
  actions: [
    {
      indexName: "parse",
      pathsToMatch: ["http://docs.parseplatform.org/parse-server/guide/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".h1 a, .namespace-indent, .package-indent";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".guide_content h1",
            content: ".guide_content p, .guide_content li",
            lvl0: {
              selectors: ".h1",
            },
            lvl2: ".guide_content h2",
            lvl3: ".guide_content h3",
            lvl4: ".guide_content h4",
            lvl5: ".guide_content h5",
            tags: {
              defaultValue: ["parse-server"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "parse",
      pathsToMatch: ["http://docs.parseplatform.org/ios/guide/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".h1 a, .namespace-indent, .package-indent";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".guide_content h1",
            content: ".guide_content p, .guide_content li",
            lvl0: {
              selectors: ".h1",
            },
            lvl2: ".guide_content h2",
            lvl3: ".guide_content h3",
            lvl4: ".guide_content h4",
            lvl5: ".guide_content h5",
            tags: {
              defaultValue: ["ios"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "parse",
      pathsToMatch: ["http://docs.parseplatform.org/android/guide/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".h1 a, .namespace-indent, .package-indent";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".guide_content h1",
            content: ".guide_content p, .guide_content li",
            lvl0: {
              selectors: ".h1",
            },
            lvl2: ".guide_content h2",
            lvl3: ".guide_content h3",
            lvl4: ".guide_content h4",
            lvl5: ".guide_content h5",
            tags: {
              defaultValue: ["android"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "parse",
      pathsToMatch: ["http://docs.parseplatform.org/js/guide/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".h1 a, .namespace-indent, .package-indent";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".guide_content h1",
            content: ".guide_content p, .guide_content li",
            lvl0: {
              selectors: ".h1",
            },
            lvl2: ".guide_content h2",
            lvl3: ".guide_content h3",
            lvl4: ".guide_content h4",
            lvl5: ".guide_content h5",
            tags: {
              defaultValue: ["js"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "parse",
      pathsToMatch: ["http://docs.parseplatform.org/dotnet/guide/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".h1 a, .namespace-indent, .package-indent";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".guide_content h1",
            content: ".guide_content p, .guide_content li",
            lvl0: {
              selectors: ".h1",
            },
            lvl2: ".guide_content h2",
            lvl3: ".guide_content h3",
            lvl4: ".guide_content h4",
            lvl5: ".guide_content h5",
            tags: {
              defaultValue: ["dotnet"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "parse",
      pathsToMatch: ["http://docs.parseplatform.org/macos/guide/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".h1 a, .namespace-indent, .package-indent";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".guide_content h1",
            content: ".guide_content p, .guide_content li",
            lvl0: {
              selectors: ".h1",
            },
            lvl2: ".guide_content h2",
            lvl3: ".guide_content h3",
            lvl4: ".guide_content h4",
            lvl5: ".guide_content h5",
            tags: {
              defaultValue: ["macos"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "parse",
      pathsToMatch: ["http://docs.parseplatform.org/unity/guide/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".h1 a, .namespace-indent, .package-indent";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".guide_content h1",
            content: ".guide_content p, .guide_content li",
            lvl0: {
              selectors: ".h1",
            },
            lvl2: ".guide_content h2",
            lvl3: ".guide_content h3",
            lvl4: ".guide_content h4",
            lvl5: ".guide_content h5",
            tags: {
              defaultValue: ["unity"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "parse",
      pathsToMatch: ["http://docs.parseplatform.org/php/guide/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".h1 a, .namespace-indent, .package-indent";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".guide_content h1",
            content: ".guide_content p, .guide_content li",
            lvl0: {
              selectors: ".h1",
            },
            lvl2: ".guide_content h2",
            lvl3: ".guide_content h3",
            lvl4: ".guide_content h4",
            lvl5: ".guide_content h5",
            tags: {
              defaultValue: ["php"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "parse",
      pathsToMatch: ["http://docs.parseplatform.org/arduino/guide/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".h1 a, .namespace-indent, .package-indent";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".guide_content h1",
            content: ".guide_content p, .guide_content li",
            lvl0: {
              selectors: ".h1",
            },
            lvl2: ".guide_content h2",
            lvl3: ".guide_content h3",
            lvl4: ".guide_content h4",
            lvl5: ".guide_content h5",
            tags: {
              defaultValue: ["arduino"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "parse",
      pathsToMatch: ["http://docs.parseplatform.org/embedded_c/guide/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".h1 a, .namespace-indent, .package-indent";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".guide_content h1",
            content: ".guide_content p, .guide_content li",
            lvl0: {
              selectors: ".h1",
            },
            lvl2: ".guide_content h2",
            lvl3: ".guide_content h3",
            lvl4: ".guide_content h4",
            lvl5: ".guide_content h5",
            tags: {
              defaultValue: ["embedded_c"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "parse",
      pathsToMatch: ["http://docs.parseplatform.org/cloudcode/guide/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".h1 a, .namespace-indent, .package-indent";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".guide_content h1",
            content: ".guide_content p, .guide_content li",
            lvl0: {
              selectors: ".h1",
            },
            lvl2: ".guide_content h2",
            lvl3: ".guide_content h3",
            lvl4: ".guide_content h4",
            lvl5: ".guide_content h5",
            tags: {
              defaultValue: ["cloudcode"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "parse",
      pathsToMatch: ["http://docs.parseplatform.org/rest/guide/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".h1 a, .namespace-indent, .package-indent";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".guide_content h1",
            content: ".guide_content p, .guide_content li",
            lvl0: {
              selectors: ".h1",
            },
            lvl2: ".guide_content h2",
            lvl3: ".guide_content h3",
            lvl4: ".guide_content h4",
            lvl5: ".guide_content h5",
            tags: {
              defaultValue: ["rest"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    parse: {
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