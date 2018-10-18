const fs = require('fs')
const mkdirp = require('mkdirp')

let fileName = ''

const [exe, js, ...args] = process.argv;

fileName = args[0]


const template = [
  {
    name: 'html',
    entry: './template/index.tsx',
    open: `${__dirname}/src/pages/${fileName}`,
    output: `${__dirname}/src/pages/${fileName}/index.tsx`,
  },
  {
    name: 'less',
    entry: './template/index.less',
    open: `${__dirname}/src/pages/${fileName}`,
    output: `${__dirname}/src/pages/${fileName}/index.less`,
  },
  {
    name: 'dva',
    entry: './template/modules/index.ts',
    open: `${__dirname}/src/pages/${fileName}/dva`,
    output: `${__dirname}/src/pages/${fileName}/dva/index.ts`,
  },
  {
    name: 'fetch',
    entry: './template/modules/servers.ts',
    open: `${__dirname}/src/pages/${fileName}/dva`,
    output: `${__dirname}/src/pages/${fileName}/dva/servers.ts`,
  },
]


function getTemplate (item) {
  return new Promise(function (resolve, reject) {
    fs.readFile(item.entry, function (err, data) {
      //文件内容
      if (err) {
        console.log('文件读取出错：')
        console.log(item.entry)
        reject(err)
        return
      }
      console.log('文件读取成功:', item.entry)
      resolve(data.toString())
    })
  })

}




function writeFile ({ info, open, output }) {
  mkdirp(open, (err) => {
    if (err) {
      console.log('文件路径查找失败：', open)
      return
    }

    fs.open(output, 'w', (openErr, fd) => {
      if (openErr) {
        console.log('文件打开失败：', output)
        return
      }

      fs.write(fd, info, 0, 'utf8', (writeErr) => {
        if (writeErr) {
          console.log('文件写入失败：', output)
          return
        }
        fs.closeSync(fd);
        console.log('文件写入成功：', output)
      })
    })
  })
}


template.map(async (item) => {
  try {
    const fileInfo = await getTemplate(item)
    writeFile({
      info: fileInfo,
      open: item.open,
      output: item.output
    })
  } catch (error) {
    console.log(error)
  }
})
