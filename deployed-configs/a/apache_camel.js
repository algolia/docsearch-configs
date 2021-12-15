new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://camel.apache.org/blog/",
    "https://camel.apache.org/",
    "https://camel.apache.org/camel-k/",
    "https://camel.apache.org/camel-quarkus/",
    "https://camel.apache.org/camel-kafka-connector/",
    "https://camel.apache.org/camel-spring-boot/",
    "https://camel.apache.org/camel-karaf/",
    "https://camel.apache.org/components/",
    "https://camel.apache.org/manual/",
    "https://camel.apache.org/download/",
    "https://camel.apache.org/community/books",
    "https://camel.apache.org/community/articles",
    "https://camel.apache.org/docs/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://camel.apache.org/sitemap.xml"],
  exclusionPatterns: [
    "https://camel.apache.org/categories/**",
    "https://camel.apache.org/blog/page/**",
    "**/**index.html",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://camel.apache.org/**"],
  schedule: "at 01:30 on Tuesday",
  actions: [
    {
      indexName: "apache_camel",
      pathsToMatch: ["https://camel.apache.org/blog/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header a.category:nth-child(1)",
            content: "article .post-content p, article .post-content li",
            lvl0: {
              selectors: "",
              defaultValue: "Blog",
            },
            lvl2: "header a.category:nth-child(2)",
            lvl3: "article h1",
            lvl4: "article h2",
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "apache_camel",
      pathsToMatch: ["https://camel.apache.org/camel-k/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".breadcrumbs ul li:nth-child(2) a",
            content: "article p, article li",
            lvl0: {
              selectors: ".breadcrumbs ul li:nth-child(1) a",
            },
            lvl2: ".breadcrumbs ul li:nth-child(3) a",
            lvl3: ".breadcrumbs ul li:nth-child(4) a",
            lvl4: "article h2",
            lvl5: "article h3",
            lvl6: "div.nav-panel-explore .version.is-current a",
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "apache_camel",
      pathsToMatch: ["https://camel.apache.org/camel-quarkus/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".breadcrumbs ul li:nth-child(2) a",
            content: "article p, article li",
            lvl0: {
              selectors: ".breadcrumbs ul li:nth-child(1) a",
            },
            lvl2: ".breadcrumbs ul li:nth-child(3) a",
            lvl3: ".breadcrumbs ul li:nth-child(4) a",
            lvl4: "article h2",
            lvl5: "article h3",
            lvl6: "div.nav-panel-explore .version.is-current a",
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "apache_camel",
      pathsToMatch: ["https://camel.apache.org/camel-kafka-connector/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".breadcrumbs ul li:nth-child(2) a",
            content: "article p, article li",
            lvl0: {
              selectors: ".breadcrumbs ul li:nth-child(1) a",
            },
            lvl2: ".breadcrumbs ul li:nth-child(3) a",
            lvl3: ".breadcrumbs ul li:nth-child(4) a",
            lvl4: "article h2",
            lvl5: "article h3",
            lvl6: "div.nav-panel-explore .version.is-current a",
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "apache_camel",
      pathsToMatch: ["https://camel.apache.org/camel-spring-boot/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".breadcrumbs ul li:nth-child(2) a",
            content: "article p, article li",
            lvl0: {
              selectors: ".breadcrumbs ul li:nth-child(1) a",
            },
            lvl2: ".breadcrumbs ul li:nth-child(3) a",
            lvl3: ".breadcrumbs ul li:nth-child(4) a",
            lvl4: "article h2",
            lvl5: "article h3",
            lvl6: "div.nav-panel-explore .version.is-current a",
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "apache_camel",
      pathsToMatch: ["https://camel.apache.org/camel-karaf/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".breadcrumbs ul li:nth-child(2) a",
            content: "article p, article li",
            lvl0: {
              selectors: ".breadcrumbs ul li:nth-child(1) a",
            },
            lvl2: ".breadcrumbs ul li:nth-child(3) a",
            lvl3: ".breadcrumbs ul li:nth-child(4) a",
            lvl4: "article h2",
            lvl5: "article h3",
            lvl6: "div.nav-panel-explore .version.is-current a",
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "apache_camel",
      pathsToMatch: ["https://camel.apache.org/components/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".breadcrumbs ul li:nth-child(2) a",
            content: "article p, article li",
            lvl0: {
              selectors: ".breadcrumbs ul li:nth-child(1) a",
            },
            lvl2: ".breadcrumbs ul li:nth-child(3) a",
            lvl3: ".breadcrumbs ul li:nth-child(4) a",
            lvl4: "article h2",
            lvl5: "article h3",
            lvl6: "div.nav-panel-explore .version.is-current a",
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "apache_camel",
      pathsToMatch: ["https://camel.apache.org/manual/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".breadcrumbs ul li:nth-child(2) a",
            content: "article p, article li",
            lvl0: {
              selectors: ".breadcrumbs ul li:nth-child(1) a",
            },
            lvl2: ".breadcrumbs ul li:nth-child(3) a",
            lvl3: ".breadcrumbs ul li:nth-child(4) a",
            lvl4: "article h2",
            lvl5: "article h3",
            lvl6: "div.nav-panel-explore .version.is-current a",
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "apache_camel",
      pathsToMatch: ["https://camel.apache.org/download/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "apache_camel",
      pathsToMatch: ["https://camel.apache.org/community/books**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "apache_camel",
      pathsToMatch: ["https://camel.apache.org/community/articles**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "apache_camel",
      pathsToMatch: ["https://camel.apache.org/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
          },
          indexHeadings: false,
        });
      },
    },
  ],
  initialIndexSettings: {
    apache_camel: {
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