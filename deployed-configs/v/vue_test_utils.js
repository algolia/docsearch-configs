new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://vue-test-utils.vuejs.org/api/",
    "https://vue-test-utils.vuejs.org/",
    "https://vue-test-utils.vuejs.org/guides/",
    "https://next.vue-test-utils.vuejs.org/api/",
    "https://next.vue-test-utils.vuejs.org/",
    "https://next.vue-test-utils.vuejs.org/guide/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: ["!**/"],
  ignoreCanonicalTo: false,
  discoveryPatterns: [
    "https://vue-test-utils.vuejs.org/**",
    "https://next.vue-test-utils.vuejs.org/**",
  ],
  schedule: "at 05:40 on Saturday",
  actions: [
    {
      indexName: "vue_test_utils",
      pathsToMatch: ["https://vue-test-utils.vuejs.org/api/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content__default h3",
            content: ".content__default p, .content__default li",
            lvl0: {
              selectors: ".content__default h2",
            },
            lvl2: ".content__default h4",
            lvl3: ".content__default h5",
            lvl4: ".content__default h5",
            tags: {
              defaultValue: ["current", "api"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "vue_test_utils",
      pathsToMatch: ["https://vue-test-utils.vuejs.org/guides/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content__default h3",
            content: ".content__default p, .content__default li",
            lvl0: {
              selectors: ".content__default h2",
            },
            lvl2: ".content__default h4",
            lvl3: ".content__default h5",
            lvl4: ".content__default h5",
            tags: {
              defaultValue: ["current", "guide"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "vue_test_utils",
      pathsToMatch: ["https://vue-test-utils.vuejs.org/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content__default h3",
            content: ".content__default p, .content__default li",
            lvl0: {
              selectors: ".content__default h2",
            },
            lvl2: ".content__default h4",
            lvl3: ".content__default h5",
            lvl4: ".content__default h5",
            tags: {
              defaultValue: ["current"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "vue_test_utils",
      pathsToMatch: ["https://next.vue-test-utils.vuejs.org/api/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h2",
            content: ".content p, .content li",
            lvl0: {
              selectors: ".content h1",
            },
            lvl2: ".content h3",
            lvl3: ".content h4",
            lvl4: ".content h5",
            tags: {
              defaultValue: ["next", "api"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "vue_test_utils",
      pathsToMatch: ["https://next.vue-test-utils.vuejs.org/guide/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h2",
            content: ".content p, .content li",
            lvl0: {
              selectors: ".content h1",
            },
            lvl2: ".content h3",
            lvl3: ".content h4",
            lvl4: ".content h5",
            tags: {
              defaultValue: ["next", "guide"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "vue_test_utils",
      pathsToMatch: ["https://next.vue-test-utils.vuejs.org/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content h2",
            content: ".content p, .content li",
            lvl0: {
              selectors: ".content h1",
            },
            lvl2: ".content h3",
            lvl3: ".content h4",
            lvl4: ".content h5",
            tags: {
              defaultValue: ["next"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    vue_test_utils: {
      attributesForFaceting: ["type", "lang", "tags"],
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