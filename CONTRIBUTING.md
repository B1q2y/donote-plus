# 🛠 DoNote+ 開発ルール (CONTRIBUTING.md)

## 📁 ディレクトリ構成（抜粋）

| ディレクトリ | 内容                                        |
| ------------ | ------------------------------------------- |
| `/app`       | Next.js App Router ベースのルーティング構成 |
| `/lib`       | Supabase などのユーティリティクライアント   |
| `/dev-log`   | 日ごとの開発記録（Markdown）                |
| `.env.local` | Supabase などの秘密情報（Git に含めない）   |

---

## 📄 Git 運用ルール

- `main` ブランチは常に **デプロイ可能な状態を維持**
- 開発は機能ごとにブランチを切る（例：`feature/task-toggle`）
- コミット後は必ず `push` → `PR` → `マージ`
- **Vercel は `main` にマージすると自動デプロイ**

---

## 💬 コミットメッセージルール（絵文字 + 要約）

| 絵文字 | 用途             |
| ------ | ---------------- |
| 🎉     | 初期セットアップ |
| ✨     | 新機能           |
| 🐛     | バグ修正         |
| ♻️     | リファクタリング |
| 📝     | ドキュメント更新 |
| 🚀     | デプロイ関連     |
| 🔧     | 設定ファイル修正 |
| 🧪     | テスト関連       |

**例：**

```
✨ 機能追加: タスク完了トグル機能を実装
```

---

## 🧪 開発フロー

1. `main` ブランチからブランチを切る

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. 作業 & コミット

   ```bash
   git add .
   git commit -m "✨ 機能追加: ○○○ を実装"
   ```

3. GitHub に push

   ```bash
   git push origin feature/your-feature-name
   ```

4. PR を作成 → マージ → 自動デプロイ

---

## ✅ その他

- `.env.local` は絶対に Git に含めない
- Vercel に Supabase 環境変数を登録すること
- dev-log に日ごとの進捗メモを残す（例: `dev-log/2025-04-13.md`）

---

_最終更新: 2025-04-13_
