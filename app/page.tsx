"use client";

import { useState, useEffect, FormEvent } from "react";
// lib ディレクトリにある Supabase クライアントをインポートします
import supabase from "../lib/supabaseClient";

// Todo アイテムの型定義
interface Todo {
  id: string; // ユニークな識別子（UUIDなど）
  task: string; // タスクの内容
  is_complete: boolean; // タスクの完了状態（初期は false）
  created_at: string; // タスクの作成日時（ISO形式の文字列）
}

export default function HomePage() {
  // todos 状態：Supabase から取得した Todo の一覧を保持する配列
  const [todos, setTodos] = useState<Todo[]>([]);
  // newTask 状態：入力フォームに入力された新しいタスクのテキストを保持
  const [newTask, setNewTask] = useState("");
  // loading 状態：データ取得や送信時の処理中かどうかを判定するフラグ
  const [loading, setLoading] = useState(false);

  // 初回レンダリング時に Todo リストのデータを取得するための useEffect フック
  useEffect(() => {
    fetchTodos();
  }, []);

  // Supabase の "todos" テーブルからタスクを取得する非同期関数
  const fetchTodos = async (): Promise<void> => {
    setLoading(true); // 処理開始のインジケーター
    // Supabase クライアントを利用して todos テーブルのデータを取得します
    const { data, error } = await supabase
      .from("todos")
      .select("*")
      .returns<Todo[]>() // 取得するデータの型を指定
      .order("created_at", { ascending: false } as const); // 最新のタスクが上に表示されるように並び替え
    if (error) {
      console.error("Error fetching todos:", error);
    } else {
      setTodos(data || []);
    }
    setLoading(false); // 処理終了
  };

  // 新しいタスクを追加するためのフォーム送信ハンドラー
  const handleAddTask = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault(); // フォームのデフォルト送信（ページリロード）を防止
    if (!newTask) return; // 入力が空の場合は何もしない

    setLoading(true); // タスク追加処理中に設定
    // Supabase の todos テーブルに対して、新しいタスクを挿入するクエリを実行します
    const { error } = await supabase
      .from("todos")
      .insert([{ task: newTask, is_complete: false }])
      .single(); // 追加したレコードを一つのオブジェクトとして取得
    if (error) {
      console.error("Error adding task:", error);
    } else {
      await fetchTodos(); // ✅ 最新状態を取得し直す
      setNewTask("");
    }
    setLoading(false); // タスク追加処理完了
  };

  // タスクを削除するためのボタンハンドラー
  const handleDeleteTask = async (id: string): Promise<void> => {
    setLoading(true); // 削除処理中に設定
    // Supabase の todos テーブルから指定された id を持つタスクを削除するクエリを実行します
    const { error } = await supabase.from("todos").delete().eq("id", id);
    if (error) {
      console.error("Error deleting task:", error);
    } else {
      // 削除成功時、todos 状態から該当タスクを除去します
      setTodos(todos.filter((todo) => todo.id !== id));
    }
    setLoading(false); // 削除処理完了
  };

  return (
    <main className="min-h-screen p-4 bg-gray-100 dark:bg-gray-900">
      {/* ページタイトル */}
      <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-4">
        DoNote+
      </h1>

      {/* 新規タスク追加用フォーム */}
      <form onSubmit={handleAddTask} className="mb-4 flex justify-center">
        <input
          type="text"
          placeholder="新しいタスクを追加"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="p-2 border border-gray-300 rounded-l-md focus:outline-none"
        />
        <button
          type="submit"
          disabled={loading}
          className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition-colors"
        >
          追加
        </button>
      </form>

      {/* ローディング中の表示 */}
      {loading && (
        <p className="text-center text-gray-700 dark:text-gray-300">
          読み込み中...
        </p>
      )}

      {/* Todo リストの表示 */}
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center p-2 border rounded-md bg-white dark:bg-gray-800"
          >
            <span className="text-gray-800 dark:text-gray-200">
              {todo.task}
            </span>
            <button
              onClick={() => handleDeleteTask(todo.id)}
              className="text-red-500 hover:text-red-600 transition-colors"
            >
              削除
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
