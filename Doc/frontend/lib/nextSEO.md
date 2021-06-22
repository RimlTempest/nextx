# next-seo

Next.js プロジェクトでの SEO の管理を容易にするプラグイン

## 使い方

設定ファイルを用意する

```TypeScript
// next-seo.config.js
export default {
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: '',
    site_name: 'SiteName',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};
```

設定ファイルを共通で呼ばれる `_app.tsx` で呼び出し DefaultSeo で展開する。

```TypeScript
// _app.tsx
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

<DefaultSeo {...SEO} />
```
