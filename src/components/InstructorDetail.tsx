import React from 'react'
import instructor from '../assets/instructor.png'

interface Props {}

const Comp: React.FC<Props> = () => (
  <div className="instructor-card card">
    <div className="card-header">ผู้สอน</div>
    <div className="card-body">
      <div className="avatar">
        <img src={instructor} className="rounded-circle" alt="Instructor" />
        <p>วีรยุทธ ทองดอนพุ่ม (พัดวี)</p>
      </div>
      <p className="card-text">
        <ul>
          <li>
            อาจารย์สอนทำเว็บด้วย WordPress ตั้งแต่ขั้นพื้นฐาน จนถึงระดับมือโปร
            พร้อมกับให้ความรู้เรื่องการตลาดออนไลน์ และการปรับแต่ง SEO
          </li>
          <li>
            ประสบการณ์กว่า 10 ปี ในการสร้างเว็บไซต์ให้ร้านค้าและแบรนด์ต่างๆ
            มากมาย
          </li>
        </ul>
      </p>
    </div>
  </div>
)

export default Comp
