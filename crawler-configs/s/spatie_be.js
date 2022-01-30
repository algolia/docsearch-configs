new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://spatie.be/docs/laravel-backup/v1/",
    "https://spatie.be/",
    "https://spatie.be/docs/laravel-backup/v2/",
    "https://spatie.be/docs/laravel-backup/v3/",
    "https://spatie.be/docs/laravel-backup/v4/",
    "https://spatie.be/docs/laravel-backup/v5/",
    "https://spatie.be/docs/laravel-backup/v6/",
    "https://spatie.be/docs/laravel-backup/v7/",
    "https://spatie.be/docs/laravel-backup/v8/",
    "https://spatie.be/docs/laravel-backup/v9/",
    "https://spatie.be/docs/laravel-backup/v10/",
    "https://spatie.be/docs/laravel-backup/v11/",
    "https://spatie.be/docs/laravel-mailcoach/v1/",
    "https://spatie.be/docs/laravel-mailcoach/v2/",
    "https://spatie.be/docs/laravel-mailcoach/v3/",
    "https://spatie.be/docs/laravel-mailcoach/v4/",
    "https://spatie.be/docs/laravel-mailcoach/v5/",
    "https://spatie.be/docs/laravel-mailcoach/v6/",
    "https://spatie.be/docs/laravel-mailcoach/v7/",
    "https://spatie.be/docs/laravel-mailcoach/v8/",
    "https://spatie.be/docs/laravel-mailcoach/v9/",
    "https://spatie.be/docs/laravel-mailcoach/v10/",
    "https://spatie.be/docs/laravel-mailcoach/v11/",
    "https://spatie.be/docs/laravel-medialibrary/v1/",
    "https://spatie.be/docs/laravel-medialibrary/v2/",
    "https://spatie.be/docs/laravel-medialibrary/v3/",
    "https://spatie.be/docs/laravel-medialibrary/v4/",
    "https://spatie.be/docs/laravel-medialibrary/v5/",
    "https://spatie.be/docs/laravel-medialibrary/v6/",
    "https://spatie.be/docs/laravel-medialibrary/v7/",
    "https://spatie.be/docs/laravel-medialibrary/v8/",
    "https://spatie.be/docs/laravel-medialibrary/v9/",
    "https://spatie.be/docs/laravel-medialibrary/v10/",
    "https://spatie.be/docs/laravel-medialibrary/v11/",
    "https://spatie.be/docs/laravel-blade-x/v1/",
    "https://spatie.be/docs/laravel-blade-x/v2/",
    "https://spatie.be/docs/laravel-blade-x/v3/",
    "https://spatie.be/docs/laravel-blade-x/v4/",
    "https://spatie.be/docs/laravel-blade-x/v5/",
    "https://spatie.be/docs/laravel-blade-x/v6/",
    "https://spatie.be/docs/laravel-blade-x/v7/",
    "https://spatie.be/docs/laravel-blade-x/v8/",
    "https://spatie.be/docs/laravel-blade-x/v9/",
    "https://spatie.be/docs/laravel-blade-x/v10/",
    "https://spatie.be/docs/laravel-blade-x/v11/",
    "https://spatie.be/docs/laravel-tags/v1/",
    "https://spatie.be/docs/laravel-tags/v2/",
    "https://spatie.be/docs/laravel-tags/v3/",
    "https://spatie.be/docs/laravel-tags/v4/",
    "https://spatie.be/docs/laravel-tags/v5/",
    "https://spatie.be/docs/laravel-tags/v6/",
    "https://spatie.be/docs/laravel-tags/v7/",
    "https://spatie.be/docs/laravel-tags/v8/",
    "https://spatie.be/docs/laravel-tags/v9/",
    "https://spatie.be/docs/laravel-tags/v10/",
    "https://spatie.be/docs/laravel-tags/v11/",
    "https://spatie.be/docs/laravel-data/v1/",
    "https://spatie.be/docs/laravel-data/v2/",
    "https://spatie.be/docs/laravel-data/v3/",
    "https://spatie.be/docs/laravel-data/v4/",
    "https://spatie.be/docs/laravel-data/v5/",
    "https://spatie.be/docs/laravel-data/v6/",
    "https://spatie.be/docs/laravel-data/v7/",
    "https://spatie.be/docs/laravel-data/v8/",
    "https://spatie.be/docs/laravel-data/v9/",
    "https://spatie.be/docs/laravel-data/v10/",
    "https://spatie.be/docs/laravel-data/v11/",
    "https://spatie.be/docs/laravel-activitylog/v1/",
    "https://spatie.be/docs/laravel-activitylog/v2/",
    "https://spatie.be/docs/laravel-activitylog/v3/",
    "https://spatie.be/docs/laravel-activitylog/v4/",
    "https://spatie.be/docs/laravel-activitylog/v5/",
    "https://spatie.be/docs/laravel-activitylog/v6/",
    "https://spatie.be/docs/laravel-activitylog/v7/",
    "https://spatie.be/docs/laravel-activitylog/v8/",
    "https://spatie.be/docs/laravel-activitylog/v9/",
    "https://spatie.be/docs/laravel-activitylog/v10/",
    "https://spatie.be/docs/laravel-activitylog/v11/",
    "https://spatie.be/docs/laravel-html/v1/",
    "https://spatie.be/docs/laravel-html/v2/",
    "https://spatie.be/docs/laravel-html/v3/",
    "https://spatie.be/docs/laravel-html/v4/",
    "https://spatie.be/docs/laravel-html/v5/",
    "https://spatie.be/docs/laravel-html/v6/",
    "https://spatie.be/docs/laravel-html/v7/",
    "https://spatie.be/docs/laravel-html/v8/",
    "https://spatie.be/docs/laravel-html/v9/",
    "https://spatie.be/docs/laravel-html/v10/",
    "https://spatie.be/docs/laravel-html/v11/",
    "https://spatie.be/docs/laravel-site-search/v1/",
    "https://spatie.be/docs/laravel-site-search/v2/",
    "https://spatie.be/docs/laravel-site-search/v3/",
    "https://spatie.be/docs/laravel-site-search/v4/",
    "https://spatie.be/docs/laravel-site-search/v5/",
    "https://spatie.be/docs/laravel-site-search/v6/",
    "https://spatie.be/docs/laravel-site-search/v7/",
    "https://spatie.be/docs/laravel-site-search/v8/",
    "https://spatie.be/docs/laravel-site-search/v9/",
    "https://spatie.be/docs/laravel-site-search/v10/",
    "https://spatie.be/docs/laravel-site-search/v11/",
    "https://spatie.be/docs/laravel-server-monitor/v1/",
    "https://spatie.be/docs/laravel-server-monitor/v2/",
    "https://spatie.be/docs/laravel-server-monitor/v3/",
    "https://spatie.be/docs/laravel-server-monitor/v4/",
    "https://spatie.be/docs/laravel-server-monitor/v5/",
    "https://spatie.be/docs/laravel-server-monitor/v6/",
    "https://spatie.be/docs/laravel-server-monitor/v7/",
    "https://spatie.be/docs/laravel-server-monitor/v8/",
    "https://spatie.be/docs/laravel-server-monitor/v9/",
    "https://spatie.be/docs/laravel-server-monitor/v10/",
    "https://spatie.be/docs/laravel-server-monitor/v11/",
    "https://spatie.be/docs/laravel-uptime-monitor/v1/",
    "https://spatie.be/docs/laravel-uptime-monitor/v2/",
    "https://spatie.be/docs/laravel-uptime-monitor/v3/",
    "https://spatie.be/docs/laravel-uptime-monitor/v4/",
    "https://spatie.be/docs/laravel-uptime-monitor/v5/",
    "https://spatie.be/docs/laravel-uptime-monitor/v6/",
    "https://spatie.be/docs/laravel-uptime-monitor/v7/",
    "https://spatie.be/docs/laravel-uptime-monitor/v8/",
    "https://spatie.be/docs/laravel-uptime-monitor/v9/",
    "https://spatie.be/docs/laravel-uptime-monitor/v10/",
    "https://spatie.be/docs/laravel-uptime-monitor/v11/",
    "https://spatie.be/docs/laravel-slack-slash-command/v1/",
    "https://spatie.be/docs/laravel-slack-slash-command/v2/",
    "https://spatie.be/docs/laravel-slack-slash-command/v3/",
    "https://spatie.be/docs/laravel-slack-slash-command/v4/",
    "https://spatie.be/docs/laravel-slack-slash-command/v5/",
    "https://spatie.be/docs/laravel-slack-slash-command/v6/",
    "https://spatie.be/docs/laravel-slack-slash-command/v7/",
    "https://spatie.be/docs/laravel-slack-slash-command/v8/",
    "https://spatie.be/docs/laravel-slack-slash-command/v9/",
    "https://spatie.be/docs/laravel-slack-slash-command/v10/",
    "https://spatie.be/docs/laravel-slack-slash-command/v11/",
    "https://spatie.be/docs/menu/v1/",
    "https://spatie.be/docs/menu/v2/",
    "https://spatie.be/docs/menu/v3/",
    "https://spatie.be/docs/menu/v4/",
    "https://spatie.be/docs/menu/v5/",
    "https://spatie.be/docs/menu/v6/",
    "https://spatie.be/docs/menu/v7/",
    "https://spatie.be/docs/menu/v8/",
    "https://spatie.be/docs/menu/v9/",
    "https://spatie.be/docs/menu/v10/",
    "https://spatie.be/docs/menu/v11/",
    "https://spatie.be/docs/image/v1/",
    "https://spatie.be/docs/image/v2/",
    "https://spatie.be/docs/image/v3/",
    "https://spatie.be/docs/image/v4/",
    "https://spatie.be/docs/image/v5/",
    "https://spatie.be/docs/image/v6/",
    "https://spatie.be/docs/image/v7/",
    "https://spatie.be/docs/image/v8/",
    "https://spatie.be/docs/image/v9/",
    "https://spatie.be/docs/image/v10/",
    "https://spatie.be/docs/image/v11/",
    "https://spatie.be/docs/enum/v1/",
    "https://spatie.be/docs/enum/v2/",
    "https://spatie.be/docs/enum/v3/",
    "https://spatie.be/docs/enum/v4/",
    "https://spatie.be/docs/enum/v5/",
    "https://spatie.be/docs/enum/v6/",
    "https://spatie.be/docs/enum/v7/",
    "https://spatie.be/docs/enum/v8/",
    "https://spatie.be/docs/enum/v9/",
    "https://spatie.be/docs/enum/v10/",
    "https://spatie.be/docs/enum/v11/",
    "https://spatie.be/docs/laravel-model-states/v1/",
    "https://spatie.be/docs/laravel-model-states/v2/",
    "https://spatie.be/docs/laravel-model-states/v3/",
    "https://spatie.be/docs/laravel-model-states/v4/",
    "https://spatie.be/docs/laravel-model-states/v5/",
    "https://spatie.be/docs/laravel-model-states/v6/",
    "https://spatie.be/docs/laravel-model-states/v7/",
    "https://spatie.be/docs/laravel-model-states/v8/",
    "https://spatie.be/docs/laravel-model-states/v9/",
    "https://spatie.be/docs/laravel-model-states/v10/",
    "https://spatie.be/docs/laravel-model-states/v11/",
    "https://spatie.be/docs/laravel-permission/v1/",
    "https://spatie.be/docs/laravel-permission/v2/",
    "https://spatie.be/docs/laravel-permission/v3/",
    "https://spatie.be/docs/laravel-permission/v4/",
    "https://spatie.be/docs/laravel-permission/v5/",
    "https://spatie.be/docs/laravel-permission/v6/",
    "https://spatie.be/docs/laravel-permission/v7/",
    "https://spatie.be/docs/laravel-permission/v8/",
    "https://spatie.be/docs/laravel-permission/v9/",
    "https://spatie.be/docs/laravel-permission/v10/",
    "https://spatie.be/docs/laravel-permission/v11/",
    "https://spatie.be/docs/laravel-query-builder/v1/",
    "https://spatie.be/docs/laravel-query-builder/v2/",
    "https://spatie.be/docs/laravel-query-builder/v3/",
    "https://spatie.be/docs/laravel-query-builder/v4/",
    "https://spatie.be/docs/laravel-query-builder/v5/",
    "https://spatie.be/docs/laravel-query-builder/v6/",
    "https://spatie.be/docs/laravel-query-builder/v7/",
    "https://spatie.be/docs/laravel-query-builder/v8/",
    "https://spatie.be/docs/laravel-query-builder/v9/",
    "https://spatie.be/docs/laravel-query-builder/v10/",
    "https://spatie.be/docs/laravel-query-builder/v11/",
    "https://spatie.be/docs/laravel-event-sourcing/v1/",
    "https://spatie.be/docs/laravel-event-sourcing/v2/",
    "https://spatie.be/docs/laravel-event-sourcing/v3/",
    "https://spatie.be/docs/laravel-event-sourcing/v4/",
    "https://spatie.be/docs/laravel-event-sourcing/v5/",
    "https://spatie.be/docs/laravel-event-sourcing/v6/",
    "https://spatie.be/docs/laravel-event-sourcing/v7/",
    "https://spatie.be/docs/laravel-event-sourcing/v8/",
    "https://spatie.be/docs/laravel-event-sourcing/v9/",
    "https://spatie.be/docs/laravel-event-sourcing/v10/",
    "https://spatie.be/docs/laravel-event-sourcing/v11/",
    "https://spatie.be/docs/laravel-resource-links/v1/",
    "https://spatie.be/docs/laravel-resource-links/v2/",
    "https://spatie.be/docs/laravel-resource-links/v3/",
    "https://spatie.be/docs/laravel-resource-links/v4/",
    "https://spatie.be/docs/laravel-resource-links/v5/",
    "https://spatie.be/docs/laravel-resource-links/v6/",
    "https://spatie.be/docs/laravel-resource-links/v7/",
    "https://spatie.be/docs/laravel-resource-links/v8/",
    "https://spatie.be/docs/laravel-resource-links/v9/",
    "https://spatie.be/docs/laravel-resource-links/v10/",
    "https://spatie.be/docs/laravel-resource-links/v11/",
    "https://spatie.be/docs/laravel-backup-server/v1/",
    "https://spatie.be/docs/laravel-backup-server/v2/",
    "https://spatie.be/docs/laravel-backup-server/v3/",
    "https://spatie.be/docs/laravel-backup-server/v4/",
    "https://spatie.be/docs/laravel-backup-server/v5/",
    "https://spatie.be/docs/laravel-backup-server/v6/",
    "https://spatie.be/docs/laravel-backup-server/v7/",
    "https://spatie.be/docs/laravel-backup-server/v8/",
    "https://spatie.be/docs/laravel-backup-server/v9/",
    "https://spatie.be/docs/laravel-backup-server/v10/",
    "https://spatie.be/docs/laravel-backup-server/v11/",
    "https://spatie.be/docs/laravel-dashboard/v1/",
    "https://spatie.be/docs/laravel-dashboard/v2/",
    "https://spatie.be/docs/laravel-dashboard/v3/",
    "https://spatie.be/docs/laravel-dashboard/v4/",
    "https://spatie.be/docs/laravel-dashboard/v5/",
    "https://spatie.be/docs/laravel-dashboard/v6/",
    "https://spatie.be/docs/laravel-dashboard/v7/",
    "https://spatie.be/docs/laravel-dashboard/v8/",
    "https://spatie.be/docs/laravel-dashboard/v9/",
    "https://spatie.be/docs/laravel-dashboard/v10/",
    "https://spatie.be/docs/laravel-dashboard/v11/",
    "https://spatie.be/docs/laravel-multitenancy/v1/",
    "https://spatie.be/docs/laravel-multitenancy/v2/",
    "https://spatie.be/docs/laravel-multitenancy/v3/",
    "https://spatie.be/docs/laravel-multitenancy/v4/",
    "https://spatie.be/docs/laravel-multitenancy/v5/",
    "https://spatie.be/docs/laravel-multitenancy/v6/",
    "https://spatie.be/docs/laravel-multitenancy/v7/",
    "https://spatie.be/docs/laravel-multitenancy/v8/",
    "https://spatie.be/docs/laravel-multitenancy/v9/",
    "https://spatie.be/docs/laravel-multitenancy/v10/",
    "https://spatie.be/docs/laravel-multitenancy/v11/",
    "https://spatie.be/docs/ray/v1/",
    "https://spatie.be/docs/ray/v2/",
    "https://spatie.be/docs/ray/v3/",
    "https://spatie.be/docs/ray/v4/",
    "https://spatie.be/docs/ray/v5/",
    "https://spatie.be/docs/ray/v6/",
    "https://spatie.be/docs/ray/v7/",
    "https://spatie.be/docs/ray/v8/",
    "https://spatie.be/docs/ray/v9/",
    "https://spatie.be/docs/ray/v10/",
    "https://spatie.be/docs/ray/v11/",
    "https://spatie.be/docs/typescript-transformer/v1/",
    "https://spatie.be/docs/typescript-transformer/v2/",
    "https://spatie.be/docs/typescript-transformer/v3/",
    "https://spatie.be/docs/typescript-transformer/v4/",
    "https://spatie.be/docs/typescript-transformer/v5/",
    "https://spatie.be/docs/typescript-transformer/v6/",
    "https://spatie.be/docs/typescript-transformer/v7/",
    "https://spatie.be/docs/typescript-transformer/v8/",
    "https://spatie.be/docs/typescript-transformer/v9/",
    "https://spatie.be/docs/typescript-transformer/v10/",
    "https://spatie.be/docs/typescript-transformer/v11/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: ["**/edit"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://spatie.be/**"],
  schedule: "at 15:30 on Friday",
  actions: [
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-backup/v1/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v1"],
            },
            project: {
              defaultValue: ["laravel-backup"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-backup/v2/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v2"],
            },
            project: {
              defaultValue: ["laravel-backup"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-backup/v3/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v3"],
            },
            project: {
              defaultValue: ["laravel-backup"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-backup/v4/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v4"],
            },
            project: {
              defaultValue: ["laravel-backup"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-backup/v5/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v5"],
            },
            project: {
              defaultValue: ["laravel-backup"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-backup/v6/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v6"],
            },
            project: {
              defaultValue: ["laravel-backup"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-backup/v7/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v7"],
            },
            project: {
              defaultValue: ["laravel-backup"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-backup/v8/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v8"],
            },
            project: {
              defaultValue: ["laravel-backup"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-backup/v9/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v9"],
            },
            project: {
              defaultValue: ["laravel-backup"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-backup/v10/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v10"],
            },
            project: {
              defaultValue: ["laravel-backup"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-backup/v11/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v11"],
            },
            project: {
              defaultValue: ["laravel-backup"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-mailcoach/v1/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v1"],
            },
            project: {
              defaultValue: ["laravel-mailcoach"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-mailcoach/v2/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v2"],
            },
            project: {
              defaultValue: ["laravel-mailcoach"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-mailcoach/v3/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v3"],
            },
            project: {
              defaultValue: ["laravel-mailcoach"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-mailcoach/v4/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v4"],
            },
            project: {
              defaultValue: ["laravel-mailcoach"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-mailcoach/v5/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v5"],
            },
            project: {
              defaultValue: ["laravel-mailcoach"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-mailcoach/v6/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v6"],
            },
            project: {
              defaultValue: ["laravel-mailcoach"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-mailcoach/v7/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v7"],
            },
            project: {
              defaultValue: ["laravel-mailcoach"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-mailcoach/v8/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v8"],
            },
            project: {
              defaultValue: ["laravel-mailcoach"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-mailcoach/v9/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v9"],
            },
            project: {
              defaultValue: ["laravel-mailcoach"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-mailcoach/v10/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v10"],
            },
            project: {
              defaultValue: ["laravel-mailcoach"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-mailcoach/v11/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v11"],
            },
            project: {
              defaultValue: ["laravel-mailcoach"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-medialibrary/v1/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v1"],
            },
            project: {
              defaultValue: ["laravel-medialibrary"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-medialibrary/v2/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v2"],
            },
            project: {
              defaultValue: ["laravel-medialibrary"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-medialibrary/v3/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v3"],
            },
            project: {
              defaultValue: ["laravel-medialibrary"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-medialibrary/v4/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v4"],
            },
            project: {
              defaultValue: ["laravel-medialibrary"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-medialibrary/v5/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v5"],
            },
            project: {
              defaultValue: ["laravel-medialibrary"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-medialibrary/v6/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v6"],
            },
            project: {
              defaultValue: ["laravel-medialibrary"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-medialibrary/v7/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v7"],
            },
            project: {
              defaultValue: ["laravel-medialibrary"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-medialibrary/v8/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v8"],
            },
            project: {
              defaultValue: ["laravel-medialibrary"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-medialibrary/v9/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v9"],
            },
            project: {
              defaultValue: ["laravel-medialibrary"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-medialibrary/v10/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v10"],
            },
            project: {
              defaultValue: ["laravel-medialibrary"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-medialibrary/v11/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v11"],
            },
            project: {
              defaultValue: ["laravel-medialibrary"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-blade-x/v1/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v1"],
            },
            project: {
              defaultValue: ["laravel-blade-x"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-blade-x/v2/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v2"],
            },
            project: {
              defaultValue: ["laravel-blade-x"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-blade-x/v3/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v3"],
            },
            project: {
              defaultValue: ["laravel-blade-x"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-blade-x/v4/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v4"],
            },
            project: {
              defaultValue: ["laravel-blade-x"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-blade-x/v5/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v5"],
            },
            project: {
              defaultValue: ["laravel-blade-x"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-blade-x/v6/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v6"],
            },
            project: {
              defaultValue: ["laravel-blade-x"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-blade-x/v7/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v7"],
            },
            project: {
              defaultValue: ["laravel-blade-x"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-blade-x/v8/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v8"],
            },
            project: {
              defaultValue: ["laravel-blade-x"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-blade-x/v9/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v9"],
            },
            project: {
              defaultValue: ["laravel-blade-x"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-blade-x/v10/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v10"],
            },
            project: {
              defaultValue: ["laravel-blade-x"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-blade-x/v11/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v11"],
            },
            project: {
              defaultValue: ["laravel-blade-x"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-tags/v1/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v1"],
            },
            project: {
              defaultValue: ["laravel-tags"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-tags/v2/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v2"],
            },
            project: {
              defaultValue: ["laravel-tags"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-tags/v3/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v3"],
            },
            project: {
              defaultValue: ["laravel-tags"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-tags/v4/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v4"],
            },
            project: {
              defaultValue: ["laravel-tags"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-tags/v5/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v5"],
            },
            project: {
              defaultValue: ["laravel-tags"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-tags/v6/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v6"],
            },
            project: {
              defaultValue: ["laravel-tags"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-tags/v7/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v7"],
            },
            project: {
              defaultValue: ["laravel-tags"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-tags/v8/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v8"],
            },
            project: {
              defaultValue: ["laravel-tags"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-tags/v9/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v9"],
            },
            project: {
              defaultValue: ["laravel-tags"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-tags/v10/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v10"],
            },
            project: {
              defaultValue: ["laravel-tags"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-tags/v11/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v11"],
            },
            project: {
              defaultValue: ["laravel-tags"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-data/v1/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v1"],
            },
            project: {
              defaultValue: ["laravel-data"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-data/v2/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v2"],
            },
            project: {
              defaultValue: ["laravel-data"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-data/v3/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v3"],
            },
            project: {
              defaultValue: ["laravel-data"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-data/v4/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v4"],
            },
            project: {
              defaultValue: ["laravel-data"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-data/v5/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v5"],
            },
            project: {
              defaultValue: ["laravel-data"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-data/v6/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v6"],
            },
            project: {
              defaultValue: ["laravel-data"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-data/v7/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v7"],
            },
            project: {
              defaultValue: ["laravel-data"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-data/v8/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v8"],
            },
            project: {
              defaultValue: ["laravel-data"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-data/v9/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v9"],
            },
            project: {
              defaultValue: ["laravel-data"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-data/v10/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v10"],
            },
            project: {
              defaultValue: ["laravel-data"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-data/v11/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v11"],
            },
            project: {
              defaultValue: ["laravel-data"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-activitylog/v1/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v1"],
            },
            project: {
              defaultValue: ["laravel-activitylog"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-activitylog/v2/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v2"],
            },
            project: {
              defaultValue: ["laravel-activitylog"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-activitylog/v3/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v3"],
            },
            project: {
              defaultValue: ["laravel-activitylog"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-activitylog/v4/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v4"],
            },
            project: {
              defaultValue: ["laravel-activitylog"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-activitylog/v5/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v5"],
            },
            project: {
              defaultValue: ["laravel-activitylog"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-activitylog/v6/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v6"],
            },
            project: {
              defaultValue: ["laravel-activitylog"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-activitylog/v7/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v7"],
            },
            project: {
              defaultValue: ["laravel-activitylog"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-activitylog/v8/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v8"],
            },
            project: {
              defaultValue: ["laravel-activitylog"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-activitylog/v9/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v9"],
            },
            project: {
              defaultValue: ["laravel-activitylog"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-activitylog/v10/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v10"],
            },
            project: {
              defaultValue: ["laravel-activitylog"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-activitylog/v11/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v11"],
            },
            project: {
              defaultValue: ["laravel-activitylog"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-html/v1/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v1"],
            },
            project: {
              defaultValue: ["laravel-html"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-html/v2/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v2"],
            },
            project: {
              defaultValue: ["laravel-html"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-html/v3/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v3"],
            },
            project: {
              defaultValue: ["laravel-html"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-html/v4/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v4"],
            },
            project: {
              defaultValue: ["laravel-html"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-html/v5/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v5"],
            },
            project: {
              defaultValue: ["laravel-html"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-html/v6/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v6"],
            },
            project: {
              defaultValue: ["laravel-html"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-html/v7/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v7"],
            },
            project: {
              defaultValue: ["laravel-html"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-html/v8/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v8"],
            },
            project: {
              defaultValue: ["laravel-html"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-html/v9/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v9"],
            },
            project: {
              defaultValue: ["laravel-html"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-html/v10/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v10"],
            },
            project: {
              defaultValue: ["laravel-html"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-html/v11/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v11"],
            },
            project: {
              defaultValue: ["laravel-html"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-site-search/v1/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v1"],
            },
            project: {
              defaultValue: ["laravel-site-search"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-site-search/v2/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v2"],
            },
            project: {
              defaultValue: ["laravel-site-search"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-site-search/v3/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v3"],
            },
            project: {
              defaultValue: ["laravel-site-search"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-site-search/v4/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v4"],
            },
            project: {
              defaultValue: ["laravel-site-search"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-site-search/v5/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v5"],
            },
            project: {
              defaultValue: ["laravel-site-search"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-site-search/v6/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v6"],
            },
            project: {
              defaultValue: ["laravel-site-search"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-site-search/v7/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v7"],
            },
            project: {
              defaultValue: ["laravel-site-search"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-site-search/v8/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v8"],
            },
            project: {
              defaultValue: ["laravel-site-search"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-site-search/v9/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v9"],
            },
            project: {
              defaultValue: ["laravel-site-search"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-site-search/v10/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v10"],
            },
            project: {
              defaultValue: ["laravel-site-search"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-site-search/v11/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v11"],
            },
            project: {
              defaultValue: ["laravel-site-search"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-server-monitor/v1/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v1"],
            },
            project: {
              defaultValue: ["laravel-server-monitor"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-server-monitor/v2/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v2"],
            },
            project: {
              defaultValue: ["laravel-server-monitor"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-server-monitor/v3/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v3"],
            },
            project: {
              defaultValue: ["laravel-server-monitor"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-server-monitor/v4/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v4"],
            },
            project: {
              defaultValue: ["laravel-server-monitor"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-server-monitor/v5/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v5"],
            },
            project: {
              defaultValue: ["laravel-server-monitor"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-server-monitor/v6/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v6"],
            },
            project: {
              defaultValue: ["laravel-server-monitor"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-server-monitor/v7/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v7"],
            },
            project: {
              defaultValue: ["laravel-server-monitor"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-server-monitor/v8/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v8"],
            },
            project: {
              defaultValue: ["laravel-server-monitor"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-server-monitor/v9/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v9"],
            },
            project: {
              defaultValue: ["laravel-server-monitor"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-server-monitor/v10/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v10"],
            },
            project: {
              defaultValue: ["laravel-server-monitor"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-server-monitor/v11/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v11"],
            },
            project: {
              defaultValue: ["laravel-server-monitor"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-uptime-monitor/v1/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v1"],
            },
            project: {
              defaultValue: ["laravel-uptime-monitor"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-uptime-monitor/v2/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v2"],
            },
            project: {
              defaultValue: ["laravel-uptime-monitor"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-uptime-monitor/v3/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v3"],
            },
            project: {
              defaultValue: ["laravel-uptime-monitor"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-uptime-monitor/v4/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v4"],
            },
            project: {
              defaultValue: ["laravel-uptime-monitor"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-uptime-monitor/v5/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v5"],
            },
            project: {
              defaultValue: ["laravel-uptime-monitor"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-uptime-monitor/v6/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v6"],
            },
            project: {
              defaultValue: ["laravel-uptime-monitor"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-uptime-monitor/v7/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v7"],
            },
            project: {
              defaultValue: ["laravel-uptime-monitor"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-uptime-monitor/v8/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v8"],
            },
            project: {
              defaultValue: ["laravel-uptime-monitor"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-uptime-monitor/v9/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v9"],
            },
            project: {
              defaultValue: ["laravel-uptime-monitor"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-uptime-monitor/v10/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v10"],
            },
            project: {
              defaultValue: ["laravel-uptime-monitor"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-uptime-monitor/v11/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v11"],
            },
            project: {
              defaultValue: ["laravel-uptime-monitor"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: [
        "https://spatie.be/docs/laravel-slack-slash-command/v1/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v1"],
            },
            project: {
              defaultValue: ["laravel-slack-slash-command"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: [
        "https://spatie.be/docs/laravel-slack-slash-command/v2/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v2"],
            },
            project: {
              defaultValue: ["laravel-slack-slash-command"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: [
        "https://spatie.be/docs/laravel-slack-slash-command/v3/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v3"],
            },
            project: {
              defaultValue: ["laravel-slack-slash-command"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: [
        "https://spatie.be/docs/laravel-slack-slash-command/v4/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v4"],
            },
            project: {
              defaultValue: ["laravel-slack-slash-command"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: [
        "https://spatie.be/docs/laravel-slack-slash-command/v5/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v5"],
            },
            project: {
              defaultValue: ["laravel-slack-slash-command"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: [
        "https://spatie.be/docs/laravel-slack-slash-command/v6/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v6"],
            },
            project: {
              defaultValue: ["laravel-slack-slash-command"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: [
        "https://spatie.be/docs/laravel-slack-slash-command/v7/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v7"],
            },
            project: {
              defaultValue: ["laravel-slack-slash-command"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: [
        "https://spatie.be/docs/laravel-slack-slash-command/v8/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v8"],
            },
            project: {
              defaultValue: ["laravel-slack-slash-command"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: [
        "https://spatie.be/docs/laravel-slack-slash-command/v9/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v9"],
            },
            project: {
              defaultValue: ["laravel-slack-slash-command"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: [
        "https://spatie.be/docs/laravel-slack-slash-command/v10/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v10"],
            },
            project: {
              defaultValue: ["laravel-slack-slash-command"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: [
        "https://spatie.be/docs/laravel-slack-slash-command/v11/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v11"],
            },
            project: {
              defaultValue: ["laravel-slack-slash-command"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/menu/v1/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v1"],
            },
            project: {
              defaultValue: ["menu"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/menu/v2/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v2"],
            },
            project: {
              defaultValue: ["menu"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/menu/v3/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v3"],
            },
            project: {
              defaultValue: ["menu"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/menu/v4/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v4"],
            },
            project: {
              defaultValue: ["menu"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/menu/v5/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v5"],
            },
            project: {
              defaultValue: ["menu"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/menu/v6/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v6"],
            },
            project: {
              defaultValue: ["menu"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/menu/v7/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v7"],
            },
            project: {
              defaultValue: ["menu"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/menu/v8/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v8"],
            },
            project: {
              defaultValue: ["menu"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/menu/v9/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v9"],
            },
            project: {
              defaultValue: ["menu"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/menu/v10/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v10"],
            },
            project: {
              defaultValue: ["menu"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/menu/v11/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v11"],
            },
            project: {
              defaultValue: ["menu"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/image/v1/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v1"],
            },
            project: {
              defaultValue: ["image"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/image/v2/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v2"],
            },
            project: {
              defaultValue: ["image"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/image/v3/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v3"],
            },
            project: {
              defaultValue: ["image"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/image/v4/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v4"],
            },
            project: {
              defaultValue: ["image"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/image/v5/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v5"],
            },
            project: {
              defaultValue: ["image"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/image/v6/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v6"],
            },
            project: {
              defaultValue: ["image"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/image/v7/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v7"],
            },
            project: {
              defaultValue: ["image"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/image/v8/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v8"],
            },
            project: {
              defaultValue: ["image"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/image/v9/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v9"],
            },
            project: {
              defaultValue: ["image"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/image/v10/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v10"],
            },
            project: {
              defaultValue: ["image"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/image/v11/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v11"],
            },
            project: {
              defaultValue: ["image"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/enum/v1/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v1"],
            },
            project: {
              defaultValue: ["enum"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/enum/v2/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v2"],
            },
            project: {
              defaultValue: ["enum"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/enum/v3/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v3"],
            },
            project: {
              defaultValue: ["enum"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/enum/v4/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v4"],
            },
            project: {
              defaultValue: ["enum"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/enum/v5/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v5"],
            },
            project: {
              defaultValue: ["enum"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/enum/v6/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v6"],
            },
            project: {
              defaultValue: ["enum"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/enum/v7/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v7"],
            },
            project: {
              defaultValue: ["enum"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/enum/v8/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v8"],
            },
            project: {
              defaultValue: ["enum"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/enum/v9/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v9"],
            },
            project: {
              defaultValue: ["enum"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/enum/v10/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v10"],
            },
            project: {
              defaultValue: ["enum"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/enum/v11/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v11"],
            },
            project: {
              defaultValue: ["enum"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-model-states/v1/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v1"],
            },
            project: {
              defaultValue: ["laravel-model-states"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-model-states/v2/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v2"],
            },
            project: {
              defaultValue: ["laravel-model-states"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-model-states/v3/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v3"],
            },
            project: {
              defaultValue: ["laravel-model-states"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-model-states/v4/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v4"],
            },
            project: {
              defaultValue: ["laravel-model-states"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-model-states/v5/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v5"],
            },
            project: {
              defaultValue: ["laravel-model-states"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-model-states/v6/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v6"],
            },
            project: {
              defaultValue: ["laravel-model-states"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-model-states/v7/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v7"],
            },
            project: {
              defaultValue: ["laravel-model-states"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-model-states/v8/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v8"],
            },
            project: {
              defaultValue: ["laravel-model-states"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-model-states/v9/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v9"],
            },
            project: {
              defaultValue: ["laravel-model-states"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-model-states/v10/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v10"],
            },
            project: {
              defaultValue: ["laravel-model-states"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-model-states/v11/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v11"],
            },
            project: {
              defaultValue: ["laravel-model-states"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-permission/v1/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v1"],
            },
            project: {
              defaultValue: ["laravel-permission"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-permission/v2/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v2"],
            },
            project: {
              defaultValue: ["laravel-permission"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-permission/v3/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v3"],
            },
            project: {
              defaultValue: ["laravel-permission"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-permission/v4/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v4"],
            },
            project: {
              defaultValue: ["laravel-permission"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-permission/v5/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v5"],
            },
            project: {
              defaultValue: ["laravel-permission"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-permission/v6/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v6"],
            },
            project: {
              defaultValue: ["laravel-permission"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-permission/v7/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v7"],
            },
            project: {
              defaultValue: ["laravel-permission"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-permission/v8/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v8"],
            },
            project: {
              defaultValue: ["laravel-permission"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-permission/v9/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v9"],
            },
            project: {
              defaultValue: ["laravel-permission"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-permission/v10/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v10"],
            },
            project: {
              defaultValue: ["laravel-permission"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-permission/v11/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v11"],
            },
            project: {
              defaultValue: ["laravel-permission"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-query-builder/v1/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v1"],
            },
            project: {
              defaultValue: ["laravel-query-builder"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-query-builder/v2/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v2"],
            },
            project: {
              defaultValue: ["laravel-query-builder"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-query-builder/v3/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v3"],
            },
            project: {
              defaultValue: ["laravel-query-builder"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-query-builder/v4/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v4"],
            },
            project: {
              defaultValue: ["laravel-query-builder"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-query-builder/v5/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v5"],
            },
            project: {
              defaultValue: ["laravel-query-builder"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-query-builder/v6/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v6"],
            },
            project: {
              defaultValue: ["laravel-query-builder"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-query-builder/v7/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v7"],
            },
            project: {
              defaultValue: ["laravel-query-builder"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-query-builder/v8/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v8"],
            },
            project: {
              defaultValue: ["laravel-query-builder"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-query-builder/v9/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v9"],
            },
            project: {
              defaultValue: ["laravel-query-builder"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-query-builder/v10/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v10"],
            },
            project: {
              defaultValue: ["laravel-query-builder"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-query-builder/v11/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v11"],
            },
            project: {
              defaultValue: ["laravel-query-builder"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-event-sourcing/v1/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v1"],
            },
            project: {
              defaultValue: ["laravel-event-sourcing"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-event-sourcing/v2/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v2"],
            },
            project: {
              defaultValue: ["laravel-event-sourcing"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-event-sourcing/v3/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v3"],
            },
            project: {
              defaultValue: ["laravel-event-sourcing"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-event-sourcing/v4/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v4"],
            },
            project: {
              defaultValue: ["laravel-event-sourcing"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-event-sourcing/v5/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v5"],
            },
            project: {
              defaultValue: ["laravel-event-sourcing"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-event-sourcing/v6/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v6"],
            },
            project: {
              defaultValue: ["laravel-event-sourcing"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-event-sourcing/v7/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v7"],
            },
            project: {
              defaultValue: ["laravel-event-sourcing"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-event-sourcing/v8/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v8"],
            },
            project: {
              defaultValue: ["laravel-event-sourcing"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-event-sourcing/v9/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v9"],
            },
            project: {
              defaultValue: ["laravel-event-sourcing"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-event-sourcing/v10/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v10"],
            },
            project: {
              defaultValue: ["laravel-event-sourcing"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-event-sourcing/v11/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v11"],
            },
            project: {
              defaultValue: ["laravel-event-sourcing"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-resource-links/v1/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v1"],
            },
            project: {
              defaultValue: ["laravel-resource-links"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-resource-links/v2/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v2"],
            },
            project: {
              defaultValue: ["laravel-resource-links"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-resource-links/v3/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v3"],
            },
            project: {
              defaultValue: ["laravel-resource-links"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-resource-links/v4/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v4"],
            },
            project: {
              defaultValue: ["laravel-resource-links"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-resource-links/v5/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v5"],
            },
            project: {
              defaultValue: ["laravel-resource-links"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-resource-links/v6/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v6"],
            },
            project: {
              defaultValue: ["laravel-resource-links"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-resource-links/v7/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v7"],
            },
            project: {
              defaultValue: ["laravel-resource-links"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-resource-links/v8/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v8"],
            },
            project: {
              defaultValue: ["laravel-resource-links"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-resource-links/v9/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v9"],
            },
            project: {
              defaultValue: ["laravel-resource-links"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-resource-links/v10/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v10"],
            },
            project: {
              defaultValue: ["laravel-resource-links"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-resource-links/v11/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v11"],
            },
            project: {
              defaultValue: ["laravel-resource-links"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-backup-server/v1/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v1"],
            },
            project: {
              defaultValue: ["laravel-backup-server"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-backup-server/v2/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v2"],
            },
            project: {
              defaultValue: ["laravel-backup-server"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-backup-server/v3/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v3"],
            },
            project: {
              defaultValue: ["laravel-backup-server"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-backup-server/v4/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v4"],
            },
            project: {
              defaultValue: ["laravel-backup-server"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-backup-server/v5/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v5"],
            },
            project: {
              defaultValue: ["laravel-backup-server"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-backup-server/v6/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v6"],
            },
            project: {
              defaultValue: ["laravel-backup-server"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-backup-server/v7/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v7"],
            },
            project: {
              defaultValue: ["laravel-backup-server"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-backup-server/v8/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v8"],
            },
            project: {
              defaultValue: ["laravel-backup-server"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-backup-server/v9/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v9"],
            },
            project: {
              defaultValue: ["laravel-backup-server"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-backup-server/v10/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v10"],
            },
            project: {
              defaultValue: ["laravel-backup-server"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-backup-server/v11/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v11"],
            },
            project: {
              defaultValue: ["laravel-backup-server"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-dashboard/v1/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v1"],
            },
            project: {
              defaultValue: ["laravel-dashboard"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-dashboard/v2/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v2"],
            },
            project: {
              defaultValue: ["laravel-dashboard"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-dashboard/v3/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v3"],
            },
            project: {
              defaultValue: ["laravel-dashboard"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-dashboard/v4/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v4"],
            },
            project: {
              defaultValue: ["laravel-dashboard"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-dashboard/v5/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v5"],
            },
            project: {
              defaultValue: ["laravel-dashboard"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-dashboard/v6/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v6"],
            },
            project: {
              defaultValue: ["laravel-dashboard"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-dashboard/v7/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v7"],
            },
            project: {
              defaultValue: ["laravel-dashboard"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-dashboard/v8/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v8"],
            },
            project: {
              defaultValue: ["laravel-dashboard"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-dashboard/v9/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v9"],
            },
            project: {
              defaultValue: ["laravel-dashboard"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-dashboard/v10/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v10"],
            },
            project: {
              defaultValue: ["laravel-dashboard"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-dashboard/v11/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v11"],
            },
            project: {
              defaultValue: ["laravel-dashboard"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-multitenancy/v1/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v1"],
            },
            project: {
              defaultValue: ["laravel-multitenancy"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-multitenancy/v2/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v2"],
            },
            project: {
              defaultValue: ["laravel-multitenancy"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-multitenancy/v3/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v3"],
            },
            project: {
              defaultValue: ["laravel-multitenancy"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-multitenancy/v4/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v4"],
            },
            project: {
              defaultValue: ["laravel-multitenancy"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-multitenancy/v5/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v5"],
            },
            project: {
              defaultValue: ["laravel-multitenancy"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-multitenancy/v6/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v6"],
            },
            project: {
              defaultValue: ["laravel-multitenancy"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-multitenancy/v7/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v7"],
            },
            project: {
              defaultValue: ["laravel-multitenancy"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-multitenancy/v8/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v8"],
            },
            project: {
              defaultValue: ["laravel-multitenancy"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-multitenancy/v9/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v9"],
            },
            project: {
              defaultValue: ["laravel-multitenancy"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-multitenancy/v10/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v10"],
            },
            project: {
              defaultValue: ["laravel-multitenancy"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/laravel-multitenancy/v11/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v11"],
            },
            project: {
              defaultValue: ["laravel-multitenancy"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/ray/v1/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v1"],
            },
            project: {
              defaultValue: ["ray"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/ray/v2/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v2"],
            },
            project: {
              defaultValue: ["ray"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/ray/v3/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v3"],
            },
            project: {
              defaultValue: ["ray"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/ray/v4/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v4"],
            },
            project: {
              defaultValue: ["ray"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/ray/v5/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v5"],
            },
            project: {
              defaultValue: ["ray"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/ray/v6/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v6"],
            },
            project: {
              defaultValue: ["ray"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/ray/v7/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v7"],
            },
            project: {
              defaultValue: ["ray"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/ray/v8/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v8"],
            },
            project: {
              defaultValue: ["ray"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/ray/v9/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v9"],
            },
            project: {
              defaultValue: ["ray"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/ray/v10/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v10"],
            },
            project: {
              defaultValue: ["ray"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/ray/v11/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v11"],
            },
            project: {
              defaultValue: ["ray"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/typescript-transformer/v1/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v1"],
            },
            project: {
              defaultValue: ["typescript-transformer"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/typescript-transformer/v2/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v2"],
            },
            project: {
              defaultValue: ["typescript-transformer"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/typescript-transformer/v3/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v3"],
            },
            project: {
              defaultValue: ["typescript-transformer"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/typescript-transformer/v4/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v4"],
            },
            project: {
              defaultValue: ["typescript-transformer"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/typescript-transformer/v5/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v5"],
            },
            project: {
              defaultValue: ["typescript-transformer"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/typescript-transformer/v6/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v6"],
            },
            project: {
              defaultValue: ["typescript-transformer"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/typescript-transformer/v7/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v7"],
            },
            project: {
              defaultValue: ["typescript-transformer"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/typescript-transformer/v8/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v8"],
            },
            project: {
              defaultValue: ["typescript-transformer"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/typescript-transformer/v9/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v9"],
            },
            project: {
              defaultValue: ["typescript-transformer"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/typescript-transformer/v10/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v10"],
            },
            project: {
              defaultValue: ["typescript-transformer"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "spatie_be",
      pathsToMatch: ["https://spatie.be/docs/typescript-transformer/v11/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = "footer, header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".wrap h2",
            content: ".wrap p",
            lvl0: {
              selectors: ".wrap h1",
            },
            lvl2: ".wrap h3",
            lvl3: ".wrap h4",
            lvl4: ".wrap h5",
            version: {
              defaultValue: ["v11"],
            },
            project: {
              defaultValue: ["typescript-transformer"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    spatie_be: {
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