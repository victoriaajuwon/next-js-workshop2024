# Galronel, a photo library

# Photo

```ts
type Photo = {
  id: string;
  user_id: number;
  album_id: number;
  url: string;
  title: string;
};
```

# Photos

```ts
type Photos = Photo[];
```

# Album

```ts
type Album = {
  id: string;
  user_id: number;
  title: string;
  is_public: boolean;
  cover_id: number;
};
```

# User

```ts
type User = {
  id: string;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  profile_url?: string;
};
```
