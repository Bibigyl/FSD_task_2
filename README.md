# Отель TOXIN

### [UI-KIT](https://bibigyl.github.io/FSD_task_2/ui-kit)

### [Landing Page](https://bibigyl.github.io/FSD_task_2/landing-page)

### [Search room](https://bibigyl.github.io/FSD_task_2/search-room)

### [Room details](https://bibigyl.github.io/FSD_task_2/room-details)

### [Registration and Sign in](https://bibigyl.github.io/FSD_task_2/registration)



## Установка
```
npm install
```

## Режимы работы

### develop
```
npm run start
```
Команда запускает dev-server и открывает страницу UI-KIT. При сохранении изменений в коде, страница обновляется.
Для перехода на другую страницу, используйте ``` http://localhost:8080/название-страницы.html ```:
```
UI-KIT http://localhost:8080/ui-kit.html
Landing Page http://localhost:8080/landing-page.html
Search room http://localhost:8080/search-room.html
Room details http://localhost:8080/room-details.html
Registration and Sign in http://localhost:8080/registration.html
```

### production
```
npm run build
```
По этой команде происходит сборка проекта. В папке dist для каждой страницы создаются html, css и js файлы. Так же создаются папки images, fonts, favicon. 

### deploy
```
npm run deploy
```
Находящиеся в папке dist файлы загружаются на GitHub. Эти файлы используются для демонстрации в GitHub-Pages.