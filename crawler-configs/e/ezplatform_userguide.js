new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://doc.ibexa.co/projects/userguide/en/latest/",
    "https://doc.ibexa.co/",
    "https://doc.ibexa.co/projects/userguide/en/3.3/",
    "https://doc.ibexa.co/projects/userguide/en/3.2/",
    "https://doc.ibexa.co/projects/userguide/en/2.5/",
    "https://doc.ibexa.co/projects/userguide/en/1.13/",
    "https://doc.ibexa.co/projects/userguide/en/master/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://doc.ibexa.co/**"],
  schedule: "at 20:50 on Tuesday",
  actions: [
    {
      indexName: "ezplatform_userguide",
      pathsToMatch: ["https://doc.ibexa.co/projects/userguide/en/latest/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "a.md-nav__link--active",
            content:
              ".md-content p, .md-content ul li, .md-content .code pre, .md-content table tr td",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".md-content h2",
            lvl3: ".md-content h3",
            lvl4: ".md-content h4",
            lvl5: ".md-content h5",
            lvl6: ".md-content h6",
            version: {
              defaultValue: ["latest"],
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
      indexName: "ezplatform_userguide",
      pathsToMatch: ["https://doc.ibexa.co/projects/userguide/en/3.3/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "a.md-nav__link--active",
            content:
              ".md-content p, .md-content ul li, .md-content .code pre, .md-content table tr td",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".md-content h2",
            lvl3: ".md-content h3",
            lvl4: ".md-content h4",
            lvl5: ".md-content h5",
            lvl6: ".md-content h6",
            version: {
              defaultValue: ["3.3"],
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
      indexName: "ezplatform_userguide",
      pathsToMatch: ["https://doc.ibexa.co/projects/userguide/en/3.2/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "a.md-nav__link--active",
            content:
              ".md-content p, .md-content ul li, .md-content .code pre, .md-content table tr td",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".md-content h2",
            lvl3: ".md-content h3",
            lvl4: ".md-content h4",
            lvl5: ".md-content h5",
            lvl6: ".md-content h6",
            version: {
              defaultValue: ["3.2"],
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
      indexName: "ezplatform_userguide",
      pathsToMatch: ["https://doc.ibexa.co/projects/userguide/en/2.5/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "a.md-nav__link--active",
            content:
              ".md-content p, .md-content ul li, .md-content .code pre, .md-content table tr td",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".md-content h2",
            lvl3: ".md-content h3",
            lvl4: ".md-content h4",
            lvl5: ".md-content h5",
            lvl6: ".md-content h6",
            version: {
              defaultValue: ["2.5"],
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
      indexName: "ezplatform_userguide",
      pathsToMatch: ["https://doc.ibexa.co/projects/userguide/en/1.13/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "a.md-nav__link--active",
            content:
              ".md-content p, .md-content ul li, .md-content .code pre, .md-content table tr td",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".md-content h2",
            lvl3: ".md-content h3",
            lvl4: ".md-content h4",
            lvl5: ".md-content h5",
            lvl6: ".md-content h6",
            version: {
              defaultValue: ["1.13"],
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
      indexName: "ezplatform_userguide",
      pathsToMatch: ["https://doc.ibexa.co/projects/userguide/en/master/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "a.md-nav__link--active",
            content:
              ".md-content p, .md-content ul li, .md-content .code pre, .md-content table tr td",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".md-content h2",
            lvl3: ".md-content h3",
            lvl4: ".md-content h4",
            lvl5: ".md-content h5",
            lvl6: ".md-content h6",
            version: {
              defaultValue: ["master"],
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
    ezplatform_userguide: {
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