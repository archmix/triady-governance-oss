export interface AssetSettings {
    singular : string
    plural: string
    icon: string
}

export const commiterSettings:AssetSettings = {
    singular: 'Commiter',
    plural: 'Commiters',
    icon: 'icon-people'
}

export const contextSettings:AssetSettings = {
    singular: 'Context',
    plural: 'Contexts',
    icon: 'fa fa-rocket'
}

export const dashboardSettings:AssetSettings = {
    singular: 'Dashboard',
    plural: 'Dashboards',
    icon: 'icon-speedometer'
}

export const moduleSettings:AssetSettings = {
    singular: 'Module',
    plural: 'Modules',
    icon: 'icon-puzzle'
}

export const schemaSettings:AssetSettings = {
    singular: 'Schema',
    plural: 'Schemas',
    icon: 'fa fa-file-code-o'
}

export const endpointSettings:AssetSettings = {
    singular: 'Endpoint',
    plural: 'Endpoints',
    icon: 'fa fa-cloud'
}

export const cacheSettings:AssetSettings = {
    singular: 'Cache',
    plural: 'Caches',
    icon: 'fa fa-flash'
}

export const tableSettings:AssetSettings = {
    singular: 'Table',
    plural: 'Tables',
    icon: 'fa fa-table'
}

export const topicSettings:AssetSettings = {
    singular: 'Topic',
    plural: 'Topics',
    icon: 'icon-layers'
}

export class AssetsSettings {
    public static context : AssetSettings = contextSettings;
    public static dashboard : AssetSettings = dashboardSettings;
    public static module : AssetSettings = moduleSettings;
    public static schema : AssetSettings = schemaSettings;
    public static endpoint : AssetSettings = endpointSettings;
    public static cache : AssetSettings = cacheSettings;
    public static table : AssetSettings = tableSettings;
    public static topic : AssetSettings = topicSettings;
}