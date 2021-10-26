Hoisting: cómo funcionan los contextos de ejecución en JavaScript (específicamente las fases de creación y ejecución)

`	`Las var se definene {var nombre} en fase de compilacion pero toman su valor en fase de ejecución por lo que si yo las 	llamo antes de incializarlas osea antes del {= "Ivan"} me tira undefined.Porque tienen ambito de función

`	`Let y const se definen en fase de compilación pero no se pueden acceder a ellas sin estar inicializadas, por lo que nos 	tira error. Porque tienen ambito de bloque.

La TDZ = Temporal death zone o Zona muerta temporanea es desde que empieza el ámbito/bloque osea { hasta que se inicializa = "Ivan".

Osea desde que empieza el ambito/bloque hasta que se inicializa la variable
