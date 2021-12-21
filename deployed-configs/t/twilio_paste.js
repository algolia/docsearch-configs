new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://paste.twilio.design//getting-started/engineering/",
    "https://paste.twilio.design/",
    "https://paste.twilio.design/getting-started/working-guide/",
    "https://paste.twilio.design/getting-started/about-paste/",
    "https://paste.twilio.design/principles/",
    "https://paste.twilio.design/icon-system/how-to-add-an-icon/",
    "https://paste.twilio.design/content/",
    "https://paste.twilio.design/libraries/",
    "https://paste.twilio.design/roadmap/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://paste.twilio.design/sitemap.xml"],
  exclusionPatterns: ["**/**changelog**", "**/**changelog**/**", "!**/"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://paste.twilio.design/**"],
  schedule: "at 19:50 on Friday",
  actions: [
    {
      indexName: "twilio_paste",
      pathsToMatch: [
        "https://paste.twilio.design//getting-started/engineering/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#page-aside, #component-changelog, style, footer";
        $(toRemove).remove();

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
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "twilio_paste",
      pathsToMatch: [
        "https://paste.twilio.design/getting-started/working-guide/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#page-aside, #component-changelog, style, footer";
        $(toRemove).remove();

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
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "twilio_paste",
      pathsToMatch: [
        "https://paste.twilio.design/getting-started/about-paste/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#page-aside, #component-changelog, style, footer";
        $(toRemove).remove();

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
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "twilio_paste",
      pathsToMatch: ["https://paste.twilio.design/principles/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#page-aside, #component-changelog, style, footer";
        $(toRemove).remove();

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
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "twilio_paste",
      pathsToMatch: [
        "https://paste.twilio.design/icon-system/how-to-add-an-icon/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#page-aside, #component-changelog, style, footer";
        $(toRemove).remove();

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
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "twilio_paste",
      pathsToMatch: ["https://paste.twilio.design/content/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#page-aside, #component-changelog, style, footer";
        $(toRemove).remove();

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
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "twilio_paste",
      pathsToMatch: ["https://paste.twilio.design/libraries/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#page-aside, #component-changelog, style, footer";
        $(toRemove).remove();

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
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "twilio_paste",
      pathsToMatch: ["https://paste.twilio.design/roadmap/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#page-aside, #component-changelog, style, footer";
        $(toRemove).remove();

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
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "twilio_paste",
      pathsToMatch: [
        "https://paste.twilio.design/**",
        "!https://paste.twilio.design//getting-started/engineering/**",
        "!https://paste.twilio.design/getting-started/working-guide/**",
        "!https://paste.twilio.design/getting-started/about-paste/**",
        "!https://paste.twilio.design/principles/**",
        "!https://paste.twilio.design/icon-system/how-to-add-an-icon/**",
        "!https://paste.twilio.design/content/**",
        "!https://paste.twilio.design/libraries/**",
        "!https://paste.twilio.design/roadmap/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "#page-aside, #component-changelog, style, footer";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content: "main p, main li",
            lvl0: {
              selectors: "main h1",
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    twilio_paste: {
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