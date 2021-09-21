new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://community.kineticdata.com/admin-docs",
    "https://community.kineticdata.com/",
    "https://community.kineticdata.com/user-guides",
    "https://community.kineticdata.com/integrations",
    "https://community.kineticdata.com/support/",
    "https://community.kineticdata.com/events/",
    "https://community.kineticdata.com/training/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://community.kineticdata.com/**"],
  schedule: "at 01:10 on Thursday",
  actions: [
    {
      indexName: "kineticcommunity",
      pathsToMatch: ["https://community.kineticdata.com/admin-docs**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".breadcrumb .breadcrumb-item:nth-child(3)",
            content: ".community-content p, community-content li",
            lvl0: {
              selectors: "",
              defaultValue: "Admin Docs",
            },
            lvl2: ".breadcrumb .breadcrumb-item:nth-child(4):not(.active)",
            lvl3: ".community-content h1",
            tags: {
              defaultValue: ["Platform", "Admin Docs"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "kineticcommunity",
      pathsToMatch: ["https://community.kineticdata.com/user-guides**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".breadcrumb .breadcrumb-item:nth-child(3)",
            content: ".community-content p, community-content li",
            lvl0: {
              selectors: "",
              defaultValue: "User Guides",
            },
            lvl2: ".breadcrumb .breadcrumb-item:nth-child(4)",
            lvl3: ".breadcrumb .breadcrumb-item:nth-child(5):not(.active)",
            lvl4: ".community-content h1",
            tags: {
              defaultValue: ["Solutions", "Guides", "User Guides"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "kineticcommunity",
      pathsToMatch: ["https://community.kineticdata.com/integrations**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".breadcrumb .breadcrumb-item:nth-child(3)",
            content: ".community-content p, community-content li",
            lvl0: {
              selectors: "",
              defaultValue: "Integrations",
            },
            lvl2: ".breadcrumb .breadcrumb-item:nth-child(4)",
            lvl3: ".breadcrumb .breadcrumb-item:nth-child(5)",
            tags: {
              defaultValue: ["Integrations", "plugins", "Plugins"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "kineticcommunity",
      pathsToMatch: ["https://community.kineticdata.com/support/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".breadcrumb .breadcrumb-item:nth-child(3)",
            content: ".community-content p, community-content li",
            lvl0: {
              selectors: "",
              defaultValue: "Support",
            },
            lvl2: ".breadcrumb .breadcrumb-item:nth-child(4):not(.active)",
            lvl3: ".community-content h1",
            tags: {
              defaultValue: ["Support"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "kineticcommunity",
      pathsToMatch: ["https://community.kineticdata.com/events/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".breadcrumb .breadcrumb-item:nth-child(3)",
            content: ".community-content p, community-content li",
            lvl0: {
              selectors: "",
              defaultValue: "Events",
            },
            lvl2: ".breadcrumb .breadcrumb-item:nth-child(4):not(.active)",
            lvl3: ".community-content h1",
            tags: {
              defaultValue: ["Events"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "kineticcommunity",
      pathsToMatch: ["https://community.kineticdata.com/training/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".breadcrumb .breadcrumb-item:nth-child(3)",
            content: ".community-content p, community-content li",
            lvl0: {
              selectors: "",
              defaultValue: "Training",
            },
            lvl2: ".breadcrumb .breadcrumb-item:nth-child(4):not(.active)",
            lvl3: ".community-content h1",
            tags: {
              defaultValue: ["Training"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    kineticcommunity: {
      attributesForFaceting: [
        "type",
        "lang",
        "tags",
        "hierarchy.lvl0",
        "hierarchy.lvl1",
        "hierarchy.lvl2",
        "hierarchy.lvl3",
        "intendedAudience",
        "version",
      ],
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
      attributeForDistinct: "url_without_anchor",
      customRanking: [
        "desc(weight.pageRank)",
        "desc(weight.level)",
        "asc(weight.position)",
      ],
      ranking: [
        "words",
        "filters",
        "typo",
        "proximity",
        "attribute",
        "exact",
        "custom",
      ],
      highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
      highlightPostTag: "</span>",
      minWordSizefor1Typo: 3,
      minWordSizefor2Typos: 7,
      allowTyposOnNumericTokens: false,
      minProximity: 1,
      ignorePlurals: false,
      advancedSyntax: true,
      attributeCriteriaComputedByMinProximity: true,
      removeWordsIfNoResults: "allOptional",
      synonyms: [
        ["js", "javascript"],
        ["task", "kinetic task", "workflow"],
        ["handler", "workflow handler"],
        ["ce", "kinetic request"],
        ["kinetics", "kinetic"],
        ["analytics", "metrics"],
      ],
    },
  },
});