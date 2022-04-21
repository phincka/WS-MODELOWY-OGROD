import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import NavItem from './navItem'

import { mobile, center, txt18, colors, verticalCenter, txt24 } from '../style/index'
import telIcon from "../assets/telIcon";

const parse = require('html-react-parser');


export default function Header() {
  const data = useStaticQuery(graphql`
    query headerQuery {
      allDatoCmsLayoutheader {
        edges {
          node {
            logo {
              alt
              gatsbyImageData
            }

            navItems {
              id
              href
              text
              submenu {
                id
                href
                text
              }
            }

            tel
          }
        }
      }
    }
  `)

  const [open, setOpen] = useState(false);


  const { logo, navItems, tel } = data.allDatoCmsLayoutheader.edges[0].node

  return (
    <header css={style}>
      <a css={style.logo} href="/">
        {logo && (
          <GatsbyImage
            alt={logo.alt ? logo.alt : 'alt'}
            image={getImage(logo)}
          />
        )}
      </a>

      <button css={style.openMenu} className={`buttonOpen${open}`} onClick={() => setOpen(!open)}>
        <svg viewBox="0 0 100 100" >
          <path d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" />
          <path d="m 30,50 h 40" />
          <path d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" />
        </svg>
      </button>

      <div css={style.mainBox} className={`menuOpen${open}`}>
        <nav>
          {
            navItems.map(item => (
              <NavItem key={item.id} {...item} />
            ))
          }
        </nav>

        <a css={style.tel} href={`tel:${tel}`}>{telIcon}<span>{parse(tel)}</span></a>
      </div>
    </header>
  )
}


const style = {
  ...center,
  padding: '.6rem 0',
  width: '100%',
  maxHeight: '7rem',

  backgroundColor: colors.white,
  boxShadow: '0 0 1rem 0 rgba(0, 0, 0, 0.5)',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 90,

  [mobile]: {
    maxHeight: '10rem',
    justifyContent: 'space-between',
    padding: '1rem 1.4rem'
  },


    logo: {
      display: 'block',

      width: '15rem',
      maxHeight: '5.8rem',
      marginRight: '17rem',

      [mobile]: {
        marginRight: 0,
      },
        img: {
          width: '100%',
          height: '100%',
          objectFit: 'contain',
        }
    },

    openMenu: {
      display: 'none',
      
      [mobile]: {
        display: 'block',

        borderRadius: '.5rem',
        width: '5rem',
        height: '5rem',
        position: 'relative',
        zIndex: 98,
        userSelect: 'none',
        transition: 'all .2s',
        cursor: 'pointer',
      },

      path: {
        fill: 'none',
        transition: 'stroke-dasharray 500ms, stroke-dashoffset 500ms',
        stroke: colors.black,
        strokeWidth: 4,
        strokeLinecap: 'round',
      },
      'path:nth-of-type(1)': {
        strokeDasharray: '40 139',
      },
      'path:nth-of-type(3)': {
        strokeDasharray: '40 180',
      },
    },

    '.buttonOpentrue': {
      transform: 'rotate(45deg)',
      zIndex: 99,
        'path:nth-of-type(1)': {
          strokeDashoffset: '-98px',
        },
        'path:nth-of-type(3)': {
          strokeDashoffset: '-138px',
        },
        path: {
          fill: 'none',
          transition: 'stroke-dasharray 500ms, stroke-dashoffset 500ms',
          strokeWidth: 4,
          strokeLinecap: 'round',
          stroke: colors.black,
        }
    },

    mainBox: {
      ...verticalCenter,

      [mobile]: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',

        width: '100vw',
        height: '100vh',

        backgroundColor: colors.white,
        padding: '15rem 2.4rem 0',

        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 98,
        overflow: 'hidden',

        transition: 'transform .3s .1s ease-in-out',
        transform: 'translateX(-105vw)',
        // transform: 'translateX(0)',
      },
        nav:{
          ...verticalCenter,
          gap: '3rem',

          [mobile]: {
            flexDirection: 'column',
          }
        },
    },

    '.menuOpentrue': {
      [mobile]: {
        transform: 'translateX(0)',
      },
    },

    tel: {
      ...verticalCenter,
      gap: '1.5rem',
      marginLeft: '9.5rem',

      [mobile]: {
        marginLeft: 0,
        marginTop: '6rem',
      },
        span: {
          ...txt18,
          fontWeight: 600,
          color: colors.pcolor,

          position: 'relative',
          zIndex: 1,

          [mobile]: {
            ...txt24,
            fontWeight: 600,
            color: colors.pcolor,
          }
        },

        svg: {
          width: '1.6rem',
          height: '1.6rem',
          position: 'relative',

          [mobile]: {
            width: '2rem',
            height: '2rem',
          }
        }
    },

}