import React from "react";
import {
  PageWrapper,
  Header,
  Logo,
  LogoImage,
  LogoText,
  Navigation,
  NavLink,
  NavItem,
  NavIcon,
  DateText,
  ProfileSection,
  ProfileImage,
  ProfileIcon,
  MainSection,
  BackgroundImage,
  ContentWrapper,
  ContentSection,
  Column,
  QuickLinksSection,
  QuickLinksTitle,
  QuickLinksGrid,
  QuickLinkItem,
  QuickLinkIcon,
  QuickLinkText,
  HeroText,
} from "/pages/home/HomePageStyles"

function HomePage() {
  const quickLinks = [
    {
      id: 1,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/622f381cf28021651e584c39e6b1aa03d6cf3ffb8a2da4509be8e300ed8dd072?apiKey=eaebb25525234b08a51e0c1a0f73d0fb&",
      text: "Cadastro Afiliados",
    },
    {
      id: 2,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b014928aa0ca083c49c88273a321088b3667320b652d6a2d8ec0afcd36166393?apiKey=eaebb25525234b08a51e0c1a0f73d0fb&",
      text: "Cadastro Documentos",
    },
    {
      id: 3,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/605f04241c124a06b159a343201ea70760a64e4df9d895d63ce419a52b531b07?apiKey=eaebb25525234b08a51e0c1a0f73d0fb&",
      text: "Busca Afiliados",
    },
    {
      id: 4,
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/49ec65f91f5e45f05d002c46741658dfe3a0c1c15154101c90db3ef7fe30cc49?apiKey=eaebb25525234b08a51e0c1a0f73d0fb&",
      text: "Busca Documentos",
    },
  ];

  return (
    <PageWrapper>
      <Header>
        <Logo>
          <LogoImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3fbd04081acef40bbd9c370cf879a07550267d85a1ad2842f35b5fac0e37e1c?apiKey=eaebb25525234b08a51e0c1a0f73d0fb&" alt="Logo" />
          <LogoText>AFADFAL</LogoText>
        </Logo>
        <Navigation>
          <NavLink>Página Principal</NavLink>
          <NavItem>
            <NavLink>Cadastro</NavLink>
            <NavIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/1483044f8a636c0f089a4e37628f69648029cdd2c38fd8db194a8513e91ffdfb?apiKey=eaebb25525234b08a51e0c1a0f73d0fb&" alt="Cadastro Icon" />
          </NavItem>
          <NavLink>Afiliados</NavLink>
          <NavLink>Documentos</NavLink>
        </Navigation>
        <DateText>23/02/2024</DateText>
        <ProfileSection>
          <ProfileImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/a88255a83d218365748b8c030fdffbf592bac08c7f5a2610b305ff41acee5ffb?apiKey=eaebb25525234b08a51e0c1a0f73d0fb&" alt="Profile" />
          <ProfileIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf5f0cbcd41d38b97446c92a7ee352cb992673857252e2af89f985a75763865e?apiKey=eaebb25525234b08a51e0c1a0f73d0fb&" alt="Profile Icon" />
        </ProfileSection>
      </Header>
      <MainSection>
        <BackgroundImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/54713c4b2739baf324827fd45a35cb2d0ae4ffba4abc2fb41824b23a7a153f77?apiKey=eaebb25525234b08a51e0c1a0f73d0fb&" alt="Background" />
        <ContentWrapper>
          <ContentSection>
            <Column>
              <QuickLinksSection>
                <QuickLinksTitle>Links Rápidos</QuickLinksTitle>
                <QuickLinksGrid>
                  {quickLinks.map((link) => (
                    <QuickLinkItem key={link.id}>
                      <QuickLinkIcon src={link.icon} alt={link.text} />
                      <QuickLinkText>{link.text}</QuickLinkText>
                    </QuickLinkItem>
                  ))}
                </QuickLinksGrid>
              </QuickLinksSection>
            </Column>
            <Column>
              <HeroText>
                A força reside na luta contra a anemia falciforme, cada dia é
                uma batalha vencida.
              </HeroText>
            </Column>
          </ContentSection>
        </ContentWrapper>
      </MainSection>
    </PageWrapper>
  );
}

export default HomePage;
