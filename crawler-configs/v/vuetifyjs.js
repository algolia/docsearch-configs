new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://vuetifyjs.com/en/api/",
    "https://vuetifyjs.com/",
    "https://vuetifyjs.com/ja/api/",
    "https://vuetifyjs.com/zh-Hans/api/",
    "https://vuetifyjs.com/en/",
    "https://vuetifyjs.com/ja/",
    "https://vuetifyjs.com/zh-Hans/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://vuetifyjs.com/sitemap.xml"],
  exclusionPatterns: ["**/store/**", "**/examples/**"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://vuetifyjs.com/**"],
  schedule: "at 05:40 on Saturday",
  actions: [
    {
      indexName: "vuetifyjs",
      pathsToMatch: ["https://vuetifyjs.com/en/api/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "section#links, section#api";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".markdown-body h1",
            content: ".api-table td:not(:first-child)",
            lvl0: {
              selectors: "",
              defaultValue: "API",
            },
            lvl2: ".markdown-body h2",
            lvl3: ".api-table .name-item",
            lang: {
              defaultValue: ["en"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "vuetifyjs",
      pathsToMatch: ["https://vuetifyjs.com/ja/api/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "section#links, section#api";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".markdown-body h1",
            content: ".api-table td:not(:first-child)",
            lvl0: {
              selectors: "",
              defaultValue: "API",
            },
            lvl2: ".markdown-body h2",
            lvl3: ".api-table .name-item",
            lang: {
              defaultValue: ["ja"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "vuetifyjs",
      pathsToMatch: ["https://vuetifyjs.com/zh-Hans/api/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "section#links, section#api";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".markdown-body h1",
            content: ".api-table td:not(:first-child)",
            lvl0: {
              selectors: "",
              defaultValue: "API",
            },
            lvl2: ".markdown-body h2",
            lvl3: ".api-table .name-item",
            lang: {
              defaultValue: ["zh-Hans"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "vuetifyjs",
      pathsToMatch: ["https://vuetifyjs.com/en/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "section#links, section#api";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".markdown-body h1",
            content: ".markdown-body p, .markdown-body li",
            lvl0: {
              selectors:
                "#default-drawer .v-list > .v-list-group--active > .v-list-group__header",
              defaultValue: "Documentation",
            },
            lvl2: ".markdown-body h2",
            lvl3: ".markdown-body h3",
            lvl4: ".markdown-body h4",
            lang: {
              defaultValue: ["en"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "vuetifyjs",
      pathsToMatch: ["https://vuetifyjs.com/ja/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "section#links, section#api";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".markdown-body h1",
            content: ".markdown-body p, .markdown-body li",
            lvl0: {
              selectors:
                "#default-drawer .v-list > .v-list-group--active > .v-list-group__header",
              defaultValue: "Documentation",
            },
            lvl2: ".markdown-body h2",
            lvl3: ".markdown-body h3",
            lvl4: ".markdown-body h4",
            lang: {
              defaultValue: ["ja"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "vuetifyjs",
      pathsToMatch: ["https://vuetifyjs.com/zh-Hans/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "section#links, section#api";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".markdown-body h1",
            content: ".markdown-body p, .markdown-body li",
            lvl0: {
              selectors:
                "#default-drawer .v-list > .v-list-group--active > .v-list-group__header",
              defaultValue: "Documentation",
            },
            lvl2: ".markdown-body h2",
            lvl3: ".markdown-body h3",
            lvl4: ".markdown-body h4",
            lang: {
              defaultValue: ["zh-Hans"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    vuetifyjs: {
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
      separatorsToIndex: "-",
    },
  },
});