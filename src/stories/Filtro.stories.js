import Filtro from "../components/Filtro";

export default {
    title: 'components/Filtro',
    component: Filtro,
    parameters: {
        docs: {
            description: {
                component: 'Este componente filtra'
            }
        }
    },
    decorators: [
        (Story) => {
            return <Story />;
        }
    ],
};

export const Default = {}; 