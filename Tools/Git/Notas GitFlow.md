---
Fork
---

Hacer un fork es crear una rama de un repositorio publico que no es nuestro ni somos colaboradores en un repositorio nuestro de github para tener total acceso.

Para poder colaborar en un repositorio publico que no somos colaboradores tenemos que darle uso a los pull request, en este caso le enviamos el repo nuestro que hicimos el fork de lo de ellos

Repositorio del que solo traigo info: upstream
sirve para % git remote add upstream URL_REPO %

---
Flujos de Trabajo
---

Feature branch < Rama independiente en la cual cada miembro de mi equipo va a estar trabajando y solo ellos trabajan

git fetch
git branch -a < Revisar ramas del repo
git checkout feature-branch-name

git checkout master
git merge feature-branch-name
git push

El otro flujo podria ser con los pull request:
git push origin feature-branch-name