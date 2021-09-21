new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://docs.postmen.com/aramex.html",
    "https://docs.postmen.com/",
    "https://docs.postmen.com/myhermes-uk.html",
    "https://docs.postmen.com/sf-express.html",
    "https://docs.postmen.com/ups-mi.html",
    "https://docs.postmen.com/yodel.html",
    "https://docs.postmen.com/endicia.html",
    "https://docs.postmen.com/quantium.html",
    "https://docs.postmen.com/ups.html",
    "https://docs.postmen.com/tnt.html",
    "https://docs.postmen.com/purolator.html",
    "https://docs.postmen.com/fastway-au.html",
    "https://docs.postmen.com/parcelled-in.html",
    "https://docs.postmen.com/hong-kong-post.html",
    "https://docs.postmen.com/fedex.html",
    "https://docs.postmen.com/dpd-nl.html",
    "https://docs.postmen.com/dpex.html",
    "https://docs.postmen.com/fedex-smartpost.html",
    "https://docs.postmen.com/dpd-uk.html",
    "https://docs.postmen.com/bpost-international.html",
    "https://docs.postmen.com/dhl.html",
    "https://docs.postmen.com/dhl-global-mail-asia.html",
    "https://docs.postmen.com/bring.html",
    "https://docs.postmen.com/canpar.html",
    "https://docs.postmen.com/overview.html",
    "https://docs.postmen.com/errors.html",
    "https://docs.postmen.com/ratelimit.html",
    "https://docs.postmen.com/index.html",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://docs.postmen.com/**"],
  schedule: "at 00:30 on Friday",
  actions: [
    {
      indexName: "postmen",
      pathsToMatch: ["https://docs.postmen.com/index.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".api-endpoint-reqres";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#page-content h2, header li.active",
            content: "#page-content p",
            lvl0: {
              selectors: '#filter-carrier option[selected="true"]',
              defaultValue: "Default carrier",
            },
            lvl2: "#page-content h3",
            lvl3: "#page-content h4",
            pageRank: "1",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "postmen",
      pathsToMatch: ["https://docs.postmen.com/aramex.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".api-endpoint-reqres";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#page-content h2, header li.active",
            content: "#page-content p",
            lvl0: {
              selectors: '#filter-carrier option[selected="true"]',
              defaultValue: "Default carrier",
            },
            lvl2: "#page-content h3",
            lvl3: "#page-content h4",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "postmen",
      pathsToMatch: ["https://docs.postmen.com/myhermes-uk.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".api-endpoint-reqres";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#page-content h2, header li.active",
            content: "#page-content p",
            lvl0: {
              selectors: '#filter-carrier option[selected="true"]',
              defaultValue: "Default carrier",
            },
            lvl2: "#page-content h3",
            lvl3: "#page-content h4",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "postmen",
      pathsToMatch: ["https://docs.postmen.com/sf-express.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".api-endpoint-reqres";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#page-content h2, header li.active",
            content: "#page-content p",
            lvl0: {
              selectors: '#filter-carrier option[selected="true"]',
              defaultValue: "Default carrier",
            },
            lvl2: "#page-content h3",
            lvl3: "#page-content h4",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "postmen",
      pathsToMatch: ["https://docs.postmen.com/ups-mi.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".api-endpoint-reqres";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#page-content h2, header li.active",
            content: "#page-content p",
            lvl0: {
              selectors: '#filter-carrier option[selected="true"]',
              defaultValue: "Default carrier",
            },
            lvl2: "#page-content h3",
            lvl3: "#page-content h4",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "postmen",
      pathsToMatch: ["https://docs.postmen.com/yodel.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".api-endpoint-reqres";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#page-content h2, header li.active",
            content: "#page-content p",
            lvl0: {
              selectors: '#filter-carrier option[selected="true"]',
              defaultValue: "Default carrier",
            },
            lvl2: "#page-content h3",
            lvl3: "#page-content h4",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "postmen",
      pathsToMatch: ["https://docs.postmen.com/endicia.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".api-endpoint-reqres";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#page-content h2, header li.active",
            content: "#page-content p",
            lvl0: {
              selectors: '#filter-carrier option[selected="true"]',
              defaultValue: "Default carrier",
            },
            lvl2: "#page-content h3",
            lvl3: "#page-content h4",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "postmen",
      pathsToMatch: ["https://docs.postmen.com/quantium.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".api-endpoint-reqres";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#page-content h2, header li.active",
            content: "#page-content p",
            lvl0: {
              selectors: '#filter-carrier option[selected="true"]',
              defaultValue: "Default carrier",
            },
            lvl2: "#page-content h3",
            lvl3: "#page-content h4",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "postmen",
      pathsToMatch: ["https://docs.postmen.com/ups.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".api-endpoint-reqres";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#page-content h2, header li.active",
            content: "#page-content p",
            lvl0: {
              selectors: '#filter-carrier option[selected="true"]',
              defaultValue: "Default carrier",
            },
            lvl2: "#page-content h3",
            lvl3: "#page-content h4",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "postmen",
      pathsToMatch: ["https://docs.postmen.com/tnt.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".api-endpoint-reqres";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#page-content h2, header li.active",
            content: "#page-content p",
            lvl0: {
              selectors: '#filter-carrier option[selected="true"]',
              defaultValue: "Default carrier",
            },
            lvl2: "#page-content h3",
            lvl3: "#page-content h4",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "postmen",
      pathsToMatch: ["https://docs.postmen.com/purolator.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".api-endpoint-reqres";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#page-content h2, header li.active",
            content: "#page-content p",
            lvl0: {
              selectors: '#filter-carrier option[selected="true"]',
              defaultValue: "Default carrier",
            },
            lvl2: "#page-content h3",
            lvl3: "#page-content h4",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "postmen",
      pathsToMatch: ["https://docs.postmen.com/fastway-au.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".api-endpoint-reqres";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#page-content h2, header li.active",
            content: "#page-content p",
            lvl0: {
              selectors: '#filter-carrier option[selected="true"]',
              defaultValue: "Default carrier",
            },
            lvl2: "#page-content h3",
            lvl3: "#page-content h4",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "postmen",
      pathsToMatch: ["https://docs.postmen.com/parcelled-in.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".api-endpoint-reqres";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#page-content h2, header li.active",
            content: "#page-content p",
            lvl0: {
              selectors: '#filter-carrier option[selected="true"]',
              defaultValue: "Default carrier",
            },
            lvl2: "#page-content h3",
            lvl3: "#page-content h4",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "postmen",
      pathsToMatch: ["https://docs.postmen.com/hong-kong-post.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".api-endpoint-reqres";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#page-content h2, header li.active",
            content: "#page-content p",
            lvl0: {
              selectors: '#filter-carrier option[selected="true"]',
              defaultValue: "Default carrier",
            },
            lvl2: "#page-content h3",
            lvl3: "#page-content h4",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "postmen",
      pathsToMatch: ["https://docs.postmen.com/fedex.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".api-endpoint-reqres";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#page-content h2, header li.active",
            content: "#page-content p",
            lvl0: {
              selectors: '#filter-carrier option[selected="true"]',
              defaultValue: "Default carrier",
            },
            lvl2: "#page-content h3",
            lvl3: "#page-content h4",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "postmen",
      pathsToMatch: ["https://docs.postmen.com/dpd-nl.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".api-endpoint-reqres";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#page-content h2, header li.active",
            content: "#page-content p",
            lvl0: {
              selectors: '#filter-carrier option[selected="true"]',
              defaultValue: "Default carrier",
            },
            lvl2: "#page-content h3",
            lvl3: "#page-content h4",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "postmen",
      pathsToMatch: ["https://docs.postmen.com/dpex.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".api-endpoint-reqres";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#page-content h2, header li.active",
            content: "#page-content p",
            lvl0: {
              selectors: '#filter-carrier option[selected="true"]',
              defaultValue: "Default carrier",
            },
            lvl2: "#page-content h3",
            lvl3: "#page-content h4",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "postmen",
      pathsToMatch: ["https://docs.postmen.com/fedex-smartpost.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".api-endpoint-reqres";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#page-content h2, header li.active",
            content: "#page-content p",
            lvl0: {
              selectors: '#filter-carrier option[selected="true"]',
              defaultValue: "Default carrier",
            },
            lvl2: "#page-content h3",
            lvl3: "#page-content h4",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "postmen",
      pathsToMatch: ["https://docs.postmen.com/dpd-uk.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".api-endpoint-reqres";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#page-content h2, header li.active",
            content: "#page-content p",
            lvl0: {
              selectors: '#filter-carrier option[selected="true"]',
              defaultValue: "Default carrier",
            },
            lvl2: "#page-content h3",
            lvl3: "#page-content h4",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "postmen",
      pathsToMatch: ["https://docs.postmen.com/bpost-international.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".api-endpoint-reqres";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#page-content h2, header li.active",
            content: "#page-content p",
            lvl0: {
              selectors: '#filter-carrier option[selected="true"]',
              defaultValue: "Default carrier",
            },
            lvl2: "#page-content h3",
            lvl3: "#page-content h4",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "postmen",
      pathsToMatch: ["https://docs.postmen.com/dhl.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".api-endpoint-reqres";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#page-content h2, header li.active",
            content: "#page-content p",
            lvl0: {
              selectors: '#filter-carrier option[selected="true"]',
              defaultValue: "Default carrier",
            },
            lvl2: "#page-content h3",
            lvl3: "#page-content h4",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "postmen",
      pathsToMatch: ["https://docs.postmen.com/dhl-global-mail-asia.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".api-endpoint-reqres";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#page-content h2, header li.active",
            content: "#page-content p",
            lvl0: {
              selectors: '#filter-carrier option[selected="true"]',
              defaultValue: "Default carrier",
            },
            lvl2: "#page-content h3",
            lvl3: "#page-content h4",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "postmen",
      pathsToMatch: ["https://docs.postmen.com/bring.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".api-endpoint-reqres";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#page-content h2, header li.active",
            content: "#page-content p",
            lvl0: {
              selectors: '#filter-carrier option[selected="true"]',
              defaultValue: "Default carrier",
            },
            lvl2: "#page-content h3",
            lvl3: "#page-content h4",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "postmen",
      pathsToMatch: ["https://docs.postmen.com/canpar.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".api-endpoint-reqres";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#page-content h2, header li.active",
            content: "#page-content p",
            lvl0: {
              selectors: '#filter-carrier option[selected="true"]',
              defaultValue: "Default carrier",
            },
            lvl2: "#page-content h3",
            lvl3: "#page-content h4",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "postmen",
      pathsToMatch: ["https://docs.postmen.com/overview.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".api-endpoint-reqres";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#page-content h2, header li.active",
            content: "#page-content p",
            lvl0: {
              selectors: '#filter-carrier option[selected="true"]',
              defaultValue: "Default carrier",
            },
            lvl2: "#page-content h3",
            lvl3: "#page-content h4",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "postmen",
      pathsToMatch: ["https://docs.postmen.com/errors.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".api-endpoint-reqres";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#page-content h2, header li.active",
            content: "#page-content p",
            lvl0: {
              selectors: '#filter-carrier option[selected="true"]',
              defaultValue: "Default carrier",
            },
            lvl2: "#page-content h3",
            lvl3: "#page-content h4",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "postmen",
      pathsToMatch: ["https://docs.postmen.com/ratelimit.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".api-endpoint-reqres";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#page-content h2, header li.active",
            content: "#page-content p",
            lvl0: {
              selectors: '#filter-carrier option[selected="true"]',
              defaultValue: "Default carrier",
            },
            lvl2: "#page-content h3",
            lvl3: "#page-content h4",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    postmen: {
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