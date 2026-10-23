## Ce reparăm

Preview-ul din dreapta nu se încarcă pentru că setările site-ului au din nou adresa de bază fixată pe `/pensiunea-dona/` (necesară doar pentru GitHub). În Lovable, site-ul trebuie să pornească de la `/`.

## Pași

1. Adresa de bază devine automată: `/` în Lovable și pe laptop, `/pensiunea-dona/` doar când GitHub construiește site-ul.
2. Navigarea între pagini folosește aceeași adresă de bază, ca linkurile să meargă în ambele locuri.
3. Verificăm că pagina principală se deschide complet în preview.

## Detalii tehnice

- `vite.config.ts`: `base: process.env.BASE_PATH || "/"`, eliminăm pluginul `nitro` duplicat (deja inclus în config-ul Lovable) și păstrăm SPA activ.
- `src/router.tsx`: `basepath: import.meta.env.BASE_URL`.
- Workflow-ul GitHub setează deja `BASE_PATH=/pensiunea-dona/`.
