## **Prueba técnia SIROKO**
Prueba técnica para Siroko. Generador de códigos de descuento a partir de un formulario desarrollado con HTML, CSS y JavaScript Vanilla.

👉 [Visita Siroko](https://siroko.vercel.app)

## **ÍNDICE**
- [Instrucciones de Configuración](#instrucciones-de-configuración)
- [Cómo Ejecutar la Aplicación](#cómo-ejecutar-la-aplicación)
- [Cómo Usar la Aplicación](#cómo-usar-la-aplicación)
- [Capturas de Pantalla de la Aplicación](#capturas-de-pantalla-de-la-aplicación)
---

## **Instrucciones de Configuración**
  1. Clonar el repositorio en local:
```bash
git clone https://github.com/jaivial/siroko.git
cd siroko
```

---

## **Cómo Ejecutar la Aplicación**
**Opción 1. Mediante VSCode Live Server Extension:**
Si utilizas VSCode, puedes instalar la extensión Live Server:

  1. Abre la carpeta del proyecto en VSCode:
  ```bash
  code .
  ```
  2. Haz click derecho sobre index.html y selecciona "Open with Live Server".

**Opción 2. Usar un Navegador Localmente:**
También puedes abrir directamente el archivo index.html en tu navegador:

  1. Ve a la carpeta del proyecto.
  2. Haz doble click en index.html para abrir la aplicación en tu navegador.

**Opción 3. Abrir la url de vercel:**

[Visita Siroko](https://siroko.vercel.app)



---

## **Cómo Usar la Aplicación**
1. Formulario de Generación de Código de Descuento:
   - Completa el formulario seleccionando el año de uso y las opciones correspondientes.
   - Se generará un código de descuento dinámico basado en tu selección.
   - Puedes copiar el código al portapapeles.
     

2. Cuenta Regresiva::
   - Tras generar el código de descuento, verás una cuenta atrás de 20 minutos.
   - Si la cuenta regresiva finaliza, se mostrará un mensaje para reiniciar el formulario.
   - Durante la vigencia del código se permitirá la copia al portapapeles haciendo click en el botón copiar.
     

3. Reiniciar el Formulario:
   - Al hacer click en el enlace "Reiniciar", la página se recargará para comenzar de nuevo.
     

---

## **📸 Capturas de Pantalla de la Aplicación**
🔹 Pantalla de Inicio del Formulario
Formulario inicial para seleccionar el año y completar los campos necesarios.

![Formulario incial](public/tutorial1.png)
![Formulario secundario](public/tutorial2.png)

---

🔹 Pantalla de Código Generado
Pantalla que muestra el código de descuento generado y el temporizador de cuenta atrás.

![Código generado](public/tutorial3.png)

---

🔹 Pantalla de Alerta de Tiempo Expirado
Cuando el temporizador llega a cero, se muestra una alerta indicando que el tiempo ha caducado.

![Código expirado](public/tutorial4.png)

---
