import React from 'react'
import logo from '../../assets/logo.png'

const SearchBox = () => (
  <form className="form-inline mr-auto">
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="ค้นหาคอร์สเรียน..."
      />
      <div className="input-group-append">
        <button className="btn btn-primary">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  </form>
)

const MenuList = () => {
  const menus = [
    'คอร์สเรียนทั้งหมด',
    'TUXA',
    'สำหรับองค์กร',
    'สอนกับเรา',
    'เข้าสู่ระบบ',
    'สมัครสมาชิก',
  ]

  return (
    <ul className="navbar-nav">
      {menus.map(v => (
        <li key={v} className="nav-item">
          <a className="nav-link" href="/#">
            {v}
          </a>
        </li>
      ))}
    </ul>
  )
}

interface Props {}

const Comp: React.FC<Props> = () => (
  <nav className="navbar navbar-expand-md navbar-light bg-light border-bottom py-0 fixed-top">
    <a className="navbar-brand" href="/#">
      <img src={logo} height="44" alt="skilllane logo" />
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarsExampleDefault"
      aria-controls="navbarsExampleDefault"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
      <SearchBox />
      <MenuList />
    </div>
  </nav>
)

export default Comp
