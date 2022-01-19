new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://cloudinary.com/documentation/image_transformations",
    "https://cloudinary.com/",
    "https://cloudinary.com/documentation/video_manipulation_and_delivery",
    "https://cloudinary.com/documentation/upload_images",
    "https://cloudinary.com/documentation/upload_videos",
    "https://cloudinary.com/documentation/image_upload_api_reference",
    "https://cloudinary.com/documentation/image_transformation_reference",
    "https://cloudinary.com/documentation/video_transformation_reference",
    "https://cloudinary.com/documentation/admin_api",
    "https://cloudinary.com/documentation/search_api",
    "https://cloudinary.com/documentation/image_optimization",
    "https://cloudinary.com/documentation/responsive_images",
    "https://cloudinary.com/documentation/upload_widget",
    "https://cloudinary.com/documentation/product_gallery",
    "https://cloudinary.com/documentation/cloudinary_video_player",
    "https://cloudinary.com/documentation/how_to_integrate_cloudinary",
    "https://cloudinary.com/documentation/dam_advanced_search",
    "https://cloudinary.com/documentation/dam_manage_individual_assets",
    "https://cloudinary.com/documentation/video_player_api_reference",
    "https://cloudinary.com/documentation/product_gallery_reference",
    "https://cloudinary.com/documentation/",
  ],
  renderJavaScript: true,
  sitemaps: ["https://cloudinary.com/sitemap.xml"],
  exclusionPatterns: [
    "https://cloudinary.com/documentation/upload_widget_1**",
    "https://cloudinary.com/documentation/upload_widget_1**/**",
    "https://cloudinary.com/documentation/sdks/***",
    "https://cloudinary.com/documentation/sdks/***/**",
    "**.txt",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://cloudinary.com/**"],
  schedule: "at 11:20 on Tuesday",
  actions: [
    {
      indexName: "cloudinary",
      pathsToMatch: [
        "https://cloudinary.com/documentation/image_transformations**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".md_autotoc:not(.md_special)";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs_content h1",
            content: "",
            lvl0: {
              selectors: ".breadcrumbs li:nth-child(3) a",
              defaultValue: "Documentation",
            },
            lvl2: ".docs_content h2",
            lvl3: ".docs_content h3",
            lvl4: ".docs_content h4, .docs_content tbody td:first-child",
            lvl5: ".docs_content h5",
            pageRank: "3",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "cloudinary",
      pathsToMatch: [
        "https://cloudinary.com/documentation/video_manipulation_and_delivery**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".md_autotoc:not(.md_special)";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs_content h1",
            content: "",
            lvl0: {
              selectors: ".breadcrumbs li:nth-child(3) a",
              defaultValue: "Documentation",
            },
            lvl2: ".docs_content h2",
            lvl3: ".docs_content h3",
            lvl4: ".docs_content h4, .docs_content tbody td:first-child",
            lvl5: ".docs_content h5",
            pageRank: "3",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "cloudinary",
      pathsToMatch: ["https://cloudinary.com/documentation/upload_images**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".md_autotoc:not(.md_special)";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs_content h1",
            content: "",
            lvl0: {
              selectors: ".breadcrumbs li:nth-child(3) a",
              defaultValue: "Documentation",
            },
            lvl2: ".docs_content h2",
            lvl3: ".docs_content h3",
            lvl4: ".docs_content h4, .docs_content tbody td:first-child",
            lvl5: ".docs_content h5",
            pageRank: "3",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "cloudinary",
      pathsToMatch: ["https://cloudinary.com/documentation/upload_videos**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".md_autotoc:not(.md_special)";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs_content h1",
            content: "",
            lvl0: {
              selectors: ".breadcrumbs li:nth-child(3) a",
              defaultValue: "Documentation",
            },
            lvl2: ".docs_content h2",
            lvl3: ".docs_content h3",
            lvl4: ".docs_content h4, .docs_content tbody td:first-child",
            lvl5: ".docs_content h5",
            pageRank: "3",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "cloudinary",
      pathsToMatch: [
        "https://cloudinary.com/documentation/image_upload_api_reference**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".md_autotoc:not(.md_special)";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs_content h1",
            content: "",
            lvl0: {
              selectors: ".breadcrumbs li:nth-child(3) a",
              defaultValue: "Documentation",
            },
            lvl2: ".docs_content h2",
            lvl3: ".docs_content h3",
            lvl4: ".docs_content h4, .docs_content tbody td:first-child",
            lvl5: ".docs_content h5",
            pageRank: "3",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "cloudinary",
      pathsToMatch: [
        "https://cloudinary.com/documentation/image_transformation_reference**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".md_autotoc:not(.md_special)";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs_content h1",
            content: "",
            lvl0: {
              selectors: ".breadcrumbs li:nth-child(3) a",
              defaultValue: "Documentation",
            },
            lvl2: ".docs_content h2",
            lvl3: ".docs_content h3",
            lvl4: ".docs_content h4, .docs_content tbody td:first-child",
            lvl5: ".docs_content h5",
            pageRank: "3",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "cloudinary",
      pathsToMatch: [
        "https://cloudinary.com/documentation/video_transformation_reference**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".md_autotoc:not(.md_special)";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs_content h1",
            content: "",
            lvl0: {
              selectors: ".breadcrumbs li:nth-child(3) a",
              defaultValue: "Documentation",
            },
            lvl2: ".docs_content h2",
            lvl3: ".docs_content h3",
            lvl4: ".docs_content h4, .docs_content tbody td:first-child",
            lvl5: ".docs_content h5",
            pageRank: "3",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "cloudinary",
      pathsToMatch: ["https://cloudinary.com/documentation/admin_api**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".md_autotoc:not(.md_special)";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs_content h1",
            content: "",
            lvl0: {
              selectors: ".breadcrumbs li:nth-child(3) a",
              defaultValue: "Documentation",
            },
            lvl2: ".docs_content h2",
            lvl3: ".docs_content h3",
            lvl4: ".docs_content h4, .docs_content tbody td:first-child",
            lvl5: ".docs_content h5",
            pageRank: "2",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "cloudinary",
      pathsToMatch: ["https://cloudinary.com/documentation/search_api**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".md_autotoc:not(.md_special)";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs_content h1",
            content: "",
            lvl0: {
              selectors: ".breadcrumbs li:nth-child(3) a",
              defaultValue: "Documentation",
            },
            lvl2: ".docs_content h2",
            lvl3: ".docs_content h3",
            lvl4: ".docs_content h4, .docs_content tbody td:first-child",
            lvl5: ".docs_content h5",
            pageRank: "2",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "cloudinary",
      pathsToMatch: [
        "https://cloudinary.com/documentation/image_optimization**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".md_autotoc:not(.md_special)";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs_content h1",
            content: "",
            lvl0: {
              selectors: ".breadcrumbs li:nth-child(3) a",
              defaultValue: "Documentation",
            },
            lvl2: ".docs_content h2",
            lvl3: ".docs_content h3",
            lvl4: ".docs_content h4, .docs_content tbody td:first-child",
            lvl5: ".docs_content h5",
            pageRank: "2",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "cloudinary",
      pathsToMatch: [
        "https://cloudinary.com/documentation/responsive_images**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".md_autotoc:not(.md_special)";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs_content h1",
            content: "",
            lvl0: {
              selectors: ".breadcrumbs li:nth-child(3) a",
              defaultValue: "Documentation",
            },
            lvl2: ".docs_content h2",
            lvl3: ".docs_content h3",
            lvl4: ".docs_content h4, .docs_content tbody td:first-child",
            lvl5: ".docs_content h5",
            pageRank: "2",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "cloudinary",
      pathsToMatch: ["https://cloudinary.com/documentation/upload_widget**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".md_autotoc:not(.md_special)";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs_content h1",
            content: "",
            lvl0: {
              selectors: ".breadcrumbs li:nth-child(3) a",
              defaultValue: "Documentation",
            },
            lvl2: ".docs_content h2",
            lvl3: ".docs_content h3",
            lvl4: ".docs_content h4, .docs_content tbody td:first-child",
            lvl5: ".docs_content h5",
            pageRank: "1",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "cloudinary",
      pathsToMatch: [
        "https://cloudinary.com/documentation/product_gallery**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".md_autotoc:not(.md_special)";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs_content h1",
            content: "",
            lvl0: {
              selectors: ".breadcrumbs li:nth-child(3) a",
              defaultValue: "Documentation",
            },
            lvl2: ".docs_content h2",
            lvl3: ".docs_content h3",
            lvl4: ".docs_content h4, .docs_content tbody td:first-child",
            lvl5: ".docs_content h5",
            pageRank: "1",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "cloudinary",
      pathsToMatch: [
        "https://cloudinary.com/documentation/cloudinary_video_player**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".md_autotoc:not(.md_special)";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs_content h1",
            content: "",
            lvl0: {
              selectors: ".breadcrumbs li:nth-child(3) a",
              defaultValue: "Documentation",
            },
            lvl2: ".docs_content h2",
            lvl3: ".docs_content h3",
            lvl4: ".docs_content h4, .docs_content tbody td:first-child",
            lvl5: ".docs_content h5",
            pageRank: "1",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "cloudinary",
      pathsToMatch: [
        "https://cloudinary.com/documentation/how_to_integrate_cloudinary**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".md_autotoc:not(.md_special)";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs_content h1",
            content: "",
            lvl0: {
              selectors: ".breadcrumbs li:nth-child(3) a",
              defaultValue: "Documentation",
            },
            lvl2: ".docs_content h2",
            lvl3: ".docs_content h3",
            lvl4: ".docs_content h4, .docs_content tbody td:first-child",
            lvl5: ".docs_content h5",
            pageRank: "1",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "cloudinary",
      pathsToMatch: [
        "https://cloudinary.com/documentation/dam_advanced_search**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".md_autotoc:not(.md_special)";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs_content h1",
            content: "",
            lvl0: {
              selectors: ".breadcrumbs li:nth-child(3) a",
              defaultValue: "Documentation",
            },
            lvl2: ".docs_content h2",
            lvl3: ".docs_content h3",
            lvl4: ".docs_content h4, .docs_content tbody td:first-child",
            lvl5: ".docs_content h5",
            pageRank: "1",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "cloudinary",
      pathsToMatch: [
        "https://cloudinary.com/documentation/dam_manage_individual_assets**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".md_autotoc:not(.md_special)";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs_content h1",
            content: "",
            lvl0: {
              selectors: ".breadcrumbs li:nth-child(3) a",
              defaultValue: "Documentation",
            },
            lvl2: ".docs_content h2",
            lvl3: ".docs_content h3",
            lvl4: ".docs_content h4, .docs_content tbody td:first-child",
            lvl5: ".docs_content h5",
            pageRank: "1",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "cloudinary",
      pathsToMatch: [
        "https://cloudinary.com/documentation/video_player_api_reference**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".md_autotoc:not(.md_special)";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs_content h1",
            content: "",
            lvl0: {
              selectors: ".breadcrumbs li:nth-child(3) a",
              defaultValue: "Documentation",
            },
            lvl2: ".docs_content h2",
            lvl3: ".docs_content h3",
            lvl4: ".docs_content h4, .docs_content tbody td:first-child",
            lvl5: ".docs_content h5",
            pageRank: "1",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "cloudinary",
      pathsToMatch: [
        "https://cloudinary.com/documentation/product_gallery_reference**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".md_autotoc:not(.md_special)";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs_content h1",
            content: "",
            lvl0: {
              selectors: ".breadcrumbs li:nth-child(3) a",
              defaultValue: "Documentation",
            },
            lvl2: ".docs_content h2",
            lvl3: ".docs_content h3",
            lvl4: ".docs_content h4, .docs_content tbody td:first-child",
            lvl5: ".docs_content h5",
            pageRank: "1",
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "cloudinary",
      pathsToMatch: ["https://cloudinary.com/documentation/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".md_autotoc:not(.md_special)";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs_content h1",
            content: "",
            lvl0: {
              selectors: ".breadcrumbs li:nth-child(3) a",
              defaultValue: "Documentation",
            },
            lvl2: ".docs_content h2",
            lvl3: ".docs_content h3",
            lvl4: ".docs_content h4, .docs_content tbody td:first-child",
            lvl5: ".docs_content h5",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    cloudinary: {
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