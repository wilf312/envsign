export interface Setting {
    color?: string
    bodyClass?: string
    text?: string
    position?: string
    vertical?: string
    horizontal?: string
}

export interface SettingWithEnvName extends Setting {
    envName?: string
}




