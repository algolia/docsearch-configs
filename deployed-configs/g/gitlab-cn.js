new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://docs.gitlab.cn/jh/",
    "https://docs.gitlab.cn/",
    "https://docs.gitlab.cn/omnibus/",
    "https://docs.gitlab.cn/charts/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://docs.gitlab.cn/sitemap.xml"],
  exclusionPatterns: ["**/index.html", "**/**README.html", "**/real_name.html"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://docs.gitlab.cn/**"],
  schedule: "at 06:10 on Wednesday",
  actions: [
    {
      indexName: "gitlab-cn",
      pathsToMatch: ["https://docs.gitlab.cn/jh/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = [
          "This document was moved to",
          "This section is now merged into",
          "404 Not Found",
        ];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        }
        return helpers.docsearch({
          recordProps: {
            lvl1: ".article-content h2",
            content: ".article-content p, .article-content li",
            lvl0: {
              selectors: ".article-content h1",
            },
            lvl2: ".article-content h3",
            lvl3: ".article-content h4",
            lvl4: ".article-content h5",
            lvl5: ".article-content h6",
            product: {
              defaultValue: "GitLab",
            },
            tags: {
              defaultValue: ["gitlab"],
            },
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "gitlab-cn",
      pathsToMatch: ["https://docs.gitlab.cn/omnibus/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = [
          "This document was moved to",
          "This section is now merged into",
          "404 Not Found",
        ];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        }
        return helpers.docsearch({
          recordProps: {
            lvl1: ".article-content h2",
            content: ".article-content p, .article-content li",
            lvl0: {
              selectors: ".article-content h1",
            },
            lvl2: ".article-content h3",
            lvl3: ".article-content h4",
            lvl4: ".article-content h5",
            lvl5: ".article-content h6",
            product: {
              defaultValue: "Omnibus GitLab",
            },
            tags: {
              defaultValue: ["omnibus"],
            },
          },
          indexHeadings: false,
        });
      },
    },
    {
      indexName: "gitlab-cn",
      pathsToMatch: ["https://docs.gitlab.cn/charts/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = [
          "This document was moved to",
          "This section is now merged into",
          "404 Not Found",
        ];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        }
        return helpers.docsearch({
          recordProps: {
            lvl1: ".article-content h2",
            content: ".article-content p, .article-content li",
            lvl0: {
              selectors: ".article-content h1",
            },
            lvl2: ".article-content h3",
            lvl3: ".article-content h4",
            lvl4: ".article-content h5",
            lvl5: ".article-content h6",
            product: {
              defaultValue: "GitLab Helm Charts",
            },
            tags: {
              defaultValue: ["charts"],
            },
          },
          indexHeadings: false,
        });
      },
    },
  ],
  initialIndexSettings: {
    "gitlab-cn": {
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