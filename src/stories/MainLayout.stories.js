import MainLayout from "../layouts/MainLayout";
import { BrowserRouter } from "react-router-dom";


export default {
    title: 'layouts/MainLayout',
    component: MainLayout,
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