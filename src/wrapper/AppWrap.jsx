import React from 'react'
import { SocialMedia, NavigationDots } from '../components'

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
       <SocialMedia />

       <div className="app__wrapper app_flex">
          <Component />

          <div className="copyright">
            <p className="p-text">@2023 John</p>
            <p className="p-text">All rights reserved</p>
        </div>

        <NavigationDots active={idName}/>
       </div>
    </div>
  )
}

export default AppWrap