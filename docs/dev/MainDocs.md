# ColudAI基础开发文档👨‍🔬
> 🐨以下任何东西除非群主及管理员指定请勿截图或转发

## 1.ColudAI账号
适用于网页等开发-必须支持HTTP请求集🤷‍♂️
APIFox开发文档链接[点击前往API文档](https://apifox.com/apidoc/shared-ccfa7598-fd79-43f9-9a62-757df6259dc5)-内部开发请勿外部使用
APIVue示例项目[点击前往-account.coludai.cn](https://account.coludai.cn/)
::: code-group

```python [Python]
import requests

url = "https://email.coludai.cn/email/login"

payload='username=LSA&md5Password=d7f426ccbc6db7e235c57958c21c5dfa'
headers = {
   'User-Agent': 'Apifox/1.0.0 (https://apifox.com)'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)
```

```js [JavaScript]
var myHeaders = new Headers();
myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");

var urlencoded = new URLSearchParams();
urlencoded.append("username", "LSA");
urlencoded.append("md5Password", "d7f426ccbc6db7e235c57958c21c5dfa");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

fetch("https://email.coludai.cn/email/login", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

```shell [Shell]
curl --location --request POST 'https://email.coludai.cn/email/login' \
--header 'User-Agent: Apifox/1.0.0 (https://apifox.com)' \
--data-urlencode 'username=LSA' \
--data-urlencode 'md5Password=d7f426ccbc6db7e235c57958c21c5dfa'
```

:::
## 2.MD5加密
适用于ColudAI内部项目例如:ColudAI账号...
:::code-group
```javascript [JavaScript]
var myHeaders = new Headers();
myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://md5.coludai.cn/md5?str=内容", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
```Python [Python]
import requests
Text = "填入未加密文本"  # 未加密的文本
res = requests.get(f"https://md5.coludai.cn/md5?str={text}")  # 发送GET请求
print(res.text) # 输出加密后内容
```
```tip
Tip:
    请求得到md5值纯纯多此一举，不如好好调用JS库/Python模块
```
:::
## 3.
> 💡 Tips：输入`/uu`

