import React from 'react'

const BeforeLogin: React.FC = () => {
  return (
    <div>
      <p>
        To log in, use the email <strong>demo@payloadcms.com</strong> with the password{' '}
        <strong>demo</strong>. This demo CMS will reset every hour.
      </p>
      <p>
        The code for this demo is open source and can be found{' '}
        <a
          href="https://github.com/payloadcms/public-demo"
          rel="noopener noreferrer"
          target="_blank"
        >
          here
        </a>
        .
      </p>
    </div>
  )
}

export default BeforeLogin
