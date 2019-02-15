# 普通 JSON Server

JSON Server，顾名思义是使用 JSON 文件快速创建 Mock Server。

```bash
npm install -g json-server
```

如下是官方的 JSON 示例：

```javascript
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```

启动脚本：

```bash
json-server --watch example.json
```