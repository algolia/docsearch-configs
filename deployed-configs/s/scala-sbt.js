new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://www.scala-sbt.org/1.x/docs/",
    "https://www.scala-sbt.org/",
    "https://www.scala-sbt.org/1.x/docs/ja/",
    "https://www.scala-sbt.org/1.x/docs/es/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://www.scala-sbt.org/sitemap.xml"],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://www.scala-sbt.org/**"],
  schedule: "at 15:00 on Friday",
  actions: [
    {
      indexName: "scala-sbt",
      pathsToMatch: ["https://www.scala-sbt.org/1.x/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".contents h2",
            content: ".contents p, .contents li",
            lvl0: {
              selectors: ".contents h1",
            },
            lvl2: ".contents h3",
            lvl3: ".contents h4",
            lvl4: ".contents h5",
            lvl5: ".contents h6",
            lang: {
              defaultValue: ["/"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "scala-sbt",
      pathsToMatch: ["https://www.scala-sbt.org/1.x/docs/ja/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".contents h2",
            content: ".contents p, .contents li",
            lvl0: {
              selectors: ".contents h1",
            },
            lvl2: ".contents h3",
            lvl3: ".contents h4",
            lvl4: ".contents h5",
            lvl5: ".contents h6",
            lang: {
              defaultValue: ["/ja/"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "scala-sbt",
      pathsToMatch: ["https://www.scala-sbt.org/1.x/docs/es/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".contents h2",
            content: ".contents p, .contents li",
            lvl0: {
              selectors: ".contents h1",
            },
            lvl2: ".contents h3",
            lvl3: ".contents h4",
            lvl4: ".contents h5",
            lvl5: ".contents h6",
            lang: {
              defaultValue: ["/es/"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    "scala-sbt": {
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