import NextI18Next from 'next-i18next'

const NextI18NextInstance = new NextI18Next({
  strictMode: false,
  defaultLanguage: 'en',
  otherLanguages: ['de', 'ru']
})

export default NextI18NextInstance

export const {
  appWithTranslation,
  withTranslation,
  withNamespaces,
} = NextI18NextInstance