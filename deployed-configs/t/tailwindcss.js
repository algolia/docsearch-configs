new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://tailwindcss.com/",
    "https://tailwindcss.com/community",
    "https://v1.tailwindcss.com/",
    "https://tailwindcss-v0.netlify.app/docs/",
    "https://tailwindcss-v0.netlify.app/",
    "https://tailwindcss-v0.netlify.app//docs/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: [
    "https://tailwindcss.com/**",
    "https://v1.tailwindcss.com/**",
    "https://tailwindcss-v0.netlify.app/**",
  ],
  schedule: "at 19:00 on Friday",
  actions: [
    {
      indexName: "tailwindcss",
      pathsToMatch: ["https://tailwindcss.com/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          "p.text-base, .list-inside, .bg-gray-200, [data-docsearch-ignore]";
        $(toRemove).remove();
        const lvl0 = $("#nav .text-cyan-700").parent().parent().siblings().text();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#content-wrapper h1",
            content:
              "#content-wrapper > p, #content-wrapper > ul li, #content-wrapper td:not(:first-child), #content-wrapper .text-gray-600",
            lvl0: {
              selectors: "",
              defaultValue: lvl0,
            },
            lvl2: "#content-wrapper h2",
            lvl3: "#content-wrapper h3",
            lvl4: "#content-wrapper h4, #content-wrapper td:first-child",
            lvl5: "#content-wrapper h5",
            version: {
              defaultValue: ["v2"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "tailwindcss",
      pathsToMatch: ["https://tailwindcss.com/community**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          "p.text-base, .list-inside, .bg-gray-200, [data-docsearch-ignore]";
        $(toRemove).remove();
        const lvl0 = $("#nav .text-cyan-700").parent().parent().siblings().text();

        return helpers.docsearch({
          recordProps: {
            lvl1: "#content-wrapper h1",
            content:
              "#content-wrapper > p, #content-wrapper > ul li, #content-wrapper td:not(:first-child), #content-wrapper .text-gray-600",
            lvl0: {
              selectors: "",
              defaultValue: lvl0,
            },
            lvl2: "#content-wrapper h2",
            lvl3: "#content-wrapper h3",
            lvl4: "#content-wrapper h4, #content-wrapper td:first-child",
            lvl5: "#content-wrapper h5",
            version: {
              defaultValue: ["v2"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "tailwindcss",
      pathsToMatch: ["https://v1.tailwindcss.com/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          "p.text-base, .list-inside, .bg-gray-200, [data-docsearch-ignore]";
        $(toRemove).remove();
        const lvl0 = $("#nav .opacity-25").parent().parent().parent().siblings().text();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".markdown h1",
            content:
              ".markdown > p, .markdown > ul li, .markdown td:not(:first-child), .markdown .text-gray-600",
            lvl0: {
              selectors: "",
              defaultValue: lvl0,
            },
            lvl2: ".markdown h2",
            lvl3: ".markdown h3",
            lvl4: ".markdown h4, .markdown td:first-child",
            lvl5: ".markdown h5",
            version: {
              defaultValue: ["v1"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "tailwindcss",
      pathsToMatch: ["https://tailwindcss-v0.netlify.app/docs/**", "https://tailwindcss-v0.netlify.app//docs/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          "p.text-base, .list-inside, .bg-gray-200, [data-docsearch-ignore]";
        $(toRemove).remove();
        const lvl0 = $("#nav a[class*='font-semibold']").parent().parent().siblings().text();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".markdown h1",
            content:
              ".markdown > p, .markdown > ul li, .markdown td:first-child, .markdown .text-xl",
            lvl0: {
              selectors: "",
              defaultValue: lvl0,
            },
            lvl2: ".markdown h2",
            lvl3: ".markdown h3",
            lvl4: ".markdown h4",
            lvl5: ".markdown h5",
            version: {
              defaultValue: ["v0"],
            },
          },
          indexHeadings: true,
        });
      },
    }
  ],
  initialIndexSettings: {
    tailwindcss: {
      attributesForFaceting: ["type", "lang", "version", "tags"],
      attributesToRetrieve: [
        "hierarchy",
        "content",
        "anchor",
        "url",
        "url_without_anchor",
        "type",
      ],
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
      separatorsToIndex: "@_",
    },
  },
});