new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://open-eo.github.io/openeo-js-client/latest/",
    "https://open-eo.github.io/",
    "https://open-eo.github.io/openeo-r-client/",
    "https://open-eo.github.io/openeo-python-client/",
    "https://openeo.org/documentation/0.4/",
    "https://openeo.org/",
  ],
  renderJavaScript: true,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://open-eo.github.io/**", "https://openeo.org/**"],
  schedule: "at 20:30 on Thursday",
  actions: [
    {
      indexName: "openeo",
      pathsToMatch: ["https://open-eo.github.io/openeo-js-client/latest/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".table-of-contents, .toc, .indextable, .prettyprint, .ref-index, .dont-index";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#main h1",
            content: "#main p, #main li, #main td",
            lvl0: {
              selectors: "#title",
              defaultValue: "JavaScript Client",
            },
            lvl2: "#main h2",
            lvl3: "#main h3",
            lvl4: "#main h4",
            lvl5: "#main h5",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "openeo",
      pathsToMatch: ["https://open-eo.github.io/openeo-r-client/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".table-of-contents, .toc, .indextable, .prettyprint, .ref-index, .dont-index";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".contents h1",
            content: ".contents p, .contents li, .contents pre.usage",
            lvl0: {
              selectors: "#title",
              defaultValue: "R Client",
            },
            lvl2: ".contents h2",
            lvl3: ".contents h3",
            lvl4: ".contents h4",
            lvl5: ".contents h5",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "openeo",
      pathsToMatch: ["https://open-eo.github.io/openeo-python-client/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".table-of-contents, .toc, .indextable, .prettyprint, .ref-index, .dont-index";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".body h1",
            content: ".body p, .body li, .body dt.sig, .body dd span",
            lvl0: {
              selectors: "#title",
              defaultValue: "Python Client",
            },
            lvl2: ".body h2",
            lvl3: ".body h3",
            lvl4: ".body h4, .body dt span.sig-name",
            lvl5: ".body h5",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "openeo",
      pathsToMatch: ["https://openeo.org/documentation/0.4/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".table-of-contents, .toc, .indextable, .prettyprint, .ref-index, .dont-index";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".theme-default-content h2, .process h2, .api-content h2",
            content:
              ".theme-default-content p, .theme-default-content li, .theme-default-content td, .process p, .process summary, .api-content p, .api-content li, .api-content td",
            lvl0: {
              selectors: ".theme-default-content h1, .api-content h1",
              defaultValue: "openEO",
            },
            lvl2: ".theme-default-content h3, .process h4, .api-content h3",
            lvl3: ".theme-default-content h4, .api-content h4",
            lvl4: ".theme-default-content h5, .api-content h5",
            lvl5: ".theme-default-content h6, .api-content h6",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "openeo",
      pathsToMatch: ["https://openeo.org**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".table-of-contents, .toc, .indextable, .prettyprint, .ref-index, .dont-index";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".theme-default-content h2, .process h2, .api-content h2",
            content:
              ".theme-default-content p, .theme-default-content li, .theme-default-content td, .process p, .process summary, .api-content p, .api-content li, .api-content td",
            lvl0: {
              selectors: ".theme-default-content h1, .api-content h1",
              defaultValue: "openEO",
            },
            lvl2: ".theme-default-content h3, .process h4, .api-content h3",
            lvl3: ".theme-default-content h4, .api-content h4",
            lvl4: ".theme-default-content h5, .api-content h5",
            lvl5: ".theme-default-content h6, .api-content h6",
            pageRank: "1",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    openeo: {
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
      synonyms: [
        ["cube", "cubes", "datacube", "datacubes"],
        ["js", "javascript"],
        ["gtiff", "geotiff"],
      ],
    },
  },
});