# CloudGuard UI

### Install

Vite requires a recent version of node to run so you may need to install Node, I'm using v20.19.3.

Commands:

1. `mpn ci` (node_modules are in a `.gitignore` file so these should appear after this command)
2. `npm run dev` - This will spin up your localhost: http://localhost:5173/

### Libraries

I've used Redux (Toolkit), react-router, Material UI(MUI) as core components. I would consider moving away from MUI but it gave a big benefit trying to get something ready for a demo.

I would also suggest bringing in React Query for handling APIs inside of components.
