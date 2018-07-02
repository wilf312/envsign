import { Setting, SettingWithEnvName } from 'envsign.types'
const hoge = 'aaa'
console.log(`hoge => ${hoge}`)
console.log(`ENV_SIGN => `, ENV_SIGN)
console.log(`ENV_SIGN_SETTING => `, ENV_SIGN_SETTING)
console.log(`ENV_SIGN_SETTING => `, JSON.stringify(ENV_SIGN_SETTING))

// パース
const createConfig = (envName = ENV_SIGN, signSetting = ENV_SIGN_SETTING): SettingWithEnvName => {
    const settings = Object.keys(signSetting)
    .map((envName): SettingWithEnvName => {
        return { ...signSetting[envName], envName }
    })
    .filter((setting) => {
        return setting.envName === envName
    })
    if (settings.length === 0) {
        console.warn('no config package.json')
        return {}
    } else {
        return settings[0]
    }
}

const config = createConfig()
const dom = document.querySelector('body')

Object.keys(config).forEach((key) => {
    if (key === 'bodyClass') {
        dom.classList.add(config.bodyClass)
    } else if (key === 'color') {
        dom.setAttribute('style', `background-color: ${config.color};`)
    } else if (key === 'text') {
        const div = document.createElement('div')
        div.classList.add('env-sign-text')
        div.setAttribute('style', `position: absolute; font-size: 20px;`)
        dom.appendChild(div)
        div.innerHTML = config.text
    }
})
  