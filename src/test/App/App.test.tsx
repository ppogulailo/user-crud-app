import {render} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import App from "../../App";
import {screen} from "@testing-library/react";
describe('App Test', () => {
    test("should Main render", () => {
        render(
            <MemoryRouter initialEntries={['/error404']}>
                <App/>
        </MemoryRouter>
        );
        expect(screen.getByTestId('not-found-page')).toBeInTheDocument()
    });
})
