new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://mxnet.apache.org/versions/1.6/api/python/docs/",
    "https://mxnet.apache.org/",
    "https://mxnet.apache.org/api/python/docs/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [
    "**/scala/docs/api/**",
    "**/java/docs/api/**",
    "**/clojure/docs/api/**",
    "**/cpp/docs/api/**",
    "**/julia/docs/api/**",
    "**/_**",
    "**/_**/**",
    "**/doxygen/**"
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://mxnet.apache.org/**"],
  schedule: "at 01:30 on Tuesday",
  actions: [
    {
      indexName: "apache_mxnet",
      pathsToMatch: [
        "https://mxnet.apache.org/versions/1.6/api/python/docs/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".page-content h1",
            content: ".page-content p, .page-content li",
            lvl0: {
              selectors:
                "header.mdl-layout__header nav.mdl-navigation.breadcrumb > a:nth-child(1)",
              defaultValue: "Python Docs",
            },
            lvl2: ".page-content h2",
            lvl3: ".page-content h3",
            lvl4: ".page-content h4",
            lvl5: ".page-content h5",
            version:
              "body > header > div > nav > div > div > span, #dropdown-menu-position-anchor-version > a",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "apache_mxnet",
      pathsToMatch: ["https://mxnet.apache.org/api/python/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".page-content h1",
            content: ".page-content p, .page-content li",
            lvl0: {
              selectors:
                "header.mdl-layout__header nav.mdl-navigation.breadcrumb > a:nth-child(1)",
              defaultValue: "Python Docs",
            },
            lvl2: ".page-content h2",
            lvl3: ".page-content h3",
            lvl4: ".page-content h4",
            lvl5: ".page-content h5",
            version:
              "body > header > div > nav > div > div > span, #dropdown-menu-position-anchor-version > a",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "apache_mxnet",
      pathsToMatch: [
        "https://mxnet.apache.org**/**",
        "!https://mxnet.apache.org/versions/1.6/api/python/docs/**",
        "!https://mxnet.apache.org/api/python/docs/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2, .section h2",
            content: ".section p, .section li, article p, article li",
            lvl0: {
              selectors: "article h1, .section h1",
            },
            lvl2: "article h3, .section h3",
            lvl3: "article h4, .section h4",
            lvl4: "article h5, .section h5",
            lvl5: "article h6, .section h6",
            version:
              "body > header > div > nav > div > div > span, #dropdown-menu-position-anchor-version > a",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    apache_mxnet: {
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