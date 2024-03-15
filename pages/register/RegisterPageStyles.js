import styled from "styled-components";

export const MainContainer = styled.main`
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

export const LayoutWrapper = styled.div`
  gap: 20px;
  display: flex;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

export const FormWrapper = styled.div`
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

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Logo = styled.img`
  aspect-ratio: 1.49;
  width: 134px;
  max-width: 100%;
`;

export const Title = styled.h2`
  color: #000;
  font: 700 30px Poppins, sans-serif;
`;

export const StyledLabel = styled.label`
  font-family: Inter, sans-serif;
  display: block;
  margin-top: 20px;
`;

export const InputField = styled.input`
  display: block;
  width: 93%;
  margin-top: 10px;
  padding: 10px;
  border-radius: 30px;
  border: 3px solid rgba(51, 51, 51, 1);
`;

export const SubmitButton = styled.button`
  background-color: #f27127;
  color: white;
  border-radius: 101.843px;
  cursor: pointer;
  border: none;
  margin-top: 20px;
  padding: 15px;
  font-weight: 600;
`;

export const Information = styled.div`
  width: 62%;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  line-height: normal;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const InfoText = styled.div`
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

export const FooterImage = styled.img`
  aspect-ratio: 6.67;
  width: 100%;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;
