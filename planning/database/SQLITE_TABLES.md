## Users

```sql
    CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    username TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT,
    email TEXT NOT NULL,
    profile_url TEXT
  );
```

## Albums

```sql
    CREATE TABLE albums (
    id INTEGER PRIMARY KEY,
    user_id INTEGER NOT NULL,
    title TEXT NOT NULL,
    is_public BOOLEAN NOT NULL,
    cover_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(id)
  );
```

## Photos

```sql
    CREATE TABLE photos (
    id INTEGER PRIMARY KEY,
    album_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    url TEXT NOT NULL,
    title TEXT NOT NULL,
    FOREIGN KEY (album_id) REFERENCES albums(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
  );
```
