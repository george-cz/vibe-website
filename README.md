# Testing the limits

This entire website was coded solely by Claude Sonnet 4.5 after following my prompt, which I just dictated to microphone (hence the typos):
```
" Hey I need to build a really simple website. It's gonna be a one page. It has to be responsive and it should
  have a very nice modern design for the contents. Just put like random lorem ipsum. You should pick whatever
  front and framework you wanna use, but youse probably react. Your task is not to implement everything right
  now, but you should come up with a plan that we will divide in multiple markdown files and then Claude
  instances will autonomously pick the tasks in order and finish them."
```

Claude was able to generate `TASK-WORKFLOW-README.md` file and bunch of task files.

I then followed up with running a single instance of Claude for each task:
`cat TASK-WORKFLOW-README.md task-03.md | claude "Implement this task"`.

Claude was able to build everything in 21 minutes, including the time it took me to manually trigger each step.

See the result [here](https://george-cz.github.io/vibe-website/). The CI/CD pipeline was also built by Claude, took overall 2 minutes including me prompting and updating the config and changing configuration on Github.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
