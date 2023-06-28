import 'antd/dist/reset.css';
import 'dayjs/locale/pt-br';

import { css } from '@emotion/css';
import { App, ConfigProvider } from 'antd';
import ptBR from 'antd/es/locale/pt_BR';
import dayjs from 'dayjs';

dayjs.locale('pt-br');

const Config: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <ConfigProvider
        form={{
            validateMessages: {
                required: '${label} é obrigatório.',
            },
            scrollToFirstError: true,
        }}
        locale={ptBR}
        renderEmpty={(name) => {
            if (name === 'Table') {
                return 'Nenhum registro encontrado...';
            }
            return 'Vazio...';
        }}
        theme={{
            token: {
                borderRadius: 6,
                controlHeight: 32,
                fontFamily: 'Readex Pro',
                fontSize: 12,
                lineWidth: 2,
                // color
                colorBgBase: '#fff',
                colorBgContainer: '#fff',
                colorBgLayout: '#fff',
                colorBgTextHover: '#d3f6ff',
                colorBorder: '#dddddd',
                colorError: '#d16476',
                colorErrorActive: '#942d3e',
                colorErrorBorder: '#942d3e',
                colorLink: '#1fb6db',
                colorLinkActive: '#2a798d',
                colorLinkHover: '#2a798d',
                colorPrimary: '#1fb6db',
                colorPrimaryActive: '#2a798d',
                colorPrimaryHover: '#2a798d',
                colorText: '#888888',
                colorTextDescription: '#dddddd',
                colorTextHeading: '#1fb6db',
                colorTextPlaceholder: '#cccccc',
            },
        }}
    >
        <App
            className={css`
                * {
                    box-shadow: none !important;
                }
                img {
                    user-select: none;
                    -moz-user-select: none;
                    -webkit-user-drag: none;
                    -webkit-user-select: none;
                    -ms-user-select: none;
                }
            `}
        >
            {children}
        </App>
    </ConfigProvider>
);

export default Config;
