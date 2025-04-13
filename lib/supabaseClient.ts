// lib/supabaseClient.ts
// Supabase の公式ライブラリから createClient をインポートします
import { createClient } from "@supabase/supabase-js";

// .env.local に設定された環境変数から Supabase の URL と Anon Key を取得します
const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Supabase クライアントのインスタンスを作成し、データベースとの CRUD 操作を可能にします
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// 作成したクライアントをエクスポートして、他のモジュールで再利用できるようにします
export default supabase;
