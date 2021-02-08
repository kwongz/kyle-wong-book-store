import React from 'react'
import ReactDom from 'react-dom'

export default function AddBookModal({ children, show}) {
    if (!show) return null

    return ReactDom.createPortal(
        <div>
            {children}
        </div>,
    document.getElementById('portal')
    )
}
