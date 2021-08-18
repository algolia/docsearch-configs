new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: ["https://segment.com/docs/", "https://segment.com/"],
  renderJavaScript: false,
  sitemaps: ["https://segment.com/sitemap.xml"],
  exclusionPatterns: ["**/docs/legal/**"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://segment.com/**"],
  schedule: "at 15:00 on Friday",
  actions: [
    {
      indexName: "segment",
      pathsToMatch: ["https://segment.com/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["This is currently in beta"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        }
        return helpers.docsearch({
          recordProps: {
            lvl1: "article > .breadcrumbs > li:nth-child(5) > a",
            content:
              ".page__body p, .page__body li, .page__body tr:not(:first-child) td:last-child",
            lvl0: {
              selectors: "article > .breadcrumbs > li:nth-child(3) > a",
              defaultValue: "Guides",
            },
            lvl2: ".page__body h1",
            lvl3: ".page__body h2",
            lvl4: ".page__body h3",
            lvl5:
              ".page__body h4, .page__body tr:not(:first-child) td:first-child",
            lvl6: ".page__body h5",
          },
          indexHeadings: { from: 3, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    segment: {
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
      separatorsToIndex: "_>@",
    },
  },
});