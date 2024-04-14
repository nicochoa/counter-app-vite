import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe('Pruebas en  <FirstApp/>', () => {
  test('debe hacer match con el snapshot', () => {
    const title = 'Hola soy Vegeta';
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });

  test(' debe mostrar el titulo en un H1', () => {
    const title = 'Hola soy Vegeta';
    const { container, getByText, getByTestId } = render(<FirstApp title={title} />);

    expect(getByText(title)).toBeTruthy();

    // const h1 = container.querySelector('h1');
    // expect(h1.innerHTML).toContain(title);

    expect(getByTestId('test-title').innerHTML).toContain(title);
  });

  test('debe mostrar el subtitulo mostrado por props', () => {
    const title = 'Hola soy Vegeta';
    const subTitle = 'Soy un subtitulo';
    const { getAllByText } = render(<FirstApp title={title} subTitle={subTitle}/>);
    expect(getAllByText(subTitle).length).toBe(2);
  });
});