import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Container, Links, Content } from "./styles";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tags";

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução ao React</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            incidunt eum amet rem voluptas, laborum debitis distinctio nam
            impedit, ea aliquam! Pariatur asperiores veritatis quaerat iusto
            voluptate nostrum ea corporis? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quae incidunt eum amet rem voluptas,
            laborum debitis distinctio nam impedit, ea aliquam! Pariatur
            asperiores veritatis quaerat iusto voluptate nostrum ea corporis?
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">https://www.rocketseat.com.br</a>
              </li>
              <li>
                <a href="#">https://www.rocketseat.com.br</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
