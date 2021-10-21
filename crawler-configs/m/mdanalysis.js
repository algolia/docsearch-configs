new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://docs.mdanalysis.org/",
    "https://userguide.mdanalysis.org/",
    "https://www.mdanalysis.org/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://www.mdanalysis.org/sitemapindex.xml"],
  exclusionPatterns: [
    "https://www.mdanalysis.org/**/**",
    "https://www.mdanalysis.org/blog**",
    "https://www.mdanalysis.org/blog**/**",
    "https://www.mdanalysis.org/mdanalysis**",
    "https://www.mdanalysis.org/mdanalysis**/**",
    "https://www.mdanalysis.org/docs**",
    "https://www.mdanalysis.org/docs**/**",
    "https://docs.mdanalysis.org/dev/**",
    "https://docs.mdanalysis.org/[0-9].[0-9]\\.[0-9]/**",
    "https://userguide.mdanalysis.org/[0-9].[0-9]\\.[0-9]/**",
    "https://userguide.mdanalysis.org/-dev/**",
    "**/_**",
    "**/_**/**",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: [
    "https://docs.mdanalysis.org/**",
    "https://userguide.mdanalysis.org/**",
    "https://www.mdanalysis.org/**",
  ],
  schedule: "at 10:00 on Thursday",
  actions: [
    {
      indexName: "mdanalysis",
      pathsToMatch: ["https://docs.mdanalysis.org**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "[itemprop='articleBody'] > .section h2, .page h2, .post h2, .body > .section h2",
            content:
              "[itemprop='articleBody'] > .section p, .page p, .post p, .body > .section p, [itemprop='articleBody'] > .section li, .page li, .post li, .body > .section li, [itemprop='articleBody'] > .section dt, .body > .section dt",
            lvl0: {
              selectors:
                "[itemprop='articleBody'] > .section h1, .page h1, .post h1, .body > .section h1",
            },
            lvl2: "[itemprop='articleBody'] > .section h3, .page h3, .post h3, .body > .section h3",
            lvl3: "[itemprop='articleBody'] > .section h4, .page h4, .post h4, .body > .section h4",
            lvl4: "[itemprop='articleBody'] > .section h5, .page h5, .post h5, .body > .section h5",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "mdanalysis",
      pathsToMatch: ["https://userguide.mdanalysis.org**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "[itemprop='articleBody'] > .section h2, .page h2, .post h2, .body > .section h2",
            content:
              "[itemprop='articleBody'] > .section p, .page p, .post p, .body > .section p, [itemprop='articleBody'] > .section li, .page li, .post li, .body > .section li, [itemprop='articleBody'] > .section dt, .body > .section dt",
            lvl0: {
              selectors:
                "[itemprop='articleBody'] > .section h1, .page h1, .post h1, .body > .section h1",
            },
            lvl2: "[itemprop='articleBody'] > .section h3, .page h3, .post h3, .body > .section h3",
            lvl3: "[itemprop='articleBody'] > .section h4, .page h4, .post h4, .body > .section h4",
            lvl4: "[itemprop='articleBody'] > .section h5, .page h5, .post h5, .body > .section h5",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "mdanalysis",
      pathsToMatch: ["https://www.mdanalysis.org**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "[itemprop='articleBody'] > .section h2, .page h2, .post h2, .body > .section h2",
            content:
              "[itemprop='articleBody'] > .section p, .page p, .post p, .body > .section p, [itemprop='articleBody'] > .section li, .page li, .post li, .body > .section li, [itemprop='articleBody'] > .section dt, .body > .section dt",
            lvl0: {
              selectors:
                "[itemprop='articleBody'] > .section h1, .page h1, .post h1, .body > .section h1",
            },
            lvl2: "[itemprop='articleBody'] > .section h3, .page h3, .post h3, .body > .section h3",
            lvl3: "[itemprop='articleBody'] > .section h4, .page h4, .post h4, .body > .section h4",
            lvl4: "[itemprop='articleBody'] > .section h5, .page h5, .post h5, .body > .section h5",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    mdanalysis: {
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