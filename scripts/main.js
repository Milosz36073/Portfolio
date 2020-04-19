import Highway from "@dogstudio/highway";
import Fade from "./Fade";
import Down from "./Down";
import Top from "./Top";


const H = new Highway.Core({
    transitions: {
        home: Down,
        proj: Fade,
        about_me: Top
    }
});