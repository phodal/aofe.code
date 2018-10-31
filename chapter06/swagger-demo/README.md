## Swagger 示例

根据官方文档修改 [https://github.com/swagger-api/swagger-node](https://github.com/swagger-api/swagger-node)

1.安装 Swagger：

```
npm install -g swagger
```

2.使用 Swagger CLI 创建项目：

```
swagger project create swagger-demo
```

3.编辑 Swagger API：

```
swagger project edit
```

4.使用 Node.js 编写控制器逻辑：

```javascript
function hello(req, res) {
    var name = req.swagger.params.name.value || 'stranger';
    var hello = util.format('Hello, %s!', name);
    res.json({ "message": hello });
}
```

5.运行服务

```
swagger project start
```

### 测试

```
$ curl http://127.0.0.1:10010/hello?name=Phodal
{ "message": "Hello, Phodal!" }
```

