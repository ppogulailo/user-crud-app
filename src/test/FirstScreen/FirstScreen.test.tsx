import SignInSide from "../../components/FirstScreen/FirstScreen";
import {render} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
describe('FirstScreen Test', () => {
        test("should Main render", () => {
            render(<MemoryRouter><SignInSide/></MemoryRouter>);
        });
})
