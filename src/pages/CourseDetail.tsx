import React from 'react'
import CourseBanner from '../components/CourseBanner'

interface Props {}

const Comp: React.FC<Props> = () => (
  <div className="row">
    <div className="col">
      <CourseBanner title="Woo Expert เรียนสร้างเว็บขายของออนไลน์ด้วย WordPress + Woocommerce" />
    </div>
  </div>
)

export default Comp
