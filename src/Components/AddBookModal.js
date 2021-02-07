import React from 'react'

export default function AddBookModal({ children, show}) {
    if (!show) return null

    return (
        <div>
            {children}
        </div>
    )
}
