new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://www.ory.sh/docs",
    "https://www.ory.sh/",
    "https://www.ory.sh/hydra/docs",
    "https://www.ory.sh/keto/docs",
    "https://www.ory.sh/oathkeeper/docs",
    "https://www.ory.sh/kratos/docs",
  ],
  renderJavaScript: false,
  sitemaps: [
    "https://www.ory.sh/docs/sitemap.xml",
    "https://www.ory.sh/hydra/docs/sitemap.xml",
    "https://www.ory.sh/oathkeeper/docs/sitemap.xml",
    "https://www.ory.sh/keto/docs/sitemap.xml",
    "https://www.ory.sh/kratos/docs/sitemap.xml",
  ],
  exclusionPatterns: [
    "https://www.ory.sh/docs/deprecated**",
    "https://www.ory.sh/docs/deprecated**/**",
    "https://www.ory.sh/docs/oryOS**",
    "https://www.ory.sh/docs/oryOS**/**",
    "https://www.ory.sh/docs/next**",
    "https://www.ory.sh/docs/next**/**",
    "https://www.ory.sh/**/docs/next**",
    "https://www.ory.sh/**/docs/next**/**",
  ],
  ignoreCanonicalTo: true,
  discoveryPatterns: ["https://www.ory.sh/**"],
  schedule: "at 20:40 on Thursday",
  actions: [
    {
      indexName: "ory",
      pathsToMatch: ["https://www.ory.sh/docs**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article code",
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
            lvl5: "article h5",
            tags: {
              defaultValue: ["docs"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "ory",
      pathsToMatch: ["https://www.ory.sh/hydra/docs**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article code",
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
            lvl5: "article h5",
            tags: {
              defaultValue: ["hydra"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "ory",
      pathsToMatch: ["https://www.ory.sh/keto/docs**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article code",
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
            lvl5: "article h5",
            tags: {
              defaultValue: ["keto"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "ory",
      pathsToMatch: ["https://www.ory.sh/oathkeeper/docs**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article code",
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
            lvl5: "article h5",
            tags: {
              defaultValue: ["oathkeeper"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "ory",
      pathsToMatch: ["https://www.ory.sh/kratos/docs**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "header h1",
            content: "article p, article li, article code",
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
            lvl5: "article h5",
            tags: {
              defaultValue: ["kratos"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    ory: {
      attributesForFaceting: [
        "type",
        "lang",
        "docusaurus_tag",
        "language",
        "version",
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