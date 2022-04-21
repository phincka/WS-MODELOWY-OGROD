import * as React from "react"
import arrowIcon from "../assets/arrowIcon";
import { colors, mobile, txt20, txt14, txt24 } from '../style/index'


export default function NavItem({ href, text, submenu }) {
  return (
    <a href={href} css={style}>
      {text}

      {
        submenu[0] && (
          <div css={submenuStyle}>
            <div css={submenuStyle.wrap}>
              {
                submenu.map(item => (
                  <a key={item.id} href={item.href} css={submenuitem}>{item.text}</a>
                ))
              }
            </div>
          </div>
        )
      }

      {submenu[0] && arrowIcon}
    </a>
  )
}


const style = {
  ...txt14,
  color: colors.pcolor,
  fontWeight: 600,
  textAlign: 'center',

  position: 'relative',

    [mobile]: {
      ...txt24,
      color: colors.pcolor,
      fontWeight: 600,
    },
    
    '&:hover': {
      '& > div': {
        opacity: 1,
        visibility: 'visible',
      }
    },

    svg: {
      width: '1rem',
      marginLeft: '1rem',

      [mobile]: {
        width: '1.6rem',
        marginLeft: '3rem',
        position: 'absolute',
      }
    }
}


const submenuStyle = {
  width: '22rem',

  position: 'absolute',
  top: '0',
  left: '-3.5rem',
  paddingTop: '3.5rem',

  visibility: 'hidden',
  opacity: '0',
  transition: 'opacity .3s',
  
  [mobile]: {
    width: '100%',
    left: 0,
  },

    wrap:{
      width: '100%',
      backgroundColor: colors.white,

      position: 'relative',
      zIndex: 1,
    }
}

const submenuitem = {
  display: 'block',
  
  ...txt14,
  fontWeight: 500,
  color: colors.pcolor,
  textAlign: 'left',

  padding: '1.5rem 1.5rem 1.5rem 3.5rem',
  'border-bottom': '.1rem solid #DADED4',

  [mobile]: {
    ...txt20,
    color: colors.pcolor,
    fontWeight: 500,
  },
}