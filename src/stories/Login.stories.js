import Login from "../pages/Login";
import { BrowserRouter } from "react-router-dom";

export default {
    title: 'pages/Login',
    component: Login,
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