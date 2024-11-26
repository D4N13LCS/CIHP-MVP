import Nav from "../components/Nav";
import { BrowserRouter } from "react-router-dom";

export default {
    title: 'components/Nav',
    component: Nav,
    decorators: [
        (Story) =>{
            return (
            <BrowserRouter>
                {Story()}
            </BrowserRouter>
            )
        }
    ],
}

export const Default = {};