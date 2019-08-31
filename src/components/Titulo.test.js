import React from "react";
import Titulo from "./Titulo";
import testRender from "react-test-renderer";
import { shallow } from "enzyme";

describe("Shallow test", () => {
  const component = shallow(<Titulo textColor="#0F0">Meu título</Titulo>);
  const element = component.getElement();

  test("Testa se o componente interno é um h1", () => {
    expect(element.type).toBe("h1");
  });

  test("Testa se foi repassado o textColor para o componente", () => {
    expect(element.props.style.color).toBe("#0F0");
  });

  test("Testa se foi repassado o backgroundColor para o componente", () => {
    expect(element.props.style.backgroundColor).toBe("#561dc1");
  });

  test("Testa se foi repassado possui o título esperado", () => {
    expect(component.text()).toBe("Meu título");
  });
});

describe("Snapshot tests", () => {
  test("Testa se o componente renderiza de acordo co a snapshot", () => {
    const tree = testRender.create(<Titulo>Meu título</Titulo>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
