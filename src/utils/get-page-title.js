import defaultSettings from '@/settings'

const title = defaultSettings.title || '云卡BOSS'

export default function getPageTitle(pageTitle, user) {
  let newTitle = title
  if (pageTitle) {
    // return `${pageTitle} - ${title}`
    newTitle = `${pageTitle} - ${title}`
  }
  if (user) {
    newTitle = `${newTitle} - ${user}`
  }
  return `${newTitle}`
}
