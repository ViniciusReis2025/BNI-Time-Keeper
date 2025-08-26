# BNI TimeKeeper

Sistema de cronometragem para reuniões BNI com funcionalidades de relatório e integração com Google Drive.

## ⚠️ IMPORTANTE - SEGURANÇA

Este projeto foi configurado para **NÃO** expor credenciais sensíveis no repositório Git.

### Configuração das Credenciais do Google Drive

1. **Copie o arquivo de exemplo:**
   ```bash
   cp config.example.js config.js
   ```

2. **Configure suas credenciais no arquivo `config.js`:**
   - Substitua `SEU_CLIENT_ID_AQUI` pelo seu Google Client ID
   - Substitua `SUA_API_KEY_AQUI` pela sua Google API Key
   - Substitua `SEU_FOLDER_ID_AQUI` pelo ID da pasta do Google Drive

3. **O arquivo `config.js` está no `.gitignore`** e não será commitado no repositório.

### Como obter as credenciais do Google:

1. Acesse o [Google Cloud Console](https://console.cloud.google.com/)
2. Crie um novo projeto ou selecione um existente
3. Ative a **Google Drive API**
4. Crie credenciais OAuth 2.0
5. Configure as URLs autorizadas
6. Obtenha o Client ID e API Key

## Funcionalidades

- ⏱️ Timer para cada etapa da reunião
- 📊 Relatórios em tempo real
- 📄 Exportação para PDF
- 📊 Exportação para Excel
- ☁️ Upload automático para Google Drive
- 🔔 Alertas sonoros para controle de tempo
- 💾 Salvamento local da pauta

## Como usar

1. Abra o arquivo `index.html` no navegador
2. Preencha as informações da reunião
3. Configure os tempos para cada etapa
4. Use os controles para gerenciar o tempo
5. Exporte os relatórios ao final

## Estrutura dos arquivos

- `index.html` - Versão principal com integração Google Drive
- `BNI_TimeKeeper_Terceiros.html` - Versão simplificada
- `bni_timekeeper_timer_v2.html` - Versão alternativa
- `config.example.js` - Exemplo de configuração
- `.gitignore` - Proteção de arquivos sensíveis

## Segurança

✅ **O que está protegido:**
- Credenciais OAuth 2.0 removidas do código
- Arquivo `.gitignore` configurado
- Arquivo de exemplo para configuração

❌ **Nunca faça:**
- Commit de arquivos com credenciais reais
- Compartilhamento de API Keys em repositórios públicos
- Hard-coding de credenciais no código fonte

## Contribuição

Ao contribuir para este projeto, certifique-se de:
1. Não incluir credenciais reais nos commits
2. Usar o arquivo `config.example.js` como referência
3. Manter o `.gitignore` atualizado
