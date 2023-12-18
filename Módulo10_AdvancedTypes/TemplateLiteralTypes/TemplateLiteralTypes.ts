// ==> basics

type word = 'Person'
type wordDev = 'World'

type hello = `hello ${wordDev}`
// type hello = "hello World"

// ==> Union

type EmailLocaleIds = 'welcome_email' | 'email_heading'
type FooterLocaleIds = 'footer_title' | 'footer_sendoff'

type AllLocaleIds =  `${EmailLocaleIds | FooterLocaleIds}_id`

// ==> unions cross multiplied

type Langs = 'pt' | 'en' | 'es'
type LocaleMessageIds = `${Langs}_${AllLocaleIds}`

