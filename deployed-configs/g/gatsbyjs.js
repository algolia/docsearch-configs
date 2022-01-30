new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://www.gatsbyjs.com/docs/",
    "https://www.gatsbyjs.com/",
    "https://www.gatsbyjs.com/cloud/docs/",
    "https://www.gatsbyjs.com/tutorial/",
    "https://www.gatsbyjs.com/blog/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://www.gatsbyjs.com/sitemap.xml"],
  exclusionPatterns: ["**/packages/**", "**/blog/tags/**", "**/blog/page/**"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://www.gatsbyjs.com/**"],
  schedule: "at 06:00 on Wednesday",
  actions: [
    {
      indexName: "gatsbyjs",
      pathsToMatch: ["https://www.gatsbyjs.com/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          "hr ~ div, #next-steps, #next-steps ~ p, h3 span, body style";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".docSearch-content h1",
            content: ".docSearch-content p, .docSearch-content li",
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ".docSearch-content h2",
            lvl3: ".docSearch-content h3",
            lvl4: ".docSearch-content h4",
            lvl5: ".docSearch-content h5",
            tags: {
              defaultValue: ["docs"],
            },
            pageRank: "4",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "gatsbyjs",
      pathsToMatch: ["https://www.gatsbyjs.com/cloud/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          "hr ~ div, #next-steps, #next-steps ~ p, h3 span, body style";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".docSearch-content h1",
            content: ".docSearch-content p, .docSearch-content li",
            lvl0: {
              selectors: "",
              defaultValue: "Cloud",
            },
            lvl2: ".docSearch-content h2",
            lvl3: ".docSearch-content h3",
            lvl4: ".docSearch-content h4",
            lvl5: ".docSearch-content h5",
            tags: {
              defaultValue: ["docs"],
            },
            pageRank: "3",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "gatsbyjs",
      pathsToMatch: ["https://www.gatsbyjs.com/tutorial/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          "hr ~ div, #next-steps, #next-steps ~ p, h3 span, body style";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content: ".docSearch-content p, .docSearch-content li",
            lvl0: {
              selectors: "",
              defaultValue: "Tutorial",
            },
            lvl2: ".docSearch-content h2",
            lvl3: ".docSearch-content h4",
            lvl4: ".docSearch-content h5",
            tags: {
              defaultValue: ["tutorial"],
            },
            pageRank: "2",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "gatsbyjs",
      pathsToMatch: ["https://www.gatsbyjs.com/blog/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          "hr ~ div, #next-steps, #next-steps ~ p, h3 span, body style";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".post h1",
            content: "section.post-body p, section.post-body li",
            lvl0: {
              selectors: "",
              defaultValue: "Blog",
            },
            lvl2: "section.post-body h2",
            lvl3: "section.post-body h3",
            lvl4: "section.post-body h4",
            lvl5: "section.post-body h5",
            tags: {
              defaultValue: ["blog"],
            },
            pageRank: "1",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    gatsbyjs: {
      attributesForFaceting: ["type", "lang", "tags", "hierarchy.lvl0"],
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