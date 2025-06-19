# 🚀 Propuesta de Implementación de Integración Continua para TransChile

## 🎯 Objetivo

Implementar un flujo de Integración Continua (CI) que permita a TransChile:

- Asegurar la calidad del código.
- Automatizar pruebas y análisis estático.
- Facilitar futuros procesos de despliegue continuo (CD).

## 🛠️ Herramientas Utilizadas

| Herramienta               | Propósito                                               |
|---------------------------|----------------------------------------------------------|
| **GitHub Actions**        | Automatización del pipeline CI                           |
| **Jest**                  | Framework de testing para Node.js                        |
| **SonarQubeCloud**        | Análisis estático y cobertura del código en la nube      |
| **OWASP Dependency-Check**| Detección de vulnerabilidades en dependencias del proyecto |
| **Node.js & npm**         | Entorno base para el backend                             |

---

## 🔄 Flujo de CI Propuesto

1. Push o Pull Request a ramas `dev` o `main`.
2. Ejecución automática del pipeline CI:
   - 🔄 **Checkout del código**
   - 📦 **Instalación de dependencias (`npm ci`)**
   - 🧪 **Ejecución de tests con cobertura (`npm test`)**
   - 🔍 **Análisis con SonarQube**
   - 🛡️ **Escaneo de dependencias con OWASP Dependency-Check**
3. ✅ Si es la rama `main`, ejecutar paso de despliegue a *staging* (simulado).

---

## 🔬 Validaciones Automatizadas

- ✅ **Pruebas unitarias:** Automatizadas con Jest.
- 📊 **Cobertura:** Reporte `coverage/lcov.info` subido a SonarQube.
- 🧼 **Análisis estático:** Detección de bugs, duplicación y code smells.
- 🔐 **Análisis de dependencias:** Dependency-Check identifica vulnerabilidades conocidas (CVE) en paquetes `npm`.
---

## 🧱 Infraestructura Base

- SonarQubeCloud.
- Repositorio alojado en GitHub.
- GitHub Actions como orquestador del CI.
- **Futuro:** Opciones para Docker o despliegue en la nube.

---

## ✅ Beneficios

- 🚫 Reducción de errores en producción.
- 🔄 Validación continua con cada cambio.
- 📈 Base sólida para crecimiento y entrega continua (CD).
- 📋 Monitoreo de calidad centralizado en SonarCloud.
- 📈 Base sólida para crecer hacia DevOps completo.

---

## 📄 Link del Documento

👉 [https://docs.google.com/document/d/1lpnBnkn0w-vqhRQxHLWxzKuv7FHsRUMbAAt2M8yYs2M/edit?hl=es&tab=t.0]