# 📝 ToDo List

Uma aplicação moderna de lista de tarefas construída com React, TypeScript e Tailwind CSS. Esta aplicação oferece uma interface intuitiva para gerenciar tarefas pessoais com funcionalidades de criação, edição, conclusão e exclusão.

## ✨ Funcionalidades

- ✅ **Criação de tarefas**: Adicione novas tarefas facilmente
- ✏️ **Edição de tarefas**: Modifique tarefas existentes em tempo real
- ☑️ **Marcar como concluída**: Marque tarefas como concluídas
- 🗑️ **Exclusão de tarefas**: Remova tarefas desnecessárias
- 📊 **Resumo de progresso**: Visualize estatísticas de tarefas criadas e concluídas
- 💾 **Persistência local**: Dados salvos no localStorage do navegador
- 🎨 **Interface moderna**: Design responsivo e intuitivo
- ⚡ **Estados de carregamento**: Feedback visual durante operações
- 🔄 **Validação de duplicatas**: Previne criação de tarefas duplicadas

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 19.1.1** - Biblioteca para interfaces de usuário
- **TypeScript 5.8.3** - Tipagem estática para JavaScript
- **Vite 7.1.7** - Build tool e servidor de desenvolvimento
- **Tailwind CSS 4.1.13** - Framework CSS utilitário
- **React Router 7.9.3** - Roteamento para aplicações React

### Bibliotecas e Utilitários
- **use-local-storage** - Hook para persistência no localStorage
- **class-variance-authority** - Utilitário para variantes de componentes
- **vite-plugin-svgr** - Plugin para importar SVGs como componentes React

### Ferramentas de Desenvolvimento
- **ESLint** - Linter para qualidade de código
- **TypeScript ESLint** - Regras específicas para TypeScript
- **React Hooks ESLint** - Regras para hooks do React

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 18 ou superior)
- pnpm (gerenciador de pacotes)

### Instalação

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd todo
   ```

2. **Instale as dependências**
   ```bash
   pnpm install
   ```

3. **Execute o servidor de desenvolvimento**
   ```bash
   pnpm dev
   ```

4. **Acesse a aplicação**
   Abra [http://localhost:5173](http://localhost:5173) no seu navegador

### Scripts Disponíveis

```bash
# Desenvolvimento
pnpm dev          # Inicia servidor de desenvolvimento

# Build
pnpm build        # Gera build de produção

# Linting
pnpm lint         # Executa verificação de código

# Preview
pnpm preview      # Visualiza build de produção
```

## 📁 Estrutura do Projeto

```
src/
├── components/           # Componentes reutilizáveis
│   ├── badge.tsx        # Componente de badge
│   ├── button.tsx       # Botão principal
│   ├── button-icon.tsx  # Botão com ícone
│   ├── card.tsx         # Card container
│   ├── container.tsx    # Container layout
│   ├── icon.tsx         # Componente de ícone
│   ├── input.tsx        # Input de texto
│   ├── input-checkbox.tsx # Checkbox
│   ├── skeleton.tsx     # Loading skeleton
│   └── text.tsx         # Componente de texto
├── core-components/     # Componentes específicos da aplicação
│   ├── footer.tsx       # Rodapé
│   ├── header.tsx       # Cabeçalho
│   ├── main-content.tsx # Conteúdo principal
│   ├── task-item.tsx    # Item de tarefa
│   ├── tasks-list.tsx   # Lista de tarefas
│   └── tasks-summary.tsx # Resumo de tarefas
├── hooks/              # Hooks customizados
│   ├── use-task.ts     # Hook para operações de tarefa
│   └── use-tasks.ts    # Hook para lista de tarefas
├── models/             # Modelos e tipos
│   └── task.ts         # Interface e enum de tarefa
├── pages/              # Páginas da aplicação
│   ├── layout-main.tsx # Layout principal
│   ├── page-home.tsx   # Página inicial
│   └── page-components.tsx # Página de componentes
├── helpers/            # Utilitários
│   └── utils.ts        # Funções auxiliares
├── assets/             # Recursos estáticos
│   └── icons/          # Ícones SVG
├── App.tsx             # Componente principal
├── main.tsx            # Ponto de entrada
└── index.css           # Estilos globais
```

## 🎨 Design System

### Cores
- **Cinza**: `#F7F3F6` (100) → `#332E32` (400)
- **Verde**: `#CDDFCC` (light) → `#2F5C2D` (dark)
- **Rosa**: `#E9CCE1` (light) → `#884074` (dark)

### Tipografia
- **Fonte**: Cairo (Google Fonts)
- **Pesos**: 400 (regular), 600 (semi-bold)

### Componentes
- **Cards**: Containers com sombra sutil
- **Botões**: Variantes primária, secundária e terciária
- **Inputs**: Estilo consistente com estados de loading
- **Badges**: Indicadores de status e contadores

## 🔧 Arquitetura

### Gerenciamento de Estado
- **Local Storage**: Persistência de dados no navegador
- **Hooks Customizados**: Lógica de negócio encapsulada
- **Estado Local**: Gerenciamento de UI e formulários

### Padrões Utilizados
- **Component Composition**: Componentes compostos e reutilizáveis
- **Custom Hooks**: Lógica de negócio separada da UI
- **TypeScript Interfaces**: Tipagem forte para dados
- **Enum para Estados**: Estados bem definidos e tipados

### Fluxo de Dados
1. **useTasks**: Gerencia lista de tarefas e estatísticas
2. **useTask**: Gerencia operações CRUD de tarefas individuais
3. **Local Storage**: Persistência automática de mudanças
4. **Componentes**: Renderização reativa baseada no estado

## 🎯 Funcionalidades Detalhadas

### Criação de Tarefas
- Botão "Nova tarefa" cria item em modo de edição
- Validação para evitar tarefas duplicadas
- Estado de loading durante criação

### Edição de Tarefas
- Modo de edição inline com input de texto
- Botões de confirmação e cancelamento
- Validação de título obrigatório

### Conclusão de Tarefas
- Checkbox para marcar como concluída
- Tarefas concluídas aparecem no final da lista
- Texto riscado para tarefas concluídas

### Exclusão de Tarefas
- Botão de lixeira com confirmação visual
- Estado de loading durante exclusão
- Remoção imediata da lista

### Resumo de Progresso
- Contador de tarefas criadas
- Contador de tarefas concluídas
- Cálculo automático de progresso

## 🚀 Melhorias Futuras

- [ ] Filtros por status (todas, pendentes, concluídas)
- [ ] Categorias ou tags para tarefas
- [ ] Data de criação e prazo
- [ ] Busca por tarefas
- [ ] Ordenação personalizada
- [ ] Exportação de dados
- [ ] Modo escuro
- [ ] Notificações
- [ ] Sincronização com backend

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📞 Contato

Para dúvidas ou sugestões, entre em contato através dos issues do repositório.

---

Desenvolvido com ❤️ usando React, TypeScript e Tailwind CSS