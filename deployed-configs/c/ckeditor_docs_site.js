new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://ckeditor.com/docs/ckeditor5/latest/api/",
    "https://ckeditor.com/",
    "https://ckeditor.com/docs/ckeditor5/latest/framework/",
    "https://ckeditor.com/docs/ckeditor5/latest/builds/",
    "https://ckeditor.com/docs/ckeditor5/latest/features/",
    "https://ckeditor.com/docs/ckeditor5/latest/examples/",
    "https://ckeditor.com/docs/ckeditor4/latest/api/",
    "https://ckeditor.com/docs/ckeditor4/latest/guide/",
    "https://ckeditor.com/docs/ckeditor4/latest/features/",
    "https://ckeditor.com/docs/ckeditor4/latest/examples/",
    "https://ckeditor.com/docs/letters/latest/guides/",
    "https://ckeditor.com/docs/cs/latest/guides/",
    "https://ckeditor.com/docs/trial/latest/guides/",
    "https://ckeditor.com/docs/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://ckeditor.com/docs/sitemap.xml"],
  exclusionPatterns: [
    "https://ckeditor.com/docs/ckfinder/**",
    "https://ckeditor.com/docs/ckeditor5/[0-9]/**",
    "https://ckeditor.com/docs/ckeditor4/[0-9]/**",
    "https://ckeditor.com/docs/letters/[0-9]/**",
    "https://ckeditor.com/docs/cs/[0-9]/**",
    "https://ckeditor.com/docs/ckeditor5/latest/api/index.html",
    "https://ckeditor.com/docs/ckeditor5/latest/framework/index.html",
    "https://ckeditor.com/docs/ckeditor5/latest/builds/index.html",
    "https://ckeditor.com/docs/ckeditor5/latest/features/index.html",
    "https://ckeditor.com/docs/ckeditor5/latest/examples/index.html",
    "https://ckeditor.com/docs/ckeditor4/latest/api/index.html",
    "https://ckeditor.com/docs/ckeditor4/latest/guide/index.html",
    "https://ckeditor.com/docs/ckeditor4/latest/features/index.html",
    "https://ckeditor.com/docs/ckeditor4/latest/examples/index.html",
    "https://ckeditor.com/docs/letters/latest/guides/index.html",
    "https://ckeditor.com/docs/cs/latest/guides/index.html",
    "https://ckeditor.com/docs/trial/latest/guides/index.html",
    "https://ckeditor.com/docs/index.html",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://ckeditor.com/**"],
  schedule: "at 11:20 on Tuesday",
  actions: [
    {
      indexName: "ckeditor_docs_site",
      pathsToMatch: ["https://ckeditor.com/docs/ckeditor5/latest/api/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".collapsing-list__type, .badges, .secondary-navigation, .exclude";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".main__content h1",
            content:
              ".main__content .main-description, .main__content .collapsing-list__description, .main__content .docsearch-txt",
            lvl0: {
              selectors: "",
              defaultValue: "API",
            },
            lvl2: ".main__content h2",
            lvl3: ".main__content h3",
            tags: {
              defaultValue: ["ckeditor5", "api"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "ckeditor_docs_site",
      pathsToMatch: ["https://ckeditor.com/docs/ckeditor5/latest/framework/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".collapsing-list__type, .badges, .secondary-navigation, .exclude";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".main__content h1",
            content:
              ".main__content p, .main__content li, .main__content .docsearch-txt",
            lvl0: {
              selectors: ".top__menu__item--active",
              defaultValue: "CKEditor",
            },
            lvl2: ".main__content h2",
            lvl3: ".main__content h3",
            lvl4: ".main__content h4",
            lvl5: ".main__content h5",
            tags: {
              defaultValue: ["ckeditor5", "framework"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "ckeditor_docs_site",
      pathsToMatch: ["https://ckeditor.com/docs/ckeditor5/latest/builds/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".collapsing-list__type, .badges, .secondary-navigation, .exclude";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".main__content h1",
            content:
              ".main__content p, .main__content li, .main__content .docsearch-txt",
            lvl0: {
              selectors: ".top__menu__item--active",
              defaultValue: "CKEditor",
            },
            lvl2: ".main__content h2",
            lvl3: ".main__content h3",
            lvl4: ".main__content h4",
            lvl5: ".main__content h5",
            tags: {
              defaultValue: ["ckeditor5", "builds"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "ckeditor_docs_site",
      pathsToMatch: ["https://ckeditor.com/docs/ckeditor5/latest/features/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".collapsing-list__type, .badges, .secondary-navigation, .exclude";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".main__content h1",
            content:
              ".main__content p, .main__content li, .main__content .docsearch-txt",
            lvl0: {
              selectors: ".top__menu__item--active",
              defaultValue: "CKEditor",
            },
            lvl2: ".main__content h2",
            lvl3: ".main__content h3",
            lvl4: ".main__content h4",
            lvl5: ".main__content h5",
            tags: {
              defaultValue: ["ckeditor5", "features"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "ckeditor_docs_site",
      pathsToMatch: ["https://ckeditor.com/docs/ckeditor5/latest/examples/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".collapsing-list__type, .badges, .secondary-navigation, .exclude";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".main__content h1",
            content:
              ".main__content p, .main__content li, .main__content .docsearch-txt",
            lvl0: {
              selectors: ".top__menu__item--active",
              defaultValue: "CKEditor",
            },
            lvl2: ".main__content h2",
            lvl3: ".main__content h3",
            lvl4: ".main__content h4",
            lvl5: ".main__content h5",
            tags: {
              defaultValue: ["ckeditor5", "examples"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "ckeditor_docs_site",
      pathsToMatch: ["https://ckeditor.com/docs/ckeditor4/latest/api/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".collapsing-list__type, .badges, .secondary-navigation, .exclude";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".main__content h1",
            content:
              ".main__content .main-description, .main__content .collapsing-list__description, .main__content .docsearch-txt",
            lvl0: {
              selectors: "",
              defaultValue: "API",
            },
            lvl2: ".main__content h2",
            lvl3: ".main__content h3",
            tags: {
              defaultValue: ["ckeditor4", "api"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "ckeditor_docs_site",
      pathsToMatch: ["https://ckeditor.com/docs/ckeditor4/latest/guide/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".collapsing-list__type, .badges, .secondary-navigation, .exclude";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".main__content h1",
            content:
              ".main__content p, .main__content li, .main__content .docsearch-txt",
            lvl0: {
              selectors: ".top__menu__item--active",
              defaultValue: "CKEditor",
            },
            lvl2: ".main__content h2",
            lvl3: ".main__content h3",
            lvl4: ".main__content h4",
            lvl5: ".main__content h5",
            tags: {
              defaultValue: ["ckeditor4", "guide"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "ckeditor_docs_site",
      pathsToMatch: ["https://ckeditor.com/docs/ckeditor4/latest/features/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".collapsing-list__type, .badges, .secondary-navigation, .exclude";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".main__content h1",
            content:
              ".main__content p, .main__content li, .main__content .docsearch-txt",
            lvl0: {
              selectors: ".top__menu__item--active",
              defaultValue: "CKEditor",
            },
            lvl2: ".main__content h2",
            lvl3: ".main__content h3",
            lvl4: ".main__content h4",
            lvl5: ".main__content h5",
            tags: {
              defaultValue: ["ckeditor4", "features"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "ckeditor_docs_site",
      pathsToMatch: ["https://ckeditor.com/docs/ckeditor4/latest/examples/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".collapsing-list__type, .badges, .secondary-navigation, .exclude";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".main__content h1",
            content:
              ".main__content p, .main__content li, .main__content .docsearch-txt",
            lvl0: {
              selectors: ".top__menu__item--active",
              defaultValue: "CKEditor",
            },
            lvl2: ".main__content h2",
            lvl3: ".main__content h3",
            lvl4: ".main__content h4",
            lvl5: ".main__content h5",
            tags: {
              defaultValue: ["ckeditor4", "examples"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "ckeditor_docs_site",
      pathsToMatch: ["https://ckeditor.com/docs/letters/latest/guides/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".collapsing-list__type, .badges, .secondary-navigation, .exclude";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".main__content h1",
            content:
              ".main__content p, .main__content li, .main__content .docsearch-txt",
            lvl0: {
              selectors: ".top__menu__item--active",
              defaultValue: "CKEditor",
            },
            lvl2: ".main__content h2",
            lvl3: ".main__content h3",
            lvl4: ".main__content h4",
            lvl5: ".main__content h5",
            tags: {
              defaultValue: ["letters", "guides"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "ckeditor_docs_site",
      pathsToMatch: ["https://ckeditor.com/docs/cs/latest/guides/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".collapsing-list__type, .badges, .secondary-navigation, .exclude";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".main__content h1",
            content:
              ".main__content p, .main__content li, .main__content .docsearch-txt",
            lvl0: {
              selectors: ".top__menu__item--active",
              defaultValue: "CKEditor",
            },
            lvl2: ".main__content h2",
            lvl3: ".main__content h3",
            lvl4: ".main__content h4",
            lvl5: ".main__content h5",
            tags: {
              defaultValue: ["cs", "guides"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "ckeditor_docs_site",
      pathsToMatch: ["https://ckeditor.com/docs/trial/latest/guides/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".collapsing-list__type, .badges, .secondary-navigation, .exclude";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".main__content h1",
            content:
              ".main__content p, .main__content li, .main__content .docsearch-txt",
            lvl0: {
              selectors: ".top__menu__item--active",
              defaultValue: "CKEditor",
            },
            lvl2: ".main__content h2",
            lvl3: ".main__content h3",
            lvl4: ".main__content h4",
            lvl5: ".main__content h5",
            tags: {
              defaultValue: ["trial", "guides"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "ckeditor_docs_site",
      pathsToMatch: ["https://ckeditor.com/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".collapsing-list__type, .badges, .secondary-navigation, .exclude";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".main__content h1",
            content:
              ".main__content p, .main__content li, .main__content .docsearch-txt",
            lvl0: {
              selectors: ".top__menu__item--active",
              defaultValue: "CKEditor",
            },
            lvl2: ".main__content h2",
            lvl3: ".main__content h3",
            lvl4: ".main__content h4",
            lvl5: ".main__content h5",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    ckeditor_docs_site: {
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
        "desc(custom_ranking)",
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
    },
  },
});