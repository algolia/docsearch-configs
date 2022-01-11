new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://workbench.gusto.com/",
    "https://workbench.gusto.com/getting-started/",
    "https://workbench.gusto.com/foundations/",
    "https://workbench.gusto.com/components/",
    "https://workbench.gusto.com/patterns/",
    "https://workbench.gusto.com/content/",
    "https://workbench.gusto.com/resources/",
    "https://workbench.gusto.com/updates/",
  ],
  renderJavaScript: true,
  sitemaps: ["https://workbench.gusto.com/sitemap/sitemap-0.xml"],
  exclusionPatterns: ["**/\\?**", "**/\\?**/**"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://workbench.gusto.com/**"],
  schedule: "at 10:30 on Saturday",
  actions: [
    {
      indexName: "workbench",
      pathsToMatch: ["https://workbench.gusto.com/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".DocSearch-exclude";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".DocSearch-content h1",
            content: ".DocSearch-content p, .DocSearch-content li",
            lvl0: {
              selectors: ".DocSearch-l0",
              defaultValue: "Documentation",
            },
            lvl2: ".DocSearch-content h2",
            lvl3: ".DocSearch-content h3",
            lvl4: ".DocSearch-content h4",
            lvl5: ".DocSearch-content h5",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "workbench",
      pathsToMatch: ["https://workbench.gusto.com/getting-started/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".DocSearch-exclude";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".DocSearch-content h1",
            content: ".DocSearch-content p, .DocSearch-content li",
            lvl0: {
              selectors: ".DocSearch-l0",
              defaultValue: "Documentation",
            },
            lvl2: ".DocSearch-content h2",
            lvl3: ".DocSearch-content h3",
            lvl4: ".DocSearch-content h4",
            lvl5: ".DocSearch-content h5",
            pageRank: "1",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "workbench",
      pathsToMatch: ["https://workbench.gusto.com/foundations/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".DocSearch-exclude";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".DocSearch-content h1",
            content: ".DocSearch-content p, .DocSearch-content li",
            lvl0: {
              selectors: ".DocSearch-l0",
              defaultValue: "Documentation",
            },
            lvl2: ".DocSearch-content h2",
            lvl3: ".DocSearch-content h3",
            lvl4: ".DocSearch-content h4",
            lvl5: ".DocSearch-content h5",
            pageRank: "2",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "workbench",
      pathsToMatch: ["https://workbench.gusto.com/components/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".DocSearch-exclude";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".DocSearch-content h1",
            content: ".DocSearch-content p, .DocSearch-content li",
            lvl0: {
              selectors: ".DocSearch-l0",
              defaultValue: "Documentation",
            },
            lvl2: ".DocSearch-content h2",
            lvl3: ".DocSearch-content h3",
            lvl4: ".DocSearch-content h4",
            lvl5: ".DocSearch-content h5",
            pageRank: "3",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "workbench",
      pathsToMatch: ["https://workbench.gusto.com/patterns/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".DocSearch-exclude";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".DocSearch-content h1",
            content: ".DocSearch-content p, .DocSearch-content li",
            lvl0: {
              selectors: ".DocSearch-l0",
              defaultValue: "Documentation",
            },
            lvl2: ".DocSearch-content h2",
            lvl3: ".DocSearch-content h3",
            lvl4: ".DocSearch-content h4",
            lvl5: ".DocSearch-content h5",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "workbench",
      pathsToMatch: ["https://workbench.gusto.com/content/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".DocSearch-exclude";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".DocSearch-content h1",
            content: ".DocSearch-content p, .DocSearch-content li",
            lvl0: {
              selectors: ".DocSearch-l0",
              defaultValue: "Documentation",
            },
            lvl2: ".DocSearch-content h2",
            lvl3: ".DocSearch-content h3",
            lvl4: ".DocSearch-content h4",
            lvl5: ".DocSearch-content h5",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "workbench",
      pathsToMatch: ["https://workbench.gusto.com/resources/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".DocSearch-exclude";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".DocSearch-content h1",
            content: ".DocSearch-content p, .DocSearch-content li",
            lvl0: {
              selectors: ".DocSearch-l0",
              defaultValue: "Documentation",
            },
            lvl2: ".DocSearch-content h2",
            lvl3: ".DocSearch-content h3",
            lvl4: ".DocSearch-content h4",
            lvl5: ".DocSearch-content h5",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "workbench",
      pathsToMatch: ["https://workbench.gusto.com/updates/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".DocSearch-exclude";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".DocSearch-content h1",
            content: ".DocSearch-content p, .DocSearch-content li",
            lvl0: {
              selectors: ".DocSearch-l0",
              defaultValue: "Documentation",
            },
            lvl2: ".DocSearch-content h2",
            lvl3: ".DocSearch-content h3",
            lvl4: ".DocSearch-content h4",
            lvl5: ".DocSearch-content h5",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    workbench: {
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