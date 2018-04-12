const axios = require('axios')
const fs = require('fs')

const instance = axios.create({
  baseURL: 'https://m.ly.com'
})

// 获取同程旅游城市列表接口数据
const getData = async (opt = {}) => {
  let output = (opt.format === 'array') ? [] : {}
  for (let i = 0; i < 26; i++) {
    let char = String.fromCharCode(65 + i)
    let params = {
      "letter": char
    }
    let res = await instance.post(`/busapi2/departure/getDepByLetter?plateId=5&_=${+ new Date()}`, params)
    let data = res.data.body
    if (data instanceof Array) {
      if (opt.format !== 'array') {
        output[char] = []
      }
      data.forEach((item, index) => {
        let itemObj = {}
        itemObj.cname = item.name
        itemObj.ename = item.enName
        itemObj.parentName = item.parentName
        itemObj.short = item.shortEnName
        itemObj.firstLetter = char
        if (opt.format === 'array') {
          output.push(itemObj)
        } else {
          output[char].push(itemObj)
        }
      })
    }
  }
  return output
}

// 默认输出json格式数据
getData().then(res => {
  fs.writeFile('busCity-json.json', JSON.stringify(res), err => {
    if (err) {
      console.error(err)
    }
  })
}).catch(err => {
  console.error(err)
})

//输出数组格式的数据
getData({ format: 'array' }).then(res => {
  fs.writeFile('busCity-array.json', JSON.stringify(res), err => {
    if (err) {
      console.error(err)
    }
  })
}).catch(err => {
  console.error(err)
})
