new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://beta.erlang.org/doc/man/",
    "https://beta.erlang.org/",
    "https://beta.erlang.org/doc/reference_manual/",
    "https://beta.erlang.org/doc/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [
    "**/users_guide.html",
    "**/notes.html",
    "**/index.html",
    "**/release_notes.html",
    "**.dtd",
    "**.hrl",
    "**.erl",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://beta.erlang.org/**"],
  schedule: "at 20:40 on Tuesday",
  actions: [
    {
      indexName: "erlang",
      pathsToMatch: ["https://beta.erlang.org/doc/man/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".innertube h1",
            content: ".func .exports-tube",
            lvl0: {
              selectors: ".section-title",
            },
            lvl2: ".func h4 .title-name",
            tags: {
              defaultValue: ["man"],
            },
            pageRank: "3",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "erlang",
      pathsToMatch: ["https://beta.erlang.org/doc/reference_manual/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".innertube h1",
            content: ".innertube p",
            lvl0: {
              selectors: ".section-title",
            },
            lvl2: ".innertube h3",
            lvl3: ".innertube h4",
            tags: {
              defaultValue: ["refman"],
            },
            pageRank: "2",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "erlang",
      pathsToMatch: ["https://beta.erlang.org/doc/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".innertube h1",
            content: ".innertube p",
            lvl0: {
              selectors: ".section-title",
            },
            lvl2: ".innertube h3",
            lvl3: ".innertube h4",
            tags: {
              defaultValue: ["guide"],
            },
            pageRank: "1",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    erlang: {
      attributesForFaceting: ["type", "lang"],
      attributesToRetrieve: ["hierarchy", "content", "anchor", "url"],
      attributesToHighlight: ["hierarchy", "hierarchy_camel", "content"],
      attributesToSnippet: ["content:10"],
      camelCaseAttributes: ["hierarchy", "hierarchy_radio", "content"],
      searchableAttributes: [
        "unordered(hierarchy_radio_camel.lvl1)",
        "unordered(hierarchy_radio.lvl1)",
        "hierarchy_radio_camel.lvl2",
        "hierarchy_radio.lvl2",
        "unordered(hierarchy_radio_camel.lvl0)",
        "unordered(hierarchy_radio.lvl0)",
        "unordered(hierarchy_radio_camel.lvl3)",
        "unordered(hierarchy_radio.lvl3)",
        "unordered(hierarchy_camel.lvl0)",
        "unordered(hierarchy.lvl0)",
        "unordered(hierarchy_camel.lvl1)",
        "unordered(hierarchy.lvl1)",
        "unordered(hierarchy_camel.lvl2)",
        "unordered(hierarchy.lvl2)",
        "unordered(hierarchy_camel.lvl3)",
        "unordered(hierarchy.lvl3)",
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
      separatorsToIndex: "_",
    },
  },
});