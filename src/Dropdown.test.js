import { render, screen } from '@testing-library/react';
import Dropdown from './components/Dropdown';


it('runs without crashing', () => {
    render(<Dropdown />);
});

const setup = () => {
    const utils = render(<Dropdown />);
    const selectOutput = utils.getByTestId("select-output");
    const selectInput = document.getElementById("react-select-2-input");
    return { selectOutput, selectInput };
  };


test("it can change selected item", async () => {
    const { selectOutput, selectInput } = setup();
    getByText(selectOutput, "Coconut");
    fireEvent.change(selectInput, { target: { value: "Grapefruit" } });
    await waitForElement(() => getByText(selectOutput, "Grapefruit"));
  });





