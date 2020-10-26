import React from 'react'
import curriculums from '../data/curriculums'

interface Props {}

const Comp: React.FC<Props> = () => (
  <div className="card course-curriculum-card">
    <div className="card-header">เนื้อหาของคอร์สนี้</div>
    <div className="card-body">
      {curriculums.map(v => (
        <div className="section" key={v.chapter}>
          <div className="chapter">
            <h5>{v.chapter}</h5>
          </div>
          <div className="videos">
            {v.videos.map(x => (
              <div key={x.name} className="video">
                <p className="name">{x.name}</p>
                <div className="detail">
                  <div className="icons">
                    {x.free && (
                      <button className="btn btn-sm btn-primary">
                        ดูตัวอย่างฟรี
                      </button>
                    )}
                    {x.icons.map(i => (
                      <i key={i} className={`${i} fa-lg`}></i>
                    ))}
                  </div>
                  <p>{x.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default Comp
