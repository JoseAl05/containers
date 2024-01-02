FROM node:16

#Ruta en donde se encontrara el codigo fuente de la aplicacion
#Esta ruta está dentro del mismo contenedor de docker. En una distribución de Linux, no en el sistema de archivos del anfitrión.
RUN mkdir -p /home/app
WORKDIR /home/app

#Se copia la ruta actual del codigo de la apliacion que se quiere almacenar, en la ruta creada previamente en el contenedor de docker.
COPY . /home/app
COPY package*.json /home/app


#Se expone un puerto para poder conectarse al contenedor, ya sea otro contenedor o el anfitrión. Se utiliza "5000" ya que la aplicacion se está ejecutando
#en el puerto "5000".
EXPOSE 5000

#Comando para ejecutar la aplicación
CMD ["node","/home/app/index.js"]