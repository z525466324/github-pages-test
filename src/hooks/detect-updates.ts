// 轮循查询文件, 有更新提示
let currentVersionHash = ''

function getHashFromManifest(manifest: any): string {
  // 自定义 hash 生成方式：可拼接所有文件路径，也可只取主入口
  return Object.values(manifest)
    .map((entry: any) => entry.file)
    .join('|')
}

async function checkForUpdate() {
  try {
    const res = await fetch(`./detect-updates/manifest.json?_t=${Date.now()}`)
    const manifest = await res.json()
    const newHash = getHashFromManifest(manifest)

    if (!currentVersionHash) {
      currentVersionHash = newHash
    } else if (currentVersionHash !== newHash) {
      console.log('🚨 发现新版本，准备刷新页面')
      alert('检测到新版本，点击确认刷新页面')
      window.location.reload()
    }
  } catch (err) {
    console.error('版本检查失败', err)
  }
}
export default checkForUpdate
