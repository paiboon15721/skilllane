import React from 'react'

const details = [
  { icon: 'fa fa-clock', text: 'สามารถเรียนที่ไหน เมื่อไหร่ก็ได้ตลอดชีพ' },
  {
    icon: 'fa fa-play-circle',
    text: 'เนื้อหาทั้งหมด 86 วิดีโอ ความยาวรวมกัน 27 ชั่วโมง 55 นาที',
  },
  { icon: 'fa fa-book-open', text: '1 บทความ' },
  {
    icon: 'fa fa-check-square',
    text: 'เอกสารประกอบ',
  },
  // {
  //   icon: 'fa fa-check',
  //   text:
  //     'เรียนรู้ขั้นตอนการสร้างเว็บไซต์ WordPress เพื่อขายของออนไลน์โดยเฉพาะ สอนวิธีสร้างเว็บตั้งแต่เริ่มต้น ทีละขั้นตอนแบบละเอียด และใช้ปลั๊กอิน Woocommerce แบบมืออาชีพ เพื่อให้เว็บของคุณใช้งานได้จริง',
  // },
  {
    icon: 'fa fa-check',
    text: 'สอนการสร้างเว็บขายของออนไลน์ ด้วย WordPress + Woocommerce',
  },
  {
    icon: 'fa fa-comment-alt',
    text: 'ได้สิทธิในการปรึกษาและสอบถาม',
  },
  {
    icon: 'fa fa-user',
    text: 'สอนโดย พัดวี อาจารย์สอนทำเว็บด้วย WordPress และการตลาดออนไลน์',
  },
]

interface Props {}

const Comp: React.FC<Props> = () => (
  <div className="card border-primary course-glance">
    <div className="card-body text-center">
      <h3 className="card-title mb-3">3,500 บาท</h3>
      <button className="btn btn-lg mb-3 btn-primary px-4">
        ชำระเงินเพื่อเริ่มเรียน
      </button>
      <p className="card-text text-left">
        {details.map(v => (
          <div className="row">
            <div className="col-1">
              <i className={v.icon}></i>
            </div>
            <div className="col-10">{v.text}</div>
          </div>
        ))}
      </p>
    </div>
  </div>
)

export default Comp
