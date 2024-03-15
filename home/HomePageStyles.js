import styled from "styled-components";

export const PageWrapper = styled.div`
  background-color: var(--Background-Pgina, rgba(198, 207, 255, 0.07));
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  justify-content: space-between;
  box-shadow: 0px 4px 16.6px -6px rgba(0, 0, 0, 0.25);
  background-color: var(--Laranja-Back, rgba(242, 113, 39, 0.19));
  display: flex;
  width: 100%;
  gap: 20px;
  padding: 14px 53px;

  @media (max-width: 991px) {
    flex-wrap: wrap;
    padding: 0 20px;
  }
`;

export const Logo = styled.div`
  display: flex;
  gap: 20px;
  font-size: 41px;
  color: #e92b22;
  font-weight: 400;
  line-height: 100%;
  padding: 3px 0;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export const LogoImage = styled.img`
  aspect-ratio: 1.32;
  object-fit: auto;
  object-position: center;
  width: 71px;
  mix-blend-mode: multiply;
`;

export const LogoText = styled.div`
  font-family: DM Serif Text, sans-serif;
  margin: auto 0;
`;

export const Navigation = styled.nav`
  align-items: center;
  display: flex;
  gap: 20px;
  margin: auto 0;

  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

export const NavLink = styled.a`
  font-family: Inter, sans-serif;
  font-size: 22px;
  color: var(--Cinza-Primrio, #333);
  font-weight: 400;
  line-height: 100%;
  padding: 8px;
`;

export const NavItem = styled.div`
  justify-content: center;
  display: flex;
  gap: 9px;
  white-space: nowrap;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export const NavIcon = styled.img`
  aspect-ratio: 2.63;
  object-fit: auto;
  object-position: center;
  width: 13px;
  stroke-width: 2.095px;
  stroke: #000;
  border: 2px solid rgba(0, 0, 0, 1);
  margin: auto 0;
`;

export const DateText = styled.div`
  color: var(--Cinza-Primrio, #333);
  margin: auto 0;
  font: 600 22px/100% Inter, sans-serif;
`;

export const ProfileSection = styled.div`
  display: flex;
  gap: 9px;
`;

export const ProfileImage = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 44px;
  border-radius: 50%;
`;

export const ProfileIcon = styled.img`
  aspect-ratio: 2.78;
  object-fit: auto;
  object-position: center;
  width: 14px;
  stroke-width: 2.095px;
  stroke: #aaa;
  border: 2px solid rgba(170, 170, 170, 1);
  margin: auto 0;
`;

export const MainSection = styled.main`
  border-radius: 60px;
  box-shadow: 1px 6px 9.4px 0px rgba(0, 0, 0, 0.13);
  overflow: hidden;
  position: relative;
  display: flex;
  min-height: 937px;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 80px 60px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

export const BackgroundImage = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

export const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1218px;
  margin: 118px 0 80px;

  @media (max-width: 991px) {
    margin: 40px 0;
  }
`;

export const ContentSection = styled.section`
  gap: 20px;
  display: flex;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 54%;
  margin-left: 0px;

  @media (max-width: 991px) {
    width: 100%;
  }

  &:last-child {
    width: 46%;
    margin-left: 20px;

    @media (max-width: 991px) {
      width: 100%;
    }
  }
`;

export const QuickLinksSection = styled.section`
  border-radius: 60px;
  box-shadow: 1px 6px 9.4px 0px rgba(0, 0, 0, 0.13);
  background-color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 28px 40px;

  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 0 20px;
  }
`;

export const QuickLinksTitle = styled.h2`
  color: #000;
  font: 700 22px/100% Inter, sans-serif;
`;

export const QuickLinksGrid = styled.div`
  margin-top: 54px;
  gap: 20px;
  display: flex;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
    margin-top: 40px;
  }
`;

export const QuickLinkItem = styled.div`
  border-radius: 18.962px;
  background-color: var(--Laranja-Back-2, rgba(255, 138, 0, 0.1));
  display: flex;
  flex-direction: column;
  font-size: 16px;
  color: #000;
  font-weight: 400;
  text-align: center;
  text-transform: capitalize;
  line-height: 16px;
  width: 186px;
  height: 186px;
  margin: 0 auto;
  padding: 30px;

  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 0 20px;
  }
`;

export const QuickLinkIcon = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 75px;
  align-self: center;
`;

export const QuickLinkText = styled.div`
  font-family: Poppins, sans-serif;
  margin-top: 20px;
`;

export const HeroText = styled.h1`
  color: #fff;
  text-align: center;
  position: relative;
  margin-top: 47px;
  font: 700 51px/73px Outfit, sans-serif;

  @media (max-width: 991px) {
    margin-top: 40px;
    font-size: 40px;
    line-height: 63px;
  }
`;
