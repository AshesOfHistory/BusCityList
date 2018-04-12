## CityList

用node抓取汽车票城市选择列表数据，接口为同程旅游，数据经处理后在本地生成两个文件，分别包含json格式和数组格式的城市数据；
```javascript
// ...
"B": [{
    "cname": "北京",
    "ename": "beijing",
    "parentName": "北京",
    "short": "BJ",
    "firstLetter": "B"
  }, {
    "cname": "巴中",
    "ename": "bazhong",
    "parentName": "四川",
    "short": "BZ",
    "firstLetter": "B"
  }, {
    "cname": "保定",
    "ename": "baoding",
    "parentName": "河北",
    "short": "BD",
    "firstLetter": "B"
  }],
// ...
```
```javascript
[{
  "cname": "安庆",
  "ename": "anqing",
  "parentName": "安徽",
  "short": "AQ",
  "firstLetter": "A"
}, {
  "cname": "安阳",
  "ename": "anyang",
  "parentName": "河南",
  "short": "AY",
  "firstLetter": "A"
}, {
  "cname": "安康",
  "ename": "ankang",
  "parentName": "陕西",
  "short": "AK",
  "firstLetter": "A"
},
// ...
]
```