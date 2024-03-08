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
    const { getByText, getByLabelText, queryByTestId, getByTestId , queryAllByTestId} = render(<BoxList />);
    const input = getByLabelText("Color:");
    const button = getByText("Create Box");

    let boxes = queryAllByTestId("box");
    expect(boxes.length).toBe(1);

    fireEvent.change(input, { target: { value: 'pink'}});
    fireEvent.click(button);

    boxes = queryAllByTestId("box");
    expect(boxes.length).toBe(2);
});

