new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://v2.helm.sh/docs/",
    "https://v2.helm.sh/",
    "https://helm.sh/blog/",
    "https://helm.sh/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://v2.helm.sh/sitemap.xml"],
  exclusionPatterns: ["**/developing_charts/**"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://v2.helm.sh/**", "https://helm.sh/**"],
  schedule: "at 10:00 on Wednesday",
  actions: [
    {
      indexName: "helm_v2",
      pathsToMatch: ["https://v2.helm.sh/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".content-wrap > h3:first-child";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".content-wrap h2",
            content: ".content-wrap p, .content-wrap li",
            lvl0: {
              selectors: ".content-wrap h1",
              defaultValue: "Documentation",
            },
            lvl2: ".content-wrap h3",
            lvl3: ".content-wrap h4",
            lvl4: ".content-wrap h5",
            tags: {
              defaultValue: ["docs"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "helm_v2",
      pathsToMatch: ["https://helm.sh/blog/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".content-wrap > h3:first-child";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".content-wrap h1",
            content: ".content-wrap p, .content-wrap li",
            lvl0: {
              selectors: "",
              defaultValue: "Blog",
            },
            lvl2: ".content-wrap h2",
            lvl3: ".content-wrap h3",
            lvl4: ".content-wrap h4",
            lvl5: ".content-wrap h5",
            tags: {
              defaultValue: ["blog"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    helm_v2: {
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