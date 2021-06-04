const fs = require('fs')
const path = require('path')
const data = require('./cryptoID.json')

const buildFile = (data) => {
  console.log('data length', data.length)
  const newArr = []
  data.forEach( d => {
    const newData = {
      id: d.id,
      name: d.name,
      symbol: d.symbol,
      imageURL: `https://s2.coinmarketcap.com/static/img/coins/64x64/${d.id}.png`
    }
    console.log('newdata', newData)
    newArr.push(newData)
  })
  fs.writeFile(path.join(__dirname, 'IDmap.json'), JSON.stringify(newArr, null, 2), (err) => {
    if(err) console.log(err)
    console.log('write file')
  })
}

buildFile(data)