# Este proyecto esta en hosteado en Heroku

# Documentacion para git

git add . -> Agrega todo los archivos al stage (cubeta) de git

git commit -> Agrega una marca en el tiempo a estos cambios que se han
                agregado en el stage (cubeta)
    -> -m Este parametro es para especificar directamente el mensaje
            y si no se coloca mostrara un editor de texto de consola,
            puede ser el editor 'vi', 'vim' o 'nano'. 

git checkout -> Viaja entre ramas especificandole su nombre
    -> -b Este parametro es crear la rama si no existe

git branch -> Mostrar todas las ramas actuales en el repositorio
    -> -d Elimina una rama pero si ha ocurrido algun problema no la borra
    -> -D Elimina una rama por fuerza bruta
    -> -a (all) Muestra todas las ramas que se encuentran en el repo tanto remoto como local
    -> -r (remote) Muestra todas las ramas que se encuentran en el repo remoto

git log -> Muestra el historial de commits
    -> [1,9] Este parametro de numero especifica cuantos commits se van a mostrar
