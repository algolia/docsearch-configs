new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://jenkins-x.io/es/",
    "https://jenkins-x.io/",
    "https://jenkins-x.io/zh/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://jenkins-x.io/sitemap.xml"],
  exclusionPatterns: ["**/docs/", "**/commands/", "**/about/"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://jenkins-x.io/**"],
  schedule: "at 20:00 on Wednesday",
  actions: [
    {
      indexName: "jenkins_x",
      pathsToMatch: ["https://jenkins-x.io/es/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "[class^='feedback--'], .section-index";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".td-content h2, .documentation-copy h2",
            content:
              ".td-content p, .td-content li, .documentation-copy p, .documentation-copy li",
            lvl0: {
              selectors: ".td-content h1, .documentation-copy h1",
            },
            lvl2: ".td-content h3, .documentation-copy h3",
            lvl3: ".td-content h4, .documentation-copy h4",
            lvl4: ".td-content h5, .documentation-copy h5",
            lvl5: ".td-content h6, .documentation-copy h6",
            lang: {
              defaultValue: ["es"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "jenkins_x",
      pathsToMatch: ["https://jenkins-x.io/zh/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "[class^='feedback--'], .section-index";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".td-content h2, .documentation-copy h2",
            content:
              ".td-content p, .td-content li, .documentation-copy p, .documentation-copy li",
            lvl0: {
              selectors: ".td-content h1, .documentation-copy h1",
            },
            lvl2: ".td-content h3, .documentation-copy h3",
            lvl3: ".td-content h4, .documentation-copy h4",
            lvl4: ".td-content h5, .documentation-copy h5",
            lvl5: ".td-content h6, .documentation-copy h6",
            lang: {
              defaultValue: ["zh"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "jenkins_x",
      pathsToMatch: ["https://jenkins-x.io/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "[class^='feedback--'], .section-index";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".td-content h2, .documentation-copy h2",
            content:
              ".td-content p, .td-content li, .documentation-copy p, .documentation-copy li",
            lvl0: {
              selectors: ".td-content h1, .documentation-copy h1",
            },
            lvl2: ".td-content h3, .documentation-copy h3",
            lvl3: ".td-content h4, .documentation-copy h4",
            lvl4: ".td-content h5, .documentation-copy h5",
            lvl5: ".td-content h6, .documentation-copy h6",
            lang: {
              defaultValue: ["en"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    jenkins_x: {
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