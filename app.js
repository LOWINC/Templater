const fs = require('fs')
const mkdirp = require('mkdirp')


const [exe, js, pageName, moduleName] = process.argv;

if (!pageName) {
  console.log('请输入页面文件名')
  return
}

if (!moduleName) {
  console.log('请输入dva模块名')
  return
}



const template = [
  {
    name: 'html',
    entry: './template/index.tsx',
    open: `${__dirname}/src/pages/${pageName}`,
    output: `${__dirname}/src/pages/${pageName}/index.tsx`,
  },
  {
    name: 'less',
    entry: './template/index.less',
    open: `${__dirname}/src/pages/${pageName}`,
    output: `${__dirname}/src/pages/${pageName}/index.less`,
  },
  {
    name: 'dva',
    entry: './template/modules/index.ts',
    open: `${__dirname}/src/pages/${pageName}/dva`,
    output: `${__dirname}/src/pages/${pageName}/dva/index.ts`,
  },
  {
    name: 'fetch',
    entry: './template/modules/servers.ts',
    open: `${__dirname}/src/pages/${pageName}/dva`,
    output: `${__dirname}/src/pages/${pageName}/dva/servers.ts`,
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
      resolve(data.toString()
        .replace(/_PAGE_NAME_/g, pageName)
        .replace(/_MODULE_NAME_/g, moduleName)
      )
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
