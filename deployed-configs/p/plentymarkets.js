new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://developers.plentymarkets.com/en-gb/developers",
    "https://developers.plentymarkets.com/",
    "https://developers.plentymarkets.com/en-gb/interface/stable7/",
    "https://developers.plentymarkets.com/en-gb/interface/early/",
    "https://developers.plentymarkets.com/en-gb/interface/beta7/",
    "https://developers.plentymarkets.com/en-gb/plugin-ceres/5.0.0/",
    "https://developers.plentymarkets.com/en-gb/plugin-ceres/4.6.0/",
    "https://developers.plentymarkets.com/en-gb/plugin-io/5.0.0/",
    "https://developers.plentymarkets.com/en-gb/plugin-io/4.6.0/",
    "https://developers.plentymarkets.com/en-gb/plentymarkets-rest-api/index.html",
  ],
  renderJavaScript: true,
  sitemaps: [
    "https://developers.plentymarkets.com/en-gb/sitemap-developers.xml",
    "https://developers.plentymarkets.com/en-gb/sitemap-interface.xml",
    "https://developers.plentymarkets.com/en-gb/sitemap-plugin-ceres.xml",
    "https://developers.plentymarkets.com/en-gb/sitemap-plugin-io.xml",
    "https://developers.plentymarkets.com/en-gb/plentymarkets-rest-api/index.html",
  ],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://developers.plentymarkets.com/**"],
  schedule: "at 00:20 on Friday",
  actions: [
    {
      indexName: "plentymarkets",
      pathsToMatch: [
        "https://developers.plentymarkets.com/en-gb/developers**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".breadcrumbs li:nth-child(2)",
            content: ".sectionbody p",
            lvl0: {
              selectors: "h3.title > a",
              defaultValue: "Developers",
            },
            lvl2: ".doc h1",
            lvl3: ".doc h2",
            lvl4: ".doc h3",
            lvl5: ".doc h4",
            lvl6: ".doc h5",
            tags: {
              defaultValue: ["developers"],
            },
            pageRank: "3",
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "plentymarkets",
      pathsToMatch: [
        "https://developers.plentymarkets.com/en-gb/interface/stable7/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content: ".paragraph p",
            lvl0: {
              selectors: ".overwrite-this-with-interface",
              defaultValue: "Interface",
            },
            lvl2: ".doc h2",
            lvl3: ".doc h3",
            lvl4: ".doc h4",
            lvl5: ".doc h5",
            lvl6: ".doc h6",
            version: {
              defaultValue: ["stable7"],
            },
            tags: {
              defaultValue: ["interface"],
            },
            pageRank: "2",
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "plentymarkets",
      pathsToMatch: [
        "https://developers.plentymarkets.com/en-gb/interface/early/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content: ".paragraph p",
            lvl0: {
              selectors: ".overwrite-this-with-interface",
              defaultValue: "Interface",
            },
            lvl2: ".doc h2",
            lvl3: ".doc h3",
            lvl4: ".doc h4",
            lvl5: ".doc h5",
            lvl6: ".doc h6",
            version: {
              defaultValue: ["early"],
            },
            tags: {
              defaultValue: ["interface"],
            },
            pageRank: "2",
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "plentymarkets",
      pathsToMatch: [
        "https://developers.plentymarkets.com/en-gb/interface/beta7/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content: ".paragraph p",
            lvl0: {
              selectors: ".overwrite-this-with-interface",
              defaultValue: "Interface",
            },
            lvl2: ".doc h2",
            lvl3: ".doc h3",
            lvl4: ".doc h4",
            lvl5: ".doc h5",
            lvl6: ".doc h6",
            version: {
              defaultValue: ["beta7"],
            },
            tags: {
              defaultValue: ["interface"],
            },
            pageRank: "2",
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "plentymarkets",
      pathsToMatch: [
        "https://developers.plentymarkets.com/en-gb/plugin-ceres/5.0.0/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content: ".paragraph p",
            lvl0: {
              selectors: ".context span.title",
            },
            lvl2: ".doc h2",
            lvl3: ".doc h3",
            lvl4: ".doc h4",
            lvl5: ".doc h5",
            lvl6: ".doc h6",
            version: {
              defaultValue: ["5.0.0"],
            },
            tags: {
              defaultValue: ["plugin-ceres"],
            },
            pageRank: "2",
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "plentymarkets",
      pathsToMatch: [
        "https://developers.plentymarkets.com/en-gb/plugin-ceres/4.6.0/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content: ".paragraph p",
            lvl0: {
              selectors: ".context span.title",
            },
            lvl2: ".doc h2",
            lvl3: ".doc h3",
            lvl4: ".doc h4",
            lvl5: ".doc h5",
            lvl6: ".doc h6",
            version: {
              defaultValue: ["4.6.0"],
            },
            tags: {
              defaultValue: ["plugin-ceres"],
            },
            pageRank: "2",
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "plentymarkets",
      pathsToMatch: [
        "https://developers.plentymarkets.com/en-gb/plugin-io/5.0.0/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content: ".paragraph p",
            lvl0: {
              selectors: ".context span.title",
            },
            lvl2: ".doc h2",
            lvl3: ".doc h3",
            lvl4: ".doc h4",
            lvl5: ".doc h5",
            lvl6: ".doc h6",
            version: {
              defaultValue: ["5.0.0"],
            },
            tags: {
              defaultValue: ["plugin-io"],
            },
            pageRank: "2",
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "plentymarkets",
      pathsToMatch: [
        "https://developers.plentymarkets.com/en-gb/plugin-io/4.6.0/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content: ".paragraph p",
            lvl0: {
              selectors: ".context span.title",
            },
            lvl2: ".doc h2",
            lvl3: ".doc h3",
            lvl4: ".doc h4",
            lvl5: ".doc h5",
            lvl6: ".doc h6",
            version: {
              defaultValue: ["4.6.0"],
            },
            tags: {
              defaultValue: ["plugin-io"],
            },
            pageRank: "2",
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "plentymarkets",
      pathsToMatch: [
        "https://developers.plentymarkets.com/en-gb/plentymarkets-rest-api/index.html**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".opblock-tag-section.is-open",
            content: ".paragraph p",
            lvl0: {
              selectors: ".context span.title",
            },
            lvl2: "div.opblock-summary > span.opblock-summary-path > a > span",
            lvl3: ".opblock  > div > div.opblock-summary-description",
            lvl4: "div.no-margin > div > div.opblock-description-wrapper > div > div > p",
            tags: {
              defaultValue: ["rest-api", "master"],
            },
            pageRank: "2",
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    plentymarkets: {
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