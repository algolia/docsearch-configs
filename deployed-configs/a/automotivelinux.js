new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "http://docs.automotivelinux.org/master/docs/getting_started/en/dev/",
    "http://docs.automotivelinux.org/",
    "http://docs.automotivelinux.org/master/docs/",
    "http://docs.automotivelinux.org/flounder/docs/getting_started/en/dev/",
    "http://docs.automotivelinux.org/flounder/docs/",
  ],
  renderJavaScript: false,
  sitemaps: ["http://docs.automotivelinux.org/master/sitemap.xml"],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["http://docs.automotivelinux.org/**"],
  schedule: "at 01:40 on Tuesday",
  actions: [
    {
      indexName: "automotivelinux",
      pathsToMatch: [
        "http://docs.automotivelinux.org/master/docs/getting_started/en/dev/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".home";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#page-toc-source h1",
            content:
              "#page-toc-source p, #page-toc-source li, #page-toc-source td",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "#page-toc-source h2",
            lvl3: "#page-toc-source h3",
            lvl4: "#page-toc-source h4",
            lvl5: "#page-toc-source h5",
            tags: {
              defaultValue: ["master"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "automotivelinux",
      pathsToMatch: ["http://docs.automotivelinux.org/master/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".home";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#page-toc-source h1",
            content:
              "#page-toc-source p, #page-toc-source li, #page-toc-source td",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "#page-toc-source h2",
            lvl3: "#page-toc-source h3",
            lvl4: "#page-toc-source h4",
            lvl5: "#page-toc-source h5",
            tags: {
              defaultValue: ["master"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "automotivelinux",
      pathsToMatch: [
        "http://docs.automotivelinux.org/flounder/docs/getting_started/en/dev/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".home";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#page-toc-source h1",
            content:
              "#page-toc-source p, #page-toc-source li, #page-toc-source td",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "#page-toc-source h2",
            lvl3: "#page-toc-source h3",
            lvl4: "#page-toc-source h4",
            lvl5: "#page-toc-source h5",
            tags: {
              defaultValue: ["flounder"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "automotivelinux",
      pathsToMatch: ["http://docs.automotivelinux.org/flounder/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".home";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#page-toc-source h1",
            content:
              "#page-toc-source p, #page-toc-source li, #page-toc-source td",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "#page-toc-source h2",
            lvl3: "#page-toc-source h3",
            lvl4: "#page-toc-source h4",
            lvl5: "#page-toc-source h5",
            tags: {
              defaultValue: ["flounder"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    automotivelinux: {
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
      separatorsToIndex: "_",
    },
  },
});