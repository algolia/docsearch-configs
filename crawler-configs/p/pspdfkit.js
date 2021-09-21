new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://pspdfkit.com/api/web/",
    "https://pspdfkit.com/",
    "https://pspdfkit.com/api/android/javadoc/reference/",
    "https://pspdfkit.com/api/android/kdoc/pspdfkit/",
    "https://pspdfkit.com/api/ios/",
    "https://pspdfkit.com/api/macos/",
    "https://pspdfkit.com/api/windows/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [
    "https://pspdfkit.com/api/android/javadoc/reference/packages.html",
    "**/**package-summary.html",
    "https://pspdfkit.com/api/ios/index.html",
    "https://pspdfkit.com/api/macos/index.html",
    "https://pspdfkit.com/api/windows/index.html",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://pspdfkit.com/**"],
  schedule: "at 00:40 on Friday",
  actions: [
    {
      indexName: "pspdfkit",
      pathsToMatch: ["https://pspdfkit.com/api/web/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".web-seealso-subsection, .web-seealso-list li, .main-content .aside-title, .main-content .heading";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".card h2",
            content: ".card p, .card li",
            lvl0: {
              selectors: ".card h1",
            },
            lvl2: ".card h3",
            lvl3: ".card h4",
            lvl4: ".card h5",
            tags: {
              defaultValue: ["web"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "pspdfkit",
      pathsToMatch: ["https://pspdfkit.com/api/android/javadoc/reference/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".web-seealso-subsection, .web-seealso-list li, .main-content .aside-title, .main-content .heading";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#jd-content h2",
            content: "#jd-content p, #jd-content li",
            lvl0: {
              selectors: "#jd-header h1",
            },
            lvl2: "#jd-content h3",
            lvl3: "#jd-content h4",
            lvl4: "#jd-content h5",
            tags: {
              defaultValue: ["android", "javadoc"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "pspdfkit",
      pathsToMatch: ["https://pspdfkit.com/api/android/kdoc/pspdfkit/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".web-seealso-subsection, .web-seealso-list li, .main-content .aside-title, .main-content .heading";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#jd-content h2",
            content: "#jd-content p, #jd-content li",
            lvl0: {
              selectors: "#jd-header h1",
            },
            lvl2: "#jd-content h3",
            lvl3: "#jd-content h4",
            lvl4: "#jd-content h5",
            tags: {
              defaultValue: ["android", "kdoc"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "pspdfkit",
      pathsToMatch: ["https://pspdfkit.com/api/ios/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".web-seealso-subsection, .web-seealso-list li, .main-content .aside-title, .main-content .heading";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".main-content h3",
            content: ".main-content p",
            lvl0: {
              selectors: ".main-content h1",
            },
            lvl2: ".main-content .item .token",
            tags: {
              defaultValue: ["ios"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "pspdfkit",
      pathsToMatch: ["https://pspdfkit.com/api/macos/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".web-seealso-subsection, .web-seealso-list li, .main-content .aside-title, .main-content .heading";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".main-content h3",
            content: ".main-content p",
            lvl0: {
              selectors: ".main-content h1",
            },
            lvl2: ".main-content .item .token",
            tags: {
              defaultValue: ["macos"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "pspdfkit",
      pathsToMatch: ["https://pspdfkit.com/api/windows/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".web-seealso-subsection, .web-seealso-list li, .main-content .aside-title, .main-content .heading";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".main-content h3",
            content: ".main-content p",
            lvl0: {
              selectors: ".main-content h1",
            },
            lvl2: ".main-content h4",
            tags: {
              defaultValue: ["windows"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    pspdfkit: {
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