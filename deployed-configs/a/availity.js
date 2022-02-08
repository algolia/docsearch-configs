new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://availity.github.io/availity-react",
    "https://availity.github.io/",
    "https://availity.github.io/availity-workflow",
    "https://availity.github.io/sdk-js",
    "https://availity.github.io/gatsby-theme-availity",
    "https://availity.github.io/availity-uikit",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: ["**/examples/**", "**/storybook/**"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://availity.github.io/**"],
  schedule: "at 01:50 on Tuesday",
  actions: [
    {
      indexName: "availity",
      pathsToMatch: ["https://availity.github.io/availity-react**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".page-header-title h1",
            content:
              ".content-wrapper p, .content-wrapper li, .content-wrapper tbody, .page-header-title h3",
            lvl0: {
              selectors: ".site-title-link",
              defaultValue: "Documentation",
            },
            lvl2: ".content-wrapper h2",
            lvl3: ".content-wrapper h3",
            lvl4: ".content-wrapper h4",
            lvl5: ".content-wrapper h5",
            pageRank: "3",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "availity",
      pathsToMatch: ["https://availity.github.io/availity-workflow**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".page-header-title h1",
            content:
              ".content-wrapper p, .content-wrapper li, .content-wrapper tbody, .page-header-title h3",
            lvl0: {
              selectors: ".site-title-link",
              defaultValue: "Documentation",
            },
            lvl2: ".content-wrapper h2",
            lvl3: ".content-wrapper h3",
            lvl4: ".content-wrapper h4",
            lvl5: ".content-wrapper h5",
            pageRank: "2",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "availity",
      pathsToMatch: ["https://availity.github.io/sdk-js**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".page-header-title h1",
            content:
              ".content-wrapper p, .content-wrapper li, .content-wrapper tbody, .page-header-title h3",
            lvl0: {
              selectors: ".site-title-link",
              defaultValue: "Documentation",
            },
            lvl2: ".content-wrapper h2",
            lvl3: ".content-wrapper h3",
            lvl4: ".content-wrapper h4",
            lvl5: ".content-wrapper h5",
            pageRank: "2",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "availity",
      pathsToMatch: ["https://availity.github.io/gatsby-theme-availity**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".page-header-title h1",
            content:
              ".content-wrapper p, .content-wrapper li, .content-wrapper tbody, .page-header-title h3",
            lvl0: {
              selectors: ".site-title-link",
              defaultValue: "Documentation",
            },
            lvl2: ".content-wrapper h2",
            lvl3: ".content-wrapper h3",
            lvl4: ".content-wrapper h4",
            lvl5: ".content-wrapper h5",
            pageRank: "1",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "availity",
      pathsToMatch: ["https://availity.github.io/availity-uikit**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".page-header-title h1",
            content:
              ".content-wrapper p, .content-wrapper li, .content-wrapper tbody, .page-header-title h3",
            lvl0: {
              selectors: ".site-title-link",
              defaultValue: "Documentation",
            },
            lvl2: ".content-wrapper h2",
            lvl3: ".content-wrapper h3",
            lvl4: ".content-wrapper h4",
            lvl5: ".content-wrapper h5",
            pageRank: "2",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    availity: {
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