# Crie Seu Primeiro World no HELIX

*Guia completo para desenvolver e publicar servers no HELIX. Você vai aprender sobre Workspaces, Packages, Worlds, Creator Kit, Blueprints, Build Mode e mais.*

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
  <iframe src="https://youtube.com/embed/Q283bqr40P0"
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
          frameborder="0"
          allowfullscreen>
  </iframe>
</div>

---

## **1. Conceitos Principais**

- Um **Package** é um conjunto modular de assets (scripts Lua, Blueprints, UIs, meshes, textures, etc.) que pode ser combinado com outros Packages via dependências para formar um **World** jogável. Similar a um **resource** no FiveM.
- Um **World** é um tipo especial de Package que contém a lógica do jogo (scripts Lua, Blueprints) e dependências para formar uma experiência jogável no HELIX. Similar a uma **recipe** no FiveM.
- Um **Server** é uma instância de um World onde jogadores podem se conectar. Diferente do FiveM, servers não contêm lógica ou assets, tudo fica no World. Veja como hospedar um Dedicated Server [aqui](dedicated_server.md).
    - **Local Servers (Listen/P2P)**
        - Peer-to-peer.
        - Gratuito, mas não persistente (encerra quando o host sai).
    - **Dedicated Servers**
        - Máquina dedicada, conexão via IP.
        - Persistente, suporta mais jogadores.
- O **Vault** é o gerenciador de packages do HELIX. Packages (incluindo Worlds) são publicados, versionados e baixados do Vault. Similar ao **npm** ou **pip**.
- O **Creator Kit** é um plugin de Unreal Engine para criar assets customizados e importá-los no HELIX. Baixe e comece [aqui](creatorkit.md).

**Diferenças:**

| | Package | World | Server
| --- | --- | --- | --- |
| Propósito | Assets modulares | Jogo completo | Instância de um World
| Jogável | Não | Sim (via servers) | Sim
| Editável | Não | Sim (via Workspace) | Não (atualize o World)
| Publicação | Como Package | Como World | Como instância
| Dependências | Sim | Sim | Não

**Um World contém:**

- Dependências de Packages, incluindo o map package e assets importados (textures, meshes, etc.)
- Scripts Lua com a lógica do jogo
- Opcionalmente, um mapa dinâmico editável no Build Mode

---

## **2. Criando Seu Primeiro World e Server**

### **Criar Novo World**

Um **Workspace** é a pasta local com os arquivos do World que você está editando. Durante o desenvolvimento, você trabalha nessa pasta. Pode conectar a Git para controle de versão.

1. Clique em **Create World** no Client > Worlds e selecione um mapa
    ![image.png](https://r2.fivemanage.com/ElKst3CCVvlhlgHiaH5IM/firstworld_4.png)
2. Clique em **Code** na toolbar do Build Mode (tecla "N") para abrir a pasta do Workspace
3. Clique em **Save** para salvar localmente

### **Adicionar Lógica**

Use Lua ou Blueprints no Workspace para adicionar lógica ao World. Veja o [guia de scripts Lua](../scripting/packageguide.md) e [Começando com QBCore](../qbcore/installation/) para o template de RP. Guia de Blueprints em breve.

### **Adicionar Dependências**

Adicione Packages (como [QBCore](../qbcore/)) ao World para estender funcionalidades. Clique em **Vault** na barra inferior para buscar e adicionar. O progresso aparece em **Downloads**.

Packages do Vault não são editáveis. Apenas arquivos no Workspace podem ser editados. Você pode referenciar classes, funções e assets dos Packages na sua lógica.

### **Importar Assets do Creator Kit**

Importe assets customizados (Blueprints, Classes, UIs, meshes, textures, materials, etc.) no World seguindo [estes guias](creatorkit.md#-create-a-new-package).

### **Publicar World**

Publique como **Public** ou **Private**. Usuários com permissão veem o World no Client > **Worlds** ou em [helixgame.com/worlds](https://helixgame.com/worlds).

/// Warning!
**IMPORTANTE!** Se o World tem assets do Creator Kit, publique esses Packages no Vault primeiro e adicione como dependências antes de publicar o World. Veja [este guia](creatorhub.md).
///

Clique em **Publish** no Build Mode (ícone de foguete) para enviar ao Vault. Escolha Public ou Private. O Workspace é compactado e enviado automaticamente.

Para Private, dê acesso a usuários no **[Creator Hub](https://hub.helixgame.com/)** > Manage Worlds > Grant Access.

### **Gerenciar Drafts**

Veja e edite Worlds em draft no Client > Worlds > **Drafts**.

### **Hospedar Dedicated Server**

Veja [este guia](dedicated_server.md) para hospedar um Dedicated Server. Em breve: **HELIX Instant Hosting**.

### **Atualizar World / Server**

Clique em **Publish** e escolha "publish as new version" ou "replace existing version". Reinicie Dedicated Servers para aplicar. Com HELIX Instant Hosting, reinicia automaticamente.

---

## **3. Precisa de Ajuda?**

Peça ajuda no [Discord](https://discord.gg/helixgame). Nossa equipe e outros criadores podem ajudar.
