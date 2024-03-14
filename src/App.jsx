import React from "react";
import styled from "styled-components";

const Cadastro = () => {
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

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  justify-content: center;
  overflow: hidden;
  position: relative;
  min-height: 1024px;
  width: 100%;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 1);
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
  margin-top: 122px;
  width: 100%;
  max-width: 1220px;
  padding: 0 20px;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const LayoutWrapper = styled.div`
  gap: 20px;
  display: flex;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 38%;
  margin-left: 0px;
  border-radius: 20.369px;
  background-color: #fff;
  padding: 37px 24px;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.65);
  font-weight: 300;
  text-align: center;

  @media (max-width: 991px) {
    width: 100%;
    margin-top: 40px;
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Logo = styled.img`
  aspect-ratio: 1.49;
  width: 134px;
  max-width: 100%;
`;

const Title = styled.h2`
  color: #000;
  font: 700 30px Poppins, sans-serif;
`;

const StyledLabel = styled.label`
  font-family: Inter, sans-serif;
  display: block;
  margin-top: 20px;
`;

const InputField = styled.input`
  display: block;
  width: 93%;
  margin-top: 10px;
  padding: 10px;
  border-radius: 30px;
  border: 3px solid rgba(51, 51, 51, 1);
`;

const SubmitButton = styled.button`
  background-color: #f27127;
  color: white;
  border-radius: 101.843px;
  cursor: pointer;
  border: none;
  margin-top: 20px;
  padding: 15px;
  font-weight: 600;
`;

const Information = styled.div`
  width: 62%;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  line-height: normal;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const InfoText = styled.div`
  color: #fff;
  font: 700 49px/120% Poppins, sans-serif;
  margin: auto 0;
  span {
    font-size: 83px;
    line-height: 111px;
  }

  @media (max-width: 991px) {
    font-size: 40px;
    margin-top: 40px;
  }
`;

const FooterImage = styled.img`
  aspect-ratio: 6.67;
  width: 100%;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export default Cadastro;
