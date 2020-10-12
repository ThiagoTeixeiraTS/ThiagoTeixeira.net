import React from "react"
import Profile from "../Profile"
import SocialLinks from "../SocialLinks"
import MenuItens from "../MenuLink"

import * as S from "./styled"

const Sidebar = () => (
  <S.SidebarWrapper>
    <Profile />
    <SocialLinks />
    <MenuItens />
  </S.SidebarWrapper>
)

export default Sidebar
