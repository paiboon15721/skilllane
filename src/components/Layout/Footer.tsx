import React from 'react'
import logo from '../../assets/logo.png'
import FooterColumn from './FooterColumn'
import visa from '../../assets/visa.png'
import masterCard from '../../assets/master_card.svg'
import paypal from '../../assets/paypal.png'
import amazon from '../../assets/amazon.png'
import omise from '../../assets/omise.svg'

interface Props {}

const Comp: React.FC<Props> = () => (
  <footer className="container pt-2 mb-md-4 mt-5 pt-md-3 border-top">
    <div className="row mt-4">
      <div className="col-12 col-lg">
        <img
          src={logo}
          width="50%"
          className="img-fluid mb-3"
          alt="skilllane logo"
        />
        <ul className="list-unstyled text-small">
          <li className="text-muted">
            สถาบันออนไลน์ สำหรับคนที่ต้องการความก้าวหน้า สอนโดยผู้เชี่ยวชาญ
            จากประสบการณ์จริง
          </li>
          <li className="text-muted">
            &copy; 2020 SkillLane.com All rights reserved.
          </li>
          <li className="text-muted">
            <a href="/#">นโยบายคุ้มครองข้อมูลส่วนบุคคล</a>
          </li>
        </ul>
      </div>
      <div className="col-6 col-lg">
        <FooterColumn
          title="คอร์สเรียนออนไลน์"
          links={['คอร์สทั้งหมด', 'TUXSA', 'สำหรับองค์กร']}
        />
      </div>
      <div className="col-6 col-lg">
        <FooterColumn
          title="เกี่ยวกับองค์กร"
          links={['เกี่ยวกับเรา', 'สอนกับเรา', 'ร่วมงานกับเรา']}
        />
      </div>
      <div className="col-12 col-lg">
        <FooterColumn
          title="ติดต่อสอบถาม"
          links={[
            'คำถามที่พบบ่อย',
            'info@SkillLane.com',
            'SkillLane',
            '@SkillLane',
            '081-996-7150',
          ]}
        />
      </div>
      <div className="col-12 payment-methods border-top mt-3 pt-3 text-center">
        <img src={visa} alt="visa" />
        <img src={masterCard} alt="master card" />
        <img src={paypal} alt="paypal" />
        <img src={amazon} alt="amazon" />
        <img src={omise} alt="omise" />
      </div>
    </div>
  </footer>
)

export default Comp
