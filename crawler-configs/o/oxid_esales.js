new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://docs.oxid-esales.com/eshop/en/6.0/",
    "https://docs.oxid-esales.com/",
    "https://docs.oxid-esales.com/eshop/en/6.1/",
    "https://docs.oxid-esales.com/eshop/en/6.2/",
    "https://docs.oxid-esales.com/eshop/en/latest/",
    "https://docs.oxid-esales.com/eshop/de/6.0/",
    "https://docs.oxid-esales.com/eshop/de/6.1/",
    "https://docs.oxid-esales.com/eshop/de/6.2/",
    "https://docs.oxid-esales.com/eshop/de/latest/",
    "https://docs.oxid-esales.com/developer/en/6.0/",
    "https://docs.oxid-esales.com/developer/en/6.1/",
    "https://docs.oxid-esales.com/developer/en/6.2/",
    "https://docs.oxid-esales.com/developer/en/latest/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://docs.oxid-esales.com/**"],
  schedule: "at 20:50 on Thursday",
  actions: [
    {
      indexName: "oxid_esales",
      pathsToMatch: ["https://docs.oxid-esales.com/eshop/en/6.0/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".document h1",
            content: ".document p",
            lvl0: {
              selectors:
                "nav[class*='side'] li[class*='l1'][class*='current'] > a",
              defaultValue: "Documentation",
            },
            lvl2: ".document h2",
            lvl3: ".document h3",
            lvl4: ".document h4",
            versions: {
              defaultValue: ["6.0"],
            },
            lang: {
              defaultValue: ["en"],
            },
            tag: {
              defaultValue: ["eshop"],
            },
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "oxid_esales",
      pathsToMatch: ["https://docs.oxid-esales.com/eshop/en/6.1/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".document h1",
            content: ".document p",
            lvl0: {
              selectors:
                "nav[class*='side'] li[class*='l1'][class*='current'] > a",
              defaultValue: "Documentation",
            },
            lvl2: ".document h2",
            lvl3: ".document h3",
            lvl4: ".document h4",
            versions: {
              defaultValue: ["6.1"],
            },
            lang: {
              defaultValue: ["en"],
            },
            tag: {
              defaultValue: ["eshop"],
            },
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "oxid_esales",
      pathsToMatch: ["https://docs.oxid-esales.com/eshop/en/6.2/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".document h1",
            content: ".document p",
            lvl0: {
              selectors:
                "nav[class*='side'] li[class*='l1'][class*='current'] > a",
              defaultValue: "Documentation",
            },
            lvl2: ".document h2",
            lvl3: ".document h3",
            lvl4: ".document h4",
            versions: {
              defaultValue: ["6.2"],
            },
            lang: {
              defaultValue: ["en"],
            },
            tag: {
              defaultValue: ["eshop"],
            },
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "oxid_esales",
      pathsToMatch: ["https://docs.oxid-esales.com/eshop/en/latest/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".document h1",
            content: ".document p",
            lvl0: {
              selectors:
                "nav[class*='side'] li[class*='l1'][class*='current'] > a",
              defaultValue: "Documentation",
            },
            lvl2: ".document h2",
            lvl3: ".document h3",
            lvl4: ".document h4",
            versions: {
              defaultValue: ["latest"],
            },
            lang: {
              defaultValue: ["en"],
            },
            tag: {
              defaultValue: ["eshop"],
            },
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "oxid_esales",
      pathsToMatch: ["https://docs.oxid-esales.com/eshop/de/6.0/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".document h1",
            content: ".document p",
            lvl0: {
              selectors:
                "nav[class*='side'] li[class*='l1'][class*='current'] > a",
              defaultValue: "Documentation",
            },
            lvl2: ".document h2",
            lvl3: ".document h3",
            lvl4: ".document h4",
            versions: {
              defaultValue: ["6.0"],
            },
            lang: {
              defaultValue: ["de"],
            },
            tag: {
              defaultValue: ["eshop"],
            },
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "oxid_esales",
      pathsToMatch: ["https://docs.oxid-esales.com/eshop/de/6.1/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".document h1",
            content: ".document p",
            lvl0: {
              selectors:
                "nav[class*='side'] li[class*='l1'][class*='current'] > a",
              defaultValue: "Documentation",
            },
            lvl2: ".document h2",
            lvl3: ".document h3",
            lvl4: ".document h4",
            versions: {
              defaultValue: ["6.1"],
            },
            lang: {
              defaultValue: ["de"],
            },
            tag: {
              defaultValue: ["eshop"],
            },
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "oxid_esales",
      pathsToMatch: ["https://docs.oxid-esales.com/eshop/de/6.2/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".document h1",
            content: ".document p",
            lvl0: {
              selectors:
                "nav[class*='side'] li[class*='l1'][class*='current'] > a",
              defaultValue: "Documentation",
            },
            lvl2: ".document h2",
            lvl3: ".document h3",
            lvl4: ".document h4",
            versions: {
              defaultValue: ["6.2"],
            },
            lang: {
              defaultValue: ["de"],
            },
            tag: {
              defaultValue: ["eshop"],
            },
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "oxid_esales",
      pathsToMatch: ["https://docs.oxid-esales.com/eshop/de/latest/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".document h1",
            content: ".document p",
            lvl0: {
              selectors:
                "nav[class*='side'] li[class*='l1'][class*='current'] > a",
              defaultValue: "Documentation",
            },
            lvl2: ".document h2",
            lvl3: ".document h3",
            lvl4: ".document h4",
            versions: {
              defaultValue: ["latest"],
            },
            lang: {
              defaultValue: ["de"],
            },
            tag: {
              defaultValue: ["eshop"],
            },
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "oxid_esales",
      pathsToMatch: ["https://docs.oxid-esales.com/developer/en/6.0/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".document h1",
            content: ".document p",
            lvl0: {
              selectors:
                "nav[class*='side'] li[class*='l1'][class*='current'] > a",
              defaultValue: "Documentation",
            },
            lvl2: ".document h2",
            lvl3: ".document h3",
            lvl4: ".document h4",
            versions: {
              defaultValue: ["6.0"],
            },
            lang: {
              defaultValue: ["en"],
            },
            tag: {
              defaultValue: ["developer"],
            },
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "oxid_esales",
      pathsToMatch: ["https://docs.oxid-esales.com/developer/en/6.1/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".document h1",
            content: ".document p",
            lvl0: {
              selectors:
                "nav[class*='side'] li[class*='l1'][class*='current'] > a",
              defaultValue: "Documentation",
            },
            lvl2: ".document h2",
            lvl3: ".document h3",
            lvl4: ".document h4",
            versions: {
              defaultValue: ["6.1"],
            },
            lang: {
              defaultValue: ["en"],
            },
            tag: {
              defaultValue: ["developer"],
            },
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "oxid_esales",
      pathsToMatch: ["https://docs.oxid-esales.com/developer/en/6.2/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".document h1",
            content: ".document p",
            lvl0: {
              selectors:
                "nav[class*='side'] li[class*='l1'][class*='current'] > a",
              defaultValue: "Documentation",
            },
            lvl2: ".document h2",
            lvl3: ".document h3",
            lvl4: ".document h4",
            versions: {
              defaultValue: ["6.2"],
            },
            lang: {
              defaultValue: ["en"],
            },
            tag: {
              defaultValue: ["developer"],
            },
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "oxid_esales",
      pathsToMatch: ["https://docs.oxid-esales.com/developer/en/latest/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".document h1",
            content: ".document p",
            lvl0: {
              selectors:
                "nav[class*='side'] li[class*='l1'][class*='current'] > a",
              defaultValue: "Documentation",
            },
            lvl2: ".document h2",
            lvl3: ".document h3",
            lvl4: ".document h4",
            versions: {
              defaultValue: ["latest"],
            },
            lang: {
              defaultValue: ["en"],
            },
            tag: {
              defaultValue: ["developer"],
            },
          },
          indexHeadings: false,
        });
      },
    },
  ],
  initialIndexSettings: {
    oxid_esales: {
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