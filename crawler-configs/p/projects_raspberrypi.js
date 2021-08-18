new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://projects.raspberrypi.org/en/projects/",
    "https://projects.raspberrypi.org/",
    "https://projects.raspberrypi.org/cy-GB/projects/",
    "https://projects.raspberrypi.org/de-DE/projects/",
    "https://projects.raspberrypi.org/es-ES/projects/",
    "https://projects.raspberrypi.org/fr-FR/projects/",
    "https://projects.raspberrypi.org/it-IT/projects/",
    "https://projects.raspberrypi.org/nl-NL/projects/",
    "https://projects.raspberrypi.org/ar-SA/projects/",
    "https://projects.raspberrypi.org/hi-IN/projects/",
    "https://projects.raspberrypi.org/zh-CN/projects/",
  ],
  renderJavaScript: true,
  sitemaps: [],
  exclusionPatterns: ["**/print"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://projects.raspberrypi.org/**"],
  schedule: "at 00:40 on Friday",
  actions: [
    {
      indexName: "projects_raspberrypi",
      pathsToMatch: ["https://projects.raspberrypi.org/en/projects/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".c-project-step-navigation, #additional-information-for-club-leaders, #additional-information-for-club-leaders + p";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".c-project-steps__content > h2, h3.c-project-panel__heading",
            content: ".c-project__content p, .c-project__content li",
            lvl0: {
              selectors: "h1.c-project-header__title",
              defaultValue: "Documentation",
            },
            lvl2:
              ".c-project-steps__content > h3, .c-project-panel__content h2",
            lvl3: ".c-project__content h4",
            lvl4: ".c-project__content h5",
            lang: {
              defaultValue: ["en"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "projects_raspberrypi",
      pathsToMatch: ["https://projects.raspberrypi.org/cy-GB/projects/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".c-project-step-navigation, #additional-information-for-club-leaders, #additional-information-for-club-leaders + p";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".c-project-steps__content > h2, h3.c-project-panel__heading",
            content: ".c-project__content p, .c-project__content li",
            lvl0: {
              selectors: "h1.c-project-header__title",
              defaultValue: "Documentation",
            },
            lvl2:
              ".c-project-steps__content > h3, .c-project-panel__content h2",
            lvl3: ".c-project__content h4",
            lvl4: ".c-project__content h5",
            lang: {
              defaultValue: ["cy-GB"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "projects_raspberrypi",
      pathsToMatch: ["https://projects.raspberrypi.org/de-DE/projects/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".c-project-step-navigation, #additional-information-for-club-leaders, #additional-information-for-club-leaders + p";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".c-project-steps__content > h2, h3.c-project-panel__heading",
            content: ".c-project__content p, .c-project__content li",
            lvl0: {
              selectors: "h1.c-project-header__title",
              defaultValue: "Documentation",
            },
            lvl2:
              ".c-project-steps__content > h3, .c-project-panel__content h2",
            lvl3: ".c-project__content h4",
            lvl4: ".c-project__content h5",
            lang: {
              defaultValue: ["de-DE"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "projects_raspberrypi",
      pathsToMatch: ["https://projects.raspberrypi.org/es-ES/projects/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".c-project-step-navigation, #additional-information-for-club-leaders, #additional-information-for-club-leaders + p";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".c-project-steps__content > h2, h3.c-project-panel__heading",
            content: ".c-project__content p, .c-project__content li",
            lvl0: {
              selectors: "h1.c-project-header__title",
              defaultValue: "Documentation",
            },
            lvl2:
              ".c-project-steps__content > h3, .c-project-panel__content h2",
            lvl3: ".c-project__content h4",
            lvl4: ".c-project__content h5",
            lang: {
              defaultValue: ["es-ES"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "projects_raspberrypi",
      pathsToMatch: ["https://projects.raspberrypi.org/fr-FR/projects/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".c-project-step-navigation, #additional-information-for-club-leaders, #additional-information-for-club-leaders + p";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".c-project-steps__content > h2, h3.c-project-panel__heading",
            content: ".c-project__content p, .c-project__content li",
            lvl0: {
              selectors: "h1.c-project-header__title",
              defaultValue: "Documentation",
            },
            lvl2:
              ".c-project-steps__content > h3, .c-project-panel__content h2",
            lvl3: ".c-project__content h4",
            lvl4: ".c-project__content h5",
            lang: {
              defaultValue: ["fr-FR"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "projects_raspberrypi",
      pathsToMatch: ["https://projects.raspberrypi.org/it-IT/projects/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".c-project-step-navigation, #additional-information-for-club-leaders, #additional-information-for-club-leaders + p";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".c-project-steps__content > h2, h3.c-project-panel__heading",
            content: ".c-project__content p, .c-project__content li",
            lvl0: {
              selectors: "h1.c-project-header__title",
              defaultValue: "Documentation",
            },
            lvl2:
              ".c-project-steps__content > h3, .c-project-panel__content h2",
            lvl3: ".c-project__content h4",
            lvl4: ".c-project__content h5",
            lang: {
              defaultValue: ["it-IT"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "projects_raspberrypi",
      pathsToMatch: ["https://projects.raspberrypi.org/nl-NL/projects/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".c-project-step-navigation, #additional-information-for-club-leaders, #additional-information-for-club-leaders + p";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".c-project-steps__content > h2, h3.c-project-panel__heading",
            content: ".c-project__content p, .c-project__content li",
            lvl0: {
              selectors: "h1.c-project-header__title",
              defaultValue: "Documentation",
            },
            lvl2:
              ".c-project-steps__content > h3, .c-project-panel__content h2",
            lvl3: ".c-project__content h4",
            lvl4: ".c-project__content h5",
            lang: {
              defaultValue: ["nl-NL"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "projects_raspberrypi",
      pathsToMatch: ["https://projects.raspberrypi.org/ar-SA/projects/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".c-project-step-navigation, #additional-information-for-club-leaders, #additional-information-for-club-leaders + p";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".c-project-steps__content > h2, h3.c-project-panel__heading",
            content: ".c-project__content p, .c-project__content li",
            lvl0: {
              selectors: "h1.c-project-header__title",
              defaultValue: "Documentation",
            },
            lvl2:
              ".c-project-steps__content > h3, .c-project-panel__content h2",
            lvl3: ".c-project__content h4",
            lvl4: ".c-project__content h5",
            lang: {
              defaultValue: ["ar-SA"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "projects_raspberrypi",
      pathsToMatch: ["https://projects.raspberrypi.org/hi-IN/projects/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".c-project-step-navigation, #additional-information-for-club-leaders, #additional-information-for-club-leaders + p";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".c-project-steps__content > h2, h3.c-project-panel__heading",
            content: ".c-project__content p, .c-project__content li",
            lvl0: {
              selectors: "h1.c-project-header__title",
              defaultValue: "Documentation",
            },
            lvl2:
              ".c-project-steps__content > h3, .c-project-panel__content h2",
            lvl3: ".c-project__content h4",
            lvl4: ".c-project__content h5",
            lang: {
              defaultValue: ["hi-IN"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "projects_raspberrypi",
      pathsToMatch: ["https://projects.raspberrypi.org/zh-CN/projects/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".c-project-step-navigation, #additional-information-for-club-leaders, #additional-information-for-club-leaders + p";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".c-project-steps__content > h2, h3.c-project-panel__heading",
            content: ".c-project__content p, .c-project__content li",
            lvl0: {
              selectors: "h1.c-project-header__title",
              defaultValue: "Documentation",
            },
            lvl2:
              ".c-project-steps__content > h3, .c-project-panel__content h2",
            lvl3: ".c-project__content h4",
            lvl4: ".c-project__content h5",
            lang: {
              defaultValue: ["zh-CN"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    projects_raspberrypi: {
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