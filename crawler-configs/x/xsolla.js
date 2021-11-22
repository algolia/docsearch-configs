new Crawler({
  appId: "",
  apiKey: "",
  rateLimit: 8,
  startUrls: [
    "https://developers.xsolla.com/ja/api/",
    "https://developers.xsolla.com/",
    "https://developers.xsolla.com/ru/api/",
    "https://developers.xsolla.com/ko/api/",
    "https://developers.xsolla.com/zh/api/",
    "https://developers.xsolla.com/de/api/",
    "https://developers.xsolla.com/ja/sdk/",
    "https://developers.xsolla.com/ru/sdk/",
    "https://developers.xsolla.com/ko/sdk/",
    "https://developers.xsolla.com/zh/sdk/",
    "https://developers.xsolla.com/de/sdk/",
    "https://developers.xsolla.com/ja/changelog/",
    "https://developers.xsolla.com/ru/changelog/",
    "https://developers.xsolla.com/ko/changelog/",
    "https://developers.xsolla.com/zh/changelog/",
    "https://developers.xsolla.com/de/changelog/",
    "https://developers.xsolla.com/ja/doc/faq/",
    "https://developers.xsolla.com/ru/doc/faq/",
    "https://developers.xsolla.com/ko/doc/faq/",
    "https://developers.xsolla.com/zh/doc/faq/",
    "https://developers.xsolla.com/de/doc/faq/",
    "https://developers.xsolla.com/ja/",
    "https://developers.xsolla.com/ru/",
    "https://developers.xsolla.com/ko/",
    "https://developers.xsolla.com/zh/",
    "https://developers.xsolla.com/de/",
    "https://developers.xsolla.com/doc/faq/",
    "https://developers.xsolla.com/sdk/",
    "https://developers.xsolla.com/changelog/",
    "https://developers.xsolla.com/api/",
  ],
  renderJavaScript: false,
  sitemaps: [],
  exclusionPatterns: [
    "**/search**",
    "**/search**/**",
    "**/changelog/tags**",
    "**/changelog/tags**/**",
    "**/sdk/php/**",
    "https://developers.xsolla.com/changelog/",
    "https://developers.xsolla.com/ru/changelog/",
    "https://developers.xsolla.com/de/changelog/",
    "https://developers.xsolla.com/zh/changelog/",
    "https://developers.xsolla.com/ko/changelog/",
    "https://developers.xsolla.com/ja/changelog/",
    "https://developers.xsolla.com/doc/pay-station/integration-guide/",
    "https://developers.xsolla.com/doc/pay-station/features/",
    "https://developers.xsolla.com/doc/pay-station/how-to/",
    "https://developers.xsolla.com/doc/pay-station/references/",
    "https://developers.xsolla.com/doc/pay-station/extensions/",
    "https://developers.xsolla.com/doc/in-game-store/integration-guide/",
    "https://developers.xsolla.com/doc/in-game-store/features/",
    "https://developers.xsolla.com/doc/in-game-store/how-to/",
    "https://developers.xsolla.com/doc/in-game-store/references/",
    "https://developers.xsolla.com/doc/in-game-store/extensions/",
    "https://developers.xsolla.com/doc/partner-network/integration-guide/",
    "https://developers.xsolla.com/doc/partner-network/features/",
    "https://developers.xsolla.com/doc/partner-network/how-to/",
    "https://developers.xsolla.com/doc/partner-network/references/",
    "https://developers.xsolla.com/doc/partner-network/extensions/",
    "https://developers.xsolla.com/doc/subscriptions/integration-guide/",
    "https://developers.xsolla.com/doc/subscriptions/features/",
    "https://developers.xsolla.com/doc/subscriptions/how-to/",
    "https://developers.xsolla.com/doc/subscriptions/references/",
    "https://developers.xsolla.com/doc/subscriptions/extensions/",
    "https://developers.xsolla.com/doc/login/integration-guide/",
    "https://developers.xsolla.com/doc/login/features/",
    "https://developers.xsolla.com/doc/login/how-to/",
    "https://developers.xsolla.com/doc/login/references/",
    "https://developers.xsolla.com/doc/login/extensions/",
    "https://developers.xsolla.com/doc/buy-button/integration-guide/",
    "https://developers.xsolla.com/doc/buy-button/features/",
    "https://developers.xsolla.com/doc/buy-button/how-to/",
    "https://developers.xsolla.com/doc/buy-button/references/",
    "https://developers.xsolla.com/doc/buy-button/extensions/",
    "https://developers.xsolla.com/doc/launcher/integration-guide/",
    "https://developers.xsolla.com/doc/launcher/features/",
    "https://developers.xsolla.com/doc/launcher/how-to/",
    "https://developers.xsolla.com/doc/launcher/references/",
    "https://developers.xsolla.com/doc/launcher/extensions/",
    "https://developers.xsolla.com/doc/site-builder/integration-guide/",
    "https://developers.xsolla.com/doc/site-builder/features/",
    "https://developers.xsolla.com/doc/site-builder/how-to/",
    "https://developers.xsolla.com/doc/site-builder/references/",
    "https://developers.xsolla.com/doc/site-builder/extensions/",
    "https://developers.xsolla.com/doc/chat/integration-guide/",
    "https://developers.xsolla.com/doc/chat/features/",
    "https://developers.xsolla.com/doc/chat/how-to/",
    "https://developers.xsolla.com/doc/chat/references/",
    "https://developers.xsolla.com/doc/chat/extensions/",
    "https://developers.xsolla.com/de/doc/pay-station/integration-guide/",
    "https://developers.xsolla.com/de/doc/pay-station/features/",
    "https://developers.xsolla.com/de/doc/pay-station/how-to/",
    "https://developers.xsolla.com/de/doc/pay-station/references/",
    "https://developers.xsolla.com/de/doc/pay-station/extensions/",
    "https://developers.xsolla.com/de/doc/in-game-store/integration-guide/",
    "https://developers.xsolla.com/de/doc/in-game-store/features/",
    "https://developers.xsolla.com/de/doc/in-game-store/how-to/",
    "https://developers.xsolla.com/de/doc/in-game-store/references/",
    "https://developers.xsolla.com/de/doc/in-game-store/extensions/",
    "https://developers.xsolla.com/de/doc/partner-network/integration-guide/",
    "https://developers.xsolla.com/de/doc/partner-network/features/",
    "https://developers.xsolla.com/de/doc/partner-network/how-to/",
    "https://developers.xsolla.com/de/doc/partner-network/references/",
    "https://developers.xsolla.com/de/doc/partner-network/extensions/",
    "https://developers.xsolla.com/de/doc/subscriptions/integration-guide/",
    "https://developers.xsolla.com/de/doc/subscriptions/features/",
    "https://developers.xsolla.com/de/doc/subscriptions/how-to/",
    "https://developers.xsolla.com/de/doc/subscriptions/references/",
    "https://developers.xsolla.com/de/doc/subscriptions/extensions/",
    "https://developers.xsolla.com/de/doc/login/integration-guide/",
    "https://developers.xsolla.com/de/doc/login/features/",
    "https://developers.xsolla.com/de/doc/login/how-to/",
    "https://developers.xsolla.com/de/doc/login/references/",
    "https://developers.xsolla.com/de/doc/login/extensions/",
    "https://developers.xsolla.com/de/doc/buy-button/integration-guide/",
    "https://developers.xsolla.com/de/doc/buy-button/features/",
    "https://developers.xsolla.com/de/doc/buy-button/how-to/",
    "https://developers.xsolla.com/de/doc/buy-button/references/",
    "https://developers.xsolla.com/de/doc/buy-button/extensions/",
    "https://developers.xsolla.com/de/doc/launcher/integration-guide/",
    "https://developers.xsolla.com/de/doc/launcher/features/",
    "https://developers.xsolla.com/de/doc/launcher/how-to/",
    "https://developers.xsolla.com/de/doc/launcher/references/",
    "https://developers.xsolla.com/de/doc/launcher/extensions/",
    "https://developers.xsolla.com/de/doc/site-builder/integration-guide/",
    "https://developers.xsolla.com/de/doc/site-builder/features/",
    "https://developers.xsolla.com/de/doc/site-builder/how-to/",
    "https://developers.xsolla.com/de/doc/site-builder/references/",
    "https://developers.xsolla.com/de/doc/site-builder/extensions/",
    "https://developers.xsolla.com/de/doc/chat/integration-guide/",
    "https://developers.xsolla.com/de/doc/chat/features/",
    "https://developers.xsolla.com/de/doc/chat/how-to/",
    "https://developers.xsolla.com/de/doc/chat/references/",
    "https://developers.xsolla.com/de/doc/chat/extensions/",
    "https://developers.xsolla.com/ko/doc/pay-station/integration-guide/",
    "https://developers.xsolla.com/ko/doc/pay-station/features/",
    "https://developers.xsolla.com/ko/doc/pay-station/how-to/",
    "https://developers.xsolla.com/ko/doc/pay-station/references/",
    "https://developers.xsolla.com/ko/doc/pay-station/extensions/",
    "https://developers.xsolla.com/ko/doc/in-game-store/integration-guide/",
    "https://developers.xsolla.com/ko/doc/in-game-store/features/",
    "https://developers.xsolla.com/ko/doc/in-game-store/how-to/",
    "https://developers.xsolla.com/ko/doc/in-game-store/references/",
    "https://developers.xsolla.com/ko/doc/in-game-store/extensions/",
    "https://developers.xsolla.com/ko/doc/partner-network/integration-guide/",
    "https://developers.xsolla.com/ko/doc/partner-network/features/",
    "https://developers.xsolla.com/ko/doc/partner-network/how-to/",
    "https://developers.xsolla.com/ko/doc/partner-network/references/",
    "https://developers.xsolla.com/ko/doc/partner-network/extensions/",
    "https://developers.xsolla.com/ko/doc/subscriptions/integration-guide/",
    "https://developers.xsolla.com/ko/doc/subscriptions/features/",
    "https://developers.xsolla.com/ko/doc/subscriptions/how-to/",
    "https://developers.xsolla.com/ko/doc/subscriptions/references/",
    "https://developers.xsolla.com/ko/doc/subscriptions/extensions/",
    "https://developers.xsolla.com/ko/doc/login/integration-guide/",
    "https://developers.xsolla.com/ko/doc/login/features/",
    "https://developers.xsolla.com/ko/doc/login/how-to/",
    "https://developers.xsolla.com/ko/doc/login/references/",
    "https://developers.xsolla.com/ko/doc/login/extensions/",
    "https://developers.xsolla.com/ko/doc/buy-button/integration-guide/",
    "https://developers.xsolla.com/ko/doc/buy-button/features/",
    "https://developers.xsolla.com/ko/doc/buy-button/how-to/",
    "https://developers.xsolla.com/ko/doc/buy-button/references/",
    "https://developers.xsolla.com/ko/doc/buy-button/extensions/",
    "https://developers.xsolla.com/ko/doc/launcher/integration-guide/",
    "https://developers.xsolla.com/ko/doc/launcher/features/",
    "https://developers.xsolla.com/ko/doc/launcher/how-to/",
    "https://developers.xsolla.com/ko/doc/launcher/references/",
    "https://developers.xsolla.com/ko/doc/launcher/extensions/",
    "https://developers.xsolla.com/ko/doc/site-builder/integration-guide/",
    "https://developers.xsolla.com/ko/doc/site-builder/features/",
    "https://developers.xsolla.com/ko/doc/site-builder/how-to/",
    "https://developers.xsolla.com/ko/doc/site-builder/references/",
    "https://developers.xsolla.com/ko/doc/site-builder/extensions/",
    "https://developers.xsolla.com/ko/doc/chat/integration-guide/",
    "https://developers.xsolla.com/ko/doc/chat/features/",
    "https://developers.xsolla.com/ko/doc/chat/how-to/",
    "https://developers.xsolla.com/ko/doc/chat/references/",
    "https://developers.xsolla.com/ko/doc/chat/extensions/",
    "https://developers.xsolla.com/zh/doc/pay-station/integration-guide/",
    "https://developers.xsolla.com/zh/doc/pay-station/features/",
    "https://developers.xsolla.com/zh/doc/pay-station/how-to/",
    "https://developers.xsolla.com/zh/doc/pay-station/references/",
    "https://developers.xsolla.com/zh/doc/pay-station/extensions/",
    "https://developers.xsolla.com/zh/doc/in-game-store/integration-guide/",
    "https://developers.xsolla.com/zh/doc/in-game-store/features/",
    "https://developers.xsolla.com/zh/doc/in-game-store/how-to/",
    "https://developers.xsolla.com/zh/doc/in-game-store/references/",
    "https://developers.xsolla.com/zh/doc/in-game-store/extensions/",
    "https://developers.xsolla.com/zh/doc/partner-network/integration-guide/",
    "https://developers.xsolla.com/zh/doc/partner-network/features/",
    "https://developers.xsolla.com/zh/doc/partner-network/how-to/",
    "https://developers.xsolla.com/zh/doc/partner-network/references/",
    "https://developers.xsolla.com/zh/doc/partner-network/extensions/",
    "https://developers.xsolla.com/zh/doc/subscriptions/integration-guide/",
    "https://developers.xsolla.com/zh/doc/subscriptions/features/",
    "https://developers.xsolla.com/zh/doc/subscriptions/how-to/",
    "https://developers.xsolla.com/zh/doc/subscriptions/references/",
    "https://developers.xsolla.com/zh/doc/subscriptions/extensions/",
    "https://developers.xsolla.com/zh/doc/login/integration-guide/",
    "https://developers.xsolla.com/zh/doc/login/features/",
    "https://developers.xsolla.com/zh/doc/login/how-to/",
    "https://developers.xsolla.com/zh/doc/login/references/",
    "https://developers.xsolla.com/zh/doc/login/extensions/",
    "https://developers.xsolla.com/zh/doc/buy-button/integration-guide/",
    "https://developers.xsolla.com/zh/doc/buy-button/features/",
    "https://developers.xsolla.com/zh/doc/buy-button/how-to/",
    "https://developers.xsolla.com/zh/doc/buy-button/references/",
    "https://developers.xsolla.com/zh/doc/buy-button/extensions/",
    "https://developers.xsolla.com/zh/doc/launcher/integration-guide/",
    "https://developers.xsolla.com/zh/doc/launcher/features/",
    "https://developers.xsolla.com/zh/doc/launcher/how-to/",
    "https://developers.xsolla.com/zh/doc/launcher/references/",
    "https://developers.xsolla.com/zh/doc/launcher/extensions/",
    "https://developers.xsolla.com/zh/doc/site-builder/integration-guide/",
    "https://developers.xsolla.com/zh/doc/site-builder/features/",
    "https://developers.xsolla.com/zh/doc/site-builder/how-to/",
    "https://developers.xsolla.com/zh/doc/site-builder/references/",
    "https://developers.xsolla.com/zh/doc/site-builder/extensions/",
    "https://developers.xsolla.com/zh/doc/chat/integration-guide/",
    "https://developers.xsolla.com/zh/doc/chat/features/",
    "https://developers.xsolla.com/zh/doc/chat/how-to/",
    "https://developers.xsolla.com/zh/doc/chat/references/",
    "https://developers.xsolla.com/zh/doc/chat/extensions/",
    "https://developers.xsolla.com/ja/doc/pay-station/integration-guide/",
    "https://developers.xsolla.com/ja/doc/pay-station/features/",
    "https://developers.xsolla.com/ja/doc/pay-station/how-to/",
    "https://developers.xsolla.com/ja/doc/pay-station/references/",
    "https://developers.xsolla.com/ja/doc/pay-station/extensions/",
    "https://developers.xsolla.com/ja/doc/in-game-store/integration-guide/",
    "https://developers.xsolla.com/ja/doc/in-game-store/features/",
    "https://developers.xsolla.com/ja/doc/in-game-store/how-to/",
    "https://developers.xsolla.com/ja/doc/in-game-store/references/",
    "https://developers.xsolla.com/ja/doc/in-game-store/extensions/",
    "https://developers.xsolla.com/ja/doc/partner-network/integration-guide/",
    "https://developers.xsolla.com/ja/doc/partner-network/features/",
    "https://developers.xsolla.com/ja/doc/partner-network/how-to/",
    "https://developers.xsolla.com/ja/doc/partner-network/references/",
    "https://developers.xsolla.com/ja/doc/partner-network/extensions/",
    "https://developers.xsolla.com/ja/doc/subscriptions/integration-guide/",
    "https://developers.xsolla.com/ja/doc/subscriptions/features/",
    "https://developers.xsolla.com/ja/doc/subscriptions/how-to/",
    "https://developers.xsolla.com/ja/doc/subscriptions/references/",
    "https://developers.xsolla.com/ja/doc/subscriptions/extensions/",
    "https://developers.xsolla.com/ja/doc/login/integration-guide/",
    "https://developers.xsolla.com/ja/doc/login/features/",
    "https://developers.xsolla.com/ja/doc/login/how-to/",
    "https://developers.xsolla.com/ja/doc/login/references/",
    "https://developers.xsolla.com/ja/doc/login/extensions/",
    "https://developers.xsolla.com/ja/doc/buy-button/integration-guide/",
    "https://developers.xsolla.com/ja/doc/buy-button/features/",
    "https://developers.xsolla.com/ja/doc/buy-button/how-to/",
    "https://developers.xsolla.com/ja/doc/buy-button/references/",
    "https://developers.xsolla.com/ja/doc/buy-button/extensions/",
    "https://developers.xsolla.com/ja/doc/launcher/integration-guide/",
    "https://developers.xsolla.com/ja/doc/launcher/features/",
    "https://developers.xsolla.com/ja/doc/launcher/how-to/",
    "https://developers.xsolla.com/ja/doc/launcher/references/",
    "https://developers.xsolla.com/ja/doc/launcher/extensions/",
    "https://developers.xsolla.com/ja/doc/site-builder/integration-guide/",
    "https://developers.xsolla.com/ja/doc/site-builder/features/",
    "https://developers.xsolla.com/ja/doc/site-builder/how-to/",
    "https://developers.xsolla.com/ja/doc/site-builder/references/",
    "https://developers.xsolla.com/ja/doc/site-builder/extensions/",
    "https://developers.xsolla.com/ja/doc/chat/integration-guide/",
    "https://developers.xsolla.com/ja/doc/chat/features/",
    "https://developers.xsolla.com/ja/doc/chat/how-to/",
    "https://developers.xsolla.com/ja/doc/chat/references/",
    "https://developers.xsolla.com/ja/doc/chat/extensions/",
    "https://developers.xsolla.com/ru/doc/pay-station/integration-guide/",
    "https://developers.xsolla.com/ru/doc/pay-station/features/",
    "https://developers.xsolla.com/ru/doc/pay-station/how-to/",
    "https://developers.xsolla.com/ru/doc/pay-station/references/",
    "https://developers.xsolla.com/ru/doc/pay-station/extensions/",
    "https://developers.xsolla.com/ru/doc/in-game-store/integration-guide/",
    "https://developers.xsolla.com/ru/doc/in-game-store/features/",
    "https://developers.xsolla.com/ru/doc/in-game-store/how-to/",
    "https://developers.xsolla.com/ru/doc/in-game-store/references/",
    "https://developers.xsolla.com/ru/doc/in-game-store/extensions/",
    "https://developers.xsolla.com/ru/doc/partner-network/integration-guide/",
    "https://developers.xsolla.com/ru/doc/partner-network/features/",
    "https://developers.xsolla.com/ru/doc/partner-network/how-to/",
    "https://developers.xsolla.com/ru/doc/partner-network/references/",
    "https://developers.xsolla.com/ru/doc/partner-network/extensions/",
    "https://developers.xsolla.com/ru/doc/subscriptions/integration-guide/",
    "https://developers.xsolla.com/ru/doc/subscriptions/features/",
    "https://developers.xsolla.com/ru/doc/subscriptions/how-to/",
    "https://developers.xsolla.com/ru/doc/subscriptions/references/",
    "https://developers.xsolla.com/ru/doc/subscriptions/extensions/",
    "https://developers.xsolla.com/ru/doc/login/integration-guide/",
    "https://developers.xsolla.com/ru/doc/login/features/",
    "https://developers.xsolla.com/ru/doc/login/how-to/",
    "https://developers.xsolla.com/ru/doc/login/references/",
    "https://developers.xsolla.com/ru/doc/login/extensions/",
    "https://developers.xsolla.com/ru/doc/buy-button/integration-guide/",
    "https://developers.xsolla.com/ru/doc/buy-button/features/",
    "https://developers.xsolla.com/ru/doc/buy-button/how-to/",
    "https://developers.xsolla.com/ru/doc/buy-button/references/",
    "https://developers.xsolla.com/ru/doc/buy-button/extensions/",
    "https://developers.xsolla.com/ru/doc/launcher/integration-guide/",
    "https://developers.xsolla.com/ru/doc/launcher/features/",
    "https://developers.xsolla.com/ru/doc/launcher/how-to/",
    "https://developers.xsolla.com/ru/doc/launcher/references/",
    "https://developers.xsolla.com/ru/doc/launcher/extensions/",
    "https://developers.xsolla.com/ru/doc/site-builder/integration-guide/",
    "https://developers.xsolla.com/ru/doc/site-builder/features/",
    "https://developers.xsolla.com/ru/doc/site-builder/how-to/",
    "https://developers.xsolla.com/ru/doc/site-builder/references/",
    "https://developers.xsolla.com/ru/doc/site-builder/extensions/",
    "https://developers.xsolla.com/ru/doc/chat/integration-guide/",
    "https://developers.xsolla.com/ru/doc/chat/features/",
    "https://developers.xsolla.com/ru/doc/chat/how-to/",
    "https://developers.xsolla.com/ru/doc/chat/references/",
    "https://developers.xsolla.com/ru/doc/chat/extensions/",
    "https://developers.xsolla.com/sdk/unity/use-xsolla-servers/",
    "https://developers.xsolla.com/sdk/unity/use-your-server-side/",
    "https://developers.xsolla.com/sdk/unity/use-third-party-servers/",
    "https://developers.xsolla.com/sdk/unity/use-serverless-integration/",
    "https://developers.xsolla.com/sdk/unity/commerce/",
    "https://developers.xsolla.com/sdk/unity/login/",
    "https://developers.xsolla.com/sdk/unity/cross-buy/",
    "https://developers.xsolla.com/sdk/unity/tutorials/",
    "https://developers.xsolla.com/sdk/unity/how-tos/",
    "https://developers.xsolla.com/sdk/unity/store/",
    "https://developers.xsolla.com/sdk/unity/inventory/",
    "https://developers.xsolla.com/sdk/unity/payments/",
    "https://developers.xsolla.com/sdk/unreal-engine/use-xsolla-servers/",
    "https://developers.xsolla.com/sdk/unreal-engine/use-your-server-side/",
    "https://developers.xsolla.com/sdk/unreal-engine/use-third-party-servers/",
    "https://developers.xsolla.com/sdk/unreal-engine/use-serverless-integration/",
    "https://developers.xsolla.com/sdk/unreal-engine/commerce/",
    "https://developers.xsolla.com/sdk/unreal-engine/login/",
    "https://developers.xsolla.com/sdk/unreal-engine/cross-buy/",
    "https://developers.xsolla.com/sdk/unreal-engine/tutorials/",
    "https://developers.xsolla.com/sdk/unreal-engine/how-tos/",
    "https://developers.xsolla.com/sdk/unreal-engine/store/",
    "https://developers.xsolla.com/sdk/unreal-engine/inventory/",
    "https://developers.xsolla.com/sdk/unreal-engine/payments/",
    "https://developers.xsolla.com/sdk/android/use-xsolla-servers/",
    "https://developers.xsolla.com/sdk/android/use-your-server-side/",
    "https://developers.xsolla.com/sdk/android/use-third-party-servers/",
    "https://developers.xsolla.com/sdk/android/use-serverless-integration/",
    "https://developers.xsolla.com/sdk/android/commerce/",
    "https://developers.xsolla.com/sdk/android/login/",
    "https://developers.xsolla.com/sdk/android/cross-buy/",
    "https://developers.xsolla.com/sdk/android/tutorials/",
    "https://developers.xsolla.com/sdk/android/how-tos/",
    "https://developers.xsolla.com/sdk/android/store/",
    "https://developers.xsolla.com/sdk/android/inventory/",
    "https://developers.xsolla.com/sdk/android/payments/",
    "https://developers.xsolla.com/sdk/ios/use-xsolla-servers/",
    "https://developers.xsolla.com/sdk/ios/use-your-server-side/",
    "https://developers.xsolla.com/sdk/ios/use-third-party-servers/",
    "https://developers.xsolla.com/sdk/ios/use-serverless-integration/",
    "https://developers.xsolla.com/sdk/ios/commerce/",
    "https://developers.xsolla.com/sdk/ios/login/",
    "https://developers.xsolla.com/sdk/ios/cross-buy/",
    "https://developers.xsolla.com/sdk/ios/tutorials/",
    "https://developers.xsolla.com/sdk/ios/how-tos/",
    "https://developers.xsolla.com/sdk/ios/store/",
    "https://developers.xsolla.com/sdk/ios/inventory/",
    "https://developers.xsolla.com/sdk/ios/payments/",
    "https://developers.xsolla.com/de/sdk/unity/use-xsolla-servers/",
    "https://developers.xsolla.com/de/sdk/unity/use-your-server-side/",
    "https://developers.xsolla.com/de/sdk/unity/use-third-party-servers/",
    "https://developers.xsolla.com/de/sdk/unity/use-serverless-integration/",
    "https://developers.xsolla.com/de/sdk/unity/commerce/",
    "https://developers.xsolla.com/de/sdk/unity/login/",
    "https://developers.xsolla.com/de/sdk/unity/cross-buy/",
    "https://developers.xsolla.com/de/sdk/unity/tutorials/",
    "https://developers.xsolla.com/de/sdk/unity/how-tos/",
    "https://developers.xsolla.com/de/sdk/unity/store/",
    "https://developers.xsolla.com/de/sdk/unity/inventory/",
    "https://developers.xsolla.com/de/sdk/unity/payments/",
    "https://developers.xsolla.com/de/sdk/unreal-engine/use-xsolla-servers/",
    "https://developers.xsolla.com/de/sdk/unreal-engine/use-your-server-side/",
    "https://developers.xsolla.com/de/sdk/unreal-engine/use-third-party-servers/",
    "https://developers.xsolla.com/de/sdk/unreal-engine/use-serverless-integration/",
    "https://developers.xsolla.com/de/sdk/unreal-engine/commerce/",
    "https://developers.xsolla.com/de/sdk/unreal-engine/login/",
    "https://developers.xsolla.com/de/sdk/unreal-engine/cross-buy/",
    "https://developers.xsolla.com/de/sdk/unreal-engine/tutorials/",
    "https://developers.xsolla.com/de/sdk/unreal-engine/how-tos/",
    "https://developers.xsolla.com/de/sdk/unreal-engine/store/",
    "https://developers.xsolla.com/de/sdk/unreal-engine/inventory/",
    "https://developers.xsolla.com/de/sdk/unreal-engine/payments/",
    "https://developers.xsolla.com/de/sdk/android/use-xsolla-servers/",
    "https://developers.xsolla.com/de/sdk/android/use-your-server-side/",
    "https://developers.xsolla.com/de/sdk/android/use-third-party-servers/",
    "https://developers.xsolla.com/de/sdk/android/use-serverless-integration/",
    "https://developers.xsolla.com/de/sdk/android/commerce/",
    "https://developers.xsolla.com/de/sdk/android/login/",
    "https://developers.xsolla.com/de/sdk/android/cross-buy/",
    "https://developers.xsolla.com/de/sdk/android/tutorials/",
    "https://developers.xsolla.com/de/sdk/android/how-tos/",
    "https://developers.xsolla.com/de/sdk/android/store/",
    "https://developers.xsolla.com/de/sdk/android/inventory/",
    "https://developers.xsolla.com/de/sdk/android/payments/",
    "https://developers.xsolla.com/de/sdk/ios/use-xsolla-servers/",
    "https://developers.xsolla.com/de/sdk/ios/use-your-server-side/",
    "https://developers.xsolla.com/de/sdk/ios/use-third-party-servers/",
    "https://developers.xsolla.com/de/sdk/ios/use-serverless-integration/",
    "https://developers.xsolla.com/de/sdk/ios/commerce/",
    "https://developers.xsolla.com/de/sdk/ios/login/",
    "https://developers.xsolla.com/de/sdk/ios/cross-buy/",
    "https://developers.xsolla.com/de/sdk/ios/tutorials/",
    "https://developers.xsolla.com/de/sdk/ios/how-tos/",
    "https://developers.xsolla.com/de/sdk/ios/store/",
    "https://developers.xsolla.com/de/sdk/ios/inventory/",
    "https://developers.xsolla.com/de/sdk/ios/payments/",
    "https://developers.xsolla.com/ko/sdk/unity/use-xsolla-servers/",
    "https://developers.xsolla.com/ko/sdk/unity/use-your-server-side/",
    "https://developers.xsolla.com/ko/sdk/unity/use-third-party-servers/",
    "https://developers.xsolla.com/ko/sdk/unity/use-serverless-integration/",
    "https://developers.xsolla.com/ko/sdk/unity/commerce/",
    "https://developers.xsolla.com/ko/sdk/unity/login/",
    "https://developers.xsolla.com/ko/sdk/unity/cross-buy/",
    "https://developers.xsolla.com/ko/sdk/unity/tutorials/",
    "https://developers.xsolla.com/ko/sdk/unity/how-tos/",
    "https://developers.xsolla.com/ko/sdk/unity/store/",
    "https://developers.xsolla.com/ko/sdk/unity/inventory/",
    "https://developers.xsolla.com/ko/sdk/unity/payments/",
    "https://developers.xsolla.com/ko/sdk/unreal-engine/use-xsolla-servers/",
    "https://developers.xsolla.com/ko/sdk/unreal-engine/use-your-server-side/",
    "https://developers.xsolla.com/ko/sdk/unreal-engine/use-third-party-servers/",
    "https://developers.xsolla.com/ko/sdk/unreal-engine/use-serverless-integration/",
    "https://developers.xsolla.com/ko/sdk/unreal-engine/commerce/",
    "https://developers.xsolla.com/ko/sdk/unreal-engine/login/",
    "https://developers.xsolla.com/ko/sdk/unreal-engine/cross-buy/",
    "https://developers.xsolla.com/ko/sdk/unreal-engine/tutorials/",
    "https://developers.xsolla.com/ko/sdk/unreal-engine/how-tos/",
    "https://developers.xsolla.com/ko/sdk/unreal-engine/store/",
    "https://developers.xsolla.com/ko/sdk/unreal-engine/inventory/",
    "https://developers.xsolla.com/ko/sdk/unreal-engine/payments/",
    "https://developers.xsolla.com/ko/sdk/android/use-xsolla-servers/",
    "https://developers.xsolla.com/ko/sdk/android/use-your-server-side/",
    "https://developers.xsolla.com/ko/sdk/android/use-third-party-servers/",
    "https://developers.xsolla.com/ko/sdk/android/use-serverless-integration/",
    "https://developers.xsolla.com/ko/sdk/android/commerce/",
    "https://developers.xsolla.com/ko/sdk/android/login/",
    "https://developers.xsolla.com/ko/sdk/android/cross-buy/",
    "https://developers.xsolla.com/ko/sdk/android/tutorials/",
    "https://developers.xsolla.com/ko/sdk/android/how-tos/",
    "https://developers.xsolla.com/ko/sdk/android/store/",
    "https://developers.xsolla.com/ko/sdk/android/inventory/",
    "https://developers.xsolla.com/ko/sdk/android/payments/",
    "https://developers.xsolla.com/ko/sdk/ios/use-xsolla-servers/",
    "https://developers.xsolla.com/ko/sdk/ios/use-your-server-side/",
    "https://developers.xsolla.com/ko/sdk/ios/use-third-party-servers/",
    "https://developers.xsolla.com/ko/sdk/ios/use-serverless-integration/",
    "https://developers.xsolla.com/ko/sdk/ios/commerce/",
    "https://developers.xsolla.com/ko/sdk/ios/login/",
    "https://developers.xsolla.com/ko/sdk/ios/cross-buy/",
    "https://developers.xsolla.com/ko/sdk/ios/tutorials/",
    "https://developers.xsolla.com/ko/sdk/ios/how-tos/",
    "https://developers.xsolla.com/ko/sdk/ios/store/",
    "https://developers.xsolla.com/ko/sdk/ios/inventory/",
    "https://developers.xsolla.com/ko/sdk/ios/payments/",
    "https://developers.xsolla.com/zh/sdk/unity/use-xsolla-servers/",
    "https://developers.xsolla.com/zh/sdk/unity/use-your-server-side/",
    "https://developers.xsolla.com/zh/sdk/unity/use-third-party-servers/",
    "https://developers.xsolla.com/zh/sdk/unity/use-serverless-integration/",
    "https://developers.xsolla.com/zh/sdk/unity/commerce/",
    "https://developers.xsolla.com/zh/sdk/unity/login/",
    "https://developers.xsolla.com/zh/sdk/unity/cross-buy/",
    "https://developers.xsolla.com/zh/sdk/unity/tutorials/",
    "https://developers.xsolla.com/zh/sdk/unity/how-tos/",
    "https://developers.xsolla.com/zh/sdk/unity/store/",
    "https://developers.xsolla.com/zh/sdk/unity/inventory/",
    "https://developers.xsolla.com/zh/sdk/unity/payments/",
    "https://developers.xsolla.com/zh/sdk/unreal-engine/use-xsolla-servers/",
    "https://developers.xsolla.com/zh/sdk/unreal-engine/use-your-server-side/",
    "https://developers.xsolla.com/zh/sdk/unreal-engine/use-third-party-servers/",
    "https://developers.xsolla.com/zh/sdk/unreal-engine/use-serverless-integration/",
    "https://developers.xsolla.com/zh/sdk/unreal-engine/commerce/",
    "https://developers.xsolla.com/zh/sdk/unreal-engine/login/",
    "https://developers.xsolla.com/zh/sdk/unreal-engine/cross-buy/",
    "https://developers.xsolla.com/zh/sdk/unreal-engine/tutorials/",
    "https://developers.xsolla.com/zh/sdk/unreal-engine/how-tos/",
    "https://developers.xsolla.com/zh/sdk/unreal-engine/store/",
    "https://developers.xsolla.com/zh/sdk/unreal-engine/inventory/",
    "https://developers.xsolla.com/zh/sdk/unreal-engine/payments/",
    "https://developers.xsolla.com/zh/sdk/android/use-xsolla-servers/",
    "https://developers.xsolla.com/zh/sdk/android/use-your-server-side/",
    "https://developers.xsolla.com/zh/sdk/android/use-third-party-servers/",
    "https://developers.xsolla.com/zh/sdk/android/use-serverless-integration/",
    "https://developers.xsolla.com/zh/sdk/android/commerce/",
    "https://developers.xsolla.com/zh/sdk/android/login/",
    "https://developers.xsolla.com/zh/sdk/android/cross-buy/",
    "https://developers.xsolla.com/zh/sdk/android/tutorials/",
    "https://developers.xsolla.com/zh/sdk/android/how-tos/",
    "https://developers.xsolla.com/zh/sdk/android/store/",
    "https://developers.xsolla.com/zh/sdk/android/inventory/",
    "https://developers.xsolla.com/zh/sdk/android/payments/",
    "https://developers.xsolla.com/zh/sdk/ios/use-xsolla-servers/",
    "https://developers.xsolla.com/zh/sdk/ios/use-your-server-side/",
    "https://developers.xsolla.com/zh/sdk/ios/use-third-party-servers/",
    "https://developers.xsolla.com/zh/sdk/ios/use-serverless-integration/",
    "https://developers.xsolla.com/zh/sdk/ios/commerce/",
    "https://developers.xsolla.com/zh/sdk/ios/login/",
    "https://developers.xsolla.com/zh/sdk/ios/cross-buy/",
    "https://developers.xsolla.com/zh/sdk/ios/tutorials/",
    "https://developers.xsolla.com/zh/sdk/ios/how-tos/",
    "https://developers.xsolla.com/zh/sdk/ios/store/",
    "https://developers.xsolla.com/zh/sdk/ios/inventory/",
    "https://developers.xsolla.com/zh/sdk/ios/payments/",
    "https://developers.xsolla.com/ja/sdk/unity/use-xsolla-servers/",
    "https://developers.xsolla.com/ja/sdk/unity/use-your-server-side/",
    "https://developers.xsolla.com/ja/sdk/unity/use-third-party-servers/",
    "https://developers.xsolla.com/ja/sdk/unity/use-serverless-integration/",
    "https://developers.xsolla.com/ja/sdk/unity/commerce/",
    "https://developers.xsolla.com/ja/sdk/unity/login/",
    "https://developers.xsolla.com/ja/sdk/unity/cross-buy/",
    "https://developers.xsolla.com/ja/sdk/unity/tutorials/",
    "https://developers.xsolla.com/ja/sdk/unity/how-tos/",
    "https://developers.xsolla.com/ja/sdk/unity/store/",
    "https://developers.xsolla.com/ja/sdk/unity/inventory/",
    "https://developers.xsolla.com/ja/sdk/unity/payments/",
    "https://developers.xsolla.com/ja/sdk/unreal-engine/use-xsolla-servers/",
    "https://developers.xsolla.com/ja/sdk/unreal-engine/use-your-server-side/",
    "https://developers.xsolla.com/ja/sdk/unreal-engine/use-third-party-servers/",
    "https://developers.xsolla.com/ja/sdk/unreal-engine/use-serverless-integration/",
    "https://developers.xsolla.com/ja/sdk/unreal-engine/commerce/",
    "https://developers.xsolla.com/ja/sdk/unreal-engine/login/",
    "https://developers.xsolla.com/ja/sdk/unreal-engine/cross-buy/",
    "https://developers.xsolla.com/ja/sdk/unreal-engine/tutorials/",
    "https://developers.xsolla.com/ja/sdk/unreal-engine/how-tos/",
    "https://developers.xsolla.com/ja/sdk/unreal-engine/store/",
    "https://developers.xsolla.com/ja/sdk/unreal-engine/inventory/",
    "https://developers.xsolla.com/ja/sdk/unreal-engine/payments/",
    "https://developers.xsolla.com/ja/sdk/android/use-xsolla-servers/",
    "https://developers.xsolla.com/ja/sdk/android/use-your-server-side/",
    "https://developers.xsolla.com/ja/sdk/android/use-third-party-servers/",
    "https://developers.xsolla.com/ja/sdk/android/use-serverless-integration/",
    "https://developers.xsolla.com/ja/sdk/android/commerce/",
    "https://developers.xsolla.com/ja/sdk/android/login/",
    "https://developers.xsolla.com/ja/sdk/android/cross-buy/",
    "https://developers.xsolla.com/ja/sdk/android/tutorials/",
    "https://developers.xsolla.com/ja/sdk/android/how-tos/",
    "https://developers.xsolla.com/ja/sdk/android/store/",
    "https://developers.xsolla.com/ja/sdk/android/inventory/",
    "https://developers.xsolla.com/ja/sdk/android/payments/",
    "https://developers.xsolla.com/ja/sdk/ios/use-xsolla-servers/",
    "https://developers.xsolla.com/ja/sdk/ios/use-your-server-side/",
    "https://developers.xsolla.com/ja/sdk/ios/use-third-party-servers/",
    "https://developers.xsolla.com/ja/sdk/ios/use-serverless-integration/",
    "https://developers.xsolla.com/ja/sdk/ios/commerce/",
    "https://developers.xsolla.com/ja/sdk/ios/login/",
    "https://developers.xsolla.com/ja/sdk/ios/cross-buy/",
    "https://developers.xsolla.com/ja/sdk/ios/tutorials/",
    "https://developers.xsolla.com/ja/sdk/ios/how-tos/",
    "https://developers.xsolla.com/ja/sdk/ios/store/",
    "https://developers.xsolla.com/ja/sdk/ios/inventory/",
    "https://developers.xsolla.com/ja/sdk/ios/payments/",
    "https://developers.xsolla.com/ru/sdk/unity/use-xsolla-servers/",
    "https://developers.xsolla.com/ru/sdk/unity/use-your-server-side/",
    "https://developers.xsolla.com/ru/sdk/unity/use-third-party-servers/",
    "https://developers.xsolla.com/ru/sdk/unity/use-serverless-integration/",
    "https://developers.xsolla.com/ru/sdk/unity/commerce/",
    "https://developers.xsolla.com/ru/sdk/unity/login/",
    "https://developers.xsolla.com/ru/sdk/unity/cross-buy/",
    "https://developers.xsolla.com/ru/sdk/unity/tutorials/",
    "https://developers.xsolla.com/ru/sdk/unity/how-tos/",
    "https://developers.xsolla.com/ru/sdk/unity/store/",
    "https://developers.xsolla.com/ru/sdk/unity/inventory/",
    "https://developers.xsolla.com/ru/sdk/unity/payments/",
    "https://developers.xsolla.com/ru/sdk/unreal-engine/use-xsolla-servers/",
    "https://developers.xsolla.com/ru/sdk/unreal-engine/use-your-server-side/",
    "https://developers.xsolla.com/ru/sdk/unreal-engine/use-third-party-servers/",
    "https://developers.xsolla.com/ru/sdk/unreal-engine/use-serverless-integration/",
    "https://developers.xsolla.com/ru/sdk/unreal-engine/commerce/",
    "https://developers.xsolla.com/ru/sdk/unreal-engine/login/",
    "https://developers.xsolla.com/ru/sdk/unreal-engine/cross-buy/",
    "https://developers.xsolla.com/ru/sdk/unreal-engine/tutorials/",
    "https://developers.xsolla.com/ru/sdk/unreal-engine/how-tos/",
    "https://developers.xsolla.com/ru/sdk/unreal-engine/store/",
    "https://developers.xsolla.com/ru/sdk/unreal-engine/inventory/",
    "https://developers.xsolla.com/ru/sdk/unreal-engine/payments/",
    "https://developers.xsolla.com/ru/sdk/android/use-xsolla-servers/",
    "https://developers.xsolla.com/ru/sdk/android/use-your-server-side/",
    "https://developers.xsolla.com/ru/sdk/android/use-third-party-servers/",
    "https://developers.xsolla.com/ru/sdk/android/use-serverless-integration/",
    "https://developers.xsolla.com/ru/sdk/android/commerce/",
    "https://developers.xsolla.com/ru/sdk/android/login/",
    "https://developers.xsolla.com/ru/sdk/android/cross-buy/",
    "https://developers.xsolla.com/ru/sdk/android/tutorials/",
    "https://developers.xsolla.com/ru/sdk/android/how-tos/",
    "https://developers.xsolla.com/ru/sdk/android/store/",
    "https://developers.xsolla.com/ru/sdk/android/inventory/",
    "https://developers.xsolla.com/ru/sdk/android/payments/",
    "https://developers.xsolla.com/ru/sdk/ios/use-xsolla-servers/",
    "https://developers.xsolla.com/ru/sdk/ios/use-your-server-side/",
    "https://developers.xsolla.com/ru/sdk/ios/use-third-party-servers/",
    "https://developers.xsolla.com/ru/sdk/ios/use-serverless-integration/",
    "https://developers.xsolla.com/ru/sdk/ios/commerce/",
    "https://developers.xsolla.com/ru/sdk/ios/login/",
    "https://developers.xsolla.com/ru/sdk/ios/cross-buy/",
    "https://developers.xsolla.com/ru/sdk/ios/tutorials/",
    "https://developers.xsolla.com/ru/sdk/ios/how-tos/",
    "https://developers.xsolla.com/ru/sdk/ios/store/",
    "https://developers.xsolla.com/ru/sdk/ios/inventory/",
    "https://developers.xsolla.com/ru/sdk/ios/payments/",
  ],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://developers.xsolla.com/**"],
  schedule: "at 14:40 on Saturday",
  actions: [
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/ja/api/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li, article td",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            lvl5: "article h6",
            lang: {
              defaultValue: ["ja"],
            },
            tags: {
              defaultValue: ["api"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/ru/api/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li, article td",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            lvl5: "article h6",
            lang: {
              defaultValue: ["ru"],
            },
            tags: {
              defaultValue: ["api"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/ko/api/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li, article td",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            lvl5: "article h6",
            lang: {
              defaultValue: ["ko"],
            },
            tags: {
              defaultValue: ["api"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/zh/api/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li, article td",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            lvl5: "article h6",
            lang: {
              defaultValue: ["zh"],
            },
            tags: {
              defaultValue: ["api"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/de/api/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li, article td",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            lvl5: "article h6",
            lang: {
              defaultValue: ["de"],
            },
            tags: {
              defaultValue: ["api"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/ja/sdk/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".sideMenu .heading__label._active",
            content: "article p, article li, article td",
            lvl0: {
              selectors: ".sideMenu .sideMenu__heading",
            },
            lvl2: "article h1",
            lvl3: "article h2",
            lvl4: "article h3",
            lvl5: "article h4",
            lvl6: "article h5",
            lang: {
              defaultValue: ["ja"],
            },
            tags: {
              defaultValue: ["sdk"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/ru/sdk/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".sideMenu .heading__label._active",
            content: "article p, article li, article td",
            lvl0: {
              selectors: ".sideMenu .sideMenu__heading",
            },
            lvl2: "article h1",
            lvl3: "article h2",
            lvl4: "article h3",
            lvl5: "article h4",
            lvl6: "article h5",
            lang: {
              defaultValue: ["ru"],
            },
            tags: {
              defaultValue: ["sdk"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/ko/sdk/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".sideMenu .heading__label._active",
            content: "article p, article li, article td",
            lvl0: {
              selectors: ".sideMenu .sideMenu__heading",
            },
            lvl2: "article h1",
            lvl3: "article h2",
            lvl4: "article h3",
            lvl5: "article h4",
            lvl6: "article h5",
            lang: {
              defaultValue: ["ko"],
            },
            tags: {
              defaultValue: ["sdk"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/zh/sdk/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".sideMenu .heading__label._active",
            content: "article p, article li, article td",
            lvl0: {
              selectors: ".sideMenu .sideMenu__heading",
            },
            lvl2: "article h1",
            lvl3: "article h2",
            lvl4: "article h3",
            lvl5: "article h4",
            lvl6: "article h5",
            lang: {
              defaultValue: ["zh"],
            },
            tags: {
              defaultValue: ["sdk"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/de/sdk/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".sideMenu .heading__label._active",
            content: "article p, article li, article td",
            lvl0: {
              selectors: ".sideMenu .sideMenu__heading",
            },
            lvl2: "article h1",
            lvl3: "article h2",
            lvl4: "article h3",
            lvl5: "article h4",
            lvl6: "article h5",
            lang: {
              defaultValue: ["de"],
            },
            tags: {
              defaultValue: ["sdk"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/ja/changelog/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".nav.nav-stacked.fixed > .nav-item.active > a",
            content:
              "article .cg-text-bl p, article .cg-text-bl li, article .cg-text-bl td",
            lvl0: {
              selectors: ".menu-header .c-menu-i",
            },
            lvl2: ".nav.nav-stacked.fixed > .nav-item.active .nav .nav-item.active .nav-link",
            lvl3: "article .ogr-wg-box h2",
            lvl4: "article .cg-content-box .cg-subtitle",
            lang: {
              defaultValue: ["ja"],
            },
            tags: {
              defaultValue: ["changelog"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/ru/changelog/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".nav.nav-stacked.fixed > .nav-item.active > a",
            content:
              "article .cg-text-bl p, article .cg-text-bl li, article .cg-text-bl td",
            lvl0: {
              selectors: ".menu-header .c-menu-i",
            },
            lvl2: ".nav.nav-stacked.fixed > .nav-item.active .nav .nav-item.active .nav-link",
            lvl3: "article .ogr-wg-box h2",
            lvl4: "article .cg-content-box .cg-subtitle",
            lang: {
              defaultValue: ["ru"],
            },
            tags: {
              defaultValue: ["changelog"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/ko/changelog/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".nav.nav-stacked.fixed > .nav-item.active > a",
            content:
              "article .cg-text-bl p, article .cg-text-bl li, article .cg-text-bl td",
            lvl0: {
              selectors: ".menu-header .c-menu-i",
            },
            lvl2: ".nav.nav-stacked.fixed > .nav-item.active .nav .nav-item.active .nav-link",
            lvl3: "article .ogr-wg-box h2",
            lvl4: "article .cg-content-box .cg-subtitle",
            lang: {
              defaultValue: ["ko"],
            },
            tags: {
              defaultValue: ["changelog"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/zh/changelog/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".nav.nav-stacked.fixed > .nav-item.active > a",
            content:
              "article .cg-text-bl p, article .cg-text-bl li, article .cg-text-bl td",
            lvl0: {
              selectors: ".menu-header .c-menu-i",
            },
            lvl2: ".nav.nav-stacked.fixed > .nav-item.active .nav .nav-item.active .nav-link",
            lvl3: "article .ogr-wg-box h2",
            lvl4: "article .cg-content-box .cg-subtitle",
            lang: {
              defaultValue: ["zh"],
            },
            tags: {
              defaultValue: ["changelog"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/de/changelog/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".nav.nav-stacked.fixed > .nav-item.active > a",
            content:
              "article .cg-text-bl p, article .cg-text-bl li, article .cg-text-bl td",
            lvl0: {
              selectors: ".menu-header .c-menu-i",
            },
            lvl2: ".nav.nav-stacked.fixed > .nav-item.active .nav .nav-item.active .nav-link",
            lvl3: "article .ogr-wg-box h2",
            lvl4: "article .cg-content-box .cg-subtitle",
            lang: {
              defaultValue: ["de"],
            },
            tags: {
              defaultValue: ["changelog"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/ja/doc/faq/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li, article td",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            lvl5: "article h6",
            lang: {
              defaultValue: ["ja"],
            },
            tags: {
              defaultValue: ["faq"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/ru/doc/faq/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li, article td",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            lvl5: "article h6",
            lang: {
              defaultValue: ["ru"],
            },
            tags: {
              defaultValue: ["faq"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/ko/doc/faq/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li, article td",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            lvl5: "article h6",
            lang: {
              defaultValue: ["ko"],
            },
            tags: {
              defaultValue: ["faq"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/zh/doc/faq/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li, article td",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            lvl5: "article h6",
            lang: {
              defaultValue: ["zh"],
            },
            tags: {
              defaultValue: ["faq"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/de/doc/faq/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li, article td",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            lvl5: "article h6",
            lang: {
              defaultValue: ["de"],
            },
            tags: {
              defaultValue: ["faq"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/ja/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".sideMenu .heading__label._active",
            content: "article p, article li, article td",
            lvl0: {
              selectors: ".sideMenu .sideMenu__heading",
            },
            lvl2: "article h1",
            lvl3: "article h2",
            lvl4: "article h3",
            lvl5: "article h4",
            lvl6: "article h5",
            lang: {
              defaultValue: ["ja"],
            },
            tags: {
              defaultValue: ["doc"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/ru/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".sideMenu .heading__label._active",
            content: "article p, article li, article td",
            lvl0: {
              selectors: ".sideMenu .sideMenu__heading",
            },
            lvl2: "article h1",
            lvl3: "article h2",
            lvl4: "article h3",
            lvl5: "article h4",
            lvl6: "article h5",
            lang: {
              defaultValue: ["ru"],
            },
            tags: {
              defaultValue: ["doc"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/ko/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".sideMenu .heading__label._active",
            content: "article p, article li, article td",
            lvl0: {
              selectors: ".sideMenu .sideMenu__heading",
            },
            lvl2: "article h1",
            lvl3: "article h2",
            lvl4: "article h3",
            lvl5: "article h4",
            lvl6: "article h5",
            lang: {
              defaultValue: ["ko"],
            },
            tags: {
              defaultValue: ["doc"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/zh/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".sideMenu .heading__label._active",
            content: "article p, article li, article td",
            lvl0: {
              selectors: ".sideMenu .sideMenu__heading",
            },
            lvl2: "article h1",
            lvl3: "article h2",
            lvl4: "article h3",
            lvl5: "article h4",
            lvl6: "article h5",
            lang: {
              defaultValue: ["zh"],
            },
            tags: {
              defaultValue: ["doc"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/de/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".sideMenu .heading__label._active",
            content: "article p, article li, article td",
            lvl0: {
              selectors: ".sideMenu .sideMenu__heading",
            },
            lvl2: "article h1",
            lvl3: "article h2",
            lvl4: "article h3",
            lvl5: "article h4",
            lvl6: "article h5",
            lang: {
              defaultValue: ["de"],
            },
            tags: {
              defaultValue: ["doc"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/doc/faq/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li, article td",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            lvl5: "article h6",
            lang: {
              defaultValue: ["en"],
            },
            tags: {
              defaultValue: ["faq"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/sdk/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".sideMenu .heading__label._active",
            content: "article p, article li, article td",
            lvl0: {
              selectors: ".sideMenu .sideMenu__heading",
            },
            lvl2: "article h1",
            lvl3: "article h2",
            lvl4: "article h3",
            lvl5: "article h4",
            lvl6: "article h5",
            lang: {
              defaultValue: ["en"],
            },
            tags: {
              defaultValue: ["sdk"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/changelog/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".nav.nav-stacked.fixed > .nav-item.active > a",
            content:
              "article .cg-text-bl p, article .cg-text-bl li, article .cg-text-bl td",
            lvl0: {
              selectors: ".menu-header .c-menu-i",
            },
            lvl2: ".nav.nav-stacked.fixed > .nav-item.active .nav .nav-item.active .nav-link",
            lvl3: "article .ogr-wg-box h2",
            lvl4: "article .cg-content-box .cg-subtitle",
            lang: {
              defaultValue: ["en"],
            },
            tags: {
              defaultValue: ["changelog"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com/api/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: "article h2",
            content: "article p, article li, article td",
            lvl0: {
              selectors: "article h1",
            },
            lvl2: "article h3",
            lvl3: "article h4",
            lvl4: "article h5",
            lvl5: "article h6",
            lang: {
              defaultValue: ["en"],
            },
            tags: {
              defaultValue: ["api"],
            },
          },
          indexHeadings: true,
        });
      },
    },
    {
      indexName: "xsolla",
      pathsToMatch: ["https://developers.xsolla.com**/**"],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".mobileMenuWrapper, .header";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".sideMenu .heading__label._active",
            content: "article p, article li, article td",
            lvl0: {
              selectors: ".sideMenu .sideMenu__heading",
            },
            lvl2: "article h1",
            lvl3: "article h2",
            lvl4: "article h3",
            lvl5: "article h4",
            lvl6: "article h5",
            lang: {
              defaultValue: ["en"],
            },
            tags: {
              defaultValue: ["doc"],
            },
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    xsolla: {
      attributesForFaceting: ["type", "lang", "tags"],
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