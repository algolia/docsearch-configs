new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://www.jhipster.tech/d%7B4%7D//d%7B2%7D//d%7B2%7D/",
    "https://www.jhipster.tech/",
    "https://www.jhipster.tech/tips/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://www.jhipster.tech/sitemap.xml"],
  exclusionPatterns: ["**/documentation-archive/**", "**/**tech/cn/**"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://www.jhipster.tech/**"],
  schedule: "at 20:10 on Wednesday",
  actions: [
    {
      indexName: "jhipster",
      pathsToMatch: ["https://www.jhipster.tech/\\d{4}/\\d{2}/\\d{2}/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".page-content-wrapper h1",
            content: ".page-content-wrapper p, .page-content-wrapper li",
            lvl0: {
              selectors: "",
              defaultValue: "Release",
            },
            lvl2: ".page-content-wrapper h2",
            lvl3: ".page-content-wrapper h3",
            lvl4: ".page-content-wrapper h4",
            lvl5: ".page-content-wrapper h5",
            lvl6: ".page-content-wrapper h6",
            tags: {
              defaultValue: ["release"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "jhipster",
      pathsToMatch: ["https://www.jhipster.tech/tips/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".page-content-wrapper h1",
            content: ".page-content-wrapper p, .page-content-wrapper li",
            lvl0: {
              selectors: "",
              defaultValue: "Tips",
            },
            lvl2: ".page-content-wrapper h2",
            lvl3: ".page-content-wrapper h3",
            lvl4: ".page-content-wrapper h4",
            lvl5: ".page-content-wrapper h5",
            lvl6: ".page-content-wrapper h6",
            tags: {
              defaultValue: ["tips"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "jhipster",
      pathsToMatch: ["https://www.jhipster.tech/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".page-content-wrapper h1",
            content: ".page-content-wrapper p, .page-content-wrapper li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".page-content-wrapper h2",
            lvl3: ".page-content-wrapper h3",
            lvl4: ".page-content-wrapper h4",
            lvl5: ".page-content-wrapper h5",
            lvl6: ".page-content-wrapper h6",
            tags: {
              defaultValue: ["documentation"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    jhipster: {
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