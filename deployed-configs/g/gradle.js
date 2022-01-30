new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://docs.gradle.org/current/userguide/plugin_reference.html",
    "https://docs.gradle.org/",
    "https://docs.gradle.org/current/dsl/",
    "https://docs.gradle.org/current/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://docs.gradle.org/current/sitemap.xml"],
  exclusionPatterns: ["**/javadoc/**", "**/release-notes.html"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://docs.gradle.org/**"],
  schedule: "at 06:40 on Wednesday",
  actions: [
    {
      indexName: "gradle",
      pathsToMatch: [
        "https://docs.gradle.org/current/userguide/plugin_reference.html**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".docs-navigation, .site-footer, .toc, .chapter-meta, .admonitionblock";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".chapter h2",
            content: ".chapter p, .chapter .dlist dt ~ dd p",
            lvl0: {
              selectors: ".chapter h1",
            },
            lvl2: ".chapter .dlist dt",
            version: {
              defaultValue: ["current"],
            },
            tags: {
              defaultValue: ["plugin_reference"],
            },
            pageRank: "4",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "gradle",
      pathsToMatch: ["https://docs.gradle.org/current/dsl/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".docs-navigation, .site-footer, .toc, .chapter-meta, .admonitionblock";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".chapter h1, .book h1",
            content: ".chapter p, .book p",
            lvl0: {
              selectors: ".site-header__doc-type",
            },
            lvl2: ".chapter h2, .book h2",
            lvl3: ".chapter h3, .book h3",
            lvl4: ".chapter h4, .book h4",
            lvl5: ".chapter .title, .book .title",
            version: {
              defaultValue: ["current"],
            },
            tags: {
              defaultValue: ["dsl"],
            },
            pageRank: "1",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "gradle",
      pathsToMatch: ["https://docs.gradle.org/current/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".docs-navigation, .site-footer, .toc, .chapter-meta, .admonitionblock";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".chapter h1",
            content: ".chapter p, .chapter .dlist dt, .chapter .title",
            lvl0: {
              selectors: ".site-header__doc-type",
            },
            lvl2: ".chapter h2",
            lvl3: ".chapter h3",
            lvl4: ".chapter h4",
            lvl5: ".chapter h5",
            version: {
              defaultValue: ["current"],
            },
            tags: {
              defaultValue: ["userguide"],
            },
            pageRank: "6",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    gradle: {
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