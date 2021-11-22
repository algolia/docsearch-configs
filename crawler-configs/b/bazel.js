new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: ["https://docs.bazel.build/", "https://bazel.build/"],
  renderJavaScript: true,
  sitemaps: [],
  exclusionPatterns: ["**.gpg**", "**.gpg**/**"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://docs.bazel.build/**", "https://bazel.build/**"],
  schedule: "at 06:00 on Tuesday",
  actions: [
    {
      indexName: "bazel",
      pathsToMatch: ["https://docs.bazel.build/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["404 - Page not found"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        } // Removing DOM elements we don't want to crawl
        const toRemove = ".toc";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content:
              ".container div[class$='-9'] p, .container div[class$='-9'] li, pre.rule-signature",
            lvl0: {
              selectors: ".page-title-bar h1",
              defaultValue: "Documentation",
            },
            lvl2: ".container div[class$='-9'] h1",
            lvl3: ".container div[class$='-9'] h2",
            lvl4: ".container div[class$='-9'] h3",
            lvl5: ".container div[class$='-9'] h4",
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "bazel",
      pathsToMatch: ["https://bazel.build**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["404 - Page not found"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        } // Removing DOM elements we don't want to crawl
        const toRemove = ".toc";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content:
              ".container div[class$='-9'] p, .container div[class$='-9'] li, pre.rule-signature",
            lvl0: {
              selectors: ".page-title-bar h1",
              defaultValue: "Documentation",
            },
            lvl2: ".container div[class$='-9'] h1",
            lvl3: ".container div[class$='-9'] h2",
            lvl4: ".container div[class$='-9'] h3",
            lvl5: ".container div[class$='-9'] h4",
          },
          indexHeadings: false,
        });
      },
    },
  ],
  initialIndexSettings: {
    bazel: {
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
      separatorsToIndex: "_",
    },
  },
});