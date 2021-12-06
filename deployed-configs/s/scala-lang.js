new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://docs.scala-lang.org/tutorials/tour/",
    "https://docs.scala-lang.org/",
    "https://docs.scala-lang.org/ko/tutorials/tour/",
    "https://docs.scala-lang.org/ba/tutorials/tour/",
    "https://docs.scala-lang.org/pl/tutorials/tour/",
    "https://docs.scala-lang.org/es/tutorials/tour/",
    "https://docs.scala-lang.org/pt-br/tutorials/tour/",
    "https://docs.scala-lang.org/ja/tutorials/tour/",
    "https://docs.scala-lang.org/fr/tutorials/tour/",
    "https://docs.scala-lang.org/zh-cn/tutorials/tour/",
    "https://docs.scala-lang.org/ru/tutorials/tour/",
    "https://docs.scala-lang.org/ko",
    "https://docs.scala-lang.org/ba",
    "https://docs.scala-lang.org/pl",
    "https://docs.scala-lang.org/es",
    "https://docs.scala-lang.org/pt-br",
    "https://docs.scala-lang.org/ja",
    "https://docs.scala-lang.org/fr",
    "https://docs.scala-lang.org/zh-cn",
    "https://docs.scala-lang.org/ru",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [
    "**/**lang.org/api/**",
    "**/**lang.org/download/**",
    "**/**lang.org/blog/**",
    "**/**lang.org/old/**",
    "**/**lang.org/files/archive/**",
    "**/**lang.org/events/**",
    "**/**changelog**",
    "**/**changelog**/**",
    "**/**?C**",
    "**/**?C**/**",
    "**/cheatsheets/index.html",
    "**/glossary/index.html",
    "**.html.html",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://docs.scala-lang.org/**"],
  schedule: "at 15:00 on Friday",
  actions: [
    {
      indexName: "scala-lang",
      pathsToMatch: ["https://docs.scala-lang.org/tutorials/tour/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".linenums, .pager";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".container .span10 h1",
            content: ".container .span10 p, .container .span10 li",
            lvl0: {
              selectors: "",
              defaultValue: "Tutorials",
            },
            lvl2: ".container .span10 h2",
            lvl3: ".container .span10 h3",
            lvl4: ".container .span10 h4",
            lvl5: ".container .span10 h5",
            language: {
              defaultValue: ["en"],
            },
            tags: {
              defaultValue: ["tutorials"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "scala-lang",
      pathsToMatch: ["https://docs.scala-lang.org/ko/tutorials/tour/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".linenums, .pager";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".container .span10 h1",
            content: ".container .span10 p, .container .span10 li",
            lvl0: {
              selectors: "",
              defaultValue: "Tutorials",
            },
            lvl2: ".container .span10 h2",
            lvl3: ".container .span10 h3",
            lvl4: ".container .span10 h4",
            lvl5: ".container .span10 h5",
            language: {
              defaultValue: ["ko"],
            },
            tags: {
              defaultValue: ["tutorials"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "scala-lang",
      pathsToMatch: ["https://docs.scala-lang.org/ba/tutorials/tour/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".linenums, .pager";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".container .span10 h1",
            content: ".container .span10 p, .container .span10 li",
            lvl0: {
              selectors: "",
              defaultValue: "Tutorials",
            },
            lvl2: ".container .span10 h2",
            lvl3: ".container .span10 h3",
            lvl4: ".container .span10 h4",
            lvl5: ".container .span10 h5",
            language: {
              defaultValue: ["ba"],
            },
            tags: {
              defaultValue: ["tutorials"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "scala-lang",
      pathsToMatch: ["https://docs.scala-lang.org/pl/tutorials/tour/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".linenums, .pager";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".container .span10 h1",
            content: ".container .span10 p, .container .span10 li",
            lvl0: {
              selectors: "",
              defaultValue: "Tutorials",
            },
            lvl2: ".container .span10 h2",
            lvl3: ".container .span10 h3",
            lvl4: ".container .span10 h4",
            lvl5: ".container .span10 h5",
            language: {
              defaultValue: ["pl"],
            },
            tags: {
              defaultValue: ["tutorials"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "scala-lang",
      pathsToMatch: ["https://docs.scala-lang.org/es/tutorials/tour/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".linenums, .pager";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".container .span10 h1",
            content: ".container .span10 p, .container .span10 li",
            lvl0: {
              selectors: "",
              defaultValue: "Tutorials",
            },
            lvl2: ".container .span10 h2",
            lvl3: ".container .span10 h3",
            lvl4: ".container .span10 h4",
            lvl5: ".container .span10 h5",
            language: {
              defaultValue: ["es"],
            },
            tags: {
              defaultValue: ["tutorials"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "scala-lang",
      pathsToMatch: ["https://docs.scala-lang.org/pt-br/tutorials/tour/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".linenums, .pager";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".container .span10 h1",
            content: ".container .span10 p, .container .span10 li",
            lvl0: {
              selectors: "",
              defaultValue: "Tutorials",
            },
            lvl2: ".container .span10 h2",
            lvl3: ".container .span10 h3",
            lvl4: ".container .span10 h4",
            lvl5: ".container .span10 h5",
            language: {
              defaultValue: ["pt-br"],
            },
            tags: {
              defaultValue: ["tutorials"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "scala-lang",
      pathsToMatch: ["https://docs.scala-lang.org/ja/tutorials/tour/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".linenums, .pager";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".container .span10 h1",
            content: ".container .span10 p, .container .span10 li",
            lvl0: {
              selectors: "",
              defaultValue: "Tutorials",
            },
            lvl2: ".container .span10 h2",
            lvl3: ".container .span10 h3",
            lvl4: ".container .span10 h4",
            lvl5: ".container .span10 h5",
            language: {
              defaultValue: ["ja"],
            },
            tags: {
              defaultValue: ["tutorials"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "scala-lang",
      pathsToMatch: ["https://docs.scala-lang.org/fr/tutorials/tour/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".linenums, .pager";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".container .span10 h1",
            content: ".container .span10 p, .container .span10 li",
            lvl0: {
              selectors: "",
              defaultValue: "Tutorials",
            },
            lvl2: ".container .span10 h2",
            lvl3: ".container .span10 h3",
            lvl4: ".container .span10 h4",
            lvl5: ".container .span10 h5",
            language: {
              defaultValue: ["fr"],
            },
            tags: {
              defaultValue: ["tutorials"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "scala-lang",
      pathsToMatch: ["https://docs.scala-lang.org/zh-cn/tutorials/tour/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".linenums, .pager";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".container .span10 h1",
            content: ".container .span10 p, .container .span10 li",
            lvl0: {
              selectors: "",
              defaultValue: "Tutorials",
            },
            lvl2: ".container .span10 h2",
            lvl3: ".container .span10 h3",
            lvl4: ".container .span10 h4",
            lvl5: ".container .span10 h5",
            language: {
              defaultValue: ["zh-cn"],
            },
            tags: {
              defaultValue: ["tutorials"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "scala-lang",
      pathsToMatch: ["https://docs.scala-lang.org/ru/tutorials/tour/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".linenums, .pager";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".container .span10 h1",
            content: ".container .span10 p, .container .span10 li",
            lvl0: {
              selectors: "",
              defaultValue: "Tutorials",
            },
            lvl2: ".container .span10 h2",
            lvl3: ".container .span10 h3",
            lvl4: ".container .span10 h4",
            lvl5: ".container .span10 h5",
            language: {
              defaultValue: ["ru"],
            },
            tags: {
              defaultValue: ["tutorials"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "scala-lang",
      pathsToMatch: ["https://docs.scala-lang.org/ko**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".linenums, .pager";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#inner-main .title-page h1",
            content:
              "#inner-main .content-primary p, #inner-main .content-primary li",
            lvl0: {
              selectors: "#inner-main .title-page .supertitle",
              defaultValue: "Documentation",
            },
            lvl2: "#inner-main .content-primary h2",
            lvl3: "#inner-main .content-primary h3",
            lvl4: "#inner-main .content-primary h4",
            lvl5: "#inner-main .content-primary h5",
            language: {
              defaultValue: ["ko"],
            },
            tags: {
              defaultValue: ["documentation"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "scala-lang",
      pathsToMatch: ["https://docs.scala-lang.org/ba**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".linenums, .pager";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#inner-main .title-page h1",
            content:
              "#inner-main .content-primary p, #inner-main .content-primary li",
            lvl0: {
              selectors: "#inner-main .title-page .supertitle",
              defaultValue: "Documentation",
            },
            lvl2: "#inner-main .content-primary h2",
            lvl3: "#inner-main .content-primary h3",
            lvl4: "#inner-main .content-primary h4",
            lvl5: "#inner-main .content-primary h5",
            language: {
              defaultValue: ["ba"],
            },
            tags: {
              defaultValue: ["documentation"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "scala-lang",
      pathsToMatch: ["https://docs.scala-lang.org/pl**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".linenums, .pager";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#inner-main .title-page h1",
            content:
              "#inner-main .content-primary p, #inner-main .content-primary li",
            lvl0: {
              selectors: "#inner-main .title-page .supertitle",
              defaultValue: "Documentation",
            },
            lvl2: "#inner-main .content-primary h2",
            lvl3: "#inner-main .content-primary h3",
            lvl4: "#inner-main .content-primary h4",
            lvl5: "#inner-main .content-primary h5",
            language: {
              defaultValue: ["pl"],
            },
            tags: {
              defaultValue: ["documentation"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "scala-lang",
      pathsToMatch: ["https://docs.scala-lang.org/es**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".linenums, .pager";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#inner-main .title-page h1",
            content:
              "#inner-main .content-primary p, #inner-main .content-primary li",
            lvl0: {
              selectors: "#inner-main .title-page .supertitle",
              defaultValue: "Documentation",
            },
            lvl2: "#inner-main .content-primary h2",
            lvl3: "#inner-main .content-primary h3",
            lvl4: "#inner-main .content-primary h4",
            lvl5: "#inner-main .content-primary h5",
            language: {
              defaultValue: ["es"],
            },
            tags: {
              defaultValue: ["documentation"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "scala-lang",
      pathsToMatch: ["https://docs.scala-lang.org/pt-br**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".linenums, .pager";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#inner-main .title-page h1",
            content:
              "#inner-main .content-primary p, #inner-main .content-primary li",
            lvl0: {
              selectors: "#inner-main .title-page .supertitle",
              defaultValue: "Documentation",
            },
            lvl2: "#inner-main .content-primary h2",
            lvl3: "#inner-main .content-primary h3",
            lvl4: "#inner-main .content-primary h4",
            lvl5: "#inner-main .content-primary h5",
            language: {
              defaultValue: ["pt-br"],
            },
            tags: {
              defaultValue: ["documentation"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "scala-lang",
      pathsToMatch: ["https://docs.scala-lang.org/ja**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".linenums, .pager";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#inner-main .title-page h1",
            content:
              "#inner-main .content-primary p, #inner-main .content-primary li",
            lvl0: {
              selectors: "#inner-main .title-page .supertitle",
              defaultValue: "Documentation",
            },
            lvl2: "#inner-main .content-primary h2",
            lvl3: "#inner-main .content-primary h3",
            lvl4: "#inner-main .content-primary h4",
            lvl5: "#inner-main .content-primary h5",
            language: {
              defaultValue: ["ja"],
            },
            tags: {
              defaultValue: ["documentation"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "scala-lang",
      pathsToMatch: ["https://docs.scala-lang.org/fr**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".linenums, .pager";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#inner-main .title-page h1",
            content:
              "#inner-main .content-primary p, #inner-main .content-primary li",
            lvl0: {
              selectors: "#inner-main .title-page .supertitle",
              defaultValue: "Documentation",
            },
            lvl2: "#inner-main .content-primary h2",
            lvl3: "#inner-main .content-primary h3",
            lvl4: "#inner-main .content-primary h4",
            lvl5: "#inner-main .content-primary h5",
            language: {
              defaultValue: ["fr"],
            },
            tags: {
              defaultValue: ["documentation"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "scala-lang",
      pathsToMatch: ["https://docs.scala-lang.org/zh-cn**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".linenums, .pager";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#inner-main .title-page h1",
            content:
              "#inner-main .content-primary p, #inner-main .content-primary li",
            lvl0: {
              selectors: "#inner-main .title-page .supertitle",
              defaultValue: "Documentation",
            },
            lvl2: "#inner-main .content-primary h2",
            lvl3: "#inner-main .content-primary h3",
            lvl4: "#inner-main .content-primary h4",
            lvl5: "#inner-main .content-primary h5",
            language: {
              defaultValue: ["zh-cn"],
            },
            tags: {
              defaultValue: ["documentation"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "scala-lang",
      pathsToMatch: ["https://docs.scala-lang.org/ru**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".linenums, .pager";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#inner-main .title-page h1",
            content:
              "#inner-main .content-primary p, #inner-main .content-primary li",
            lvl0: {
              selectors: "#inner-main .title-page .supertitle",
              defaultValue: "Documentation",
            },
            lvl2: "#inner-main .content-primary h2",
            lvl3: "#inner-main .content-primary h3",
            lvl4: "#inner-main .content-primary h4",
            lvl5: "#inner-main .content-primary h5",
            language: {
              defaultValue: ["ru"],
            },
            tags: {
              defaultValue: ["documentation"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "scala-lang",
      pathsToMatch: ["https://docs.scala-lang.org/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".linenums, .pager";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#inner-main .title-page h1",
            content:
              "#inner-main .content-primary p, #inner-main .content-primary li",
            lvl0: {
              selectors: "#inner-main .title-page .supertitle",
              defaultValue: "Documentation",
            },
            lvl2: "#inner-main .content-primary h2",
            lvl3: "#inner-main .content-primary h3",
            lvl4: "#inner-main .content-primary h4",
            lvl5: "#inner-main .content-primary h5",
            language: {
              defaultValue: ["en"],
            },
            tags: {
              defaultValue: ["documentation"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    "scala-lang": {
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