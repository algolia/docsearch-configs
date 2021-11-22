new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://parceljs.org/",
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
    "https://v1.parceljs.org/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: ["https://parceljs.org/blog/**"],
  ignoreCanonicalTo: false,
  discoveryPatterns: [
    "https://parceljs.org/**",
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
    "https://v1.parceljs.org/**",
  ],
  schedule: "at 00:00 on Friday",
  actions: [
    {
      indexName: "parceljs",
      pathsToMatch: ["https://parceljs.org/**"],
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
            content: "main p, main li, main pre",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            version: {
              defaultValue: ["v2"],
            },
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
            content: "main p, main li, main pre",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["en"],
            },
            version: {
              defaultValue: ["v1"],
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
            content: "main p, main li, main pre",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["es"],
            },
            version: {
              defaultValue: ["v1"],
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
            content: "main p, main li, main pre",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["fr"],
            },
            version: {
              defaultValue: ["v1"],
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
            content: "main p, main li, main pre",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["it"],
            },
            version: {
              defaultValue: ["v1"],
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
            content: "main p, main li, main pre",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["ko"],
            },
            version: {
              defaultValue: ["v1"],
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
            content: "main p, main li, main pre",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["pl"],
            },
            version: {
              defaultValue: ["v1"],
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
            content: "main p, main li, main pre",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["pt"],
            },
            version: {
              defaultValue: ["v1"],
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
            content: "main p, main li, main pre",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["ru"],
            },
            version: {
              defaultValue: ["v1"],
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
            content: "main p, main li, main pre",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["uk"],
            },
            version: {
              defaultValue: ["v1"],
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
            content: "main p, main li, main pre",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["zh"],
            },
            version: {
              defaultValue: ["v1"],
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
            content: "main p, main li, main pre",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            lang: {
              defaultValue: ["zh-tw"],
            },
            version: {
              defaultValue: ["v1"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "parceljs",
      pathsToMatch: ["https://v1.parceljs.org/**"],
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
            content: "main p, main li, main pre",
            lvl0: {
              selectors: "main h1",
            },
            lvl2: "main h3",
            lvl3: "main h4",
            lvl4: "main h5",
            version: {
              defaultValue: ["v1"],
            },
            lang: {
              defaultValue: ["en"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    parceljs: {
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