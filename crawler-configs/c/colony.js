new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "http://docs.colony.io/colonynetwork/intro-welcome/",
    "http://docs.colony.io/",
    "https://docs.colony.io/colonynetwork/",
    "https://docs.colony.io/",
    "https://docs.colony.io/colonyjs/intro-welcome",
    "https://docs.colony.io/colonyjs/",
    "http://docs.colony.io/colonystarter/docs-overview/",
    "https://docs.colony.io/colonystarter/",
    "http://docs.colony.io/purser/docs-overview/",
    "https://docs.colony.io/purser/",
    "http://docs.colony.io/tailor/docs-overview/",
    "https://docs.colony.io/tailor/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["http://docs.colony.io/**", "https://docs.colony.io/**"],
  schedule: "at 11:30 on Tuesday",
  actions: [
    {
      indexName: "colony",
      pathsToMatch: ["http://docs.colony.io/colonynetwork/intro-welcome/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".gatsby-toc + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content: "main p, main li",
            lvl0: {
              selectors: "a[class*=projectLinkActive]",
              defaultValue: "Project",
            },
            lvl2: "main h1",
            lvl3: "main h2",
            lvl4: "main h3",
            lvl5: "main h4",
            tags: {
              defaultValue: ["colonynetwork"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "colony",
      pathsToMatch: ["https://docs.colony.io/colonynetwork/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".gatsby-toc + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content: "main p, main li",
            lvl0: {
              selectors: "a[class*=projectLinkActive]",
              defaultValue: "Project",
            },
            lvl2: "main h1",
            lvl3: "main h2",
            lvl4: "main h3",
            lvl5: "main h4",
            tags: {
              defaultValue: ["colonynetwork"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "colony",
      pathsToMatch: ["https://docs.colony.io/colonyjs/intro-welcome**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".gatsby-toc + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content: "main p, main li",
            lvl0: {
              selectors: "a[class*=projectLinkActive]",
              defaultValue: "Project",
            },
            lvl2: "main h1",
            lvl3: "main h2",
            lvl4: "main h3",
            lvl5: "main h4",
            tags: {
              defaultValue: ["colonyjs"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "colony",
      pathsToMatch: ["https://docs.colony.io/colonyjs/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".gatsby-toc + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content: "main p, main li",
            lvl0: {
              selectors: "a[class*=projectLinkActive]",
              defaultValue: "Project",
            },
            lvl2: "main h1",
            lvl3: "main h2",
            lvl4: "main h3",
            lvl5: "main h4",
            tags: {
              defaultValue: ["colonyjs"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "colony",
      pathsToMatch: ["http://docs.colony.io/colonystarter/docs-overview/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".gatsby-toc + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content: "main p, main li",
            lvl0: {
              selectors: "a[class*=projectLinkActive]",
              defaultValue: "Project",
            },
            lvl2: "main h1",
            lvl3: "main h2",
            lvl4: "main h3",
            lvl5: "main h4",
            tags: {
              defaultValue: ["colonystarter"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "colony",
      pathsToMatch: ["https://docs.colony.io/colonystarter/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".gatsby-toc + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content: "main p, main li",
            lvl0: {
              selectors: "a[class*=projectLinkActive]",
              defaultValue: "Project",
            },
            lvl2: "main h1",
            lvl3: "main h2",
            lvl4: "main h3",
            lvl5: "main h4",
            tags: {
              defaultValue: ["colonystarter"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "colony",
      pathsToMatch: ["http://docs.colony.io/purser/docs-overview/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".gatsby-toc + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content: "main p, main li",
            lvl0: {
              selectors: "a[class*=projectLinkActive]",
              defaultValue: "Project",
            },
            lvl2: "main h1",
            lvl3: "main h2",
            lvl4: "main h3",
            lvl5: "main h4",
            tags: {
              defaultValue: ["purser"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "colony",
      pathsToMatch: ["https://docs.colony.io/purser/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".gatsby-toc + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content: "main p, main li",
            lvl0: {
              selectors: "a[class*=projectLinkActive]",
              defaultValue: "Project",
            },
            lvl2: "main h1",
            lvl3: "main h2",
            lvl4: "main h3",
            lvl5: "main h4",
            tags: {
              defaultValue: ["purser"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "colony",
      pathsToMatch: ["http://docs.colony.io/tailor/docs-overview/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".gatsby-toc + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content: "main p, main li",
            lvl0: {
              selectors: "a[class*=projectLinkActive]",
              defaultValue: "Project",
            },
            lvl2: "main h1",
            lvl3: "main h2",
            lvl4: "main h3",
            lvl5: "main h4",
            tags: {
              defaultValue: ["tailor"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "colony",
      pathsToMatch: ["https://docs.colony.io/tailor/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".gatsby-toc + ul";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content: "main p, main li",
            lvl0: {
              selectors: "a[class*=projectLinkActive]",
              defaultValue: "Project",
            },
            lvl2: "main h1",
            lvl3: "main h2",
            lvl4: "main h3",
            lvl5: "main h4",
            tags: {
              defaultValue: ["tailor"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    colony: {
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