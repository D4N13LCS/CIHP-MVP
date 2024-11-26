import Sobre from "../components/Sobre";


export default {
    title: 'components/Sobre',
    component: Sobre,
    decorators: [
        (Story) =>{
            return (
                Story()
            )
        }
    ],
}

export const Default = {};