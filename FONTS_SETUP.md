# Configuração de Fontes - Satoshi e Inter

## Fontes Instaladas

- ✅ **Inter**: Instalada via `next/font/google` - Funciona automaticamente
- ⚠️ **Satoshi**: Requer ficheiros locais (fonte comercial)

## Como Adicionar Satoshi

1. **Obter os ficheiros Satoshi**:
   - Satoshi é uma fonte comercial disponível em [Fontshare](https://www.fontshare.com/fonts/satoshi) ou outras fontes comerciais
   - Você precisa dos ficheiros: `Satoshi-Regular.woff2`, `Satoshi-Medium.woff2`, `Satoshi-Bold.woff2`

2. **Colocar os ficheiros**:
   - Crie a pasta `/public/fonts/` se não existir
   - Coloque os ficheiros `.woff2` na pasta `/public/fonts/`

3. **Verificar o caminho**:
   - O caminho no `layout.tsx` está configurado como `../public/fonts/Satoshi-*.woff2`
   - Se os ficheiros estiverem corretos, a fonte será carregada automaticamente

## Fallback Atual

- Se os ficheiros Satoshi não estiverem disponíveis, o sistema usa **Inter** como fallback
- Isso garante que o site funcione perfeitamente mesmo sem Satoshi

## Estrutura de Fontes

- **Títulos (H1, H2, H3, H4)**: `--font-title` (Satoshi ou Inter como fallback)
- **Texto corrido (body, p, li)**: `--font-body` (Inter)

## Classes CSS Disponíveis

- `.font-title` - Aplica fonte de título
- `.font-body` - Aplica fonte de corpo

