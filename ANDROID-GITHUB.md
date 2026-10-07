# ALXMOVIES TV — Android via GitHub Actions

Este projeto continua sendo o mesmo React/Vite. O Android é criado automaticamente pelo Capacitor no GitHub Actions, portanto não é necessário ter um PC com Android Studio para gerar o APK.

## Publicar no GitHub

1. Crie um repositório no GitHub.
2. Envie todos os arquivos desta pasta para o repositório.
3. No GitHub, abra **Actions**.
4. Entre em **Build ALXMOVIES Android** e clique em **Run workflow** (ou faça um push na branch `main`/`master`).
5. Quando terminar, abra a execução e baixe o artifact **ALXMOVIES-TV-APK**.

O APK gerado é `app-debug.apk` e pode ser instalado diretamente no Android, desde que o aparelho permita instalação de apps fora da Play Store.

## Google Play

Para publicar na Play Store, use o workflow **Build ALXMOVIES Android Release** e, antes da publicação, configure uma chave de assinatura Android. O AAB é o formato recomendado para a Play Store.

## Identidade do app

- Nome: ALXMOVIES TV
- Application ID: `com.alxmovies.tv`
- Tecnologia: React/Vite + Capacitor + Android

## Observação

O workflow cria a pasta `android/` durante a compilação. Ela não precisa ser mantida no repositório para o processo atual.
