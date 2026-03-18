import { useState } from 'react'
import { NavbarContainer, NavbarWrapper } from './Navbar.styles'
import { Logo } from './components/Logo'
import { NavigationList } from './components/NavigationList'
import { HamburgerMenu } from './components/HamburgerMenu'
import { HamburgerIcon } from './components/HamburgerIcon'

export default function Navbar() {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState<boolean>()

  function handleHamburgerIconClick() {
    setShowHamburgerMenu(true)
  }

  return (
    <>
      <NavbarContainer>
        <NavbarWrapper>
          <Logo />
          <NavigationList />
          <HamburgerIcon onClick={handleHamburgerIconClick} />
        </NavbarWrapper>
      </NavbarContainer>
      {showHamburgerMenu && (
        <HamburgerMenu hide={() => setShowHamburgerMenu(false)} />
      )}
    </>
  )
}
