import React from 'react'

export default function ChangeBookModal({ children, show}) {
    if (!show) return null

    return (
        <div>
            {children}
        </div>
    )
}
