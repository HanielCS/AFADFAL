import React from "react";
import {
  MainContainer,
  BackgroundImage,
  ContentWrapper,
  LayoutWrapper,
  FormWrapper,
  Header,
  Logo,
  Title,
  StyledLabel,
  InputField,
  SubmitButton,
  Information,
  InfoText,
  FooterImage
} from "/pages/register/RegisterPageStyles";

const RegisterPage = () => {
  return ( // Procurar por uma imagem com uma melhor qualidadae
    <MainContainer>
      <BackgroundImage alt="Admin registration background" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6fce6a03388314cfd43340f892fd366855440c852b8d3e7b27b08eccc62d59ba?apiKey=eaebb25525234b08a51e0c1a0f73d0fb&" />
      <ContentWrapper>
        <LayoutWrapper>
          <FormWrapper>
            <Header>
              <Logo alt="Company logo" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2ac3d0a21a1a22506e732f6391dd30cc64eafd1ff4ee5d5dac8b739fb391ee1?apiKey=eaebb25525234b08a51e0c1a0f73d0fb&" />
              <Title>Cadastre um novo administrador</Title>
            </Header>
            <form>
              <StyledLabel htmlFor="email">Digite seu e-mail</StyledLabel>
              <InputField type="email" id="email" placeholder="Digite seu e-mail" aria-label="Digite seu e-mail" />

              <StyledLabel htmlFor="password">Digite sua senha</StyledLabel>
              <InputField type="password" id="password" placeholder="Digite sua senha" aria-label="Digite sua senha" />

              <StyledLabel htmlFor="confirmPassword">Confirme sua senha</StyledLabel>
              <InputField type="password" id="confirmPassword" placeholder="Confirme sua senha" aria-label="Confirme sua senha" />
              <SubmitButton type="submit">Cadastrar</SubmitButton>
            </form>
          </FormWrapper>
          <Information>
            <InfoText>Cadastro de<br /><span>Administrador</span></InfoText>
          </Information>
        </LayoutWrapper>
      </ContentWrapper>
      <FooterImage alt="Decorative footer" src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfb9fe82e39ba9002127dd270af8828586d787bf57ee7e17be4ca279d5b8c256?apiKey=eaebb25525234b08a51e0c1a0f73d0fb&" />
    </MainContainer>
  );
};

export default RegisterPage;
