import React from 'react'

    const MODAL_STYLES = {
        position: 'absolute',
        top: '0px',
        left: '0px',
        height: '100vh',
        width: '100vw',
        backgroundColor: 'rgba(57, 61, 63, 0.5)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }

export default function ChangeBookModal({ children, show}) {
    if (!show) return null

    return (
        <div style={MODAL_STYLES}>
            {children}
        </div>
    )
}
