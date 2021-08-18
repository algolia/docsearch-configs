new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://en.parceljs.org/",
    "https://es.parceljs.org/",
    "https://fr.parceljs.org/",
    "https://it.parceljs.org/",
    "https://ko.parceljs.org/",
    "https://pl.parceljs.org/",
    "https://pt.parceljs.org/",
    "https://ru.parceljs.org/",
    "https://uk.parceljs.org/",
    "https://zh.parceljs.org/",
    "https://zh-tw.parceljs.org/",
    "https://v2.parceljs.org/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: [
    "https://en.parceljs.org/**",
    "https://es.parceljs.org/**",
    "https://fr.parceljs.org/**",
    "https://it.parceljs.org/**",
    "https://ko.parceljs.org/**",
    "https://pl.parceljs.org/**",
    "https://pt.parceljs.org/**",
    "https://ru.parceljs.org/**",
    "https://uk.parceljs.org/**",
    "https://zh.parceljs.org/**",
    "https://zh-tw.parceljs.org/**",
    "https://v2.parceljs.org/**",
  ],
  schedule: "at 00:00 on Friday",
  actions: [
    {
      indexName: "parceljs",
      pathsToMatch: ["https://en.parceljs.org/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["assets/parcel-front.png"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        }
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["en"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "parceljs",
      pathsToMatch: ["https://es.parceljs.org/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["assets/parcel-front.png"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        }
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["es"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "parceljs",
      pathsToMatch: ["https://fr.parceljs.org/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["assets/parcel-front.png"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        }
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["fr"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "parceljs",
      pathsToMatch: ["https://it.parceljs.org/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["assets/parcel-front.png"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        }
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["it"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "parceljs",
      pathsToMatch: ["https://ko.parceljs.org/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["assets/parcel-front.png"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        }
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["ko"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "parceljs",
      pathsToMatch: ["https://pl.parceljs.org/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["assets/parcel-front.png"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        }
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["pl"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "parceljs",
      pathsToMatch: ["https://pt.parceljs.org/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["assets/parcel-front.png"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        }
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["pt"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "parceljs",
      pathsToMatch: ["https://ru.parceljs.org/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["assets/parcel-front.png"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        }
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["ru"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "parceljs",
      pathsToMatch: ["https://uk.parceljs.org/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["assets/parcel-front.png"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        }
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["uk"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "parceljs",
      pathsToMatch: ["https://zh.parceljs.org/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["assets/parcel-front.png"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        }
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["zh"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "parceljs",
      pathsToMatch: ["https://zh-tw.parceljs.org/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["assets/parcel-front.png"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        }
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["zh-tw"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "parceljs",
      pathsToMatch: ["https://v2.parceljs.org/**"],
      recordExtractor: ({ $, helpers }) => {
        // Stop if one of those text is found in the DOM.
        const body = $.text();
        const toCheck = ["assets/parcel-front.png"];
        const shouldStop = toCheck.some((text) => body.includes(text));
        if (shouldStop) {
          return [];
        }
        return helpers.docsearch({
          recordProps: {
            lvl1: "main h2",
            content: "main p, main li",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["v2"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    parceljs: {
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
    },
  },
});