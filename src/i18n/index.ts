/* eslint-disable @typescript-eslint/explicit-function-return-type */
import english from './en'
import spanish from './es'
import { socialLinks, projects, educationTimeline, jobsTimeline, titles, resources } from './data'

type getterProps = string | undefined

export const getI18n = (locale: getterProps = 'en') => {
  if (locale === 'en') return english
  if (locale === 'es') return spanish
  return english
}

export const getSocialLinks = (locale: getterProps = 'en') => {
  if (locale === 'en') return socialLinks.en
  if (locale === 'es') return socialLinks.es
  return socialLinks.en
}

export const getProjects = (locale: getterProps = 'en') => {
  if (locale === 'en') return projects.en
  if (locale === 'es') return projects.es
  return projects.en
}

export const getEducationTimeline = (locale: getterProps = 'en') => {
  if (locale === 'en') return educationTimeline.en
  if (locale === 'es') return educationTimeline.es
  return educationTimeline.en
}

export const getJobsTimeline = (locale: getterProps = 'en') => {
  if (locale === 'en') return jobsTimeline.en
  if (locale === 'es') return jobsTimeline.es
  return jobsTimeline.en
}

export const getResources = (locale: getterProps = 'en') => {
  if (locale === 'en') return resources.en
  if (locale === 'es') return resources.es
  return resources.en
}

export const getTitles = (locale: getterProps = 'en') => {
  if (locale === 'en') return titles.en
  if (locale === 'es') return titles.es
  return titles.en
}

export default function get(locale: getterProps = 'en') {
  return {
    i18n: getI18n(locale),
    socialLinks: getSocialLinks(locale),
    projects: getProjects(locale),
    educationTimeline: getEducationTimeline(locale),
    jobsTimeline: getJobsTimeline(locale),
    resources: getResources(locale),
    titles: getTitles(locale)
  }
}
