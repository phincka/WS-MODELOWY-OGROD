import * as React from "react"
import LoadingNumber from "../components/loadingNumber";
import SectionHeader from "../components/sectionHeader";

import { grid, mobile, colCenter } from '../style/index'


export default function NumbersLoadingBlock({heading, text, rep}) {
  const repeat = JSON.parse(rep)

  return (
    <section css={style}>
      <SectionHeader title={heading} text={text} />

      <div css={style.grid}>
        {
          repeat.map(({ fields }) => (
            <LoadingNumber data={fields} />
          ))
        }
      </div>
    </section>
  )
}


const style = {
  ...colCenter,

  width: '120rem',
  margin: '6rem auto 0',
  position: 'relative',

  [mobile]: {
    width: '100%',
    padding: '0 1.4rem',
    marginTop: '4rem',
  },

  grid: {
    ...grid(3, 0),
    width: '100%',

    [mobile]: {
      gridTemplateColumns: '1fr',
      gap: '1.4rem',
    },
  }
}
