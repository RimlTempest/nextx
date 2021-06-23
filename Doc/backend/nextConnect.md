# next-connect

*Express.js* の`app.use()`のような書き方で制御できるようにするライブラリ。  
`pages/api` で使用する

## 使い方

```TypeScript
import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';

export default nextConnect<NextApiRequest,NextApiResponse>(
// ...(エラー処理など)...
).use(
   (req,res,next)=>{
      //ここに共通の処理を書く

      next(); //次の処理へ続く
   }
);
```

エラーハンドリングなど共通化したい処理を *handler* として定義する

```TypeScript
// ./handler.ts

const reqMethodErr = (method: string) => {
    const _mes: errorMessageType = {
        error: {
            message: `Error: ${method} Not Allowed`,
        },
    };
    return _mes;
};

const err = (mes: string) => {
    const _mes: errorMessageType = {
        error: {
            message: mes,
        },
    };
    return _mes;
};

export default NextConnect<NextApiRequest, NextApiResponse>({
    onNoMatch(req, res) {
        res.status(405).json(reqMethodErr(req.method!));
    },
    onError(error, req, res) {
        res.status(501).json(err(error.message));
    },
});

```

共通化したハンドラーを使用する

```TypeScript
import handler from './handler';
// ./get.ts

const fmtString = (value: string | string[]): string => {
    if (Array.isArray(value)) {
        return value[0];
    }
    console.log('--- fmtString: ', value);
    return value;
};

export default handler.get(async (req, res) => {
    const {
        query: { name, description },
    } = req;

    if (!name) {
        res.status(403).end('Error: no name');
        return;
    }

    if (!description) {
        res.status(403).end('Error: no description');
        return;
    }

    const data = {
        res: {
            name: fmtString(name),
            description: fmtString(description),
        },
    };

    res.status(200).json(data);
});
```

あとは  
`http://localhost:3000/api/get?name=Riml&description=Author!`
に `get` リクエストを送ると

```json
{
  "name": "Riml",
  "description": "Author!"
}
```

というレスポンスを得られる。
