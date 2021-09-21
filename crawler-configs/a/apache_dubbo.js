new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://dubbo.apache.org/zh/docs/v2.7/",
    "https://dubbo.apache.org/",
    "https://dubbo.apache.org/zh/docs/v3.0/",
    "https://dubbo.apache.org/docs/v2.7/",
    "https://dubbo.apache.org/docs/v3.0/",
  ],
  renderJavaScript: false,
  sitemaps: [
    "https://dubbo.apache.org/en/sitemap.xml",
    "https://dubbo.apache.org/zh/sitemap.xml",
  ],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://dubbo.apache.org/**"],
  schedule: "at 01:30 on Tuesday",
  actions: [
    {
      indexName: "apache_dubbo",
      pathsToMatch: ["https://dubbo.apache.org/zh/docs/v2.7/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h1",
            content: "main p, main li",
            lvl0: {
              selectors: ".td-sidebar-link.td-sidebar-link__page.active",
              defaultValue: "Documentation",
            },
            lvl2: "main h2",
            lvl3: "main h3",
            lvl4: "main h4",
            lvl5: "main h5",
            version: {
              defaultValue: ["v2.7"],
            },
            lang: {
              defaultValue: ["zh/"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "apache_dubbo",
      pathsToMatch: ["https://dubbo.apache.org/zh/docs/v3.0/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h1",
            content: "main p, main li",
            lvl0: {
              selectors: ".td-sidebar-link.td-sidebar-link__page.active",
              defaultValue: "Documentation",
            },
            lvl2: "main h2",
            lvl3: "main h3",
            lvl4: "main h4",
            lvl5: "main h5",
            version: {
              defaultValue: ["v3.0"],
            },
            lang: {
              defaultValue: ["zh/"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "apache_dubbo",
      pathsToMatch: ["https://dubbo.apache.org/docs/v2.7/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h1",
            content: "main p, main li",
            lvl0: {
              selectors: ".td-sidebar-link.td-sidebar-link__page.active",
              defaultValue: "Documentation",
            },
            lvl2: "main h2",
            lvl3: "main h3",
            lvl4: "main h4",
            lvl5: "main h5",
            version: {
              defaultValue: ["v2.7"],
            },
            lang: {
              defaultValue: [""],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "apache_dubbo",
      pathsToMatch: ["https://dubbo.apache.org/docs/v3.0/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h1",
            content: "main p, main li",
            lvl0: {
              selectors: ".td-sidebar-link.td-sidebar-link__page.active",
              defaultValue: "Documentation",
            },
            lvl2: "main h2",
            lvl3: "main h3",
            lvl4: "main h4",
            lvl5: "main h5",
            version: {
              defaultValue: ["v3.0"],
            },
            lang: {
              defaultValue: [""],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    apache_dubbo: {
      attributesForFaceting: ["type", "lang", "version"],
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