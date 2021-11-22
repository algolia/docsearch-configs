new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://docs.prebid.org/dev-docs/publisher-api-reference/",
    "https://docs.prebid.org/",
    "https://docs.prebid.org/dev-docs/publisher-api-reference.html",
    "https://docs.prebid.org/prebid/",
    "https://docs.prebid.org/prebid-server/",
    "https://docs.prebid.org/prebid-mobile/",
    "https://docs.prebid.org/adops/",
    "https://docs.prebid.org/dev-docs/",
    "https://docs.prebid.org/faq/",
    "https://docs.prebid.org/dev-docs/faq.html",
    "https://docs.prebid.org/features/",
    "https://docs.prebid.org/formats/",
    "https://docs.prebid.org/overview/",
    "https://docs.prebid.org/prebid-video/",
    "https://docs.prebid.org/support/",
    "https://docs.prebid.org/tools/",
    "https://docs.prebid.org/troubleshooting/",
    "https://docs.prebid.org/videos/",
    "https://docs.prebid.org/cookies.html",
    "https://docs.prebid.org/dev-docs/modules/userId.html",
    "https://docs.prebid.org/prebid/prebidjs.html",
    "https://docs.prebid.org/overview/prebid-server-overview.html",
    "https://docs.prebid.org/dev-docs/getting-started.html",
    "https://docs.prebid.org/overview/intro.html",
    "https://docs.prebid.org/dev-docs/bidder-adaptor.html",
    "https://docs.prebid.org/prebid-server/developers/add-new-bidder-go.html",
    "https://docs.prebid.org/prebid-server/developers/add-new-bidder-java.html",
    "https://docs.prebid.org/prebid-server/developers/pbs-build-an-analytics-adapter.html",
    "https://docs.prebid.org/dev-docs/integrate-with-the-prebid-analytics-api.html",
    "https://docs.prebid.org/dev-docs/add-rtd-submodule.html",
    "https://docs.prebid.org/adops/step-by-step.html",
    "https://docs.prebid.org/dev-docs/modules/consentManagement.html",
    "https://docs.prebid.org/dev-docs/troubleshooting-tips.html",
    "https://docs.prebid.org/dev-docs/show-outstream-video-ads.html",
    "https://docs.prebid.org/adops/send-all-bids-adops.html",
    "https://docs.prebid.org/prebid-video/video-overview.html",
    "https://docs.prebid.org/dev-docs/show-prebid-ads-on-amp-pages.html",
    "https://docs.prebid.org/prebid/native-implementation.html",
    "https://docs.prebid.org/prebid-server/use-cases/pbs-amp.html",
    "https://docs.prebid.org/prebid-server/use-cases/pbs-sdk.html",
    "https://docs.prebid.org/prebid-mobile/prebid-mobile.html",
  ],
  renderJavaScript: false,
  sitemaps: ["https://docs.prebid.org/sitemap.xml"],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://docs.prebid.org/**"],
  schedule: "at 00:40 on Friday",
  actions: [
    {
      indexName: "prebid",
      pathsToMatch: [
        "https://docs.prebid.org/dev-docs/publisher-api-reference/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".pb-content h2",
            content:
              ".pb-content p, .pb-content li, .pb-content td, .pb-content code",
            lvl0: {
              selectors: ".pb-content h1",
            },
            lvl2: ".pb-content h3",
            lvl3: ".pb-content th",
            tags: {
              defaultValue: ["api-reference"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "prebid",
      pathsToMatch: [
        "https://docs.prebid.org/dev-docs/publisher-api-reference.html**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".pb-content h2",
            content:
              ".pb-content p, .pb-content li, .pb-content td, .pb-content code",
            lvl0: {
              selectors: ".pb-content h1",
            },
            lvl2: ".pb-content h3",
            lvl3: ".pb-content th",
            tags: {
              defaultValue: ["api-reference"],
            },
            pageRank: "3",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "prebid",
      pathsToMatch: ["https://docs.prebid.org/prebid/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".pb-content h1",
            content: ".pb-content p, .pb-content li",
            lvl0: {
              selectors: "",
              defaultValue: "Prebid",
            },
            lvl2: ".pb-content h2",
            lvl3: ".pb-content h3",
            lvl4: ".pb-content h4",
            tags: {
              defaultValue: ["prebid"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "prebid",
      pathsToMatch: ["https://docs.prebid.org/prebid-server/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".pb-content h1",
            content: ".pb-content p, .pb-content li",
            lvl0: {
              selectors: "",
              defaultValue: "Prebid Server",
            },
            lvl2: ".pb-content h2",
            lvl3: ".pb-content h3",
            lvl4: ".pb-content h4",
            tags: {
              defaultValue: ["prebid-server"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "prebid",
      pathsToMatch: ["https://docs.prebid.org/prebid-mobile/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".pb-content h1",
            content: ".pb-content p, .pb-content li",
            lvl0: {
              selectors: "",
              defaultValue: "Prebid Mobile",
            },
            lvl2: ".pb-content h2",
            lvl3: ".pb-content h3",
            lvl4: ".pb-content h4",
            tags: {
              defaultValue: ["prebid-mobile"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "prebid",
      pathsToMatch: ["https://docs.prebid.org/adops/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".pb-content h2",
            content: ".pb-content p, .pb-content li",
            lvl0: {
              selectors: ".pb-content h1",
            },
            lvl2: ".pb-content h3",
            tags: {
              defaultValue: ["ad-ops"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "prebid",
      pathsToMatch: ["https://docs.prebid.org/dev-docs/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".pb-content h2",
            content: ".pb-content p, .pb-content li",
            lvl0: {
              selectors: ".pb-content h1",
            },
            lvl2: ".pb-content h3",
            tags: {
              defaultValue: ["dev-docs"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "prebid",
      pathsToMatch: ["https://docs.prebid.org/faq/**", "https://docs.prebid.org/dev-docs/faq.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".pb-content h2",
            content: ".pb-content p, .pb-content li",
            lvl0: {
              selectors: ".pb-content h1",
            },
            lvl2: ".pb-content h3",
            tags: {
              defaultValue: ["faq"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "prebid",
      pathsToMatch: ["https://docs.prebid.org/features/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".pb-content h2",
            content: ".pb-content p, .pb-content li",
            lvl0: {
              selectors: ".pb-content h1",
            },
            lvl2: ".pb-content h3",
            tags: {
              defaultValue: ["features"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "prebid",
      pathsToMatch: ["https://docs.prebid.org/formats/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".pb-content h2",
            content: ".pb-content p, .pb-content li",
            lvl0: {
              selectors: ".pb-content h1",
            },
            lvl2: ".pb-content h3",
            tags: {
              defaultValue: ["formats"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "prebid",
      pathsToMatch: ["https://docs.prebid.org/overview/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".pb-content h2",
            content: ".pb-content p, .pb-content li",
            lvl0: {
              selectors: ".pb-content h1",
            },
            lvl2: ".pb-content h3",
            tags: {
              defaultValue: ["overview"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "prebid",
      pathsToMatch: ["https://docs.prebid.org/prebid-video/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".pb-content h2",
            content: ".pb-content p, .pb-content li",
            lvl0: {
              selectors: ".pb-content h1",
            },
            lvl2: ".pb-content h3",
            tags: {
              defaultValue: ["prebid-video"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "prebid",
      pathsToMatch: ["https://docs.prebid.org/support/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".pb-content h2",
            content: ".pb-content p, .pb-content li",
            lvl0: {
              selectors: ".pb-content h1",
            },
            lvl2: ".pb-content h3",
            tags: {
              defaultValue: ["support"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "prebid",
      pathsToMatch: ["https://docs.prebid.org/tools/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".pb-content h2",
            content: ".pb-content p, .pb-content li",
            lvl0: {
              selectors: ".pb-content h1",
            },
            lvl2: ".pb-content h3",
            tags: {
              defaultValue: ["tools"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "prebid",
      pathsToMatch: ["https://docs.prebid.org/troubleshooting/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".pb-content h2",
            content: ".pb-content p, .pb-content li",
            lvl0: {
              selectors: ".pb-content h1",
            },
            lvl2: ".pb-content h3",
            tags: {
              defaultValue: ["troubleshooting"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "prebid",
      pathsToMatch: ["https://docs.prebid.org/videos/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".pb-content h2",
            content: ".pb-content p, .pb-content li",
            lvl0: {
              selectors: ".pb-content h1",
            },
            lvl2: ".pb-content h3",
            tags: {
              defaultValue: ["videos"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "prebid",
      pathsToMatch: ["https://docs.prebid.org/cookies.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".pb-content h2",
            content: ".pb-content p, .pb-content li",
            lvl0: {
              selectors: ".pb-content h1",
            },
            lvl2: ".pb-content h3",
            tags: {
              defaultValue: ["cookies"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "prebid",
      pathsToMatch: [
        "https://docs.prebid.org/dev-docs/modules/userId.html**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".pb-content h2",
            content: ".pb-content p, .pb-content li",
            lvl0: {
              selectors: ".pb-content h1",
            },
            lvl2: ".pb-content h3",
            pageRank: "1",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "prebid",
      pathsToMatch: [
        "https://docs.prebid.org/prebid/prebidjs.html**/**",
        "https://docs.prebid.org/overview/prebid-server-overview.html**/**",
        "https://docs.prebid.org/dev-docs/getting-started.html**/**",
        "https://docs.prebid.org/overview/intro.html**/**",
        "https://docs.prebid.org/dev-docs/bidder-adaptor.html**/**",
        "https://docs.prebid.org/prebid-server/developers/add-new-bidder-go.html**/**",
        "https://docs.prebid.org/prebid-server/developers/add-new-bidder-java.html**/**",
        "https://docs.prebid.org/prebid-server/developers/pbs-build-an-analytics-adapter.html**/**",
        "https://docs.prebid.org/dev-docs/integrate-with-the-prebid-analytics-api.html**/**",
        "https://docs.prebid.org/dev-docs/add-rtd-submodule.html**/**",
        "https://docs.prebid.org/adops/step-by-step.html**/**",
        "https://docs.prebid.org/dev-docs/faq.html**/**",
        "https://docs.prebid.org/dev-docs/modules/consentManagement.html**/**",
        "https://docs.prebid.org/dev-docs/troubleshooting-tips.html**/**",
        "https://docs.prebid.org/dev-docs/show-outstream-video-ads.html**/**",
        "https://docs.prebid.org/adops/send-all-bids-adops.html**/**",
        "https://docs.prebid.org/prebid-video/video-overview.html**/**",
        "https://docs.prebid.org/dev-docs/show-prebid-ads-on-amp-pages.html**/**",
        "https://docs.prebid.org/prebid/native-implementation.html**/**",
        "https://docs.prebid.org/prebid-mobile/prebid-mobile.html**/**",
    ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".pb-content h2",
            content: ".pb-content p, .pb-content li",
            lvl0: {
              selectors: ".pb-content h1",
            },
            lvl2: ".pb-content h3",
            pageRank: "3",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "prebid",
      pathsToMatch: [
        "https://docs.prebid.org/prebid-server/use-cases/pbs-amp.html**/**",
        "https://docs.prebid.org/prebid-server/use-cases/pbs-sdk.html**/**"
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".pb-content h2",
            content: ".pb-content p, .pb-content li",
            lvl0: {
              selectors: ".pb-content h1",
            },
            lvl2: ".pb-content h3",
            pageRank: "2",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    prebid: {
      attributesForFaceting: ["type", "lang", "tags"],
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