new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference",
    "https://developer.mozilla.org/",
    "https://developer.mozilla.org/en-US/docs/Learn/JavaScript",
    "https://developer.mozilla.org/en-US/docs/Web/CSS",
    "https://developer.mozilla.org/en-US/docs/Learn/CSS",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [
    "**/**users/signin**",
    "**/**users/signin**/**",
    "**/**revert/**",
    "**/**redirect**",
    "**/**redirect**/**",
    "**/**compare?**",
    "**/**compare?**/**",
    "**/**$history**",
    "**/**$history**/**",
    "**/**edit",
    "**/**locales",
    "**/profiles/**",
    "**/search/**",
    "**/**search?**",
    "**/**search?**/**",
    "**/tag/**",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://developer.mozilla.org/**"],
  schedule: "at 10:30 on Thursday",
  actions: [
    {
      indexName: "mozilla",
      pathsToMatch: [
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".section-edit";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".document-head h1",
            content: "article p",
            lvl0: {
              selectors: ".crumbs",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            documents: {
              defaultValue: "ref",
            },
            technology: {
              defaultValue: "js",
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "mozilla",
      pathsToMatch: [
        "https://developer.mozilla.org/en-US/docs/Learn/JavaScript**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".section-edit";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".document-head h1",
            content: "article p",
            lvl0: {
              selectors: ".crumbs",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            documents: {
              defaultValue: "learn",
            },
            technology: {
              defaultValue: "js",
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "mozilla",
      pathsToMatch: ["https://developer.mozilla.org/en-US/docs/Web/CSS**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".section-edit";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".document-head h1",
            content: "article p",
            lvl0: {
              selectors: ".crumbs",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            documents: {
              defaultValue: "ref",
            },
            technology: {
              defaultValue: "css",
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "mozilla",
      pathsToMatch: ["https://developer.mozilla.org/en-US/docs/Learn/CSS**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".section-edit";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".document-head h1",
            content: "article p",
            lvl0: {
              selectors: ".crumbs",
            },
            lvl2: "article h2",
            lvl3: "article h3",
            documents: {
              defaultValue: "learn",
            },
            technology: {
              defaultValue: "css",
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    mozilla: {
      attributesForFaceting: [
        "type",
        "lang",
        "tags",
        "no_variables",
        "extra_attributes",
        "hierarchy_camel.lvl1",
      ],
      attributesToRetrieve: ["hierarchy", "content", "anchor", "url"],
      attributesToHighlight: ["hierarchy", "hierarchy_camel", "content"],
      attributesToSnippet: ["content:10"],
      camelCaseAttributes: ["hierarchy", "hierarchy_radio", "content"],
      searchableAttributes: [
        "unordered(hierarchy_camel.lvl1)",
        "unordered(hierarchy.lvl1)",
        "unordered(hierarchy_camel.lvl0.crumbs.lvl0)",
        "unordered(hierarchy.lvl0.crumbs.lvl0)",
        "unordered(hierarchy_camel.lvl0.crumbs.lvl1)",
        "unordered(hierarchy.lvl0.crumbs.lvl1)",
        "unordered(hierarchy_camel.lvl0.crumbs.lvl2)",
        "unordered(hierarchy.lvl0.crumbs.lvl2)",
        "unordered(hierarchy_camel.lvl0.crumbs.lvl3)",
        "unordered(hierarchy.lvl0.crumbs.lvl3)",
        "unordered(hierarchy_camel.lvl0.crumbs.lvl4)",
        "unordered(hierarchy.lvl0.crumbs.lvl4)",
        "unordered(hierarchy_camel.lvl0.crumbs.lvl5)",
        "unordered(hierarchy.lvl0.crumbs.lvl5)",
        "unordered(hierarchy_camel.lvl0.crumbs.lvl6)",
        "unordered(hierarchy.lvl0.crumbs.lvl6)",
        "unordered(hierarchy_camel.lvl2)",
        "unordered(hierarchy.lvl2)",
        "unordered(hierarchy_camel.lvl3)",
        "unordered(hierarchy.lvl3)",
        "unordered(hierarchy_camel.lvl4)",
        "unordered(hierarchy.lvl4)",
        "unordered(content)",
      ],
      distinct: true,
      attributeForDistinct: "url_without_anchor",
      customRanking: [
        "desc(weight.pageRank)",
        "desc(weight.level)",
        "asc(weight.position)",
      ],
      ranking: [
        "words",
        "filters",
        "typo",
        "proximity",
        "attribute",
        "exact",
        "custom",
      ],
      highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
      highlightPostTag: "</span>",
      minWordSizefor1Typo: 3,
      minWordSizefor2Typos: 7,
      allowTyposOnNumericTokens: false,
      minProximity: 1,
      ignorePlurals: false,
      advancedSyntax: true,
      attributeCriteriaComputedByMinProximity: true,
      removeWordsIfNoResults: "allOptional",
      synonyms: [
        ["js", "javascript"],
        ["es6", "ECMAScript6", "ECMAScript 6"],
        ["es5", "ECMAScript5", "ECMAScript 5"],
        ["mdn", "Mozilla Developer Network"],
      ],
    },
  },
});