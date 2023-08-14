import React from 'react'

const NavigationDots = ({ active }) => {
  return (
    <div className="app_navigation">
      {['about', 'work', 'skills', 'contact'].map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: '#915eff' } : {}}
        />
    ))}
    </div>
  )
}

export default NavigationDots