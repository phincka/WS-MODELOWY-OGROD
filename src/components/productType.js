import * as React from "react"

import { center, txt18 } from '../style/index'
import sun from '../assets/sun'
import snow from '../assets/snow'


export default function ProductType({ type }) {
  switch (type) {
    case 'palma_tarasowa':
      return (
        <p css={style}>
          {sun}
          <span>Palma tarasowa</span>
        </p>
      )
    case 'roslina_tarasowa':
      return (
        <p css={style}>
          {sun}
          <span>Roślina tarasowa</span>
        </p>
      )
    case 'drzewo_oliwne':
      return (
        <p css={style}>
          {sun}
          <span>Drzewo oliwne</span>
        </p>
      )
    case 'palma_mrozoodporna':
      return (
        <p css={style}>
          {snow}
          <span>Palma mrozoodporna</span>
        </p>
      )
    default:
      <p css={style}>
        <span>{type}</span>
      </p>
    break;
  }
}


const style = {
  ...center,
  gap: '.5rem',
    svg: {
      width: '2rem',
      height: '2rem',
    },

    span: {
      ...txt18,
    },
}
