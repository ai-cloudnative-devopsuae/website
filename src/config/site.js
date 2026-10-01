// Central site settings. Leave a URL empty to hide or disable the related UI.
export const SITE_CONFIG = {
  contactEmail: 'aidevopsuae@gmail.com',

  // Brevo form action URL. While empty, the newsletter form stays disabled.
  newsletterFormUrl: '',

  // Secure membership registration endpoint. Submissions are only sent when this and privacyPolicyUrl are set.
  membershipFormUrl: '',

  // Set once the privacy policy has been approved and published (https:// URL or a /website/... path).
  privacyPolicyUrl: '',

  // Only links with a valid https:// URL are displayed.
  socialLinks: [
    { label: 'LinkedIn', url: '' },
    { label: 'Meetup', url: '' },
    { label: 'GitHub', url: '' },
    { label: 'X', url: '' },
  ],
}

export function isHttpsUrl(value) {
  try {
    return new URL(value).protocol === 'https:'
  } catch {
    return false
  }
}

export const activeSocialLinks = SITE_CONFIG.socialLinks.filter((link) => isHttpsUrl(link.url))

const privacyUrl = SITE_CONFIG.privacyPolicyUrl
export const hasPrivacyPolicy =
  isHttpsUrl(privacyUrl) || (privacyUrl.startsWith('/') && !privacyUrl.startsWith('//'))
