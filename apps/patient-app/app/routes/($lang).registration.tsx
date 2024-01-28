import { Form } from '@remix-run/react'
import { useTranslation } from 'react-i18next'

export default function RegistrationPage() {
  const { t } = useTranslation('common')
  return (
    <Form id="contact-form" method="post">
      <label>
        <span>{t('registrationForm.firstName.label')}</span>
        <input
          aria-label={t('registrationForm.firstName.label')}
          name="first"
          type="text"
          placeholder={t('registrationForm.firstName.placeholder')}
        />
      </label>
      <p>
        <button type="submit">Save</button>
        <button type="button">Cancel</button>
      </p>
    </Form>
  )
}
