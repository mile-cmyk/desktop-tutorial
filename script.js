const GAME_DATA = {"p1": [{"tema": "ESTABILIZADOR VERTICAL", "pregunta": "¿Qué función cumple principalmente el estabilizador vertical de cola?", "correcta": "Mantener el ángulo de deslizamiento dentro de unos límites", "alt": ["Generar sustentación para mantener la altitud", "Contrarrestar el peso del avión en el eje longitudinal"]}, {"tema": "ESTABILIZADOR VERTICAL", "pregunta": "El \"efecto veleta\" descrito en el manual hace referencia a:", "correcta": "La tendencia del avión a alinearse con el viento relativo", "alt": ["La tendencia del avión a virar hacia la izquierda en el despegue", "La tendencia del timón a volver al centro tras un giro"]}, {"tema": "ESTABILIZADOR VERTICAL", "pregunta": "Si una ráfaga de viento lateral desvía el morro del avión respecto a su dirección de vuelo, ¿qué ocurre inicialmente sin intervención del piloto?", "correcta": "El estabilizador vertical genera una fuerza que tiende a realinear el avión", "alt": ["El avión entra en pérdida de forma inmediata", "El timón de dirección se desvía automáticamente por resortes"]}, {"tema": "ESTABILIZADOR VERTICAL", "pregunta": "¿Qué relación existe entre la distancia del empenaje de cola al centro de gravedad y el efecto de amortiguación de la guiñada?", "correcta": "A mayor distancia, mayor es el efecto amortiguador", "alt": ["No existe relación entre ambas variables", "A mayor distancia, menor es el efecto amortiguador"]}, {"tema": "TIMON DE DIRECCION", "pregunta": "Según el manual, ¿cuál es una de las tareas principales del timón de dirección?", "correcta": "Contrarrestar la guiñada adversa", "alt": ["Generar sustentación adicional en pérdida", "Mantener constante la altitud"]}, {"tema": "TIMON DE DIRECCION", "pregunta": "¿Cómo minimizan los diseñadores el efecto de la guiñada adversa?", "correcta": "Mediante deflexión diferencial de los alerones, entre otros métodos", "alt": ["Aumentando el tamaño de los flaps", "Eliminando el estabilizador vertical"]}, {"tema": "TIMON DE DIRECCION", "pregunta": "Durante el despegue (baja velocidad, mucha potencia), la compensación de diseño contra la guiñada adversa suele ser:", "correcta": "Insuficiente, por lo que el piloto debe aplicar pedal activamente", "alt": ["Excesiva, por lo que el avión guiña al contrario de lo esperado", "Perfecta, no requiere intervención del piloto"]}, {"tema": "TIMON DE DIRECCION", "pregunta": "En un planeo (alta velocidad, poca potencia), ¿qué le puede ocurrir al avión según el texto?", "correcta": "Guiña al contrario de lo esperado por exceso de compensación", "alt": ["Entra en pérdida inmediatamente", "Necesita únicamente el estabilizador vertical, sin pedal"]}, {"tema": "TIMON DE DIRECCION", "pregunta": "¿Por qué diseñar la compensación de guiñada adversa para funcionar bien en todas las velocidades es, según el manual, prácticamente imposible?", "correcta": "Porque la guiñada adversa varía con la velocidad y potencia, y los diseños se ajustan a un régimen concreto (crucero)", "alt": ["Porque el timón de dirección no está conectado a los pedales", "Porque no existe relación entre velocidad, potencia y guiñada adversa"]}, {"tema": "EN UN VIRAJE", "pregunta": "¿Qué provoca la \"resistencia diferencial\" al iniciar un viraje?", "correcta": "La diferencia de sustentación entre el ala que sube y la que baja", "alt": ["La diferencia de temperatura entre ambas alas", "El uso excesivo del compensador"]}, {"tema": "EN UN VIRAJE", "pregunta": "Al iniciar un giro a la derecha, ¿hacia qué lado debe aplicar pedal el piloto para contrarrestar la guiñada adversa?", "correcta": "Hacia la derecha", "alt": ["Hacia la izquierda", "No se necesita pedal en ningún caso"]}, {"tema": "EN UN VIRAJE", "pregunta": "Una vez establecido el avión en un viraje de tasa constante, ¿qué ocurre con la resistencia diferencial entre las alas?", "correcta": "Desaparece, porque ambas alas tienen igual sustentación", "alt": ["Aumenta progresivamente durante todo el giro", "Se invierte de sentido respecto al inicio del giro"]}, {"tema": "EN UN VIRAJE", "pregunta": "Durante un viraje ya establecido, ¿por qué persiste una guiñada adversa aunque no haya resistencia diferencial?", "correcta": "Porque los vectores de sustentación de ambas alas están ligeramente girados, produciendo un momento de fuerza", "alt": ["Porque el timón se ha quedado bloqueado", "Porque el motor produce un par de fuerzas constante"]}, {"tema": "EN UN VIRAJE", "pregunta": "Si un piloto alabea el avión para virar pero no aplica nada de pedal, ¿qué relación existirá entre la dirección de movimiento y hacia donde apunta el morro? . .", "correcta": "El morro apuntará hacia una dirección desplazada respecto a la trayectoria (ángulo de deslizamiento no nulo)", "alt": ["Serán exactamente la misma en todo momento", "El morro apuntará siempre por delante de la trayectoria del giro"]}, {"tema": "EN UN VIRAJE", "pregunta": "Según el manual, ¿qué significa lograr un \"giro coordinado\"?", "correcta": "Mantener el eje longitudinal del avión alineado con la dirección de movimiento, anulando el ángulo de deslizamiento con el timón", "alt": ["Volar con el compensador ajustado a velocidad de crucero", "Utilizar únicamente los alerones sin necesidad del timón"]}, {"tema": "INDICADORES DE LA BOLA", "pregunta": "¿Qué instrumento indica si un viraje es coordinado, derrapado o resbalado?", "correcta": "La bola del coordinador de viraje", "alt": ["El altímetro", "El anemómetro"]}, {"tema": "INDICADORES DE LA BOLA", "pregunta": "En vuelo recto y nivelado, ¿qué fuerza actúa principalmente sobre la bola?", "correcta": "La gravedad", "alt": ["La fuerza centrífuga", "La fuerza centrípeta"]}, {"tema": "INDICADORES DE LA BOLA", "pregunta": "Si en un viraje las fuerzas que actúan sobre la bola están compensadas, ¿qué se observa?", "correcta": "La bola permanece centrada en el tubo", "alt": ["La bola se desplaza hacia el exterior del giro", "La bola oscila sin detenerse"]}, {"tema": "INDICADORES DE LA BOLA", "pregunta": "Según el manual, ¿qué relación concreta está mostrando la bola durante un giro?", "correcta": "La relación entre el régimen de viraje y el grado de alabeo", "alt": ["La relación entre la potencia del motor y la altitud", "La relación entre la velocidad del viento y el rumbo magnético"]}, {"tema": "INDICADORES DE LA BOLA", "pregunta": "Si la bola se desplaza dentro del tubo durante un giro, esto indica que:", "correcta": "Las fuerzas tienen distinta magnitud: el avión derrapa o resbala", "alt": ["El avión está a punto de entrar en pérdida", "El compensador está mal ajustado"]}, {"tema": "DERRAPE", "pregunta": "En un derrape, ¿hacia qué lado se desplaza la bola?", "correcta": "Hacia el lado contrario al viraje", "alt": ["Hacia el lado del viraje", "Permanece centrada"]}, {"tema": "DERRAPE", "pregunta": "¿Qué desequilibrio de fuerzas produce el derrape?", "correcta": "La fuerza centrífuga es mayor que el componente horizontal de sustentación", "alt": ["El componente horizontal de sustentación es mayor que la fuerza centrífuga", "La gravedad supera a la sustentación total"]}, {"tema": "DERRAPE", "pregunta": "¿Cuál de estas situaciones puede provocar un derrape según el manual?", "correcta": "Entrar en un giro con mucha velocidad y poco alabeo", "alt": ["Volar recto y nivelado sin ningún alabeo", "Reducir potencia en aproximación final"]}, {"tema": "DERRAPE", "pregunta": "Para corregir un derrape, el piloto debería:", "correcta": "Disminuir el régimen de viraje, incrementar el alabeo o pisar menos el pedal interior", "alt": ["Aumentar el régimen de viraje y disminuir el alabeo", "Aplicar más pedal exterior sin cambiar el alabeo"]}, {"tema": "RESBALAJE", "pregunta": "En un resbale, ¿hacia qué lado se desplaza la bola?", "correcta": "Hacia el lado del viraje", "alt": ["Hacia el lado contrario al viraje", "Se mantiene centrada"]}, {"tema": "RESBALAJE", "pregunta": "¿Qué fuerza predomina en un resbale?", "correcta": "El componente horizontal de sustentación sobre la fuerza centrífuga", "alt": ["La fuerza centrífuga sobre el componente horizontal de sustentación", "Ninguna, las fuerzas están en equilibrio"]}, {"tema": "RESBALAJE", "pregunta": "¿Cuál de las siguientes situaciones puede causar un resbale?", "correcta": "Entrar en un giro sin aplicar suficiente pedal del lado del giro", "alt": ["Aplicar excesivo pedal interior con poco alabeo", "Volar en línea recta sin alabeo alguno"]}, {"tema": "RESBALAJE", "pregunta": "Para corregir un resbale, el piloto debería:", "correcta": "Aumentar el régimen de viraje, disminuir el alabeo o pisar algo más el pedal interior", "alt": ["Disminuir el régimen de viraje y aumentar el alabeo", "Reducir potencia y extender flaps"]}, {"tema": "RESBALAJE", "pregunta": "¿En qué se diferencia la explicación del resbale/derrape basada en fuerzas horizontales de la basada en gravedad/fuerza centrífuga, según el propio autor del manual?", "correcta": "Son dos formas de explicar el mismo fenómeno; el autor prefiere la de fuerzas horizontales por ser más intuitiva", "alt": ["Son completamente contradictorias y una de ellas es errónea", "La explicación de gravedad/centrífuga solo aplica en vuelo recto y nivelado"]}, {"tema": "DERRAPATAR ES PEOR QUE RESBALAR", "pregunta": "Según el manual, un derrape es:", "correcta": "Un tipo particular de resbale con el flujo de aire no coordinado viniendo del ala levantada", "alt": ["Exactamente lo mismo que un resbale en cualquier condición de vuelo", "Un fenómeno que solo ocurre en vuelo recto y nivelado"]}, {"tema": "DERRAPATAR ES PEOR QUE RESBALAR", "pregunta": "Si un avión entra en pérdida mientras derrapa (con 45° de alabeo y timón interior excesivo), el manual advierte que puede:", "correcta": "Sumar el alabeo de la pérdida al ya existente, llegando a alas en posición vertical", "alt": ["Nivelar las alas automáticamente", "Detener por completo el descenso"]}, {"tema": "DERRAPATAR ES PEOR QUE RESBALAR", "pregunta": "Si un avión entra en pérdida mientras resbala, ¿qué tiende a ocurrir según el texto?", "correcta": "Un súbito alabeo que pone las alas niveladas", "alt": ["Un giro en barrena inevitable", "Una pérdida de control total sin posibilidad de recuperación"]}, {"tema": "DERRAPATAR ES PEOR QUE RESBALAR", "pregunta": "¿Cuál es la regla práctica que el manual recomienda para evitar el riesgo del derrape?", "correcta": "Nunca aplicar pedal (timón) del lado interior al giro en más de lo necesario para mantener la bola centrada", "alt": ["No superar nunca los 45° de alabeo en ningún giro", "Volar siempre con el compensador desactivado"]}, {"tema": "DERRAPATAR ES PEOR QUE RESBALAR", "pregunta": "¿Por qué el manual considera el derrape más peligroso que el resbale precisamente en relación con la pérdida?", "correcta": "Porque en el derrape el alabeo de la pérdida se suma al alabeo existente en el mismo sentido, agravando la actitud", "alt": ["Porque el derrape siempre ocurre a mayor velocidad que el resbale", "Porque en el derrape el motor pierde potencia automáticamente"]}, {"tema": "PROCEDIMIENTO DE LA COORDINACION EN UN GIRO", "pregunta": "Según el manual, ¿qué es lo primero que debe hacer un piloto para aprender buena coordinación?", "correcta": "Mirar a los lados", "alt": ["Consultar el horizonte artificial constantemente", "Reducir la velocidad al mínimo"]}, {"tema": "PROCEDIMIENTO DE LA COORDINACION EN UN GIRO", "pregunta": "Si al alabear en un giro un ala se mueve \"abajo y adelante\" y la otra \"arriba y atrás\", esto indica:", "correcta": "Que no se está aplicando suficiente pedal", "alt": ["Que el piloto aplica demasiado pedal", "Que el avión está en resbale, nunca en derrape"]}, {"tema": "PROCEDIMIENTO DE LA COORDINACION EN UN GIRO", "pregunta": "¿Cómo se juzga, según el manual, la actitud de morro del avión?", "correcta": "Por el ángulo que forma la cuerda del ala con el horizonte lateral", "alt": ["Únicamente por la lectura del altímetro", "Por la posición de la bola en el tubo"]}, {"tema": "PROCEDIMIENTO DE LA COORDINACION EN UN GIRO", "pregunta": "¿Qué habilidad busca desarrollar el piloto al \"sentir el ritmo con el que el morro barre el horizonte\"?", "correcta": "Relacionar visualmente distintos grados de alabeo con el movimiento del morro sobre el horizonte", "alt": ["Calcular la velocidad exacta de pérdida", "Medir la potencia del motor sin instrumentos"]}, {"tema": "RESBALE INTENCIONADO", "pregunta": "¿Cómo se efectúa un resbale intencionado?", "correcta": "Bajando un ala y aplicando pedal del lado contrario", "alt": ["Bajando un ala y aplicando pedal del mismo lado", "Subiendo ambas alas por igual sin usar el timón"]}, {"tema": "RESBALE INTENCIONADO", "pregunta": "¿Cuál es uno de los propósitos de un resbale intencionado según el manual?", "correcta": "Incrementar la tasa de descenso sin aumentar la velocidad de planeo", "alt": ["Aumentar la velocidad de planeo", "Reducir la resistencia aerodinámica del avión"]}, {"tema": "RESBALE INTENCIONADO", "pregunta": "En un aterrizaje con viento cruzado utilizando resbale, el piloto alabea:", "correcta": "Hacia el lado del viento, mientras el timón mantiene el morro alineado con la pista", "alt": ["Hacia el lado contrario al viento, sin usar el timón", "Indistintamente hacia cualquier lado, ya que el timón corrige toda desviación"]}, {"tema": "RESBALE INTENCIONADO", "pregunta": "¿Qué instrumento puede dar lecturas poco fiables durante un resbale, según el manual?", "correcta": "El anemómetro (indicador de velocidad)", "alt": ["El altímetro", "El indicador de dirección"]}, {"tema": "RESBALE INTENCIONADO", "pregunta": "Antes de realizar un resbale con los flaps extendidos, el manual recomienda:", "correcta": "Verificar en el Manual de Operación del aeroplano que no esté prohibido", "alt": ["Hacerlo sin ninguna comprobación previa", "Aplicar siempre menos de 10° de alabeo"]}, {"tema": "RESBALE INTENCIONADO", "pregunta": "En caso de fuego en el motor, ¿por qué puede ser útil un resbale según el texto?", "correcta": "Porque desvía las llamas para que no incidan sobre el cristal de la cabina", "alt": ["Porque apaga el fuego al reducir el flujo de aire", "Porque incrementa la potencia disponible del motor"]}], "p2": [{"tema": "ALTITUD CONSTANTE", "pregunta": "Volar con altura y velocidad constantes requiere el equilibrio de qué pares de fuerzas, según el manual:", "correcta": "Empuje/resistencia y sustentación/peso", "alt": ["Sustentación/resistencia y empuje/peso", "Gravedad/potencia y velocidad/altitud"]}, {"tema": "ALTITUD CONSTANTE", "pregunta": "La velocidad Vy, según el manual, corresponde a:", "correcta": "La velocidad de menor resistencia total", "alt": ["La velocidad de pérdida", "La velocidad máxima estructural"]}, {"tema": "ALTITUD CONSTANTE", "pregunta": "Para acelerar el avión manteniendo el nivel de vuelo, el manual indica que se debe:", "correcta": "Abrir gases y reducir el ángulo de ataque", "alt": ["Abrir gases y aumentar el ángulo de ataque", "Cerrar gases y reducir el ángulo de ataque"]}, {"tema": "ALTITUD CONSTANTE", "pregunta": "Según la fórmula de sustentación L=CL·q·S, si aumenta la velocidad y se quiere mantener L constante, ¿qué debe ocurrir con el coeficiente de sustentación CL?", "correcta": "Debe disminuir de forma proporcional", "alt": ["Debe aumentar en la misma proporción", "Permanece siempre igual, independientemente de la velocidad"]}, {"tema": "ALTITUD CONSTANTE", "pregunta": "¿En qué consisten, \"grosso modo\", los tres regímenes de vuelo nivelado descritos en el manual?", "correcta": "Baja velocidad, crucero y alta velocidad", "alt": ["Ascenso, crucero y descenso", "Despegue, vuelo recto y aterrizaje"]}, {"tema": "ALTITUD CONSTANTE", "pregunta": "Cuando el piloto abre potencia sin cambiar la actitud del avión, ¿qué tiende a ocurrir según el manual?", "correcta": "El avión tiende a levantar el morro y ascender", "alt": ["El avión mantiene exactamente el mismo nivel de vuelo", "El avión tiende a bajar el morro y acelerar sin ascender"]}, {"tema": "ALTITUD CONSTANTE", "pregunta": "Un piloto vuela recto y nivelado a velocidad v1 y desea acelerar a v2 manteniendo la altitud. Si únicamente abre gases sin modificar la actitud, ¿qué resultado describe el manual?", "correcta": "El avión mantendrá v1 pero comenzará a ascender, usando la energía extra para ganar altura", "alt": ["El avión acelerará instantáneamente a v2 sin cambios de altitud", "El avión entrará en pérdida por exceso de potencia"]}, {"tema": "SEGUIR LA DIRECCION DEL VUELO", "pregunta": "Según el manual, ¿cuál es la tarea principal del piloto para volar en una dirección concreta?", "correcta": "Poner el avión en la dirección deseada y mantener las alas niveladas", "alt": ["Vigilar constantemente el altímetro", "Aumentar la potencia de forma constante"]}, {"tema": "SEGUIR LA DIRECCION DEL VUELO", "pregunta": "Si el vuelo es coordinado, ¿qué efecto tiene cualquier grado de alabeo sobre la trayectoria?", "correcta": "Provoca la inclinación de la sustentación y una trayectoria curvilínea", "alt": ["Ninguno, mientras la velocidad sea constante", "Solo afecta a la altitud, no a la dirección"]}, {"tema": "SEGUIR LA DIRECCION DEL VUELO", "pregunta": "Un piloto nota que, sin querer, el avión gira levemente hacia la izquierda mientras cree volar recto. La causa más probable, según este apartado, es:", "correcta": "Un ligero alabeo hacia la izquierda no corregido", "alt": ["Un exceso de potencia en el motor", "Una lectura errónea del anemómetro"]}, {"tema": "SEGUIR LA DIRECCION DEL VUELO", "pregunta": "Para volar recto según este apartado, ¿qué referencia visual resulta clave respecto al avión mismo?", "correcta": "La posición de las alas respecto al horizonte", "alt": ["La posición del compensador", "La lectura exacta del variómetro"]}, {"tema": "TOMAR REFERENCIAS", "pregunta": "¿Cuál es, según el manual, el instrumento más preciso para chequear si se mantiene el nivel de vuelo?", "correcta": "El altímetro", "alt": ["El variómetro", "El horizonte artificial"]}, {"tema": "TOMAR REFERENCIAS", "pregunta": "¿Cuál es el mejor instrumento para mantener un vuelo recto, según el texto?", "correcta": "El indicador de dirección", "alt": ["El anemómetro", "El variómetro"]}, {"tema": "TOMAR REFERENCIAS", "pregunta": "Si el anemómetro muestra que el avión está ganando velocidad sin que el piloto haya cambiado la potencia, esto sugiere que:", "correcta": "La actitud de morro es baja", "alt": ["La actitud de morro es alta", "El altímetro está descalibrado"]}, {"tema": "TOMAR REFERENCIAS", "pregunta": "¿Por qué el variómetro tiene limitaciones para corregir la altitud de forma inmediata?", "correcta": "Porque tarda entre 6 y 8 segundos en dar información fiable, y es poco fiable en aire turbulento", "alt": ["Porque solo funciona a gran altitud", "Porque solo indica velocidad, no altitud"]}, {"tema": "TOMAR REFERENCIAS", "pregunta": "¿Cuándo recomienda el manual calar el indicador de dirección con la brújula?", "correcta": "En el chequeo prevuelo, tras virajes/ascensos/descensos, y de forma regular (p. ej., cada cuarto de hora)", "alt": ["Solo una vez, al comprar el avión", "Únicamente al aterrizar"]}, {"tema": "TOMAR REFERENCIAS", "pregunta": "Ante un viento cruzado que desvía al avión de su punto de destino, el manual menciona dos opciones para el piloto; ¿cuál las describe correctamente?", "correcta": "Corregir seleccionando un rumbo distinto, o mantener un punto de referencia en el horizonte y chequear con el indicador de dirección", "alt": ["Aumentar potencia o reducir potencia según la intensidad del viento", "Activar el compensador y no volver a mirar los instrumentos"]}, {"tema": "CAMBIAR DE VELOCIDAD", "pregunta": "Para incrementar la velocidad manteniendo la altitud, el manual indica que se debe:", "correcta": "Aumentar gases y bajar el morro progresivamente", "alt": ["Aumentar gases y subir el morro", "Cortar gases y bajar el morro"]}, {"tema": "CAMBIAR DE VELOCIDAD", "pregunta": "Para reducir la velocidad manteniendo la altitud, el manual indica que se debe:", "correcta": "Cortar gases y tirar del volante progresivamente", "alt": ["Aumentar gases y tirar del volante", "Cortar gases sin modificar la actitud de morro"]}, {"tema": "CAMBIAR DE VELOCIDAD", "pregunta": "Según el manual, ¿por qué es importante ajustar la velocidad al aproximarse a un aeropuerto con tráfico?", "correcta": "Para mantener distancia de seguridad y evitar que la torre ordene un \"motor y al aire\"", "alt": ["Para ahorrar combustible únicamente", "Porque el reglamento exige una velocidad fija para todos los aviones"]}, {"tema": "CAMBIAR DE VELOCIDAD", "pregunta": "¿Qué papel cumple el compensador según el manual?", "correcta": "Ayuda a mantener la velocidad y/o altura sin esfuerzo constante sobre los mandos, tras haberlos ajustado", "alt": ["Sustituye completamente a los mandos principales de vuelo", "Solo se usa durante el despegue"]}, {"tema": "CAMBIAR DE VELOCIDAD", "pregunta": "¿Por qué advierte el manual contra el \"mal hábito de volar con el compensador\"?", "correcta": "Porque los mandos principales permiten sentir el desarrollo del vuelo a través de las fuerzas aerodinámicas", "alt": ["Porque el compensador se desgasta con el uso", "Porque el compensador solo funciona a baja altitud"]}, {"tema": "CAMBIAR DE VELOCIDAD", "pregunta": "Mantener la altitud con precisión, incluso en zonas de tráfico intenso, es relevante principalmente porque:", "correcta": "Facilita que otros tráficos nos vean y que los veamos a ellos", "alt": ["Es obligatorio legalmente sin excepciones", "Mejora el consumo de combustible del motor"]}, {"tema": "GENERALIDADES", "pregunta": "Con hélice de paso variable, ¿qué regla debe seguir el piloto al aumentar potencia?", "correcta": "Mover primero la palanca de paso de hélice y después la de gases", "alt": ["Mover primero la palanca de gases y después la de paso de hélice", "Mover ambas palancas exactamente al mismo tiempo, sin orden específico"]}, {"tema": "GENERALIDADES", "pregunta": "El \"sobremando\", según el manual, es:", "correcta": "Un defecto común de pilotos poco experimentados que consiste en exagerar los movimientos sobre los mandos", "alt": ["Una técnica avanzada recomendada para vuelo en turbulencia", "El uso correcto del compensador en crucero"]}, {"tema": "GENERALIDADES", "pregunta": "Si el avión tiende a virar levemente a la izquierda por el brazo del piloto apoyado en el volante, ¿qué corrección sugiere el manual?", "correcta": "Aplicar ligera presión en el pedal derecho y mantener las alas niveladas", "alt": ["Reducir potencia inmediatamente", "Extender flaps para estabilizar el vuelo"]}, {"tema": "GENERALIDADES", "pregunta": "¿Cuál es, según el manual, la principal fuente de guiñada adversa en vuelo recto y nivelado con motor de hélice?", "correcta": "El flujo de aire rotatorio de la hélice incidiendo sobre el fuselaje y el empenaje", "alt": ["El viento cruzado exterior", "La fricción del tren de aterrizaje"]}, {"tema": "GENERALIDADES", "pregunta": "¿Qué principio resume la frase \"es mejor realizar un pequeño ajuste ahora que uno mayor más tarde\"?", "correcta": "Conviene corregir pequeñas desviaciones de inmediato en vez de dejar que crezcan", "alt": ["Es preferible esperar a que los errores se acumulen para corregirlos todos juntos", "Los ajustes solo deben hacerse al final de cada vuelo"]}]};

