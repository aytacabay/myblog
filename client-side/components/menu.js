import Link from 'next/link'

export default function Menu() {
  return (
    <>
      <div className="right-side-hamburger-menu-box">
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">

              <div>
                <Link href='/'><a><li>Ana Sayfa</li></a></Link>
                <Link href='/blog'><a><li>Blog</li></a></Link>
              </div>
              <div>
                <Link href='/contact'><a><li>İletişim</li></a></Link>
                <Link href='/projects'><a><li>Projelerim</li></a></Link>
              </div>

            </ul>
          </div>
        </nav >
      </div >
      <style jsx>{`
            * {
                    font-family: sans-serif;
                }
      `}</style>
      <style jsx>{`

.right-side-hamburger-menu-box {
  position: fixed;
  top: 0;
  right: 0;
  z-index:99;
}
    #menuToggle {
  display: block;
  position: relative;
  top: 90px;
  right: 25px;
  -webkit-user-select: none;
  user-select: none;
}

#menuToggle a {
  text-decoration: none;
  color: #232323;
  transition: color 0.3s ease;
}

#menuToggle a:hover {
  color: tomato;
}

#menuToggle input {
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  right: -5px;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
  -webkit-touch-callout: none;
}

#menuToggle span {
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  background: #535353;
  border-radius: 3px;
  z-index: 1;
  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
}

#menuToggle span:first-child {
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2) {
  transform-origin: 0% 100%;
}
#menuToggle input:checked ~ span {
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: rgb(252, 68, 36);
}

#menuToggle input:checked ~ span:nth-last-child(3) {
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

#menuToggle input:checked ~ span:nth-last-child(2) {
  transform: rotate(-45deg) translate(0, -1px);
}

#menu {
  opacity: 0;
  position: absolute;
  display: flex;
  flex-direction:column;
  justify-content: space-around;
  background: #444;
  border-radius: 0.3em;
  list-style-type: none;
  transform-origin: 0% 0%;
  transform: translate(-300px, -350px);
  transition: all 0.3s linear;
  z-index: 99;
  box-shadow:inset 0 0 .2em 0.1em #333, 0 0 .1em .2em #fff
}
#menu div {
  display:flex;
  flex-wrap:nowrap;
}

#menu li {
  width:auto;
  padding: 1em 1em .3em 1em;
  margin:1em;
  box-sizing: border-box;

  text-align:center;
  font-size: 1rem;
  font-weight: bold;
  color: whitesmoke;

  border-bottom:0.2em solid rgb(255,132,0);

  transition:all .3s linear;
}

#menu li:hover {
  transform:scale(1.1)
}

#menuToggle input:checked ~ ul {
  opacity: 1;
  transform: translate(-300px, -91px);
}

@media (max-width: 1200px) {
  #menu {
      transform: translate(200px, -85px);
  }
  
  #menu li {
    font-size:.9rem
  }
  #menuToggle input:checked ~ ul {
    transform: translate(-270px, -85px);
  }
}

`}</style>
    </ >
  )
}
