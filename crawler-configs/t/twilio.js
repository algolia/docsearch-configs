new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://www.twilio.com/docs/studio",
    "https://www.twilio.com/",
    "https://www.twilio.com/docs",
    "https://docs.sendgrid.com/",
  ],
  renderJavaScript: false,
  sitemaps: [
    "https://www.twilio.com/docs/sitemap.xml",
    "https://docs.sendgrid.com/docs/sitemap.xml",
  ],
  exclusionPatterns: ["**/**docs/libraries/reference/**"],
  ignoreCanonicalTo: false,
  discoveryPatterns: [
    "https://www.twilio.com/**",
    "https://docs.sendgrid.com/**",
  ],
  schedule: "at 19:50 on Friday",
  actions: [
    {
      indexName: "twilio",
      pathsToMatch: ["https://www.twilio.com/docs/studio**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".docs-help, .docs-article-footer, #table-of-contents, #table-of-contents + .docs-article__list";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content:
              ".docs-prose p, .docs-prose li, .docs-prose table td:last-child",
            lvl0: {
              selectors: ".docs-sidebar__title",
              defaultValue: "Documentation",
            },
            lvl2: ".docs-prose h1",
            lvl3: ".docs-prose h2",
            lvl4: ".docs-prose h3",
            lvl5: ".docs-prose h4",
            lvl6: ".docs-prose h5, .docs-prose table td:first-child",
            tags: {
              defaultValue: ["studio"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "twilio",
      pathsToMatch: ["https://docs.sendgrid.com**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".docs-help, .docs-article-footer, #table-of-contents, #table-of-contents + .docs-article__list";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content:
              ".docs-prose p, .docs-prose li, .docs-prose table td:last-child",
            lvl0: {
              selectors: ".docs-sidebar__title",
              defaultValue: "Documentation",
            },
            lvl2: ".docs-prose h1",
            lvl3: ".docs-prose h2",
            lvl4: ".docs-prose h3",
            lvl5: ".docs-prose h4",
            lvl6: ".docs-prose h5, .docs-prose table td:first-child",
            tags: {
              defaultValue: ["sendgrid"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "twilio",
      pathsToMatch: [
        "https://www.twilio.com/docs**/**",
        "!https://www.twilio.com/docs/studio**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".docs-help, .docs-article-footer, #table-of-contents, #table-of-contents + .docs-article__list";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content:
              ".docs-prose p, .docs-prose li, .docs-prose table td:last-child",
            lvl0: {
              selectors: ".docs-sidebar__title",
              defaultValue: "Documentation",
            },
            lvl2: ".docs-prose h1",
            lvl3: ".docs-prose h2",
            lvl4: ".docs-prose h3",
            lvl5: ".docs-prose h4",
            lvl6: ".docs-prose h5, .docs-prose table td:first-child",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    twilio: {
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