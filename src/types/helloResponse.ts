/**
* helloResponse
* /api/helloのレスポンスデータの型定義
* @alias name 名前
* @alias description 詳細文
* @alias message Hello！
*/
export type helloResponse = {
    name: string,
    description: string,
    message: string
}