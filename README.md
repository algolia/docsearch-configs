# DocSearch configurations

This is the repository hosting the public [DocSearch](https://community.algolia.com/docsearch/) configurations.

## Configuration format

The configuration files can be found here
https://github.com/algolia/docsearch-configs

A configuration file should look like:

```json
{
    "index_name": "stripe",
    "start_urls": [
        "https://stripe.com/docs"
    ],
    "stop_urls": [
        "https://stripe.com/docs/api"
    ],
    "selectors_exclude": [
        ".method-list",
        "aside.note"
    ],
    "selectors": {
      "lvl0": "#content header h1",
      "lvl1": "#content article h1",
      "lvl2": "#content section h3",
      "lvl3": "#content section h4",
      "lvl4": "#content section h5",
      "lvl5": "#content section h6",
      "text": "#content header p,#content section p,#content section ol"
    }
}
```

### `index_name`

**Mandatory**

Name of the Algolia index where all the data will be pushed. If the `PREFIX` environment variable is defined, it will be prefixed
with it.

### `start_urls`

**Mandatory**

You can pass either a string or an array of urls. The crawler will go to each
page in order, following every link it finds on the page. It will only stop if
the domain is outside of the `allowed_domains` or if the link is blacklisted in
`stop_urls`.
Strings will be considered as regex.

Note that it currently does not follow 301 redirects.

### `selectors`

**Mandatory**

This object contains all the CSS selectors that will be used to create the
record hierarchy. It contains 6 levels (`lvl0`, `lvl1`, `lvl2`, `lvl3`, `lvl4`,
`lvl5`) and `text`. You should fill at least the three first levels for better
relevance.

A default config would be to target the page `title` or `h1` as `lvl0`, the `h2`
as `lvl1` and `h3` as `lvl2`. `text` is usually any `p` of text.

#### Global selectors

It's possible to make a selector global which mean that all records for the page will have
this value. This is useful when you have a title that in right sidebar because
the sidebar is after the content on dom.

```json
"selectors": {
  "lvl0": {
    "selector": "#content header h1",
    "global": true
  }
}
```

#### Xpath selector

By default selector are considered css selectors but you can specify that a selector is an xpath one.
This is useful when you want to do more complex selection like selecting the parent of a node.

```json
"selectors": {
  "lvl0": {
    "selector": "//li[@class=\"chapter active done\"]/../../a",
    "type": "xpath"
  }
}
```

#### Default value

You have the possibility to add a default value. If the given selector doesn't match anything in a page
then for each record the default value will be set

```json
"selectors": {
  "lvl0": {
    "selector": "#content article h1",
    "default_value": "Documentation"
  }
}
```

#### Strip Chars

You can override the default `strip_chars` per level

```json
"selectors": {
  "lvl0": {
    "selector": "#content article h1",
    "strip_chars": " .,;:"
  }
}
```

### `allowed_domains`

You can pass either a string or an array of strings. This is the whitelist of
domains the crawler will scan. If a link targets a page that is not in the
whitelist, the crawler will not follow it.

Default is the domain of the first element in the `start_urls`

### `stop_urls`

This is the blacklist of urls on which the crawler should stop. If a link in
a crawled webpage targets one the elements in the `stop_urls` list, the crawler
will not follow the link.

Note that you can use regexps as well as plain urls.

Note: It is sometimes needed to add `http://www.example.com/index.html` pages to
the `stop_urls` list if you set `http://www.example.com` as a `start_urls`, to
avoid duplicated content.

### `selectors_exclude`

By default, the `selectors` search is applied page-wide. If there are some parts
of the page that you do not want to include (like a header, sidebar or footer),
you can add them to the `selectors_exclude` key.

### `custom_settings`

This object is any custom Algolia settings you would like to pass to the index
settings.

### `min_indexed_level`

Lets you define the minimum level at which you want records to be indexed. For
example, with a `min_indexed_level: 1`, you will only index records that have at
least a `lvl1` field.

This is especially useful when the documentation is split into several pages,
but all pages duplicates the main title (see [this issue][1]).

### `js_render`

The HTML code that we crawl is sometimes generated using Javascript. In those
cases, the `js_render` option must be set to `true`. It will enable our
internal proxy (Selenium) to render pages before crawling them.

This parameter is optional and is set to `false` by default.

### `js_wait`

The `js_wait` parameter lets you change the default waiting time to render the
webpage with the Selenium proxy.

This parameter is optional and is set to `0`s by default.

### `use_anchors`

The `use_anchors` is need to be set to True for javascript doc when the hash is
used to route the query. Internally this will disable the canonicalize feature that
is removing the hash from the url.

This parameter is optional and is set to False by default.

### `strip_chars`

A list of character to remove from the text that is indexed.

Default is ": " .,;:§¶"

### `scrap_start_urls`

Default if `false`

### `remove_get_params`

Default if `false`

### `strict_redirect`

Default if `false`

### `nb_hits`

The number of object that should be indexed. Only used by the [`checker`](#checker).

Default is `0`.

## Test the configuration with the generator

The generator allows to both generate the selectors and visualize on pages
what is actually selected. Refer to `html/generator/README.md` to use it.

## Test the UX/UI with the playground

To test it live, you can use the following HTML page:

```sh
# edit your credentials + index name in ./html/playground.html
$ open ./html/playground.html
```

## Bootstrapping a config

```sh
$ ./bootstrap-config
```

## Deploying

After pushing the configuration to the configuration repository you still have
to deploy the scraper using the deploy script of this repository.
For more on how to use the script: `html/deploy/README.md`.

## Development

### Docker

You can build a development version of the image, to be used in development. It
will build the exact same image than the prod one but will expect the
`/root/src` folder to be mapped to a volume on the host. This lets you edit the
python files in your favorite editor in the host while still being able to run
the script in a Docker environment.

First, build the development image:

```sh
docker build -t algolia/documentation-scraper-dev -f Dockerfile.dev .
```

Then, use a script to remove any dev container and rebuild it.

```sh
$ docker stop docname
$ docker rm docname
$ docker run \
    -e APPLICATION_ID=appId \
    -e API_KEY=apiKey \
    -e INDEX_PREFIX=prefix_ \
    -e CONFIG="$(cat configs/docname.json)" \
    -v `pwd`/src:/root/src \
    --name docname \
    -t algolia/documentation-scraper-dev \
    /root/run
```

And use this one to run the tests:

```sh
$ docker stop docname
$ docker rm docname
$ docker run \
    -e APPLICATION_ID=appId \
    -e API_KEY=apiKey \
    -e INDEX_PREFIX=prefix_ \
    -e CONFIG="$(cat configs/docname.json)" \
    -v `pwd`/src:/root/src \
    --name docname \
    -t algolia/documentation-scraper-dev \
    /root/test

```

### Prod

In production, you build the image from the default Docker file, then run the
container.

Several documentations are using Javascript to generate the HTML code. To
handle those documentations, this image which embeds our Selenium proxy in
order to render webpages before crawling them. Note that your JSON
configuration file must set the `js_render` parameter to `true`
see [`js_render`](#js_render). If not, the Selenium instance won't be started.

```
$ docker build -t algolia/documentation-scraper .
$ docker run \
    -e APPLICATION_ID=appId \
    -e API_KEY=apiKey \
    -e INDEX_PREFIX=prefix_ \
    -e CONFIG="$(cat configs/docname.json)" \
    --name docname \
    -t algolia/documentation-scraper
```

### Checker

The checker, in `checker` directory, is an automatic tool to check that the crawling infra behind DocSearch is running and that configurations do not have issues.

### Deployer

The deployer, in `deployer` directory, is an automatic tool to deploy new configuration in the crawling infra of Algolia

[1]: https://github.com/algolia/documentation-scraper/issues/7

### Possible issues
It could happen that the crawled website returned duplicated data.
Most of the time, this is because the crawled website, got the same url with two different scheme.
If there is `http://website.com/page` and `http://website.com/page/`, notice the second one, the url is ended by `/`, and for the scrapper, this is two different urls.

In most of the cases, you'll only have to add a regex to the `stop_urls` in the `config.json` :
```
$ "stop_urls": [
  "/$"
]
```

But sometimes, the website's url you want to scrap are all ending with `/`, so just specify which url you want to get rid of, like this :
```
$ "stop_urls": [
    "http://website.com/page/"
  ]
```
And that way, only the first one will be taken in consideration.

---
*Be careful to remove any hashsigns from the urls if it contains some*

*Bad :*
```
$ "stop_urls": [
    "http://website.com/page/#foo"
  ]
```
*Good :*
```
$ "stop_urls": [
    "/$"
  ]
```
Or :
```
$ "stop_urls": [
    "http://website.com/page/"
  ]
```
