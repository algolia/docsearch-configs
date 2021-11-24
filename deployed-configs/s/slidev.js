new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://sli.dev/",
    "https://cn.sli.dev/",
    "https://fr.sli.dev/",
    "https://ru.sli.dev/",
    "https://es.sli.dev/",
    "https://vn.sli.dev/",
    "https://de.sli.dev/",
    "https://br.sli.dev/",
    "https://el.sli.dev/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: [
    "https://sli.dev/**",
    "https://cn.sli.dev/**",
    "https://fr.sli.dev/**",
    "https://ru.sli.dev/**",
    "https://es.sli.dev/**",
    "https://vn.sli.dev/**",
    "https://de.sli.dev/**",
    "https://br.sli.dev/**",
    "https://el.sli.dev/**",
  ],
  schedule: "at 15:20 on Friday",
  actions: [
    {
      indexName: "slidev",
      pathsToMatch: ["https://sli.dev/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h1",
            content: ".content p, .content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".content h2",
            lvl3: ".content h3",
            lvl4: ".content h4",
            lvl5: ".content h5",
            language: {
              defaultValue: ["en"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "slidev",
      pathsToMatch: ["https://cn.sli.dev/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h1",
            content: ".content p, .content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".content h2",
            lvl3: ".content h3",
            lvl4: ".content h4",
            lvl5: ".content h5",
            language: {
              defaultValue: ["cn"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "slidev",
      pathsToMatch: ["https://fr.sli.dev/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h1",
            content: ".content p, .content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".content h2",
            lvl3: ".content h3",
            lvl4: ".content h4",
            lvl5: ".content h5",
            language: {
              defaultValue: ["fr"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "slidev",
      pathsToMatch: ["https://ru.sli.dev/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h1",
            content: ".content p, .content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".content h2",
            lvl3: ".content h3",
            lvl4: ".content h4",
            lvl5: ".content h5",
            language: {
              defaultValue: ["ru"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "slidev",
      pathsToMatch: ["https://es.sli.dev/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h1",
            content: ".content p, .content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".content h2",
            lvl3: ".content h3",
            lvl4: ".content h4",
            lvl5: ".content h5",
            language: {
              defaultValue: ["es"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "slidev",
      pathsToMatch: ["https://vn.sli.dev/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h1",
            content: ".content p, .content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".content h2",
            lvl3: ".content h3",
            lvl4: ".content h4",
            lvl5: ".content h5",
            language: {
              defaultValue: ["vn"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "slidev",
      pathsToMatch: ["https://de.sli.dev/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h1",
            content: ".content p, .content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".content h2",
            lvl3: ".content h3",
            lvl4: ".content h4",
            lvl5: ".content h5",
            language: {
              defaultValue: ["de"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "slidev",
      pathsToMatch: ["https://br.sli.dev/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h1",
            content: ".content p, .content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".content h2",
            lvl3: ".content h3",
            lvl4: ".content h4",
            lvl5: ".content h5",
            language: {
              defaultValue: ["br"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "slidev",
      pathsToMatch: ["https://el.sli.dev/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h1",
            content: ".content p, .content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".content h2",
            lvl3: ".content h3",
            lvl4: ".content h4",
            lvl5: ".content h5",
            language: {
              defaultValue: ["el"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    slidev: {
      attributesForFaceting: ["type", "lang", "language"],
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