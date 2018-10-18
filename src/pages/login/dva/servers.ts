export async function fetch (params: any) {
  return new Promise(function (resolve, reject) {
    resolve({
      data: 'hello world'
    })
  })
}