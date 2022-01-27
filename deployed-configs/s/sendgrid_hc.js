new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://sendgrid.com/docs/",
    "https://sendgrid.com/",
    "https://sendgrid.com/docs/glossary/",
    "https://sendgrid.api-docs.io/v3.0",
    "https://sendgrid.api-docs.io/",
    "https://sendgrid.api-docs.io/v3.0/mail-send/v3-mail-send",
    "https://www.twilio.com/docs/sendgrid",
    "https://www.twilio.com/",
    "https://www.twilio.com/docs/sendgrid/api/v2",
    "https://sendgrid.com/docs/ui/sending-email/migrating-from-legacy-marketing-campaigns",
  ],
  renderJavaScript: true,
  sitemaps: ["https://sendgrid.com/docs/sitemap.xml"],
  exclusionPatterns: [
    "https://sendgrid.com/docs/User_Guide**",
    "https://sendgrid.com/docs/User_Guide**/**",
    "https://sendgrid.com/docs/API_Reference**",
    "https://sendgrid.com/docs/API_Reference**/**",
    "https://sendgrid.com/docs/Integrate**",
    "https://sendgrid.com/docs/Integrate**/**",
    "https://sendgrid.com/docs/Classroom**",
    "https://sendgrid.com/docs/Classroom**/**",
    "**/**#**",
    "**/**#**/**",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: [
    "https://sendgrid.com/**",
    "https://sendgrid.api-docs.io/**",
    "https://www.twilio.com/**",
  ],
  schedule: "at 15:00 on Friday",
  actions: [
    {
      indexName: "sendgrid_hc",
      pathsToMatch: ["https://sendgrid.com/docs/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".doc-main h1 + div ul:first-child";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".breadcrumb li:nth-child(3) a",
            content: ".doc-main p, .doc-main li, article p, article li",
            lvl0: {
              selectors: ".breadcrumb li:nth-child(2) a",
              defaultValue: "Documentation",
            },
            lvl2: ".doc-main h1, article h1",
            lvl3: ".doc-main h2, article h2",
            lvl4: ".doc-main h3, article h3",
            lvl5: ".doc-main h4, article h4",
            pageRank: "25",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "sendgrid_hc",
      pathsToMatch: ["https://sendgrid.com/docs/glossary/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".doc-main h1 + div ul:first-child";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".breadcrumb li:nth-child(3) a",
            content: ".doc-main p, .doc-main li, article p, article li",
            lvl0: {
              selectors: ".breadcrumb li:nth-child(2) a",
              defaultValue: "Documentation",
            },
            lvl2: ".doc-main h1, article h1",
            lvl3: ".doc-main h2, article h2",
            lvl4: ".doc-main h3, article h3",
            lvl5: ".doc-main h4, article h4",
            tags: {
              defaultValue: ["glossary"],
            },
            pageRank: "10",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "sendgrid_hc",
      pathsToMatch: ["https://sendgrid.api-docs.io/v3.0**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".doc-main h1 + div ul:first-child";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".DocsGroup h1",
            content: ".DocsGroup p, .DocsGroup li",
            lvl0: {
              selectors: "",
              defaultValue: "API V3",
            },
            lvl2: ".SidebarGroup .MLI.is-active",
            lvl3: ".DocsGroup h3",
            lvl4: ".DocsGroup h4",
            tags: {
              defaultValue: ["v3", "api reference"],
            },
            pageRank: "4",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "sendgrid_hc",
      pathsToMatch: [
        "https://sendgrid.api-docs.io/v3.0/mail-send/v3-mail-send**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".doc-main h1 + div ul:first-child";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".DocsGroup h1",
            content: ".DocsGroup p, .DocsGroup li",
            lvl0: {
              selectors: "",
              defaultValue: "API V3",
            },
            lvl2: ".SidebarGroup .MLI.is-active",
            lvl3: ".DocsGroup h3",
            lvl4: ".DocsGroup h4",
            tags: {
              defaultValue: ["v3", "mail send"],
            },
            pageRank: "3",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "sendgrid_hc",
      pathsToMatch: ["https://www.twilio.com/docs/sendgrid**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".doc-main h1 + div ul:first-child";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h1",
            content: "article p, article li, article td:nth-child(n+3)",
            lvl0: {
              selectors: "",
              defaultValue: "API V2",
            },
            lvl2: "article h2",
            lvl3: "article h3, article td:first-child",
            lvl4: "article h4",
            pageRank: "2",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "sendgrid_hc",
      pathsToMatch: ["https://www.twilio.com/docs/sendgrid/api/v2**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".doc-main h1 + div ul:first-child";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h1",
            content: "article p, article li, article td:nth-child(n+3)",
            lvl0: {
              selectors: "",
              defaultValue: "API V2",
            },
            lvl2: "article h2",
            lvl3: "article h3, article td:first-child",
            lvl4: "article h4",
            tags: {
              defaultValue: ["v2", "api reference"],
            },
            pageRank: "1",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "sendgrid_hc",
      pathsToMatch: [
        "https://sendgrid.com/docs/ui/sending-email/migrating-from-legacy-marketing-campaigns**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".doc-main h1 + div ul:first-child";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".breadcrumb li:nth-child(3) a",
            content: ".doc-main p, .doc-main li, article p, article li",
            lvl0: {
              selectors: ".breadcrumb li:nth-child(2) a",
              defaultValue: "Documentation",
            },
            lvl2: ".doc-main h1, article h1",
            lvl3: ".doc-main h2, article h2",
            lvl4: ".doc-main h3, article h3",
            lvl5: ".doc-main h4, article h4",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    sendgrid_hc: {
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