new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://docs.zhinst.com/hdawg_user_manual/",
    "https://docs.zhinst.com/",
    "https://docs.zhinst.com/hf2_user_manual/",
    "https://docs.zhinst.com/labone_programming_manual/",
    "https://docs.zhinst.com/mfia_user_manual/",
    "https://docs.zhinst.com/mfli_user_manual/",
    "https://docs.zhinst.com/pqsc_user_manual/",
    "https://docs.zhinst.com/shfqa_user_manual/",
    "https://docs.zhinst.com/shfsg_user_manual/",
    "https://docs.zhinst.com/uhf_user_manual/",
    "https://docs.zhinst.com/uhfqa_user_manual/",
    "http://docs.pages.zhinst.com/manuals/labone_api/python/",
    "http://docs.pages.zhinst.com/",
    "http://docs.pages.zhinst.com/manuals/labone_api/c/",
    "http://docs.pages.zhinst.com/manuals/labone_api/dotnet/",
    "http://docs.pages.zhinst.com/manuals/labone_api/matlab/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://docs.zhinst.com/sitemap.xml"],
  exclusionPatterns: ["**.txt"],
  ignoreCanonicalTo: false,
  discoveryPatterns: [
    "https://docs.zhinst.com/**",
    "http://docs.pages.zhinst.com/**",
  ],
  schedule: "at 00:10 on Sunday",
  actions: [
    {
      indexName: "zhinst",
      pathsToMatch: ["https://docs.zhinst.com/hdawg_user_manual/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".doc h1",
            content: ".doc p, .doc td.content, .doc th.tableblock",
            lvl0: {
              selectors: "nav.nav-menu h3 a",
              defaultValue: "Zurich Instruments",
            },
            lvl2: ".doc h2",
            lvl3: ".doc h3",
            lvl4: ".doc h4",
            project: {
              defaultValue: ["hdawg_user_manual"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "zhinst",
      pathsToMatch: ["https://docs.zhinst.com/hf2_user_manual/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".doc h1",
            content: ".doc p, .doc td.content, .doc th.tableblock",
            lvl0: {
              selectors: "nav.nav-menu h3 a",
              defaultValue: "Zurich Instruments",
            },
            lvl2: ".doc h2",
            lvl3: ".doc h3",
            lvl4: ".doc h4",
            project: {
              defaultValue: ["hf2_user_manual"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "zhinst",
      pathsToMatch: ["https://docs.zhinst.com/labone_programming_manual/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".doc h1",
            content: ".doc p, .doc td.content, .doc th.tableblock",
            lvl0: {
              selectors: "nav.nav-menu h3 a",
              defaultValue: "Zurich Instruments",
            },
            lvl2: ".doc h2",
            lvl3: ".doc h3",
            lvl4: ".doc h4",
            project: {
              defaultValue: ["labone_programming_manual"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "zhinst",
      pathsToMatch: ["https://docs.zhinst.com/mfia_user_manual/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".doc h1",
            content: ".doc p, .doc td.content, .doc th.tableblock",
            lvl0: {
              selectors: "nav.nav-menu h3 a",
              defaultValue: "Zurich Instruments",
            },
            lvl2: ".doc h2",
            lvl3: ".doc h3",
            lvl4: ".doc h4",
            project: {
              defaultValue: ["mfia_user_manual"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "zhinst",
      pathsToMatch: ["https://docs.zhinst.com/mfli_user_manual/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".doc h1",
            content: ".doc p, .doc td.content, .doc th.tableblock",
            lvl0: {
              selectors: "nav.nav-menu h3 a",
              defaultValue: "Zurich Instruments",
            },
            lvl2: ".doc h2",
            lvl3: ".doc h3",
            lvl4: ".doc h4",
            project: {
              defaultValue: ["mfli_user_manual"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "zhinst",
      pathsToMatch: ["https://docs.zhinst.com/pqsc_user_manual/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".doc h1",
            content: ".doc p, .doc td.content, .doc th.tableblock",
            lvl0: {
              selectors: "nav.nav-menu h3 a",
              defaultValue: "Zurich Instruments",
            },
            lvl2: ".doc h2",
            lvl3: ".doc h3",
            lvl4: ".doc h4",
            project: {
              defaultValue: ["pqsc_user_manual"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "zhinst",
      pathsToMatch: ["https://docs.zhinst.com/shfqa_user_manual/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".doc h1",
            content: ".doc p, .doc td.content, .doc th.tableblock",
            lvl0: {
              selectors: "nav.nav-menu h3 a",
              defaultValue: "Zurich Instruments",
            },
            lvl2: ".doc h2",
            lvl3: ".doc h3",
            lvl4: ".doc h4",
            project: {
              defaultValue: ["shfqa_user_manual"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "zhinst",
      pathsToMatch: ["https://docs.zhinst.com/shfsg_user_manual/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".doc h1",
            content: ".doc p, .doc td.content, .doc th.tableblock",
            lvl0: {
              selectors: "nav.nav-menu h3 a",
              defaultValue: "Zurich Instruments",
            },
            lvl2: ".doc h2",
            lvl3: ".doc h3",
            lvl4: ".doc h4",
            project: {
              defaultValue: ["shfsg_user_manual"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "zhinst",
      pathsToMatch: ["https://docs.zhinst.com/uhf_user_manual/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".doc h1",
            content: ".doc p, .doc td.content, .doc th.tableblock",
            lvl0: {
              selectors: "nav.nav-menu h3 a",
              defaultValue: "Zurich Instruments",
            },
            lvl2: ".doc h2",
            lvl3: ".doc h3",
            lvl4: ".doc h4",
            project: {
              defaultValue: ["uhf_user_manual"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "zhinst",
      pathsToMatch: ["https://docs.zhinst.com/uhfqa_user_manual/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".doc h1",
            content: ".doc p, .doc td.content, .doc th.tableblock",
            lvl0: {
              selectors: "nav.nav-menu h3 a",
              defaultValue: "Zurich Instruments",
            },
            lvl2: ".doc h2",
            lvl3: ".doc h3",
            lvl4: ".doc h4",
            project: {
              defaultValue: ["uhfqa_user_manual"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "zhinst",
      pathsToMatch: [
        "http://docs.pages.zhinst.com/manuals/labone_api/python/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "li.toctree-l1.current.active.has-children > a",
            content: ".section p, .section dl dt, .section div",
            lvl0: {
              selectors: "li.toctree-l1.current.active.nav-item > a",
              defaultValue: "Zurich Instrument",
            },
            lvl2: "li.toctree-l2.current.active > a",
            lvl3: "li.toctree-l3.current.active > a",
            project: {
              defaultValue: ["labone_api/python"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "zhinst",
      pathsToMatch: ["http://docs.pages.zhinst.com/manuals/labone_api/c/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "li.toctree-l1.current.active.has-children > a",
            content: ".section p, .section dl dt, .section div",
            lvl0: {
              selectors: "li.toctree-l1.current.active.nav-item > a",
              defaultValue: "Zurich Instrument",
            },
            lvl2: "li.toctree-l2.current.active > a",
            lvl3: "li.toctree-l3.current.active > a",
            project: {
              defaultValue: ["labone_api/c"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "zhinst",
      pathsToMatch: [
        "http://docs.pages.zhinst.com/manuals/labone_api/dotnet/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "li.toctree-l1.current.active.has-children > a",
            content: ".section p, .section dl dt, .section div",
            lvl0: {
              selectors: "li.toctree-l1.current.active.nav-item > a",
              defaultValue: "Zurich Instrument",
            },
            lvl2: "li.toctree-l2.current.active > a",
            lvl3: "li.toctree-l3.current.active > a",
            project: {
              defaultValue: ["labone_api/dotnet"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "zhinst",
      pathsToMatch: [
        "http://docs.pages.zhinst.com/manuals/labone_api/matlab/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: "li.toctree-l1.current.active.has-children > a",
            content: ".section p, .section dl dt, .section div",
            lvl0: {
              selectors: "li.toctree-l1.current.active.nav-item > a",
              defaultValue: "Zurich Instrument",
            },
            lvl2: "li.toctree-l2.current.active > a",
            lvl3: "li.toctree-l3.current.active > a",
            project: {
              defaultValue: ["labone_api/matlab"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    zhinst: {
      attributesForFaceting: ["type", "lang", "project"],
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