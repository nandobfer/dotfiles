import { Draw } from "./screens/Draw"
import { Gallery } from "./screens/Gallery"
import { Home } from "./screens/Home"

export const routes = {
    home: { name: "home", component: Home },
    gallery: { name: "gallery", component: Gallery },
    draw: { name: "draw", component: Draw },
}
