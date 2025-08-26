// Configuração pública das credenciais do Google Drive
// Este arquivo pode ser commitado no Git pois não contém credenciais sensíveis

const GOOGLE_CONFIG = {
    CLIENT_ID: 'SEU_CLIENT_ID_AQUI.apps.googleusercontent.com',
    API_KEY: 'SUA_API_KEY_AQUI',
    DISCOVERY_DOC: 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest',
    SCOPES: 'https://www.googleapis.com/auth/drive.file',
    FOLDER_ID: 'SEU_FOLDER_ID_AQUI' // ID da pasta do Google Drive
};

// Para configurar:
// 1. Substitua 'SEU_CLIENT_ID_AQUI' pelo seu Google Client ID
// 2. Substitua 'SUA_API_KEY_AQUI' pela sua Google API Key  
// 3. Substitua 'SEU_FOLDER_ID_AQUI' pelo ID da pasta do Google Drive
//
// Como obter as credenciais:
// 1. Acesse https://console.cloud.google.com/
// 2. Crie um projeto ou selecione um existente
// 3. Ative a Google Drive API
// 4. Crie credenciais OAuth 2.0
// 5. Configure as URLs autorizadas
// 6. Obtenha o Client ID e API Key
