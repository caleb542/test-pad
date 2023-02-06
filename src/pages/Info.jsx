import React from 'react'

function Info() {
    const fonts = [
        'Abril Fatface',
        'Alegreya Sans',
        'Black Ops One',
        'Fugaz One',
       ' Lato',
       'Merriweather Sans',
       ' Monsieur La Doulaise',
       ' Montserrat',
        'Noto Sans',
        'Nunito Sans',
       ' Nunito',
       ' Parisienne',
       ' Poppins',
       ' Roboto',
        'Source Sans Pro'
    ];

    return (
        <>
            <div className='container'>
                <header style={{animationDuration:'0.9s '}}><h2 style={{fontWeight:'600', padding:'0.44rem', color:'var(--bg)',background:'var(--button-color)'}}>Fonts</h2></header>
                <ol className='columns'>
                {fonts.map((item, index) => (
                    <li 
                    key={index}
                    >
                     <strong  style={{ fontSize:'1.25rem',fontFamily: item.trim() }}>{item.trim()}</strong>
                  </li>
                  ))}
                </ol>
            </div>
        </>
    )
}

export default Info