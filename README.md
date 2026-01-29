AhorroFácil Mobile 📱
Este es un nuevo proyecto de React Native, creado utilizando @react-native-community/cli.

Guía de Inicio
Nota: Asegúrate de haber completado la guía de Configuración del Entorno antes de continuar.

Paso 1: Iniciar Metro
Primero, deberás ejecutar Metro, la herramienta de compilación de JavaScript para React Native.

Para iniciar el servidor de desarrollo de Metro, ejecuta el siguiente comando desde la raíz de tu proyecto:

Bash
# Usando npm
npm start

# O usando Yarn
yarn start
Paso 2: Compilar y ejecutar tu aplicación
Con Metro ejecutándose, abre una nueva ventana de terminal desde la raíz de tu proyecto y utiliza uno de los siguientes comandos para compilar y ejecutar tu aplicación en Android o iOS:

Android
Bash
# Usando npm
npm run android

# O usando Yarn
yarn android
iOS
Para iOS, recuerda instalar las dependencias de CocoaPods (esto solo debe ejecutarse en la primera clonación o después de actualizar dependencias nativas).

La primera vez que crees un proyecto nuevo, ejecuta el instalador de Ruby para instalar CocoaPods:

Bash
bundle install
Luego, y cada vez que actualices tus dependencias nativas, ejecuta:

Bash
bundle exec pod install
Para más información, visita la guía de inicio de CocoaPods.

Bash
# Usando npm
npm run ios

# O usando Yarn
yarn ios
Si todo está configurado correctamente, deberías ver tu nueva aplicación ejecutándose en el Emulador de Android, el Simulador de iOS o en tu dispositivo conectado.

Paso 3: Modificar tu aplicación
¡Ahora que has ejecutado la aplicación con éxito, puedes realizar cambios!

Abre App.tsx en tu editor de texto y realiza modificaciones. Cuando guardes, la aplicación se actualizará automáticamente y reflejará los cambios gracias a Fast Refresh.

Si necesitas forzar una recarga completa:

Android: Presiona la tecla <kbd>R</kbd> dos veces o selecciona "Reload" desde el Menú de Desarrollador (<kbd>Ctrl</kbd> + <kbd>M</kbd> en Windows/Linux).

iOS: Presiona <kbd>R</kbd> en el Simulador de iOS.

🚀 Detalles del Proyecto (Backend e Integración)
Este proyecto ha sido integrado con un servidor local para cumplir con los requisitos de Persistencia de Datos y Control de Acceso.

Servidor: Flask (Python) ejecutándose en el puerto 5000.

Base de Datos: SQLite (ahorro_facil.db).

Endpoints:

POST /register: Para el registro de nuevos usuarios.

POST /login: Para la validación de credenciales.