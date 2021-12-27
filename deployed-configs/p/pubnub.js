new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://www.pubnub.com/docs/(javascript|nodejs)/",
    "https://www.pubnub.com/",
    "https://www.pubnub.com/docs/(android|java)/",
    "https://www.pubnub.com/docs/swift/",
    "https://www.pubnub.com/docs/objective-c/",
    "https://www.pubnub.com/docs/c-sharp/",
    "https://www.pubnub.com/docs/python/",
    "https://www.pubnub.com/docs/c-core/(posix-cpp|windows-cpp|posix-c|windows-c|freertos|mbed)/",
    "https://www.pubnub.com/docs/unity/",
    "https://www.pubnub.com/docs/ruby/",
    "https://www.pubnub.com/docs/go/",
    "https://www.pubnub.com/docs/chat/",
    "https://www.pubnub.com/docs/blocks-catalog/",
    "https://www.pubnub.com/docs/rest-api/",
    "https://www.pubnub.com/docs/console/",
    "https://www.pubnub.com/docs/platform/functions/",
    "https://www.pubnub.com/docs/platform/",
    "https://www.pubnub.com/docs/",
  ],
  renderJavaScript: false,
  sitemaps: [
    "https://www.pubnub.com/docs/chat/sitemap.xml",
    "https://www.pubnub.com/docs/sdks/sitemap.xml",
    "https://www.pubnub.com/docs/sitemap.xml",
  ],
  exclusionPatterns: ["**/**-sdk-v3"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://www.pubnub.com/**"],
  schedule: "at 00:40 on Friday",
  actions: [
    {
      indexName: "pubnub",
      pathsToMatch: ["https://www.pubnub.com/docs/(javascript|nodejs)/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".hidden, .information, [id^='unify']:not(.unify-active), #slct-lng, .block-categories, .btn, .slct-sub-lng, .unify-header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrapper .post p",
            content: ".wrapper .post p, .wrapper .post li",
            lvl0: {
              selectors: "h1.postHeaderTitle",
            },
            lvl2: ".content .content h2",
            lvl3: ".content .content h3",
            lvl4: ".content .content h4",
            lvl5: ".content .content h5",
            lvl6: ".content .content h6",
            tags: {
              defaultValue: ["js", "javascript", "nodejs"],
            },
            pageRank: "1",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "pubnub",
      pathsToMatch: ["https://www.pubnub.com/docs/(android|java)/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".hidden, .information, [id^='unify']:not(.unify-active), #slct-lng, .block-categories, .btn, .slct-sub-lng, .unify-header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrapper .post p",
            content: ".wrapper .post p, .wrapper .post li",
            lvl0: {
              selectors: "h1.postHeaderTitle",
            },
            lvl2: ".content .content h2",
            lvl3: ".content .content h3",
            lvl4: ".content .content h4",
            lvl5: ".content .content h5",
            lvl6: ".content .content h6",
            tags: {
              defaultValue: ["java", "android"],
            },
            pageRank: "2",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "pubnub",
      pathsToMatch: ["https://www.pubnub.com/docs/swift/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".hidden, .information, [id^='unify']:not(.unify-active), #slct-lng, .block-categories, .btn, .slct-sub-lng, .unify-header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrapper .post p",
            content: ".wrapper .post p, .wrapper .post li",
            lvl0: {
              selectors: "h1.postHeaderTitle",
            },
            lvl2: ".content .content h2",
            lvl3: ".content .content h3",
            lvl4: ".content .content h4",
            lvl5: ".content .content h5",
            lvl6: ".content .content h6",
            tags: {
              defaultValue: ["swift", "ios", "iOS", "swift iOS", "swift cocoa"],
            },
            pageRank: "3",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "pubnub",
      pathsToMatch: ["https://www.pubnub.com/docs/objective-c/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".hidden, .information, [id^='unify']:not(.unify-active), #slct-lng, .block-categories, .btn, .slct-sub-lng, .unify-header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrapper .post p",
            content: ".wrapper .post p, .wrapper .post li",
            lvl0: {
              selectors: "h1.postHeaderTitle",
            },
            lvl2: ".content .content h2",
            lvl3: ".content .content h3",
            lvl4: ".content .content h4",
            lvl5: ".content .content h5",
            lvl6: ".content .content h6",
            tags: {
              defaultValue: ["objective-c", "ios", "iOS", "cocoa"],
            },
            pageRank: "4",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "pubnub",
      pathsToMatch: ["https://www.pubnub.com/docs/c-sharp/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".hidden, .information, [id^='unify']:not(.unify-active), #slct-lng, .block-categories, .btn, .slct-sub-lng, .unify-header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrapper .post p",
            content: ".wrapper .post p, .wrapper .post li",
            lvl0: {
              selectors: "h1.postHeaderTitle",
            },
            lvl2: ".content .content h2",
            lvl3: ".content .content h3",
            lvl4: ".content .content h4",
            lvl5: ".content .content h5",
            lvl6: ".content .content h6",
            tags: {
              defaultValue: ["c#", "c-sharp"],
            },
            pageRank: "5",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "pubnub",
      pathsToMatch: ["https://www.pubnub.com/docs/python/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".hidden, .information, [id^='unify']:not(.unify-active), #slct-lng, .block-categories, .btn, .slct-sub-lng, .unify-header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrapper .post p",
            content: ".wrapper .post p, .wrapper .post li",
            lvl0: {
              selectors: "h1.postHeaderTitle",
            },
            lvl2: ".content .content h2",
            lvl3: ".content .content h3",
            lvl4: ".content .content h4",
            lvl5: ".content .content h5",
            lvl6: ".content .content h6",
            tags: {
              defaultValue: ["python"],
            },
            pageRank: "6",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "pubnub",
      pathsToMatch: [
        "https://www.pubnub.com/docs/c-core/(posix-cpp|windows-cpp|posix-c|windows-c|freertos|mbed)/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".hidden, .information, [id^='unify']:not(.unify-active), #slct-lng, .block-categories, .btn, .slct-sub-lng, .unify-header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrapper .post p",
            content: ".wrapper .post p, .wrapper .post li",
            lvl0: {
              selectors: "h1.postHeaderTitle",
            },
            lvl2: ".content .content h2",
            lvl3: ".content .content h3",
            lvl4: ".content .content h4",
            lvl5: ".content .content h5",
            lvl6: ".content .content h6",
            tags: {
              defaultValue: ["c", "c-core", "windows c", "posix c", "c++"],
            },
            pageRank: "7",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "pubnub",
      pathsToMatch: ["https://www.pubnub.com/docs/unity/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".hidden, .information, [id^='unify']:not(.unify-active), #slct-lng, .block-categories, .btn, .slct-sub-lng, .unify-header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrapper .post p",
            content: ".wrapper .post p, .wrapper .post li",
            lvl0: {
              selectors: "h1.postHeaderTitle",
            },
            lvl2: ".content .content h2",
            lvl3: ".content .content h3",
            lvl4: ".content .content h4",
            lvl5: ".content .content h5",
            lvl6: ".content .content h6",
            tags: {
              defaultValue: ["unity"],
            },
            pageRank: "8",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "pubnub",
      pathsToMatch: ["https://www.pubnub.com/docs/ruby/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".hidden, .information, [id^='unify']:not(.unify-active), #slct-lng, .block-categories, .btn, .slct-sub-lng, .unify-header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrapper .post p",
            content: ".wrapper .post p, .wrapper .post li",
            lvl0: {
              selectors: "h1.postHeaderTitle",
            },
            lvl2: ".content .content h2",
            lvl3: ".content .content h3",
            lvl4: ".content .content h4",
            lvl5: ".content .content h5",
            lvl6: ".content .content h6",
            tags: {
              defaultValue: ["ruby"],
            },
            pageRank: "9",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "pubnub",
      pathsToMatch: ["https://www.pubnub.com/docs/go/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".hidden, .information, [id^='unify']:not(.unify-active), #slct-lng, .block-categories, .btn, .slct-sub-lng, .unify-header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrapper .post p",
            content: ".wrapper .post p, .wrapper .post li",
            lvl0: {
              selectors: "h1.postHeaderTitle",
            },
            lvl2: ".content .content h2",
            lvl3: ".content .content h3",
            lvl4: ".content .content h4",
            lvl5: ".content .content h5",
            lvl6: ".content .content h6",
            tags: {
              defaultValue: ["go", "golang"],
            },
            pageRank: "10",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "pubnub",
      pathsToMatch: ["https://www.pubnub.com/docs/chat/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".hidden, .information, [id^='unify']:not(.unify-active), #slct-lng, .block-categories, .btn, .slct-sub-lng, .unify-header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrapper .post p",
            content: ".wrapper .post p, .wrapper .post li",
            lvl0: {
              selectors: "h1.postHeaderTitle",
            },
            lvl2: ".content .content h2",
            lvl3: ".content .content h3",
            lvl4: ".content .content h4",
            lvl5: ".content .content h5",
            lvl6: ".content .content h6",
            tags: {
              defaultValue: ["chat", "chat documentation"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "pubnub",
      pathsToMatch: ["https://www.pubnub.com/docs/blocks-catalog/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".hidden, .information, [id^='unify']:not(.unify-active), #slct-lng, .block-categories, .btn, .slct-sub-lng, .unify-header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "div.sub-heading",
            content: "div.block-detail",
            lvl0: {
              selectors: "h1.block-page-title",
            },
            lvl2: ".content .content h2",
            lvl3: ".content .content h3",
            lvl4: ".content .content h4",
            lvl5: ".content .content h5",
            lvl6: ".content .content h6",
            tags: {
              defaultValue: ["blocks catalog", "blocks"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "pubnub",
      pathsToMatch: ["https://www.pubnub.com/docs/rest-api/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".hidden, .information, [id^='unify']:not(.unify-active), #slct-lng, .block-categories, .btn, .slct-sub-lng, .unify-header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h1.main-page-title",
            content: "h1.main-page-title",
            lvl0: {
              selectors: "h1.page-title",
            },
            lvl2: ".content .content h2",
            lvl3: ".content .content h3",
            lvl4: ".content .content h4",
            lvl5: ".content .content h5",
            lvl6: ".content .content h6",
            tags: {
              defaultValue: ["rest", "rest api", "rest api docs", "rest docs"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "pubnub",
      pathsToMatch: ["https://www.pubnub.com/docs/console/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".hidden, .information, [id^='unify']:not(.unify-active), #slct-lng, .block-categories, .btn, .slct-sub-lng, .unify-header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h1.main-page-title",
            content: "h1.main-page-title",
            lvl0: {
              selectors: "a[title=Developer]",
            },
            lvl2: ".content .content h2",
            lvl3: ".content .content h3",
            lvl4: ".content .content h4",
            lvl5: ".content .content h5",
            lvl6: ".content .content h6",
            tags: {
              defaultValue: ["console", "developer console", "Debug Console"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "pubnub",
      pathsToMatch: ["https://www.pubnub.com/docs/platform/functions/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".hidden, .information, [id^='unify']:not(.unify-active), #slct-lng, .block-categories, .btn, .slct-sub-lng, .unify-header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "div.field-item.even p",
            content: "h1.main-page-title",
            lvl0: {
              selectors: "h1.page-title",
            },
            lvl2: ".content .content h2",
            lvl3: ".content .content h3",
            lvl4: ".content .content h4",
            lvl5: ".content .content h5",
            lvl6: ".content .content h6",
            tags: {
              defaultValue: ["functions"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "pubnub",
      pathsToMatch: ["https://www.pubnub.com/docs/platform/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".hidden, .information, [id^='unify']:not(.unify-active), #slct-lng, .block-categories, .btn, .slct-sub-lng, .unify-header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrapper .post p",
            content: ".wrapper .post p, .wrapper .post li",
            lvl0: {
              selectors: "h1.postHeaderTitle",
            },
            lvl2: ".content .content h2",
            lvl3: ".content .content h3",
            lvl4: ".content .content h4",
            lvl5: ".content .content h5",
            lvl6: ".content .content h6",
            tags: {
              defaultValue: ["platform docs", "platform"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "pubnub",
      pathsToMatch: ["https://www.pubnub.com/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".hidden, .information, [id^='unify']:not(.unify-active), #slct-lng, .block-categories, .btn, .slct-sub-lng, .unify-header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrapper .post p",
            content: ".wrapper .post p, .wrapper .post li",
            lvl0: {
              selectors: "h1.postHeaderTitle",
            },
            lvl2: ".content .content h2",
            lvl3: ".content .content h3",
            lvl4: ".content .content h4",
            lvl5: ".content .content h5",
            lvl6: ".content .content h6",
            tags: {
              defaultValue: ["docs", "documentation"],
            },
            pageRank: "11",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    pubnub: {
      attributesForFaceting: ["type", "lang", "tags", "sdk"],
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