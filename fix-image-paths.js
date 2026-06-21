import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const filePath = path.resolve(__dirname, 'src/domains/catalog/data/products.js')
let content = fs.readFileSync(filePath, 'utf8')
const replacements = {
  '/headset1.png': '/images/headsets/headset1.png',
  '/headset2.png': '/images/headsets/headset2.png',
  '/headset3.png': '/images/headsets/headset3.png',
  '/headset4.png': '/images/headsets/headset4.png',
  '/headset5.png': '/images/headsets/headset5.png',
  '/teclado1.png': '/images/keyboards/teclado1.png',
  '/teclado2.png': '/images/keyboards/teclado2.png',
  '/teclado3.png': '/images/keyboards/teclado3.png',
  '/teclado4.png': '/images/keyboards/teclado4.png',
  '/teclado5.png': '/images/keyboards/teclado5.png',
  '/mouse1.png': '/images/mouses/mouse1.png',
  '/mouse2.png': '/images/mouses/mouse2.png',
  '/mouse3.png': '/images/mouses/mouse3.png',
  '/mouse4.png': '/images/mouses/mouse4.png',
  '/mouse5.png': '/images/mouses/mouse5.png',
  '/mousepad1.png': '/images/mousepads/mousepad1.png',
  '/mousepad2.png': '/images/mousepads/mousepad2.png',
  '/mousepad3.png': '/images/mousepads/mousepad3.png',
  '/mousepad4.png': '/images/mousepads/mousepad4.png',
  '/mousepad5.png': '/images/mousepads/mousepad5.png',
  '/soundbox1.png': '/images/soundboxs/soundbox1.png',
  '/soundbox2.png': '/images/soundboxs/soundbox2.png',
  '/soundbox3.png': '/images/soundboxs/soundbox3.png',
  '/soundbox4.png': '/images/soundboxs/soundbox4.png',
  '/soundbox5.png': '/images/soundboxs/soundbox5.png',
  '/monitor1.png': '/images/monitors/monitor1.png',
  '/monitor2.png': '/images/monitors/monitor2.png',
  '/monitor3.png': '/images/monitors/monitor3.png',
  '/monitor4.png': '/images/monitors/monitor4.png',
  '/monitor5.png': '/images/monitors/monitor5.png',
}
for (const [oldPath, newPath] of Object.entries(replacements)) {
  content = content.split(oldPath).join(newPath)
}
fs.writeFileSync(filePath, content, 'utf8')
console.log('Updated image paths in', filePath)
