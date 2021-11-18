new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://documentation.bonitasoft.com/bonita/7.6/",
    "https://documentation.bonitasoft.com/",
    "https://documentation.bonitasoft.com/bonita/7.7/",
    "https://documentation.bonitasoft.com/bonita/7.8/",
    "https://documentation.bonitasoft.com/bonita/7.9/",
    "https://documentation.bonitasoft.com/bonita/7.10/",
    "https://documentation.bonitasoft.com/bonita/7.11/",
    "https://documentation.bonitasoft.com/bonita/2021.1/",
    "https://documentation.bonitasoft.com/bonita/2021.2/",
    "https://documentation.bonitasoft.com/cloud/latest/",
    "https://documentation.bonitasoft.com/labs/latest/",
    "https://documentation.bonitasoft.com/bcd/3.4/",
    "https://documentation.bonitasoft.com/bcd/3.5/",
    "https://documentation.bonitasoft.com/bcd/latest/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://documentation.bonitasoft.com/sitemap.xml"],
  exclusionPatterns: [
    "https://documentation.bonitasoft.com/bonita/7.3**",
    "https://documentation.bonitasoft.com/bonita/7.3**/**",
    "https://documentation.bonitasoft.com/bonita/7.4**",
    "https://documentation.bonitasoft.com/bonita/7.4**/**",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://documentation.bonitasoft.com/**"],
  schedule: "at 06:30 on Tuesday",
  actions: [
    {
      indexName: "bonitasoft",
      pathsToMatch: ["https://documentation.bonitasoft.com/bonita/7.6/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h2",
            content: ".content p, .content li",
            lvl0: {
              selectors: ".content h1",
            },
            lvl2: ".content h3",
            lvl3: ".content h4",
            lvl4: ".content h5",
            lvl5: ".content h6",
            version: {
              defaultValue: ["7.6"],
            },
            tags: {
              defaultValue: ["bonita"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "bonitasoft",
      pathsToMatch: ["https://documentation.bonitasoft.com/bonita/7.7/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h2",
            content: ".content p, .content li",
            lvl0: {
              selectors: ".content h1",
            },
            lvl2: ".content h3",
            lvl3: ".content h4",
            lvl4: ".content h5",
            lvl5: ".content h6",
            version: {
              defaultValue: ["7.7"],
            },
            tags: {
              defaultValue: ["bonita"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "bonitasoft",
      pathsToMatch: ["https://documentation.bonitasoft.com/bonita/7.8/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h2",
            content: ".content p, .content li",
            lvl0: {
              selectors: ".content h1",
            },
            lvl2: ".content h3",
            lvl3: ".content h4",
            lvl4: ".content h5",
            lvl5: ".content h6",
            version: {
              defaultValue: ["7.8"],
            },
            tags: {
              defaultValue: ["bonita"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "bonitasoft",
      pathsToMatch: ["https://documentation.bonitasoft.com/bonita/7.9/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h2",
            content: ".content p, .content li",
            lvl0: {
              selectors: ".content h1",
            },
            lvl2: ".content h3",
            lvl3: ".content h4",
            lvl4: ".content h5",
            lvl5: ".content h6",
            version: {
              defaultValue: ["7.9"],
            },
            tags: {
              defaultValue: ["bonita"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "bonitasoft",
      pathsToMatch: ["https://documentation.bonitasoft.com/bonita/7.10/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h2",
            content: ".content p, .content li",
            lvl0: {
              selectors: ".content h1",
            },
            lvl2: ".content h3",
            lvl3: ".content h4",
            lvl4: ".content h5",
            lvl5: ".content h6",
            version: {
              defaultValue: ["7.10"],
            },
            tags: {
              defaultValue: ["bonita"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "bonitasoft",
      pathsToMatch: ["https://documentation.bonitasoft.com/bonita/7.11/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h2",
            content: ".content p, .content li",
            lvl0: {
              selectors: ".content h1",
            },
            lvl2: ".content h3",
            lvl3: ".content h4",
            lvl4: ".content h5",
            lvl5: ".content h6",
            version: {
              defaultValue: ["7.11"],
            },
            tags: {
              defaultValue: ["bonita"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "bonitasoft",
      pathsToMatch: ["https://documentation.bonitasoft.com/bonita/2021.1/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h2",
            content: ".content p, .content li",
            lvl0: {
              selectors: ".content h1",
            },
            lvl2: ".content h3",
            lvl3: ".content h4",
            lvl4: ".content h5",
            lvl5: ".content h6",
            version: {
              defaultValue: ["2021.1"],
            },
            tags: {
              defaultValue: ["bonita"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "bonitasoft",
      pathsToMatch: ["https://documentation.bonitasoft.com/bonita/2021.2/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h2",
            content: ".content p, .content li",
            lvl0: {
              selectors: ".content h1",
            },
            lvl2: ".content h3",
            lvl3: ".content h4",
            lvl4: ".content h5",
            lvl5: ".content h6",
            version: {
              defaultValue: ["2021.2"],
            },
            tags: {
              defaultValue: ["bonita"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "bonitasoft",
      pathsToMatch: ["https://documentation.bonitasoft.com/cloud/latest/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h2",
            content: ".content p, .content li",
            lvl0: {
              selectors: ".content h1",
            },
            lvl2: ".content h3",
            lvl3: ".content h4",
            lvl4: ".content h5",
            lvl5: ".content h6",
            version: {
              defaultValue: ["latest"],
            },
            tags: {
              defaultValue: ["cloud"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "bonitasoft",
      pathsToMatch: ["https://documentation.bonitasoft.com/labs/latest/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h2",
            content: ".content p, .content li",
            lvl0: {
              selectors: ".content h1",
            },
            lvl2: ".content h3",
            lvl3: ".content h4",
            lvl4: ".content h5",
            lvl5: ".content h6",
            version: {
              defaultValue: ["latest"],
            },
            tags: {
              defaultValue: ["labs"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "bonitasoft",
      pathsToMatch: ["https://documentation.bonitasoft.com/bcd/3.4/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h2",
            content: ".content p, .content li",
            lvl0: {
              selectors: ".content h1",
            },
            lvl2: ".content h3",
            lvl3: ".content h4",
            lvl4: ".content h5",
            lvl5: ".content h6",
            version: {
              defaultValue: ["3.4"],
            },
            tags: {
              defaultValue: ["bcd"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "bonitasoft",
      pathsToMatch: ["https://documentation.bonitasoft.com/bcd/3.5/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h2",
            content: ".content p, .content li",
            lvl0: {
              selectors: ".content h1",
            },
            lvl2: ".content h3",
            lvl3: ".content h4",
            lvl4: ".content h5",
            lvl5: ".content h6",
            version: {
              defaultValue: ["3.5"],
            },
            tags: {
              defaultValue: ["bcd"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "bonitasoft",
      pathsToMatch: ["https://documentation.bonitasoft.com/bcd/latest/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h2",
            content: ".content p, .content li",
            lvl0: {
              selectors: ".content h1",
            },
            lvl2: ".content h3",
            lvl3: ".content h4",
            lvl4: ".content h5",
            lvl5: ".content h6",
            version: {
              defaultValue: ["latest"],
            },
            tags: {
              defaultValue: ["bcd"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    bonitasoft: {
      attributesForFaceting: ["type", "lang", "version", "tags"],
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