## Authorization Rules

### Entries
- **PUT /api/entries/:id**: Only the owner of the entry can update it.
- **DELETE /api/entries/:id**: Only the owner of the entry can delete it.

### Users
- **PUT /api/users/**: Users can only update their own user information.
- **GET /api/:id**: Users can only delete their own user


