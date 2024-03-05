import { render } from "@testing-library/react";
import Box from "./Box";

// Smoke Test
it('renders without crashing', () => {
    render(<Box
            key={0}
            color={"pink"}
            width={"100"}
            height={"100"}
            />);
});

// Snapshot Test
it("matches the snapshot", () => {
    const {asFragment} = render(<Box
                                    key={0}
                                    color={"pink"}
                                    width={"100"}
                                    height={"100"}
                                    />);
                                    expect(asFragment()).toMatchSnapshot();
});
