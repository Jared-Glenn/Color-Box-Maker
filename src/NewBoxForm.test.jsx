import { render } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

// Smoke Test
it('renders without crashing', () => {
    render(<NewBoxForm />);
});

// Snapshot Test
it("matches the snapshot", () => {
    const {asFragment} = render(<NewBoxForm />);
                                    expect(asFragment()).toMatchSnapshot();
});
