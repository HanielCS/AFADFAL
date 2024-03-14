import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <MainContainer>
      <BackgroundImage loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/04208f57cff6927acd3c7f026196083e520604707de4becf1cb0cd833af36fc0?apiKey=eaebb25525234b08a51e0c1a0f73d0fb&" />
      <ContentWrapper>
        <FlexContainer>
          <FormColumn>
            <LoginForm>
              <Logo loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/54faf050f4709667724c7e2314354883eccc6ed828831a752ef6492aa85dca0b?apiKey=eaebb25525234b08a51e0c1a0f73d0fb&" />
              <WelcomeMessage>Bem vindo</WelcomeMessage>
              <InputWrapper>
                <Label htmlFor="email" className="visually-hidden">E-mail</Label>
                <StyledInput type="email" id="email" placeholder="afadfal@gmail.com" />
              </InputWrapper>
              <InputWrapper>
                <Label htmlFor="password" className="visually-hidden">Senha</Label>
                <StyledInput type="password" id="password" placeholder="senha" />
              </InputWrapper>
              <ActionsWrapper>
                <LoginButton>Login</LoginButton>
                <ForgotPasswordLink tabIndex="0">Esqueceu a senha?</ForgotPasswordLink>
              </ActionsWrapper>
            </LoginForm>
          </FormColumn>
          <InfoColumn>
            <InfoWrapper>
              <InfoTitle>
                Página de <br />
                <TitleHighlight>Login</TitleHighlight>
              </InfoTitle>
              <InfoSubtitle>A esperança traz força atraves de atitudes</InfoSubtitle>
            </InfoWrapper>
          </InfoColumn>
        </FlexContainer>
      </ContentWrapper>
      <DecorativeImage loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfb9fe82e39ba9002127dd270af8828586d787bf57ee7e17be4ca279d5b8c256?apiKey=eaebb25525234b08a51e0c1a0f73d0fb&" />
    </MainContainer>
  );
};

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 80px 0;
  justify-content: flex-end;
  overflow: hidden;
  position: relative;
  min-height: 1024px;
`;

const BackgroundImage = styled.img`
  position: absolute;
  inset: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

const ContentWrapper = styled.div`
  position: relative;
  align-self: center;
  margin-top: 162px;
  width: 100%;
  max-width: 1205px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const FlexContainer = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const FormColumn = styled.section`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 38%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const LoginForm = styled.form`
  justify-content: space-between;
  border-radius: 20.369px;
  background-color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  font-weight: 300;
  text-align: center;
  width: 100%;
  margin-left: 109px;
  padding: 37px 46px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    padding: 0 20px;
  }
  @media (max-width: 640px) {
    margin-left: -2px;
  }
`;

const Logo = styled.img`
  aspect-ratio: 1.49;
  object-fit: auto;
  object-position: center;
  width: 134px;
  align-self: center;
  max-width: 100%;
`;

const WelcomeMessage = styled.h2`
  color: #000;
  align-self: center;
  font: 700 41px Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const InputWrapper = styled.div`
  margin-top: 20px;
  &:first-child {
    margin-top: 66px;
  }
`;

const StyledInput = styled.input`
  justify-content: center;
  align-items: center;
  border-radius: 101.843px;
  border: 3px solid rgba(51, 51, 51, 1);
  color: rgba(0, 0, 0, 0.65);
  white-space: nowrap;
  padding: 18px 60px;
  width: calc(100% - 120px); /* Adjust padding */
  font: 20px Inter, sans-serif;
`;

const Label = styled.label`
  position: absolute;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
  width: 1px;
`;

const ActionsWrapper = styled.div`
  display: flex;
  margin-top: 66px;
  justify-content: space-between;
  gap: 20px;
  font-weight: 600;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const LoginButton = styled.button`
  border-radius: 101.843px;
  background-color: #f27127;
  justify-content: center;
  color: #fff;
  white-space: nowrap;
  flex-grow: 1;
  padding: 15px 30px;
  font: 20px Poppins, sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const ForgotPasswordLink = styled.div`
  color: #000;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
  font: 16px Poppins, sans-serif;
  cursor: pointer;
`;

const InfoColumn = styled.aside`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 62%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const InfoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-self: stretch;
  color: #fff;
  margin: auto 0 auto 116px;
  padding: 0 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const InfoTitle = styled.h1`
  font: 700 59px/120% Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
  }
  @media (max-width: 640px) {
    margin-left: -2px;
    font-size: 40px;
    padding-bottom: 200px;
  }
`;

const TitleHighlight = styled.span`
  font-size: 112px;
  line-height: 134px;
  color: rgba(255,255,255,1);
`;

const InfoSubtitle = styled.p`
  justify-content: center;
  background-color: rgba(217, 217, 217, 0.2);
  margin-top: 36px;
  padding: 10px 11px;
  font: 400 51px Poppins, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
  }
  @media (max-width: 640px) {
    padding-bottom: -5px;
  }
`;

const DecorativeImage = styled.img`
  aspect-ratio: 6.67;
  object-fit: auto;
  object-position: center;
  width: 100%;
  max-width: 1339px;
  margin: 22px 0 0 -1px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export default Login;
