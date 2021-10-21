new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://www.apollographql.com/docs/",
    "https://www.apollographql.com/",
    "https://www.apollographql.com/docs/studio/",
    "https://www.apollographql.com/docs/react/",
    "https://www.apollographql.com/docs/apollo-server/",
    "https://www.apollographql.com/docs/federation/",
    "https://www.apollographql.com/docs/rover/",
    "https://www.apollographql.com/docs/ios/",
    "https://www.apollographql.com/docs/android/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [
    "**.html",
    "https://www.apollographql.com/docs/angular/**",
    "https://www.apollographql.com/docs/scala/**",
    "https://www.apollographql.com/docs/graphql-tools/**",
    "https://www.apollographql.com/docs/graphql-subscriptions/**",
    "https://www.apollographql.com/docs/ios/api/**",
    "https://www.apollographql.com/docs/android/v3/**",
    "https://www.apollographql.com/docs/react/v2/**",
    "https://www.apollographql.com/docs/apollo-server/v2/**",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://www.apollographql.com/**"],
  schedule: "at 01:30 on Tuesday",
  actions: [
    {
      indexName: "apollodata",
      pathsToMatch: ["https://www.apollographql.com/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".header-wrapper h1",
            content:
              ".content-wrapper h3, .content-wrapper p, .content-wrapper li, .header-wrapper div.subtitle-page, .header-wrapper h3",
            lvl0: {
              selectors: "div.sidebar span.title-sidebar",
              defaultValue: "Documentation",
            },
            lvl2: ".content-wrapper h2",
            pageRank: "3",
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "apollodata",
      pathsToMatch: ["https://www.apollographql.com/docs/studio/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".header-wrapper h1",
            content:
              ".content-wrapper h3, .content-wrapper p, .content-wrapper li, .header-wrapper div.subtitle-page, .header-wrapper h3",
            lvl0: {
              selectors: "div.sidebar span.title-sidebar",
              defaultValue: "Documentation",
            },
            lvl2: ".content-wrapper h2",
            pageRank: "2",
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "apollodata",
      pathsToMatch: ["https://www.apollographql.com/docs/react/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".header-wrapper h1",
            content:
              ".content-wrapper h3, .content-wrapper p, .content-wrapper li, .header-wrapper div.subtitle-page, .header-wrapper h3",
            lvl0: {
              selectors: "div.sidebar span.title-sidebar",
              defaultValue: "Documentation",
            },
            lvl2: ".content-wrapper h2",
            pageRank: "2",
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "apollodata",
      pathsToMatch: ["https://www.apollographql.com/docs/apollo-server/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".header-wrapper h1",
            content:
              ".content-wrapper h3, .content-wrapper p, .content-wrapper li, .header-wrapper div.subtitle-page, .header-wrapper h3",
            lvl0: {
              selectors: "div.sidebar span.title-sidebar",
              defaultValue: "Documentation",
            },
            lvl2: ".content-wrapper h2",
            pageRank: "2",
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "apollodata",
      pathsToMatch: ["https://www.apollographql.com/docs/federation/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".header-wrapper h1",
            content:
              ".content-wrapper h3, .content-wrapper p, .content-wrapper li, .header-wrapper div.subtitle-page, .header-wrapper h3",
            lvl0: {
              selectors: "div.sidebar span.title-sidebar",
              defaultValue: "Documentation",
            },
            lvl2: ".content-wrapper h2",
            pageRank: "2",
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "apollodata",
      pathsToMatch: ["https://www.apollographql.com/docs/rover/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".header-wrapper h1",
            content:
              ".content-wrapper h3, .content-wrapper p, .content-wrapper li, .header-wrapper div.subtitle-page, .header-wrapper h3",
            lvl0: {
              selectors: "div.sidebar span.title-sidebar",
              defaultValue: "Documentation",
            },
            lvl2: ".content-wrapper h2",
            pageRank: "2",
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "apollodata",
      pathsToMatch: ["https://www.apollographql.com/docs/ios/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".header-wrapper h1",
            content:
              ".content-wrapper h3, .content-wrapper p, .content-wrapper li, .header-wrapper div.subtitle-page, .header-wrapper h3",
            lvl0: {
              selectors: "div.sidebar span.title-sidebar",
              defaultValue: "Documentation",
            },
            lvl2: ".content-wrapper h2",
            pageRank: "1",
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "apollodata",
      pathsToMatch: ["https://www.apollographql.com/docs/android/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".header-wrapper h1",
            content:
              ".content-wrapper h3, .content-wrapper p, .content-wrapper li, .header-wrapper div.subtitle-page, .header-wrapper h3",
            lvl0: {
              selectors: "div.sidebar span.title-sidebar",
              defaultValue: "Documentation",
            },
            lvl2: ".content-wrapper h2",
            pageRank: "1",
          },
          indexHeadings: false,
        });
      },
    },
  ],
  initialIndexSettings: {
    apollodata: {
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
      synonyms: [
        ["engine", "manager", "studio"],
        ["visual", "vs"],
        ["metrics", "analytics", "traces"],
        ["cli", "command"],
        ["automatic", "apq"],
        ["validation", "checks"],
      ],
    },
  },
});