import React from "react";
import {
  MainContainer,
  BackgroundImage,
  ContentWrapper,
  FlexContainer,
  FormColumn,
  LoginForm,
  Logo,
  WelcomeMessage,
  InputWrapper,
  StyledInput,
  Label,
  ActionsWrapper,
  LoginButton,
  ForgotPasswordLink,
  InfoColumn,
  InfoWrapper,
  InfoTitle,
  TitleHighlight,
  InfoSubtitle,
  DecorativeImage,
} from "/pages/login/LoginPageStyles"

const LoginPage = () => {
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

export default LoginPage;
