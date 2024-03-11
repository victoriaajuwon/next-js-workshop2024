## Users

```sql
INSERT INTO
  users (username, first_name, last_name, email, profile_url )
VALUES
  (?, ?, ?, ?, ?)
```

## Albums

```sql
INSERT INTO
photos (album_id, user_id, url, title )
VALUES
(?, ?, ?, ?)
```

## Photos

```sql
INSERT INTO
albums (user_id, title, is_public, cover_id )
VALUES
(?, ?, ?,?)
```
