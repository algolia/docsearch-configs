new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://www.wooclap.com/en/features/votes/",
    "https://www.wooclap.com/",
    "https://www.wooclap.com/es/features/votos/",
    "https://www.wooclap.com/fr/fonctionnalites/votes/",
    "https://www.wooclap.com/ru/instrumenty/ochnoye-obucheniye/",
    "https://www.wooclap.com/de/",
    "https://docs.wooclap.com/",
    "https://www.wooclap.com/en/blog/",
    "https://www.wooclap.com/fr/blog/",
    "https://www.wooclap.com/es/blog/",
  ],
  renderJavaScript: false,
  sitemaps: [
    "https://www.wooclap.com/sitemap.xml",
    "https://www.wooclap.com/landing-sitemap.xml",
    "https://www.wooclap.com/en/sitemap.xml",
    "https://www.wooclap.com/es/sitemap.xml",
    "https://www.wooclap.com/fr/sitemap.xml",
  ],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: [
    "https://www.wooclap.com/**",
    "https://docs.wooclap.com/**",
  ],
  schedule: "at 10:30 on Saturday",
  actions: [
    {
      indexName: "wooclap",
      pathsToMatch: ["https://www.wooclap.com/en/features/votes/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main section h1",
            content: "main section p, main section li",
            lvl0: {
              selectors: "main nav h2",
              defaultValue: "Features",
            },
            lvl2: "main section h2",
            lvl3: "main section h3",
            lvl4: "main section h4",
            lvl5: "main section h5",
            lvl6: "main section h6",
            tags: {
              defaultValue: ["features"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "wooclap",
      pathsToMatch: ["https://www.wooclap.com/es/features/votos/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main section h1",
            content: "main section p, main section li",
            lvl0: {
              selectors: "main nav h2",
              defaultValue: "Features",
            },
            lvl2: "main section h2",
            lvl3: "main section h3",
            lvl4: "main section h4",
            lvl5: "main section h5",
            lvl6: "main section h6",
            tags: {
              defaultValue: ["features"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "wooclap",
      pathsToMatch: ["https://www.wooclap.com/fr/fonctionnalites/votes/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main section h1",
            content: "main section p, main section li",
            lvl0: {
              selectors: "main nav h2",
              defaultValue: "Features",
            },
            lvl2: "main section h2",
            lvl3: "main section h3",
            lvl4: "main section h4",
            lvl5: "main section h5",
            lvl6: "main section h6",
            tags: {
              defaultValue: ["features"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "wooclap",
      pathsToMatch: [
        "https://www.wooclap.com/ru/instrumenty/ochnoye-obucheniye/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main section h1",
            content: "main section p, main section li",
            lvl0: {
              selectors: "main nav h2",
              defaultValue: "Features",
            },
            lvl2: "main section h2",
            lvl3: "main section h3",
            lvl4: "main section h4",
            lvl5: "main section h5",
            lvl6: "main section h6",
            tags: {
              defaultValue: ["features"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "wooclap",
      pathsToMatch: ["https://www.wooclap.com/de/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "main section h1",
            content: "main section p, main section li",
            lvl0: {
              selectors: "main nav h2",
              defaultValue: "Features",
            },
            lvl2: "main section h2",
            lvl3: "main section h3",
            lvl4: "main section h4",
            lvl5: "main section h5",
            lvl6: "main section h6",
            tags: {
              defaultValue: ["features"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "wooclap",
      pathsToMatch: ["https://docs.wooclap.com/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".content .section__article h1",
            content:
              ".content .section__article p, .content .section__article li, .content .section__article .article__desc",
            lvl0: {
              selectors: "div.breadcrumb > div:nth-child(3) > a",
              defaultValue: "Documentation",
            },
            lvl2: ".content .section__article h2",
            lvl3: ".content .section__article h3",
            lvl4: ".content .section__article h4",
            lvl5: ".content .section__article h5",
            lvl6: ".content .section__article h6",
            tags: {
              defaultValue: ["faq"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "wooclap",
      pathsToMatch: ["https://www.wooclap.com/en/blog/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "h1.entry-title, .entry-content h1",
            content:
              ".entry-content p, .entry-content blockquote, .entry-content li",
            lvl0: {
              selectors: ".bread-navigation > li:nth-child(2) > a",
              defaultValue: "Blog",
            },
            lvl2: ".entry-content h2:not(.cta-content-title)",
            lvl3: ".entry-content h3",
            lvl4: ".entry-content h4",
            lvl5: ".entry-content h5",
            lvl6: ".entry-content h6",
            tags: {
              defaultValue: ["blog"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "wooclap",
      pathsToMatch: ["https://www.wooclap.com/fr/blog/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "h1.entry-title, .entry-content h1",
            content:
              ".entry-content p, .entry-content blockquote, .entry-content li",
            lvl0: {
              selectors: ".bread-navigation > li:nth-child(2) > a",
              defaultValue: "Blog",
            },
            lvl2: ".entry-content h2:not(.cta-content-title)",
            lvl3: ".entry-content h3",
            lvl4: ".entry-content h4",
            lvl5: ".entry-content h5",
            lvl6: ".entry-content h6",
            tags: {
              defaultValue: ["blog"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "wooclap",
      pathsToMatch: ["https://www.wooclap.com/es/blog/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "h1.entry-title, .entry-content h1",
            content:
              ".entry-content p, .entry-content blockquote, .entry-content li",
            lvl0: {
              selectors: ".bread-navigation > li:nth-child(2) > a",
              defaultValue: "Blog",
            },
            lvl2: ".entry-content h2:not(.cta-content-title)",
            lvl3: ".entry-content h3",
            lvl4: ".entry-content h4",
            lvl5: ".entry-content h5",
            lvl6: ".entry-content h6",
            tags: {
              defaultValue: ["blog"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    wooclap: {
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