git config --global -e < Ver configuracion global
PARA SALIR :q! ENTER
O :wq! ENTER

git config core.autocrlf true < Saca un error

git init

git add index.html main.html *.html css/ < Agrega ciertos archivos al stage

git add . < Agrega todos los archivos del repositorio al stage 

git reset index.html < Ese archivo no es parte del stage

git mv [nombre archivo] [nombre nuevo archivo] < Le hace rename al archivo en el repositorio de git, y lo pasa al stage, hay que hacer commit

---
Commits
---

git commit -m "Mensaje"

git commit -am "Mensaje" < Hace el add y crea el commit

git commit --amend < Entramos a un perfil de edicion del commit

git commit --amend -m "Mensaje corregido" < amend es para corregir algo del commit, en este caso el mensaje

git reset --soft [commit]< Va a pasar los datos de los siguientes commits al que viajamos al stage

git reset --mixed [commit] < Va a pasar los datos del ultimo commit fuera del stage

git reset --hard [commit] < Viajamos a cierto commit 100% sin guardar ningun dato

git checkout -- . < Nos devuelve el proyecto a como estava en el ultimo commit

git checkout -- [archivo especifico] < Nos devuelve el archivo a como estava en el ultimo commit

git push

---
Logs
---

git reflog < VER HISTORIAL De modificaciones de commits 

git status < Muestra estado del repositorio

git status --short < Muestra estado del repositorio resumido

git log --oneline < Muestra los commits abreviados

git diff < Los cambios de mis archivos locales a diferencia con los que estan en el stage

---

---

git remote -v < Chequeamos la conexion remota a la nube que tenemos enlazada a nuestro repo local

git pull < trae archivos del ultimo commit

git fetch < Hace una comparacion del repo local y repo de la nube y los iguala

git push --tags < Subir tags a github

---
Tags
---

git tag [nombre tag] -m Descripcion de version" < Se hace el tag sobre el commit que estamos, navegamos entre los commit con reset y les vamos asignando distintos tags

git tag -a [hash commit] [nombre tag] -m "Descripcion del tag" < Otra manera de agregar tags

git tag -d [nombre tag] < Borramos el tag con ese nombre


git show [nombre tag] < Te muestra detalles del commit que apunta ese tag

v1.2.0
1 = Cambios importantes
2 = Cambios en funcionalidades
3 = Correccion de errores

---
Branchs
---

git config --global init.defaultBranch [nombre de rama] < Se setea una rama como default

git branch < Nos muestra las ramas que hay y en la que estamos

git branch [Nombre branch] < Creamos la rama pero no nos movemos a ella, checkout para moverse

git chechout [Nombre branch] -b "Nombre Rama" < Creamos la rama y movemos a ella

git branch -d [Nombre branch] < Eliminar la rama

git branch -d [Nombre branch] -f < Eliminar la rama forzado

git branch [Nombre branch a cambiar] [Nombre de branch nuevo] < Cambiamos nombre de una rama

git checkout [Nombre branch] < Nos movemos a la rama

---
Merges
---

Fast-Forward:
Directamente pasa el master a la altura de nuestro commit mas reciente de la branch.

Recursive:
Analiza cambios y une, solo lo hace si no hay conflictos con los archivos modificados.

Conflict:
Vamos a tener que elegir nosotros con que cambio nos quedamos.

Si sobre la rama hacemos un add . y un commit -m ... se graba todo en la rama que estamos, nos tenemos que despues mover a la rama

master o main con checkout y vamos a hacer un merge si es que los cambios que hicimos estan aprobados

git merge [Nombre branch a unir] < Ya ubicados en el master o main tenemos que hacer que la rama que se modifico antes se una al main

Si se hace un merge entre 2 ramas con conflictos que se modifico la misma parte en distintas branches vs nos va a preguntar con cual querdarnos, despues de solucionar todo hacemos un add ., un commit y un push.

Para hacer un push de la rama hay que hacer desde la rama:

git add .

git commit -m "Msg"

git push (Nombre de repositorio de gitHub que casi siempre es origin) (Nombre de la rama)

Ej: git push origin ramaIvan

Desde el repositorio en la nube se ve si el commit se puede hacer merge o no con el main en la nube

---
Alias:
---

git config --global alias.s "status --short" < Creamos un alias de git status "git s"

git config --global -e < Para entrar a la config global y modificar los alias

git config --global alias.lg "log --graph --abbrev-commit --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)' --all"

---
Stash
---

git stash save "Msg" < Guarda todo el directorio en el cual estoy trabajando y lo indexa como wip (work in progress) en la rama que estoy y le pone un hash, con un msj

git stash list < Te muestra lista de los stash

git stash pop stash@{num} < Devuelve el ultimo stash default 0

git stash drop stash@{num} < Borra cierto stash

git stash clear < Borra todos los stash, pero con el reflog se puede recuperar alguno

git stash apply <

git stash show stash@{num} < Te muestra info de ese stash

---
Rebase
---

1- Ordenar commits
2- Corrige mensajes en los commits
3- Une commits
4- Separa commits

git rebase [nombre de rama] < Hay que estar sobre la rama que queremos unir a la otra.

git rebase -i HEAD~[num de commits antes del head] < Para abrir el menu interactivo del rebase