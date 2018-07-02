import { SettingWithEnvName } from 'envsign.types'


// パース
const createConfig = (
    envName = ENV_SIGN,
    signSetting = ENV_SIGN_SETTING
    ): SettingWithEnvName => {
    const settings = Object.keys(signSetting)
        .map(
        (envName): SettingWithEnvName => {
            return { ...signSetting[envName], envName }
        }
        )
        .filter(setting => {
        return setting.envName === envName
        })
    if (settings.length === 0) {
        console.warn('no config package.json')
        return {}
    } else {
        return settings[0]
    }
    }
    

export const signEnv = (envSignSettings = ENV_SIGN_SETTING, envName = ENV_SIGN) => {
    console.log(`ENV_SIGN => `, ENV_SIGN)
    console.log(`ENV_SIGN_SETTING => `, ENV_SIGN_SETTING)
    console.log(`ENV_SIGN_SETTING => `, JSON.stringify(ENV_SIGN_SETTING))
    
    const config = createConfig()
    const dom = document.querySelector('body')
    const div = document.createElement('div')
    
    Object.keys(config).forEach(key => {
      if (key === 'bodyClass') {
        dom.classList.add(config.bodyClass)
      } else if (key === 'color') {
        dom.setAttribute('style', `background-color: ${config.color};`)
      } else if (key === 'text') {
        div.classList.add('env-sign-text')
        div.setAttribute('style', `position: absolute; font-size: 20px;`)
        div.innerHTML = config.text
      } else if (key === 'vertical') {
        if (config.vertical === 'top') {
          div.setAttribute('style', `${div.style.cssText}top: 0;`)
        } else if (config.vertical === 'bottom') {
          div.setAttribute('style', `${div.style.cssText}bottom: 0;`)
        }
      } else if (key === 'horizontal') {
        if (config.horizontal === 'left') {
          div.setAttribute('style', `${div.style.cssText}left: 0;`)
        } else if (config.horizontal === 'right') {
          div.setAttribute('style', `${div.style.cssText}right: 0;`)
        }
      }
    })
    
    dom.appendChild(div)
    div.addEventListener('click', function() {
      this.parentNode.removeChild(this)
    })
}