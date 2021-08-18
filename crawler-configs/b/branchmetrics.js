new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://docs.branch.io/ko/",
    "https://docs.branch.io/",
    "https://docs.branch.io/ja/",
    "https://docs.branch.io/zh/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://docs.branch.io/sitemap.xml"],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://docs.branch.io/**"],
  schedule: "at 06:40 on Tuesday",
  actions: [
    {
      indexName: "branchmetrics",
      pathsToMatch: ["https://docs.branch.io/ko/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          "#next-steps, #next-steps ~ p, #next-steps ~ li, #disqus_thread, #__comments";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article.md-content__inner h1",
            content: "article.md-content__inner p",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "article.md-content__inner h2",
            lvl3: "article.md-content__inner h3",
            lvl4: "article.md-content__inner h4",
            lvl5: "article.md-content__inner h5",
            lang: {
              defaultValue: ["en"],
            },
            version: {
              defaultValue: ["latest"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "branchmetrics",
      pathsToMatch: ["https://docs.branch.io/ja/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          "#next-steps, #next-steps ~ p, #next-steps ~ li, #disqus_thread, #__comments";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article.md-content__inner h1",
            content: "article.md-content__inner p",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "article.md-content__inner h2",
            lvl3: "article.md-content__inner h3",
            lvl4: "article.md-content__inner h4",
            lvl5: "article.md-content__inner h5",
            lang: {
              defaultValue: ["en"],
            },
            version: {
              defaultValue: ["latest"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "branchmetrics",
      pathsToMatch: ["https://docs.branch.io/zh/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          "#next-steps, #next-steps ~ p, #next-steps ~ li, #disqus_thread, #__comments";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article.md-content__inner h1",
            content: "article.md-content__inner p",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "article.md-content__inner h2",
            lvl3: "article.md-content__inner h3",
            lvl4: "article.md-content__inner h4",
            lvl5: "article.md-content__inner h5",
            lang: {
              defaultValue: ["en"],
            },
            version: {
              defaultValue: ["latest"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "branchmetrics",
      pathsToMatch: ["https://docs.branch.io/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          "#next-steps, #next-steps ~ p, #next-steps ~ li, #disqus_thread, #__comments";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article.md-content__inner h1",
            content: "article.md-content__inner p",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: "article.md-content__inner h2",
            lvl3: "article.md-content__inner h3",
            lvl4: "article.md-content__inner h4",
            lvl5: "article.md-content__inner h5",
            lang: {
              defaultValue: ["en"],
            },
            version: {
              defaultValue: ["latest"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    branchmetrics: {
      attributesForFaceting: ["type", "lang", "version", "tags"],
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