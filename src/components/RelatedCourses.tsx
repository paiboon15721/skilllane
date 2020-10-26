import React from 'react'
import excelMacro from '../assets/excel-macro.png'
import excelMacro2 from '../assets/excel-macro2.png'
import ppt from '../assets/ppt.png'
import seo from '../assets/seo.png'

interface CourseProps {
  image: string
  name: string
  instructor: string
}

const courses: CourseProps[] = [
  {
    image: excelMacro,
    name: 'Excel Macro & VBA LV.1 ให้ Excel ทำงานให้',
    instructor: 'สมเกียรติ ช่วยมาก',
  },
  {
    image: excelMacro2,
    name: 'เรียน Excel Macro ให้ใช้งานได้ในวันเดียวด้วย',
    instructor: 'จีระเดช แก้วกาญจนา',
  },
  {
    image: ppt,
    name: 'Shortcut PowerPoint Design',
    instructor: 'วันเฉลิม อัศวแสงรัตน์',
  },
  {
    image: seo,
    name: 'SEO Expert ทำเว็บให้ติดหน้าแรก Google โดยไม่',
    instructor: 'วีรยุทธ ทองดอนพุ่ม (พัดวี)',
  },
]

const Course: React.FC<CourseProps> = ({ image, name, instructor }) => (
  <div className="course-related-card">
    <img src={image} alt={name} />
    <div className="course-detail">
      <p className="course-name">{name}</p>
      <p className="course-instructor text-muted">{instructor}</p>
    </div>
  </div>
)

interface Props {}

const Comp: React.FC<Props> = () => (
  <div className="card">
    <div className="card-header">คอร์สที่เกี่ยวข้อง</div>
    <div className="card-body">
      {courses.map(v => (
        <Course key={v.name} {...v} />
      ))}
    </div>
  </div>
)

export default Comp
