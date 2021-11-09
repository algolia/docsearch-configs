new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://azure-ml.arcus-azure.net/",
    "https://background-jobs.arcus-azure.net/",
    "https://eventgrid-proxy.arcus-azure.net/",
    "https://eventgrid.arcus-azure.net/",
    "https://messaging.arcus-azure.net/",
    "https://machine-learning.arcus-azure.net/",
    "https://observability.arcus-azure.net/",
    "https://scripting.arcus-azure.net/",
    "https://security.arcus-azure.net/",
    "https://templates.arcus-azure.net/",
    "https://webapi.arcus-azure.net/",
  ],
  renderJavaScript: false,
  sitemaps: [
    "https://azure-ml.arcus-azure.net/sitemap.xml",
    "https://background-jobs.arcus-azure.net/sitemap.xml",
    "https://eventgrid-proxy.arcus-azure.net/sitemap.xml",
    "https://eventgrid.arcus-azure.net/sitemap.xml",
    "https://messaging.arcus-azure.net/sitemap.xml",
    "https://machine-learning.arcus-azure.net/sitemap.xml",
    "https://observability.arcus-azure.net/sitemap.xml",
    "https://scripting.arcus-azure.net/sitemap.xml",
    "https://security.arcus-azure.net/sitemap.xml",
    "https://templates.arcus-azure.net/sitemap.xml",
    "https://webapi.arcus-azure.net/sitemap.xml",
  ],
  exclusionPatterns: [],
  ignoreCanonicalTo: true,
  discoveryPatterns: [
    "https://azure-ml.arcus-azure.net/**",
    "https://background-jobs.arcus-azure.net/**",
    "https://eventgrid-proxy.arcus-azure.net/**",
    "https://eventgrid.arcus-azure.net/**",
    "https://messaging.arcus-azure.net/**",
    "https://machine-learning.arcus-azure.net/**",
    "https://observability.arcus-azure.net/**",
    "https://scripting.arcus-azure.net/**",
    "https://security.arcus-azure.net/**",
    "https://templates.arcus-azure.net/**",
    "https://webapi.arcus-azure.net/**",
  ],
  schedule: "at 01:40 on Tuesday",
  actions: [
    {
      indexName: "arcus-azure",
      pathsToMatch: ["https://azure-ml.arcus-azure.net/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: [
                ".menu__link.menu__link--sublist.menu__link--active",
                ".navbar__item.navbar__link--active",
              ],
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
            tags: {
              defaultValue: ["azure-ml"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "arcus-azure",
      pathsToMatch: ["https://background-jobs.arcus-azure.net/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: [
                ".menu__link.menu__link--sublist.menu__link--active",
                ".navbar__item.navbar__link--active",
              ],
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
            tags: {
              defaultValue: ["background-jobs"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "arcus-azure",
      pathsToMatch: ["https://eventgrid-proxy.arcus-azure.net/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: [
                ".menu__link.menu__link--sublist.menu__link--active",
                ".navbar__item.navbar__link--active",
              ],
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
            tags: {
              defaultValue: ["eventgrid-proxy"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "arcus-azure",
      pathsToMatch: ["https://eventgrid.arcus-azure.net/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: [
                ".menu__link.menu__link--sublist.menu__link--active",
                ".navbar__item.navbar__link--active",
              ],
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
            tags: {
              defaultValue: ["eventgrid"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "arcus-azure",
      pathsToMatch: ["https://messaging.arcus-azure.net/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: [
                ".menu__link.menu__link--sublist.menu__link--active",
                ".navbar__item.navbar__link--active",
              ],
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
            tags: {
              defaultValue: ["messaging"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "arcus-azure",
      pathsToMatch: ["https://machine-learning.arcus-azure.net/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: [
                ".menu__link.menu__link--sublist.menu__link--active",
                ".navbar__item.navbar__link--active",
              ],
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
            tags: {
              defaultValue: ["machine-learning"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "arcus-azure",
      pathsToMatch: ["https://observability.arcus-azure.net/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: [
                ".menu__link.menu__link--sublist.menu__link--active",
                ".navbar__item.navbar__link--active",
              ],
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
            tags: {
              defaultValue: ["observability"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "arcus-azure",
      pathsToMatch: ["https://scripting.arcus-azure.net/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: [
                ".menu__link.menu__link--sublist.menu__link--active",
                ".navbar__item.navbar__link--active",
              ],
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
            tags: {
              defaultValue: ["scripting"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "arcus-azure",
      pathsToMatch: ["https://security.arcus-azure.net/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: [
                ".menu__link.menu__link--sublist.menu__link--active",
                ".navbar__item.navbar__link--active",
              ],
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
            tags: {
              defaultValue: ["security"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "arcus-azure",
      pathsToMatch: ["https://templates.arcus-azure.net/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: [
                ".menu__link.menu__link--sublist.menu__link--active",
                ".navbar__item.navbar__link--active",
              ],
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
            tags: {
              defaultValue: ["templates"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "arcus-azure",
      pathsToMatch: ["https://webapi.arcus-azure.net/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: [
                ".menu__link.menu__link--sublist.menu__link--active",
                ".navbar__item.navbar__link--active",
              ],
              defaultValue: "Documentation",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            lvl4: "article h4",
            lvl5: "article h5, article td:first-child",
            tags: {
              defaultValue: ["webapi"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    "arcus-azure": {
      attributesForFaceting: [
        "type",
        "lang",
        "language",
        "version",
        "docusaurus_tag",
        "tags",
      ],
      attributesToRetrieve: [
        "hierarchy",
        "content",
        "anchor",
        "url",
        "url_without_anchor",
        "type",
      ],
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