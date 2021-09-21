new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://prismatic.io/docs/components/",
    "https://prismatic.io/",
    "https://prismatic.io/docs/getting-started/",
    "https://prismatic.io/docs/cli/",
    "https://prismatic.io/docs/spectral/",
    "https://prismatic.io/docs/api/",
    "https://prismatic.io/docs/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://prismatic.io/docs/sitemap.xml"],
  exclusionPatterns: [],
  ignoreCanonicalTo: true,
  discoveryPatterns: ["https://prismatic.io/**"],
  schedule: "at 00:40 on Friday",
  actions: [
    {
      indexName: "prismatic",
      pathsToMatch: ["https://prismatic.io/docs/components/**"],
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
            lvl6: "article h6",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "prismatic",
      pathsToMatch: ["https://prismatic.io/docs/getting-started/**"],
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
            lvl6: "article h6",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "prismatic",
      pathsToMatch: ["https://prismatic.io/docs/cli/**"],
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
            lvl6: "article h6",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "prismatic",
      pathsToMatch: ["https://prismatic.io/docs/spectral/**"],
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
            lvl6: "article h6",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "prismatic",
      pathsToMatch: ["https://prismatic.io/docs/api/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: [
              ".menu__link.menu__link--sublist.menu__link--active",
              ".navbar__item.navbar__link--active",
            ],
            content: "article p, article li, article td:last-child",
            lvl0: {
              selectors: "",
              defaultValue: "API",
            },
            lvl2: "header h1",
            lvl3: "article h2",
            lvl4: "article h3",
            tags: {
              defaultValue: ["api"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "prismatic",
      pathsToMatch: [
        "https://prismatic.io/docs/**",
        "!https://prismatic.io/docs/components/**",
        "!https://prismatic.io/docs/getting-started/**",
        "!https://prismatic.io/docs/cli/**",
        "!https://prismatic.io/docs/spectral/**",
        "!https://prismatic.io/docs/api/**",
      ],
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
            lvl6: "article h6",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    prismatic: {
      attributesForFaceting: [
        "type",
        "lang",
        "language",
        "version",
        "docusaurus_tag",
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