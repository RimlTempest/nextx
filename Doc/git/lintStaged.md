# lint-staged

*Git* のステージ環境にあるファイルを *lint* してくれるツール

## 使い方

`package.json` に設定する

```json
"lint-staged": {
    "src/**/*.{js,jsx,ts,tsx}": [
        "eslint --fix"
    ]
}
```

このリポジトリは `husky` と連携して使用しているので `husky` 側で

```json
"husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
},
```

このように *lint-stage* を呼ぶように設定する
