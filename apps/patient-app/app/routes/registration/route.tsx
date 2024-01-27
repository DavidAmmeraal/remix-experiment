import { Form } from '@remix-run/react'
import { useTranslation } from 'react-i18next'

export default function RegistrationPage() {
  const { t } = useTranslation('common')
  console.log('registration page ', t('registrationForm.firstName'))
  return (
    <Form id="contact-form" method="post">
      <label>
        <span>{t('registrationForm.firstName')}</span>
        <input
          aria-label="First name"
          name="first"
          type="text"
          placeholder="First"
        />
      </label>
      <p>
        <button type="submit">Save</button>
        <button type="button">Cancel</button>
      </p>
    </Form>
  )
}
