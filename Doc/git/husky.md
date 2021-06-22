# husky

コミットやプッシュ時に、任意のコマンドを自動で実行できるもの

## 使い方

package.json に設定する

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "npm test",
      "pre-push": "npm test"
    }
  }
}
```

pre-commit に設定したコマンドが、git commit  
pre-push に設定したコマンドは、git push

にフックされる。

このリポジトリは husky と lint-staged を連携して使用している。

```json
"husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
},
```

このように lint-stage を呼ぶように設定する
