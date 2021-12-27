new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://laravel-livewire.com/docs/master/",
    "https://laravel-livewire.com/",
    "https://laravel-livewire.com/docs/2.x/",
    "https://laravel-livewire.com/docs/1.x/",
    "https://laravel-livewire.com/screencasts/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://laravel-livewire.com/sitemap.xml"],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://laravel-livewire.com/**"],
  schedule: "at 05:10 on Thursday",
  actions: [
    {
      indexName: "livewire-framework",
      pathsToMatch: ["https://laravel-livewire.com/docs/master/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docsearch-content h2",
            content: ".docsearch-content p, .docsearch-content li",
            lvl0: {
              selectors: ".docsearch-content h1",
            },
            lvl2: ".docsearch-content h3",
            lvl3: ".docsearch-content h4",
            lvl4: ".docsearch-content h5",
            lvl5: ".docsearch-content h6",
            version: {
              defaultValue: ["master"],
            },
            pageRank: "5",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "livewire-framework",
      pathsToMatch: ["https://laravel-livewire.com/docs/2.x/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docsearch-content h2",
            content: ".docsearch-content p, .docsearch-content li",
            lvl0: {
              selectors: ".docsearch-content h1",
            },
            lvl2: ".docsearch-content h3",
            lvl3: ".docsearch-content h4",
            lvl4: ".docsearch-content h5",
            lvl5: ".docsearch-content h6",
            version: {
              defaultValue: ["2.x"],
            },
            pageRank: "5",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "livewire-framework",
      pathsToMatch: ["https://laravel-livewire.com/docs/1.x/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docsearch-content h2",
            content: ".docsearch-content p, .docsearch-content li",
            lvl0: {
              selectors: ".docsearch-content h1",
            },
            lvl2: ".docsearch-content h3",
            lvl3: ".docsearch-content h4",
            lvl4: ".docsearch-content h5",
            lvl5: ".docsearch-content h6",
            version: {
              defaultValue: ["1.x"],
            },
            pageRank: "5",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "livewire-framework",
      pathsToMatch: ["https://laravel-livewire.com/screencasts/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docsearch-content h2",
            content: ".docsearch-content p, .docsearch-content li",
            lvl0: {
              selectors: ".docsearch-content h1",
            },
            lvl2: ".docsearch-content h3",
            lvl3: ".docsearch-content h4",
            lvl4: ".docsearch-content h5",
            lvl5: ".docsearch-content h6",
            pageRank: "4",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    "livewire-framework": {
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