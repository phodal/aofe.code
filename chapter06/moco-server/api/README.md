# Moco Server 示例

``java -jar moco-runner-0.12.0-standalone.jar http -p 12306 -g config.json``

```bash
$ curl -X POST -H "authorization: Bear 32423424324" -I -s http://localhost:12306/verify-token

> HTTP/1.1 200 OK
> content-length: 0

$ curl -X POST -H "authorization: Bear fasdkaf" -I -s http://localhost:12306/verify-token

> HTTP/1.1 400 Bad Request
> content-length: 0
```