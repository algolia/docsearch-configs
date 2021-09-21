new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://biocparallel.futureparam.futureverse.org/index.html",
    "https://biocparallel.futureparam.futureverse.org/",
    "https://dofuture.futureverse.org/index.html",
    "https://dofuture.futureverse.org/",
    "https://future.futureverse.org/index.html",
    "https://future.futureverse.org/",
    "https://future.apply.futureverse.org/index.html",
    "https://future.apply.futureverse.org/",
    "https://future.batchtools.futureverse.org/index.html",
    "https://future.batchtools.futureverse.org/",
    "https://future.callr.futureverse.org/index.html",
    "https://future.callr.futureverse.org/",
    "https://future.tests.futureverse.org/index.html",
    "https://future.tests.futureverse.org/",
    "https://globals.futureverse.org/index.html",
    "https://globals.futureverse.org/",
    "https://listenv.futureverse.org/index.html",
    "https://listenv.futureverse.org/",
    "https://marshal.futureverse.org/index.html",
    "https://marshal.futureverse.org/",
    "https://parallelly.futureverse.org/index.html",
    "https://parallelly.futureverse.org/",
    "https://progressr.futureverse.org/index.html",
    "https://progressr.futureverse.org/",
    "https://biocparallel.futureparam.futureverse.org/reference",
    "https://dofuture.futureverse.org/reference",
    "https://future.futureverse.org/reference",
    "https://future.apply.futureverse.org/reference",
    "https://future.batchtools.futureverse.org/reference",
    "https://future.callr.futureverse.org/reference",
    "https://future.tests.futureverse.org/reference",
    "https://globals.futureverse.org/reference",
    "https://listenv.futureverse.org/reference",
    "https://marshal.futureverse.org/reference",
    "https://parallelly.futureverse.org/reference",
    "https://progressr.futureverse.org/reference",
    "https://biocparallel.futureparam.futureverse.org/articles",
    "https://dofuture.futureverse.org/articles",
    "https://future.futureverse.org/articles",
    "https://future.apply.futureverse.org/articles",
    "https://future.batchtools.futureverse.org/articles",
    "https://future.callr.futureverse.org/articles",
    "https://future.tests.futureverse.org/articles",
    "https://globals.futureverse.org/articles",
    "https://listenv.futureverse.org/articles",
    "https://marshal.futureverse.org/articles",
    "https://parallelly.futureverse.org/articles",
    "https://progressr.futureverse.org/articles",
  ],
  renderJavaScript: false,
  sitemaps: [
    "https://BiocParallel.FutureParam.futureverse.org/sitemap.xml",
    "https://doFuture.futureverse.org/sitemap.xml",
    "https://future.futureverse.org/sitemap.xml",
    "https://future.apply.futureverse.org/sitemap.xml",
    "https://future.batchtools.futureverse.org/sitemap.xml",
    "https://future.callr.futureverse.org/sitemap.xml",
    "https://future.tests.futureverse.org/sitemap.xml",
    "https://globals.futureverse.org/sitemap.xml",
    "https://listenv.futureverse.org/sitemap.xml",
    "https://marshal.futureverse.org/sitemap.xml",
    "https://parallelly.futureverse.org/sitemap.xml",
    "https://progressr.futureverse.org/sitemap.xml",
  ],
  exclusionPatterns: [
    "**/reference/",
    "**/reference/index.html",
    "**/articles/",
    "**/articles/index.html",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: [
    "https://biocparallel.futureparam.futureverse.org/**",
    "https://dofuture.futureverse.org/**",
    "https://future.futureverse.org/**",
    "https://future.apply.futureverse.org/**",
    "https://future.batchtools.futureverse.org/**",
    "https://future.callr.futureverse.org/**",
    "https://future.tests.futureverse.org/**",
    "https://globals.futureverse.org/**",
    "https://listenv.futureverse.org/**",
    "https://marshal.futureverse.org/**",
    "https://parallelly.futureverse.org/**",
    "https://progressr.futureverse.org/**",
  ],
  schedule: "at 01:40 on Wednesday",
  actions: [
    {
      indexName: "futureverse",
      pathsToMatch: [
        "https://BiocParallel.FutureParam.futureverse.org/index.html**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".dont-index";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".contents h2",
            content: ".contents p, .contents li, .contents .pre",
            lvl0: {
              selectors: ".contents h1",
              defaultValue: "pkgdown Home page",
            },
            lvl2: ".contents h3",
            lvl3: ".ref-arguments td, .ref-description",
            project: {
              defaultValue: ["BiocParallel.FutureParam"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "futureverse",
      pathsToMatch: ["https://doFuture.futureverse.org/index.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".dont-index";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".contents h2",
            content: ".contents p, .contents li, .contents .pre",
            lvl0: {
              selectors: ".contents h1",
              defaultValue: "pkgdown Home page",
            },
            lvl2: ".contents h3",
            lvl3: ".ref-arguments td, .ref-description",
            project: {
              defaultValue: ["doFuture"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "futureverse",
      pathsToMatch: ["https://future.futureverse.org/index.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".dont-index";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".contents h2",
            content: ".contents p, .contents li, .contents .pre",
            lvl0: {
              selectors: ".contents h1",
              defaultValue: "pkgdown Home page",
            },
            lvl2: ".contents h3",
            lvl3: ".ref-arguments td, .ref-description",
            project: {
              defaultValue: ["future"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "futureverse",
      pathsToMatch: ["https://future.apply.futureverse.org/index.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".dont-index";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".contents h2",
            content: ".contents p, .contents li, .contents .pre",
            lvl0: {
              selectors: ".contents h1",
              defaultValue: "pkgdown Home page",
            },
            lvl2: ".contents h3",
            lvl3: ".ref-arguments td, .ref-description",
            project: {
              defaultValue: ["future.apply"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "futureverse",
      pathsToMatch: [
        "https://future.batchtools.futureverse.org/index.html**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".dont-index";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".contents h2",
            content: ".contents p, .contents li, .contents .pre",
            lvl0: {
              selectors: ".contents h1",
              defaultValue: "pkgdown Home page",
            },
            lvl2: ".contents h3",
            lvl3: ".ref-arguments td, .ref-description",
            project: {
              defaultValue: ["future.batchtools"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "futureverse",
      pathsToMatch: ["https://future.callr.futureverse.org/index.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".dont-index";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".contents h2",
            content: ".contents p, .contents li, .contents .pre",
            lvl0: {
              selectors: ".contents h1",
              defaultValue: "pkgdown Home page",
            },
            lvl2: ".contents h3",
            lvl3: ".ref-arguments td, .ref-description",
            project: {
              defaultValue: ["future.callr"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "futureverse",
      pathsToMatch: ["https://future.tests.futureverse.org/index.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".dont-index";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".contents h2",
            content: ".contents p, .contents li, .contents .pre",
            lvl0: {
              selectors: ".contents h1",
              defaultValue: "pkgdown Home page",
            },
            lvl2: ".contents h3",
            lvl3: ".ref-arguments td, .ref-description",
            project: {
              defaultValue: ["future.tests"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "futureverse",
      pathsToMatch: ["https://globals.futureverse.org/index.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".dont-index";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".contents h2",
            content: ".contents p, .contents li, .contents .pre",
            lvl0: {
              selectors: ".contents h1",
              defaultValue: "pkgdown Home page",
            },
            lvl2: ".contents h3",
            lvl3: ".ref-arguments td, .ref-description",
            project: {
              defaultValue: ["globals"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "futureverse",
      pathsToMatch: ["https://listenv.futureverse.org/index.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".dont-index";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".contents h2",
            content: ".contents p, .contents li, .contents .pre",
            lvl0: {
              selectors: ".contents h1",
              defaultValue: "pkgdown Home page",
            },
            lvl2: ".contents h3",
            lvl3: ".ref-arguments td, .ref-description",
            project: {
              defaultValue: ["listenv"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "futureverse",
      pathsToMatch: ["https://marshal.futureverse.org/index.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".dont-index";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".contents h2",
            content: ".contents p, .contents li, .contents .pre",
            lvl0: {
              selectors: ".contents h1",
              defaultValue: "pkgdown Home page",
            },
            lvl2: ".contents h3",
            lvl3: ".ref-arguments td, .ref-description",
            project: {
              defaultValue: ["marshal"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "futureverse",
      pathsToMatch: ["https://parallelly.futureverse.org/index.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".dont-index";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".contents h2",
            content: ".contents p, .contents li, .contents .pre",
            lvl0: {
              selectors: ".contents h1",
              defaultValue: "pkgdown Home page",
            },
            lvl2: ".contents h3",
            lvl3: ".ref-arguments td, .ref-description",
            project: {
              defaultValue: ["parallelly"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "futureverse",
      pathsToMatch: ["https://progressr.futureverse.org/index.html**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".dont-index";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".contents h2",
            content: ".contents p, .contents li, .contents .pre",
            lvl0: {
              selectors: ".contents h1",
              defaultValue: "pkgdown Home page",
            },
            lvl2: ".contents h3",
            lvl3: ".ref-arguments td, .ref-description",
            project: {
              defaultValue: ["progressr"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "futureverse",
      pathsToMatch: [
        "https://BiocParallel.FutureParam.futureverse.org/reference**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".dont-index";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".contents .name",
            content: ".contents p, .contents li",
            lvl0: {
              selectors: ".contents h1",
            },
            lvl2: ".ref-arguments th",
            lvl3: ".ref-arguments td, .ref-description",
            project: {
              defaultValue: ["BiocParallel.FutureParam"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "futureverse",
      pathsToMatch: ["https://doFuture.futureverse.org/reference**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".dont-index";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".contents .name",
            content: ".contents p, .contents li",
            lvl0: {
              selectors: ".contents h1",
            },
            lvl2: ".ref-arguments th",
            lvl3: ".ref-arguments td, .ref-description",
            project: {
              defaultValue: ["doFuture"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "futureverse",
      pathsToMatch: ["https://future.futureverse.org/reference**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".dont-index";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".contents .name",
            content: ".contents p, .contents li",
            lvl0: {
              selectors: ".contents h1",
            },
            lvl2: ".ref-arguments th",
            lvl3: ".ref-arguments td, .ref-description",
            project: {
              defaultValue: ["future"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "futureverse",
      pathsToMatch: ["https://future.apply.futureverse.org/reference**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".dont-index";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".contents .name",
            content: ".contents p, .contents li",
            lvl0: {
              selectors: ".contents h1",
            },
            lvl2: ".ref-arguments th",
            lvl3: ".ref-arguments td, .ref-description",
            project: {
              defaultValue: ["future.apply"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "futureverse",
      pathsToMatch: [
        "https://future.batchtools.futureverse.org/reference**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".dont-index";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".contents .name",
            content: ".contents p, .contents li",
            lvl0: {
              selectors: ".contents h1",
            },
            lvl2: ".ref-arguments th",
            lvl3: ".ref-arguments td, .ref-description",
            project: {
              defaultValue: ["future.batchtools"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "futureverse",
      pathsToMatch: ["https://future.callr.futureverse.org/reference**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".dont-index";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".contents .name",
            content: ".contents p, .contents li",
            lvl0: {
              selectors: ".contents h1",
            },
            lvl2: ".ref-arguments th",
            lvl3: ".ref-arguments td, .ref-description",
            project: {
              defaultValue: ["future.callr"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "futureverse",
      pathsToMatch: ["https://future.tests.futureverse.org/reference**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".dont-index";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".contents .name",
            content: ".contents p, .contents li",
            lvl0: {
              selectors: ".contents h1",
            },
            lvl2: ".ref-arguments th",
            lvl3: ".ref-arguments td, .ref-description",
            project: {
              defaultValue: ["future.tests"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "futureverse",
      pathsToMatch: ["https://globals.futureverse.org/reference**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".dont-index";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".contents .name",
            content: ".contents p, .contents li",
            lvl0: {
              selectors: ".contents h1",
            },
            lvl2: ".ref-arguments th",
            lvl3: ".ref-arguments td, .ref-description",
            project: {
              defaultValue: ["globals"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "futureverse",
      pathsToMatch: ["https://listenv.futureverse.org/reference**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".dont-index";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".contents .name",
            content: ".contents p, .contents li",
            lvl0: {
              selectors: ".contents h1",
            },
            lvl2: ".ref-arguments th",
            lvl3: ".ref-arguments td, .ref-description",
            project: {
              defaultValue: ["listenv"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "futureverse",
      pathsToMatch: ["https://marshal.futureverse.org/reference**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".dont-index";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".contents .name",
            content: ".contents p, .contents li",
            lvl0: {
              selectors: ".contents h1",
            },
            lvl2: ".ref-arguments th",
            lvl3: ".ref-arguments td, .ref-description",
            project: {
              defaultValue: ["marshal"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "futureverse",
      pathsToMatch: ["https://parallelly.futureverse.org/reference**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".dont-index";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".contents .name",
            content: ".contents p, .contents li",
            lvl0: {
              selectors: ".contents h1",
            },
            lvl2: ".ref-arguments th",
            lvl3: ".ref-arguments td, .ref-description",
            project: {
              defaultValue: ["parallelly"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "futureverse",
      pathsToMatch: ["https://progressr.futureverse.org/reference**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".dont-index";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".contents .name",
            content: ".contents p, .contents li",
            lvl0: {
              selectors: ".contents h1",
            },
            lvl2: ".ref-arguments th",
            lvl3: ".ref-arguments td, .ref-description",
            project: {
              defaultValue: ["progressr"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "futureverse",
      pathsToMatch: [
        "https://BiocParallel.FutureParam.futureverse.org/articles**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".dont-index";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".contents .name",
            content: ".contents p, .contents li",
            lvl0: {
              selectors: ".contents h1",
            },
            lvl2: ".contents h2, .contents h3",
            project: {
              defaultValue: ["BiocParallel.FutureParam"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "futureverse",
      pathsToMatch: ["https://doFuture.futureverse.org/articles**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".dont-index";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".contents .name",
            content: ".contents p, .contents li",
            lvl0: {
              selectors: ".contents h1",
            },
            lvl2: ".contents h2, .contents h3",
            project: {
              defaultValue: ["doFuture"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "futureverse",
      pathsToMatch: ["https://future.futureverse.org/articles**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".dont-index";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".contents .name",
            content: ".contents p, .contents li",
            lvl0: {
              selectors: ".contents h1",
            },
            lvl2: ".contents h2, .contents h3",
            project: {
              defaultValue: ["future"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "futureverse",
      pathsToMatch: ["https://future.apply.futureverse.org/articles**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".dont-index";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".contents .name",
            content: ".contents p, .contents li",
            lvl0: {
              selectors: ".contents h1",
            },
            lvl2: ".contents h2, .contents h3",
            project: {
              defaultValue: ["future.apply"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "futureverse",
      pathsToMatch: ["https://future.batchtools.futureverse.org/articles**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".dont-index";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".contents .name",
            content: ".contents p, .contents li",
            lvl0: {
              selectors: ".contents h1",
            },
            lvl2: ".contents h2, .contents h3",
            project: {
              defaultValue: ["future.batchtools"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "futureverse",
      pathsToMatch: ["https://future.callr.futureverse.org/articles**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".dont-index";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".contents .name",
            content: ".contents p, .contents li",
            lvl0: {
              selectors: ".contents h1",
            },
            lvl2: ".contents h2, .contents h3",
            project: {
              defaultValue: ["future.callr"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "futureverse",
      pathsToMatch: ["https://future.tests.futureverse.org/articles**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".dont-index";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".contents .name",
            content: ".contents p, .contents li",
            lvl0: {
              selectors: ".contents h1",
            },
            lvl2: ".contents h2, .contents h3",
            project: {
              defaultValue: ["future.tests"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "futureverse",
      pathsToMatch: ["https://globals.futureverse.org/articles**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".dont-index";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".contents .name",
            content: ".contents p, .contents li",
            lvl0: {
              selectors: ".contents h1",
            },
            lvl2: ".contents h2, .contents h3",
            project: {
              defaultValue: ["globals"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "futureverse",
      pathsToMatch: ["https://listenv.futureverse.org/articles**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".dont-index";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".contents .name",
            content: ".contents p, .contents li",
            lvl0: {
              selectors: ".contents h1",
            },
            lvl2: ".contents h2, .contents h3",
            project: {
              defaultValue: ["listenv"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "futureverse",
      pathsToMatch: ["https://marshal.futureverse.org/articles**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".dont-index";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".contents .name",
            content: ".contents p, .contents li",
            lvl0: {
              selectors: ".contents h1",
            },
            lvl2: ".contents h2, .contents h3",
            project: {
              defaultValue: ["marshal"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "futureverse",
      pathsToMatch: ["https://parallelly.futureverse.org/articles**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".dont-index";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".contents .name",
            content: ".contents p, .contents li",
            lvl0: {
              selectors: ".contents h1",
            },
            lvl2: ".contents h2, .contents h3",
            project: {
              defaultValue: ["parallelly"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
    {
      indexName: "futureverse",
      pathsToMatch: ["https://progressr.futureverse.org/articles**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".dont-index";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".contents .name",
            content: ".contents p, .contents li",
            lvl0: {
              selectors: ".contents h1",
            },
            lvl2: ".contents h2, .contents h3",
            project: {
              defaultValue: ["progressr"],
            },
          },
          indexHeadings: { from: 2, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    futureverse: {
      attributesForFaceting: ["type", "lang", "project"],
      attributesToRetrieve: [
        "hierarchy",
        "content",
        "anchor",
        "url",
        "url_without_anchor",
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
      separatorsToIndex: "_",
    },
  },
});