function shuffle(arr){const a=[...arr]; for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]];} return a;}

let state = {
  user:null, part:1, planeIndex:0, pool:[], qIndex:0,
  lives:3, correct:0, total:0, options:[]
};

function showScreen(id){
  document.querySelectorAll('#app > .card').forEach(c=>c.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

function loadUsers(){ try{return JSON.parse(localStorage.getItem('avia_users')||'{}');}catch(e){return {};} }
function saveUsers(u){ try{localStorage.setItem('avia_users', JSON.stringify(u));}catch(e){} }

function doRegister(){
  const u = document.getElementById('reg-user').value.trim();
  const p = document.getElementById('reg-pass').value;
  const err = document.getElementById('reg-err');
  if(!u || !p){ err.textContent='Completa usuario y contraseña.'; return; }
  const users = loadUsers();
  if(users[u]){ err.textContent='Ese usuario ya existe.'; return; }
  users[u]=p; saveUsers(users); err.textContent='';
  state.user=u; goToSelect();
}
function doLogin(){
  const u = document.getElementById('login-user').value.trim();
  const p = document.getElementById('login-pass').value;
  const err = document.getElementById('login-err');
  const users = loadUsers();
  if(!users[u] || users[u]!==p){ err.textContent='Usuario o contraseña incorrectos.'; return; }
  err.textContent=''; state.user=u; goToSelect();
}

function goToSelect(){
  state.part=1;
  document.getElementById('plane2-card').classList.add('locked');
  document.getElementById('select-sub').textContent = 'Modelos disponibles · Parte 1 (punto 5.8)';
  showScreen('scr-select');
}

function selectPlane(i){
  if(i===2 && document.getElementById('plane2-card').classList.contains('locked')) return;
  state.planeIndex=i;
  document.querySelectorAll('.plane-card').forEach(c=>c.classList.remove('selected'));
  document.querySelector('.plane-card[data-plane="'+i+'"]').classList.add('selected');
}

const PLANE_ICONS = ['🛩️','✈️','🚀'];

function startPart(){
  const pool = state.part===1 ? GAME_DATA.p1 : GAME_DATA.p2;
  state.pool = shuffle(pool);
  state.qIndex = 0;
  state.lives = state.part===1 ? 3 : 4;
  state.correct = 0;
  state.total = 0;
  document.getElementById('part-tag').textContent = state.part===1
    ? 'PARTE 1 · PUNTO 5.8 COORDINACIÓN' : 'PARTE 2 · PUNTO 5.9 VUELO RECTO Y NIVELADO';
  showScreen('scr-game');
  renderLives();
  renderQuestion();
}

function renderLives(){
  const el = document.getElementById('lives-display');
  el.innerHTML = '';
  for(let i=0;i<state.lives;i++){ el.innerHTML += '<span>❤️</span>'; }
}

function renderQuestion(){
  const stage = document.getElementById('plane-stage');
  stage.innerHTML = PLANE_ICONS[state.planeIndex];
  stage.className = 'plane-stage';

  if(state.qIndex >= state.pool.length){ endPart(); return; }
  const q = state.pool[state.qIndex];
  document.getElementById('theme-tag').textContent = q.tema || '';
  document.getElementById('question-text').textContent = q.pregunta;
  document.getElementById('score-display').textContent = 'Puntaje: ' + scoreOutOf10();
  document.getElementById('progress-bar').style.width = Math.round((state.qIndex/state.pool.length)*100) + '%';

  const opts = shuffle([{t:q.correcta, ok:true}, {t:q.alt[0], ok:false}, {t:q.alt[1], ok:false}]);
  const wrap = document.getElementById('options-wrap');
  wrap.innerHTML = '';
  opts.forEach(o=>{
    const b = document.createElement('button');
    b.className='option'; b.textContent=o.t;
    b.onclick = ()=>answer(o.ok, b, opts, wrap);
    wrap.appendChild(b);
  });
}

function scoreOutOf10(){
  if(state.total===0) return '0.0';
  return (state.correct/state.total*10).toFixed(1);
}

function answer(ok, btn, opts, wrap){
  wrap.querySelectorAll('.option').forEach(b=>b.disabled=true);
  state.total++;
  if(ok){
    btn.classList.add('correct');
    state.correct++;
    setTimeout(()=>{ state.qIndex++; renderQuestion(); }, 650);
  } else {
    btn.classList.add('wrong');
    wrap.querySelectorAll('.option').forEach(b=>{ if(b.textContent===currentCorrectText()) b.classList.add('correct'); });
    state.lives--;
    renderLives();
    const stage = document.getElementById('plane-stage');
    stage.classList.add('shake');
    if(state.lives<=0){
      setTimeout(()=>crash(), 700);
    } else {
      setTimeout(()=>{ state.qIndex++; renderQuestion(); }, 900);
    }
  }
}

function currentCorrectText(){
  return state.pool[state.qIndex].correcta;
}

function crash(){
  const stage = document.getElementById('plane-stage');
  stage.innerHTML = '<span class="fx pop">💥</span>';
  setTimeout(()=>{
    stage.innerHTML = '<span class="fx pop">🪂</span>';
    setTimeout(()=>{ goToSelect(); }, 1400);
  }, 700);
}

function endPart(){
  const score = scoreOutOf10();
  document.getElementById('pr-title').textContent = state.part===1
    ? 'Parte 1 completada (5.8)' : 'Parte 2 completada (5.9)';
  document.getElementById('pr-score').textContent = score;
  if(state.part===1){
    if(parseFloat(score) >= 5.9){
      document.getElementById('pr-msg').textContent = '¡Alcanzaste 5.9 o más! Desbloqueaste el Jet Élite y la Parte 2.';
      document.getElementById('pr-btn').textContent = 'Elegir avión para Parte 2';
      state.unlocked = true;
    } else {
      document.getElementById('pr-msg').textContent = 'Necesitas al menos 5.9 para desbloquear la Parte 2. Inténtalo de nuevo.';
      document.getElementById('pr-btn').textContent = 'Reintentar Parte 1';
      state.unlocked = false;
    }
  }
  showScreen('scr-partresult');
}

function continueAfterPart(){
  if(state.part===1){
    if(state.unlocked){
      document.getElementById('plane2-card').classList.remove('locked');
      document.getElementById('select-sub').textContent = 'Modelos disponibles · Parte 2 (punto 5.9)';
      state.part=2;
      showScreen('scr-select');
    } else {
      showScreen('scr-select');
    }
  } else {
    finishGame();
  }
}

function finishGame(){
  document.getElementById('final-score').textContent = scoreOutOf10();
  const fp = document.getElementById('final-plane');
  fp.textContent = PLANE_ICONS[state.planeIndex];
  showScreen('scr-final');
  setTimeout(()=>{ fp.classList.add('flyaway'); }, 400);
}

function restartAll(){
  state = { user:state.user, part:1, planeIndex:0, pool:[], qIndex:0, lives:3, correct:0, total:0, options:[] };
  goToSelect();
}

showScreen('scr-login');