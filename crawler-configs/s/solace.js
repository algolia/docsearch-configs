new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://docs.solace.com/Security/Security-Solace.htm",
    "https://docs.solace.com/",
    "https://docs.solace.com/Solace-PubSub-Event-Reference/event_ref_boiler",
    "https://docs.solace.com/Solace-CLI/CLI-Reference/VMR_CLI_Commands",
    "https://docs.solace.com/Solace-CLI/CLI-Reference/APPL_CLI_Commands.html",
    "https://docs.solace.com/API-Developer-Online-Ref-Documentation/c/",
    "https://docs.solace.com/API-Developer-Online-Ref-Documentation/net/",
    "https://docs.solace.com/API-Developer-Online-Ref-Documentation/jrto/",
    "https://docs.solace.com/API-Developer-Online-Ref-Documentation/java/",
    "https://docs.solace.com/API-Developer-Online-Ref-Documentation/",
    "https://docs.solace.com/Solace-PubSub-Messaging-APIs/API-Developer-Guide/Java-API-Best-Practices.htm",
  ],
  renderJavaScript: true,
  sitemaps: ["https://docs.solace.com/Sitemap.xml"],
  exclusionPatterns: [
    "**/API-Developer-Online-Ref-Documentation/java/index-all.html",
    "**/**-example.html",
    "**.js",
    "**.png",
    "**.gif",
    "**.png",
    "**/**Not-Found.htm**",
    "**/**Not-Found.htm**/**",
    "**/**jcsmp/class-use/**",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://docs.solace.com/**"],
  schedule: "at 15:30 on Friday",
  actions: [
    {
      indexName: "solace",
      pathsToMatch: [
        "https://docs.solace.com/Security/Security-Solace.htm**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "[class^=Code_Snippet], [summary], .cli-tree";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#contentBody div h1",
            content: "#contentBody div p, #contentBody div li, .sample_snippet",
            lvl0: {
              selectors: "",
            },
            lvl2: "#contentBody div h2",
            lvl3: "#contentBody div h3",
            lvl4: "#contentBody div h4",
            lvl5: "#contentBody div h5",
            lvl6: "#contentBody div h6",
            tags: {
              defaultValue: ["docs"],
            },
            pageRank: "200",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "solace",
      pathsToMatch: [
        "https://docs.solace.com/Solace-PubSub-Event-Reference/event_ref_boiler**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "[class^=Code_Snippet], [summary], .cli-tree";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".full_section h2",
            content:
              ".event_inner_div .event_description, .event_inner_div .event_recommended_actions",
            lvl0: {
              selectors: "",
            },
            lvl2: ".module_div > h3",
            lvl3: ".module_div > .event_outer_div h3",
            lvl4: ".event_inner_div [class='event_label']",
            tags: {
              defaultValue: ["event_reference_guide"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "solace",
      pathsToMatch: [
        "https://docs.solace.com/Solace-CLI/CLI-Reference/VMR_CLI_Commands**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "[class^=Code_Snippet], [summary], .cli-tree";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".book-title",
            content:
              "blockquote li, blockquote p, .cmd-help td:first-child, .cmd-help td:last-child, .cmd-help-text",
            lvl0: {
              selectors: "",
            },
            lvl2: ".section-title,blockquote h2",
            lvl3: "blockquote h3,.cmd-section-title",
            lvl4: "blockquote h4",
            lvl5: "blockquote h5",
            tags: {
              defaultValue: ["cli_command", "vmr"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "solace",
      pathsToMatch: [
        "https://docs.solace.com/Solace-CLI/CLI-Reference/APPL_CLI_Commands.html**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "[class^=Code_Snippet], [summary], .cli-tree";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".book-title",
            content:
              "blockquote li, blockquote p, .cmd-help td:first-child, .cmd-help td:last-child, .cmd-help-text",
            lvl0: {
              selectors: "",
            },
            lvl2: ".section-title,blockquote h2",
            lvl3: "blockquote h3,.cmd-section-title",
            lvl4: "blockquote h4",
            lvl5: "blockquote h5",
            tags: {
              defaultValue: ["cli_command", "appl"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "solace",
      pathsToMatch: [
        "https://docs.solace.com/API-Developer-Online-Ref-Documentation/c/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "[class^=Code_Snippet], [summary], .cli-tree";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content: ".contents p, .contents li",
            lvl0: {
              selectors: "",
            },
            lvl2: ".contents h1",
            lvl3: ".contents h2",
            lvl4: ".contents h3,.contents  td.memname",
            lvl5: ".contents h4",
            lvl6: ".contents h5",
            tags: {
              defaultValue: ["api_reference_guide", "c"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "solace",
      pathsToMatch: [
        "https://docs.solace.com/API-Developer-Online-Ref-Documentation/net/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "[class^=Code_Snippet], [summary], .cli-tree";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "",
            content: ".topicContent > p, .topicContent > .summary",
            lvl0: {
              selectors: "",
            },
            lvl2: ".titleColumn h1",
            tags: {
              defaultValue: ["api_reference_guide", "net"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "solace",
      pathsToMatch: [
        "https://docs.solace.com/API-Developer-Online-Ref-Documentation/jrto/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "[class^=Code_Snippet], [summary], .cli-tree";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".header h2.title",
            content: ".contentContainer .block, .details dd",
            lvl0: {
              selectors: "",
            },
            lvl2: ".details h3",
            lvl3: ".details h4",
            lvl4: ".details dt",
            tags: {
              defaultValue: ["api_reference_guide", "jrto"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "solace",
      pathsToMatch: [
        "https://docs.solace.com/API-Developer-Online-Ref-Documentation/java/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "[class^=Code_Snippet], [summary], .cli-tree";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".header h2.title",
            content: ".contentContainer .block, .details dd",
            lvl0: {
              selectors: "",
            },
            lvl2: ".details h3",
            lvl3: ".details h4",
            lvl4: ".details dt",
            tags: {
              defaultValue: ["api_reference_guide", "java"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "solace",
      pathsToMatch: [
        "https://docs.solace.com/API-Developer-Online-Ref-Documentation/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "[class^=Code_Snippet], [summary], .cli-tree";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".header h2.title",
            content: ".contentContainer .block, .details dd",
            lvl0: {
              selectors: "",
            },
            lvl2: ".details h3",
            lvl3: ".details h4",
            lvl4: ".details dt",
            tags: {
              defaultValue: ["api_reference_guide"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "solace",
      pathsToMatch: ["https://docs.solace.com/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "[class^=Code_Snippet], [summary], .cli-tree";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#contentBody div h1",
            content: "#contentBody div p, #contentBody div li, .sample_snippet",
            lvl0: {
              selectors: "",
            },
            lvl2: "#contentBody div h2",
            lvl3: "#contentBody div h3",
            lvl4: "#contentBody div h4",
            lvl5: "#contentBody div h5",
            lvl6: "#contentBody div h6",
            tags: {
              defaultValue: ["docs"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "solace",
      pathsToMatch: [
        "https://docs.solace.com/Solace-PubSub-Messaging-APIs/API-Developer-Guide/Java-API-Best-Practices.htm**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "[class^=Code_Snippet], [summary], .cli-tree";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#contentBody div h1",
            content: "#contentBody div p, #contentBody div li, .sample_snippet",
            lvl0: {
              selectors: "",
            },
            lvl2: "#contentBody div h2",
            lvl3: "#contentBody div h3",
            lvl4: "#contentBody div h4",
            lvl5: "#contentBody div h5",
            lvl6: "#contentBody div h6",
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    solace: {
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