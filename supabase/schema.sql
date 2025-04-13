-- todos テーブル
create table if not exists todos (
  id uuid primary key default uuid_generate_v4(),
  task text not null,
  is_complete boolean not null default false,
  created_at timestamp with time zone default timezone('utc', now())
);
