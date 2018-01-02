import yaml from 'js-yaml'
import fs from 'fs'
import path from 'path'

let config = {}
try {
  config = yaml.safeLoad(fs.readFileSync(path.resolve(__dirname, 'config.yml'), 'utf8'))
} catch (e) {
  console.log(e) // eslint-disable-line
}

const ENV = {
  DEV: 'development',
  PRD: 'production',
}

try {
  
  let enhanceConfig = {}
  switch (process.env.NODE_ENV) {
    case ENV.DEV: 
      enhanceConfig = yaml.safeLoad(fs.readFileSync(path.resolve(__dirname, 'dev.config.yml'), 'utf8'))
      break
    default: 
      enhanceConfig = yaml.safeLoad(fs.readFileSync(path.resolve(__dirname, 'prd.config.yml'), 'utf8'))
      break
  }

  config = {
    ...config,
    ...enhanceConfig,
  }

} catch (e) {
  console.log(e) // eslint-disable-line
}

export { config }
