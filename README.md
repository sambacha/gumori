# 📓 Gumori [β]

> Minimal Stylesheets & IndieWeb-Compatible Astro Blog Starter.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/importantimport/gumori)

```bash
npx degit importantimport/gumori my-blog && cd my-blog # create a new project in my-blog
pnpm i # if you don't have pnpm installed, run: npm i -g pnpm
```

## 🎨 Minimal stylesheets

Gumori only includes styles to go with [rehype-pretty-code](https://github.com/atomiks/rehype-pretty-code), which means you can use it as the basis for designing your own blog.

If you don't want to write your own styles, you can use the [classless CSS library](https://github.com/dbohdan/classless-css#classless) - for example, Gumori currently import [new.css](https://github.com/xz/new.css) by default.

## 🧱 Project Structure

You'll see the following folders and files:

```bash
/
├── public/
│   └── favicon.png
├── src/
│   ├── config/
│   │   ├── gumori.ts
│   │   └── types.ts
│   └── posts/
│       └── elements.md # example.com/elements
└── package.json
```

Astro looks for `.md` files in the `src/posts/` directory. Each page is exposed as a route based on its file name.

Any static assets, like images, can be placed in the `public/` directory.

## 🖥️ Commands

| Command        | Action                                      |
| :------------- | :------------------------------------------ |
| `pnpm i`       | Installs dependencies                       |
| `pnpm dev`     | Starts local dev server at `localhost:3000` |
| `pnpm build`   | Build your production site to `./dist/`       |
| `pnpm preview` | Preview your build locally, before deploying  |

## 🍴 Variations

The variations of Gumori are listed here, it/they have different features. PR to add yours is also welcome!

- [Gumori You](https://github.com/importantimport/gumori-you) - 🖼️ Bringing Material Design 3 to the Astro Blog.

## 📝 License

This work is free, it comes without any warranty. You can redistribute it and/or modify it under the
terms of the Do What The Fuck You Want To Public License, Version 2,
as published by Sam Hocevar. See the [COPYING](COPYING) file for more details.
