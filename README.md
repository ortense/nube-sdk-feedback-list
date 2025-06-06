# NubeFeedback - Tutorial de Estilos do NubeSDK

Este projeto foi criado como uma introdução as funcionalidades de estilo do
NubeSDK da Tiendanube/Nuvemshop. O app implementa uma lista de feedbacks de
clientes que é exibida na página do produto, utilizando componentes JSX
estilizados com o sistema de design do NubeSDK.

## Funcionalidades

- **Lista de Feedbacks**: Exibe feedbacks de clientes com avatar, nome,
  avaliação em estrelas e comentário
- **Estilos Customizados**: Demonstra o uso do `StyleSheet.create()` e tema do
  NubeSDK
- **Componentes Modulares**: Estrutura bem organizada com componentes
  reutilizáveis
- **Sistema de Avaliação**: Rating visual com estrelas
- **Design Responsivo**: Layout adaptável usando o sistema de grid do NubeSDK

## Componentes Implementados

- `FeedbackList`: Container principal da lista de feedbacks
- `Feedback`: Item individual de feedback
- `Avatar`: Componente de avatar do usuário
- `StarRating`: Sistema de avaliação por estrelas

## Conceitos do NubeSDK Demonstrados

- Uso do `StyleSheet.create()` para criação de estilos
- Acesso ao `theme` para cores consistentes
- Componentes JSX (`Column`, `Row`, `Text`, `Image`)
- Integração com slots da loja (`after_line_items`)
- Estrutura de tipos TypeScript

## Available Scripts

### Development

- `npm run dev` - Starts local development server
- `npm run build` - Builds the project using tsup
- `npm test` - Runs unit tests
- `npm run test:watch` - Runs tests in watch mode (automatically re-runs when
  changes are detected)
- `npm run test:coverage` - Runs tests and generates a coverage report

### Code Quality

- `npm run format` - Formats all project files using Biome
- `npm run lint` - Runs linting on all project files using Biome

## Technologies Used

- [TypeScript](https://www.typescriptlang.org/)
- [Vitest](https://vitest.dev/) for testing
- [Biome](https://biomejs.dev/) for formatting and linting
- [tsup](https://tsup.egoist.dev/) for building
