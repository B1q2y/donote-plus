# 📝 DoNote+ - リッチな UX を目指した Todo アプリ

Supabase + Vercel で構築する、シンプルだけど実用的なフルスタック Todo アプリ。

---

## 🎯 このプロジェクトの目的

- Supabase + Vercel の実践的な習得
- フルスタック開発・UI/UX 設計力の向上
- スマホでも快適なレスポンシブ対応
- 後からログイン機能や共有機能も追加予定

---

## ⚙️ 主な機能

- タスクの追加・削除（Supabase に永続保存）
- ダーク/ライトテーマ切替対応
- 複数端末間でリアルタイム同期
- Tailwind によるシンプルかつ美しい UI
- 開発ログの Markdown 記録 (`dev-log/`)

---

## 🧰 使用技術・ライブラリ

| 分類                 | 使用技術                                    |
| -------------------- | ------------------------------------------- |
| フロントエンド       | [Next.js (App Router)](https://nextjs.org/) |
| スタイリング         | [Tailwind CSS](https://tailwindcss.com/)    |
| バックエンド（BaaS） | [Supabase](https://supabase.com/)           |
| デプロイ             | [Vercel](https://vercel.com/)               |
| Lint & 型            | ESLint / TypeScript                         |

---

## 🚀 デプロイ環境

アプリは Vercel 上に自動デプロイされています：

🔗 https://donote-plus.vercel.app/

---

## 🛠 開発環境構築（ローカル）

```bash
# 1. リポジトリをクローン
git clone https://github.com/your-name/donote-plus.git
cd donote-plus

# 2. 必要パッケージをインストール
npm install

# 3. Supabase 環境変数を設定（.env.local）
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# 4. 開発サーバ起動
npm run dev
```

---

## 🧭 コントリビュート方法

このリポジトリでは以下のルールを採用しています：

- ブランチ戦略: `main` / `feature/*`
- 絵文字付きコミットメッセージ（ルールは [CONTRIBUTING.md](./CONTRIBUTING.md) を参照）

---

## 📂 ディレクトリ構成（抜粋）

```bash
donote-plus/
├── app/                  # Next.js App Router のルート
├── lib/                  # Supabase クライアント
├── dev-log/              # 日別の開発記録
├── public/               # 画像・静的ファイル
├── .env.local            # Supabase の環境変数（Gitに含めない）
├── CONTRIBUTING.md       # 開発ルール
├── .gitmessage.txt       # コミットテンプレ
└── ...
```

---

## 📜 ライセンス

---

_最終更新: 2025-04-13_
