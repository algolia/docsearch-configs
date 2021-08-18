new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://supertokens.io/docs/community/",
    "https://supertokens.io/",
    "https://supertokens.io/docs/emailpassword/",
    "https://supertokens.io/docs/thirdparty/",
    "https://supertokens.io/docs/thirdpartyemailpassword/",
    "https://supertokens.io/docs/session/",
    "https://supertokens.io/docs/nodejs/",
    "https://supertokens.io/docs/ios/",
    "https://supertokens.io/docs/android/",
    "https://supertokens.io/docs/website/",
    "https://supertokens.io/docs/laravel/",
    "https://supertokens.io/docs/react-native/",
    "https://supertokens.io/docs/auth-react/",
    "https://supertokens.io/docs/javalin/",
    "https://supertokens.io/docs/flask/",
    "https://supertokens.io/docs/go/",
    "https://supertokens.io/docs/fastapi/",
    "https://supertokens.io/docs/auth0/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://supertokens.io/sitemap.xml"],
  exclusionPatterns: [],
  ignoreCanonicalTo: true,
  discoveryPatterns: ["https://supertokens.io/**"],
  schedule: "at 15:40 on Friday",
  actions: [
    {
      indexName: "supertokens",
      pathsToMatch: ["https://supertokens.io/docs/community/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".hash-link";
        $(toRemove).remove();

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
            tags: {
              defaultValue: ["community"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "supertokens",
      pathsToMatch: ["https://supertokens.io/docs/emailpassword/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".hash-link";
        $(toRemove).remove();

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
            tags: {
              defaultValue: ["emailpassword"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "supertokens",
      pathsToMatch: ["https://supertokens.io/docs/thirdparty/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".hash-link";
        $(toRemove).remove();

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
            tags: {
              defaultValue: ["thirdparty"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "supertokens",
      pathsToMatch: ["https://supertokens.io/docs/thirdpartyemailpassword/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".hash-link";
        $(toRemove).remove();

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
            tags: {
              defaultValue: ["thirdpartyemailpassword"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "supertokens",
      pathsToMatch: ["https://supertokens.io/docs/session/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".hash-link";
        $(toRemove).remove();

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
            tags: {
              defaultValue: ["session"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "supertokens",
      pathsToMatch: ["https://supertokens.io/docs/nodejs/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".hash-link";
        $(toRemove).remove();

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
            tags: {
              defaultValue: ["nodejs"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "supertokens",
      pathsToMatch: ["https://supertokens.io/docs/ios/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".hash-link";
        $(toRemove).remove();

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
            tags: {
              defaultValue: ["ios"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "supertokens",
      pathsToMatch: ["https://supertokens.io/docs/android/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".hash-link";
        $(toRemove).remove();

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
            tags: {
              defaultValue: ["android"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "supertokens",
      pathsToMatch: ["https://supertokens.io/docs/website/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".hash-link";
        $(toRemove).remove();

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
            tags: {
              defaultValue: ["website"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "supertokens",
      pathsToMatch: ["https://supertokens.io/docs/laravel/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".hash-link";
        $(toRemove).remove();

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
            tags: {
              defaultValue: ["laravel"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "supertokens",
      pathsToMatch: ["https://supertokens.io/docs/react-native/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".hash-link";
        $(toRemove).remove();

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
            tags: {
              defaultValue: ["react-native"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "supertokens",
      pathsToMatch: ["https://supertokens.io/docs/auth-react/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".hash-link";
        $(toRemove).remove();

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
            tags: {
              defaultValue: ["auth-react"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "supertokens",
      pathsToMatch: ["https://supertokens.io/docs/javalin/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".hash-link";
        $(toRemove).remove();

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
            tags: {
              defaultValue: ["javalin"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "supertokens",
      pathsToMatch: ["https://supertokens.io/docs/flask/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".hash-link";
        $(toRemove).remove();

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
            tags: {
              defaultValue: ["flask"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "supertokens",
      pathsToMatch: ["https://supertokens.io/docs/go/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".hash-link";
        $(toRemove).remove();

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
            tags: {
              defaultValue: ["go"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "supertokens",
      pathsToMatch: ["https://supertokens.io/docs/fastapi/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".hash-link";
        $(toRemove).remove();

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
            tags: {
              defaultValue: ["fastapi"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "supertokens",
      pathsToMatch: ["https://supertokens.io/docs/auth0/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".hash-link";
        $(toRemove).remove();

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
            tags: {
              defaultValue: ["auth0"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "supertokens",
      pathsToMatch: [
        "https://supertokens.io/**",
        "!https://supertokens.io/docs/community/**",
        "!https://supertokens.io/docs/emailpassword/**",
        "!https://supertokens.io/docs/thirdparty/**",
        "!https://supertokens.io/docs/thirdpartyemailpassword/**",
        "!https://supertokens.io/docs/session/**",
        "!https://supertokens.io/docs/nodejs/**",
        "!https://supertokens.io/docs/ios/**",
        "!https://supertokens.io/docs/android/**",
        "!https://supertokens.io/docs/website/**",
        "!https://supertokens.io/docs/laravel/**",
        "!https://supertokens.io/docs/react-native/**",
        "!https://supertokens.io/docs/auth-react/**",
        "!https://supertokens.io/docs/javalin/**",
        "!https://supertokens.io/docs/flask/**",
        "!https://supertokens.io/docs/go/**",
        "!https://supertokens.io/docs/fastapi/**",
        "!https://supertokens.io/docs/auth0/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".hash-link";
        $(toRemove).remove();

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
    supertokens: {
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
        "desc(weight.page_rank)",
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