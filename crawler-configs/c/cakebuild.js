new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://cakebuild.net/blog/",
    "https://cakebuild.net/",
    "https://cakebuild.net/docs/",
    "https://cakebuild.net/dsl/",
    "https://cakebuild.net/extensions/",
    "https://cakebuild.net/community/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://cakebuild.net/**"],
  schedule: "at 11:00 on Tuesday",
  actions: [
    {
      indexName: "cakebuild",
      pathsToMatch: ["https://cakebuild.net/blog/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "div.content-wrapper .content-header h1",
            content:
              "div.content-wrapper .content p, div.content-wrapper .content li",
            lvl0: {
              selectors: "",
              defaultValue: "Blog",
            },
            lvl2: "div.content-wrapper .content h1",
            lvl3: "div.content-wrapper .content h2",
            lvl4: "div.content-wrapper .content h3",
            tags: {
              defaultValue: ["blog"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "cakebuild",
      pathsToMatch: ["https://cakebuild.net/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "div.content-wrapper .content-header h1",
            content:
              "div.content-wrapper .content p, div.content-wrapper .content li",
            lvl0: {
              selectors: "",
              defaultValue: "Docs",
            },
            lvl2: "div.content-wrapper .content h1",
            lvl3: "div.content-wrapper .content h2",
            lvl4: "div.content-wrapper .content h3",
            tags: {
              defaultValue: ["docs"],
            },
            pageRank: "5",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "cakebuild",
      pathsToMatch: ["https://cakebuild.net/dsl/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "div.content-wrapper .content-header h1",
            content:
              "div.content-wrapper .content p, div.content-wrapper .content li, div.content-wrapper .content table.alias-list td",
            lvl0: {
              selectors: "",
              defaultValue: "Reference",
            },
            lvl2: "div.content-wrapper .content h1",
            lvl3: "div.content-wrapper .content h2",
            lvl4: "div.content-wrapper .content h3",
            tags: {
              defaultValue: ["dsl"],
            },
            pageRank: "2",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "cakebuild",
      pathsToMatch: ["https://cakebuild.net/extensions/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "div.content-wrapper .content-header h1",
            content:
              "div.content-wrapper .content p, div.content-wrapper .content li, div.content-wrapper .content table.alias-list td",
            lvl0: {
              selectors: "",
              defaultValue: "Extensions",
            },
            lvl2: "div.content-wrapper .content h1",
            lvl3: "div.content-wrapper .content h2",
            lvl4: "div.content-wrapper .content h3",
            tags: {
              defaultValue: ["extensions"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "cakebuild",
      pathsToMatch: ["https://cakebuild.net/community/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "div.content-wrapper .content-header h1",
            content:
              "div.content-wrapper .content p, div.content-wrapper .content li",
            lvl0: {
              selectors: "",
              defaultValue: "Community",
            },
            lvl2: "div.content-wrapper .content h1",
            lvl3: "div.content-wrapper .content h2",
            lvl4: "div.content-wrapper .content h3",
            tags: {
              defaultValue: ["community"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    cakebuild: {
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
      synonyms: [["vscode", "vs code", "visual studio code"]],
    },
  },
});