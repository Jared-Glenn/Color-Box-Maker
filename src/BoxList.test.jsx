import { fireEvent, render } from "@testing-library/react";
import BoxList from "./BoxList";

// Smoke Test
it('renders without crashing', () => {
    render(<BoxList />);
});

// Snapshot Test
it("matches the snapshot", () => {
    const {asFragment} = render(<BoxList />);
                                    expect(asFragment()).toMatchSnapshot();
});

it("should add new box", () => {
    const { getByText, getByLabelText, queryByTestId, getByTestId } = render(<BoxList />);
    const input = getByLabelText("Color: ");
    const button = getByText("Create Box");
    expect(queryByTestId("box")).not.toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'pink'}});
    fireEvent.click(button);
    expect(getByTestId("box")).toBeInTheDocument();
})