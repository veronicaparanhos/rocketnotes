import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img
          src="https://github.com/veronicaparanhos.png"
          alt="Foto do usuário"
        />

        <div>
          <span>Bem-vinda</span>
          <strong>Verônica Paranhos</strong>
        </div>
      </Profile>
      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
