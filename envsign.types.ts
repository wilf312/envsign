export interface Setting {
    color?: string
    bodyClass?: string
    text?: string
    position?: string
}

export interface SettingWithEnvName extends Setting {
    envName?: string
}




