// Arquivo de exemplo para configuração das credenciais do Google Drive
// Copie este arquivo para 'config.js' e preencha com suas credenciais reais

const GOOGLE_CONFIG = {
    CLIENT_ID: 'SEU_CLIENT_ID_AQUI.apps.googleusercontent.com',
    API_KEY: 'SUA_API_KEY_AQUI',
    DISCOVERY_DOC: 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest',
    SCOPES: 'https://www.googleapis.com/auth/drive.file',
    FOLDER_ID: 'SEU_FOLDER_ID_AQUI' // ID da pasta do Google Drive
};

// Para usar este arquivo, inclua no seu HTML:
// <script src="config.js"></script>
// E substitua as variáveis no código por:
// var GOOGLE_CLIENT_ID = GOOGLE_CONFIG.CLIENT_ID;
// var GOOGLE_API_KEY = GOOGLE_CONFIG.API_KEY;
// etc.
