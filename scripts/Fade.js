import Highway from '@dogstudio/highway';
import { TimelineLite } from 'gsap';


class Fade extends Highway.Transition { in ({ from, to, done }) {
        const tl = new TimelineLite();
        tl.fromTo(to.parentNode.parentNode, 0.5, { overflow: 'hidden', position: 'absolute', left: '0', right: '0', margin: 'auto', width: '2vw' }, { width: '100vw', height: '100vh' })
            .fromTo(to, 0.5, { opacity: '0' }, {
                opacity: '1',
                onComplete: function() {
                    done();
                }
            })

    }
    out({ from, to, done }) {
        const tl = new TimelineLite();
        tl.fromTo(to, 0.2, { opacity: '1' }, {
            opacity: '0',
            onComplete: function() {
                from.remove();
                done();
            }
        })
    }
}

export default Fade;