import defaultSettings from '@/settings'

const title = defaultSettings.title || 'GT Framework'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
