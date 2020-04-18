import { INavData } from '@coreui/angular';
import { contextSettings, dashboardSettings, moduleSettings, schemaSettings, endpointSettings, cacheSettings, tableSettings, topicSettings } from 'common/interfaces/asset-settings.model'

export const navItems: INavData[] = [
  {
    name: dashboardSettings.singular,
    url: '/dashboard',
    icon: dashboardSettings.icon,
  },
  {
    title: true,
    name: 'Assets'
  },
  {
    name: contextSettings.plural,
    url: '/contexts',
    icon: contextSettings.icon
  },
  {
    name: moduleSettings.plural,
    url: '/modules',
    icon: moduleSettings.icon
  },
  {
    name: schemaSettings.plural,
    url: '/schemas',
    icon: schemaSettings.icon
  },
  {
    name: endpointSettings.plural,
    url: '/endpoints',
    icon: endpointSettings.icon
  },
  {
    name: cacheSettings.plural,
    url: '/caches',
    icon: cacheSettings.icon
  },
  {
    name: tableSettings.plural,
    url: '/tables',
    icon: tableSettings.icon
  },
  {
    name: topicSettings.plural,
    url: '/topics',
    icon: topicSettings.icon
  },
  /*
  {
    title: true,
    name: 'Blueprints'
  },
  {
    name: 'Projects',
    icon: 'fa fa-map-o',
    url: '/blueprints/projects',
    children: [
      {
        name: 'Naming Conventions',
        url: '/naming',
        icon: 'fa fa-map-o'
      }
    ]
  },
  */
];
