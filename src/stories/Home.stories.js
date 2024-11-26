import Home from "../pages/Home";


export default {
    title: 'pages/Home',
    component: Home,
    decorators: [
        (Story) =>{
            return (
                Story()
            )
        }
    ],
}

export const Default = {};