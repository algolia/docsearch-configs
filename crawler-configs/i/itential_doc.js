new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://docs.itential.io/[d/.]*/admin/",
    "https://docs.itential.io/",
    "https://docs.itential.io/[d/.]*/api/",
    "https://docs.itential.io/[d/.]*/developer/",
    "https://docs.itential.io/faq/",
    "https://docs.itential.io/[d/.]*/product/",
    "https://docs.itential.io/[d/.]*/user/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://docs.itential.io/sitemap.xml"],
  exclusionPatterns: [
    "**/**Open%20Source%20Notices**",
    "**/**Open%20Source%20Notices**/**",
    "**/schema/**",
    "**/schema/**",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://docs.itential.io/**"],
  schedule: "at 15:40 on Wednesday",
  actions: [
    {
      indexName: "itential_doc",
      pathsToMatch: ["https://docs.itential.io/[\\d\\.]*/admin/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".dropdown-container .dropdown-menu.left";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".markdown-doc .table-of-contents > h3",
            content: ".markdown-doc .content-body p",
            lvl0: {
              selectors: ".markdown-doc .breadcrumb > li:nth-child(2) > a",
            },
            lvl2: ".markdown-doc h1.content-title",
            lvl3: ".markdown-doc .content-body h2",
            lvl4: ".markdown-doc .content-body h3",
            version: ".release-select .dropdown-container",
            pageRank: "3",
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "itential_doc",
      pathsToMatch: ["https://docs.itential.io/[\\d\\.]*/api/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".dropdown-container .dropdown-menu.left";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".api-method-doc .table-of-contents > h3",
            content:
              ".api-method-doc .content-body #summary + p, .api-method-doc .content-body #description + p",
            lvl0: {
              selectors: ".api-method-doc .breadcrumb > li:nth-child(2) > a",
            },
            lvl2: ".api-method-doc h1.content-title",
            version: ".release-select .dropdown-container",
            pageRank: "3",
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "itential_doc",
      pathsToMatch: ["https://docs.itential.io/[\\d\\.]*/developer/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".dropdown-container .dropdown-menu.left";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".markdown-doc .table-of-contents > h3",
            content: ".markdown-doc .content-body p",
            lvl0: {
              selectors: ".markdown-doc .breadcrumb > li:nth-child(2) > a",
            },
            lvl2: ".markdown-doc h1.content-title",
            lvl3: ".markdown-doc .content-body h2",
            lvl4: ".markdown-doc .content-body h3",
            version: ".release-select .dropdown-container",
            pageRank: "3",
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "itential_doc",
      pathsToMatch: ["https://docs.itential.io/faq/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".dropdown-container .dropdown-menu.left";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content: ".markdown-doc .content-body p",
            lvl0: {
              selectors: ".markdown-doc h1.content-title",
            },
            lvl2: ".markdown-doc .content-body h2",
            lvl3: ".markdown-doc .content-body h3",
            version: ".release-select .dropdown-container",
            pageRank: "4",
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "itential_doc",
      pathsToMatch: ["https://docs.itential.io/[\\d\\.]*/product/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".dropdown-container .dropdown-menu.left";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".markdown-doc .table-of-contents > h3",
            content: ".markdown-doc .content-body p",
            lvl0: {
              selectors: ".markdown-doc .breadcrumb > li:nth-child(2) > a",
            },
            lvl2: ".markdown-doc h1.content-title",
            lvl3: ".markdown-doc .content-body > h2",
            version: ".release-select .dropdown-container",
            pageRank: "3",
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "itential_doc",
      pathsToMatch: ["https://docs.itential.io/[\\d\\.]*/user/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".dropdown-container .dropdown-menu.left";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".markdown-doc .table-of-contents > h3",
            content: ".markdown-doc .content-body p",
            lvl0: {
              selectors: ".markdown-doc .breadcrumb > li:nth-child(2) > a",
            },
            lvl2: ".markdown-doc h1.content-title",
            lvl3: ".markdown-doc .content-body h2",
            lvl4: ".markdown-doc .content-body h3",
            version: ".release-select .dropdown-container",
            pageRank: "3",
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    itential_doc: {
      attributesForFaceting: ["type", "lang", "version"],
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