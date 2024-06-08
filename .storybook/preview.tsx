import React from 'react'
import type { Preview } from '@storybook/react'
import { Inter as FontSans } from 'next/font/google'
import { cn } from '../src/lib/utils'
import '../src/app/globals.css'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        className={cn(
          'font-sans antialiased',
          fontSans.variable
        )}
      >
        <Story />
      </div>
    ),
  ],
}

export default preview
