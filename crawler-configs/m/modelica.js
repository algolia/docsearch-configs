new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://doc.modelica.org/Modelica%204.0.0/Resources/helpDymola/",
    "https://doc.modelica.org/",
    "https://doc.modelica.org/Modelica%204.0.0/Resources/helpMapleSim/",
    "https://doc.modelica.org/Modelica%203.2.3/Resources/helpDymola/",
    "https://doc.modelica.org/Modelica%203.2.3/Resources/helpMapleSim/",
    "https://doc.modelica.org/ModelicaReference%204.0.0/Resources/helpDymola/",
    "https://doc.modelica.org/ModelicaReference%204.0.0/Resources/helpMapleSim/",
    "https://doc.modelica.org/ModelicaReference%203.2.3/Resources/helpDymola/",
    "https://doc.modelica.org/ModelicaReference%203.2.3/Resources/helpMapleSim/",
    "https://doc.modelica.org/ModelicaServices%204.0.0/Resources/helpDymola/",
    "https://doc.modelica.org/ModelicaServices%204.0.0/Resources/helpMapleSim/",
    "https://doc.modelica.org/ModelicaServices%203.2.3/Resources/helpDymola/",
    "https://doc.modelica.org/ModelicaServices%203.2.3/Resources/helpMapleSim/",
    "https://doc.modelica.org/Complex%204.0.0/Resources/helpDymola/",
    "https://doc.modelica.org/Complex%204.0.0/Resources/helpMapleSim/",
    "https://doc.modelica.org/Complex%203.2.3/Resources/helpDymola/",
    "https://doc.modelica.org/Complex%203.2.3/Resources/helpMapleSim/",
    "https://doc.modelica.org/ObsoleteModelica4%204.0.0/Resources/helpDymola/",
    "https://doc.modelica.org/ObsoleteModelica4%204.0.0/Resources/helpMapleSim/",
    "https://doc.modelica.org/ObsoleteModelica4%203.2.3/Resources/helpDymola/",
    "https://doc.modelica.org/ObsoleteModelica4%203.2.3/Resources/helpMapleSim/",
    "https://doc.modelica.org/ObsoleteModelica3%204.0.0/Resources/helpDymola/",
    "https://doc.modelica.org/ObsoleteModelica3%204.0.0/Resources/helpMapleSim/",
    "https://doc.modelica.org/ObsoleteModelica3%203.2.3/Resources/helpDymola/",
    "https://doc.modelica.org/ObsoleteModelica3%203.2.3/Resources/helpMapleSim/",
    "https://doc.modelica.org/Modelica%204.0.0/Resources/helpOM/ModelicaReference",
    "https://doc.modelica.org/Modelica%203.2.3/Resources/helpOM/ModelicaReference",
    "https://doc.modelica.org/Modelica%204.0.0/Resources/helpOM/ModelicaServices",
    "https://doc.modelica.org/Modelica%203.2.3/Resources/helpOM/ModelicaServices",
    "https://doc.modelica.org/Modelica%204.0.0/Resources/helpOM/Modelica",
    "https://doc.modelica.org/Modelica%203.2.3/Resources/helpOM/Modelica",
    "https://doc.modelica.org/Modelica%204.0.0/Resources/helpOM/Complex",
    "https://doc.modelica.org/Modelica%203.2.3/Resources/helpOM/Complex",
    "https://doc.modelica.org/Modelica%203.2.3/Resources/helpOM/ObsoleteModelica3",
    "https://doc.modelica.org/Modelica%204.0.0/Resources/helpOM/ObsoleteModelica4",
    "https://doc.modelica.org/Modelica%204.0.0/Resources/helpWSM/Modelica/",
    "https://doc.modelica.org/Modelica%204.0.0/Resources/helpWSM/ModelicaReference/",
    "https://doc.modelica.org/Modelica%204.0.0/Resources/helpWSM/ModelicaServices/",
    "https://doc.modelica.org/Modelica%204.0.0/Resources/helpWSM/Complex/",
    "https://doc.modelica.org/Modelica%204.0.0/Resources/helpWSM/ObsoleteModelica3/",
    "https://doc.modelica.org/Modelica%203.2.3/Resources/helpWSM/Modelica/",
    "https://doc.modelica.org/Modelica%203.2.3/Resources/helpWSM/ModelicaReference/",
    "https://doc.modelica.org/Modelica%203.2.3/Resources/helpWSM/ModelicaServices/",
    "https://doc.modelica.org/Modelica%203.2.3/Resources/helpWSM/Complex/",
    "https://doc.modelica.org/Modelica%203.2.3/Resources/helpWSM/ObsoleteModelica3/",
    "https://specification.modelica.org/maint/3.5/",
    "https://specification.modelica.org/",
    "https://specification.modelica.org/maint/3.4/",
    "https://specification.modelica.org/master/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://doc.modelica.org/sitemap.xml"],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: [
    "https://doc.modelica.org/**",
    "https://specification.modelica.org/**",
  ],
  schedule: "at 10:30 on Thursday",
  actions: [
    {
      indexName: "modelica",
      pathsToMatch: [
        "https://doc.modelica.org/Modelica%204.0.0/Resources/helpDymola/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".ModelicaBaseClass, .ModelicaTableConnectors, .ModelicaTableContents, .ModelicaTableInputs, .ModelicaTableOutputs, .ModelicaTablePackageContent, .ModelicaTableParameters, .closed, section.components, section.connectors, section.extended-by, section.package-contents, section.parameters, section.used-in-components, section.used-in-examples";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h2",
            content: "p, li, .ModelicaDescription, .ltx_text",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "h3",
            lvl3: "h4",
            lvl4: "h5",
            lvl5: "h6",
            tool: {
              defaultValue: ["Dymola"],
            },
            version: {
              defaultValue: ["4.0.0"],
            },
            library: {
              defaultValue: ["Modelica"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "modelica",
      pathsToMatch: [
        "https://doc.modelica.org/Modelica%204.0.0/Resources/helpMapleSim/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".ModelicaBaseClass, .ModelicaTableConnectors, .ModelicaTableContents, .ModelicaTableInputs, .ModelicaTableOutputs, .ModelicaTablePackageContent, .ModelicaTableParameters, .closed, section.components, section.connectors, section.extended-by, section.package-contents, section.parameters, section.used-in-components, section.used-in-examples";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h2",
            content: "p, li, .ModelicaDescription, .ltx_text",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "h3",
            lvl3: "h4",
            lvl4: "h5",
            lvl5: "h6",
            tool: {
              defaultValue: ["MapleSim"],
            },
            version: {
              defaultValue: ["4.0.0"],
            },
            library: {
              defaultValue: ["Modelica"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "modelica",
      pathsToMatch: [
        "https://doc.modelica.org/Modelica%203.2.3/Resources/helpDymola/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".ModelicaBaseClass, .ModelicaTableConnectors, .ModelicaTableContents, .ModelicaTableInputs, .ModelicaTableOutputs, .ModelicaTablePackageContent, .ModelicaTableParameters, .closed, section.components, section.connectors, section.extended-by, section.package-contents, section.parameters, section.used-in-components, section.used-in-examples";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h2",
            content: "p, li, .ModelicaDescription, .ltx_text",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "h3",
            lvl3: "h4",
            lvl4: "h5",
            lvl5: "h6",
            tool: {
              defaultValue: ["Dymola"],
            },
            version: {
              defaultValue: ["3.2.3"],
            },
            library: {
              defaultValue: ["Modelica"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "modelica",
      pathsToMatch: [
        "https://doc.modelica.org/Modelica%203.2.3/Resources/helpMapleSim/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".ModelicaBaseClass, .ModelicaTableConnectors, .ModelicaTableContents, .ModelicaTableInputs, .ModelicaTableOutputs, .ModelicaTablePackageContent, .ModelicaTableParameters, .closed, section.components, section.connectors, section.extended-by, section.package-contents, section.parameters, section.used-in-components, section.used-in-examples";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h2",
            content: "p, li, .ModelicaDescription, .ltx_text",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "h3",
            lvl3: "h4",
            lvl4: "h5",
            lvl5: "h6",
            tool: {
              defaultValue: ["MapleSim"],
            },
            version: {
              defaultValue: ["3.2.3"],
            },
            library: {
              defaultValue: ["Modelica"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "modelica",
      pathsToMatch: [
        "https://doc.modelica.org/ModelicaReference%204.0.0/Resources/helpDymola/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".ModelicaBaseClass, .ModelicaTableConnectors, .ModelicaTableContents, .ModelicaTableInputs, .ModelicaTableOutputs, .ModelicaTablePackageContent, .ModelicaTableParameters, .closed, section.components, section.connectors, section.extended-by, section.package-contents, section.parameters, section.used-in-components, section.used-in-examples";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h2",
            content: "p, li, .ModelicaDescription, .ltx_text",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "h3",
            lvl3: "h4",
            lvl4: "h5",
            lvl5: "h6",
            tool: {
              defaultValue: ["Dymola"],
            },
            version: {
              defaultValue: ["4.0.0"],
            },
            library: {
              defaultValue: ["ModelicaReference"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "modelica",
      pathsToMatch: [
        "https://doc.modelica.org/ModelicaReference%204.0.0/Resources/helpMapleSim/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".ModelicaBaseClass, .ModelicaTableConnectors, .ModelicaTableContents, .ModelicaTableInputs, .ModelicaTableOutputs, .ModelicaTablePackageContent, .ModelicaTableParameters, .closed, section.components, section.connectors, section.extended-by, section.package-contents, section.parameters, section.used-in-components, section.used-in-examples";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h2",
            content: "p, li, .ModelicaDescription, .ltx_text",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "h3",
            lvl3: "h4",
            lvl4: "h5",
            lvl5: "h6",
            tool: {
              defaultValue: ["MapleSim"],
            },
            version: {
              defaultValue: ["4.0.0"],
            },
            library: {
              defaultValue: ["ModelicaReference"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "modelica",
      pathsToMatch: [
        "https://doc.modelica.org/ModelicaReference%203.2.3/Resources/helpDymola/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".ModelicaBaseClass, .ModelicaTableConnectors, .ModelicaTableContents, .ModelicaTableInputs, .ModelicaTableOutputs, .ModelicaTablePackageContent, .ModelicaTableParameters, .closed, section.components, section.connectors, section.extended-by, section.package-contents, section.parameters, section.used-in-components, section.used-in-examples";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h2",
            content: "p, li, .ModelicaDescription, .ltx_text",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "h3",
            lvl3: "h4",
            lvl4: "h5",
            lvl5: "h6",
            tool: {
              defaultValue: ["Dymola"],
            },
            version: {
              defaultValue: ["3.2.3"],
            },
            library: {
              defaultValue: ["ModelicaReference"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "modelica",
      pathsToMatch: [
        "https://doc.modelica.org/ModelicaReference%203.2.3/Resources/helpMapleSim/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".ModelicaBaseClass, .ModelicaTableConnectors, .ModelicaTableContents, .ModelicaTableInputs, .ModelicaTableOutputs, .ModelicaTablePackageContent, .ModelicaTableParameters, .closed, section.components, section.connectors, section.extended-by, section.package-contents, section.parameters, section.used-in-components, section.used-in-examples";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h2",
            content: "p, li, .ModelicaDescription, .ltx_text",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "h3",
            lvl3: "h4",
            lvl4: "h5",
            lvl5: "h6",
            tool: {
              defaultValue: ["MapleSim"],
            },
            version: {
              defaultValue: ["3.2.3"],
            },
            library: {
              defaultValue: ["ModelicaReference"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "modelica",
      pathsToMatch: [
        "https://doc.modelica.org/ModelicaServices%204.0.0/Resources/helpDymola/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".ModelicaBaseClass, .ModelicaTableConnectors, .ModelicaTableContents, .ModelicaTableInputs, .ModelicaTableOutputs, .ModelicaTablePackageContent, .ModelicaTableParameters, .closed, section.components, section.connectors, section.extended-by, section.package-contents, section.parameters, section.used-in-components, section.used-in-examples";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h2",
            content: "p, li, .ModelicaDescription, .ltx_text",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "h3",
            lvl3: "h4",
            lvl4: "h5",
            lvl5: "h6",
            tool: {
              defaultValue: ["Dymola"],
            },
            version: {
              defaultValue: ["4.0.0"],
            },
            library: {
              defaultValue: ["ModelicaServices"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "modelica",
      pathsToMatch: [
        "https://doc.modelica.org/ModelicaServices%204.0.0/Resources/helpMapleSim/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".ModelicaBaseClass, .ModelicaTableConnectors, .ModelicaTableContents, .ModelicaTableInputs, .ModelicaTableOutputs, .ModelicaTablePackageContent, .ModelicaTableParameters, .closed, section.components, section.connectors, section.extended-by, section.package-contents, section.parameters, section.used-in-components, section.used-in-examples";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h2",
            content: "p, li, .ModelicaDescription, .ltx_text",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "h3",
            lvl3: "h4",
            lvl4: "h5",
            lvl5: "h6",
            tool: {
              defaultValue: ["MapleSim"],
            },
            version: {
              defaultValue: ["4.0.0"],
            },
            library: {
              defaultValue: ["ModelicaServices"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "modelica",
      pathsToMatch: [
        "https://doc.modelica.org/ModelicaServices%203.2.3/Resources/helpDymola/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".ModelicaBaseClass, .ModelicaTableConnectors, .ModelicaTableContents, .ModelicaTableInputs, .ModelicaTableOutputs, .ModelicaTablePackageContent, .ModelicaTableParameters, .closed, section.components, section.connectors, section.extended-by, section.package-contents, section.parameters, section.used-in-components, section.used-in-examples";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h2",
            content: "p, li, .ModelicaDescription, .ltx_text",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "h3",
            lvl3: "h4",
            lvl4: "h5",
            lvl5: "h6",
            tool: {
              defaultValue: ["Dymola"],
            },
            version: {
              defaultValue: ["3.2.3"],
            },
            library: {
              defaultValue: ["ModelicaServices"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "modelica",
      pathsToMatch: [
        "https://doc.modelica.org/ModelicaServices%203.2.3/Resources/helpMapleSim/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".ModelicaBaseClass, .ModelicaTableConnectors, .ModelicaTableContents, .ModelicaTableInputs, .ModelicaTableOutputs, .ModelicaTablePackageContent, .ModelicaTableParameters, .closed, section.components, section.connectors, section.extended-by, section.package-contents, section.parameters, section.used-in-components, section.used-in-examples";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h2",
            content: "p, li, .ModelicaDescription, .ltx_text",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "h3",
            lvl3: "h4",
            lvl4: "h5",
            lvl5: "h6",
            tool: {
              defaultValue: ["MapleSim"],
            },
            version: {
              defaultValue: ["3.2.3"],
            },
            library: {
              defaultValue: ["ModelicaServices"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "modelica",
      pathsToMatch: [
        "https://doc.modelica.org/Complex%204.0.0/Resources/helpDymola/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".ModelicaBaseClass, .ModelicaTableConnectors, .ModelicaTableContents, .ModelicaTableInputs, .ModelicaTableOutputs, .ModelicaTablePackageContent, .ModelicaTableParameters, .closed, section.components, section.connectors, section.extended-by, section.package-contents, section.parameters, section.used-in-components, section.used-in-examples";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h2",
            content: "p, li, .ModelicaDescription, .ltx_text",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "h3",
            lvl3: "h4",
            lvl4: "h5",
            lvl5: "h6",
            tool: {
              defaultValue: ["Dymola"],
            },
            version: {
              defaultValue: ["4.0.0"],
            },
            library: {
              defaultValue: ["Complex"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "modelica",
      pathsToMatch: [
        "https://doc.modelica.org/Complex%204.0.0/Resources/helpMapleSim/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".ModelicaBaseClass, .ModelicaTableConnectors, .ModelicaTableContents, .ModelicaTableInputs, .ModelicaTableOutputs, .ModelicaTablePackageContent, .ModelicaTableParameters, .closed, section.components, section.connectors, section.extended-by, section.package-contents, section.parameters, section.used-in-components, section.used-in-examples";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h2",
            content: "p, li, .ModelicaDescription, .ltx_text",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "h3",
            lvl3: "h4",
            lvl4: "h5",
            lvl5: "h6",
            tool: {
              defaultValue: ["MapleSim"],
            },
            version: {
              defaultValue: ["4.0.0"],
            },
            library: {
              defaultValue: ["Complex"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "modelica",
      pathsToMatch: [
        "https://doc.modelica.org/Complex%203.2.3/Resources/helpDymola/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".ModelicaBaseClass, .ModelicaTableConnectors, .ModelicaTableContents, .ModelicaTableInputs, .ModelicaTableOutputs, .ModelicaTablePackageContent, .ModelicaTableParameters, .closed, section.components, section.connectors, section.extended-by, section.package-contents, section.parameters, section.used-in-components, section.used-in-examples";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h2",
            content: "p, li, .ModelicaDescription, .ltx_text",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "h3",
            lvl3: "h4",
            lvl4: "h5",
            lvl5: "h6",
            tool: {
              defaultValue: ["Dymola"],
            },
            version: {
              defaultValue: ["3.2.3"],
            },
            library: {
              defaultValue: ["Complex"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "modelica",
      pathsToMatch: [
        "https://doc.modelica.org/Complex%203.2.3/Resources/helpMapleSim/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".ModelicaBaseClass, .ModelicaTableConnectors, .ModelicaTableContents, .ModelicaTableInputs, .ModelicaTableOutputs, .ModelicaTablePackageContent, .ModelicaTableParameters, .closed, section.components, section.connectors, section.extended-by, section.package-contents, section.parameters, section.used-in-components, section.used-in-examples";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h2",
            content: "p, li, .ModelicaDescription, .ltx_text",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "h3",
            lvl3: "h4",
            lvl4: "h5",
            lvl5: "h6",
            tool: {
              defaultValue: ["MapleSim"],
            },
            version: {
              defaultValue: ["3.2.3"],
            },
            library: {
              defaultValue: ["Complex"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "modelica",
      pathsToMatch: [
        "https://doc.modelica.org/ObsoleteModelica4%204.0.0/Resources/helpDymola/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".ModelicaBaseClass, .ModelicaTableConnectors, .ModelicaTableContents, .ModelicaTableInputs, .ModelicaTableOutputs, .ModelicaTablePackageContent, .ModelicaTableParameters, .closed, section.components, section.connectors, section.extended-by, section.package-contents, section.parameters, section.used-in-components, section.used-in-examples";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h2",
            content: "p, li, .ModelicaDescription, .ltx_text",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "h3",
            lvl3: "h4",
            lvl4: "h5",
            lvl5: "h6",
            tool: {
              defaultValue: ["Dymola"],
            },
            version: {
              defaultValue: ["4.0.0"],
            },
            library: {
              defaultValue: ["ObsoleteModelica4"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "modelica",
      pathsToMatch: [
        "https://doc.modelica.org/ObsoleteModelica4%204.0.0/Resources/helpMapleSim/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".ModelicaBaseClass, .ModelicaTableConnectors, .ModelicaTableContents, .ModelicaTableInputs, .ModelicaTableOutputs, .ModelicaTablePackageContent, .ModelicaTableParameters, .closed, section.components, section.connectors, section.extended-by, section.package-contents, section.parameters, section.used-in-components, section.used-in-examples";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h2",
            content: "p, li, .ModelicaDescription, .ltx_text",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "h3",
            lvl3: "h4",
            lvl4: "h5",
            lvl5: "h6",
            tool: {
              defaultValue: ["MapleSim"],
            },
            version: {
              defaultValue: ["4.0.0"],
            },
            library: {
              defaultValue: ["ObsoleteModelica4"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "modelica",
      pathsToMatch: [
        "https://doc.modelica.org/ObsoleteModelica4%203.2.3/Resources/helpDymola/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".ModelicaBaseClass, .ModelicaTableConnectors, .ModelicaTableContents, .ModelicaTableInputs, .ModelicaTableOutputs, .ModelicaTablePackageContent, .ModelicaTableParameters, .closed, section.components, section.connectors, section.extended-by, section.package-contents, section.parameters, section.used-in-components, section.used-in-examples";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h2",
            content: "p, li, .ModelicaDescription, .ltx_text",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "h3",
            lvl3: "h4",
            lvl4: "h5",
            lvl5: "h6",
            tool: {
              defaultValue: ["Dymola"],
            },
            version: {
              defaultValue: ["3.2.3"],
            },
            library: {
              defaultValue: ["ObsoleteModelica4"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "modelica",
      pathsToMatch: [
        "https://doc.modelica.org/ObsoleteModelica4%203.2.3/Resources/helpMapleSim/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".ModelicaBaseClass, .ModelicaTableConnectors, .ModelicaTableContents, .ModelicaTableInputs, .ModelicaTableOutputs, .ModelicaTablePackageContent, .ModelicaTableParameters, .closed, section.components, section.connectors, section.extended-by, section.package-contents, section.parameters, section.used-in-components, section.used-in-examples";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h2",
            content: "p, li, .ModelicaDescription, .ltx_text",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "h3",
            lvl3: "h4",
            lvl4: "h5",
            lvl5: "h6",
            tool: {
              defaultValue: ["MapleSim"],
            },
            version: {
              defaultValue: ["3.2.3"],
            },
            library: {
              defaultValue: ["ObsoleteModelica4"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "modelica",
      pathsToMatch: [
        "https://doc.modelica.org/ObsoleteModelica3%204.0.0/Resources/helpDymola/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".ModelicaBaseClass, .ModelicaTableConnectors, .ModelicaTableContents, .ModelicaTableInputs, .ModelicaTableOutputs, .ModelicaTablePackageContent, .ModelicaTableParameters, .closed, section.components, section.connectors, section.extended-by, section.package-contents, section.parameters, section.used-in-components, section.used-in-examples";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h2",
            content: "p, li, .ModelicaDescription, .ltx_text",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "h3",
            lvl3: "h4",
            lvl4: "h5",
            lvl5: "h6",
            tool: {
              defaultValue: ["Dymola"],
            },
            version: {
              defaultValue: ["4.0.0"],
            },
            library: {
              defaultValue: ["ObsoleteModelica3"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "modelica",
      pathsToMatch: [
        "https://doc.modelica.org/ObsoleteModelica3%204.0.0/Resources/helpMapleSim/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".ModelicaBaseClass, .ModelicaTableConnectors, .ModelicaTableContents, .ModelicaTableInputs, .ModelicaTableOutputs, .ModelicaTablePackageContent, .ModelicaTableParameters, .closed, section.components, section.connectors, section.extended-by, section.package-contents, section.parameters, section.used-in-components, section.used-in-examples";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h2",
            content: "p, li, .ModelicaDescription, .ltx_text",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "h3",
            lvl3: "h4",
            lvl4: "h5",
            lvl5: "h6",
            tool: {
              defaultValue: ["MapleSim"],
            },
            version: {
              defaultValue: ["4.0.0"],
            },
            library: {
              defaultValue: ["ObsoleteModelica3"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "modelica",
      pathsToMatch: [
        "https://doc.modelica.org/ObsoleteModelica3%203.2.3/Resources/helpDymola/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".ModelicaBaseClass, .ModelicaTableConnectors, .ModelicaTableContents, .ModelicaTableInputs, .ModelicaTableOutputs, .ModelicaTablePackageContent, .ModelicaTableParameters, .closed, section.components, section.connectors, section.extended-by, section.package-contents, section.parameters, section.used-in-components, section.used-in-examples";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h2",
            content: "p, li, .ModelicaDescription, .ltx_text",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "h3",
            lvl3: "h4",
            lvl4: "h5",
            lvl5: "h6",
            tool: {
              defaultValue: ["Dymola"],
            },
            version: {
              defaultValue: ["3.2.3"],
            },
            library: {
              defaultValue: ["ObsoleteModelica3"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "modelica",
      pathsToMatch: [
        "https://doc.modelica.org/ObsoleteModelica3%203.2.3/Resources/helpMapleSim/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".ModelicaBaseClass, .ModelicaTableConnectors, .ModelicaTableContents, .ModelicaTableInputs, .ModelicaTableOutputs, .ModelicaTablePackageContent, .ModelicaTableParameters, .closed, section.components, section.connectors, section.extended-by, section.package-contents, section.parameters, section.used-in-components, section.used-in-examples";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h2",
            content: "p, li, .ModelicaDescription, .ltx_text",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "h3",
            lvl3: "h4",
            lvl4: "h5",
            lvl5: "h6",
            tool: {
              defaultValue: ["MapleSim"],
            },
            version: {
              defaultValue: ["3.2.3"],
            },
            library: {
              defaultValue: ["ObsoleteModelica3"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "modelica",
      pathsToMatch: [
        "https://doc.modelica.org/Modelica%204.0.0/Resources/helpOM/ModelicaReference**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".ModelicaBaseClass, .ModelicaTableConnectors, .ModelicaTableContents, .ModelicaTableInputs, .ModelicaTableOutputs, .ModelicaTablePackageContent, .ModelicaTableParameters, .closed, section.components, section.connectors, section.extended-by, section.package-contents, section.parameters, section.used-in-components, section.used-in-examples";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h2",
            content: "p, li, .ModelicaDescription, .ltx_text",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "h3",
            lvl3: "h4",
            lvl4: "h5",
            lvl5: "h6",
            tool: {
              defaultValue: ["OM"],
            },
            version: {
              defaultValue: ["4.0.0"],
            },
            library: {
              defaultValue: ["ModelicaReference"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "modelica",
      pathsToMatch: [
        "https://doc.modelica.org/Modelica%203.2.3/Resources/helpOM/ModelicaReference**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".ModelicaBaseClass, .ModelicaTableConnectors, .ModelicaTableContents, .ModelicaTableInputs, .ModelicaTableOutputs, .ModelicaTablePackageContent, .ModelicaTableParameters, .closed, section.components, section.connectors, section.extended-by, section.package-contents, section.parameters, section.used-in-components, section.used-in-examples";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h2",
            content: "p, li, .ModelicaDescription, .ltx_text",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "h3",
            lvl3: "h4",
            lvl4: "h5",
            lvl5: "h6",
            tool: {
              defaultValue: ["OM"],
            },
            version: {
              defaultValue: ["3.2.3"],
            },
            library: {
              defaultValue: ["ModelicaReference"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "modelica",
      pathsToMatch: [
        "https://doc.modelica.org/Modelica%204.0.0/Resources/helpOM/ModelicaServices**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".ModelicaBaseClass, .ModelicaTableConnectors, .ModelicaTableContents, .ModelicaTableInputs, .ModelicaTableOutputs, .ModelicaTablePackageContent, .ModelicaTableParameters, .closed, section.components, section.connectors, section.extended-by, section.package-contents, section.parameters, section.used-in-components, section.used-in-examples";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h2",
            content: "p, li, .ModelicaDescription, .ltx_text",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "h3",
            lvl3: "h4",
            lvl4: "h5",
            lvl5: "h6",
            tool: {
              defaultValue: ["OM"],
            },
            version: {
              defaultValue: ["4.0.0"],
            },
            library: {
              defaultValue: ["ModelicaServices"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "modelica",
      pathsToMatch: [
        "https://doc.modelica.org/Modelica%203.2.3/Resources/helpOM/ModelicaServices**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".ModelicaBaseClass, .ModelicaTableConnectors, .ModelicaTableContents, .ModelicaTableInputs, .ModelicaTableOutputs, .ModelicaTablePackageContent, .ModelicaTableParameters, .closed, section.components, section.connectors, section.extended-by, section.package-contents, section.parameters, section.used-in-components, section.used-in-examples";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h2",
            content: "p, li, .ModelicaDescription, .ltx_text",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "h3",
            lvl3: "h4",
            lvl4: "h5",
            lvl5: "h6",
            tool: {
              defaultValue: ["OM"],
            },
            version: {
              defaultValue: ["3.2.3"],
            },
            library: {
              defaultValue: ["ModelicaServices"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "modelica",
      pathsToMatch: [
        "https://doc.modelica.org/Modelica%204.0.0/Resources/helpOM/Modelica**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".ModelicaBaseClass, .ModelicaTableConnectors, .ModelicaTableContents, .ModelicaTableInputs, .ModelicaTableOutputs, .ModelicaTablePackageContent, .ModelicaTableParameters, .closed, section.components, section.connectors, section.extended-by, section.package-contents, section.parameters, section.used-in-components, section.used-in-examples";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h2",
            content: "p, li, .ModelicaDescription, .ltx_text",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "h3",
            lvl3: "h4",
            lvl4: "h5",
            lvl5: "h6",
            tool: {
              defaultValue: ["OM"],
            },
            version: {
              defaultValue: ["4.0.0"],
            },
            library: {
              defaultValue: ["Modelica"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "modelica",
      pathsToMatch: [
        "https://doc.modelica.org/Modelica%203.2.3/Resources/helpOM/Modelica**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".ModelicaBaseClass, .ModelicaTableConnectors, .ModelicaTableContents, .ModelicaTableInputs, .ModelicaTableOutputs, .ModelicaTablePackageContent, .ModelicaTableParameters, .closed, section.components, section.connectors, section.extended-by, section.package-contents, section.parameters, section.used-in-components, section.used-in-examples";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h2",
            content: "p, li, .ModelicaDescription, .ltx_text",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "h3",
            lvl3: "h4",
            lvl4: "h5",
            lvl5: "h6",
            tool: {
              defaultValue: ["OM"],
            },
            version: {
              defaultValue: ["3.2.3"],
            },
            library: {
              defaultValue: ["Modelica"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "modelica",
      pathsToMatch: [
        "https://doc.modelica.org/Modelica%204.0.0/Resources/helpOM/Complex**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".ModelicaBaseClass, .ModelicaTableConnectors, .ModelicaTableContents, .ModelicaTableInputs, .ModelicaTableOutputs, .ModelicaTablePackageContent, .ModelicaTableParameters, .closed, section.components, section.connectors, section.extended-by, section.package-contents, section.parameters, section.used-in-components, section.used-in-examples";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h2",
            content: "p, li, .ModelicaDescription, .ltx_text",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "h3",
            lvl3: "h4",
            lvl4: "h5",
            lvl5: "h6",
            tool: {
              defaultValue: ["OM"],
            },
            version: {
              defaultValue: ["4.0.0"],
            },
            library: {
              defaultValue: ["Complex"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "modelica",
      pathsToMatch: [
        "https://doc.modelica.org/Modelica%203.2.3/Resources/helpOM/Complex**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".ModelicaBaseClass, .ModelicaTableConnectors, .ModelicaTableContents, .ModelicaTableInputs, .ModelicaTableOutputs, .ModelicaTablePackageContent, .ModelicaTableParameters, .closed, section.components, section.connectors, section.extended-by, section.package-contents, section.parameters, section.used-in-components, section.used-in-examples";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h2",
            content: "p, li, .ModelicaDescription, .ltx_text",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "h3",
            lvl3: "h4",
            lvl4: "h5",
            lvl5: "h6",
            tool: {
              defaultValue: ["OM"],
            },
            version: {
              defaultValue: ["3.2.3"],
            },
            library: {
              defaultValue: ["Complex"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "modelica",
      pathsToMatch: [
        "https://doc.modelica.org/Modelica%203.2.3/Resources/helpOM/ObsoleteModelica3**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".ModelicaBaseClass, .ModelicaTableConnectors, .ModelicaTableContents, .ModelicaTableInputs, .ModelicaTableOutputs, .ModelicaTablePackageContent, .ModelicaTableParameters, .closed, section.components, section.connectors, section.extended-by, section.package-contents, section.parameters, section.used-in-components, section.used-in-examples";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h2",
            content: "p, li, .ModelicaDescription, .ltx_text",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "h3",
            lvl3: "h4",
            lvl4: "h5",
            lvl5: "h6",
            tool: {
              defaultValue: ["OM"],
            },
            version: {
              defaultValue: ["3.2.3"],
            },
            library: {
              defaultValue: ["ObsoleteModelica3"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "modelica",
      pathsToMatch: [
        "https://doc.modelica.org/Modelica%204.0.0/Resources/helpOM/ObsoleteModelica4**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".ModelicaBaseClass, .ModelicaTableConnectors, .ModelicaTableContents, .ModelicaTableInputs, .ModelicaTableOutputs, .ModelicaTablePackageContent, .ModelicaTableParameters, .closed, section.components, section.connectors, section.extended-by, section.package-contents, section.parameters, section.used-in-components, section.used-in-examples";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h2",
            content: "p, li, .ModelicaDescription, .ltx_text",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "h3",
            lvl3: "h4",
            lvl4: "h5",
            lvl5: "h6",
            tool: {
              defaultValue: ["OM"],
            },
            version: {
              defaultValue: ["4.0.0"],
            },
            library: {
              defaultValue: ["ObsoleteModelica4"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "modelica",
      pathsToMatch: [
        "https://doc.modelica.org/Modelica%204.0.0/Resources/helpWSM/Modelica/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".ModelicaBaseClass, .ModelicaTableConnectors, .ModelicaTableContents, .ModelicaTableInputs, .ModelicaTableOutputs, .ModelicaTablePackageContent, .ModelicaTableParameters, .closed, section.components, section.connectors, section.extended-by, section.package-contents, section.parameters, section.used-in-components, section.used-in-examples";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h2",
            content: "p, li, .ModelicaDescription, .ltx_text",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "h3",
            lvl3: "h4",
            lvl4: "h5",
            lvl5: "h6",
            library: {
              defaultValue: ["Modelica"],
            },
            tool: {
              defaultValue: ["WSM"],
            },
            version: {
              defaultValue: ["4.0.0"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "modelica",
      pathsToMatch: [
        "https://doc.modelica.org/Modelica%204.0.0/Resources/helpWSM/ModelicaReference/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".ModelicaBaseClass, .ModelicaTableConnectors, .ModelicaTableContents, .ModelicaTableInputs, .ModelicaTableOutputs, .ModelicaTablePackageContent, .ModelicaTableParameters, .closed, section.components, section.connectors, section.extended-by, section.package-contents, section.parameters, section.used-in-components, section.used-in-examples";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h2",
            content: "p, li, .ModelicaDescription, .ltx_text",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "h3",
            lvl3: "h4",
            lvl4: "h5",
            lvl5: "h6",
            library: {
              defaultValue: ["ModelicaReference"],
            },
            tool: {
              defaultValue: ["WSM"],
            },
            version: {
              defaultValue: ["4.0.0"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "modelica",
      pathsToMatch: [
        "https://doc.modelica.org/Modelica%204.0.0/Resources/helpWSM/ModelicaServices/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".ModelicaBaseClass, .ModelicaTableConnectors, .ModelicaTableContents, .ModelicaTableInputs, .ModelicaTableOutputs, .ModelicaTablePackageContent, .ModelicaTableParameters, .closed, section.components, section.connectors, section.extended-by, section.package-contents, section.parameters, section.used-in-components, section.used-in-examples";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h2",
            content: "p, li, .ModelicaDescription, .ltx_text",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "h3",
            lvl3: "h4",
            lvl4: "h5",
            lvl5: "h6",
            library: {
              defaultValue: ["ModelicaServices"],
            },
            tool: {
              defaultValue: ["WSM"],
            },
            version: {
              defaultValue: ["4.0.0"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "modelica",
      pathsToMatch: [
        "https://doc.modelica.org/Modelica%204.0.0/Resources/helpWSM/Complex/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".ModelicaBaseClass, .ModelicaTableConnectors, .ModelicaTableContents, .ModelicaTableInputs, .ModelicaTableOutputs, .ModelicaTablePackageContent, .ModelicaTableParameters, .closed, section.components, section.connectors, section.extended-by, section.package-contents, section.parameters, section.used-in-components, section.used-in-examples";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h2",
            content: "p, li, .ModelicaDescription, .ltx_text",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "h3",
            lvl3: "h4",
            lvl4: "h5",
            lvl5: "h6",
            library: {
              defaultValue: ["Complex"],
            },
            tool: {
              defaultValue: ["WSM"],
            },
            version: {
              defaultValue: ["4.0.0"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "modelica",
      pathsToMatch: [
        "https://doc.modelica.org/Modelica%204.0.0/Resources/helpWSM/ObsoleteModelica3/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".ModelicaBaseClass, .ModelicaTableConnectors, .ModelicaTableContents, .ModelicaTableInputs, .ModelicaTableOutputs, .ModelicaTablePackageContent, .ModelicaTableParameters, .closed, section.components, section.connectors, section.extended-by, section.package-contents, section.parameters, section.used-in-components, section.used-in-examples";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h2",
            content: "p, li, .ModelicaDescription, .ltx_text",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "h3",
            lvl3: "h4",
            lvl4: "h5",
            lvl5: "h6",
            library: {
              defaultValue: ["ObsoleteModelica3"],
            },
            tool: {
              defaultValue: ["WSM"],
            },
            version: {
              defaultValue: ["4.0.0"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "modelica",
      pathsToMatch: [
        "https://doc.modelica.org/Modelica%203.2.3/Resources/helpWSM/Modelica/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".ModelicaBaseClass, .ModelicaTableConnectors, .ModelicaTableContents, .ModelicaTableInputs, .ModelicaTableOutputs, .ModelicaTablePackageContent, .ModelicaTableParameters, .closed, section.components, section.connectors, section.extended-by, section.package-contents, section.parameters, section.used-in-components, section.used-in-examples";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h2",
            content: "p, li, .ModelicaDescription, .ltx_text",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "h3",
            lvl3: "h4",
            lvl4: "h5",
            lvl5: "h6",
            library: {
              defaultValue: ["Modelica"],
            },
            tool: {
              defaultValue: ["WSM"],
            },
            version: {
              defaultValue: ["3.2.3"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "modelica",
      pathsToMatch: [
        "https://doc.modelica.org/Modelica%203.2.3/Resources/helpWSM/ModelicaReference/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".ModelicaBaseClass, .ModelicaTableConnectors, .ModelicaTableContents, .ModelicaTableInputs, .ModelicaTableOutputs, .ModelicaTablePackageContent, .ModelicaTableParameters, .closed, section.components, section.connectors, section.extended-by, section.package-contents, section.parameters, section.used-in-components, section.used-in-examples";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h2",
            content: "p, li, .ModelicaDescription, .ltx_text",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "h3",
            lvl3: "h4",
            lvl4: "h5",
            lvl5: "h6",
            library: {
              defaultValue: ["ModelicaReference"],
            },
            tool: {
              defaultValue: ["WSM"],
            },
            version: {
              defaultValue: ["3.2.3"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "modelica",
      pathsToMatch: [
        "https://doc.modelica.org/Modelica%203.2.3/Resources/helpWSM/ModelicaServices/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".ModelicaBaseClass, .ModelicaTableConnectors, .ModelicaTableContents, .ModelicaTableInputs, .ModelicaTableOutputs, .ModelicaTablePackageContent, .ModelicaTableParameters, .closed, section.components, section.connectors, section.extended-by, section.package-contents, section.parameters, section.used-in-components, section.used-in-examples";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h2",
            content: "p, li, .ModelicaDescription, .ltx_text",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "h3",
            lvl3: "h4",
            lvl4: "h5",
            lvl5: "h6",
            library: {
              defaultValue: ["ModelicaServices"],
            },
            tool: {
              defaultValue: ["WSM"],
            },
            version: {
              defaultValue: ["3.2.3"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "modelica",
      pathsToMatch: [
        "https://doc.modelica.org/Modelica%203.2.3/Resources/helpWSM/Complex/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".ModelicaBaseClass, .ModelicaTableConnectors, .ModelicaTableContents, .ModelicaTableInputs, .ModelicaTableOutputs, .ModelicaTablePackageContent, .ModelicaTableParameters, .closed, section.components, section.connectors, section.extended-by, section.package-contents, section.parameters, section.used-in-components, section.used-in-examples";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h2",
            content: "p, li, .ModelicaDescription, .ltx_text",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "h3",
            lvl3: "h4",
            lvl4: "h5",
            lvl5: "h6",
            library: {
              defaultValue: ["Complex"],
            },
            tool: {
              defaultValue: ["WSM"],
            },
            version: {
              defaultValue: ["3.2.3"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "modelica",
      pathsToMatch: [
        "https://doc.modelica.org/Modelica%203.2.3/Resources/helpWSM/ObsoleteModelica3/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".ModelicaBaseClass, .ModelicaTableConnectors, .ModelicaTableContents, .ModelicaTableInputs, .ModelicaTableOutputs, .ModelicaTablePackageContent, .ModelicaTableParameters, .closed, section.components, section.connectors, section.extended-by, section.package-contents, section.parameters, section.used-in-components, section.used-in-examples";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h2",
            content: "p, li, .ModelicaDescription, .ltx_text",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "h3",
            lvl3: "h4",
            lvl4: "h5",
            lvl5: "h6",
            library: {
              defaultValue: ["ObsoleteModelica3"],
            },
            tool: {
              defaultValue: ["WSM"],
            },
            version: {
              defaultValue: ["3.2.3"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "modelica",
      pathsToMatch: ["https://specification.modelica.org/maint/3.5/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".ModelicaBaseClass, .ModelicaTableConnectors, .ModelicaTableContents, .ModelicaTableInputs, .ModelicaTableOutputs, .ModelicaTablePackageContent, .ModelicaTableParameters, .closed, section.components, section.connectors, section.extended-by, section.package-contents, section.parameters, section.used-in-components, section.used-in-examples";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h2",
            content: "p, li, .ModelicaDescription, .ltx_text",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "h3",
            lvl3: "h4",
            lvl4: "h5",
            lvl5: "h6",
            version: {
              defaultValue: ["3.5"],
            },
            tags: {
              defaultValue: ["specification"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "modelica",
      pathsToMatch: ["https://specification.modelica.org/maint/3.4/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".ModelicaBaseClass, .ModelicaTableConnectors, .ModelicaTableContents, .ModelicaTableInputs, .ModelicaTableOutputs, .ModelicaTablePackageContent, .ModelicaTableParameters, .closed, section.components, section.connectors, section.extended-by, section.package-contents, section.parameters, section.used-in-components, section.used-in-examples";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h2",
            content: "p, li, .ModelicaDescription, .ltx_text",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "h3",
            lvl3: "h4",
            lvl4: "h5",
            lvl5: "h6",
            version: {
              defaultValue: ["3.4"],
            },
            tags: {
              defaultValue: ["specification"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
    {
      indexName: "modelica",
      pathsToMatch: ["https://specification.modelica.org/master/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove =
          ".ModelicaBaseClass, .ModelicaTableConnectors, .ModelicaTableContents, .ModelicaTableInputs, .ModelicaTableOutputs, .ModelicaTablePackageContent, .ModelicaTableParameters, .closed, section.components, section.connectors, section.extended-by, section.package-contents, section.parameters, section.used-in-components, section.used-in-examples";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "h2",
            content: "p, li, .ModelicaDescription, .ltx_text",
            lvl0: {
              selectors: "h1",
            },
            lvl2: "h3",
            lvl3: "h4",
            lvl4: "h5",
            lvl5: "h6",
            version: {
              defaultValue: ["master"],
            },
            tags: {
              defaultValue: ["specification"],
            },
          },
          indexHeadings: { from: 1, to: 6 },
        });
      },
    },
  ],
  initialIndexSettings: {
    modelica: {
      attributesForFaceting: [
        "type",
        "lang",
        "tags",
        "tool",
        "version",
        "library",
      ],
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