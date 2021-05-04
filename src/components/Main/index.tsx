import * as S from './styles';

const Main = ({ title = 'React Avançado!', description = 'Curso React' }) => (
  <S.Wrapper>
    <S.Logo src="img/logo.svg" alt="React avançado logo" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="img/hero-illustration.svg"
      alt="Programador de frente pra um pc"
    />
  </S.Wrapper>
);

export default Main;
