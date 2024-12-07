'use client'

import { SessionProvider as Provider } from "next-auth/react"
import { ReactNode } from "react"
import { ThemeProvider } from 'next-themes'

type Props = {
    children: ReactNode
}

export default function SessionProvider({ children }: Props) {
    return (
        <Provider>
            <ThemeProvider attribute="class">
                {children}
            </ThemeProvider>
        </Provider>
    )
}