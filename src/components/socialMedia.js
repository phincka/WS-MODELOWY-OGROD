import * as React from "react"
import { center } from '../style/index'

import fbIcon from '../assets/fbIcon'
import igIcon from '../assets/igIcon'
import ytIcon from '../assets/ytIcon'


const socialMedia = {
  INSTAGRAM: {
    icon: igIcon,
    bgcColor: '#C13584',
  },
  FACEBOOK: {
    icon: fbIcon,
    bgcColor: '#3B5998',
  },
  YOUTUBE: {
    icon: ytIcon,
    bgcColor: '#FF0000',
  },
}

export default function SocialMedia({data}) {

  const getIcon = service => {
    return socialMedia[service]?.icon
  }
  const getBgcColor = service => {
    return socialMedia[service]?.bgcColor
  }

  return (
    <div css={style}>
      {data &&
        data.map((link) => (
          <a key={link.id} href={link.url} target="_blank" rel="noreferrer" style={{ backgroundColor: getBgcColor(link.service) }}>
            {getIcon(link.service)}
          </a>
        )
      )}
    </div>
  )
}


const style = {
  ...center,
  gap: '2rem',
    a: {
      ...center,

      width: '5rem',
      height: '5rem',

      borderRadius: '100%',

        svg: {
          width: '2.5rem',
          height: '2.5rem',

          filter: 'invert(1)',
        }
    }
}