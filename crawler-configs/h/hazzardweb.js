new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "http://docs.hazzardweb.com/imagepicker/master/",
    "http://docs.hazzardweb.com/",
    "http://docs.hazzardweb.com/imagepicker/2.0/",
    "http://docs.hazzardweb.com/imagepicker/1.4/",
    "http://docs.hazzardweb.com/imagepicker/1.3/",
    "http://docs.hazzardweb.com/imagepicker/1.2/",
    "http://docs.hazzardweb.com/imagepicker/1.1/",
    "http://docs.hazzardweb.com/imagepicker/1.0/",
    "http://docs.hazzardweb.com/filepicker/master/",
    "http://docs.hazzardweb.com/filepicker/2.0/",
    "http://docs.hazzardweb.com/filepicker/1.4/",
    "http://docs.hazzardweb.com/filepicker/1.3/",
    "http://docs.hazzardweb.com/filepicker/1.2/",
    "http://docs.hazzardweb.com/filepicker/1.1/",
    "http://docs.hazzardweb.com/filepicker/1.0/",
    "http://docs.hazzardweb.com/easylogin-pro/master/",
    "http://docs.hazzardweb.com/easylogin-pro/2.0/",
    "http://docs.hazzardweb.com/easylogin-pro/1.4/",
    "http://docs.hazzardweb.com/easylogin-pro/1.3/",
    "http://docs.hazzardweb.com/easylogin-pro/1.2/",
    "http://docs.hazzardweb.com/easylogin-pro/1.1/",
    "http://docs.hazzardweb.com/easylogin-pro/1.0/",
    "http://docs.hazzardweb.com/imageselect/master/",
    "http://docs.hazzardweb.com/imageselect/2.0/",
    "http://docs.hazzardweb.com/imageselect/1.4/",
    "http://docs.hazzardweb.com/imageselect/1.3/",
    "http://docs.hazzardweb.com/imageselect/1.2/",
    "http://docs.hazzardweb.com/imageselect/1.1/",
    "http://docs.hazzardweb.com/imageselect/1.0/",
    "http://docs.hazzardweb.com/ajax-comment-system/master/",
    "http://docs.hazzardweb.com/ajax-comment-system/2.0/",
    "http://docs.hazzardweb.com/ajax-comment-system/1.4/",
    "http://docs.hazzardweb.com/ajax-comment-system/1.3/",
    "http://docs.hazzardweb.com/ajax-comment-system/1.2/",
    "http://docs.hazzardweb.com/ajax-comment-system/1.1/",
    "http://docs.hazzardweb.com/ajax-comment-system/1.0/",
    "http://docs.hazzardweb.com/ajax-comment-system-laravel/master/",
    "http://docs.hazzardweb.com/ajax-comment-system-laravel/2.0/",
    "http://docs.hazzardweb.com/ajax-comment-system-laravel/1.4/",
    "http://docs.hazzardweb.com/ajax-comment-system-laravel/1.3/",
    "http://docs.hazzardweb.com/ajax-comment-system-laravel/1.2/",
    "http://docs.hazzardweb.com/ajax-comment-system-laravel/1.1/",
    "http://docs.hazzardweb.com/ajax-comment-system-laravel/1.0/",
  ],
  renderJavaScript: true,
  sitemaps: [],
  exclusionPatterns: ["**/./**", "**/master**", "**/master**/**"],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["http://docs.hazzardweb.com/**"],
  schedule: "at 10:00 on Wednesday",
  actions: [
    {
      indexName: "hazzardweb",
      pathsToMatch: ["http://docs.hazzardweb.com/imagepicker/master/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-content h1",
            content: ".docs-content p",
            lvl0: {
              selectors: "",
            },
            lvl2: ".docs-content h2",
            lvl3: ".docs-content h3",
            lvl4: ".docs-content h4",
            lvl5: ".docs-content h5",
            version: {
              defaultValue: ["master"],
            },
            project: {
              defaultValue: ["imagepicker"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "hazzardweb",
      pathsToMatch: ["http://docs.hazzardweb.com/imagepicker/2.0/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-content h1",
            content: ".docs-content p",
            lvl0: {
              selectors: "",
            },
            lvl2: ".docs-content h2",
            lvl3: ".docs-content h3",
            lvl4: ".docs-content h4",
            lvl5: ".docs-content h5",
            version: {
              defaultValue: ["2.0"],
            },
            project: {
              defaultValue: ["imagepicker"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "hazzardweb",
      pathsToMatch: ["http://docs.hazzardweb.com/imagepicker/1.4/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-content h1",
            content: ".docs-content p",
            lvl0: {
              selectors: "",
            },
            lvl2: ".docs-content h2",
            lvl3: ".docs-content h3",
            lvl4: ".docs-content h4",
            lvl5: ".docs-content h5",
            version: {
              defaultValue: ["1.4"],
            },
            project: {
              defaultValue: ["imagepicker"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "hazzardweb",
      pathsToMatch: ["http://docs.hazzardweb.com/imagepicker/1.3/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-content h1",
            content: ".docs-content p",
            lvl0: {
              selectors: "",
            },
            lvl2: ".docs-content h2",
            lvl3: ".docs-content h3",
            lvl4: ".docs-content h4",
            lvl5: ".docs-content h5",
            version: {
              defaultValue: ["1.3"],
            },
            project: {
              defaultValue: ["imagepicker"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "hazzardweb",
      pathsToMatch: ["http://docs.hazzardweb.com/imagepicker/1.2/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-content h1",
            content: ".docs-content p",
            lvl0: {
              selectors: "",
            },
            lvl2: ".docs-content h2",
            lvl3: ".docs-content h3",
            lvl4: ".docs-content h4",
            lvl5: ".docs-content h5",
            version: {
              defaultValue: ["1.2"],
            },
            project: {
              defaultValue: ["imagepicker"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "hazzardweb",
      pathsToMatch: ["http://docs.hazzardweb.com/imagepicker/1.1/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-content h1",
            content: ".docs-content p",
            lvl0: {
              selectors: "",
            },
            lvl2: ".docs-content h2",
            lvl3: ".docs-content h3",
            lvl4: ".docs-content h4",
            lvl5: ".docs-content h5",
            version: {
              defaultValue: ["1.1"],
            },
            project: {
              defaultValue: ["imagepicker"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "hazzardweb",
      pathsToMatch: ["http://docs.hazzardweb.com/imagepicker/1.0/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-content h1",
            content: ".docs-content p",
            lvl0: {
              selectors: "",
            },
            lvl2: ".docs-content h2",
            lvl3: ".docs-content h3",
            lvl4: ".docs-content h4",
            lvl5: ".docs-content h5",
            version: {
              defaultValue: ["1.0"],
            },
            project: {
              defaultValue: ["imagepicker"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "hazzardweb",
      pathsToMatch: ["http://docs.hazzardweb.com/filepicker/master/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-content h1",
            content: ".docs-content p",
            lvl0: {
              selectors: "",
            },
            lvl2: ".docs-content h2",
            lvl3: ".docs-content h3",
            lvl4: ".docs-content h4",
            lvl5: ".docs-content h5",
            version: {
              defaultValue: ["master"],
            },
            project: {
              defaultValue: ["filepicker"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "hazzardweb",
      pathsToMatch: ["http://docs.hazzardweb.com/filepicker/2.0/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-content h1",
            content: ".docs-content p",
            lvl0: {
              selectors: "",
            },
            lvl2: ".docs-content h2",
            lvl3: ".docs-content h3",
            lvl4: ".docs-content h4",
            lvl5: ".docs-content h5",
            version: {
              defaultValue: ["2.0"],
            },
            project: {
              defaultValue: ["filepicker"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "hazzardweb",
      pathsToMatch: ["http://docs.hazzardweb.com/filepicker/1.4/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-content h1",
            content: ".docs-content p",
            lvl0: {
              selectors: "",
            },
            lvl2: ".docs-content h2",
            lvl3: ".docs-content h3",
            lvl4: ".docs-content h4",
            lvl5: ".docs-content h5",
            version: {
              defaultValue: ["1.4"],
            },
            project: {
              defaultValue: ["filepicker"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "hazzardweb",
      pathsToMatch: ["http://docs.hazzardweb.com/filepicker/1.3/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-content h1",
            content: ".docs-content p",
            lvl0: {
              selectors: "",
            },
            lvl2: ".docs-content h2",
            lvl3: ".docs-content h3",
            lvl4: ".docs-content h4",
            lvl5: ".docs-content h5",
            version: {
              defaultValue: ["1.3"],
            },
            project: {
              defaultValue: ["filepicker"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "hazzardweb",
      pathsToMatch: ["http://docs.hazzardweb.com/filepicker/1.2/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-content h1",
            content: ".docs-content p",
            lvl0: {
              selectors: "",
            },
            lvl2: ".docs-content h2",
            lvl3: ".docs-content h3",
            lvl4: ".docs-content h4",
            lvl5: ".docs-content h5",
            version: {
              defaultValue: ["1.2"],
            },
            project: {
              defaultValue: ["filepicker"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "hazzardweb",
      pathsToMatch: ["http://docs.hazzardweb.com/filepicker/1.1/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-content h1",
            content: ".docs-content p",
            lvl0: {
              selectors: "",
            },
            lvl2: ".docs-content h2",
            lvl3: ".docs-content h3",
            lvl4: ".docs-content h4",
            lvl5: ".docs-content h5",
            version: {
              defaultValue: ["1.1"],
            },
            project: {
              defaultValue: ["filepicker"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "hazzardweb",
      pathsToMatch: ["http://docs.hazzardweb.com/filepicker/1.0/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-content h1",
            content: ".docs-content p",
            lvl0: {
              selectors: "",
            },
            lvl2: ".docs-content h2",
            lvl3: ".docs-content h3",
            lvl4: ".docs-content h4",
            lvl5: ".docs-content h5",
            version: {
              defaultValue: ["1.0"],
            },
            project: {
              defaultValue: ["filepicker"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "hazzardweb",
      pathsToMatch: ["http://docs.hazzardweb.com/easylogin-pro/master/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-content h1",
            content: ".docs-content p",
            lvl0: {
              selectors: "",
            },
            lvl2: ".docs-content h2",
            lvl3: ".docs-content h3",
            lvl4: ".docs-content h4",
            lvl5: ".docs-content h5",
            version: {
              defaultValue: ["master"],
            },
            project: {
              defaultValue: ["easylogin-pro"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "hazzardweb",
      pathsToMatch: ["http://docs.hazzardweb.com/easylogin-pro/2.0/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-content h1",
            content: ".docs-content p",
            lvl0: {
              selectors: "",
            },
            lvl2: ".docs-content h2",
            lvl3: ".docs-content h3",
            lvl4: ".docs-content h4",
            lvl5: ".docs-content h5",
            version: {
              defaultValue: ["2.0"],
            },
            project: {
              defaultValue: ["easylogin-pro"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "hazzardweb",
      pathsToMatch: ["http://docs.hazzardweb.com/easylogin-pro/1.4/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-content h1",
            content: ".docs-content p",
            lvl0: {
              selectors: "",
            },
            lvl2: ".docs-content h2",
            lvl3: ".docs-content h3",
            lvl4: ".docs-content h4",
            lvl5: ".docs-content h5",
            version: {
              defaultValue: ["1.4"],
            },
            project: {
              defaultValue: ["easylogin-pro"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "hazzardweb",
      pathsToMatch: ["http://docs.hazzardweb.com/easylogin-pro/1.3/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-content h1",
            content: ".docs-content p",
            lvl0: {
              selectors: "",
            },
            lvl2: ".docs-content h2",
            lvl3: ".docs-content h3",
            lvl4: ".docs-content h4",
            lvl5: ".docs-content h5",
            version: {
              defaultValue: ["1.3"],
            },
            project: {
              defaultValue: ["easylogin-pro"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "hazzardweb",
      pathsToMatch: ["http://docs.hazzardweb.com/easylogin-pro/1.2/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-content h1",
            content: ".docs-content p",
            lvl0: {
              selectors: "",
            },
            lvl2: ".docs-content h2",
            lvl3: ".docs-content h3",
            lvl4: ".docs-content h4",
            lvl5: ".docs-content h5",
            version: {
              defaultValue: ["1.2"],
            },
            project: {
              defaultValue: ["easylogin-pro"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "hazzardweb",
      pathsToMatch: ["http://docs.hazzardweb.com/easylogin-pro/1.1/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-content h1",
            content: ".docs-content p",
            lvl0: {
              selectors: "",
            },
            lvl2: ".docs-content h2",
            lvl3: ".docs-content h3",
            lvl4: ".docs-content h4",
            lvl5: ".docs-content h5",
            version: {
              defaultValue: ["1.1"],
            },
            project: {
              defaultValue: ["easylogin-pro"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "hazzardweb",
      pathsToMatch: ["http://docs.hazzardweb.com/easylogin-pro/1.0/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-content h1",
            content: ".docs-content p",
            lvl0: {
              selectors: "",
            },
            lvl2: ".docs-content h2",
            lvl3: ".docs-content h3",
            lvl4: ".docs-content h4",
            lvl5: ".docs-content h5",
            version: {
              defaultValue: ["1.0"],
            },
            project: {
              defaultValue: ["easylogin-pro"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "hazzardweb",
      pathsToMatch: ["http://docs.hazzardweb.com/imageselect/master/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-content h1",
            content: ".docs-content p",
            lvl0: {
              selectors: "",
            },
            lvl2: ".docs-content h2",
            lvl3: ".docs-content h3",
            lvl4: ".docs-content h4",
            lvl5: ".docs-content h5",
            version: {
              defaultValue: ["master"],
            },
            project: {
              defaultValue: ["imageselect"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "hazzardweb",
      pathsToMatch: ["http://docs.hazzardweb.com/imageselect/2.0/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-content h1",
            content: ".docs-content p",
            lvl0: {
              selectors: "",
            },
            lvl2: ".docs-content h2",
            lvl3: ".docs-content h3",
            lvl4: ".docs-content h4",
            lvl5: ".docs-content h5",
            version: {
              defaultValue: ["2.0"],
            },
            project: {
              defaultValue: ["imageselect"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "hazzardweb",
      pathsToMatch: ["http://docs.hazzardweb.com/imageselect/1.4/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-content h1",
            content: ".docs-content p",
            lvl0: {
              selectors: "",
            },
            lvl2: ".docs-content h2",
            lvl3: ".docs-content h3",
            lvl4: ".docs-content h4",
            lvl5: ".docs-content h5",
            version: {
              defaultValue: ["1.4"],
            },
            project: {
              defaultValue: ["imageselect"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "hazzardweb",
      pathsToMatch: ["http://docs.hazzardweb.com/imageselect/1.3/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-content h1",
            content: ".docs-content p",
            lvl0: {
              selectors: "",
            },
            lvl2: ".docs-content h2",
            lvl3: ".docs-content h3",
            lvl4: ".docs-content h4",
            lvl5: ".docs-content h5",
            version: {
              defaultValue: ["1.3"],
            },
            project: {
              defaultValue: ["imageselect"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "hazzardweb",
      pathsToMatch: ["http://docs.hazzardweb.com/imageselect/1.2/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-content h1",
            content: ".docs-content p",
            lvl0: {
              selectors: "",
            },
            lvl2: ".docs-content h2",
            lvl3: ".docs-content h3",
            lvl4: ".docs-content h4",
            lvl5: ".docs-content h5",
            version: {
              defaultValue: ["1.2"],
            },
            project: {
              defaultValue: ["imageselect"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "hazzardweb",
      pathsToMatch: ["http://docs.hazzardweb.com/imageselect/1.1/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-content h1",
            content: ".docs-content p",
            lvl0: {
              selectors: "",
            },
            lvl2: ".docs-content h2",
            lvl3: ".docs-content h3",
            lvl4: ".docs-content h4",
            lvl5: ".docs-content h5",
            version: {
              defaultValue: ["1.1"],
            },
            project: {
              defaultValue: ["imageselect"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "hazzardweb",
      pathsToMatch: ["http://docs.hazzardweb.com/imageselect/1.0/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-content h1",
            content: ".docs-content p",
            lvl0: {
              selectors: "",
            },
            lvl2: ".docs-content h2",
            lvl3: ".docs-content h3",
            lvl4: ".docs-content h4",
            lvl5: ".docs-content h5",
            version: {
              defaultValue: ["1.0"],
            },
            project: {
              defaultValue: ["imageselect"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "hazzardweb",
      pathsToMatch: [
        "http://docs.hazzardweb.com/ajax-comment-system/master/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-content h1",
            content: ".docs-content p",
            lvl0: {
              selectors: "",
            },
            lvl2: ".docs-content h2",
            lvl3: ".docs-content h3",
            lvl4: ".docs-content h4",
            lvl5: ".docs-content h5",
            version: {
              defaultValue: ["master"],
            },
            project: {
              defaultValue: ["ajax-comment-system"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "hazzardweb",
      pathsToMatch: ["http://docs.hazzardweb.com/ajax-comment-system/2.0/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-content h1",
            content: ".docs-content p",
            lvl0: {
              selectors: "",
            },
            lvl2: ".docs-content h2",
            lvl3: ".docs-content h3",
            lvl4: ".docs-content h4",
            lvl5: ".docs-content h5",
            version: {
              defaultValue: ["2.0"],
            },
            project: {
              defaultValue: ["ajax-comment-system"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "hazzardweb",
      pathsToMatch: ["http://docs.hazzardweb.com/ajax-comment-system/1.4/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-content h1",
            content: ".docs-content p",
            lvl0: {
              selectors: "",
            },
            lvl2: ".docs-content h2",
            lvl3: ".docs-content h3",
            lvl4: ".docs-content h4",
            lvl5: ".docs-content h5",
            version: {
              defaultValue: ["1.4"],
            },
            project: {
              defaultValue: ["ajax-comment-system"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "hazzardweb",
      pathsToMatch: ["http://docs.hazzardweb.com/ajax-comment-system/1.3/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-content h1",
            content: ".docs-content p",
            lvl0: {
              selectors: "",
            },
            lvl2: ".docs-content h2",
            lvl3: ".docs-content h3",
            lvl4: ".docs-content h4",
            lvl5: ".docs-content h5",
            version: {
              defaultValue: ["1.3"],
            },
            project: {
              defaultValue: ["ajax-comment-system"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "hazzardweb",
      pathsToMatch: ["http://docs.hazzardweb.com/ajax-comment-system/1.2/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-content h1",
            content: ".docs-content p",
            lvl0: {
              selectors: "",
            },
            lvl2: ".docs-content h2",
            lvl3: ".docs-content h3",
            lvl4: ".docs-content h4",
            lvl5: ".docs-content h5",
            version: {
              defaultValue: ["1.2"],
            },
            project: {
              defaultValue: ["ajax-comment-system"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "hazzardweb",
      pathsToMatch: ["http://docs.hazzardweb.com/ajax-comment-system/1.1/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-content h1",
            content: ".docs-content p",
            lvl0: {
              selectors: "",
            },
            lvl2: ".docs-content h2",
            lvl3: ".docs-content h3",
            lvl4: ".docs-content h4",
            lvl5: ".docs-content h5",
            version: {
              defaultValue: ["1.1"],
            },
            project: {
              defaultValue: ["ajax-comment-system"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "hazzardweb",
      pathsToMatch: ["http://docs.hazzardweb.com/ajax-comment-system/1.0/**"],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-content h1",
            content: ".docs-content p",
            lvl0: {
              selectors: "",
            },
            lvl2: ".docs-content h2",
            lvl3: ".docs-content h3",
            lvl4: ".docs-content h4",
            lvl5: ".docs-content h5",
            version: {
              defaultValue: ["1.0"],
            },
            project: {
              defaultValue: ["ajax-comment-system"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "hazzardweb",
      pathsToMatch: [
        "http://docs.hazzardweb.com/ajax-comment-system-laravel/master/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-content h1",
            content: ".docs-content p",
            lvl0: {
              selectors: "",
            },
            lvl2: ".docs-content h2",
            lvl3: ".docs-content h3",
            lvl4: ".docs-content h4",
            lvl5: ".docs-content h5",
            version: {
              defaultValue: ["master"],
            },
            project: {
              defaultValue: ["ajax-comment-system-laravel"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "hazzardweb",
      pathsToMatch: [
        "http://docs.hazzardweb.com/ajax-comment-system-laravel/2.0/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-content h1",
            content: ".docs-content p",
            lvl0: {
              selectors: "",
            },
            lvl2: ".docs-content h2",
            lvl3: ".docs-content h3",
            lvl4: ".docs-content h4",
            lvl5: ".docs-content h5",
            version: {
              defaultValue: ["2.0"],
            },
            project: {
              defaultValue: ["ajax-comment-system-laravel"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "hazzardweb",
      pathsToMatch: [
        "http://docs.hazzardweb.com/ajax-comment-system-laravel/1.4/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-content h1",
            content: ".docs-content p",
            lvl0: {
              selectors: "",
            },
            lvl2: ".docs-content h2",
            lvl3: ".docs-content h3",
            lvl4: ".docs-content h4",
            lvl5: ".docs-content h5",
            version: {
              defaultValue: ["1.4"],
            },
            project: {
              defaultValue: ["ajax-comment-system-laravel"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "hazzardweb",
      pathsToMatch: [
        "http://docs.hazzardweb.com/ajax-comment-system-laravel/1.3/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-content h1",
            content: ".docs-content p",
            lvl0: {
              selectors: "",
            },
            lvl2: ".docs-content h2",
            lvl3: ".docs-content h3",
            lvl4: ".docs-content h4",
            lvl5: ".docs-content h5",
            version: {
              defaultValue: ["1.3"],
            },
            project: {
              defaultValue: ["ajax-comment-system-laravel"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "hazzardweb",
      pathsToMatch: [
        "http://docs.hazzardweb.com/ajax-comment-system-laravel/1.2/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-content h1",
            content: ".docs-content p",
            lvl0: {
              selectors: "",
            },
            lvl2: ".docs-content h2",
            lvl3: ".docs-content h3",
            lvl4: ".docs-content h4",
            lvl5: ".docs-content h5",
            version: {
              defaultValue: ["1.2"],
            },
            project: {
              defaultValue: ["ajax-comment-system-laravel"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "hazzardweb",
      pathsToMatch: [
        "http://docs.hazzardweb.com/ajax-comment-system-laravel/1.1/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-content h1",
            content: ".docs-content p",
            lvl0: {
              selectors: "",
            },
            lvl2: ".docs-content h2",
            lvl3: ".docs-content h3",
            lvl4: ".docs-content h4",
            lvl5: ".docs-content h5",
            version: {
              defaultValue: ["1.1"],
            },
            project: {
              defaultValue: ["ajax-comment-system-laravel"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "hazzardweb",
      pathsToMatch: [
        "http://docs.hazzardweb.com/ajax-comment-system-laravel/1.0/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ".docs-content h1",
            content: ".docs-content p",
            lvl0: {
              selectors: "",
            },
            lvl2: ".docs-content h2",
            lvl3: ".docs-content h3",
            lvl4: ".docs-content h4",
            lvl5: ".docs-content h5",
            version: {
              defaultValue: ["1.0"],
            },
            project: {
              defaultValue: ["ajax-comment-system-laravel"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    hazzardweb: {
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