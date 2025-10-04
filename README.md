# mockup-ia-facturacion (con integración OpenAI - modo demo si no hay API key)

## Qué incluye
- Interfaz React + Tailwind (mockup de facturación)
- Chat que puede usar la API de OpenAI si configuras una variable de entorno `REACT_APP_OPENAI_KEY`
- Si **no** configuras la clave, la app entra en **modo demo** (respuestas simuladas)

## Cómo usar en CodeSandbox
1. Crea un nuevo **Sandbox (React)** en https://codesandbox.io
2. Sube este ZIP o copia los archivos en el editor.
3. En CodeSandbox, ve a **Server Control / Environment Variables** y añade (opcional):
   - `REACT_APP_OPENAI_KEY` = tu clave OpenAI (si la tienes)
   - `REACT_APP_OPENAI_MODEL` = `gpt-4o-mini` (opcional, por defecto usa gpt-4o-mini)
4. Ejecuta el sandbox y abre la vista del navegador incorporado.

## Ejecutar localmente
1. Descomprime el ZIP
2. Ejecuta `npm install`
3. Crea un archivo `.env` en la raíz con:
   ```env
   REACT_APP_OPENAI_KEY=sk-...
   REACT_APP_OPENAI_MODEL=gpt-4o-mini
   ```
   *Si no pones la clave, la app usará respuestas demo.*
4. `npm start`

## Notas de seguridad
- **No compartas** tu clave pública. Para producción, usa un backend/proxy para no exponer la clave en el cliente.
- Este proyecto incluye una integración directa en el cliente únicamente para demo/rápida prueba.

