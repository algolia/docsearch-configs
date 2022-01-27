new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://nus-tee3201.github.io/2022/schedule/",
    "https://nus-tee3201.github.io/",
    "https://nus-tee3201.github.io/2022/admin/",
    "https://nus-tee3201.github.io/2022/programming/",
    "https://nus-tee3201.github.io/2022/se-book-adapted/",
    "https://nus-tee3201.github.io/2022/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [
    "**/**printable**",
    "**/**printable**/**",
    "**/**d/index.html",
    "**/book/**",
    "**/**schedule/index.html",
    "**/**print.html",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://nus-tee3201.github.io/**"],
  schedule: "at 19:00 on Friday",
  actions: [
    {
      indexName: "te3201_2019",
      pathsToMatch: ["https://nus-tee3201.github.io/2022/schedule/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".algolia-no-index, [id$='-toc'], #toc, .alert";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".website-content h1",
            content:
              ".website-content p, .website-content li, .website-content .table td",
            lvl0: {
              selectors: "",
              defaultValue: "Schedule",
            },
            lvl2: ".website-content h2",
            lvl3: ".website-content h3",
            lvl4: ".website-content h4",
            lvl5: ".website-content h5",
            tags: {
              defaultValue: ["schedule"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "te3201_2019",
      pathsToMatch: ["https://nus-tee3201.github.io/2022/admin/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".algolia-no-index, [id$='-toc'], #toc, .alert";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".website-content h1",
            content:
              ".website-content p, .website-content li, .website-content .table td",
            lvl0: {
              selectors: "",
              defaultValue: "Admin Info",
            },
            lvl2: ".website-content h2",
            lvl3: ".website-content h3",
            lvl4: ".website-content h4",
            lvl5: ".website-content h5",
            tags: {
              defaultValue: ["admin"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "te3201_2019",
      pathsToMatch: ["https://nus-tee3201.github.io/2022/programming/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".algolia-no-index, [id$='-toc'], #toc, .alert";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".website-content h1",
            content:
              ".website-content p, .website-content li, .website-content .table td",
            lvl0: {
              selectors: "",
              defaultValue: "Programming Textbook",
            },
            lvl2: ".website-content h3",
            lvl3: ".website-content h4",
            lvl4: ".website-content h5",
            lvl5: ".website-content h6",
            tags: {
              defaultValue: ["programming"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "te3201_2019",
      pathsToMatch: ["https://nus-tee3201.github.io/2022/se-book-adapted/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".algolia-no-index, [id$='-toc'], #toc, .alert";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".website-content h1",
            content:
              ".website-content panel p, .website-content panel li, .website-content panel .table td",
            lvl0: {
              selectors: "",
              defaultValue: "SE Textbook",
            },
            lvl2: ".website-content h2",
            lvl3: ".website-content h3",
            lvl4: ".website-content h4",
            lvl5: ".website-content h5",
            lvl6: ".website-content h6",
            tags: {
              defaultValue: ["se-book-adapted"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "te3201_2019",
      pathsToMatch: [
        "https://nus-tee3201.github.io/2022/**",
        "!https://nus-tee3201.github.io/2022/schedule/**",
        "!https://nus-tee3201.github.io/2022/admin/**",
        "!https://nus-tee3201.github.io/2022/programming/**",
        "!https://nus-tee3201.github.io/2022/se-book-adapted/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".algolia-no-index, [id$='-toc'], #toc, .alert";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".website-content h1",
            content:
              ".website-content p, .website-content li, .website-content .table td",
            lvl0: {
              selectors: "",
              defaultValue: "Other",
            },
            lvl2: ".website-content h2",
            lvl3: ".website-content h3",
            lvl4: ".website-content h4",
            lvl5: ".website-content h5",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    te3201_2019: {
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
      separatorsToIndex: "_",
    },
  },
});