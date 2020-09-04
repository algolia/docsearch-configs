# DocSearch configurations

This repository holds configuration files used by each documentation DocSearch
is indexing.

If you're looking for a way to add DocSearch to your site, you should visit the
[main website instead][1]. If you want to have a look at existing
configurations and see yours, you've come to the right place.

## Options

Please check the [dedicated documentation][2] to have the list of all available
options along with examples.

## Related projects

DocSearch is made of 3 repositories:

- [algolia/docsearch][3] contains the `docsearch.js` code source and the
  documentation website.
- [algolia/docsearch-configs][4] contains the JSON files representing all the
  configs for all the documentations DocSearch is powering
- [algolia/docsearch-scraper][5] contains the crawler we use to extract data
  from your documentation. The code is open-source and you can run it from
  a Docker image


[1]: https://docsearch.algolia.com/
[2]: https://docsearch.algolia.com/docs/config-file
[3]: https://github.com/algolia/docsearch
[4]: https://github.com/algolia/docsearch-configs
[5]: https://github.com/algolia/docsearch-scraper
