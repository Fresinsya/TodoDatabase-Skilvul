# TodoDatabase-Skilvul

membuat todo dengan mongoose, express, node.js.


## Features

- Membuat user baru (Register)
- Login
- Membuat todo baru
- Melihat semua todo
- Melihat detail todo
- Mengubah todo
- Menghapus todo
- Menghapus semua todo

## API reference

#### Register

```http
  POST /auth/register
```

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| name | string | *Required*. Full Name |
| username | string | *Required*. Username |
| email | string | *Required*. Username |
| password | string | *Required*. Password |

#### Login

```http
  POST /auth/login
```



#### Add Todo

```http
  POST /todo
```

| body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `value` | `string` | `value todo` |

| headers | value                |
| :-------- | :------------------------- |
| `authorization` | `Token` |


#### Read todo by userID

```http
  GET /todo
```

| headers | value                |
| :-------- | :------------------------- |
| `authorization` | `Token` |


#### Read todo detail by ID

```http
  GET /todo/:id
```

| headers | value                |
| :-------- | :------------------------- |
| `authorization` | `Token` |

| params | value                |
| :-------- | :------------------------- |
| `id` | `idTodo` |
